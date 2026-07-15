import {
  boolean,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'

export const genreEnum = pgEnum('genre', ['crime', 'finance'])

export const books = pgTable('books', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  genre: genreEnum('genre').notNull(),
  seriesSlug: text('series_slug'),
  position: integer('position'),
  cover: text('cover').notNull(),
  logline: text('logline').notNull(),
  description: text('description').notNull(),
  excerpt: text('excerpt'),
  isbn: text('isbn'),
  format: text('format'),
  pages: integer('pages'),
  publishDate: text('publish_date').notNull(),
  purchaseLinks: jsonb('purchase_links')
    .$type<{ label: string; url: string }[]>()
    .notNull()
    .default([]),
  tags: jsonb('tags').$type<string[]>().notNull().default([]),
  published: boolean('published').notNull().default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const series = pgTable('series', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  genre: genreEnum('genre').notNull(),
  description: text('description').notNull(),
  bookOrder: jsonb('book_order').$type<string[]>().notNull().default([]),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export type DbBook = typeof books.$inferSelect
export type DbSeries = typeof series.$inferSelect
export type NewDbBook = typeof books.$inferInsert
export type NewDbSeries = typeof series.$inferInsert
