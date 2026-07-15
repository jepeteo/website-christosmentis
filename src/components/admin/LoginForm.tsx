'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { authClient } from '@/lib/auth/client'
import { getAuthErrorMessage } from '@/lib/auth/errors'
import { loginSchema } from '@/lib/validations/schemas'
import { AuthHoneypot } from '@/components/admin/HoneypotField'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

const loginFormSchema = loginSchema.extend({
  website: z.string().optional(),
})

type LoginFormValues = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  })

  const onSubmit = async (data: LoginFormValues) => {
    setError(null)

    // Honeypot: bots fill this; pretend invalid credentials.
    if (data.website?.trim()) {
      setError('Invalid email or password')
      return
    }

    const result = await authClient.signIn.email({
      email: data.email,
      password: data.password,
    })

    if (result.error) {
      setError(
        getAuthErrorMessage(result.error, 'Invalid email or password')
      )
      return
    }

    router.push('/admin')
    router.refresh()
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

      <div>
        <label htmlFor="password" className="mb-2 block text-sm text-cm-muted">
          Password
        </label>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          {...register('password')}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
        )}
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </Button>

      <p className="text-center text-sm">
        <Link
          href="/admin/forgot-password"
          className="text-cm-primary hover:underline"
        >
          Forgot password?
        </Link>
      </p>
    </form>
  )
}
