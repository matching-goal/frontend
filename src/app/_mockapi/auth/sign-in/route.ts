import API from '@/api/api';
import { UserInfo } from '@/interface/user';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  return new NextResponse('홀리몰리~');
};

export const POST = async (req: NextRequest) => {
  const body: Pick<UserInfo, 'email' | 'password'> = await req.json();

  const res = await API.get('/api/userDataList');
  const userList: UserInfo[] = res.data;
  const targetUser = userList.filter((user) => user.email === body.email)[0];

  if (!targetUser) {
    return new NextResponse('비밀번호가 틀리거나 존재하지 않는 유저입니다', {
      status: 401,
    });
  }
  const checkPassword = targetUser.password === body.password;

  if (!checkPassword) {
    return new NextResponse('비밀번호가 틀리거나 존재하지 않는 유저입니다', {
      status: 401,
    });
  }
  return new NextResponse(JSON.stringify(targetUser));
};
