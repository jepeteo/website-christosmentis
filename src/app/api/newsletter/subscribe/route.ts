import { NextResponse } from 'next/server'
import { newsletterSchema } from '@/lib/validations/schemas'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validationResult = newsletterSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { message: 'Invalid input', errors: validationResult.error.errors },
        { status: 400 }
      )
    }

    const { email, firstName } = validationResult.data

    // TODO: Integrate with Resend for actual email sending
    // For now, we'll just log and return success
    console.log('Newsletter subscription:', { email, firstName })

    // In production, you would:
    // 1. Send a confirmation email via Resend
    // 2. Store the subscription in a database
    // 3. Implement double opt-in verification

    // Placeholder response
    return NextResponse.json(
      {
        message: 'Subscription successful. Please check your email to confirm.',
        success: true,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { message: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
