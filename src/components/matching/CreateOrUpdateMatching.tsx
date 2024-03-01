import { useState } from 'react';
import DateSelectorBtn from '../button/DateSelectorBtn';
import TimeSelectorBtn from '../button/TimeSelectorBtn';
import AddressSelectorBtn from '../button/AddressSelectorBtn';
import ImageUploadBtn from '../button/ImgUploadBtn';
import { Carousel } from 'react-responsive-carousel';
import { ViewMatching } from '../../interface/matching';
import useCreateMatching from '../../mutations/matching/useCreateMatching';
import usePatchMatching from '../../mutations/matching/usePatchMatching';
interface Props {
  matching?: ViewMatching;
}

const CreateOrUpdateMatching = ({ matching }: Props) => {
  const type = matching ? 'update' : 'create';
  const [hour, setHour] = useState<string>(
    matching ? matching.matchingTime.split(':')[0] : '00'
  );
  const [minute, setMinute] = useState<string>(
    matching ? matching.matchingTime.split(':')[1] : '00'
  );
  const [date, setDate] = useState<string>(
    matching ? matching.matchingDate : '날짜 선택'
  );
  const [address, setAddress] = useState<string>(
    matching ? matching.stadium : '구장 주소 선택'
  );
  const [images, setImages] = useState<Array<string>>(matching ? matching.img : []);
  const [title, setTitle] = useState<string>(matching ? matching.title : '');
  const [content, setContent] = useState<string>(matching ? matching.content : '');

  const CreateMatchingMutation = useCreateMatching();
  const PatchMatchingMutation = usePatchMatching();
  return (
    <>
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
      <form
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
          if (type === 'create') {
            const data = {
              title,
              content,
              img: images,
              memberId: 'a33',
              matchingDate: date,
              matchingTime: `${hour}:${minute}`,
              stadium: address,
            };
            CreateMatchingMutation.mutate(data);
          }
          if (type === 'update') {
            const data = {
              title,
              content,
              img: images,
              matchingDate: date,
              matchingTime: `${hour}:${minute}`,
              stadium: address,
            };
            PatchMatchingMutation.mutate({ data, id: matching?.id as string });
          }
        }}
      >
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
          <div className="h-[150px]">
            <Carousel
              showArrows={false}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
              selectedItem={images.length - 1}
              className="w-[200px] "
            >
              {images.map((image, idx) => (
                <div key={idx} className=" w-full h-[150px] relative">
                  <img src={image} alt="" className="w-full h-full -z-20" />
                  <button
                    type="button"
                    className=" absolute  text-white right-1 top-1 rounded-full bg-black h-8 w-8 opacity-60 flex items-center justify-center"
                    onClick={() => {
                      setImages(images.filter((_, filterIdx) => idx !== filterIdx));
                    }}
                  >
                    <div className="">X</div>
                  </button>
                </div>
              ))}
            </Carousel>
          </div>
          <div>
            <button
              type="submit"
              className="w-[130px] h-[30px] border rounded-2xl border-black"
              disabled={
                type === 'create'
                  ? CreateMatchingMutation.isPending
                  : PatchMatchingMutation.isPending
              }
            >
              {type === 'update' ? '글 수정' : '글 작성'}
            </button>
          </div>
        </section>
      </form>
    </>
  );
};

export default CreateOrUpdateMatching;
