# News Website - Complete Implementation Guide

## Overview
A full-featured news website built with Next.js 16, featuring a public front-end and a secure admin panel with authentication.

## Features

### Front-End (Public Website)
- ✅ Homepage with featured articles slider
- ✅ Multiple post formats (standard, video, audio, gallery, quote, link)
- ✅ Category-based filtering
- ✅ Individual article pages
- ✅ Responsive design with provided HTML template
- ✅ Full integration with simulated API

### Admin Panel
- ✅ Secure login system (authentication)
- ✅ Dashboard with article statistics
- ✅ Article management (Create, Read, Update, Delete)
- ✅ Category management
- ✅ Protected routes with middleware
- ✅ Responsive admin layout with navigation
- ✅ Multiple post format support

### API (Simulated)
- ✅ `/api/auth/login` - User authentication
- ✅ `/api/articles` - GET all articles, POST new article
- ✅ `/api/articles/[id]` - GET, PUT, DELETE specific article
- ✅ `/api/categories` - GET all categories, POST new category

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Access the Application
- **Front Page**: http://localhost:3000
- **Admin Login**: http://localhost:3000/admin/login
- **Admin Dashboard**: http://localhost:3000/admin/dashboard

### 4. Login Credentials
```
Email: admin@example.com
Password: admin123
```

## Project Structure

```
nextjs-intensive/
├── app/
│   ├── (public pages)
│   │   ├── page.tsx                 # Homepage
│   │   ├── posts/[id]/page.tsx      # Article detail
│   │   └── category/page.tsx         # Category filter
│   │
│   ├── admin/                        # Admin Panel
│   │   ├── layout.tsx               # Admin layout with nav
│   │   ├── login/page.tsx           # Login page
│   │   ├── dashboard/page.tsx       # Dashboard
│   │   ├── articles/
│   │   │   ├── new/page.tsx         # Create article
│   │   │   └── [id]/edit/page.tsx   # Edit article
│   │   └── categories/page.tsx      # Manage categories
│   │
│   ├── api/                          # API Routes
│   │   ├── auth/login/route.ts      # Authentication
│   │   ├── articles/route.ts        # Articles CRUD
│   │   ├── articles/[id]/route.ts   # Single article
│   │   └── categories/route.ts      # Categories
│   │
│   ├── components/                   # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── FeaturedSlider.tsx
│   │   └── ArticleCard.tsx
│   │
│   ├── lib/
│   │   ├── data.ts                  # Mock database
│   │   └── utils.ts                 # Helper functions
│   │
│   └── types/
│       └── index.ts                 # TypeScript types
│
├── middleware.ts                     # Route protection
└── public/                           # Static assets
```

## Key Features Explained

### 1. Authentication System
- Simulated JWT tokens stored in localStorage
- Middleware protects all `/admin/*` routes (except login)
- Auto-redirect to login if not authenticated

### 2. Article Management
- Create new articles with rich form
- Edit existing articles
- Delete articles with confirmation
- Support for multiple formats:
  - Standard (text + image)
  - Video (embed URL)
  - Audio (audio player)
  - Gallery (multiple images)
  - Quote (blockquote style)
  - Link (external link)

### 3. Category System
- Dynamic category management
- Add new categories from admin
- Category-based article filtering
- Article count per category

### 4. Data Simulation
All data is stored in memory (`app/lib/data.ts`):
- 15 sample articles
- 9 categories
- 2 admin users
- Changes persist during session but reset on server restart

## Admin Panel Usage

### Dashboard
- View statistics (total articles, categories, etc.)
- Browse all articles in table format
- Quick actions (View, Edit, Delete)
- Navigate to create new article

### Create Article
1. Go to Dashboard → "New Article" button
2. Fill in required fields:
   - Title
   - Excerpt
   - Content
   - Category
   - Author
   - Post Format
3. Add format-specific fields (video URL, audio URL, etc.)
4. Click "Create Article"

### Edit Article
1. Go to Dashboard
2. Click "Edit" on any article
3. Modify fields
4. Click "Save Changes"

### Manage Categories
1. Go to "Categories" in navigation
2. View all existing categories
3. Click "+ Add Category" to create new
4. Fill name and description
5. Categories appear immediately

## API Endpoints

### Authentication
```typescript
POST /api/auth/login
Body: { email: string, password: string }
Response: { user: User, token: string }
```

### Articles
```typescript
GET /api/articles
Query params: ?category=design&search=keyword&limit=10
Response: Article[]

POST /api/articles
Body: Article (without id)
Response: Article

GET /api/articles/[id]
Response: Article

PUT /api/articles/[id]
Body: Partial<Article>
Response: Article

DELETE /api/articles/[id]
Response: { success: boolean }
```

### Categories
```typescript
GET /api/categories
Response: Category[]

POST /api/categories
Body: { name: string, description: string }
Response: Category
```

## TypeScript Types

```typescript
interface Article {
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

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor';
}
```

## Technologies Used
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS (from template)
- **Authentication**: Simple token-based (demo)
- **State Management**: React useState/useEffect
- **Routing**: Next.js App Router

## Notes & Limitations

### Current Implementation
- Data is stored in memory (resets on server restart)
- Authentication is simplified (no real JWT validation)
- No database connection (pure simulation)
- No file upload (URLs only)
- No rich text editor (plain textarea)

### For Production
To make this production-ready, you would need to:
1. Add a real database (PostgreSQL, MongoDB, etc.)
2. Implement proper JWT authentication
3. Add file upload functionality
4. Integrate a rich text editor (TinyMCE, Quill, etc.)
5. Add image optimization
6. Implement proper error handling
7. Add input validation and sanitization
8. Add pagination for articles
9. Add search functionality
10. Add user roles and permissions

## Testing Guide

### Test Front-End
1. Visit http://localhost:3000
2. Verify homepage loads with articles
3. Click on an article to view details
4. Check different post formats render correctly
5. Test category filtering
6. Verify responsive design

### Test Admin Panel
1. Visit http://localhost:3000/admin/login
2. Login with demo credentials
3. Check dashboard loads with statistics
4. Create a new article
5. Edit an existing article
6. Delete an article
7. Add a new category
8. Navigate between pages
9. Test logout functionality
10. Try accessing admin without login (should redirect)

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Type Errors
```bash
# Check TypeScript
npx tsc --noEmit
```

## License
This is a training project for educational purposes.

---

**Created by**: NashTech Training Program
**Date**: December 2025
**Version**: 1.0.0
