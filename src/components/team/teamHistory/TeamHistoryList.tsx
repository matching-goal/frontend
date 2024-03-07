import useGetMatchingHistory from '@/queries/useGetMatchingHistory';
import TeamMatchingHistory from './TeamHistory';
import { useParams } from 'next/navigation';

const TeamMatchingHistoryList = () => {
  const params = useParams();
  const id = params.id as string;
  const { data: teamMatchingHistoryInfoList } = useGetMatchingHistory(id);

  return (
    <section>
      {teamMatchingHistoryInfoList.map((teamMatchingHistoryInfo) => (
        <TeamMatchingHistory
          key={teamMatchingHistoryInfo.id}
          historyInfo={teamMatchingHistoryInfo}
        ></TeamMatchingHistory>
      ))}
    </section>
  );
};

export default TeamMatchingHistoryList;
