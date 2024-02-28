import useMatchingDelete from '../../mutations/useMatchingDelete';
import useGetMatching from '../../queries/useGetMatching';
import { Link, useParams } from 'react-router-dom';
const Matching = () => {
  const params = useParams();
  const id = params.id as string;
  const { data: matching, isError } = useGetMatching(id);
  const useMatchingDeleteMutation = useMatchingDelete();
  if (isError) {
    return <div>데이터 패칭 중 에러 발생</div>;
  }
  const handleDeleteBtnClick = () => {
    if (!confirm('삭제 하시겠습니까?')) {
      return;
    }
    useMatchingDeleteMutation.mutate(id);
  };

  return (
    <article className="mt-32">
      <section>
        <h1 className="text-3xl">{matching.title}</h1>
      </section>
      <section className="mt-10 flex w-full justify-between pb-5 border-b-black border border-white">
        <Link to={`/user/${matching.memberId}`} className="flex items-center">
          <figure className="w-[43px] h-[43px] mr-4">
            <img src={matching.teamImg} alt="유저 프로필"></img>
          </figure>
          <p className="mr-4">{matching.nickName}</p>
          <p>{matching.createdDate}</p>
        </Link>
        <div className="flex items-center">
          <button className="mr-5">수정</button>
          <button onClick={handleDeleteBtnClick}>삭제</button>
        </div>
      </section>
      <section className="min-h-[450px] mt-3">
        <p>{matching.content}</p>
      </section>
      <section className="flex justify-between items-center">
        <div>
          <p className="mb-4">{matching.stadium}</p>
          <p>{matching.matchDate}</p>
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
