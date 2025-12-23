import { NextResponse } from 'next/server';
import { articles } from '@/app/lib/data';

// GET all articles or filter by category
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const limit = searchParams.get('limit');

  let filteredArticles = [...articles];

  // Filter by category
  if (category) {
    filteredArticles = filteredArticles.filter(
      (article) => article.category === category
    );
  }

  // Search by title or excerpt
  if (search) {
    const searchLower = search.toLowerCase();
    filteredArticles = filteredArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchLower) ||
        article.excerpt.toLowerCase().includes(searchLower)
    );
  }

  // Limit results
  if (limit) {
    filteredArticles = filteredArticles.slice(0, parseInt(limit));
  }

  // Sort by date (newest first)
  filteredArticles.sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return NextResponse.json(filteredArticles);
}

// POST new article (admin only)
export async function POST(request: Request) {
  try {
    const article = await request.json();
    
    // Generate new ID
    const newId = (Math.max(...articles.map((a) => parseInt(a.id))) + 1).toString();
    
    const newArticle = {
      ...article,
      id: newId,
      publishDate: new Date().toISOString().split('T')[0],
    };

    articles.push(newArticle);

    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create article' },
      { status: 500 }
    );
  }
}
