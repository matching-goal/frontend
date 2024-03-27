'use client';
import { IMessage } from '@stomp/stompjs';
import { useEffect, useState, useRef } from 'react';
import ChatLog from './ChatLog';
import { chatMessage } from '@/interface/chat';
import useGetChatLog from '@/queries/useGetChatLog';
import { flushSync } from 'react-dom';
import * as StompJs from '@stomp/stompjs';
import BROKER_URL from '@/constants/brokerUrl';
import Image from 'next/image';

interface Props {
  nickname: string;
  memberId: string;
  chatRoomId: string;
  memberImg: string;
}

const Chat = ({ chatRoomId, nickname, memberId, memberImg }: Props) => {
  const [chatLog, setChatLog] = useState<chatMessage[]>([]);
  const { data } = useGetChatLog(chatRoomId);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatLogObserveRef = useRef<HTMLDivElement>(null);
  const [client, setClient] = useState<StompJs.Client>();

  const callback = (message: IMessage) => {
    if (message.body) {
      const msg: chatMessage = JSON.parse(message.body);
      flushSync(() => {
        setChatLog((chatLog) => [...chatLog, msg]);
      });
    }
  };

  const receiver = data.chatRoomMemberInfo.filter(
    (member) => memberId !== `${member.memberId}`
  )[0];
  const receiverId = receiver.memberId;

  const sendChat = () => {
    const message = inputRef.current?.value;
    if (!message) return;
    if (!client) {
      return;
    }
    client.publish({
      destination: `/pub/chat.message.${chatRoomId}`,
      body: JSON.stringify({
        memberId: memberId,
        nickname: nickname,
        message,
        receiverId,
      }),
    });

    inputRef.current.value = '';
  };

  useEffect(() => {
    const client = new StompJs.Client({
      brokerURL: BROKER_URL,
      connectHeaders: {
        chatRoomId,
        memberId: memberId,
      },
      debug: (str) => console.log(str),
      disconnectHeaders: {
        chatRoomId,
        memberId: memberId,
      },
      reconnectDelay: 5000,
    });
    const connect = () => {
      try {
        client.onConnect = () => {
          client.subscribe(`/exchange/chat.exchange/room.${chatRoomId}`, callback);
        };
        client.activate();
        setClient(client);
      } catch (e) {
        console.error(`${e}`);
      }
    };

    const disConnect = () => {
      console.log('연결 종료!');
      if (!client) {
        return;
      }
      client.deactivate();
    };
    if (memberId && chatRoomId) {
      connect();
    }

    return () => {
      disConnect();
    };
  }, [chatRoomId, memberId]);

  useEffect(() => {
    setChatLog(data.chatMessageList);
  }, [data]);
  useEffect(() => {
    chatLogObserveRef.current?.scrollIntoView();
  }, [chatLog]);

  return (
    <div>
      <header className="p-2 min-h-10 bg-green-300 ">
        <div className="max-w-screen-md mx-auto flex justify-start items-center">
          <Image
            src={'/exit.svg'}
            alt="exit"
            width={30}
            height={30}
            className=" cursor-pointer"></Image>

          <h2 className="ml-5">{`${receiver.memberNickname} 님 과의 대화`}</h2>
        </div>
      </header>
      <div className="max-w-screen-md mx-auto ">
        <section className="p-5 ">
          <ChatLog
            ref={chatLogObserveRef}
            chatLog={chatLog}
            memberId={memberId}
            receiverImg={receiver.memberImgUrl}
            memberImg={memberImg}></ChatLog>
        </section>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            sendChat();
          }}>
          <input
            className="input input-bordered input-sm w-full"
            type="text"
            ref={inputRef}
          />
        </form>
      </div>
    </div>
  );
};

export default Chat;
