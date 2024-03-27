'use client';
import ImageUploadBtn from '@/components/button/ImgUploadBtn';
import useEditUser from '@/mutations/user/useEditUser';
import useGetMatchingSimpleHistory from '@/queries/useGetMatchingSimpleHistory';
import useGetTeam from '@/queries/useGetTeam';
import { getImageOrDefault } from '@/utils/image';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useRef, useState } from 'react';

const TeamProfile = () => {
  const params = useParams();
  const id = params.id as string;
  const session = useSession();
  const { data: team } = useGetTeam(id);
  const { data: matchingSimpleHistory } = useGetMatchingSimpleHistory(id);
  const [isEdit, setIsEdit] = useState(false);
  const [imgUrl, setImgUrl] = useState(team.imageUrl);

  const nicknameRef = useRef<HTMLInputElement>(null);
  const introductionRef = useRef<HTMLInputElement>(null);
  const EditUserMutation = useEditUser(id);

  return (
    <div className="hero-content text-center max-w-screen-md mx-auto">
      <div className="">
        <div className="flex justify-center items-center">
          {isEdit ? (
            <input
              className="input input-bordered"
              defaultValue={team.nickname}
              placeholder="닉네임"
              ref={nicknameRef}
            />
          ) : (
            <h1 className="text-4xl font-bold ">{team.nickname}</h1>
          )}
          {session.data?.user.memberId === id && (
            <div className="pl-5">
              {isEdit ? (
                <button
                  className="btn border border-gray-300"
                  onClick={() => {
                    setIsEdit(false);
                    if (introductionRef.current === null) {
                      return;
                    }
                    if (nicknameRef.current === null) {
                      return;
                    }

                    EditUserMutation.mutate({
                      introduction: introductionRef.current.value,
                      imageUrl: imgUrl ? imgUrl : '',
                      nickname: nicknameRef.current.value,
                    });
                  }}>
                  저장
                </button>
              ) : (
                <Image
                  className="cursor-pointer "
                  src={'/edit.svg'}
                  alt="수정"
                  width={20}
                  height={20}
                  onClick={() => {
                    setIsEdit(true);
                  }}></Image>
              )}
            </div>
          )}
        </div>

        {isEdit ? (
          <div className="flex items-center justify-center">
            <div className="avatar">
              <div className=" w-52 rounded-full mt-5">
                <Image
                  width={200}
                  height={200}
                  src={getImageOrDefault(imgUrl)}
                  className="object-contain w-5 h-5"
                  alt="팀 이미지"
                />
              </div>
            </div>
            <ImageUploadBtn setImage={setImgUrl} />
          </div>
        ) : (
          <div className="avatar">
            <div className=" w-52 rounded-full mt-5">
              <Image
                width={200}
                height={200}
                src={getImageOrDefault(team.imageUrl)}
                className="object-contain w-5 h-5"
                alt="팀 이미지"
              />
            </div>
          </div>
        )}

        <div>
          {isEdit ? (
            <input
              className="input input-bordered"
              defaultValue={team.introduction}
              placeholder="간단한 자기소개"
              ref={introductionRef}
            />
          ) : (
            <p>{team.introduction}</p>
          )}
        </div>
        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-primary"></div>
            <div className="stat-title">경기전적</div>
            <div className="stat-value text-primary">{`${matchingSimpleHistory.wins}승 ${matchingSimpleHistory.draws}무 ${matchingSimpleHistory.losses}패`}</div>
          </div>

          <div className="stat">
            <div className="stat-title">승률</div>
            <div className="stat-value text-secondary">{`${matchingSimpleHistory.winRate}%`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamProfile;
