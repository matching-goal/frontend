'use client';

import { useRef, useState } from 'react';
import DateSelectorBtn from '../button/DateSelectorBtn';
import TimeSelectorBtn from '../button/TimeSelectorBtn';
import { dateFormatRegex } from '@/utils/regex';

interface Props {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const MatchingAndTeamListFilter = ({ setQuery, query }: Props) => {
  const [date, setDate] = useState('날짜 선택');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

  return (
    <section>
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
            className="btn border border-gray-300 ml-5"
            onClick={() => {
              let newQuery = '';
              dateFormatRegex.test(date) && (newQuery += `&date=${date}`);
              hour !== '' && minute !== '' && (newQuery += `&time=${hour}:${minute}`);
              setQuery(newQuery);
            }}>
            필터 적용
          </button>
        </div>
      </div>
    </section>
  );
};

export default MatchingAndTeamListFilter;
