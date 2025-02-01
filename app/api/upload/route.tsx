import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Returning static data as requested
  return NextResponse.json({ username: 'John Doe', age: 25 });
}
