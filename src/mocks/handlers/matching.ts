import { HttpResponse, http, delay } from 'msw';
let matchingList = [
  {
    id: 1,
    member_id: 'a1',
    img: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: '경기도 성남시 경기하실분 구해요~',
    created_date: '2024-04-27',
    count: 20,
    status: '모집중',
    requestCount: 2,
    stadium: '경기도 성남시 xx로 땡땡경기장',
  },
  {
    id: 2,
    member_id: 'a2',
    img: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: '경기도 김포시 경기하실분 구해요~',
    created_date: '2024-04-26',
    count: 10,
    status: '모집중',
    requestCount: 1,
    stadium: '경기도 김포시 xx로 땡땡경기장',
  },
  {
    id: 3,
    member_id: 'a3',
    img: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: '서울시 서초구 경기하실분 구해요~',
    created_date: '2024-04-25',
    count: 13,
    status: '모집중',
    requestCount: 3,
    stadium: '서울시 서초구 xx로 땡땡경기장',
  },
];
export const getMatchingList = http.get('/api/matching/list', async () => {
  await delay(1000);
  return HttpResponse.json(matchingList);
});

export const postMatching = http.post('/api/matching', ({ request }) => {
  const a = request.body;
  console.log(a);
});

export const deleteMatching = http.delete('/api/matching/:id', ({ params }) => {
  const id = params.id as string;
  matchingList = matchingList.filter((matching) => matching.id === parseInt(id));
  return HttpResponse.json(matchingList);
});
