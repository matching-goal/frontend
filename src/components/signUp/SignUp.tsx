import { useState } from 'react';
import { CreateUser } from '../../interface/user';

const SignUp = () => {
  const [userData, setUserData] = useState<CreateUser>({
    name: '',
    email: '',
    password: '',
    nickName: '',
    region: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
              />
            </label>
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
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label className="form-control ">
              <div className="label">
                <span className="label-text">팀 이름(닉네임)</span>
              </div>
              <input
                name="nickName"
                type="text"
                className="input input-bordered "
                required
                onChange={handleChange}
              />
            </label>
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
          <button className="btn btn-active btn-neutral rounded-3xl text-xl">
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
