import API from '@/api/api';
import { UserInfo } from '@/interface/user';
import { NextRequest, NextResponse } from 'next/server';

interface Params {
  params: { id: string };
}
export const GET = async (req: NextRequest, { params }: Params) => {
  const res = await API.get('/api/userDataList');
  const userList: UserInfo[] = res.data;

  const targetUser = userList.filter((user) => user.id === params.id)[0];
  if (!targetUser) {
    return new NextResponse('없는 유저 입니다.', { status: 404 });
  }
  return new NextResponse(JSON.stringify(targetUser));
};
