import type { Metadata } from 'next'
import { AdminNav } from '@/components/admin/AdminNav'
import { getServerSession } from '@/lib/auth/session'

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <div className="min-h-screen bg-cm-bg">
      {session && <AdminNav />}
      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </div>
  )
}
