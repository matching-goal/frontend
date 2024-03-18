import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Matching from './Matching';

const MatchingContainer = () => {
  return (
    <main className=" m-navH max-w-screen-md mx-auto ">
      <ErrorBoundary fallback={<h1>데이터 패칭 중 에러 발생</h1>}>
        <Suspense fallback={<div>로딩중</div>}>
          <Matching></Matching>
        </Suspense>
      </ErrorBoundary>
    </main>
  );
};

export default MatchingContainer;
