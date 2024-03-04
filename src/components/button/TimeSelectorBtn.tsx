import { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
type TimeChangeHandler = (hour: string, minute: string) => void;

interface Props {
  onChange: TimeChangeHandler;
  hour: string;
  minute: string;
}
const TimeSelectorBtn = ({ onChange, hour, minute }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const HOURS = Array.from({ length: 24 }, (_, i) => i);
  const MINUTE = Array.from({ length: 60 }, (_, i) => i);

  const handleBtnClick = () => {
    if (hour === '' || minute === '') {
      onChange('00', '00');
    }
    setShow(!show);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className=" relative" ref={ref}>
      <button
        className="btn border  border-gray-300"
        type="button"
        onClick={handleBtnClick}
      >
        {hour === '' || minute === '' ? `${hour}${minute}` : `${hour}시 ${minute}분`}
      </button>
      {show && (
        <div className="absolute flex flex-col items-end bg-white p-10 border border-gray-300 rounded-3xl">
          <div className=" flex ">
            <Swiper
              className="h-24"
              direction={'vertical'}
              slidesPerView={3}
              loop
              loopAdditionalSlides={5}
              slideToClickedSlide
              centeredSlides
              onSlideChange={(s) => {
                onChange((s.realIndex + '').padStart(2, '0'), minute);
              }}
              initialSlide={+hour}
            >
              {HOURS.map((hour) => (
                <SwiperSlide key={hour}>
                  {({ isActive }) => (
                    <div className={`${isActive && 'underline'}`}>
                      {(hour + '').padStart(2, '0')}
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
            <span className="ml-10 mt-8 mr-10">시</span>
            <Swiper
              className="h-24"
              direction={'vertical'}
              slidesPerView={3}
              loop
              loopAdditionalSlides={5}
              slideToClickedSlide
              centeredSlides
              initialSlide={+minute}
              onSlideChange={(s) => {
                onChange(hour, (s.realIndex + '').padStart(2, '0'));
              }}
            >
              {MINUTE.map((hour) => (
                <SwiperSlide key={hour}>
                  {({ isActive }) => (
                    <div className={`${isActive && 'underline'}`}>
                      {(hour + '').padStart(2, '0')}
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
            <span className="ml-10 mt-8">분</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSelectorBtn;
