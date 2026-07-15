import type { Metadata } from 'next'
import { ResetPasswordForm } from '@/components/admin/ResetPasswordForm'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Reset password',
  robots: { index: false, follow: false },
}

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string; error?: string }>
}) {
  const params = await searchParams
  const token = params.token ?? null
  const tokenError =
    params.error === 'INVALID_TOKEN'
      ? 'This reset link is invalid or has expired.'
      : null

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center">
      <Card className="w-full p-8">
        <h1 className="mb-2 font-display text-2xl text-cm-headline">
          Reset password
        </h1>
        <p className="mb-6 text-sm text-cm-muted">
          Choose a new password for your admin account.
        </p>
        <ResetPasswordForm token={token} tokenError={tokenError} />
      </Card>
    </div>
  )
}
