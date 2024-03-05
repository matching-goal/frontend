'use client';

import useLogInUser from '@/mutations/user/useLogInUser';
import { useState } from 'react';

const SignIn = () => {
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
  return (
    <form
      className=" card border-gray-300 border-2"
      onSubmit={(e) => {
        e.preventDefault();
        logInUserMutation.mutate(user);
      }}
    >
      <div className="card-body">
        <h3 className=" card-title text-2xl mb-5">회원 가입</h3>
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
                type="text"
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
            disabled={logInUserMutation.isPending}
          >
            로그인
          </button>
          <div className="">
            <span>계정이 없으신가요?</span>
            <span>회원가입</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
