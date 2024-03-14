'use client';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import LogIn from './LogIn';
import User from './User';

const NavUser = () => {
  const { data: session } = useSession();
  if (!session) {
    return <LogIn></LogIn>;
  }
  return <User></User>;
};

export default NavUser;
