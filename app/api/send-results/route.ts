import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  console.log('Received data:', body);

  return NextResponse.json(
    { message: 'Results received successfully' },
    { status: 200 }
  );
}
