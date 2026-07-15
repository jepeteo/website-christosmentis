import { notFound, redirect } from 'next/navigation'
import { BookForm } from '@/components/admin/BookForm'
import { getServerSession } from '@/lib/auth/session'
import { getBookById } from '@/lib/books'

export default async function EditBookPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const session = await getServerSession()
  if (!session) {
    redirect('/admin/login')
  }

  const { id } = await params
  const book = await getBookById(id)

  if (!book) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl text-cm-headline">Edit book</h1>
        <p className="mt-1 text-cm-muted">{book.title}</p>
      </div>
      <BookForm
        mode="edit"
        initialData={{
          id: book.id,
          title: book.title,
          slug: book.slug,
          genre: book.genre,
          seriesSlug: book.seriesSlug ?? '',
          position: book.position ?? undefined,
          cover: book.cover,
          logline: book.logline,
          description: book.description,
          excerpt: book.excerpt ?? '',
          isbn: book.isbn ?? '',
          format: book.format ?? '',
          pages: book.pages ?? undefined,
          publishDate: book.publishDate,
          purchaseLinks: book.purchaseLinks.length
            ? book.purchaseLinks
            : [{ label: '', url: '' }],
          tags: book.tags,
          published: book.published,
        }}
      />
    </div>
  )
}
