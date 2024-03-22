import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: User;
    accessToken: JWT;
  }
}

export interface User {
  nickname: string;
  teamImg: string;
  memberId: string;
  accessToken: string;
  refreshToken: string;
}
