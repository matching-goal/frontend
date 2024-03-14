import { MatchingHistoryInfo } from '@/interface/matching';
import { UserInfo } from '@/interface/user';
import { getImageOrDefault } from '@/utils/image';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
  historyInfo: MatchingHistoryInfo;
  id: string;
}

const TeamMatchingHistory = ({ historyInfo, id }: Props) => {
  const queryClient = useQueryClient();
  const teamData = queryClient.getQueryData<UserInfo>(['Team', id]);
  if (!teamData) {
    return <div>정상적인 접근 방식이 아닙니다</div>;
  }
  return (
    <div className="flex max-w-screen-md mx-auto">
      <div
        className={`flex-grow card bg-base-300 rounded-box p-5 w-full ${
          historyInfo.is_win ? 'text-green-600' : 'text-red-600'
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <figure className="w-[100px] h-[100px] avatar rounded-full">
              <img src={getImageOrDefault(teamData?.teamImg)} alt="팀이미지" />
            </figure>
            <p className="mt-5">{teamData.nickname}</p>
          </div>
          <div>
            <p className="text-4xl">{historyInfo.is_win ? 'WIN' : 'LOSE'}</p>
          </div>
          <div>
            <p className=" text-4xl">{historyInfo.score1}</p>
          </div>
        </div>
      </div>
      <div className="divider divider-horizontal">VS</div>
      <div
        className={`flex-grow card bg-base-300 rounded-box p-5 w-full ${
          historyInfo.is_win ? 'text-red-600' : 'text-green-600'
        }`}
      >
        <div className="flex justify-between items-center">
          <div>
            <p className=" text-4xl">{historyInfo.score2}</p>
          </div>
          <div>
            <p className="text-4xl">{historyInfo.is_win ? 'LOSE' : 'WIN'}</p>
          </div>
          <div className="flex flex-col items-center">
            <figure className="w-[100px] h-[100px] avatar rounded-full">
              <img src={getImageOrDefault(historyInfo.opponentImg)} alt="팀이미지" />
            </figure>
            <p className="mt-5">{historyInfo.opponentNickname}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMatchingHistory;
