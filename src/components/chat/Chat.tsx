'use client';
import { client } from '@/chat/stomp';
import { IMessage } from '@stomp/stompjs';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import ChatLog from './ChatLog';
import { ResChatBody } from '@/interface/chat';

import useGetChatLog from '@/queries/useGetChatLog';
import { flushSync } from 'react-dom';

const Chat = () => {
  const session = useSession();
  const chatRoomId = useParams().id as string;
  const [chatLog, setChatLog] = useState<ResChatBody[]>([]);

  const { data } = useGetChatLog(chatRoomId);

  const inputRef = useRef<HTMLInputElement>(null);
  const chatLogObserveRef = useRef<HTMLDivElement>(null);

  const callback = (message: IMessage) => {
    if (message.body) {
      const msg: ResChatBody = JSON.parse(message.body);
      flushSync(() => {
        setChatLog((chatLog) => [...chatLog, msg]);
      });
    }
  };

  const disConnect = () => {
    console.log('연결 종료!');
    if (client === null) {
      return;
    }
    client.deactivate();
  };

  const sendChat = () => {
    const message = inputRef.current?.value;
    if (!message) return;

    client.publish({
      destination: `/pub/chat.message.${chatRoomId}`,
      body: JSON.stringify({
        memberId: session.data?.user.memberId,
        nickname: session.data?.user.nickname,
        message,
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
    connect();

    return () => {
      disConnect();
    };
  }, [chatRoomId]);

  useEffect(() => {
    setChatLog(data);
  }, [chatRoomId, data]);
  useEffect(() => {
    chatLogObserveRef.current?.scrollIntoView();
  }, [chatLog]);

  if (!session.data) return <div>로그인 에러</div>;
  return (
    <div className="max-w-screen-md mx-auto ">
      <section className="p-5 ">
        <ChatLog
          ref={chatLogObserveRef}
          chatLog={chatLog}
          memberId={session.data.user.memberId}></ChatLog>
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
