# Email Setup Guide for ProVizient Contact Form

## Simple Setup: Use info@provizient.com for Everything

This guide walks you through setting up email for your contact form using **Hostinger SMTP** with `info@provizient.com` as both the sender and receiver.

---

## Overview

When a user submits the contact form:
1. **Notification email** → Sent TO `info@provizient.com` (you receive the inquiry)
2. **Confirmation email** → Sent TO the user (thanking them for contacting you)
3. **Both emails** → Sent FROM `info@provizient.com` (using Hostinger SMTP)

---

## Step 1: Get Hostinger SMTP Credentials

### 1.1 Access Hostinger Email Settings

1. Log into your **Hostinger control panel** (hpanel.hostinger.com)
2. Navigate to **Emails** section
3. Find or create the `info@provizient.com` email account
4. Click on the email to view details

### 1.2 Locate SMTP Settings

Hostinger's SMTP configuration is typically:

```
SMTP Server: smtp.hostinger.com
SMTP Port: 587 (recommended) or 465
Username: info@provizient.com
Password: [your email password]
```

**Important Notes:**
- Use the **full email address** as the username
- The password is the same one you use to login to webmail
- Port **587** uses STARTTLS (recommended)
- Port **465** uses SSL (alternative)

### 1.3 Verify SMTP Access is Enabled

