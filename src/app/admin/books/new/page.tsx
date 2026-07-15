import { redirect } from 'next/navigation'
import { BookForm } from '@/components/admin/BookForm'
import { getServerSession } from '@/lib/auth/session'

export default async function NewBookPage() {
  const session = await getServerSession()
  if (!session) {
    redirect('/admin/login')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl text-cm-headline">Add book</h1>
        <p className="mt-1 text-cm-muted">Create a new book for your catalog.</p>
      </div>
      <BookForm mode="create" />
    </div>
  )
}
