import { config } from 'dotenv'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { books, series } from '../src/lib/db/schema'

config({ path: '.env.local' })

async function migrate() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is required')
  }

  const sql = neon(process.env.DATABASE_URL)
  const db = drizzle(sql)

  const contentDir = path.join(process.cwd(), 'src/content')
  const booksDir = path.join(contentDir, 'books')
  const seriesDir = path.join(contentDir, 'series')

  console.log('Migrating books...')
  const bookFiles = fs
    .readdirSync(booksDir)
    .filter((file) => file.endsWith('.mdx'))

  for (const fileName of bookFiles) {
    const slug = fileName.replace(/\.mdx$/, '')
    const fileContents = fs.readFileSync(path.join(booksDir, fileName), 'utf8')
    const { data } = matter(fileContents)

    await db
      .insert(books)
      .values({
        slug,
        title: data.title,
        genre: data.genre,
        seriesSlug: data.series || null,
        position: data.position || null,
        cover: data.cover,
        logline: data.logline,
        description: data.description,
        excerpt: data.excerpt || null,
        isbn: data.isbn || null,
        format: data.format || null,
        pages: data.pages || null,
        publishDate: data.publishDate,
        purchaseLinks: data.purchaseLinks || [],
        tags: data.tags || [],
        published: true,
      })
      .onConflictDoNothing({ target: books.slug })

    console.log(`  ✓ ${slug}`)
  }

  if (fs.existsSync(seriesDir)) {
    console.log('Migrating series...')
    const seriesFiles = fs
      .readdirSync(seriesDir)
      .filter((file) => file.endsWith('.mdx'))

    for (const fileName of seriesFiles) {
      const slug = fileName.replace(/\.mdx$/, '')
      const fileContents = fs.readFileSync(
        path.join(seriesDir, fileName),
        'utf8'
      )
      const { data } = matter(fileContents)

      await db
        .insert(series)
        .values({
          slug,
          title: data.title,
          genre: data.genre,
          description: data.description,
          bookOrder: data.books || [],
        })
        .onConflictDoNothing({ target: series.slug })

      console.log(`  ✓ ${slug}`)
    }
  }

  console.log('Migration complete.')
}

migrate().catch((error) => {
  console.error(error)
  process.exit(1)
})
