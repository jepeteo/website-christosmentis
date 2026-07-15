'use server'

import { put } from '@vercel/blob'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { db } from '@/lib/db'
import { books } from '@/lib/db/schema'
import { requireSession } from '@/lib/auth/session'
import { bookFormSchema, type BookFormData } from '@/lib/validations/schemas'

function revalidateBookPaths(slug: string) {
  revalidatePath('/')
  revalidatePath('/books')
  revalidatePath(`/books/${slug}`)
  revalidatePath('/sitemap.xml')
  revalidatePath('/admin')
  revalidatePath('/admin/books')
}

export async function createBook(data: BookFormData) {
  await requireSession()
  const parsed = bookFormSchema.parse(data)

  const [book] = await db
    .insert(books)
    .values({
      slug: parsed.slug,
      title: parsed.title,
      genre: parsed.genre,
      seriesSlug: parsed.seriesSlug || null,
      position: parsed.position ?? null,
      cover: parsed.cover,
      logline: parsed.logline,
      description: parsed.description,
      excerpt: parsed.excerpt || null,
      isbn: parsed.isbn || null,
      format: parsed.format || null,
      pages: parsed.pages ?? null,
      publishDate: parsed.publishDate,
      purchaseLinks: parsed.purchaseLinks,
      tags: parsed.tags,
      published: parsed.published,
    })
    .returning()

  revalidateBookPaths(book.slug)
  return { success: true, id: book.id }
}

export async function updateBook(id: string, data: BookFormData) {
  await requireSession()
  const parsed = bookFormSchema.parse(data)

  const [book] = await db
    .update(books)
    .set({
      slug: parsed.slug,
      title: parsed.title,
      genre: parsed.genre,
      seriesSlug: parsed.seriesSlug || null,
      position: parsed.position ?? null,
      cover: parsed.cover,
      logline: parsed.logline,
      description: parsed.description,
      excerpt: parsed.excerpt || null,
      isbn: parsed.isbn || null,
      format: parsed.format || null,
      pages: parsed.pages ?? null,
      publishDate: parsed.publishDate,
      purchaseLinks: parsed.purchaseLinks,
      tags: parsed.tags,
      published: parsed.published,
      updatedAt: new Date(),
    })
    .where(eq(books.id, id))
    .returning()

  if (!book) {
    throw new Error('Book not found')
  }

  revalidateBookPaths(book.slug)
  return { success: true }
}

export async function deleteBook(id: string) {
  await requireSession()

  const [book] = await db
    .delete(books)
    .where(eq(books.id, id))
    .returning()

  if (!book) {
    throw new Error('Book not found')
  }

  revalidateBookPaths(book.slug)
  return { success: true }
}

export async function uploadCover(formData: FormData) {
  await requireSession()

  const file = formData.get('file')
  if (!(file instanceof File)) {
    throw new Error('No file provided')
  }

  if (!file.type.startsWith('image/')) {
    throw new Error('File must be an image')
  }

  if (file.size > 5 * 1024 * 1024) {
    throw new Error('File must be smaller than 5MB')
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error(
      'Cover upload is not configured. Add BLOB_READ_WRITE_TOKEN or paste a cover URL instead.'
    )
  }

  const blob = await put(`covers/${Date.now()}-${file.name}`, file, {
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN,
  })

  return { url: blob.url }
}
