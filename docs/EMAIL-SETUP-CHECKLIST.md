# Email Setup Checklist ✅

Quick reference for setting up contact form email with Hostinger + Azure.

---

## Prerequisites

- [ ] You have access to Hostinger control panel
- [ ] You have access to Azure Portal
- [ ] `info@provizient.com` email account exists in Hostinger
- [ ] You know the password for `info@provizient.com`

---

## Step 1: Get Hostinger SMTP Details (5 min)

- [ ] Login to Hostinger control panel (hpanel.hostinger.com)
- [ ] Navigate to **Emails** section
- [ ] Confirm `info@provizient.com` exists
- [ ] Note down the SMTP settings:
  - **Host**: `smtp.hostinger.com`
  - **Port**: `587`
  - **Username**: `info@provizient.com`
  - **Password**: `[your email password]`

---

## Step 2: Configure Azure (10 min)

- [ ] Login to Azure Portal (portal.azure.com)
- [ ] Find your Static Web App (provizient)
- [ ] Go to **Settings** → **Configuration** → **Application settings**
- [ ] Click **+ Add** and add each variable:

### Variables to Add:

```
☐ SMTP_HOST = smtp.hostinger.com
☐ SMTP_PORT = 587
☐ SMTP_SECURE = false
☐ SMTP_USER = info@provizient.com
☐ SMTP_PASSWORD = [your-actual-password]
☐ SMTP_FROM_EMAIL = ProVizient <info@provizient.com>
☐ NOTIFICATION_EMAIL = info@provizient.com
```

- [ ] Click **Save**
- [ ] Wait 1-2 minutes for restart

---

## Step 3: Test (5 min)

- [ ] Visit https://provizient.com/contact
- [ ] Fill out the form with your personal email
- [ ] Submit the form
- [ ] Check for success message on website
- [ ] Check `info@provizient.com` inbox for notification email
- [ ] Check your personal email for confirmation email
- [ ] Both emails received successfully ✅

---

## Step 4: Verify Email Content

### Notification Email (to info@provizient.com):
- [ ] Subject line shows: "New Contact Inquiry: [subject]"
- [ ] Contains: Name, Email, Company, Phone, Subject, Message
- [ ] Formatted correctly with blue header
- [ ] Email is clickable link

### Confirmation Email (to user):
- [ ] Subject line shows: "Thank you for contacting ProVizient"
- [ ] Contains: First name only
- [ ] NO message body included (privacy)
- [ ] Shows "24 business hours" response time
- [ ] ProVizient branding at bottom

---

## Optional: Improve Deliverability (15 min)

### Add SPF Record
- [ ] Login to your domain DNS provider
- [ ] Add TXT record:
  - Name: `@`
  - Value: `v=spf1 include:_spf.hostinger.com ~all`

### Enable DKIM
- [ ] In Hostinger: Emails → Email settings → Enable DKIM
- [ ] Copy the DKIM record
- [ ] Add to your domain DNS as TXT record

### Add DMARC (Optional)
- [ ] Add TXT record:
  - Name: `_dmarc`
  - Value: `v=DMARC1; p=none; rua=mailto:info@provizient.com`

---

## Troubleshooting

### ❌ Authentication Failed
- [ ] Verify username is full email: `info@provizient.com`
- [ ] Test password by logging into webmail
- [ ] Check Hostinger SMTP is enabled

### ❌ Connection Timeout
- [ ] Verify SMTP_HOST is `smtp.hostinger.com`
- [ ] Try port 465 with SMTP_SECURE=true
- [ ] Contact Hostinger support

### ❌ Email Not Received
- [ ] Check spam/junk folder
- [ ] Verify Azure configuration saved correctly
- [ ] Check Azure Function logs for errors

---

## Quick Test Command

After setup, test with curl:

```bash
curl -X POST https://your-site.azurestaticapps.net/api/contact ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"subject\":\"Test\",\"message\":\"Testing email setup\"}"
```

Expected response: `{"success": true}`

---

## Support Contacts

- **Azure Issues**: Azure Portal → Support
- **Hostinger SMTP**: Hostinger Support Chat (24/7)
- **DNS Issues**: Your domain registrar support

---

## Security Notes

✅ **DO**:
- Use strong password for `info@provizient.com`
- Enable 2FA on Hostinger
- Store passwords only in Azure settings
- Monitor logs for failed attempts

❌ **DON'T**:
- Commit passwords to git
- Share SMTP credentials
- Use same password for multiple services
- Ignore failed authentication attempts

---

**Setup Complete!** 🎉

Your contact form is now fully functional and will:
- Send notifications to `info@provizient.com`
- Send confirmations to users
- Handle rate limiting automatically
- Log all activities for monitoring
