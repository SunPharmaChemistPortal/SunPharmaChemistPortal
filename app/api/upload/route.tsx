import { NextResponse } from 'next/server';
// export async function POST(request: Request) {
export async function POST() {
  // Returning static data as requested
  return NextResponse.json({ username: 'John Doe', age: 25 });
} 