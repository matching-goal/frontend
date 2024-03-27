import API from '@/api/api';
import { UserInfo } from '@/interface/user';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body: Pick<UserInfo, 'email'> = await req.json();

  const res = await API.get('/api/userDataList');
  const userList: UserInfo[] = res.data;

  const isSameEmail = userList.filter((user) => user.email === body.email).length > 0;

  if (isSameEmail) {
    return new NextResponse('이미 존재하는 이메일입니다', { status: 401 });
  }
  return new NextResponse(JSON.stringify('true'));
};
