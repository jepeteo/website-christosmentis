'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { authClient } from '@/lib/auth/client'
import { getAuthErrorMessage } from '@/lib/auth/errors'
import { forgotPasswordSchema } from '@/lib/validations/schemas'
import { AuthHoneypot } from '@/components/admin/HoneypotField'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

const forgotFormSchema = forgotPasswordSchema.extend({
  website: z.string().optional(),
})

type ForgotFormValues = z.infer<typeof forgotFormSchema>

export function ForgotPasswordForm() {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotFormValues>({
    resolver: zodResolver(forgotFormSchema),
  })

  const onSubmit = async (data: ForgotFormValues) => {
    setError(null)
    setSuccess(false)

    // Honeypot: bots fill this; pretend success without sending email.
    if (data.website?.trim()) {
      setSuccess(true)
      return
    }

    const redirectTo = `${window.location.origin}/admin/reset-password`

    const result = await authClient.requestPasswordReset({
      email: data.email,
      redirectTo,
    })

    if (result.error) {
      setError(
        getAuthErrorMessage(result.error, 'Could not send reset email')
      )
      return
    }

    setSuccess(true)
  }

  if (success) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-cm-body">
          If that email is registered, check your inbox for a reset link. It
          expires in about an hour.
        </p>
        <Link
          href="/admin/login"
          className="text-sm text-cm-primary hover:underline"
        >
          Back to sign in
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-4">
      <AuthHoneypot register={register} />

      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-cm-muted">
          Email
        </label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          {...register('email')}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send reset link'}
      </Button>

      <p className="text-center text-sm">
        <Link
          href="/admin/login"
          className="text-cm-primary hover:underline"
        >
          Back to sign in
        </Link>
      </p>
    </form>
  )
}
