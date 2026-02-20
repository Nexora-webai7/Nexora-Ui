import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, organization, email, need, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create transporter (you'll need to configure these with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password
      },
    });

    // Email to your company
    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'nexora.webai7@gmail.com', // your company email
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Project Inquiry
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
            <p><strong>Email:</strong> ${email}</p>
            ${need ? `<p><strong>Primary Need:</strong> ${need}</p>` : ''}
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h3 style="color: #333; margin-top: 0;">Project Brief:</h3>
            <p style="line-height: 1.6; color: #666;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #666;">
              <strong>Next Steps:</strong> Please respond to this inquiry within 24 business hours.
            </p>
          </div>
        </div>
      `,
    };

    // Confirmation email to the client
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Nexora - We\'ll be in touch soon!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px 0;">
            <h1 style="color: #333; margin: 0;">Thank You!</h1>
            <p style="color: #666; font-size: 18px;">Your inquiry has been received</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 8px; margin: 20px 0;">
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to Nexora. We've received your project inquiry and our team is excited to learn more about your requirements.</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">What happens next?</h3>
              <ul style="line-height: 1.8; color: #666;">
                <li>Our technical team will review your project requirements</li>
                <li>You'll receive a response within 24 business hours</li>
                <li>We'll schedule a consultation to discuss your project in detail</li>
                <li>You'll receive a detailed technical roadmap and quote</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #666;">If you have any questions in the meantime, feel free to reach out:</p>
              <p style="color: #3b82f6; font-weight: bold;">nexora.webai7@gmail.com</p>
            </div>
            
            <p>Best regards,<br>The Nexora Team</p>
          </div>
          
          <div style="text-align: center; padding: 20px; border-top: 1px solid #e5e7eb; color: #999; font-size: 12px;">
            <p>Delhi, India | +91 63966 24377 | nexora.webai7@gmail.com</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
