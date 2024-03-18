'use client';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  session?: Session | undefined | null;
}

const SessionProviders = ({ children, session }: Props) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionProviders;
