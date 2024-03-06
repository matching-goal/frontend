'use client';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Nav = () => {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <></>;
  }
  if (session) {
    return (
      <div>
        {session.user?.name}
        <button onClick={() => signOut({ redirect: false })}>로그아웃</button>
      </div>
    );
  }
  return (
    <div>
      <Link href={'/signIn'}>
        <button>로그인</button>
      </Link>
    </div>
  );
};

export default Nav;
