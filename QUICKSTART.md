# Quick Start Guide - christosmentis.com

## ✅ Project Status
✨ **Phase 1 Complete!** The core author portfolio is fully set up and running.

## 🚀 Current Setup

### What's Built
- ✅ Next.js 15 with TypeScript
- ✅ Tailwind CSS v3 with custom dark literary theme
- ✅ Complete component library (UI + Sections)
- ✅ 4 sample books (2 crime fiction, 2 finance)
- ✅ 1 series (Killer Mind)
- ✅ All major pages (Home, Books, About, Newsletter, Legal)
- ✅ Newsletter form with validation
- ✅ Responsive design
- ✅ SEO optimization

### Development Server
The site is currently running at **http://localhost:3001**

## 📝 Next Steps

### Immediate Actions
1. **Replace Placeholder Images**
   - Add actual book covers to `/public/images/books/`
   - Add author portrait to `/public/images/portraits/`
   - Update OG image at `/public/images/og-image.jpg`

2. **Configure Resend for Newsletter**
   - Sign up at https://resend.com
   - Get API key
   - Add to `.env.local`:
     ```
     RESEND_API_KEY=your_key_here
     NEWSLETTER_FROM_EMAIL=newsletter@christosmentis.com
     ```
   - Update `/src/app/api/newsletter/subscribe/route.ts` with Resend integration

3. **Update Content**
   - Review and edit book descriptions in `/src/content/books/`
   - Update bio in `/src/app/(pages)/about/page.tsx` if needed
   - Add actual purchase links for books

### Phase 2 Features to Add
- [ ] Series detail pages (`/series/[slug]`)
- [ ] Press & Media kit page
- [ ] Contact form
- [ ] Blog/Updates section
- [ ] Events calendar
- [ ] Multilingual support (Greek)
- [ ] E-commerce for signed copies

## 🛠️ Common Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm start                # Start production server

# Testing
npm run lint             # Run ESLint
npm run test             # Run tests (when configured)

# Type checking
npx tsc --noEmit         # Check TypeScript errors
```

## 📂 Key Files to Know

### Content Management
- `/src/content/books/*.mdx` - Book entries
- `/src/content/series/*.mdx` - Series definitions
- `/public/images/books/` - Book cover images

### Configuration
- `/tailwind.config.js` - Theme colors and typography
- `/next.config.js` - Next.js settings
- `/.env.local` - Environment variables (create from .env.example)

### Page Routes
- `/src/app/page.tsx` - Homepage
- `/src/app/(pages)/books/page.tsx` - Books index
- `/src/app/(pages)/books/[slug]/page.tsx` - Individual book pages
- `/src/app/(pages)/about/page.tsx` - About page
- `/src/app/(pages)/newsletter/page.tsx` - Newsletter page

### Components
- `/src/components/layout/` - Header, Footer, Navigation
- `/src/components/sections/` - Hero, BooksGrid, SeriesShelf, etc.
- `/src/components/ui/` - Button, Card, Badge, Input, etc.
- `/src/components/forms/` - NewsletterForm

## 🎨 Design System

### Colors (Tailwind Classes)
- `bg-cm-bg` - Main background (#0B0F14)
- `bg-cm-surface` - Card/surface background (#121822)
- `text-cm-primary` - Primary accent (#C0A36E - brass)
- `text-cm-headline` - Headlines (#EAE7DF)
- `text-cm-body` - Body text (#D1D5DB)
- `text-cm-muted` - Muted text (#9CA3AF)

### Typography
- `font-display` - Cormorant Garamond (headings)
- `font-body` - Inter (body text)
- `text-h1`, `text-h2`, `text-h3` - Heading sizes
- `text-body` - Body text size (18px)

### Components
All UI components support dark mode by default and follow accessibility best practices.

## 📱 Testing the Site

### Pages to Check
1. **Homepage** - http://localhost:3001
   - Hero with featured book
   - Series shelf
   - Book grids by genre
   - Newsletter CTA

2. **Books Page** - http://localhost:3001/books
   - Grid of all books
   - Filter by genre (upcoming)

3. **Book Detail** - http://localhost:3001/books/fragments-of-a-killer-mind
   - Cover image
   - Book info
   - Purchase links
   - Description

4. **About** - http://localhost:3001/about
   - Author bio
   - Portrait placeholder
   - Writing philosophy

5. **Newsletter** - http://localhost:3001/newsletter
   - Subscription form
   - Benefits list
   - Privacy notice

6. **Legal Pages**
   - http://localhost:3001/legal/privacy
   - http://localhost:3001/legal/terms

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is in use, Next.js will automatically use the next available port (3001, 3002, etc.)

### Images Not Loading
- Ensure image files are in `/public/images/`
- SVG placeholders are currently used - replace with actual JPG/PNG images

### Newsletter Form Not Working
- API route is set up but needs Resend configuration
- Check console for errors
- Verify `.env.local` has the required variables

## 📚 Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Docs](https://zod.dev/)

## 🎉 You're Ready!

The foundation is solid. Now it's time to:
1. Add real content and images
2. Configure the newsletter integration
3. Deploy to Vercel
4. Start promoting the site!

Questions? Check the main README.md or review the PRD.md for the full project requirements.
