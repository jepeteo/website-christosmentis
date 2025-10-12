import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Book, Series } from '@/types'

const contentDirectory = path.join(process.cwd(), 'src/content')

/**
 * Get all books
 */
export async function getAllBooks(): Promise<Book[]> {
  const booksDirectory = path.join(contentDirectory, 'books')
  
  if (!fs.existsSync(booksDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(booksDirectory)
  const books = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(booksDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        ...data,
        slug,
      } as Book
    })

  return books.sort((a, b) => {
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  })
}

/**
 * Get book by slug
 */
export async function getBookBySlug(slug: string): Promise<Book | null> {
  const books = await getAllBooks()
  return books.find((book) => book.slug === slug) || null
}

/**
 * Get books by genre
 */
export async function getBooksByGenre(genre: 'crime' | 'finance'): Promise<Book[]> {
  const books = await getAllBooks()
  return books.filter((book) => book.genre === genre)
}

/**
 * Get all series
 */
export async function getAllSeries(): Promise<Series[]> {
  const seriesDirectory = path.join(contentDirectory, 'series')
  
  if (!fs.existsSync(seriesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(seriesDirectory)
  const series = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(seriesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        ...data,
        slug,
      } as Series
    })

  return series
}

/**
 * Get series by slug
 */
export async function getSeriesBySlug(slug: string): Promise<Series | null> {
  const series = await getAllSeries()
  return series.find((s) => s.slug === slug) || null
}

/**
 * Get books in a series
 */
export async function getBooksInSeries(seriesSlug: string): Promise<Book[]> {
  const series = await getSeriesBySlug(seriesSlug)
  if (!series) return []

  const allBooks = await getAllBooks()
  return allBooks
    .filter((book) => series.books.includes(book.slug))
    .sort((a, b) => (a.position || 0) - (b.position || 0))
}
