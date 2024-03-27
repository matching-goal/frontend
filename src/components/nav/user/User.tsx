'use client';

import { getImageOrDefault } from '@/utils/image';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const User = () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) {
    return <div>에러</div>;
  }
  return (
    <div className="dropdown dropdown-end relative">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar ">
        <div className="w-10 rounded-full">
          <Image
            width={50}
            height={50}
            alt="Tailwind CSS Navbar component"
            src={getImageOrDefault(session?.user.imageUrl)}
            quality={10}
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link href={`/team/${session.user.memberId}`}> 프로필</Link>
        </li>
        <li>
          <Link href={'/requestMatchingList'}>신청받은 매칭 리스트</Link>
        </li>
        <li>
          <Link href={'/chatList'}>채팅 리스트</Link>
        </li>
        <li>
          <Link href={`/team/editPassword`}>패스워드 변경</Link>
        </li>
        <li>
          <div
            onClick={() => {
              signOut({ redirect: false });
              router.push('/');
            }}>
            로그아웃
          </div>
        </li>
      </ul>
    </div>
  );
};

export default User;
