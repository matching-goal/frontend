import { MatchingHistoryInfo } from '@/interface/matching';
import { NextRequest, NextResponse } from 'next/server';

interface MatchingHistoryBox {
  [key: string]: {
    matchingHistoryList: MatchingHistoryInfo[];
  };
}
const matchingHistoryBox: MatchingHistoryBox = {
  '1': {
    matchingHistoryList: [
      {
        id: '1',
        opponentNickname: '박땡땡',
        opponentId: '2',
        opponentImg: '',
        is_win: true,
        score1: 3,
        score2: 2,
      },
    ],
  },
  '2': {
    matchingHistoryList: [
      {
        id: '1',
        opponentImg:
          'https://upload.wikimedia.org/wikipedia/ko/b/b1/FC_%EB%B0%94%EB%A5%B4%EC%85%80%EB%A1%9C%EB%82%98_%EB%A1%9C%EA%B3%A0.svg',
        opponentId: '1',
        opponentNickname: '김땡땡',
        is_win: false,
        score1: 2,
        score2: 3,
      },
    ],
  },
};

interface Params {
  params: { id: string };
}
export const GET = (req: NextRequest, { params }: Params) => {
  const data = matchingHistoryBox[params.id].matchingHistoryList;
  if (!data) {
    return new NextResponse('에러요', { status: 404 });
  }
  return new NextResponse(JSON.stringify(data));
};
