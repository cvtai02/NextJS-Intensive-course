'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Skip auth check for login page
    if (pathname === '/admin/login') {
      return;
    }

    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      router.push('/admin/login');
      return;
    }

    setUser(JSON.parse(userData));
  }, [pathname, router]);

  const handleLogout = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Clear the cookie by calling logout API
    await fetch('/api/auth/logout', { method: 'POST' });
    
    // Force page reload to clear all state
    window.location.href = '/admin/login';
  };

  // Show login page without layout
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // Don't render until user is loaded
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-gray-800">
                <Link href="/admin/dashboard">News Admin</Link>
              </h1>
              <nav className="hidden md:flex space-x-4">
                <Link
                  href="/admin/dashboard"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === '/admin/dashboard'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin/articles/new"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === '/admin/articles/new'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  New Article
                </Link>
                <Link
                  href="/admin/categories"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === '/admin/categories'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Categories
                </Link>
                <Link
                  href="/admin/blogs"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname?.startsWith('/admin/blogs')
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Blogs
                </Link>
                <Link
                  href="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-purple-700 hover:bg-purple-100"
                  target="_blank"
                >
                  View Site →
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm">
                <div className="font-medium text-gray-800">{user.name}</div>
                <div className="text-gray-500">{user.role}</div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-600 text-sm">
            © 2025 News Website Admin Panel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
