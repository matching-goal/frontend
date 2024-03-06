import API from '@/api/api';
import { UserInfo } from '@/interface/user';
import NextAuth, { NextAuthOptions, RequestInternal } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'user-credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: '아이디를 입력하세요' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(
        credentials: Record<any, any> | undefined,
        req: Pick<RequestInternal, 'body' | 'query' | 'headers' | 'method'> | undefined
      ) {
        try {
          const res = await API.post('/api/auth/sign-in', {
            ...credentials,
          });
          const user: UserInfo = res.data;
          return user;
        } catch (e) {
          throw new Error('존재하지 않거나 틀린 비밀번호 입니다');
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
      const user = data.user as UserInfo;
      if (user?.nickname) {
        data.token.nickname = user.nickname;
      }
      return data.token;
    },
    async session({ session, token }) {
      const nickname = token.nickname as string;
      if (token.nickname && session.user) {
        session.user.nickname = nickname;
      }

      session.accessToken = token;
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
