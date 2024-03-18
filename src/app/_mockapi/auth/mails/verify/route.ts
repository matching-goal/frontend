import { UserInfo } from '@/interface/user';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body: { code: string } & Pick<UserInfo, 'email'> = await req.json();
  console.log(body);
  if (body.code === '12345') {
    return new NextResponse(JSON.stringify('true'));
  }
  return new NextResponse(JSON.stringify('false'));
};
