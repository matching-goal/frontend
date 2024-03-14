import { getImageOrDefault } from '@/utils/image';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const User = () => {
  const { data: session } = useSession();

  if (!session) {
    return <div>에러</div>;
  }
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={getImageOrDefault(session?.user.teamImg)}
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href={`/team/${session.user.id}`}> Profile</Link>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a onClick={() => signOut({ redirect: false })}>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default User;
