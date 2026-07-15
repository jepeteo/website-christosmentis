import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getServerSession } from '@/lib/auth/session'
import { getAllBooksAdmin } from '@/lib/books'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export default async function AdminDashboardPage() {
  const session = await getServerSession()
  if (!session) {
    redirect('/admin/login')
  }

  const books = await getAllBooksAdmin()
  const publishedCount = books.filter((book) => book.published).length

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl text-cm-headline">Dashboard</h1>
          <p className="mt-1 text-cm-muted">
            Welcome back{session.user.name ? `, ${session.user.name}` : ''}.
          </p>
        </div>
        <Link href="/admin/books/new">
          <Button>Add book</Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <p className="text-sm text-cm-muted">Total books</p>
          <p className="mt-2 font-display text-3xl text-cm-headline">{books.length}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-cm-muted">Published</p>
          <p className="mt-2 font-display text-3xl text-cm-headline">{publishedCount}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-cm-muted">Drafts</p>
          <p className="mt-2 font-display text-3xl text-cm-headline">
            {books.length - publishedCount}
          </p>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="mb-4 font-display text-xl text-cm-headline">Quick actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/books">
            <Button variant="secondary">Manage books</Button>
          </Link>
          <Link href="/admin/books/new">
            <Button variant="outline">Create new book</Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}
