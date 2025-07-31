import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/authUtils";

const PROTECTED_ROUTES = [
    "/guildcard",
    "/party"
]

export function middleware( request: NextRequest ) {
    const { pathname } = request.nextUrl;

    if (!PROTECTED_ROUTES.some(route => pathname.startsWith(route))) {
        return NextResponse.next();
    }

    const token = request.cookies.get('jwt')?.value;
    if (!token) {
        return NextResponse.redirect(new URL('/reception?error=unauthorized', request.url));
    }

    const user = verifyToken(token);
    if (!user) {
        return NextResponse.redirect(new URL('/reception?error=invalid', request.url));
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', user.id);
    requestHeaders.set('x-user-name', user.name);
    requestHeaders.set('x-user-email', user.email);
    requestHeaders.set('x-user-role', user.role);
    requestHeaders.set('x-user-emailVerified', String(user.emailVerified));
}