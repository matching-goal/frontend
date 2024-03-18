import NextAuth, { NextAuthOptions } from 'next-auth';
import API from '@/api/api';
import CredentialsProvider from 'next-auth/providers/credentials';

interface ResponseLogin {
  accessToken: string;
  refreshToken: string;
  memberId: string;
  nickname: string;
  imageId: string;
  id: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'user-credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: '아이디를 입력하세요' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials: Record<'email' | 'password', string> | undefined) {
        try {
          const res = await API.post('/api/auth/sign-in', {
            ...credentials,
          });

          const user: ResponseLogin = res.data;
          return user;
        } catch (e) {
          throw new Error(`${e} Error`);
        }
      },
    }),
  ],

  pages: {
    signIn: '/signIn',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt(data) {
      const user = data.user as ResponseLogin;

      if (user?.nickname) {
        data.token.nickname = user.nickname;
      }
      if (user?.imageId) {
        data.token.teamImg = user.imageId;
      }
      if (user?.memberId) {
        data.token.memberId = user.memberId;
      }
      if (user?.accessToken) {
        data.token.serverAccessToken = user.accessToken;
      }
      if (user?.refreshToken) {
        data.token.refreshToken = user.refreshToken;
      }
      return data.token;
    },
    async session({ session, token }) {
      const nickname = token.nickname as string;
      const teamImg = token.teamImg as string;
      const memberId = token.memberId as string;
      const accessToken = token.serverAccessToken as string;
      const refreshToken = token.refreshToken as string;

      if (token.nickname && session.user) {
        session.user.nickname = nickname;
      }
      if (token.teamImg && session.user) {
        session.user.teamImg = teamImg;
      } else {
        session.user.teamImg = '';
      }
      if (token.memberId && session.user) {
        session.user.memberId = memberId;
      }
      if (token.serverAccessToken && session.user) {
        session.user.accessToken = accessToken;
      }
      if (token.refreshToken && session.user) {
        session.user.refreshToken = refreshToken;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
