'use client';

import Link from 'next/link';
import NavUser from './user/NavUser';
import { usePathname } from 'next/navigation';
import NavSearch from './NavSearch';
import { useSession } from 'next-auth/react';
import Alarm from './Alarm';

const NavContainer = () => {
  const pathName = usePathname();
  const { data: session } = useSession();

  if (pathName.split('/')[1] === 'chat') {
    return;
  }
  return (
    <header className=" max-w-screen-lg mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href={'/'}>
            <h1 className="btn btn-ghost text-xl">daisyUI</h1>
          </Link>
          <div className="hidden md:flex">
            <Link
              className="btn"
              href={'/matchingList'}>
              매칭목록
            </Link>
            {session?.user && (
              <Link
                className="btn"
                href={'/createMatching'}>
                매칭 작성하기
              </Link>
            )}
          </div>
        </div>
        <div className="flex-none gap-2 items-center flex">
          <NavSearch />
          <NavUser></NavUser>
          {session?.user && <Alarm user={session.user} />}
        </div>
      </div>
    </header>
  );
};

export default NavContainer;
