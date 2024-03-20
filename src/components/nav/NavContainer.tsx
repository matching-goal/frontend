'use client';
import Link from 'next/link';
import NavUser from './user/NavUser';
import { usePathname } from 'next/navigation';

const NavContainer = () => {
  const pathName = usePathname();
  if (pathName.split('/')[1] === 'chat') {
    return;
  }
  return (
    <header className=" max-w-screen-lg mx-auto">
      <div className="navbar bg-base-100">
        {/* <Drawer></Drawer> */}
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
            <Link
              className="btn"
              href={'/teamList'}>
              팀 목록
            </Link>
            <Link
              className="btn"
              href={'/matching/1'}>
              팀 1
            </Link>
          </div>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-[200px] sm:w-full"
            />
          </div>
          <NavUser></NavUser>
        </div>
      </div>
    </header>
  );
};

export default NavContainer;
