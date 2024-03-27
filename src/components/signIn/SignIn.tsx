'use client';

import useLogInUser from '@/mutations/user/useLogInUser';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignIn = () => {
  const session = useSession();
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const logInUserMutation = useLogInUser();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  if (session.data) {
    return <div>정상적이지 않은 접근입니다</div>;
  }
  return (
    <form
      className=" card border-gray-300 border-2"
      onSubmit={async (e) => {
        e.preventDefault();
        const result = await signIn('user-credentials', {
          ...user,
          redirect: false,
          callbackUrl: '/',
        });
        if (result?.error) {
          const error = JSON.parse(result.error);
          alert(error.message);
          return;
        }
        if (result) {
          alert('로그인 성공');
          router.push('/');
        }
      }}>
      <div className="card-body">
        <h3 className=" card-title text-2xl mb-5">로그인</h3>
        <div>
          <div className="flex justify-between">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">이메일</span>
              </div>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full"
                required
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex justify-between">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">패스워드</span>
              </div>
              <input
                name="password"
                type="password"
                className="input input-bordered w-full"
                required
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="card-actions items-center mt-5">
          <button
            type="submit"
            className="btn btn-active btn-neutral rounded-3xl text-xl"
            disabled={logInUserMutation.isPending}>
            로그인
          </button>
          <div className="">
            <span>계정이 없으신가요?</span>
            <Link
              className=" text-decoration : underline"
              href={'/signUp'}>
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
