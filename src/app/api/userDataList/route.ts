import { CreateUser, UserInfo } from '@/interface/user';
import { AxiosResponse } from 'axios';
import { HttpResponse } from 'msw';
import { NextRequest, NextResponse } from 'next/server';

let userList: UserInfo[] = [
  {
    memberId: '1',
    email: 'aaa@naver.com',
    name: '김이박',
    nickname: '김땡땡',
    introduction: '높은 승률을 자랑합니다.',
    region: '경기도 성남시',
    password: '123456789a',
    teamImg: '',
  },
  {
    memberId: '2',
    email: 'bbb@naver.com',
    name: '박김이',
    nickname: '박땡땡',
    introduction: '높은 승률을 자랑합니다.',
    region: '경기도 성남시',
    password: '123456789a',
    teamImg: '',
  },
];

export const GET = async (): Promise<NextResponse<AxiosResponse<UserInfo[]>>> => {
  console.log(userList);
  return new NextResponse(JSON.stringify(userList));
};

export const POST = async (req: NextRequest) => {
  const body: CreateUser = await req.json();
  const newUser: UserInfo = {
    ...body,
    introduction: '',
    memberId: userList[userList.length - 1].memberId + 1,
    teamImg: '',
  };
  userList = [...userList, newUser];
  return HttpResponse.json(newUser);
};

export const PATCH = async (req: NextRequest) => {
  const body: UserInfo = await req.json();
  userList = userList.map((user) => {
    if (user.memberId === body.memberId) {
      return body;
    }
    return user;
  });
  console.log(userList);
  return HttpResponse.json(userList);
};
