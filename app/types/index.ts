export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorAvatar: string;
  publishDate: string;
  featuredImage: string;
  tags: string[];
  postFormat: 'standard' | 'video' | 'audio' | 'gallery' | 'quote' | 'link';
  videoUrl?: string;
  audioUrl?: string;
  galleryImages?: string[];
  quote?: string;
  quoteAuthor?: string;
  linkUrl?: string;
  linkDescription?: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  publishDate: string;
  featuredImage: string;
  tags: string[];
  status: 'draft' | 'published';
  views: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor';
}

export interface AuthSession {
  user: User;
  token: string;
}
