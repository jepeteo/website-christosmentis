import { and, desc, eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { books, series } from '@/lib/db/schema'
import type { Book, Series } from '@/types'

function mapBook(row: typeof books.$inferSelect): Book {
  return {
    title: row.title,
    slug: row.slug,
    genre: row.genre,
    series: row.seriesSlug || undefined,
    position: row.position ?? undefined,
    cover: row.cover,
    logline: row.logline,
    description: row.description,
    excerpt: row.excerpt ?? undefined,
    isbn: row.isbn ?? undefined,
    format: row.format ?? undefined,
    pages: row.pages ?? undefined,
    publishDate: row.publishDate,
    purchaseLinks: row.purchaseLinks ?? [],
    tags: row.tags ?? [],
  }
}

function mapSeries(row: typeof series.$inferSelect): Series {
  return {
    title: row.title,
    slug: row.slug,
    genre: row.genre,
    description: row.description,
    books: row.bookOrder ?? [],
  }
}

export async function getAllBooks(options?: {
  includeUnpublished?: boolean
}): Promise<Book[]> {
  const rows = await db
    .select()
    .from(books)
    .where(
      options?.includeUnpublished ? undefined : eq(books.published, true)
    )
    .orderBy(desc(books.publishDate))

  return rows.map(mapBook)
}

export async function getAllBooksAdmin(): Promise<
  (Book & { id: string; published: boolean })[]
> {
  const rows = await db
    .select()
    .from(books)
    .orderBy(desc(books.publishDate))

  return rows.map((row) => ({
    ...mapBook(row),
    id: row.id,
    published: row.published,
  }))
}

export async function getBookBySlug(
  slug: string,
  options?: { includeUnpublished?: boolean }
): Promise<Book | null> {
  const conditions = [eq(books.slug, slug)]
  if (!options?.includeUnpublished) {
    conditions.push(eq(books.published, true))
  }

  const [row] = await db
    .select()
    .from(books)
    .where(and(...conditions))
    .limit(1)

  return row ? mapBook(row) : null
}

export async function getBookById(id: string) {
  const [row] = await db.select().from(books).where(eq(books.id, id)).limit(1)
  return row ?? null
}

export async function getBooksByGenre(
  genre: 'crime' | 'finance'
): Promise<Book[]> {
  const rows = await db
    .select()
    .from(books)
    .where(and(eq(books.genre, genre), eq(books.published, true)))
    .orderBy(desc(books.publishDate))

  return rows.map(mapBook)
}

export async function getAllSeries(): Promise<Series[]> {
  const rows = await db.select().from(series).orderBy(series.title)
  return rows.map(mapSeries)
}

export async function getSeriesBySlug(slug: string): Promise<Series | null> {
  const [row] = await db
    .select()
    .from(series)
    .where(eq(series.slug, slug))
    .limit(1)

  return row ? mapSeries(row) : null
}

export async function getBooksInSeries(seriesSlug: string): Promise<Book[]> {
  const seriesData = await getSeriesBySlug(seriesSlug)
  if (!seriesData) return []

  const allBooks = await getAllBooks()
  return allBooks
    .filter((book) => seriesData.books.includes(book.slug))
    .sort((a, b) => (a.position || 0) - (b.position || 0))
}

export { slugifyTitle } from './slugify'
