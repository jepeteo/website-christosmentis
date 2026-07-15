type AuthErrorLike = {
  status?: number
  statusCode?: number
  message?: string | null
  code?: string | null
} | null

export function getAuthErrorMessage(
  error: AuthErrorLike,
  fallback: string
): string {
  const status = error?.status ?? error?.statusCode
  const message = error?.message?.toLowerCase() ?? ''

  if (
    status === 429 ||
    message.includes('too many') ||
    message.includes('rate limit')
  ) {
    return 'Too many attempts. Please try again in a minute.'
  }

  return error?.message || fallback
}
