# Gmail SMTP Contact Form Setup Guide

## Overview
This contact form uses Gmail SMTP with Nodemailer to send emails securely from your website to your Gmail account.

## What You Need to Do

### 1. Enable 2-Step Verification on Gmail
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click on "Security" in the left menu
3. Enable "2-Step Verification" if not already enabled
4. Follow the setup process

### 2. Generate App Password
1. After enabling 2-Step Verification, go back to Security settings
2. Click on "App passwords" (you may need to sign in again)
3. Under "Select app", choose "Mail"
4. Under "Select device", choose "Other (Custom name)"
5. Enter "Footprints Lodge Contact" as the name
6. Click "Generate"
7. **Copy the 16-character password** (this is your only chance to see it)

### 3. Configure Environment Variables
1. Open the `.env` file in your project root
2. Replace `your_app_password_here` with the 16-character app password you just generated:

```env
# Gmail SMTP Configuration
GMAIL_USER=info@afrifoot.co.za
GMAIL_APP_PASSWORD=xxxxxxxxxxxxxxxx  # Replace with your app password

# Server Configuration
PORT=3001
FRONTEND_URL=http://localhost:5173

# Node Environment
NODE_ENV=development
```

### 4. Install Dependencies
Run this command in your project root:

```bash
npm install
```

### 5. Start the Servers
You need to run both the frontend and backend servers:

**Terminal 1 - Backend Server:**
```bash
npm run server
```

**Terminal 2 - Frontend Server:**
```bash
npm run dev
```

### 6. Test the Contact Form
1. Navigate to `http://localhost:5173/contact`
2. Fill out the form with test data
3. Click "Send"
4. Check your Gmail inbox for the test email

## Security Notes

✅ **Secure**: Your Gmail password is never exposed to the frontend
✅ **Rate Limited**: Maximum 5 emails per 15 minutes per IP
✅ **Validated**: All inputs are validated on both frontend and backend
✅ **Professional**: HTML email templates with proper formatting

## Production Deployment

When deploying to production:

1. **Environment Variables**: Set the same environment variables in your hosting platform
2. **Frontend URL**: Update `FRONTEND_URL` to your actual domain
3. **Port**: The backend can use any available port (3001 is default)
4. **HTTPS**: Ensure your production site uses HTTPS

## Troubleshooting

### "Authentication failed" Error
- Double-check your app password (no spaces)
- Ensure 2-step verification is enabled
- Try generating a new app password

### "Connection refused" Error
- Make sure the backend server is running (`npm run server`)
- Check that port 3001 is not blocked

### Email Not Arriving
- Check Gmail spam folder
- Verify the `GMAIL_USER` email address is correct
- Check server console for error messages

## Features Included

- ✅ Form validation (name, email, message length)
- ✅ Real-time error messages
- ✅ Loading states during submission
- ✅ Success confirmation with reset option
- ✅ Rate limiting to prevent spam
- ✅ Professional HTML email templates
- ✅ Responsive design
- ✅ Accessibility features

## API Endpoint

The backend provides one main endpoint:

```
POST /api/send-email
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com", 
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

## Support

If you encounter any issues:
1. Check the server console for error messages
2. Verify all environment variables are set correctly
3. Ensure both frontend and backend servers are running
4. Test with different email addresses to rule out Gmail filtering
