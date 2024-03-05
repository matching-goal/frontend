import { HttpResponse, delay, http } from 'msw';
import { CreateUser, UserInfo } from '../../interface/user';

let userList: UserInfo[] = [
  {
    id: '1',
    email: 'aaa.@naver.com',
    name: '김이박',
    nickname: '김땡땡',
    introduction: '',
    region: '경기도 성남시',
    password: '123456789a',
    teamImg:
      'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getUser = http.get('/api/myPage/:id', async ({ params }): Promise<any> => {
  const id = params.id as string;
  const user = userList.filter((user) => user.id === id);
  if (user.length === 0) {
    return HttpResponse.json({ error: '존재하지 않는 id입니다.' }, { status: 404 });
  }
  await delay(1000);
  return HttpResponse.json(...user);
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createUser = http.post('api/auth/sign-up', async ({ request }): Promise<any> => {
  const body = (await request.json()) as CreateUser;
  const newUser: UserInfo = {
    ...body,
    introduction: '',
    id: userList[userList.length - 1].id + 1,
    teamImg: '',
  };
  userList = [...userList, newUser];
  return HttpResponse.json(newUser);
});

const checkSameNickname = http.post('/api/auth/checkNickname', async ({ request }) => {
  const body = (await request.json()) as { nickname: string };
  const checkSameNickName =
    userList.filter((user) => user.nickname === body.nickname).length > 0;

  if (checkSameNickName) {
    return HttpResponse.json('false');
  }
  return HttpResponse.json('true');
});

const sendAuthEmail = http.post('/api/auth/mails/send-verification', async () => {
  return HttpResponse.json('true');
});

const verifyAuthEmailCode = http.post('/api/auth/mails/verify', async ({ request }) => {
  const body = (await request.json()) as { email: string; code: string };
  if (body.code === '12345') {
    return HttpResponse.json('true');
  } else {
    return HttpResponse.json('false');
  }
});
export const userHandlers = [
  getUser,
  createUser,
  checkSameNickname,
  sendAuthEmail,
  verifyAuthEmailCode,
];
