'use client';
import useGetTeam from '@/queries/useGetTeam';
import { getImageOrDefault } from '@/utils/image';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const TeamProfile = () => {
  const params = useParams();
  const id = params.id as string;
  const { data: team } = useGetTeam(id);
  console.log(team);
  return (
    <div className="hero-content text-center max-w-screen-md mx-auto">
      <div className="">
        <h1 className="text-4xl font-bold mb-5">{team.nickname}</h1>
        <div className="avatar">
          <div className=" w-52 rounded-full ">
            <Image
              width={200}
              height={200}
              src={getImageOrDefault(team.teamImg)}
              className="object-contain w-5 h-5"
              alt="팀 이미지"
            />
          </div>
        </div>
        <div>
          <p>{team.introduction}</p>
        </div>
        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-primary"></div>
            <div className="stat-title">경기전적</div>
            <div className="stat-value text-primary">2승1무1패</div>
          </div>

          <div className="stat">
            <div className="stat-title">승률</div>
            <div className="stat-value text-secondary">50%</div>
          </div>

          <div className="stat">
            <div className="stat-title">평점</div>
            <div className="stat-value ">7.8</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamProfile;
