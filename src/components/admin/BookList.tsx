'use client'

import { useTransition } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Pencil, Trash2 } from 'lucide-react'
import { deleteBook } from '@/lib/admin/actions'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import type { Book } from '@/types'

interface BookListProps {
  books: (Book & { id: string; published: boolean })[]
}

export function BookList({ books }: BookListProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleDelete = (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return

    startTransition(async () => {
      await deleteBook(id)
      router.refresh()
    })
  }

  if (books.length === 0) {
    return (
      <Card className="p-8 text-center">
        <p className="text-cm-muted">No books yet.</p>
        <Link href="/admin/books/new" className="mt-4 inline-block">
          <Button>Add your first book</Button>
        </Link>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {books.map((book) => (
        <Card key={book.id} className="flex flex-col gap-4 p-4 md:flex-row md:items-center">
          <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded border border-cm-divider">
            {book.cover ? (
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="object-cover"
                unoptimized={book.cover.startsWith('http')}
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-cm-surface text-xs text-cm-muted">
                No cover
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h3 className="font-display text-lg text-cm-headline">{book.title}</h3>
              <Badge variant={book.genre === 'crime' ? 'default' : 'secondary'}>
                {book.genre}
              </Badge>
              {!book.published && (
                <Badge variant="secondary">Draft</Badge>
              )}
            </div>
            <p className="text-sm text-cm-muted">/{book.slug}</p>
            <p className="mt-1 line-clamp-2 text-sm text-cm-body">{book.logline}</p>
          </div>

          <div className="flex gap-2">
            <Link href={`/admin/books/${book.id}/edit`}>
              <Button variant="outline" size="sm">
                <Pencil className="mr-1 h-4 w-4" />
                Edit
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              disabled={isPending}
              onClick={() => handleDelete(book.id, book.title)}
            >
              <Trash2 className="h-4 w-4 text-red-400" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}
