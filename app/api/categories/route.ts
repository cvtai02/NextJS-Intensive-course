import { NextResponse } from 'next/server';
import { categories } from '@/app/lib/data';

// GET all categories
export async function GET() {
  return NextResponse.json(categories);
}

// POST new category (admin only)
export async function POST(request: Request) {
  try {
    const category = await request.json();
    
    // Generate new ID
    const newId = (Math.max(...categories.map((c) => parseInt(c.id))) + 1).toString();
    
    const newCategory = {
      ...category,
      id: newId,
      count: 0,
      slug: category.name.toLowerCase().replace(/\s+/g, '-'),
    };

    categories.push(newCategory);

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create category' },
      { status: 500 }
    );
  }
}
