import { NextRequest, NextResponse } from 'next/server'
import { getSessionCookie } from 'better-auth/cookies'

const publicAdminPaths = [
  '/admin/login',
  '/admin/forgot-password',
  '/admin/reset-password',
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const sessionCookie = getSessionCookie(request)
  const isPublicAdminPath = publicAdminPaths.some((path) => pathname === path)

  if (pathname.startsWith('/admin') && !isPublicAdminPath && !sessionCookie) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  if (pathname === '/admin/login' && sessionCookie) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
}
