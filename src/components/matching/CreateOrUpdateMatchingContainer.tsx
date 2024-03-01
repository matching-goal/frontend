import { useState } from 'react';
import DateSelectorBtn from '../button/DateSelectorBtn';
import TimeSelectorBtn from '../button/TimeSelectorBtn';
import AddressSelectorBtn from '../button/AddressSelectorBtn';
import ImageUploadBtn from '../button/ImgUploadBtn';
import { Carousel } from 'react-responsive-carousel';
import { CreateMatching } from '../../interface/matching';
import useCreateMatching from '../../mutations/useCreateMatching';

const CreateOrUpdateMatchingContainer = () => {
  const [hour, setHour] = useState<string>('00');
  const [minute, setMinute] = useState<string>('00');
  const [date, setDate] = useState<string>('날짜 선택');
  const [address, setAddress] = useState<string>('구장 주소 선택');
  const [images, setImages] = useState<Array<string>>([]);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const matchingCreateMutation = useCreateMatching();

  return (
    <article className="mt-20 max-w-screen-md mx-auto ">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (date === '날짜 선택') {
            alert('날짜를 지정해주세요');
            return;
          }
          if (address === '구장 주소 선택') {
            alert('구장 위치를 선택해주세요');
            return;
          }
          const data: CreateMatching = {
            title,
            content,
            img: images,
            memberId: 'a33',
            matchDate: `${date} ${hour}시 ${minute}분`,
            stadium: address,
          };

          matchingCreateMutation.mutate(data);
        }}
      >
        <section className="flex justify-between items-center mb-5">
          <div className="flex relative items-center">
            <div className="mr-5">
              <DateSelectorBtn
                onChange={(date) => {
                  setDate(date);
                }}
                date={date}
              ></DateSelectorBtn>
            </div>
            <div className="mr-5">
              <TimeSelectorBtn
                onChange={(hour, minute) => {
                  setHour(hour);
                  setMinute(minute);
                }}
                hour={hour}
                minute={minute}
              ></TimeSelectorBtn>
            </div>
            <div>
              <ImageUploadBtn setImages={setImages} images={images}></ImageUploadBtn>
            </div>
          </div>
          <div>
            <AddressSelectorBtn
              address={address}
              setAddress={setAddress}
            ></AddressSelectorBtn>
          </div>
        </section>
        <section>
          <input
            className="text-3xl outline-none border border-b-black pb-2 w-full border-white"
            placeholder="제목을 입력해주세요"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </section>
        <section className="min-h-[450px] mt-3">
          <textarea
            className="w-full h-[350px] outline-none "
            placeholder="내용을 입력해주세요"
            required
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </section>
        <section className="flex justify-between items-center">
          <div>
            <Carousel showArrows={true} infiniteLoop={true} className="w-[200px]">
              {images.map((image, idx) => (
                <div key={idx} className=" w-full h-[150px]">
                  <img src={image} alt="" className="w-full h-full" />
                </div>
              ))}
            </Carousel>
          </div>
          <div>
            <button
              type="submit"
              className="w-[130px] h-[30px] border rounded-2xl border-black"
            >
              글 작성
            </button>
          </div>
        </section>
      </form>
    </article>
  );
};

export default CreateOrUpdateMatchingContainer;
