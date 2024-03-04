import useGetMatchingList from '../../queries/useGetMatchingList';
import MatchingCard from './MatchingCard';

interface Props {
  query: string;
}
const MatchingList = ({ query }: Props) => {
  const { data: matchingList } = useGetMatchingList(query);

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
