import useGetMatchingList from '../../queries/useGetMatchingList';
import MatchingCard from './MatchingCard';

const MatchingList = () => {
  const { data: matchingList } = useGetMatchingList();

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
