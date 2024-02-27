import { HttpResponse, http, delay } from 'msw';
import { ViewMatching } from '../../interface/matching';
let matchingList: ViewMatching[] = [
  {
    id: '1',
    memberId: '123',
    teamImg:
      'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',
    title: '경기도 성남시에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 20,
    status: '모집중',
    requestCount: 2,
    stadium: '경기도 성남시 xx로 땡땡경기장',
    img: [
      'http://www.dreamparkcf.com/images/sub/res01_05.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_06.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_07.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_10.jpg',
    ],
    nickName: '김땡땡',
    matchDate: '2024-05-12',
  },
  {
    id: '2',
    memberId: '124',
    teamImg:
      'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',
    title: '서울시 강남구에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 15,
    status: '모집중',
    requestCount: 3,
    stadium: '서울시 강남구 xx로 축구장',
    img: [
      'http://www.dreamparkcf.com/images/sub/res01_05.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_06.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_07.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_10.jpg',
    ],
    nickName: '김땡땡',
    matchDate: '2024-05-12',
  },
  {
    id: '3',
    memberId: '125',
    teamImg:
      'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',
    title: '경기도 용인시에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 18,
    status: '모집중',
    requestCount: 1,
    stadium: '경기도 용인시 xx로 땡땡경기장',
    img: [
      'http://www.dreamparkcf.com/images/sub/res01_05.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_06.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_07.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_10.jpg',
    ],
    nickName: '김땡땡',
    matchDate: '2024-05-12',
  },
  {
    id: '4',
    memberId: '126',
    teamImg:
      'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',
    title: '경기도 수원시에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 22,
    status: '모집중',
    requestCount: 4,
    stadium: '경기도 수원시 xx로 축구장',
    img: [
      'http://www.dreamparkcf.com/images/sub/res01_05.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_06.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_07.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_10.jpg',
    ],
    nickName: '김땡땡',
    matchDate: '2024-05-12',
  },
  {
    id: '5',
    memberId: '127',
    teamImg:
      'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',
    title: '서울시 서초구에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 17,
    status: '모집중',
    requestCount: 0,
    stadium: '서울시 서초구 xx로 땡땡경기장',
    img: [
      'http://www.dreamparkcf.com/images/sub/res01_05.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_06.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_07.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_10.jpg',
    ],
    nickName: '김땡땡',
    matchDate: '2024-05-12',
  },
  {
    id: '6',
    memberId: '128',
    teamImg:
      'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',
    title: '경기도 안양시에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 16,
    status: '모집중',
    requestCount: 1,
    stadium: '경기도 안양시 xx로 축구장',
    img: [
      'http://www.dreamparkcf.com/images/sub/res01_05.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_06.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_07.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_10.jpg',
    ],
    nickName: '김땡땡',
    matchDate: '2024-05-12',
  },
  {
    id: '7',
    memberId: '129',
    teamImg:
      'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',
    title: '인천광역시 계양구에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 14,
    status: '모집중',
    requestCount: 3,
    stadium: '인천광역시 계양구 xx로 땡땡경기장',
    img: [
      'http://www.dreamparkcf.com/images/sub/res01_05.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_06.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_07.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_10.jpg',
    ],
    nickName: '김땡땡',
    matchDate: '2024-05-12',
  },
  {
    id: '8',
    memberId: '130',
    teamImg:
      'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',
    title: '경기도 고양시에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 19,
    status: '모집중',
    requestCount: 2,
    stadium: '경기도 고양시 xx로 축구장',
    img: [
      'http://www.dreamparkcf.com/images/sub/res01_05.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_06.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_07.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_10.jpg',
    ],
    nickName: '김땡땡',
    matchDate: '2024-05-12',
  },
  {
    id: '9',
    memberId: '131',
    teamImg:
      'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',
    title: '서울시 송파구에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 21,
    status: '모집중',
    requestCount: 0,
    stadium: '서울시 송파구 xx로 땡땡경기장',
    img: [
      'http://www.dreamparkcf.com/images/sub/res01_05.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_06.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_07.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_10.jpg',
    ],
    nickName: '김땡땡',
    matchDate: '2024-05-12',
  },
  {
    id: '10',
    memberId: '132',
    teamImg:
      'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',
    title: '경기도 의정부시에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 23,
    status: '모집중',
    requestCount: 1,
    stadium: '경기도 의정부시 xx로 축구장',
    img: [
      'http://www.dreamparkcf.com/images/sub/res01_05.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_06.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_07.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_10.jpg',
    ],
    nickName: '김땡땡',
    matchDate: '2024-05-12',
  },
  {
    id: '11',
    memberId: '133',
    teamImg:
      'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',
    title: '경기도 부천시에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 18,
    status: '모집중',
    requestCount: 2,
    stadium: '경기도 부천시 xx로 땡땡경기장',
    img: [
      'http://www.dreamparkcf.com/images/sub/res01_05.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_06.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_07.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_10.jpg',
    ],
    nickName: '김땡땡',
    matchDate: '2024-05-12',
  },
  {
    id: '12',
    memberId: '134',
    teamImg:
      'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',
    title: '경기도 광명시에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 16,
    status: '모집중',
    requestCount: 0,
    stadium: '경기도 광명시 xx로 축구장',
    img: [
      'http://www.dreamparkcf.com/images/sub/res01_05.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_06.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_07.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_10.jpg',
    ],
    nickName: '김땡땡',
    matchDate: '2024-05-12',
  },
  {
    id: '13',
    memberId: '135',
    teamImg:
      'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',
    title: '경기도 구리시에서 경기하실분 구해요~',
    createdDate: '2024-04-27',
    modified_date: '2024-04-28',
    count: 14,
    status: '모집중',
    requestCount: 1,
    stadium: '경기도 구리시 xx로 땡땡경기장',
    img: [
      'http://www.dreamparkcf.com/images/sub/res01_05.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_06.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_07.jpg',
      'http://www.dreamparkcf.com/images/sub/res01_10.jpg',
    ],
    nickName: '김땡땡',
    matchDate: '2024-05-12',
  },
];
const getMatchingList = http.get('/api/matching/list', async () => {
  await delay(1000);
  return HttpResponse.json(matchingList);
});

const getMatching = http.get('/api/matching/:id', async ({ params }) => {
  const id = params.id as string;
  const matching = matchingList.filter((matching) => matching.id === id);
  await delay(1000);
  return HttpResponse.json(...matching);
});

const postMatching = http.post('/api/matching', ({ request }) => {
  const a = request.body;
  console.log(a);
});

const deleteMatching = http.delete('/api/matching/:id', ({ params }) => {
  const id = params.id as string;
  matchingList = matchingList.filter((matching) => matching.id !== id);
  return HttpResponse.json('삭제 성공');
});

export const matchingHandlers = [
  getMatchingList,
  getMatching,
  postMatching,
  deleteMatching,
];
