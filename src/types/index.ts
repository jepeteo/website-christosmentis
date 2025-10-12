export type Genre = 'crime' | 'finance'

export interface PurchaseLink {
  label: string
  url: string
}

export interface Book {
  title: string
  slug: string
  genre: Genre
  series?: string
  position?: number
  cover: string
  logline: string
  description: string
  excerpt?: string
  isbn?: string
  format?: string
  pages?: number
  publishDate: string
  purchaseLinks: PurchaseLink[]
  tags: string[]
}

export interface Series {
  title: string
  slug: string
  genre: Genre
  description: string
  books: string[] // book slugs
}

export interface Author {
  name: string
  bio: string
  portrait?: string
  social?: {
    twitter?: string
    instagram?: string
    goodreads?: string
  }
}
