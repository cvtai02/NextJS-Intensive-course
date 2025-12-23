# News Website - Next.js Final Exercise

A full-featured news website built with Next.js, featuring a public front-end and an authenticated admin dashboard.

## 🎯 Project Overview

This project fulfills the Final Exercise requirements:
- ✅ Front page with news articles (converted from provided HTML templates)
- ✅ Admin dashboard with authentication
- ✅ Simulated API endpoints for content management
- ✅ Full CRUD operations for articles and categories

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd "c:\Users\TaiChuVan\OneDrive - NASHTECH\Desktop\Nextjs\nextjs-intensive"
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
- **Front Page**: [http://localhost:3000](http://localhost:3000)
- **Admin Login**: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

## 🔐 Admin Credentials

Use these credentials to access the admin dashboard:

- **Email**: `admin@example.com`
- **Password**: `admin123`

Alternative account:
- **Email**: `editor@example.com`
- **Password**: `admin123`

## 📁 Project Structure

```
nextjs-intensive/
├── app/
│   ├── api/                      # API routes (simulated backend)
│   │   ├── articles/            # Article CRUD endpoints
│   │   ├── categories/          # Category endpoints
│   │   └── auth/                # Authentication endpoints
│   ├── components/              # Reusable React components
│   │   ├── Header.tsx           # Site header with navigation
│   │   ├── Footer.tsx           # Site footer
│   │   └── ArticleCard.tsx      # Article display card
│   ├── admin/                   # Admin dashboard pages
│   │   ├── login/               # Login page
│   │   ├── dashboard/           # Admin home with article list
│   │   └── articles/            # Article management
│   ├── posts/                   # Public post pages
│   │   └── [id]/               # Dynamic post detail page
│   ├── category/                # Category pages
│   │   └── [slug]/             # Dynamic category page
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   ├── lib/                     # Utility functions and data
│   │   └── data.ts             # Mock data for API
│   ├── types/                   # TypeScript type definitions
│   │   └── index.ts            # Article, Category, User types
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage
└── public/                      # Static assets
    ├── css/                    # Stylesheets from template
    ├── images/                 # Images from template
    ├── fonts/                  # Font files
    └── js/                     # JavaScript files

```

## 🌟 Features

### Public Front-End
- **Homepage**: Displays featured and recent articles in masonry layout
- **Category Pages**: Filter articles by category (Design, Photography, Lifestyle, Music, Technology)
- **Single Post Pages**: Detailed article view with support for multiple formats:
  - Standard posts
  - Video posts (embedded video player)
  - Audio posts
  - Gallery posts (multiple images)
- **About Page**: Information about the site
- **Contact Page**: Contact form and information
- **Responsive Design**: Mobile-friendly layout
- **Search Functionality**: Search bar in header

### Admin Dashboard
- **Authentication**: Secure login system with localStorage-based sessions
- **Article Management**:
  - View all articles in a table format
  - Create new articles with rich form
  - Edit existing articles
  - Delete articles
  - Support for all post formats (standard, video, audio, gallery)
- **Category Management**: Manage article categories
- **User-Friendly Interface**: Clean, modern admin UI with Tailwind-like styling

## 🔧 API Endpoints

### Articles
- `GET /api/articles` - Get all articles (with optional filters)
  - Query params: `?category=design`, `?search=keyword`, `?limit=10`
- `GET /api/articles/[id]` - Get single article
- `POST /api/articles` - Create new article (admin)
- `PUT /api/articles/[id]` - Update article (admin)
- `DELETE /api/articles/[id]` - Delete article (admin)

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create new category (admin)

### Authentication
- `POST /api/auth/login` - Login endpoint

## 💾 Data Storage

This project uses **in-memory data storage** for demonstration purposes. All data is stored in [app/lib/data.ts](app/lib/data.ts) and resets when the server restarts.

For production, you would replace this with:
- Database (PostgreSQL, MongoDB, MySQL)
- Prisma ORM or similar
- Real authentication with NextAuth.js or Auth0
- File uploads for images

## 🎨 Styling

The project uses the original template's CSS files:
- `base.css` - Base styles and reset
- `vendor.css` - Third-party library styles
- `main.css` - Main template styles
- `fonts.css` - Font definitions

Admin pages use inline Tailwind-style classes for modern UI.

## 📝 TypeScript Types

All data structures are fully typed:
- `Article` - News article with metadata
- `Category` - Article category
- `User` - Admin user
- `AuthSession` - Authentication session

## 🚢 Deployment

To build for production:

```bash
npm run build
npm start
```

The app will be optimized and ready for deployment to:
- Vercel (recommended for Next.js)
- Netlify
- AWS
- Any Node.js hosting platform

## 📚 Learning Outcomes

This project demonstrates:
1. ✅ Converting static HTML templates to Next.js components
2. ✅ Next.js App Router and dynamic routing
3. ✅ API Routes for backend functionality
4. ✅ Authentication and protected routes
5. ✅ TypeScript integration
6. ✅ CRUD operations
7. ✅ Form handling and validation
8. ✅ Responsive design implementation
9. ✅ State management with React hooks
10. ✅ Client and Server Components

## 🔍 Key Files to Review

- [app/page.tsx](app/page.tsx) - Homepage implementation
- [app/components/Header.tsx](app/components/Header.tsx) - Navigation component
- [app/admin/dashboard/page.tsx](app/admin/dashboard/page.tsx) - Admin dashboard
- [app/api/articles/route.ts](app/api/articles/route.ts) - Article API
- [app/lib/data.ts](app/lib/data.ts) - Mock data

## 🤝 Contributing

This is a training project. Feel free to:
- Add more features (user management, comments, likes)
- Improve the admin UI
- Add real database integration
- Implement file uploads
- Add more post formats

## 📄 License

Original template: Creative Commons Attribution 3.0 by Styleshout
Next.js implementation: For educational purposes

---

**Built with Next.js 16.1.0 | React 19 | TypeScript 5**
