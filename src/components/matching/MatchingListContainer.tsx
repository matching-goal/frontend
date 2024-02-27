import { Suspense } from 'react';
import MatchingList from './MatchingList';

const MatchingListContainer = () => {
  return (
    <main>
      <section className="max-w-screen-lg mx-auto">
        <h1 className="text-center font-bold text-[30px]">매칭 목록</h1>
        <Suspense fallback={<div>로딩중~</div>}>
          <MatchingList></MatchingList>
        </Suspense>
      </section>
    </main>
  );
};

export default MatchingListContainer;
