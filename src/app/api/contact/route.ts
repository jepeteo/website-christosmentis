import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/validations/schemas'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validationResult = contactSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { message: 'Invalid input', errors: validationResult.error.errors },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = validationResult.data

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { message: 'Contact form is not configured. Please try again later.' },
        { status: 500 }
      )
    }

    // Send notification email to author
    try {
      await resend.emails.send({
        from: process.env.NEWSLETTER_FROM_EMAIL || 'newsletter@christosmentis.com',
        to: 'hello@christosmentis.com',
        reply_to: email,
        subject: `Contact Form: ${subject}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0B0F14; color: #D1D5DB;">
            <h1 style="color: #C0A36E; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h1>
            
            <div style="background-color: #121822; padding: 20px; border-left: 4px solid #C0A36E; margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0; color: #9CA3AF; font-size: 14px;"><strong>From:</strong></p>
              <p style="margin: 0 0 20px 0; color: #EAE7DF; font-size: 16px;">${name}</p>
              
              <p style="margin: 0 0 10px 0; color: #9CA3AF; font-size: 14px;"><strong>Email:</strong></p>
              <p style="margin: 0 0 20px 0; color: #EAE7DF; font-size: 16px;">${email}</p>
              
              <p style="margin: 0 0 10px 0; color: #9CA3AF; font-size: 14px;"><strong>Subject:</strong></p>
              <p style="margin: 0; color: #EAE7DF; font-size: 16px;">${subject}</p>
            </div>
            
            <div style="background-color: #121822; padding: 20px; border-radius: 8px;">
              <p style="margin: 0 0 10px 0; color: #9CA3AF; font-size: 14px;"><strong>Message:</strong></p>
              <p style="margin: 0; color: #D1D5DB; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="font-size: 14px; color: #9CA3AF; margin-top: 30px; padding-top: 20px; border-top: 1px solid #374151;">
              This message was sent from the contact form at christosmentis.com
              <br><br>
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
        `,
      })

      // Send confirmation email to sender
      await resend.emails.send({
        from: process.env.NEWSLETTER_FROM_EMAIL || 'newsletter@christosmentis.com',
        to: email,
        reply_to: 'hello@christosmentis.com',
        subject: 'Message Received - Christos Mentis',
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0B0F14; color: #D1D5DB;">
            <h1 style="color: #C0A36E; font-size: 24px; margin-bottom: 20px;">Thank You for Reaching Out</h1>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #D1D5DB;">
              Hi ${name},
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #D1D5DB;">
              Thank you for your message. I've received it and will get back to you as soon as possible.
            </p>
            
            <div style="background-color: #121822; padding: 20px; border-left: 4px solid #C0A36E; margin: 30px 0;">
              <p style="margin: 0 0 10px 0; color: #9CA3AF; font-size: 14px;"><strong>Your message:</strong></p>
              <p style="margin: 0; color: #D1D5DB; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #D1D5DB;">
              Best regards,<br>
              Christos Mentis
            </p>
            
            <p style="font-size: 14px; color: #9CA3AF; margin-top: 40px; padding-top: 20px; border-top: 1px solid #374151;">
              This is an automated confirmation. Please do not reply to this email.
              <br><br>
              If you need immediate assistance, you can reach me at hello@christosmentis.com
            </p>
          </div>
        `,
      })

      return NextResponse.json(
        {
          message: 'Message sent successfully! I\'ll get back to you soon.',
          success: true,
        },
        { status: 200 }
      )
    } catch (resendError) {
      console.error('Resend API error:', resendError)
      return NextResponse.json(
        { message: 'Failed to send message. Please try again later or email hello@christosmentis.com directly.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
