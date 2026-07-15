'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { authClient } from '@/lib/auth/client'
import {
  resetPasswordSchema,
  type ResetPasswordFormData,
} from '@/lib/validations/schemas'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

interface ResetPasswordFormProps {
  token: string | null
  tokenError?: string | null
}

export function ResetPasswordForm({
  token,
  tokenError,
}: ResetPasswordFormProps) {
  const router = useRouter()
  const [error, setError] = useState<string | null>(tokenError ?? null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  })

  if (!token) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-red-400">
          {error ||
            'This reset link is invalid or has expired. Request a new one.'}
        </p>
        <Link
          href="/admin/forgot-password"
          className="text-sm text-cm-primary hover:underline"
        >
          Request a new reset link
        </Link>
      </div>
    )
  }

  const onSubmit = async (data: ResetPasswordFormData) => {
    setError(null)

    const result = await authClient.resetPassword({
      newPassword: data.newPassword,
      token,
    })

    if (result.error) {
      setError(result.error.message || 'Could not reset password')
      return
    }

    router.push('/admin/login')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="newPassword"
          className="mb-2 block text-sm text-cm-muted"
        >
          New password
        </label>
        <Input
          id="newPassword"
          type="password"
          autoComplete="new-password"
          {...register('newPassword')}
        />
        {errors.newPassword && (
          <p className="mt-1 text-sm text-red-400">
            {errors.newPassword.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm text-cm-muted"
        >
          Confirm new password
        </label>
        <Input
          id="confirmPassword"
          type="password"
          autoComplete="new-password"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-400">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Set new password'}
      </Button>
    </form>
  )
}
