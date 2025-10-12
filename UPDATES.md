# Site Updates - Single Book Configuration

## ✅ Changes Made

### Content Changes
- **Removed** 3 placeholder books:
  - `echoes-of-intent.mdx`
  - `psychology-of-wealth.mdx`
  - `rational-investor-irrational-market.mdx`
  
- **Kept** only `fragments-of-a-killer-mind.mdx` (the one published book)

- **Updated** Killer Mind series to show only 1 book with "Book 2 Coming Soon"

### Images
- **Removed** placeholder cover images for unpublished books
- **Kept** `fragments-cover.jpg` (the only book with a real cover)

### Site Description Updates
Updated all mentions from "crime fiction and finance writing" to just "psychological crime fiction":

- ✅ Homepage Hero section
- ✅ Footer description
- ✅ Books page header and description
- ✅ About page metadata
- ✅ Main site metadata (layout.tsx)
- ✅ OpenGraph and Twitter card descriptions
- ✅ OG image text

### Technical Fixes
- ✅ Fixed Next.js config to allow SVG images (`dangerouslyAllowSVG: true`)
- ✅ Fixed Button component to properly handle `asChild` prop (no more React warnings)
- ✅ Removed unused imports from homepage (finance books, etc.)

### Author Bio
- ✅ Bio already matches your provided text exactly (no changes needed)

## 📊 Current Site State

### Published Content
- **1 Book**: Fragments of a Killer Mind
- **1 Series**: Killer Mind (with 1 book)
- **Genre**: Crime Fiction only
- **Status**: Ready with placeholder cover image

### Pages Working
- ✅ Homepage (Hero + Series Shelf + Quote + Newsletter CTA)
- ✅ Books page (showing only Fragments)
- ✅ Book detail page for Fragments
- ✅ About page (with correct bio)
- ✅ Newsletter page
- ✅ Privacy & Terms pages

### What's Clean
- No references to finance books
- No broken links to removed books
- No placeholder books showing up
- Single focused message: psychological crime fiction

## 🎯 Next Steps

### Immediate
1. **Replace** `fragments-cover.jpg` with your actual book cover image
   - Location: `public/images/books/fragments-cover.jpg`
   - Format: JPG or PNG recommended
   - Size: Aspect ratio 2:3 (e.g., 400x600px or higher resolution)

2. **Optional**: Add author portrait
   - Location: `public/images/portraits/`
   - Update About page to show actual photo instead of placeholder

3. **Review** book details in `fragments-of-a-killer-mind.mdx`:
   - Purchase links (currently placeholder URLs)
   - ISBN (if different)
   - Page count
   - Publication date

### Future Books
When you're ready to add more books:
1. Create new `.mdx` file in `src/content/books/`
2. Add book cover to `public/images/books/`
3. Update series file if part of Killer Mind series
4. The site will automatically display the new book!

## 🚀 Site is Ready
The site is now focused on your one published book and can easily scale as you add more titles.
