import API from '@/api/api';
import { EditPassword, UserInfo } from '@/interface/user';
import { NextRequest, NextResponse } from 'next/server';

interface Params {
  params: { id: string };
}
export const PATCH = async (req: NextRequest) => {
  const res = await API.get('/api/userDataList');
  const userList: UserInfo[] = res.data;
  const body: EditPassword = await req.json();
  const id = req.headers.get('Authorization');

  const targetUser = userList.filter((user) => user.memberId === id)[0];
  if (!targetUser) {
    return new NextResponse('없는 유저 입니다.', { status: 404 });
  }
  if (targetUser.password !== body.oldPassword) {
    return new NextResponse('패스워드가 틀립니다.', { status: 401 });
  }
  const newUserData = { ...targetUser, password: body.newPassword };
  try {
    const res = await API.patch('/api/userDataList', newUserData);
    return new NextResponse('패스워드 변경 성공');
  } catch (e) {
    return new NextResponse(JSON.stringify(e));
  }
};
