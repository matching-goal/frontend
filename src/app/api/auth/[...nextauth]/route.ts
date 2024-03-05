import { NextApiRequest } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
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
        req: NextApiRequest | undefined
      ) {
        //credentials.status === 401 이면 없는 유저로 signup페이지로 리다이렉트 시키기
        const res = await fetch(`/api/auth/sign-in`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });
        if (res.status === 401) {
          console.log('에러에러에러 없는 유저다');
          throw new Error('로그인 실패');
        } else {
          const user = await res.json();
          return user;
        }
      },
    }),
  ],

  pages: {
    signIn: '/signIn',
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
