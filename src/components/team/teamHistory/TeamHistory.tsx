import { MatchingHistoryInfo } from '@/interface/matching';
import { UserInfo } from '@/interface/user';
import { getImageOrDefault } from '@/utils/image';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';

interface Props {
  historyInfo: MatchingHistoryInfo;
  id: string;
}

const winnerCheck = (score1: number, score2: number) => {
  if (score1 === score2) {
    return 'draw';
  }
  if (score1 > score2) {
    return 'win';
  }
  return 'lose';
};

const TeamMatchingHistory = ({ historyInfo, id }: Props) => {
  const queryClient = useQueryClient();
  const teamData = queryClient.getQueryData<UserInfo>(['team', id]);

  const resultType = winnerCheck(historyInfo.score1, historyInfo.score2);

  if (!teamData) {
    return <div>정상적인 접근 방식이 아닙니다</div>;
  }
  return (
    <div className="flex max-w-screen-md mx-auto">
      <div
        className={`flex-grow card bg-base-300 rounded-box p-5 w-full ${
          resultType === 'draw'
            ? 'text-gray-600'
            : resultType === 'win'
            ? 'text-green-600'
            : 'text-red-600'
        }`}>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <figure className="w-[100px] h-[100px] avatar rounded-full">
              <Image
                width={100}
                height={100}
                src={getImageOrDefault(teamData?.imageUrl)}
                alt="팀이미지"
              />
            </figure>
            <p className="mt-5">{teamData.nickname}</p>
          </div>
          <div>
            <p className="text-4xl">
              {resultType === 'draw' ? 'DRAW' : resultType === 'win' ? 'WIN' : 'LOSE'}
            </p>
          </div>
          <div>
            <p className=" text-4xl">{historyInfo.score1}</p>
          </div>
        </div>
      </div>
      <div className="divider divider-horizontal">VS</div>
      <div
        className={`flex-grow card bg-base-300 rounded-box p-5 w-full ${
          resultType === 'draw'
            ? 'text-gray-600'
            : resultType === 'win'
            ? 'text-green-600'
            : 'text-red-600'
        }`}>
        <div className="flex justify-between items-center">
          <div>
            <p className=" text-4xl">{historyInfo.score2}</p>
          </div>
          <div>
            <p className="text-4xl">
              {resultType === 'draw' ? 'DRAW' : resultType === 'win' ? 'WIN' : 'LOSE'}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <figure className="w-[100px] h-[100px] avatar rounded-full">
              <Image
                width={100}
                height={100}
                src={getImageOrDefault(historyInfo.opponentImg)}
                alt="팀이미지"
              />
            </figure>
            <p className="mt-5">{historyInfo.opponentNickname}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMatchingHistory;
