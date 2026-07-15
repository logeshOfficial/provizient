# Email Troubleshooting Quick Reference

Quick solutions for common email setup issues.

---

## 🔴 Error: "Authentication Failed" or "Invalid Credentials"

### Symptoms
- Form submission fails with 500 error
- Azure logs show: `535 Authentication failed`
- Email never sent

### Solutions

1. **Verify username is the FULL email address**
   ```
   ❌ WRONG: SMTP_USER = info
   ✅ CORRECT: SMTP_USER = info@provizient.com
   ```

2. **Test your password by logging into webmail**
   - Go to webmail.hostinger.com
   - Login with: `info@provizient.com` + password
   - If it fails, reset password in Hostinger panel

3. **Check for typos in Azure configuration**
   - Go to Azure → Configuration → Application settings
   - Verify: `SMTP_USER = info@provizient.com` (exact match)
   - Verify: `SMTP_PASSWORD` has no extra spaces

4. **Ensure SMTP is enabled in Hostinger**
   - Login to Hostinger control panel
   - Go to Emails → info@provizient.com
   - Check if SMTP access is enabled
   - Contact Hostinger support if disabled

---

## 🔴 Error: "Connection Timeout" or "ETIMEDOUT"

### Symptoms
- Form hangs then fails after 30 seconds
- Azure logs show: `ETIMEDOUT` or `Connection timeout`
- No email sent

### Solutions

1. **Verify SMTP host is correct**
   ```
   ✅ CORRECT: SMTP_HOST = smtp.hostinger.com
   ❌ WRONG: mail.hostinger.com
   ❌ WRONG: smtp.provizient.com
   ```

2. **Try alternative port configuration**
   ```
   Option A (recommended):
   SMTP_PORT = 587
   SMTP_SECURE = false
   
   Option B (alternative):
   SMTP_PORT = 465
   SMTP_SECURE = true
   ```

3. **Check Azure outbound firewall**
   - Azure Static Web Apps normally allows SMTP
   - If issue persists, contact Azure support

4. **Test from a different network**
   - Try submitting form from mobile data
   - Rules out ISP blocking SMTP

---

## 🔴 Error: "Missing SMTP credentials"

### Symptoms
- Form fails immediately with 500 error
- Azure logs show: `Missing SMTP credentials`
- Error message mentions environment variables

### Solutions

1. **Verify ALL 7 variables exist in Azure**
   - Go to Azure → Configuration → Application settings
   - Must have:
     - ✅ SMTP_HOST
     - ✅ SMTP_PORT
     - ✅ SMTP_SECURE
     - ✅ SMTP_USER
     - ✅ SMTP_PASSWORD
     - ✅ SMTP_FROM_EMAIL
     - ✅ NOTIFICATION_EMAIL

2. **Check variable names are UPPERCASE**
   ```
   ❌ WRONG: smtp_host
   ✅ CORRECT: SMTP_HOST
   ```

3. **Ensure you clicked SAVE**
   - After adding variables, click **Save** button at top
   - Wait 1-2 minutes for app restart
   - Try form again

4. **Clear browser cache and retry**
   - Clear cache + hard refresh (Ctrl+Shift+R)
   - Submit form again

---

## 🔴 Email Sent But Not Received

### Symptoms
- Form shows success message
- Azure logs show: `email_success`
- But no email in inbox

### Solutions

1. **Check SPAM/JUNK folder first!**
   - Check spam folder in `info@provizient.com`
   - Check spam folder in test email account
   - Mark as "Not Spam" to train filter

2. **Verify NOTIFICATION_EMAIL is correct**
   ```
   Azure Configuration:
   NOTIFICATION_EMAIL = info@provizient.com
   
   (Must match your actual email - check for typos!)
   ```

3. **Check email account storage**
   - Login to Hostinger → Emails
   - Verify `info@provizient.com` has available storage
   - Delete old emails if full

4. **Check email forwarding rules**
   - In Hostinger email settings
   - Ensure no forwarding rules are redirecting emails
   - Check auto-delete or filter rules

5. **Wait 5-10 minutes**
   - Sometimes email delivery is delayed
   - Check inbox again after a few minutes

---

## 🔴 Emails Going to Spam

### Symptoms
- Emails arrive but always in spam folder
- Gmail marks as "suspicious"

### Solutions

1. **Add SPF record to domain DNS**
   ```
   Type: TXT
   Name: @
   Value: v=spf1 include:_spf.hostinger.com ~all
   ```

2. **Enable DKIM in Hostinger**
   - Login to Hostinger → Emails
   - Email settings → Enable DKIM
   - Copy DKIM record → Add to DNS

3. **Verify FROM email matches domain**
   ```
   ✅ CORRECT: SMTP_FROM_EMAIL = ProVizient <info@provizient.com>
   ❌ WRONG: SMTP_FROM_EMAIL = contact@gmail.com
   ```

4. **Ask recipients to whitelist**
   - Add `info@provizient.com` to contacts
   - Mark email as "Not Spam"

5. **Add DMARC record (optional)**
   ```
   Type: TXT
   Name: _dmarc
   Value: v=DMARC1; p=none; rua=mailto:info@provizient.com
   ```

---

