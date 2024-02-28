import { useState } from 'react';

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

  const HOURS = Array.from({ length: 24 }, (_, i) => i);
  const MiNUTE = Array.from({ length: 60 }, (_, i) => i);

  const handleBtnClick = () => {
    setShow(!show);
  };

  return (
    <div className=" relative">
      <button className="btn border mb-5 border-gray-300" onClick={handleBtnClick}>
        {`${hour}시 ${minute}분`}
      </button>
      {show && (
        <div className="absolute flex flex-col items-end">
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
              {MiNUTE.map((hour) => (
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