import { MatchingHistoryInfo } from '@/interface/matching';

interface Props {
  historyInfo: MatchingHistoryInfo;
}

const TeamMatchingHistory = ({ historyInfo }: Props) => {
  return (
    <div className="max-w-screen-sm mx-auto p-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <figure className="w-[100px] h-[100px]">
            <img src={'/defaultProfileImg.jpg'} alt="" />
          </figure>
          <span>팀이름</span>
        </div>

        <div className="text-3xl">
          <span>{historyInfo.score1}</span>
        </div>
        <div>
          <span className="text-5xl">vs</span>
        </div>
        <div className="text-3xl">
          <span>{historyInfo.score2}</span>
        </div>

        <div className="flex flex-col items-center">
          <figure className="w-[100px] h-[100px]">
            <img src={'/defaultProfileImg.jpg'} alt="" />
          </figure>
          <span>팀이름</span>
        </div>
      </div>
    </div>
  );
};

export default TeamMatchingHistory;
