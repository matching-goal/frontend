import { HttpResponse, http, delay } from 'msw';
import { PreviewMatching } from '../../interface/matching';
let matchingList: PreviewMatching[] = [
  {
    id: 1,
    memberId: 123,
    teamImg: 'https://www.ksponco.or.kr/sports/img/olparksoccer/know_1.jpg',
    title: '경기도 성남시에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    count: 20,
    status: '모집중',
    requestCount: 2,
    stadium: '경기도 성남시 xx로 땡땡경기장',
  },
  {
    id: 2,
    memberId: 124,
    teamImg: 'https://www.ksponco.or.kr/sports/img/olparksoccer/know_1.jpg',
    title: '서울시 강남구에서 경기하실분을 찾습니다.',
    createdDate: '2024-04-26',
    count: 15,
    status: '모집중',
    requestCount: 1,
    stadium: '서울시 강남구 xx로 축구장',
  },
  {
    id: 3,
    memberId: 125,
    teamImg: 'https://www.ksponco.or.kr/sports/img/olparksoccer/know_1.jpg',
    title: '인천광역시 남동구에서 축구하실분을 모집합니다.',
    createdDate: '2024-04-25',
    count: 10,
    status: '모집중',
    requestCount: 3,
    stadium: '인천광역시 남동구 xx로 축구장',
  },
  {
    id: 4,
    memberId: 126,
    teamImg: 'https://www.ksponco.or.kr/sports/img/olparksoccer/know_1.jpg',
    title: '대전광역시 유성구에서 경기하실분을 구합니다.',
    createdDate: '2024-04-24',
    count: 8,
    status: '모집중',
    requestCount: 0,
    stadium: '대전광역시 유성구 xx로 축구장',
  },
  {
    id: 5,
    memberId: 127,
    teamImg: 'https://www.ksponco.or.kr/sports/img/olparksoccer/know_1.jpg',
    title: '부산광역시 해운대구에서 경기하실분을 찾습니다.',
    createdDate: '2024-04-23',
    count: 12,
    status: '모집중',
    requestCount: 2,
    stadium: '부산광역시 해운대구 xx로 축구장',
  },
  {
    id: 6,
    memberId: 128,
    teamImg: 'https://www.ksponco.or.kr/sports/img/olparksoccer/know_1.jpg',
    title: '경기도 고양시에서 경기하실분을 모집합니다.',
    createdDate: '2024-04-22',
    count: 16,
    status: '모집중',
    requestCount: 1,
    stadium: '경기도 고양시 xx로 축구장',
  },
  {
    id: 7,
    memberId: 129,
    teamImg: 'https://www.ksponco.or.kr/sports/img/olparksoccer/know_1.jpg',
    title: '대구광역시 수성구에서 축구하실분을 찾습니다.',
    createdDate: '2024-04-21',
    count: 14,
    status: '모집중',
    requestCount: 2,
    stadium: '대구광역시 수성구 xx로 축구장',
  },
  {
    id: 8,
    memberId: 130,
    teamImg: 'https://www.ksponco.or.kr/sports/img/olparksoccer/know_1.jpg',
    title: '인천광역시 서구에서 경기하실분을 구합니다.',
    createdDate: '2024-04-20',
    count: 11,
    status: '모집중',
    requestCount: 0,
    stadium: '인천광역시 서구 xx로 축구장',
  },
  {
    id: 9,
    memberId: 131,
    teamImg: 'https://www.ksponco.or.kr/sports/img/olparksoccer/know_1.jpg',
    title: '광주광역시 서구에서 경기하실분을 찾습니다.',
    createdDate: '2024-04-19',
    count: 9,
    status: '모집중',
    requestCount: 1,
    stadium: '광주광역시 서구 xx로 축구장',
  },
  {
    id: 10,
    memberId: 132,
    teamImg: 'https://www.ksponco.or.kr/sports/img/olparksoccer/know_1.jpg',
    title: '대전광역시 서구에서 경기하실분을 찾습니다.',
    createdDate: '2024-04-18',
    count: 13,
    status: '모집중',
    requestCount: 3,
    stadium: '대전광역시 서구 xx로 축구장',
  },
  {
    id: 11,
    memberId: 133,
    teamImg: 'https://www.ksponco.or.kr/sports/img/olparksoccer/know_1.jpg',
    title: '경기도 성남시에서 경기하실분을 모집합니다.',
    createdDate: '2024-04-17',
    count: 7,
    status: '모집중',
    requestCount: 1,
    stadium: '경기도 성남시 xx로 축구장',
  },
  {
    id: 12,
    memberId: 134,
    teamImg: 'https://www.ksponco.or.kr/sports/img/olparksoccer/know_1.jpg',
    title: '서울시 강동구에서 경기하실분을 찾습니다.',
    createdDate: '2024-04-16',
    count: 18,
    status: '모집중',
    requestCount: 0,
    stadium: '서울시 강동구 xx로 축구장',
  },
  {
    id: 13,
    memberId: 135,
    teamImg: 'https://www.ksponco.or.kr/sports/img/olparksoccer/know_1.jpg',
    title: '인천광역시 중구에서 경기하실분을 구합니다.',
    createdDate: '2024-04-15',
    count: 11,
    status: '모집중',
    requestCount: 2,
    stadium: '인천광역시 중구 xx로 축구장',
  },
];
export const getMatchingList = http.get('/api/matching/list', async ({ request }) => {
  const body = request.body;
  console.log(body);
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
