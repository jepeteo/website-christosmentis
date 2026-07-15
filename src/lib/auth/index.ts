import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { nextCookies } from 'better-auth/next-js'
import { Resend } from 'resend'
import { db } from '@/lib/db'
import * as authSchema from '@/lib/db/auth-schema'

const resend = new Resend(process.env.RESEND_API_KEY)

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: authSchema,
  }),
  rateLimit: {
    enabled: true,
    window: 60,
    max: 30,
    storage: 'database',
    customRules: {
      '/sign-in/email': { window: 60, max: 5 },
      '/request-password-reset': { window: 300, max: 3 },
      '/reset-password': { window: 300, max: 5 },
      '/change-password': { window: 60, max: 5 },
    },
  },
  emailAndPassword: {
    enabled: true,
    disableSignUp: true,
    sendResetPassword: async ({ user, url }) => {
      if (!process.env.RESEND_API_KEY) {
        console.error(
          'RESEND_API_KEY is not configured; cannot send reset email'
        )
        return
      }

      const from =
        process.env.NEWSLETTER_FROM_EMAIL || 'newsletter@christosmentis.com'

      await resend.emails.send({
        from,
        to: user.email,
        subject: 'Reset your admin password — Christos Mentis',
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0B0F14; color: #D1D5DB;">
            <h1 style="color: #C0A36E; font-size: 24px; margin-bottom: 20px;">Reset your password</h1>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Hi ${user.name || 'there'},
            </p>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
              We received a request to reset your admin password. Click the button below to choose a new one. This link expires in about an hour.
            </p>
            <p style="margin-bottom: 30px;">
              <a href="${url}" style="display: inline-block; background-color: #C0A36E; color: #0B0F14; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: 600;">
                Reset password
              </a>
            </p>
            <p style="font-size: 14px; color: #9CA3AF; line-height: 1.6;">
              If you did not request this, you can ignore this email. Your password will stay the same.
            </p>
            <p style="font-size: 12px; color: #6B7280; margin-top: 30px; word-break: break-all;">
              Or open this link: ${url}
            </p>
          </div>
        `,
      })
    },
  },
  plugins: [nextCookies()],
})

export type Session = typeof auth.$Infer.Session
