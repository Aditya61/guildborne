import { NextResponse } from 'next/server';
import { handleLogin } from '@/lib/auth';

export async function POST(req: Request) {
    const data = await req.json();
    const result = await handleLogin(data);
    return NextResponse.json(result);
}