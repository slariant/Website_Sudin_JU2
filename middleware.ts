import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const authToken = request.cookies.get('auth_token')
    const isLoginPage = request.nextUrl.pathname === '/login'
    const isAdminPage = request.nextUrl.pathname.startsWith('/admin')

    // If trying to access admin page without token, redirect to login
    if (isAdminPage && !authToken) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // If trying to access login page WITH token, redirect to admin
    if (isLoginPage && authToken) {
        return NextResponse.redirect(new URL('/admin', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*', '/login'],
}
