import { NextResponse } from 'next/server';
import { users } from '@/app/lib/data';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Find user
    const user = users.find((u) => u.email === email);

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password (for demo, accept 'admin123' for any user)
    const isValidPassword = password === 'admin123';

    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create session token (simplified for demo)
    const token = Buffer.from(`${user.id}:${Date.now()}`).toString('base64');

    const response = NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      token,
    });

    // Set cookie for server-side authentication
    response.cookies.set('token', token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
