'use client';
import { useState } from 'react';
import { CreateUser } from '../../interface/user';
import API from '../../api/api';
import { emailRegex } from '../../utils/regex';
import useRegisterUser from '@/mutations/user/useRegisterUser';

const SignUp = () => {
  const [userData, setUserData] = useState<CreateUser>({
    name: '',
    email: '',
    password: '',
    nickname: '',
    region: '',
  });
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [isCheckSameNickname, setIsCheckSameNickname] = useState<boolean>(false);
  const [isCheckEmailAuth, setIsCheckEmailAuth] = useState<boolean>(false);
  const [isEmailAuthActive, setIsEmailAuthActive] = useState<boolean>(false);
  const [emailAuthCode, setEmailAuthCode] = useState('');

  const registerUserMutation = useRegisterUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'nickname') {
      setIsCheckSameNickname(false);
    }
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userData.password !== passwordCheck) {
      return alert('패스워드가 서로 다릅니다');
    }
    if (!isCheckSameNickname) {
      return alert('닉네임 중복체크를 해주세요');
    }
    if (!isCheckEmailAuth) {
      return alert('이메일 인증을 해주세요');
    }
    registerUserMutation.mutate(userData);
  };

  return (
    <form className=" card border-gray-300 border-2" onSubmit={handleSubmit}>
      <div className="card-body">
        <h3 className=" card-title text-2xl mb-5">회원 가입</h3>
        <div>
          <div className="flex justify-between">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">이름</span>
              </div>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full"
                required
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">이메일</span>
              </div>
              <input
                name="email"
                type="email"
                className="input input-bordered "
                required
                onChange={handleChange}
                disabled={isCheckEmailAuth}
              />
            </label>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="인증번호 입력"
                value={emailAuthCode}
                disabled={!isEmailAuthActive || isCheckEmailAuth}
                onChange={(e) => {
                  setEmailAuthCode(e.target.value);
                }}
              />
              <button
                type="button"
                className="text-sm"
                disabled={!isEmailAuthActive || isCheckEmailAuth}
                onClick={async () => {
                  const res = await API.post('api/auth/mails/verify', {
                    email: userData.email,
                    code: emailAuthCode,
                  });
                  setEmailAuthCode('');
                  if (res.data === 'true') {
                    alert('인증 완료');
                    setIsCheckEmailAuth(true);
                  }
                  return alert('인증 실패');
                }}
              >
                인증하기
              </button>
              <button
                type="button"
                className="text-sm"
                disabled={isCheckEmailAuth}
                onClick={async () => {
                  if (!emailRegex.test(userData.email)) return alert('메일 형식 에러');

                  const res = await API.post('/api/auth/mails/send-verification', {
                    email: userData.email,
                  });
                  if (res.data === 'true') {
                    alert('이메일 인증 번호가 발송되었습니다.');
                    setIsEmailAuthActive(true);
                    return;
                  }
                  return alert('이메일 인증 번호 발송 실패');
                }}
              >
                인증메일 발송
              </button>
            </div>
          </div>
          <div>
            <label className="form-control ">
              <div className="label">
                <span className="label-text">패스워드</span>
              </div>
              <input
                name="password"
                type="text"
                className="input input-bordered "
                required
                minLength={10}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label className="form-control ">
              <div className="label">
                <span className="label-text">패스워드 확인</span>
              </div>
              <input
                name="passwordCheck"
                type="text"
                className="input input-bordered "
                required
                minLength={10}
                onChange={(e) => {
                  setPasswordCheck(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label className="form-control ">
              <div className="flex items-center justify-between">
                <div className="label">
                  <span className="label-text">팀 이름(닉네임)</span>
                </div>
              </div>
              <input
                name="nickname"
                type="text"
                className="input input-bordered "
                required
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="  h-5 flex justify-center items-center "
              onClick={async () => {
                if (userData.nickname === '') return;
                const res = await API.post('/api/auth/checkNickname', {
                  nickname: userData.nickname,
                });
                if (res.data === 'true') {
                  setIsCheckSameNickname(true);
                  alert('닉네임 체크 통과');
                  return;
                }
                alert('이미 존재하는 닉네임 입니다');
              }}
            >
              <span>중복검사</span>
            </button>
          </div>
          <div>
            <label className="form-control ">
              <div className="label">
                <span className="label-text">지역(시 단위)</span>
              </div>
              <input
                name="region"
                type="text"
                className="input input-bordered "
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
            disabled={registerUserMutation.isPending}
          >
            회원 가입
          </button>
          <div className="">
            <span>계정이 이미 있으신가요?</span>
            <span>로그인</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
