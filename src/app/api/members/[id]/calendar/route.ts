import { NextRequest, NextResponse } from 'next/server';
import { MatchingDateInfo } from '@/interface/calendar';
import { UserInfo } from '@/interface/user';

interface MatchingDateBox {
  [key: string]: {
    matchingDateList: MatchingDateInfo[];
  };
}
type UserInfoSubset = Pick<UserInfo, 'memberId' | 'nickname'>;

interface MatchingPostData extends Omit<MatchingDateInfo, 'id' | 'opponent'> {
  teamA: UserInfoSubset;
  teamB: UserInfoSubset;
}
const matchingDateInfo: MatchingDateBox = {
  '1': {
    matchingDateList: [
      {
        gameId: 1,
        opponentNickname: '박땡땡',
        date: '2024-04-15',
        time: '15:25',
        stadium: 'xx구장',
      },
    ],
  },
  '2': {
    matchingDateList: [
      {
        gameId: 1,
        opponentNickname: '김땡땡',
        date: '2024-04-15',
        time: '15:25',
        stadium: 'xx구장',
      },
    ],
  },
};

interface Params {
  params: { id: string };
}
export const GET = (req: NextRequest, { params }: Params) => {
  const data = matchingDateInfo[params.id].matchingDateList;
  if (!data) {
    return new NextResponse('에러요', { status: 404 });
  }
  return new NextResponse(JSON.stringify(data));
};
