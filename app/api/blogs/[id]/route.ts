import { NextResponse } from 'next/server';
import { blogs } from '@/app/lib/data';
import { verifyAdminToken, unauthorizedResponse } from '@/app/lib/auth';

// GET single blog by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  return NextResponse.json(blog);
}

// PUT update blog (admin only)
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // Verify admin authorization
  const user = verifyAdminToken(request);
  if (!user) {
    return unauthorizedResponse();
  }

  try {
    const { id } = await params;
    const updatedData = await request.json();
    const index = blogs.findIndex((b) => b.id === id);

    if (index === -1) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Update slug if title changed
    if (updatedData.title && updatedData.title !== blogs[index].title) {
      updatedData.slug = updatedData.title.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }

    blogs[index] = { ...blogs[index], ...updatedData };

    return NextResponse.json(blogs[index]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

// DELETE blog (admin only)
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // Verify admin authorization
  const user = verifyAdminToken(request);
  if (!user) {
    return unauthorizedResponse();
  }

  try {
    const { id } = await params;
    const index = blogs.findIndex((b) => b.id === id);

    if (index === -1) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    blogs.splice(index, 1);

    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}
