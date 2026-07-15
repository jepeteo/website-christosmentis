import { z } from 'zod'

export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  firstName: z.string().optional(),
})

export type NewsletterFormData = z.infer<typeof newsletterSchema>

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

export type ContactFormData = z.infer<typeof contactSchema>

const purchaseLinkSchema = z.object({
  label: z.string().min(1, 'Label is required'),
  url: z.string().url('Please enter a valid URL'),
})

export const bookFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z
    .string()
    .min(1, 'Slug is required')
    .regex(/^[a-z0-9-]+$/, 'Slug must be lowercase letters, numbers, and hyphens'),
  genre: z.enum(['crime', 'finance']),
  seriesSlug: z.string().optional(),
  position: z.coerce.number().int().min(0).optional(),
  cover: z.string().min(1, 'Cover URL is required'),
  logline: z.string().min(10, 'Logline must be at least 10 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  excerpt: z.string().optional(),
  isbn: z.string().optional(),
  format: z.string().optional(),
  pages: z.coerce.number().int().positive().optional(),
  publishDate: z.string().min(1, 'Publish date is required'),
  purchaseLinks: z.array(purchaseLinkSchema).default([]),
  tags: z.array(z.string()).default([]),
  published: z.boolean().default(true),
})

export type BookFormData = z.infer<typeof bookFormSchema>

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export type LoginFormData = z.infer<typeof loginSchema>

export const changePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(8, 'Current password must be at least 8 characters'),
    newPassword: z
      .string()
      .min(8, 'New password must be at least 8 characters'),
    confirmPassword: z
      .string()
      .min(8, 'Please confirm your new password'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>

export const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email'),
})

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>

export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: z
      .string()
      .min(8, 'Please confirm your password'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>
