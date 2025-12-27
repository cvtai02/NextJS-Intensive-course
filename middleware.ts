import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Admin routes that require authentication
  const isAdminRoute = path.startsWith('/admin') && path !== '/admin/login';

  if (isAdminRoute) {
    // Check for token in cookies (for server-side auth)
    const token = request.cookies.get('token')?.value;
    
    // If no token and not already on login page, redirect to login
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
