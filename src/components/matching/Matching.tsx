'use client';
import { Carousel } from 'react-responsive-carousel';
import useDeleteMatching from '../../mutations/matching/useDeleteMatching';
import useGetMatching from '../../queries/useGetMatching';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getImageOrDefault } from '@/utils/image';
import Image from 'next/image';
const Matching = () => {
  const params = useParams();
  const id = params.id as string;
  const { data: matching } = useGetMatching(id);

  const matchingDeleteMutation = useDeleteMatching();

  const handleDeleteBtnClick = () => {
    if (!confirm('삭제 하시겠습니까?')) {
      return;
    }
    matchingDeleteMutation.mutate(id);
  };

  return (
    <article className="mt-10">
      <section>
        <h1 className="text-3xl">{matching.title}</h1>
      </section>
      <section className="mt-10 flex w-full justify-between pb-5 border-b-black border border-white">
        <Link
          href={`/user/${matching.memberId}`}
          className="flex items-center">
          <figure className="w-[43px] h-[43px] mr-4">
            <Image
              src={getImageOrDefault(matching.teamImg)}
              alt="유저 프로필"
              width={43}
              height={43}></Image>
          </figure>
          <p className="mr-4">{matching.nickname}</p>
          <p>{matching.createdDate}</p>
        </Link>
        <div className="flex items-center">
          <Link href={`/updateMatching/${matching.id}`}>
            <button className="mr-5">수정</button>
          </Link>
          <button onClick={handleDeleteBtnClick}>삭제</button>
        </div>
      </section>
      <section className="min-h-[450px] mt-3 flex flex-col justify-between">
        <p>{matching.content}</p>
        <div>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
            className="w-[200px]">
            {matching.img?.map((image, idx) => (
              <div
                key={idx}
                className=" w-full h-[200px]">
                <Image
                  width={200}
                  height={200}
                  src={image}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <section className="flex justify-between items-center">
        <div>
          <p className="mb-4">{matching.stadium}</p>
          <p>{`${matching.date} ${matching.time}`}</p>
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

export default Matching;
