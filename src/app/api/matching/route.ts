import API from '@/api/api';
import { BASE_MOCK_API_URL } from '@/constants/url';
import { NextResponse, NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const res = await API.post(`/api/matchingDataList`, body);

  return new NextResponse(JSON.stringify(res.data));
};
