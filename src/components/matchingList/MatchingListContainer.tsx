import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const MatchingList = React.lazy(() => import('./MatchingList'));

const MatchingListContainer = () => {
  return (
    <main>
      <section className=" max-w-screen-md mx-auto">
        <h1 className="text-center font-bold text-[30px]">매칭 목록</h1>
        <ErrorBoundary fallback={<h1>데이터 패칭 중 에러 발생</h1>}>
          <Suspense fallback={<div>로딩중~</div>}>
            <MatchingList></MatchingList>
          </Suspense>
        </ErrorBoundary>
      </section>
    </main>
  );
};

export default MatchingListContainer;
