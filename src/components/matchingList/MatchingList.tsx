import MatchingCard from './MatchingCard';
import useGetMatchingList from '@/queries/useGetMatchingList';

interface Props {
  query: string;
}
const MatchingList = ({ query }: Props) => {
  const { data: ResponseMatchingList } = useGetMatchingList(query);
  const matchingList = ResponseMatchingList.content;

  return (
    <div>
      <ul className="grid grid-cols-3 gap-3">
        {matchingList.map((matching) => (
          <MatchingCard
            key={matching.id}
            matching={matching}></MatchingCard>
        ))}
      </ul>
    </div>
  );
};

export default MatchingList;
