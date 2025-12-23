import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
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

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
