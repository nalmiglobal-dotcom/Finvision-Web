# WhatsApp AI Chatbot Setup Guide

This guide will help you set up the finvision AI chatbot for WhatsApp that automatically responds to user questions about The Trading Institute.

## 📋 Prerequisites

1. **Meta/Facebook Developer Account** - Free account at https://developers.facebook.com
2. **Business Phone Number** - A phone number NOT active on personal WhatsApp (must be dedicated for business)
3. **OpenAI Account** - For AI responses (https://platform.openai.com)

---

## 🚀 Step-by-Step Setup

### Step 1: Create Meta App for WhatsApp

1. Go to https://developers.facebook.com/
2. Log in or create an account
3. Click **"My Apps"** → **"Create App"**
4. Select **"Business"** as app type
5. Fill in app details:
   - **App Name**: "finvision WhatsApp Bot" (or your choice)
   - **App Contact Email**: Your email
6. Click **"Create App"**

### Step 2: Add WhatsApp Product

1. In your app dashboard, find **"WhatsApp"** product
2. Click **"Set up"** on the WhatsApp card
3. You'll be taken to WhatsApp Getting Started page

### Step 3: Get Phone Number ID

1. In **WhatsApp > Getting Started** section
2. You'll see a test phone number provided by Meta
3. **Copy the Phone Number ID** (format: 123456789012345)
4. Add to `.env`:
   ```
   WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
   ```

### Step 4: Get Access Token (Temporary for Testing)

1. In the same Getting Started page
2. You'll see a **"Temporary access token"** (valid 24 hours)
3. Copy this token for initial testing
4. Add to `.env`:
   ```
   WHATSAPP_ACCESS_TOKEN=your_temporary_token
   ```

### Step 5: Generate Permanent Access Token (For Production)

**Important**: Temporary tokens expire in 24 hours. For production, create a permanent token.

1. Go to **App Roles > System Users** (left sidebar)
2. Click **"Add"** to create System User:
   - **Name**: "finvision Bot"
   - **Role**: Admin
3. Click **"Generate New Token"** for this user
4. Select your app from dropdown
5. Grant permissions:
   - ✅ `whatsapp_business_messaging`
   - ✅ `whatsapp_business_management`
6. Click **"Generate Token"**
7. **Copy and save this token** - it won't be shown again
8. Replace temporary token in `.env` with permanent token

### Step 6: Create Webhook Verify Token

1. Generate a random secure string (32+ characters)
2. You can use Node.js:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
3. Add to `.env`:
   ```
   WHATSAPP_WEBHOOK_VERIFY_TOKEN=your_random_string
   ```

### Step 7: Get OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Log in or create account
3. Click **"Create new secret key"**
4. Copy the key (starts with `sk-`)
5. Add to `.env`:
   ```
   OPENAI_API_KEY=sk-your-openai-api-key
   ```

### Step 8: Deploy Your Application

**Option A: Vercel (Recommended)**

1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Add environment variables in Vercel dashboard:
   - `WHATSAPP_PHONE_NUMBER_ID`
   - `WHATSAPP_ACCESS_TOKEN`
   - `WHATSAPP_WEBHOOK_VERIFY_TOKEN`
   - `OPENAI_API_KEY`
5. Deploy
6. Copy your deployment URL (e.g., `https://your-app.vercel.app`)

**Option B: Local Testing with ngrok**

1. Install ngrok: https://ngrok.com/download
2. Start your Next.js app:
   ```bash
   npm run dev
   ```
3. In another terminal, start ngrok:
   ```bash
   ngrok http 3000
   ```
4. Copy the ngrok HTTPS URL (e.g., `https://abc123.ngrok.io`)

### Step 9: Configure Webhook in Meta Dashboard

1. Go to **WhatsApp > Configuration** in your Meta app
2. Click **"Edit"** next to Webhook
3. Enter webhook details:
   - **Callback URL**: `https://your-domain.com/api/whatsapp/webhook`
     - Vercel: `https://your-app.vercel.app/api/whatsapp/webhook`
     - ngrok: `https://abc123.ngrok.io/api/whatsapp/webhook`
   - **Verify Token**: Same as `WHATSAPP_WEBHOOK_VERIFY_TOKEN` in your `.env`
4. Click **"Verify and Save"**
5. You should see ✅ success message

### Step 10: Subscribe to Webhook Events

1. In **WhatsApp > Configuration > Webhook Fields**
2. Click **"Manage"** or **"Subscribe"**
3. Enable these fields:
   - ✅ `messages` (to receive incoming messages)
   - ✅ `message_status` (optional - for delivery confirmations)
4. Click **"Save"**

---

## 🧪 Testing Your Bot

### Test with WhatsApp

1. Open WhatsApp on your phone
2. Send a message to the test number shown in Meta dashboard
3. Try these test messages:
   - "Hi"
   - "What courses do you offer?"
   - "What are your fees?"
   - "How can I enroll?"
4. finvision should reply automatically!

### Check Logs

Monitor your application logs to see webhook events:

**Vercel**: Check Function Logs in Vercel Dashboard

**Local**: Check your terminal running `npm run dev`

You should see:
```
📨 Message from 919876543210: Hi
✅ Response sent to 919876543210
```

---

## 📱 Using Your Own Business Phone Number

The test number provided by Meta has limitations. To use your own number:

1. Go to **WhatsApp > API Setup**
2. Click **"Add phone number"**
3. Enter your business phone number
4. Verify via OTP
5. **Important**: This number will be removed from personal WhatsApp
6. Update `WHATSAPP_PHONE_NUMBER_ID` in `.env` with new ID

---

## 🔧 Troubleshooting

### Webhook Verification Fails

- ✅ Check `WHATSAPP_WEBHOOK_VERIFY_TOKEN` matches in Meta dashboard and `.env`
- ✅ Ensure webhook URL is accessible (test in browser: should return 403)
- ✅ Use HTTPS (HTTP won't work)

### Messages Not Received

- ✅ Check webhook subscription is active (messages field enabled)
- ✅ Verify webhook URL is correct
- ✅ Check application logs for errors
- ✅ Ensure access token is valid (not expired)

### Bot Not Responding

- ✅ Check `OPENAI_API_KEY` is valid
- ✅ Verify `WHATSAPP_ACCESS_TOKEN` is correct
- ✅ Check application logs for API errors
- ✅ Ensure you have OpenAI API credits

### "Invalid Phone Number" Error

- ✅ Phone numbers must be in format: `919876543210` (country code + number, no +)
- ✅ Remove spaces, dashes, parentheses

### Rate Limit Errors

- WhatsApp has messaging limits based on quality tier
- Default: 250 conversations/24h
- Upgrade automatically with good quality metrics

---

## 🎯 Next Steps

### Customize AI Responses

Edit `src/lib/openai.ts` to modify the system prompt:
- Update institute information
- Add more details about courses
- Change response style
- Add FAQ handling

### Add Features

1. **Handle Media Messages**: Process images, documents
2. **Button Menus**: Add interactive buttons for course selection
3. **Session Management**: Remember conversation context
4. **Lead Capture**: Store user inquiries in database
5. **Business Hours**: Only respond during office hours
6. **Language Support**: Detect and respond in Hindi/English

### Monitor & Improve

1. Track conversation metrics
2. Analyze common questions
3. Improve AI prompts based on user feedback
4. Monitor API costs (OpenAI usage)

---

## 📚 Useful Resources

- **WhatsApp Cloud API Docs**: https://developers.facebook.com/docs/whatsapp/cloud-api
- **Webhook Setup Guide**: https://developers.facebook.com/docs/whatsapp/cloud-api/guides/set-up-webhooks
- **OpenAI API Docs**: https://platform.openai.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment

---

## 🆘 Need Help?

If you encounter issues:
1. Check application logs
2. Review Meta app dashboard for errors
3. Test webhook URL manually
4. Verify all environment variables are set correctly

For The Trading Institute specific customization, contact your development team.

---

## ✅ Setup Complete Checklist

- [ ] Meta Developer account created
- [ ] WhatsApp app created and configured
- [ ] Phone Number ID obtained
- [ ] Permanent access token generated
- [ ] Webhook verify token created
- [ ] OpenAI API key obtained
- [ ] All environment variables added to `.env`
- [ ] Application deployed (Vercel or ngrok)
- [ ] Webhook configured in Meta dashboard
- [ ] Webhook subscription enabled (messages field)
- [ ] Test message sent and received response
- [ ] Bot responding correctly as finvision

**Your finvision WhatsApp AI chatbot is now live! 🎉**
