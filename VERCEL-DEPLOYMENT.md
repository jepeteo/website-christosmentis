# Vercel Deployment Guide

## 🚀 Ready for Vercel Deployment

This project is fully configured and ready to deploy to Vercel.

## Prerequisites

- GitHub repository: https://github.com/jepeteo/website-christosmentis.git
- Vercel account (free): https://vercel.com

## Deployment Steps

### 1. Connect to Vercel

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import from GitHub: `jepeteo/website-christosmentis`
4. Vercel will auto-detect Next.js settings

### 2. Configure Environment Variables

In Vercel dashboard, add these environment variables (if using newsletter):

```
RESEND_API_KEY=your_resend_api_key_here
NEWSLETTER_FROM_EMAIL=newsletter@christosmentis.com
NEWSLETTER_REPLY_TO=info@christosmentis.com
```

**Note:** Newsletter is optional for initial deployment. The site works without it.

### 3. Deploy

Click "Deploy" - Vercel will:
- Install dependencies
- Build the Next.js app
- Deploy to a live URL

**Build time:** ~2-3 minutes

### 4. Custom Domain (Optional)

After deployment:
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., christosmentis.com)
3. Follow Vercel's DNS configuration instructions

---

## Project Configuration

### Build Settings (Auto-detected)

- **Framework:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Node Version:** 18.x or higher

### Environment

- **Production URL:** Will be assigned by Vercel
- **Preview URLs:** Auto-generated for each commit
- **Analytics:** Vercel Analytics included

---

## What's Included

✅ Next.js 15 optimized build
✅ Image optimization (Sharp)
✅ Tailwind CSS compiled
✅ TypeScript type checking
✅ Responsive design
✅ SEO metadata
✅ Performance optimizations

---

## Post-Deployment Checklist

After your first deployment:

- [ ] Test the live site on mobile and desktop
- [ ] Verify book page loads correctly
- [ ] Check that images display properly
- [ ] Test newsletter form (if configured)
- [ ] Verify SEO meta tags (View Source)
- [ ] Check Core Web Vitals in Vercel dashboard
- [ ] Set up custom domain (optional)
- [ ] Configure SSL (automatic with Vercel)

---

## Continuous Deployment

Once connected to GitHub, Vercel automatically:

- **Deploys** every push to `main` branch
- **Creates preview** for pull requests
- **Runs builds** with caching for speed
- **Monitors** performance metrics

### Making Updates

```bash
# Make changes locally
git add .
git commit -m "Your update description"
git push

# Vercel automatically deploys!
```

---

## Troubleshooting

### Build Fails

Check Vercel build logs for:
- Missing dependencies
- TypeScript errors
- Environment variables

### Images Not Loading

- Ensure images are in `public/` directory
- Check image paths start with `/`
- Verify image files are committed to Git

### Performance Issues

Vercel provides:
- Analytics dashboard
- Speed insights
- Real user monitoring

---

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: support@vercel.com

---

## Current Status

✅ Project structure ready
✅ All dependencies installed
✅ Build configuration complete
✅ Git repository synced
✅ Images optimized
✅ Content updated

**You're ready to deploy!** 🚀
