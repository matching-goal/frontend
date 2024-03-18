'use client';

import React, { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import DateSelectorBtn from '../button/DateSelectorBtn';
import TimeSelectorBtn from '../button/TimeSelectorBtn';
import { dateFormatRegex } from '../../utils/regex';
import MatchingList from './MatchingList';

const MatchingListContainer = () => {
  const [date, setDate] = useState('날짜 선택');
  const [hour, setHour] = useState('시간 선택');
  const [minute, setMinute] = useState('');
  const [query, setQuery] = useState('');
  return (
    <main>
      <section className=" max-w-screen-md mx-auto">
        <h1 className="text-center font-bold text-[30px]">매칭 목록</h1>
        <div className="flex justify-between">
          <div className="flex">
            <div className="mr-5">
              <DateSelectorBtn
                date={date}
                onChange={(e) => {
                  setDate(e);
                }}></DateSelectorBtn>
            </div>
            <div>
              <TimeSelectorBtn
                hour={hour}
                minute={minute}
                onChange={(hour, minute) => {
                  setHour(hour);
                  setMinute(minute);
                }}></TimeSelectorBtn>
            </div>
          </div>
          <div>
            <button
              className="btn border border-gray-300"
              onClick={() => {
                let query = '';
                dateFormatRegex.test(date) && (query += `date=${date}`);
                setQuery(query);
              }}>
              필터 적용
            </button>
          </div>
        </div>
        <ErrorBoundary fallback={<h1>데이터 패칭 중 에러 발생</h1>}>
          <Suspense fallback={<div>로딩중~</div>}>
            <MatchingList query={query}></MatchingList>
          </Suspense>
        </ErrorBoundary>
      </section>
    </main>
  );
};

export default MatchingListContainer;
