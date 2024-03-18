import API from '@/api/api';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const res = await API.get(`/api/matchingDataList`);
    return new NextResponse(JSON.stringify(res.data));
  } catch (e) {
    return new NextResponse('에러' + e, { status: 500 });
  }
};
