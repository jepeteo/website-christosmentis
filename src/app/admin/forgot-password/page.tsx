import type { Metadata } from 'next'
import { ForgotPasswordForm } from '@/components/admin/ForgotPasswordForm'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Forgot password',
  robots: { index: false, follow: false },
}

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center">
      <Card className="w-full p-8">
        <h1 className="mb-2 font-display text-2xl text-cm-headline">
          Forgot password
        </h1>
        <p className="mb-6 text-sm text-cm-muted">
          Enter your admin email and we&apos;ll send a reset link if an account
          exists.
        </p>
        <ForgotPasswordForm />
      </Card>
    </div>
  )
}
