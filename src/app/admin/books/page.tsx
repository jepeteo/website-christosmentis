import Link from 'next/link'
import { redirect } from 'next/navigation'
import { BookList } from '@/components/admin/BookList'
import { getServerSession } from '@/lib/auth/session'
import { getAllBooksAdmin } from '@/lib/books'
import { Button } from '@/components/ui/Button'

export default async function AdminBooksPage() {
  const session = await getServerSession()
  if (!session) {
    redirect('/admin/login')
  }

  const books = await getAllBooksAdmin()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl text-cm-headline">Books</h1>
          <p className="mt-1 text-cm-muted">Manage your published and draft books.</p>
        </div>
        <Link href="/admin/books/new">
          <Button>Add book</Button>
        </Link>
      </div>

      <BookList books={books} />
    </div>
  )
}
