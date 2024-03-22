'use client';

import { useSession } from 'next-auth/react';
import Chat from './Chat';
import ChatNav from './ChatNav';
import BROKER_URL from '@/constants/brokerUrl';
import * as StompJs from '@stomp/stompjs';
import { useParams } from 'next/navigation';

const ChatContainer = () => {
  const session = useSession();
  const chatRoomId = useParams().id as string;
  if (!session.data) {
    return <div>정상적이지 않은 접근입니다</div>;
  }
  const client = new StompJs.Client({
    brokerURL: BROKER_URL,
    connectHeaders: {
      login: 'user',
      chatRoomId,
      memberId: session.data.user.memberId,
    },
    debug: (str) => console.log(str),
    reconnectDelay: 5000,
  });
  console.log(client.connectHeaders);

  return (
    <div>
      <ChatNav />
      <Chat
        client={client}
        user={session.data.user}
        chatRoomId={chatRoomId}
      />
    </div>
  );
};

export default ChatContainer;
