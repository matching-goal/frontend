'use client';

import { Suspense, useState } from 'react';
import TeamCalendar from './TeamCalendar';

import TeamMatchingHistoryList from './teamHistory/TeamHistoryList';
import { ErrorBoundary } from 'react-error-boundary';
const TeamNav = () => {
  const [active, setIsActive] = useState<'calendar' | 'matchingList' | 'review'>(
    'calendar'
  );
  return (
    <div className="">
      <nav className="w-full mb-5 flex justify-center">
        <ul className="max-w-screen-sm mx-auto flex items-center h-full tabs tabs-bordered transition-all">
          <li
            className={`${
              active === 'calendar' && 'tab-active'
            } tab transition-all duration-300`}
            onClick={() => {
              setIsActive('calendar');
            }}>
            일정 캘린더
          </li>
          <li
            className={`${
              active === 'matchingList' && 'tab-active'
            } tab transition-all duration-300`}
            onClick={() => {
              setIsActive('matchingList');
            }}>
            지난 경기 목록
          </li>
          {/* <li
            className={`${
              active === 'review' && 'tab-active'
            } tab transition-all duration-300`}
            onClick={() => {
              setIsActive('review');
            }}>
            한줄평 목록
          </li> */}
        </ul>
      </nav>
      <ErrorBoundary fallback={<div>상세정보 로딩중 에러 발생</div>}>
        {active === 'calendar' && <TeamCalendar />}
        {active === 'matchingList' && <TeamMatchingHistoryList />}
      </ErrorBoundary>
    </div>
  );
};

export default TeamNav;
