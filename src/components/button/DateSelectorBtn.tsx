import { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import { formatDate } from '../../utils/date';
import { Value } from '../../type/reactCalendar';
type dateChangeHandler = (date: string) => void;

interface Props {
  onChange: dateChangeHandler;
  date: string;
}

const DateSelectorBtn = ({ onChange, date }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleBtnClick = () => {
    setShow(!show);
  };
  const handleChange = (value: Value) => {
    if (!(value instanceof Date)) {
      return;
    }

    onChange(formatDate(value));
    setShow(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div
      className=""
      ref={ref}>
      <button
        className="btn border border-gray-300 "
        type="button"
        onClick={handleBtnClick}>
        {date}
      </button>
      {show && (
        <div className="absolute">
          <Calendar
            calendarType="gregory"
            next2Label={null}
            prev2Label={null}
            onChange={handleChange}></Calendar>
        </div>
      )}
    </div>
  );
};

export default DateSelectorBtn;
