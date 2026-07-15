'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth/client'
import { Button } from '@/components/ui/Button'

export function AdminNav() {
  const router = useRouter()

  const handleSignOut = async () => {
    await authClient.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <header className="border-b border-cm-divider bg-cm-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="font-display text-xl text-cm-headline">
            Admin
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/admin/books" className="text-cm-body hover:text-cm-headline">
              Books
            </Link>
            <Link
              href="/admin/settings"
              className="text-cm-body hover:text-cm-headline"
            >
              Settings
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-sm text-cm-muted hover:text-cm-headline"
            target="_blank"
          >
            View site
          </Link>
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            Sign out
          </Button>
        </div>
      </div>
    </header>
  )
}
