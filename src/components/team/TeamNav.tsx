'use client';

import { useState } from 'react';
import TeamCalendar from './TeamCalendar';
import './calendar.css';
const TeamNav = () => {
  const [active, setIsActive] = useState<'calendar' | 'matchingList' | 'review'>(
    'calendar'
  );
  return (
    <div className="">
      <nav className="w-full border border-t-black border-b-black h-[50px]">
        <ul className="max-w-screen-sm mx-auto flex items-center h-full">
          <li
            className={`${active === 'calendar' && 'font-bold underline'} mr-5`}
            onClick={() => {
              setIsActive('calendar');
            }}
          >
            일정 캘린더
          </li>
          <li
            className={`${active === 'matchingList' && 'font-bold underline'} mr-5`}
            onClick={() => {
              setIsActive('matchingList');
            }}
          >
            내 경기 목록
          </li>
          <li
            className={`${active === 'review' && 'font-bold underline'}`}
            onClick={() => {
              setIsActive('review');
            }}
          >
            한줄평 목록
          </li>
        </ul>
      </nav>
      {active === 'calendar' && <TeamCalendar></TeamCalendar>}
    </div>
  );
};

export default TeamNav;
