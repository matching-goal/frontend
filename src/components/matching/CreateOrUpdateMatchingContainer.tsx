import { useState } from 'react';
import DateSelectorBtn from '../button/DateSelectorBtn';
import TimeSelectorBtn from '../button/TimeSelectorBtn';

const CreateOrUpdateMatchingContainer = () => {
  const [hour, setHour] = useState<string>('00');
  const [minute, setMinute] = useState<string>('00');
  const [date, setDate] = useState<string>('날짜 선택');
  return (
    <article className="mt-32 max-w-screen-md mx-auto">
      <section>
        <div className="flex relative">
          <div className="mr-5">
            <DateSelectorBtn
              onChange={(date) => {
                setDate(date);
              }}
              date={date}
            ></DateSelectorBtn>
          </div>
          <div>
            <TimeSelectorBtn
              onChange={(hour, minute) => {
                setHour(hour);
                setMinute(minute);
              }}
              hour={hour}
              minute={minute}
            ></TimeSelectorBtn>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-3xl"></h1>
      </section>

      <section className="min-h-[450px] mt-3">
        <p></p>
      </section>
      <section className="flex justify-between items-center">
        <div>
          <p className="mb-4"></p>
          <p></p>
        </div>
        <div>
          <button className="w-[130px] h-[30px] border rounded-2xl border-black mr-4">
            1:1 채팅
          </button>
          <button className="w-[130px] h-[30px] border rounded-2xl border-black">
            매칭 신청
          </button>
        </div>
      </section>
    </article>
  );
};

export default CreateOrUpdateMatchingContainer;
