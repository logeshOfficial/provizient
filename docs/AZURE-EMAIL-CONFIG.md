# Azure Static Web Apps - Email Configuration

Step-by-step visual guide for configuring email in Azure Portal.

---

## Navigation Path

```
Azure Portal
  └─ Static Web Apps
      └─ [Your App: provizient]
          └─ Settings
              └─ Configuration
                  └─ Application settings
                      └─ + Add (for each variable)
```

---

## Configuration Values

Copy these **exact values** into Azure Application settings:

### 1. SMTP_HOST
```
Name:  SMTP_HOST
Value: smtp.hostinger.com
```
**Description**: Hostinger's SMTP server address

---

### 2. SMTP_PORT
```
Name:  SMTP_PORT
Value: 587
```
**Description**: Standard STARTTLS port (recommended)

---

### 3. SMTP_SECURE
```
Name:  SMTP_SECURE
Value: false
```
**Description**: Use false for port 587, true for port 465

---

### 4. SMTP_USER
```
Name:  SMTP_USER
Value: info@provizient.com
```
**Description**: Your full Hostinger email address (username)

---

### 5. SMTP_PASSWORD
```
Name:  SMTP_PASSWORD
Value: [YOUR_ACTUAL_PASSWORD]
```
**Description**: Password for info@provizient.com (same as webmail login)

⚠️ **CRITICAL**: Replace `[YOUR_ACTUAL_PASSWORD]` with your real password!

---

### 6. SMTP_FROM_EMAIL
```
Name:  SMTP_FROM_EMAIL
Value: ProVizient <info@provizient.com>
```
**Description**: Display name and sender email for outgoing messages

---

### 7. NOTIFICATION_EMAIL
```
Name:  NOTIFICATION_EMAIL
Value: info@provizient.com
```
**Description**: Where contact form submissions are sent

---

## Screenshot Guide

### Step 1: Open Configuration
![Azure Portal Navigation]
1. Login to portal.azure.com
2. Search for "Static Web Apps"
3. Click your app name (provizient)
4. Click **Configuration** in left sidebar

### Step 2: Add Application Settings
![Application Settings Tab]
1. Click **Application settings** tab
2. Click **+ Add** button at top
3. Enter Name and Value
4. Click **OK**
5. Repeat for all 7 variables

### Step 3: Save Configuration
![Save Button]
1. Click **Save** button at top
2. Confirm restart when prompted
3. Wait 1-2 minutes for changes to apply

---

## Verification Checklist

After adding all variables, verify:

- [ ] All 7 variables are listed in Application settings
- [ ] No typos in variable names (case-sensitive!)
- [ ] SMTP_USER and NOTIFICATION_EMAIL both use `info@provizient.com`
- [ ] SMTP_PORT is `587` (not "587" with quotes)
- [ ] SMTP_SECURE is `false` (lowercase)
- [ ] Password is correct (test by logging into webmail)
- [ ] Changes saved and app restarted

---

## Common Mistakes to Avoid

### ❌ Wrong Variable Names
```
smtp_host           ← WRONG (lowercase)
SMTP_HOST           ← CORRECT (uppercase)
```

### ❌ Missing Values
```
SMTP_PASSWORD = ""  ← WRONG (empty)
SMTP_PASSWORD = yourpassword ← CORRECT
```

### ❌ Extra Quotes
```
SMTP_PORT = "587"   ← WRONG (Azure adds quotes automatically)
SMTP_PORT = 587     ← CORRECT (no quotes)
```

### ❌ Wrong Email Format
```
SMTP_USER = info    ← WRONG (missing domain)
SMTP_USER = info@provizient.com ← CORRECT (full email)
```

---

## Testing After Configuration

### Quick Test via Azure Portal

1. Go to **Functions** in left sidebar
2. Click **contact** function
3. Click **Code + Test**
4. Click **Test/Run**
5. Input:
```json
{
  "name": "Test User",
  "email": "your-email@example.com",
  "subject": "Test",
  "message": "Testing email configuration"
}
```
6. Click **Run**
7. Check response: `{"success": true}`
8. Check email inbox

---

## Configuration Export/Backup

To backup your configuration:

1. In Application settings, click **Download** button
2. Save the JSON file securely
3. Use this to restore settings if needed

**Note**: Passwords are **not** exported for security reasons.

---

## Environment Variables Flow

```
Azure Application Settings
         ↓
Azure Static Web App
         ↓
API Function (api/contact/index.js)
         ↓
Email Service (api/shared/email.js)
         ↓
Hostinger SMTP Server
         ↓
Email Delivered
```

---

## Security Best Practices

### ✅ DO:
- Store passwords ONLY in Azure settings (never in code)
- Use Application settings (not Environment variables section)
- Enable Azure RBAC to restrict who can view settings
- Rotate passwords every 6 months
- Monitor Function logs for failed attempts

### ❌ DON'T:
- Commit `.env` or `.env.local` files to git
- Share Azure portal access unnecessarily
- Use weak passwords
- Leave default/example values
- Ignore security alerts

---

## Monitoring Configuration

### View Function Logs

1. Go to **Functions** → **contact**
2. Click **Monitor** tab
3. View recent executions
4. Look for errors or failures

### Expected Log Entries

**Success**:
```json
{
  "level": "info",
  "event": "submission_success",
  "notification_sent": true,
  "confirmation_sent": true
}
```

**Failure**:
```json
{
  "level": "error",
  "event": "email_failed",
  "error_type": "smtp_auth_failed"
}
```

---

## Updating Configuration

To change any value:

1. Go to Configuration → Application settings
2. Click the variable name
3. Update the Value
4. Click **OK**
5. Click **Save**
6. Wait for restart

Changes take effect immediately after restart (1-2 minutes).

---

## Multi-Environment Setup (Optional)

If you have staging + production:

### Staging Environment
```
SMTP_FROM_EMAIL = ProVizient Staging <info@provizient.com>
NOTIFICATION_EMAIL = staging@provizient.com
```

### Production Environment
```
SMTP_FROM_EMAIL = ProVizient <info@provizient.com>
NOTIFICATION_EMAIL = info@provizient.com
```

This helps distinguish test emails from real inquiries.

---

## FAQ

### Q: Can I use a different email for sending?
**A**: Yes, but it must be a valid Hostinger email account with SMTP access.

### Q: Do I need to configure anything in the code?
**A**: No, the code reads from environment variables automatically.

### Q: How do I test without sending real emails?
**A**: Set up a `.env.local` file for local testing, or use a test email address.

### Q: What if I change my email password?
**A**: Update `SMTP_PASSWORD` in Azure Configuration and save.

### Q: Can I see the password after saving?
**A**: No, Azure hides password values for security (shows as ••••••••).

---

## Related Documentation

- [Complete Email Setup Guide](./EMAIL-SETUP-GUIDE.md)
- [Quick Setup Checklist](./EMAIL-SETUP-CHECKLIST.md)
- [Environment Variables Reference](../.env.example)

---

**Last Updated**: January 2025
