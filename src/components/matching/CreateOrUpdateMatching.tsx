'use client';
import { useState } from 'react';
import DateSelectorBtn from '../button/DateSelectorBtn';
import TimeSelectorBtn from '../button/TimeSelectorBtn';
import AddressSelectorBtn from '../button/AddressSelectorBtn';
import ImageUploadBtn from '../button/ImgUploadBtn';
import { Carousel } from 'react-responsive-carousel';
import { PatchMatching, ViewMatching } from '../../interface/matching';
import useCreateMatching from '../../mutations/matching/useCreateMatching';
import usePatchMatching from '../../mutations/matching/usePatchMatching';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

interface Props {
  matching?: ViewMatching;
}

const CreateOrUpdateMatching = ({ matching }: Props) => {
  const type = matching ? 'update' : 'create';
  const session = useSession();

  const [hour, setHour] = useState<string>(matching ? matching.time.split(':')[0] : '');
  const [minute, setMinute] = useState<string>(
    matching ? matching.time.split(':')[1] : ''
  );
  const [date, setDate] = useState<string>(matching ? matching.date : '날짜 선택');
  const [address, setAddress] = useState<string>(
    matching ? `${matching.region} - ${matching.stadium}` : '구장 주소 선택'
  );
  const [previewImages, setPreviewImages] = useState<Array<string>>(
    matching ? (matching.imgUrls ? matching.imgUrls : []) : []
  );
  const [imgUrls, setImgUrls] = useState<Array<string>>(
    matching ? (matching.imgUrls ? matching.imgUrls : []) : []
  );
  const [title, setTitle] = useState<string>(matching ? matching.title : '');
  const [content, setContent] = useState<string>(matching ? matching.content : '');

  const createMatchingMutation = useCreateMatching();
  const patchMatchingMutation = usePatchMatching();

  if (!session.data?.user) {
    return <div></div>;
  }
  return (
    <>
      <section className="flex justify-between items-center mb-5">
        {type === 'create' && (
          <section>
            <div className="flex relative items-center w-full">
              <div className="mr-5">
                <DateSelectorBtn
                  onChange={(date) => {
                    setDate(date);
                  }}
                  date={date}></DateSelectorBtn>
              </div>
              <div className="mr-5">
                <TimeSelectorBtn
                  onChange={(hour, minute) => {
                    setHour(hour);
                    setMinute(minute);
                  }}
                  hour={hour}
                  minute={minute}></TimeSelectorBtn>
              </div>
              <div className="mr-5">
                <ImageUploadBtn
                  setImages={setImgUrls}
                  images={imgUrls}></ImageUploadBtn>
              </div>
              <div>
                <AddressSelectorBtn
                  address={address}
                  setAddress={setAddress}></AddressSelectorBtn>
              </div>
            </div>
          </section>
        )}
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
          const [region, stadium] = address.split('- ');
          if (!stadium) return alert('경기장 주소를 선택해주세요');
          if (type === 'create') {
            const data = {
              title,
              content,
              imgUrls,
              memberId: session.data?.user.memberId,
              date: date,
              time: `${hour}:${minute}`,
              region,
              stadium,
            };
            createMatchingMutation.mutate(data);
          }
          if (type === 'update') {
            const data: PatchMatching = {
              title,
              content,
              imgUrls,
            };
            patchMatchingMutation.mutate({ data, id: matching?.id as string });
          }
        }}>
        <section>
          <input
            className="text-2xl input input-bordered w-full"
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
            className="w-full min-h-[350px] textarea textarea-bordered"
            placeholder="내용을 입력해주세요"
            required
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}></textarea>
        </section>
        <section className="flex justify-between items-center">
          <div className="h-[150px]">
            <Carousel
              showArrows={false}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
              selectedItem={previewImages.length - 1}
              className="w-[200px] ">
              {imgUrls.map((image, idx) => (
                <div
                  key={idx}
                  className=" w-full h-[150px] relative">
                  <Image
                    src={image}
                    alt=""
                    className="w-full h-full -z-20"
                    width={80}
                    height={80}
                  />
                  <button
                    type="button"
                    className=" absolute  text-white right-1 top-1 rounded-full bg-black h-8 w-8 opacity-60 flex items-center justify-center"
                    onClick={() => {
                      setImgUrls(imgUrls.filter((_, filterIdx) => idx !== filterIdx));
                    }}>
                    <div className="">X</div>
                  </button>
                </div>
              ))}
            </Carousel>
          </div>
          <div>
            <button
              type="submit"
              className="w-[130px] h-[30px] btn border-gray-300"
              disabled={
                type === 'create'
                  ? createMatchingMutation.isPending
                  : patchMatchingMutation.isPending
              }>
              {type === 'update' ? '글 수정' : '글 작성'}
            </button>
          </div>
        </section>
      </form>
    </>
  );
};

export default CreateOrUpdateMatching;
