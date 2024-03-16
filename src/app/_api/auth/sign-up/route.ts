import API from '@/api/api';
import { CreateUser } from '@/interface/user';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body: CreateUser = await req.json();
  const res = await API.post('/api/userDataList', body);

  return new NextResponse(JSON.stringify(res.data));
};
