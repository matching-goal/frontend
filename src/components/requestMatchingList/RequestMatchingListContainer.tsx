'use client';

import { Suspense } from 'react';
import RequestMatchingList from './RequestMatchingList';
import { ErrorBoundary } from 'react-error-boundary';
import { useSession } from 'next-auth/react';

const RequestMatchingListContainer = () => {
  const session = useSession();
  if (!session.data) {
    return <div>정상적이지 않은 접근입니다</div>;
  }
  return (
    <section className=" max-w-screen-md mx-auto min-h-[600px]">
      <h2 className="text-center">요청받은 매칭 리스트</h2>
      <ErrorBoundary
        onError={(e, i) => {
          console.log(e, i);
        }}
        fallback={<div>에러</div>}>
        <Suspense>
          <RequestMatchingList memberId={session.data.user.memberId} />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};

export default RequestMatchingListContainer;
