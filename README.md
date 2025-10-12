# christosmentis.com

Modern, classy author portfolio for **Christos Mentis** — Greek author writing psychological crime fiction and finance non-fiction.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router) + React 18
- **Styling:** Tailwind CSS v3 + Custom Design System
- **Content:** MDX for books and series
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend (newsletter double opt-in)
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

## 🎨 Design Philosophy

Dark literary aesthetic with elegant typography, subtle animations, and a focus on readability. The design evokes a noir, cinematic mood with brass-like accents and refined spacing.

### Color Palette
- Background: `#0B0F14` (cm-bg)
- Surface: `#121822` (cm-surface)
- Primary: `#C0A36E` (cm-primary - brass/gold)
- Headline: `#EAE7DF` (cm-headline)
- Body: `#D1D5DB` (cm-body)

## 📦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd christosmentis.com
```

2. Install dependencies
```bash
npm install
```

3. Copy environment variables
```bash
cp .env.example .env.local
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
christosmentis.com/
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── (pages)/           # Page routes
│   │   ├── api/               # API routes
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/
│   │   ├── layout/            # Header, Footer, Navigation
│   │   ├── sections/          # Hero, BooksGrid, SeriesShelf, etc.
│   │   ├── ui/                # Button, Card, Badge, Input
│   │   └── forms/             # NewsletterForm
│   ├── content/
│   │   ├── books/             # MDX book content
│   │   └── series/            # MDX series content
│   ├── lib/
│   │   ├── mdx/               # MDX parsing utilities
│   │   ├── utils/             # Helper functions
│   │   └── validations/       # Zod schemas
│   └── types/                 # TypeScript types
├── public/
│   └── images/                # Book covers, portraits
└── package.json
```

## 🎯 Features (Phase 1)

- [x] Dark literary design system
- [x] Homepage with hero, series shelf, and book grids
- [x] Books index with filtering
- [x] Individual book detail pages
- [x] About the Author page
- [x] Newsletter subscription with validation
- [x] Legal pages (Privacy, Terms)
- [x] Responsive design
- [x] Accessibility (WCAG 2.1 AA)
- [x] SEO optimization

## 🔜 Coming Soon (Phase 2)

- [ ] Resend integration for newsletter (double opt-in)
- [ ] Series detail pages
- [ ] Press & Media kit
- [ ] Events and readings
- [ ] Multilingual support (Greek)
- [ ] E-commerce for signed copies
- [ ] Blog / author updates

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e
```

## 🚢 Deployment

This project is optimized for deployment on Vercel:

```bash
npm run build
```

## 📝 Content Management

Books and series are managed via MDX files in `src/content/`. To add a new book:

1. Create a new `.mdx` file in `src/content/books/`
2. Add front matter with book metadata
3. Write the book description and excerpts in MDX
4. Add the book cover image to `public/images/books/`

See existing book files for reference.

## 🤝 Contributing

This is a personal author website. For inquiries, please contact through the website.

## 📄 License

All content © 2025 Christos Mentis. All rights reserved.

---

Built with ❤️ using Next.js and Tailwind CSS
