import API from '@/api/api';
import { ViewMatching } from '@/interface/matching';
import { NextRequest, NextResponse } from 'next/server';
interface Params {
  params: { id: string };
}

export const GET = async (req: NextRequest, { params }: Params) => {
  const res = await API.get('/api/matchingDataList');
  const matchingList: ViewMatching[] = res.data;
  const targetMatching = matchingList.filter((matching) => matching.id === params.id)[0];
  if (!targetMatching) {
    return new NextResponse('존재하지 않는 id', { status: 404 });
  }
  return new NextResponse(JSON.stringify(targetMatching));
};

export const DELETE = async (req: NextRequest, { params }: Params) => {
  const res = await API.delete(`/api/matchingDataList?id=${params.id}`);
  return new NextResponse(JSON.stringify(res.data));
};

export const PATCH = async (req: NextRequest, { params }: Params) => {
  const body = await req.json();
  console.log(body);
  const res = await API.patch(`/api/matchingDataList?id=${params.id}`, body);
  return new NextResponse(JSON.stringify(res.data));
};
