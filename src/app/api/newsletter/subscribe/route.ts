import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { newsletterSchema } from '@/lib/validations/schemas'

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { message: 'Newsletter service is not configured. Please try again later.' },
        { status: 500 }
      )
    }

    // Send welcome email via Resend
    try {
      await resend.emails.send({
        from: process.env.NEWSLETTER_FROM_EMAIL || 'newsletter@christosmentis.com',
        to: email,
        reply_to: process.env.NEWSLETTER_REPLY_TO || 'christos@christosmentis.com',
        subject: 'Welcome to Christos Mentis Newsletter',
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0B0F14; color: #D1D5DB;">
            <h1 style="color: #C0A36E; font-size: 28px; margin-bottom: 20px;">Welcome${firstName ? `, ${firstName}` : ''}!</h1>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Thank you for subscribing to my newsletter. You'll now receive exclusive updates about my latest works, behind-the-scenes insights, and early access to new releases.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              As a psychological crime fiction author, I explore the depths of the human psyche through stories that blur the lines between hunter and hunted, sanity and obsession.
            </p>
            
            <div style="background-color: #121822; padding: 20px; border-left: 4px solid #C0A36E; margin: 30px 0;">
              <p style="font-style: italic; font-size: 18px; margin: 0; color: #EAE7DF;">
                "What truly defines the human soul?"
              </p>
              <p style="margin-top: 10px; color: #9CA3AF; font-size: 14px;">— Christos Mentis</p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Stay tuned for exclusive content, release announcements, and glimpses into the creative process.
            </p>
            
            <p style="font-size: 14px; color: #9CA3AF; margin-top: 40px; padding-top: 20px; border-top: 1px solid #374151;">
              You're receiving this email because you subscribed to the Christos Mentis newsletter at christosmentis.com.
              <br><br>
              If you wish to unsubscribe, you can do so at any time by replying to this email.
            </p>
          </div>
        `,
      })

      return NextResponse.json(
        {
          message: 'Subscription successful! Please check your email for a welcome message.',
          success: true,
        },
        { status: 200 }
      )
    } catch (resendError) {
      console.error('Resend API error:', resendError)
      return NextResponse.json(
        { message: 'Failed to send confirmation email. Please try again later.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { message: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
