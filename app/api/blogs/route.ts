import { NextResponse } from 'next/server';
import { blogs } from '@/app/lib/data';
import { verifyAdminToken, unauthorizedResponse } from '@/app/lib/auth';

// GET all blogs or filter by status
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  const search = searchParams.get('search');

  let filteredBlogs = [...blogs];

  // Filter by status
  if (status && (status === 'draft' || status === 'published')) {
    filteredBlogs = filteredBlogs.filter((blog) => blog.status === status);
  }

  // Search by title or excerpt
  if (search) {
    const searchLower = search.toLowerCase();
    filteredBlogs = filteredBlogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchLower) ||
        blog.excerpt.toLowerCase().includes(searchLower)
    );
  }

  // Sort by date (newest first)
  filteredBlogs.sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return NextResponse.json(filteredBlogs);
}

// POST new blog (admin only)
export async function POST(request: Request) {
  // Verify admin authorization
  const user = verifyAdminToken(request);
  if (!user) {
    return unauthorizedResponse();
  }

  try {
    const blog = await request.json();
    
    // Generate new ID
    const newId = (Math.max(...blogs.map((b) => parseInt(b.id))) + 1).toString();
    
    // Generate slug from title
    const slug = blog.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    const newBlog = {
      ...blog,
      id: newId,
      slug: slug,
      publishDate: new Date().toISOString().split('T')[0],
      views: 0,
      author: user.name,
      status: blog.status || 'draft',
    };

    blogs.push(newBlog);

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}
