import { redirect } from 'next/navigation'
import { ChangePasswordForm } from '@/components/admin/ChangePasswordForm'
import { Card } from '@/components/ui/Card'
import { getServerSession } from '@/lib/auth/session'

export default async function AdminSettingsPage() {
  const session = await getServerSession()
  if (!session) {
    redirect('/admin/login')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl text-cm-headline">Settings</h1>
        <p className="mt-1 text-cm-muted">
          Manage your admin account ({session.user.email}).
        </p>
      </div>

      <Card className="max-w-lg space-y-4 p-6">
        <h2 className="font-display text-xl text-cm-headline">
          Change password
        </h2>
        <ChangePasswordForm />
      </Card>
    </div>
  )
}
