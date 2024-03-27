import { HttpResponse, http, delay } from 'msw';
import { CreateMatching, ViewMatching } from '../../interface/matching';
import { formatDate } from '../../utils/date';
let matchingList: ViewMatching[] = [
  {
    id: '1',
    memberId: '123',
    imageUrl: '',
    title: '경기도 성남시에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 20,
    status: '모집중',
    requestCount: 2,
    stadium: '땡땡경기장',
    img: [],
    nickname: '김땡땡',
    date: '2024-05-12',
    content: '매너있는 경기 추구합니다 1:1채팅 부탁드려요',
    time: '13:15',
    region: '경기도 성남시 땡땡로',
  },
  {
    id: '2',
    memberId: '124',
    imageUrl: '',
    title: '서울시 강남구에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 15,
    status: '모집중',
    requestCount: 3,
    stadium: '축구장',
    img: [],
    nickname: '김땡땡',
    date: '2024-05-12',
    content: '매너있는 경기 추구합니다 1:1채팅 부탁드려요',
    time: '13:15',
    region: '경기도 성남시 땡땡로',
  },
  {
    id: '3',
    memberId: '125',
    imageUrl: '',
    title: '경기도 용인시에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 18,
    status: '모집중',
    requestCount: 1,
    stadium: '땡땡경기장',
    img: [],
    nickname: '김땡땡',
    date: '2024-05-12',
    content: '매너있는 경기 추구합니다 1:1채팅 부탁드려요',
    time: '13:15',
    region: '경기도 성남시 땡땡로',
  },
  {
    id: '4',
    memberId: '126',
    imageUrl: '',
    title: '경기도 수원시에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 22,
    status: '모집중',
    requestCount: 4,
    stadium: '축구장',
    img: [],
    nickname: '김땡땡',
    date: '2024-05-12',
    content: '매너있는 경기 추구합니다 1:1채팅 부탁드려요',
    time: '13:15',
    region: '경기도 성남시 땡땡로',
  },
];
const getMatchingList = http.get('/api/matching/list', async ({ request }) => {
  let res = [...matchingList];
  const url = new URL(request.url);
  const date = url.searchParams.get('date');

  date && (res = res.filter((matching) => matching.date === date));

  await delay(1000);
  return HttpResponse.json(res);
});

const getMatching = http.get('/api/matching/:id', async ({ params }): Promise<any> => {
  const id = params.id as string;
  const matching = matchingList.filter((matching) => matching.id === id);
  if (matching.length === 0) {
    return HttpResponse.json({ error: '존재하지 않는 id입니다.' }, { status: 404 });
  }
  await delay(1000);
  return HttpResponse.json(...matching);
});

const postMatching = http.post('/api/matching', async ({ request }) => {
  const body = (await request.json()) as CreateMatching;
  const newMatching: ViewMatching = {
    id: matchingList[matchingList.length - 1].id + 1,
    nickname: '김땡땡',
    modified_date: '2024-04-28',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',

    status: '모집중',
    count: 1,
    requestCount: 0,
    ...body,
    createdDate: formatDate(new Date()),
  };
  matchingList = [...matchingList, newMatching];
  await delay(1000);
  return HttpResponse.json(newMatching);
});

const deleteMatching = http.delete('/api/matching/:id', ({ params }) => {
  const id = params.id as string;
  matchingList = matchingList.filter((matching) => matching.id !== id);
  return HttpResponse.json('삭제 성공');
});

const patchMatching = http.patch('/api/matching/:id', async ({ params, request }) => {
  const id = params.id as string;
  const body = (await request.json()) as CreateMatching;
  let newMatching;
  matchingList = matchingList.map((matching) => {
    if (matching.id !== id) {
      return matching;
    }
    newMatching = { ...matching, ...body };
    return newMatching;
  });
  return HttpResponse.json(newMatching);
});

export const matchingHandlers = [
  getMatchingList,
  getMatching,
  postMatching,
  deleteMatching,
  patchMatching,
];