## 🔴 Only One Email Received (Not Both)

### Symptoms
- User receives confirmation email
- But `info@provizient.com` doesn't receive notification
- OR vice versa

### Solutions

1. **Check Azure Function logs**
   ```
   Azure Portal → Functions → contact → Monitor
   Look for:
   - notification_sent: true/false
   - confirmation_sent: true/false
   ```

2. **Verify both emails in code**
   - Both should be sent by default
   - Check `api/contact/index.js` hasn't been modified

3. **Check spam for missing email**
   - The missing email might be in spam
   - Check both inboxes thoroughly

4. **Test with curl command**
   ```bash
   curl -X POST https://your-site.azurestaticapps.net/api/contact ^
     -H "Content-Type: application/json" ^
     -d "{\"name\":\"Test\",\"email\":\"test@example.com\",\"subject\":\"Test\",\"message\":\"Test\"}"
   ```
   Should return: `{"success": true}`

---

## 🔴 Form Submission Returns 400 Bad Request

### Symptoms
- Form shows error: "Missing required fields"
- Status code 400

### Solutions

1. **Ensure all required fields filled**
   - Name (required)
   - Email (required)
   - Subject (required)
   - Message (required)
   - Company (optional)
   - Phone (optional)

2. **Check email format**
   - Must be valid email: `user@domain.com`
   - No spaces or special characters

3. **Clear browser form cache**
   - Refresh page (Ctrl+F5)
   - Try again

---

## 🔴 Form Submission Returns 429 Rate Limited

### Symptoms
- Form shows: "Too many requests"
- Status code 429

### Solutions

1. **Wait 10 minutes and try again**
   - Rate limit: 3 requests per IP per 10 minutes
   - Automatic protection against spam

2. **Try from different IP**
   - Use mobile data instead of WiFi
   - Use VPN to get different IP

3. **This is normal behavior**
   - Protects against spam bots
   - Contact form should not be submitted frequently

---

## 🔴 Local Testing Not Working

### Symptoms
- Form works in production but not locally
- Missing environment variables locally

### Solutions

1. **Create `.env.local` file**
   ```env
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=info@provizient.com
   SMTP_PASSWORD=your-password
   SMTP_FROM_EMAIL=ProVizient <info@provizient.com>
   NOTIFICATION_EMAIL=info@provizient.com
   ```

2. **Ensure `.env.local` is in project root**
   - Same level as `package.json`
   - NOT inside `/api` folder

3. **Restart development server**
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

4. **Test API directly**
   ```bash
   cd api
   npm install
   func start
   ```

---

## Diagnostic Commands

### Check Azure Configuration
```bash
# List all application settings (via Azure CLI)
az staticwebapp appsettings list --name your-app-name
```

### Test SMTP Connection
```bash
# Using telnet (Windows)
telnet smtp.hostinger.com 587

# Should connect successfully
# Press Ctrl+] then type "quit" to exit
```

### View Azure Logs
```
Azure Portal → Your Static Web App → Functions → contact → Monitor
```

### Test API Endpoint
```bash
curl -X POST https://your-site.azurestaticapps.net/api/contact ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"subject\":\"Test Subject\",\"message\":\"Test message\"}"
```

Expected response: `{"success": true}`

---

## Quick Checklist for Any Issue

When troubleshooting ANY email issue:

- [ ] Check Azure Function logs first
- [ ] Verify all 7 environment variables exist in Azure
- [ ] Test Hostinger webmail login (verify password works)
- [ ] Check spam folders in both email accounts
- [ ] Try submitting form from incognito browser
- [ ] Wait 5 minutes and check inbox again
- [ ] Clear browser cache and retry
- [ ] Check Azure Static Web App is running (not stopped)

---

## Still Not Working?

### 1. Check Azure Function Logs
```
Azure Portal → Functions → contact → Monitor → Invocations
```
Look for the most recent error message.

### 2. Contact Support
- **Hostinger SMTP Issues**: Hostinger support chat (24/7)
- **Azure Issues**: Azure Portal → Support → New support request
- **Code Issues**: Check `api/contact/index.js` and `api/shared/email.js`

### 3. Rollback Configuration
- If it was working before, compare Azure settings to backup
- Check if any recent changes broke the setup

### 4. Use Demo Mode Temporarily
```
Azure Configuration:
NEXT_PUBLIC_DEMO_MODE = true
```
This simulates form submission without sending real emails (for testing UI only).

---

## Emergency Contact Method

If email is completely broken and urgent:

1. Add a **phone number** prominently on contact page
2. Add a **WhatsApp** link (already in footer)
3. Add **LinkedIn** profile link for direct messages
4. Display "Email currently unavailable - please call" message

---

## Prevention - Monitor Email Health

### Weekly Checks
- [ ] Test contact form manually
- [ ] Check Azure Function logs for errors
- [ ] Verify `info@provizient.com` inbox not full
- [ ] Check spam folder for false positives

### Monthly Checks
- [ ] Verify SPF/DKIM records still configured
- [ ] Test from multiple email providers (Gmail, Outlook, etc.)
- [ ] Review failed submission logs
- [ ] Rotate SMTP password (optional security measure)

---

**Last Updated**: January 2025
