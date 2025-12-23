# 🚀 Quick Start Guide

## Get Started in 3 Steps

### 1️⃣ Start the Server
```bash
cd "c:\Users\TaiChuVan\OneDrive - NASHTECH\Desktop\Nextjs\nextjs-intensive"
npm run dev
```

### 2️⃣ View the Website
Open your browser:
- **Homepage**: http://localhost:3000
- **Admin Login**: http://localhost:3000/admin/login

### 3️⃣ Login to Admin
```
Email: admin@example.com
Password: admin123
```

---

## 📍 Key URLs

| Page | URL | Description |
|------|-----|-------------|
| Homepage | `/` | Main page with articles |
| Category | `/category/design` | Filter by category |
| Single Post | `/posts/1` | View article details |
| About | `/about` | About page |
| Contact | `/contact` | Contact form |
| Admin Login | `/admin/login` | Login to admin |
| Dashboard | `/admin/dashboard` | Admin home |
| New Article | `/admin/articles/new` | Create article |

---

## 🎯 Test Checklist

### Public Site
- [ ] Browse homepage articles
- [ ] Click on an article to view details
- [ ] Navigate to different categories
- [ ] Check About page
- [ ] Try Contact form
- [ ] Test mobile menu (resize browser)
- [ ] Use search bar

### Admin Dashboard
- [ ] Login with demo credentials
- [ ] View articles table
- [ ] Create a new article
- [ ] Edit an existing article
- [ ] Delete an article
- [ ] Test different post formats
- [ ] Logout

---

## 📂 Project Structure

```
app/
├── api/              → Backend API routes
├── components/       → Reusable UI components
├── admin/           → Admin pages
│   ├── login/       → Login page
│   ├── dashboard/   → Article management
│   └── articles/    → CRUD operations
├── posts/[id]/      → Single post view
├── category/[slug]/ → Category filter
├── about/           → About page
├── contact/         → Contact page
├── lib/             → Mock data & utilities
└── types/           → TypeScript definitions
```

---

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 💡 Key Features

### Public Site
- ✨ Masonry grid layout
- 📱 Responsive design
- 🎬 Video/Audio/Gallery posts
- 🔍 Search functionality
- 📂 Category filtering
- 👤 Author profiles

### Admin Dashboard
- 🔐 Secure authentication
- ➕ Create articles
- ✏️ Edit articles
- 🗑️ Delete articles
- 📊 Articles table view
- 🎨 Clean, modern UI

---

## 🐛 Troubleshooting

**Server won't start?**
```bash
# Kill existing process and restart
npm run dev
```

**Can't login?**
- Use: admin@example.com / admin123
- Check browser console for errors
- Clear localStorage if needed

**Images not showing?**
- Ensure files are in `/public` folder
- Check image paths start with `/`

**API errors?**
- Server must be running on port 3000
- Check console for error messages

---

## 📚 Documentation

- **Full README**: See `PROJECT_README.md`
- **Implementation Details**: See `IMPLEMENTATION_SUMMARY.md`
- **Next.js Docs**: https://nextjs.org/docs

---

## 🎓 Learning Resources

**What You've Learned:**
1. Next.js App Router
2. React Server Components
3. API Routes
4. Dynamic Routing
5. Authentication
6. TypeScript
7. CRUD Operations
8. Form Handling

**Next Steps:**
- Deploy to Vercel
- Add a real database
- Implement file uploads
- Add rich text editor
- Create pagination

---

## 📞 Support

If you encounter issues:
1. Check the console for errors
2. Review the documentation files
3. Ensure all dependencies are installed
4. Verify the server is running

---

**Happy Coding! 🎉**

*Last updated: December 19, 2025*
