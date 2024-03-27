import API from '@/api/api';
import { User, UserInfo } from '@/interface/user';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body: Pick<User, 'nickname'> = await req.json();
  const data = await API.get('/api/userDataList');
  const userList: UserInfo[] = data.data;

  const isSameNickName =
    userList.filter((user) => user.nickname === body.nickname).length > 0;

  if (isSameNickName) {
    return new NextResponse(JSON.stringify('false'));
  }
  return new NextResponse(JSON.stringify('true'));
};
