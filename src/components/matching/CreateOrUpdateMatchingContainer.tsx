import { useState } from 'react';
import DateSelectorBtn from '../button/DateSelectorBtn';
import TimeSelectorBtn from '../button/TimeSelectorBtn';
import AddressSelectorBtn from '../button/AddressSelectorBtn';

const CreateOrUpdateMatchingContainer = () => {
  const [hour, setHour] = useState<string>('00');
  const [minute, setMinute] = useState<string>('00');
  const [date, setDate] = useState<string>('날짜 선택');
  const [address, setAddress] = useState<string>('');

  return (
    <article className="mt-20 max-w-screen-md mx-auto ">
      <section className="flex justify-between items-center">
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
        <div>
          <AddressSelectorBtn setAddress={setAddress}></AddressSelectorBtn>
        </div>
      </section>
      <section>
        <input
          className="text-3xl outline-none border border-b-black pb-2 w-full"
          placeholder="제목을 입력해주세요"
        />
      </section>
      <section className="min-h-[450px] mt-3">
        <textarea
          className="w-full h-[350px] outline-none "
          placeholder="내용을 입력해주세요"
        ></textarea>
      </section>
      <section className="flex justify-between items-center">
        <div>
          <p className="mb-4"></p>
          <p></p>
        </div>
        <div>
          <button className="w-[130px] h-[30px] border rounded-2xl border-black">
            글 작성
          </button>
        </div>
      </section>
    </article>
  );
};

export default CreateOrUpdateMatchingContainer;
