'use client'

import type { UseFormRegister } from 'react-hook-form'
import { Input } from '@/components/ui/Input'

/** Hidden field that bots fill; humans leave empty. */
export function AuthHoneypot({
  register,
}: {
  // Forms extend with optional `website`; keep typing loose for reuse.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
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
