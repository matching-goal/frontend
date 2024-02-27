import { Suspense } from 'react';
import Matching from './Matching';

const MatchingContainer = () => {
  return (
    <main className=" m-navH max-w-screen-md mx-auto ">
      <Suspense fallback={<div>로딩중...</div>}>
        <Matching></Matching>
      </Suspense>
    </main>
  );
};

export default MatchingContainer;
