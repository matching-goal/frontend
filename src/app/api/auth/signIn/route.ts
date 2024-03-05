import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  return new NextResponse('홀리몰리~');
};

export const POST = async () => {
  const res = await fetch('/api/auth/sign-in');
  const data = await res.json();
  console.log(res);
  return new NextResponse('뭔데용');
};
