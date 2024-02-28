import { useState } from 'react';
import Calendar from 'react-calendar';
import { formatDate } from '../../utils/date';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const DateSelectorBtn = () => {
  const [show, setShow] = useState<boolean>(false);
  const [date, setDate] = useState<string>('날짜 선택');
  const handleBtnClick = () => {
    setShow(!show);
  };
  const handleChange = (value: Value) => {
    if (!(value instanceof Date)) {
      return;
    }

    setDate(formatDate(value));
    setShow(false);
  };

  return (
    <div className=" relative">
      <button className="btn border border-gray-300" onClick={handleBtnClick}>
        {date}
      </button>
      {show && (
        <Calendar
          calendarType="gregory"
          next2Label={null}
          prev2Label={null}
          className=" absolute"
          onChange={handleChange}
        ></Calendar>
      )}
    </div>
  );
};

export default DateSelectorBtn;
