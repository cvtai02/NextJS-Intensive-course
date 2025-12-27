import { NextResponse } from 'next/server';
import { categories } from '@/app/lib/data';
import { verifyAdminToken, unauthorizedResponse } from '@/app/lib/auth';

// GET single category by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const category = categories.find((c) => c.id === id);

  if (!category) {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 });
  }

  return NextResponse.json(category);
}

// PUT update category (admin only)
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
    const index = categories.findIndex((c) => c.id === id);

    if (index === -1) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    // Update slug if name changed
    if (updatedData.name && updatedData.name !== categories[index].name) {
      updatedData.slug = updatedData.name.toLowerCase().replace(/\s+/g, '-');
    }

    categories[index] = { ...categories[index], ...updatedData };

    return NextResponse.json(categories[index]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update category' },
      { status: 500 }
    );
  }
}

// DELETE category (admin only)
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
    const index = categories.findIndex((c) => c.id === id);

    if (index === -1) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    categories.splice(index, 1);

    return NextResponse.json({ message: 'Category deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete category' },
      { status: 500 }
    );
  }
}
