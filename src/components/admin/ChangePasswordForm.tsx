'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { authClient } from '@/lib/auth/client'
import {
  changePasswordSchema,
  type ChangePasswordFormData,
} from '@/lib/validations/schemas'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export function ChangePasswordForm() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
  })

  const onSubmit = async (data: ChangePasswordFormData) => {
    setError(null)

    const result = await authClient.changePassword({
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
      revokeOtherSessions: true,
    })

    if (result.error) {
      setError(result.error.message || 'Could not change password')
      return
    }

    await authClient.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="currentPassword"
          className="mb-2 block text-sm text-cm-muted"
        >
          Current password
        </label>
        <Input
          id="currentPassword"
          type="password"
          autoComplete="current-password"
          {...register('currentPassword')}
        />
        {errors.currentPassword && (
          <p className="mt-1 text-sm text-red-400">
            {errors.currentPassword.message}
          </p>
        )}
      </div>

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

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Updating...' : 'Update password'}
      </Button>

      <p className="text-xs text-cm-muted">
        After changing your password you will be signed out and need to sign in
        again.
      </p>
    </form>
  )
}
