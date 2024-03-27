'use client';

import useEditPassword from '@/mutations/user/useEditPassword';
import { passwordRegex } from '@/utils/regex';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

const EditPassword = () => {
  const session = useSession();
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [legacyPassword, setLegacyPassword] = useState('');
  const editPasswordMutation = useEditPassword(session?.data?.user.memberId);

  if (!session) {
    return <div>잘못된 접근입니다.</div>;
  }

  return (
    <form
      className="card border-gray-300 border-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (password !== checkPassword) {
          return alert('패스워드가 서로 다릅니다.');
        }
        if (!passwordRegex.test(password)) {
          return alert('패스워드 규칙을 지켜주세요');
        }
        editPasswordMutation.mutate({
          newPassword: password,
          oldPassword: legacyPassword,
        });
      }}>
      <div className="card-body">
        <h3 className=" card-title text-2xl mb-5">패스워드 변경</h3>
        <div>
          <div className="flex justify-between">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">기존 패스워드</span>
              </div>
              <input
                name="legacyPassword"
                type="password"
                className="input input-bordered w-full"
                required
                onChange={(e) => {
                  setLegacyPassword(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="flex justify-between">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">새 패스워드</span>
              </div>
              <input
                name="password"
                type="password"
                className="input input-bordered w-full"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="flex justify-between">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">패스워드 확인</span>
              </div>
              <input
                name="checkPassword"
                type="password"
                className="input input-bordered w-full"
                required
                onChange={(e) => {
                  setCheckPassword(e.target.value);
                }}
              />
            </label>
          </div>
        </div>
        <div className="card-actions items-center mt-5">
          <button
            type="submit"
            className="btn btn-active btn-neutral rounded-3xl text-xl"
            disabled={editPasswordMutation.isPending}>
            패스워드 변경
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditPassword;
