'use client'

import { Input } from '@/components/ui/Input'

/** Hidden field that bots fill; humans leave empty. */
export function AuthHoneypot({
  register,
}: {
  register: (name: 'website') => Record<string, unknown>
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
    >
      <label htmlFor="website">Website</label>
      <Input
        id="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...register('website')}
      />
    </div>
  )
}
