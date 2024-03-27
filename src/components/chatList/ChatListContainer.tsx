'use client';

import { useSession } from 'next-auth/react';
import ChatList from './ChatList';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const ChatListContainer = () => {
  const session = useSession();
  if (!session.data) {
    return <div>정상적이지 않은 접근입니다</div>;
  }
  return (
    <div className="max-w-screen-md mx-auto min-h-[600px]">
      <h2 className="text-center">채팅 리스트</h2>
      <ErrorBoundary fallback={<div>에러</div>}>
        <Suspense>
          <ChatList memberId={session.data.user.memberId} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ChatListContainer;
