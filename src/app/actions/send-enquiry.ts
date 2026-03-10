'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type EnquiryFormState = {
  success?: boolean;
  error?: string;
  message?: string;
  formData?: {
    name: string;
    mobile: string;
    email: string;
  };
};

export async function sendEnquiryEmail(
  prevState: EnquiryFormState,
  formData: FormData
): Promise<EnquiryFormState> {
  try {
    // Get form data
    const name = formData.get('name') as string;
    const mobile = formData.get('mobile') as string;
    const email = formData.get('email') as string;

    // Basic validation
    if (!name || name.length < 2) {
      return {
        success: false,
        error: 'Please enter a valid name',
      };
    }

    if (!mobile || mobile.length < 10) {
      return {
        success: false,
        error: 'Please enter a valid mobile number',
      };
    }

    if (!email || !email.includes('@')) {
      return {
        success: false,
        error: 'Please enter a valid email address',
      };
    }

    // Create email HTML
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #C17FE8 0%, #000000 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; border-top: none; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #666; font-size: 14px; }
            .value { color: #333; font-size: 16px; margin-top: 5px; }
            .footer { text-align: center; margin-top: 20px; color: #999; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">New Enquiry from FINVISION Website</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Full Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Mobile Number:</div>
                <div class="value">+91 ${mobile}</div>
              </div>
              <div class="field">
                <div class="label">Email Address:</div>
                <div class="value">${email}</div>
              </div>
              <div class="footer">
                <p>This enquiry was submitted through the FINVISION website contact form.</p>
                <p>Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email with Resend (optional - will fail gracefully if API key not set)
    try {
      await resend.emails.send({
        from: 'FINVISION Enquiries <onboarding@resend.dev>',
        to: 'support@myfinvision.com',
        replyTo: email,
        subject: `New Enquiry: ${name}`,
        html: htmlContent,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue anyway - WhatsApp is primary notification method
    }

    return {
      success: true,
      message: 'Thank you! Your enquiry has been submitted successfully. Redirecting to WhatsApp...',
      formData: {
        name,
        mobile,
        email,
      },
    };
  } catch (err) {
    console.error('Server action error:', err);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}