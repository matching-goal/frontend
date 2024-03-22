'use client';
import { IMessage } from '@stomp/stompjs';
import { useEffect, useState, useRef } from 'react';
import ChatLog from './ChatLog';
import { ResChatBody } from '@/interface/chat';
import useGetChatLog from '@/queries/useGetChatLog';
import { flushSync } from 'react-dom';
import * as StompJs from '@stomp/stompjs';
import { User } from '@/interface/next-auth';

interface Props {
  client: StompJs.Client;
  user: User;
  chatRoomId: string;
}

const Chat = ({ chatRoomId, client, user }: Props) => {
  const [chatLog, setChatLog] = useState<ResChatBody[]>([]);
  const { data } = useGetChatLog(chatRoomId);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatLogObserveRef = useRef<HTMLDivElement>(null);

  const callback = (message: IMessage) => {
    if (message.body) {
      const msg: ResChatBody = JSON.parse(message.body);
      console.log(msg);
      flushSync(() => {
        setChatLog((chatLog) => [...chatLog, msg]);
      });
    }
  };

  const sendChat = () => {
    const message = inputRef.current?.value;
    if (!message) return;

    client.publish({
      destination: `/pub/chat.message.${chatRoomId}`,
      body: JSON.stringify({
        memberId: user.memberId,
        nickname: user.nickname,
        message,
        receiver: '',
      }),
    });

    inputRef.current.value = '';
  };

  useEffect(() => {
    const connect = () => {
      try {
        client.onConnect = () => {
          client.subscribe(`/exchange/chat.exchange/room.${chatRoomId}`, callback);
        };
        client.activate();
      } catch (e) {
        console.error(`${e}`);
      }
    };
    const disConnect = () => {
      console.log('연결 종료!');
      if (client === null) {
        return;
      }
      client.deactivate();
    };
    connect();

    return () => {
      disConnect();
    };
  }, [chatRoomId, client]);

  useEffect(() => {
    setChatLog(data);
  }, [chatRoomId, data]);
  useEffect(() => {
    chatLogObserveRef.current?.scrollIntoView();
  }, [chatLog]);

  return (
    <div className="max-w-screen-md mx-auto ">
      <section className="p-5 ">
        <ChatLog
          ref={chatLogObserveRef}
          chatLog={chatLog}
          memberId={user.memberId}></ChatLog>
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
  );
};

export default Chat;
