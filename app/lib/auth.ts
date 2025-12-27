import { NextRequest } from 'next/server';
import { users } from './data';

/**
 * Verify if the request has a valid admin token
 * @param request The Next.js request object
 * @returns The user object if valid admin, null otherwise
 */
export function verifyAdminToken(request: NextRequest | Request) {
  try {
    // Get token from cookie
    let token: string | undefined;
    
    if ('cookies' in request) {
      // NextRequest
      token = (request as NextRequest).cookies.get('token')?.value;
    } else {
      // Standard Request
      const cookieHeader = request.headers.get('cookie');
      if (cookieHeader) {
        const cookies = Object.fromEntries(
          cookieHeader.split('; ').map(c => {
            const [key, ...v] = c.split('=');
            return [key, v.join('=')];
          })
        );
        token = cookies.token;
      }
    }

    if (!token) {
      return null;
    }

    // Decode token (simplified for demo - in production, use JWT)
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const [userId] = decoded.split(':');

    // Find user
    const user = users.find(u => u.id === userId);

    // Verify user exists and has admin role
    if (user && (user.role === 'admin' || user.role === 'editor')) {
      return user;
    }

    return null;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

/**
 * Create an unauthorized response
 */
export function unauthorizedResponse() {
  return new Response(
    JSON.stringify({ error: 'Unauthorized. Admin access required.' }),
    {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
