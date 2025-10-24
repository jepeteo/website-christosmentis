import { MetadataRoute } from 'next'
import { getAllBooks } from '@/lib/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://christosmentis.com'
  const books = await getAllBooks()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/books`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/newsletter`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/legal/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Dynamic book pages
  const bookPages: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${baseUrl}/books/${book.slug}`,
    lastModified: new Date(book.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...bookPages]
}
