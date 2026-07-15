import type { Metadata } from 'next'
import { LoginForm } from '@/components/admin/LoginForm'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Admin Login',
  robots: { index: false, follow: false },
}

export default function AdminLoginPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center">
      <Card className="w-full p-8">
        <h1 className="mb-2 font-display text-2xl text-cm-headline">Author login</h1>
        <p className="mb-6 text-sm text-cm-muted">
          Sign in to manage your books.
        </p>
        <LoginForm />
      </Card>
    </div>
  )
}
