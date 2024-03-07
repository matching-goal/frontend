'use client';
import useGetTeam from '@/queries/useGetTeam';
import { useParams } from 'next/navigation';

const TeamProfile = () => {
  const params = useParams();
  const id = params.id as string;
  const { data: team } = useGetTeam(id);

  return (
    <div className="max-w-screen-md mx-auto  w-full grid grid-cols-4  h-[150px]">
      <div className="col-span-1 flex items-center">
        <figure className="w-[100px] h-[100px]">
          <img src={team.teamImg} alt="팀이미지" className="w-full h-full" />
        </figure>
      </div>
      <div className="flex flex-col justify-between h-full col-span-2">
        <div>
          <p>{team.nickname}</p>
        </div>
        <div>
          <p>승률: 승률표시</p>
        </div>
        <div>
          <p>평점: 평점표시</p>
        </div>
        <div>
          <p>경기 통계: 통계표시</p>
        </div>
      </div>
      <div className="col-span-1 flex items-center">{team.introduction}</div>
    </div>
  );
};

export default TeamProfile;
