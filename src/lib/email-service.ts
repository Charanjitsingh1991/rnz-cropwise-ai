import nodemailer from 'nodemailer';

// Email service configuration using Hostinger SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'noreply@thecharanjitsingh.com',
    pass: process.env.SMTP_PASS,
  },
});

// Verify SMTP connection
export async function verifyEmailConnection() {
  try {
    await transporter.verify();
    console.log('✅ Email service is ready to send emails');
    return true;
  } catch (error) {
    console.error('❌ Email service error:', error);
    return false;
  }
}

// Generic email sending function
export async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  try {
    const mailOptions = {
      from: {
        name: process.env.SMTP_FROM_NAME || 'RNZ CropWise',
        address: process.env.SMTP_FROM_EMAIL || 'noreply@thecharanjitsingh.com',
      },
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error;
  }
}

// Send OTP email for password reset
export async function sendPasswordResetOTP(email: string, otp: string, userName?: string) {
  try {
    const mailOptions = {
      from: {
        name: process.env.SMTP_FROM_NAME || 'RNZ CropWise',
        address: process.env.SMTP_FROM_EMAIL || 'noreply@thecharanjitsingh.com',
      },
      to: email,
      subject: 'Password Reset - RNZ CropWise',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .otp-box { background: white; border: 2px dashed #2E7D32; padding: 20px; margin: 20px 0; text-align: center; border-radius: 8px; }
            .otp-code { font-size: 32px; font-weight: bold; color: #2E7D32; letter-spacing: 8px; }
            .timer { color: #FF6F00; font-weight: bold; margin-top: 10px; }
            .footer { text-align: center; color: #757575; font-size: 12px; margin-top: 20px; }
            .warning { background: #FFF3E0; border-left: 4px solid #FF6F00; padding: 15px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌱 RNZ CropWise</h1>
              <p>Password Reset Request</p>
            </div>
            <div class="content">
              <p>Hi ${userName || 'there'},</p>
              <p>You requested to reset your password for your RNZ CropWise account.</p>
              
              <div class="otp-box">
                <p style="margin: 0; color: #757575; font-size: 14px;">Your verification code is:</p>
                <div class="otp-code">${otp}</div>
                <div class="timer">⏱️ Expires in 2 minutes</div>
              </div>

              <div class="warning">
                <strong>⚠️ Security Notice:</strong> If you didn't request this password reset, please ignore this email. Your account is safe.
              </div>

              <p>This code will expire in <strong>2 minutes (120 seconds)</strong>. If the code expires, you can request a new one.</p>
              
              <p>Best regards,<br>
              <strong>RNZ CropWise Team</strong></p>
            </div>
            <div class="footer">
              <p>This is an automated email. Please do not reply to this message.</p>
              <p>&copy; 2025 RNZ CropWise. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Hi ${userName || 'there'},

You requested to reset your password for your RNZ CropWise account.

Your verification code is: ${otp}

This code will expire in 2 minutes (120 seconds).

If you didn't request this password reset, please ignore this email.

Best regards,
RNZ CropWise Team

---
This is an automated email. Please do not reply to this message.
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Password reset email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending password reset email:', error);
    return { success: false, error: error };
  }
}

// Send password change confirmation email
export async function sendPasswordChangedConfirmation(email: string, userName?: string) {
  try {
    const mailOptions = {
      from: {
        name: process.env.SMTP_FROM_NAME || 'RNZ CropWise',
        address: process.env.SMTP_FROM_EMAIL || 'noreply@thecharanjitsingh.com',
      },
      to: email,
      subject: 'Password Changed - RNZ CropWise',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .success-box { background: #E8F5E9; border: 2px solid #4CAF50; padding: 20px; margin: 20px 0; text-align: center; border-radius: 8px; }
            .footer { text-align: center; color: #757575; font-size: 12px; margin-top: 20px; }
            .warning { background: #FFF3E0; border-left: 4px solid #FF6F00; padding: 15px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌱 RNZ CropWise</h1>
              <p>Password Changed Successfully</p>
            </div>
            <div class="content">
              <p>Hi ${userName || 'there'},</p>
              
              <div class="success-box">
                <h2 style="color: #2E7D32; margin: 0;">✅ Password Updated</h2>
                <p style="margin: 10px 0 0 0; color: #757575;">Your password was successfully changed at ${new Date().toLocaleString()}</p>
              </div>

              <div class="warning">
                <strong>⚠️ Didn't change your password?</strong><br>
                If you didn't make this change, please contact our support team immediately.
              </div>

              <p>Your account security is important to us. If you have any concerns, please reach out to our support team.</p>
              
              <p>Best regards,<br>
              <strong>RNZ CropWise Team</strong></p>
            </div>
            <div class="footer">
              <p>This is an automated email. Please do not reply to this message.</p>
              <p>&copy; 2025 RNZ CropWise. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Hi ${userName || 'there'},

Your password was successfully changed at ${new Date().toLocaleString()}.

If you didn't make this change, please contact our support team immediately.

Best regards,
RNZ CropWise Team

---
This is an automated email. Please do not reply to this message.
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Password changed confirmation email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending password changed email:', error);
    return { success: false, error: error };
  }
}

// Send welcome email (bonus)
export async function sendWelcomeEmail(email: string, userName: string) {
  try {
    const mailOptions = {
      from: {
        name: process.env.SMTP_FROM_NAME || 'RNZ CropWise',
        address: process.env.SMTP_FROM_EMAIL || 'noreply@thecharanjitsingh.com',
      },
      to: email,
      subject: 'Welcome to RNZ CropWise! 🌱',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .feature { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #2E7D32; }
            .footer { text-align: center; color: #757575; font-size: 12px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌱 Welcome to RNZ CropWise!</h1>
            </div>
            <div class="content">
              <p>Hi ${userName},</p>
              <p>Welcome to <strong>RNZ CropWise</strong> - Your trusted partner for agricultural solutions!</p>
              
              <h3>Get Started:</h3>
              <div class="feature">
                <strong>🛍️ Explore Products</strong><br>
                Browse our comprehensive range of fertilizers and agricultural products.
              </div>
              <div class="feature">
                <strong>🤖 AI Crop Advisor</strong><br>
                Get personalized recommendations for your crops using our intelligent AI system.
              </div>
              <div class="feature">
                <strong>📄 Download Brochures</strong><br>
                Access detailed product information and guides.
              </div>
              <div class="feature">
                <strong>💬 24/7 Support</strong><br>
                Our support team is always here to help you.
              </div>

              <p>Thank you for choosing RNZ CropWise!</p>
              
              <p>Best regards,<br>
              <strong>RNZ CropWise Team</strong></p>
            </div>
            <div class="footer">
              <p>This is an automated email. Please do not reply to this message.</p>
              <p>&copy; 2025 RNZ CropWise. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Hi ${userName},

Welcome to RNZ CropWise - Your trusted partner for agricultural solutions!

Get Started:
- Explore Products: Browse our comprehensive range of fertilizers
- AI Crop Advisor: Get personalized crop recommendations
- Download Brochures: Access detailed product information
- 24/7 Support: Our team is always here to help

Thank you for choosing RNZ CropWise!

Best regards,
RNZ CropWise Team

---
This is an automated email. Please do not reply to this message.
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Welcome email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending welcome email:', error);
    return { success: false, error: error };
  }
}

export default {
  sendPasswordResetOTP,
  sendPasswordChangedConfirmation,
  sendWelcomeEmail,
  verifyEmailConnection,
};


