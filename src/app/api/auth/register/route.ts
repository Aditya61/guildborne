import { NextResponse } from 'next/server';
import { handleRegister } from '@/lib/auth';

export async function POST(req: Request) {
    const data = await req.json();
    const result = await handleRegister(data);
    return NextResponse.json(result);
}