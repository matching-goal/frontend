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
        opponent: '박땡땡',
        result: 'win',
        score1: 3,
        score2: 2,
      },
    ],
  },
  '2': {
    matchingHistoryList: [
      {
        id: '1',
        opponent: '김땡땡',
        result: 'lose',
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
