import useGetMatchingList from '../../queries/useGetMatchingList';
import MatchingCard from './MatchingCard';

const MatchingList = () => {
  const { data: matchingList, isError } = useGetMatchingList();
  if (isError) {
    return <div>데이터 패칭중 에러 발생</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {matchingList.map((matching) => (
          <MatchingCard key={matching.id} matching={matching}></MatchingCard>
        ))}
      </div>
    </div>
  );
};

export default MatchingList;
