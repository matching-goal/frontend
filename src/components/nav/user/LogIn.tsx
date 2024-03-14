import Link from 'next/link';

const LogIn = () => {
  return (
    <Link href={'/signIn'}>
      <button className="btn">Log-In</button>
    </Link>
  );
};

export default LogIn;
