import { CreateUser, UserInfo } from '@/interface/user';
import { AxiosResponse } from 'axios';
import { HttpResponse } from 'msw';
import { NextRequest, NextResponse } from 'next/server';

let userList: UserInfo[] = [
  {
    id: '1',
    email: 'aaa@naver.com',
    name: '김이박',
    nickname: '김땡땡',
    introduction: '높은 승률을 자랑합니다.',
    region: '경기도 성남시',
    password: '123456789a',
    teamImg:
      'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',
  },
  {
    id: '2',
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
  return new NextResponse(JSON.stringify(userList));
};

export const POST = async (req: NextRequest) => {
  const body: CreateUser = await req.json();
  const newUser: UserInfo = {
    ...body,
    introduction: '',
    id: userList[userList.length - 1].id + 1,
    teamImg: '',
  };
  userList = [...userList, newUser];
  return HttpResponse.json(newUser);
};
