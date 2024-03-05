import { HttpResponse, delay, http } from 'msw';
import { CreateUser, UserInfo } from '../../interface/user';

let userList: UserInfo[] = [
  {
    id: '1',
    email: 'aaa.@naver.com',
    name: '김이박',
    nickName: '김땡땡',
    introduction: '',
    region: '경기도 성남시',
    password: '123456789a',
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
const createUser = http.post('/api/singUp', async ({ request }): Promise<any> => {
  const body = (await request.json()) as CreateUser;
  const newUser: UserInfo = {
    ...body,
    introduction: '',
    id: userList[userList.length - 1].id + 1,
  };
  userList = [...userList, newUser];
  return HttpResponse.json(newUser);
});

const checkSameNickname = http.post('/api/auth/checkNickname', async ({ request }) => {
  const body = (await request.json()) as { nickName: string };
  const checkSameNickName =
    userList.filter((user) => user.nickName === body.nickName).length > 0;

  if (checkSameNickName) {
    return HttpResponse.json({ check: false });
  }
  return HttpResponse.json({ check: true });
});

export const userHandlers = [getUser, createUser, checkSameNickname];
