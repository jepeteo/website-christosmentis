# Console Errors - Troubleshooting Guide

## Common Errors and Solutions

### 1. React "asChild" Prop Warning
**Error:** `React does not recognize the 'asChild' prop on a DOM element`

**Cause:** The Button component passes `asChild` to the DOM element

**Status:** Already fixed in the Button component (it's now extracted before passing props)

---

### 2. Image Loading Errors
**Error:** `The requested resource has type "image/svg+xml" but dangerouslyAllowSVG is disabled`

**Status:** ✅ Fixed - Added `dangerouslyAllowSVG: true` to next.config.js

---

### 3. Sharp Module Error
**Error:** `Could not load the "sharp" module using the win32-x64 runtime`

**Solution:** Already attempted - `npm install sharp`

---

### 4. Type Definition Errors
**Error:** `Cannot find type definition file for 'react'`

**Solution Needed:**
```bash
npm install @types/react @types/react-dom @types/node
```

---

## Quick Diagnostics

### Check Current Errors
1. Open browser at http://localhost:3001
2. Open Developer Console (F12)
3. Look for red errors in Console tab
4. Check Network tab for failed requests

### Common Sources of Errors

**Browser Console Errors:**
- Component rendering issues
- Hydration mismatches
- Missing props or invalid types
- Failed API calls

**Terminal/Build Errors:**
- TypeScript compilation errors
- Module resolution issues
- Missing dependencies

---

## What to Check

Please provide the specific error messages you're seeing, including:

1. **Error message text** (copy/paste)
2. **Where you see it** (browser console vs terminal)
3. **When it appears** (on page load, specific page, etc.)
4. **File/line number** if shown

This will help diagnose the exact issue!

---

## Current Status

✅ Dev server running at http://localhost:3001
✅ Book cover image path fixed (.png)
✅ Book information updated
⚠️ Waiting for specific error details to troubleshoot

