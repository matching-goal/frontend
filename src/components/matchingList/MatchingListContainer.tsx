'use client';

import React, { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import MatchingList from './MatchingList';
import MatchingAndTeamListFilter from '../filter/MatchingAndTeamListFilter';
import SelectSort from '../util/SelectSort';

const MatchingListContainer = () => {
  const [filterQuery, setFilterQuery] = useState('');
  const [sortQuery, setSortQuery] = useState('');
  const query = filterQuery + sortQuery;
  console.log(query);
  return (
    <main>
      <section className=" max-w-screen-md mx-auto">
        <h1 className="text-center font-bold text-[30px]">매칭 목록</h1>
        <div className="flex justify-between">
          <MatchingAndTeamListFilter
            setQuery={setFilterQuery}
            query={filterQuery}
          />
          <SelectSort setQuery={setSortQuery} />
        </div>
        <ErrorBoundary fallback={<h1>데이터 패칭 중 에러 발생</h1>}>
          <Suspense fallback={<div>로딩중~</div>}>
            <MatchingList query={query} />
          </Suspense>
        </ErrorBoundary>
      </section>
    </main>
  );
};

export default MatchingListContainer;
