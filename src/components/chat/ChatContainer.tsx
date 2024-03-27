'use client';

import { useSession } from 'next-auth/react';
import Chat from './Chat';
import ChatNav from './ChatNav';
import { useParams } from 'next/navigation';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';

const ChatContainer = () => {
  const session = useSession();
  const chatRoomId = useParams().id as string;

  if (!session.data) {
    return <div>정상적이지 않은 접근입니다</div>;
  }

  return (
    <div>
      <ErrorBoundary fallback={<div>채팅로그 에러</div>}>
        <Suspense>
          <Chat
            nickname={session.data.user.nickname}
            chatRoomId={chatRoomId}
            memberId={session.data.user.memberId}
            memberImg={session.data.user.imageUrl}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ChatContainer;