- In Hostinger panel, ensure SMTP is enabled for your account
- Some plans may require activation (it's usually enabled by default)

---

## Step 2: Configure Azure Static Web Apps

### 2.1 Navigate to Configuration

1. Go to **Azure Portal** (portal.azure.com)
2. Find your **Static Web App** (provizient)
3. Go to **Settings** → **Configuration**
4. Click **Application settings** tab

### 2.2 Add Environment Variables

Click **+ Add** for each variable below:

| Name | Value | Notes |
|------|-------|-------|
| `SMTP_HOST` | `smtp.hostinger.com` | Hostinger SMTP server |
| `SMTP_PORT` | `587` | Use STARTTLS |
| `SMTP_SECURE` | `false` | False for port 587, true for 465 |
| `SMTP_USER` | `info@provizient.com` | Your full email address |
| `SMTP_PASSWORD` | `your-actual-password` | **Keep this secret!** |
| `SMTP_FROM_EMAIL` | `ProVizient <info@provizient.com>` | Sender display name |
| `NOTIFICATION_EMAIL` | `info@provizient.com` | Where inquiries are sent |

### 2.3 Save Configuration

1. Click **Save** at the top
2. Confirm the restart (your app will reload automatically)
3. Wait 1-2 minutes for changes to propagate

---

## Step 3: Test Your Setup

### 3.1 Test on Production Website

1. Visit your live contact form at `https://provizient.com/contact`
2. Fill out the form with a test email address (use your personal email)
3. Submit the form
4. Check for:
   - ✅ Success message on the website
   - ✅ Notification email in `info@provizient.com` inbox
   - ✅ Confirmation email in your test email inbox

### 3.2 What to Look For

**Notification Email (to info@provizient.com):**
- Subject: `New Contact Inquiry: [subject from form]`
- Contains: Name, email, company, phone, subject, message

**Confirmation Email (to the user):**
- Subject: `Thank you for contacting ProVizient`
- Contains: Thank you message with first name only
- No inquiry details included (privacy)

---

## Step 4: Local Development Setup (Optional)

If you want to test email locally before deploying:

### 4.1 Create Local Environment File

Create a file named `.env.local` in your project root:

```env
# Local development SMTP settings
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@provizient.com
SMTP_PASSWORD=your-actual-password
SMTP_FROM_EMAIL=ProVizient <info@provizient.com>
NOTIFICATION_EMAIL=info@provizient.com

# Demo mode (set to "true" to test without sending real emails)
NEXT_PUBLIC_DEMO_MODE=false
```

⚠️ **Important**: `.env.local` is already in `.gitignore` - never commit real passwords to git!

### 4.2 Test Locally with Azure Functions

```bash
# Navigate to API folder
cd api

# Install dependencies (if not done already)
npm install

# Start Azure Functions locally
func start

# In another terminal, test the endpoint
curl -X POST http://localhost:7071/api/contact ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Test User\",\"email\":\"your-test-email@example.com\",\"subject\":\"Test Subject\",\"message\":\"This is a test message.\"}"
```

---

## Email Flow Diagram

```
┌─────────────────────┐
│   User Submits      │
│   Contact Form      │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│  Azure Function     │
│  /api/contact       │
└──────────┬──────────┘
           │
           ├─────────────────────────────┐
           ↓                             ↓
┌──────────────────────┐     ┌──────────────────────┐
│  Notification Email  │     │  Confirmation Email  │
├──────────────────────┤     ├──────────────────────┤
│ FROM: info@provi...  │     │ FROM: info@provi...  │
│ TO: info@provi...    │     │ TO: user@example.com │
│                      │     │                      │
│ Full inquiry details │     │ Thank you message    │
│ (name, email, etc.)  │     │ (first name only)    │
└──────────────────────┘     └──────────────────────┘
           │                             │
           ↓                             ↓
┌──────────────────────┐     ┌──────────────────────┐
│  You receive the     │     │  User receives       │
│  inquiry in inbox    │     │  confirmation        │
└──────────────────────┘     └──────────────────────┘
```

---

## Troubleshooting

### Problem 1: Authentication Failed

**Error**: `535 Authentication failed` or `Invalid credentials`

**Solutions**:
- ✅ Verify you're using the **full email address** as username: `info@provizient.com`
- ✅ Check password is correct (try logging into webmail to confirm)
- ✅ Ensure SMTP is enabled in Hostinger (check email settings)
- ✅ Try resetting the email password in Hostinger panel

### Problem 2: Connection Timeout

**Error**: `ETIMEDOUT` or `Connection timeout`

**Solutions**:
- ✅ Verify `SMTP_HOST` is exactly `smtp.hostinger.com`
- ✅ Try alternative port 465 with `SMTP_SECURE=true`
- ✅ Check if Azure has any firewall rules blocking outbound SMTP
- ✅ Contact Hostinger support to verify SMTP is enabled

### Problem 3: Emails Sent But Not Received

**Check**:
- ✅ Look in **Spam/Junk** folder
- ✅ Verify `NOTIFICATION_EMAIL` is set correctly in Azure
- ✅ Check Azure Function logs for delivery confirmations
- ✅ Verify Hostinger email inbox has available storage

### Problem 4: Missing Environment Variables

**Error**: `Missing SMTP credentials`

**Solution**:
- ✅ Go to Azure Portal → Configuration → Application settings
- ✅ Verify ALL variables are present (SMTP_HOST, SMTP_USER, SMTP_PASSWORD, etc.)
- ✅ Click Save and wait for app to restart
- ✅ Clear browser cache and test again

### Problem 5: Emails Going to Spam

**Solutions**:
- ✅ Add **SPF record** to your domain DNS (Hostinger provides this)
- ✅ Enable **DKIM** in Hostinger email settings
- ✅ Ensure FROM email (`info@provizient.com`) matches your domain
- ✅ Ask recipients to add `info@provizient.com` to contacts

---

## Checking Azure Function Logs

To debug email issues:

1. Go to **Azure Portal** → Your Static Web App
2. Navigate to **Functions** in the left menu
3. Click on **contact** function
4. Go to **Monitor** tab
5. View execution logs for errors

Look for:
- `email_failed` events
- SMTP connection errors
- Authentication failures

---

## DNS Configuration (Optional but Recommended)

To improve email deliverability and prevent spam flagging:

### SPF Record

Add this TXT record to your domain DNS:

```
Type: TXT
Name: @
Value: v=spf1 include:_spf.hostinger.com ~all
```

### DKIM

1. In Hostinger panel → Emails → Email settings
2. Enable DKIM
3. Copy the DKIM record provided
4. Add it to your domain DNS as a TXT record

### DMARC (Optional)

```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:info@provizient.com
```

---

## Security Checklist

✅ **Password Security**
   - Use a strong, unique password for `info@provizient.com`
   - Never share SMTP credentials
   - Rotate password periodically (every 6-12 months)

✅ **Azure Configuration**
   - Never commit `.env.local` to git
   - Store passwords only in Azure Application settings
   - Restrict access to Azure portal (use RBAC)

✅ **Email Account**
   - Enable 2FA on Hostinger account
   - Monitor inbox for suspicious activity
   - Set up email forwarding as backup

✅ **Monitoring**
   - Check Azure logs weekly for failed attempts
   - Monitor for unusual spike in submissions
   - Rate limiting is already configured (3 requests per IP per 10 min)

---

## Quick Reference

### Azure Configuration (Minimum Required)

```
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@provizient.com
SMTP_PASSWORD=[your-password]
SMTP_FROM_EMAIL=ProVizient <info@provizient.com>
NOTIFICATION_EMAIL=info@provizient.com
```

### Test Command (After Setup)

```bash
curl -X POST https://your-site.azurestaticapps.net/api/contact ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"subject\":\"Test\",\"message\":\"Testing\"}"
```

Expected response:
```json
{"success": true}
```

---

## Need Help?

1. **Azure Function not working**: Check Azure Function logs
2. **SMTP connection issues**: Contact Hostinger support (mention you need SMTP access)
3. **Email not delivered**: Check spam folder, verify SPF/DKIM records
4. **Other issues**: Check the troubleshooting section above

---

## Related Files

- **API Endpoint**: `api/contact/index.js`
- **Email Service**: `api/shared/email.js`
- **Environment Template**: `.env.example`
- **Contact Form Component**: `src/components/forms/contact-form.tsx`

---

**Last Updated**: January 2025
**Maintained By**: ProVizient Development Team
