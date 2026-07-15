# ProVizient - Hostinger Hosting Setup Guide

Complete guide for deploying ProVizient website on **Hostinger** using native PHP for contact forms (no Azure dependency).

---

## Overview

Your ProVizient website now uses:
- ✅ **Static Next.js site** (HTML/CSS/JS)
- ✅ **PHP backend** for contact forms (native Hostinger)
- ✅ **Hostinger SMTP** for sending emails
- ✅ **info@provizient.com** for both sending and receiving
- ❌ **NO Azure Static Web Apps** (removed)
- ❌ **NO Azure Functions** (replaced with PHP)
- ❌ **NO Node.js server** needed in production

---

## Architecture

```
┌─────────────────────────────────────────────┐
│         Hostinger Web Hosting               │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────┐   ┌────────────────┐  │
│  │  Static Files   │   │   PHP API      │  │
│  │  (Next.js out/) │   │  /api/*.php    │  │
│  │  - HTML         │   │  - contact.php │  │
│  │  - CSS          │   │  - consultation│  │
│  │  - JavaScript   │   │  - PHPMailer   │  │
│  └────────┬────────┘   └────────┬───────┘  │
│           │                     │           │
│           └──────────┬──────────┘           │
│                      │                      │
│                      ↓                      │
│            ┌────────────────────┐           │
│            │  Hostinger SMTP    │           │
│            │  smtp.hostinger.com│           │
│            │  Port 587          │           │
│            └──────────┬─────────┘           │
└───────────────────────┼─────────────────────┘
                        │
                        ↓
              ┌─────────────────────┐
              │  Email Delivery     │
              │  → info@provizient  │
              │  → User confirmation│
              └─────────────────────┘
```

---

## Prerequisites

### 1. Development Environment
- ✅ Node.js 20+ installed
- ✅ Git installed
- ✅ Code editor (VS Code recommended)

### 2. Hostinger Account
- ✅ Hostinger web hosting plan (Business or higher recommended)
- ✅ Domain configured (provizient.com)
- ✅ Email account created (info@provizient.com)
- ✅ cPanel or hPanel access

### 3. Required Information
- ✅ Hostinger FTP/SFTP credentials
- ✅ Email password for info@provizient.com
- ✅ Domain DNS configured to point to Hostinger

---

## Step 1: Install PHPMailer on Hostinger

PHPMailer is required for sending emails via SMTP.

### Option A: Via Composer (Recommended)

1. Login to **Hostinger cPanel/hPanel**
2. Go to **Terminal** or **SSH Access**
3. Navigate to your API folder:
   ```bash
   cd public_html/api
   ```
4. Install PHPMailer via Composer:
   ```bash
   composer require phpmailer/phpmailer
   ```

### Option B: Manual Installation

1. Download PHPMailer from: https://github.com/PHPMailer/PHPMailer/releases
2. Extract and upload the `PHPMailer` folder to `public_html/api/`
3. Folder structure should be:
   ```
   public_html/
   └── api/
       ├── PHPMailer/
       │   ├── PHPMailer.php
       │   ├── SMTP.php
       │   └── Exception.php
       ├── contact.php
       └── consultation.php
   ```

---

## Step 2: Build Your Next.js Site

On your local machine:

```bash
cd D:\provizient

# Install dependencies
npm install

# Build static site
npm run build
```

This creates the `out/` folder with your static website.

---

## Step 3: Upload Files to Hostinger

### What to Upload

Upload these folders/files to your Hostinger `public_html/`:

```
Upload to Hostinger public_html/:
├── api/                    ← PHP backend files
│   ├── PHPMailer/         ← PHPMailer library
│   ├── contact.php
│   ├── consultation.php
│   ├── config.php
│   ├── .htaccess
│   └── .env.php           ← Create this (see Step 4)
└── (contents of out/ folder)  ← All static files from build
    ├── _next/
    ├── about/
    ├── contact/
    ├── index.html
    └── ...
```

### Upload Methods

**Option 1: FTP/SFTP (Recommended)**
1. Use FileZilla or any FTP client
2. Connect to Hostinger FTP
3. Upload `api/` folder to `public_html/api/`
4. Upload contents of `out/` folder to `public_html/`

**Option 2: File Manager**
1. Login to Hostinger hPanel
2. Go to **File Manager**
3. Navigate to `public_html/`
4. Upload folders

**Option 3: Git Deployment (Advanced)**
1. Connect Hostinger to your Git repository
2. Set up auto-deployment

---

## Step 4: Configure Email Settings

### Create Environment Configuration

On Hostinger, create `/public_html/api/.env.php`:

```php
<?php
// Email Configuration
// Replace with your actual password!
putenv('SMTP_HOST=smtp.hostinger.com');
putenv('SMTP_PORT=587');
putenv('SMTP_USER=info@provizient.com');
putenv('SMTP_PASSWORD=YOUR_ACTUAL_EMAIL_PASSWORD');
putenv('SMTP_FROM_EMAIL=ProVizient <info@provizient.com>');
putenv('NOTIFICATION_EMAIL=info@provizient.com');
?>
```

**IMPORTANT**: 
- ✅ Replace `YOUR_ACTUAL_EMAIL_PASSWORD` with the real password
- ✅ This file is protected by `.htaccess` (not accessible via web)
- ✅ Never commit this file to Git

### Alternative: Use Hostinger Environment Variables

Instead of `.env.php`, you can set environment variables in Hostinger:

1. Go to **hPanel** → **Advanced** → **PHP Configuration**
2. Add environment variables (if supported)
3. Or use **php.ini** directives

---

## Step 5: Set Correct Permissions

Ensure PHP files have correct permissions:

```bash
# Via SSH/Terminal
chmod 755 /public_html/api
chmod 644 /public_html/api/*.php
chmod 600 /public_html/api/.env.php
chmod 644 /public_html/api/.htaccess
```

Or via File Manager:
- Folders: `755`
- PHP files: `644`
- `.env.php`: `600` (owner read/write only)

---

## Step 6: Test Your Setup

### Test 1: Check if PHP API is accessible

Visit: `https://provizient.com/api/contact.php`

**Expected**: 
- Should show: `{"message":"Method Not Allowed"}`
- This is correct! (POST required)

### Test 2: Test Contact Form

1. Visit: `https://provizient.com/contact`
2. Fill out the contact form
3. Submit

**Expected Results**:
- ✅ Form shows success message
- ✅ You receive notification email at `info@provizient.com`
- ✅ User receives confirmation email

### Test 3: Test Consultation Form

1. Visit: `https://provizient.com/book-consultation`
2. Fill out consultation form
3. Submit

**Expected Results**:
- ✅ Form shows success message
- ✅ Both emails delivered

---

## Step 7: Verify Email Delivery

### Check Notification Email

Login to `info@provizient.com` and verify:
- ✅ Subject: "New Contact Inquiry: [subject]"
- ✅ Contains: name, email, company, phone, subject, message
- ✅ Proper formatting
- ✅ Email is not in spam

### Check Confirmation Email

Check the test email inbox:
- ✅ Subject: "Thank you for contacting ProVizient"
- ✅ Contains: thank you message with first name
- ✅ No inquiry details included (privacy)
- ✅ Email is not in spam

---

## Troubleshooting

### ❌ Error: "Failed to send message"

**Possible causes**:
1. Wrong SMTP password in `.env.php`
2. PHPMailer not installed correctly
3. SMTP port blocked by Hostinger

**Solutions**:
```bash
# Check if PHPMailer exists
ls -la /public_html/api/PHPMailer/

# Test SMTP credentials by logging into webmail
# Visit: webmail.hostinger.com

# Check PHP error logs
# hPanel → Error Logs
```

### ❌ Error: 500 Internal Server Error

**Possible causes**:
1. Syntax error in PHP files
2. Wrong file permissions
3. Missing PHPMailer

**Solutions**:
```bash
# Check PHP error logs in hPanel
# File Manager → public_html → error_log

# Verify file permissions
chmod 644 /public_html/api/*.php
```

### ❌ Emails Not Received

**Check**:
1. ✅ Spam folder in `info@provizient.com`
2. ✅ SMTP credentials correct in `.env.php`
3. ✅ Email quota not full in Hostinger
4. ✅ PHP mail function enabled in Hostinger

**Test SMTP manually**:
```php
// Create test-email.php in /api/
<?php
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';
require_once 'PHPMailer/Exception.php';

$mail = new PHPMailer\PHPMailer\PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.hostinger.com';
$mail->SMTPAuth = true;
$mail->Username = 'info@provizient.com';
$mail->Password = 'YOUR_PASSWORD';
$mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;
$mail->setFrom('info@provizient.com');
$mail->addAddress('info@provizient.com');
$mail->Subject = 'Test Email';
$mail->Body = 'This is a test';
echo $mail->send() ? 'Success!' : 'Failed: ' . $mail->ErrorInfo;
?>
```

Visit: `https://provizient.com/api/test-email.php`

### ❌ Rate Limiting Issues

If rate limits are too strict:

Edit `api/contact.php`:
```php
define('RATE_LIMIT', 5); // increase from 3
define('RATE_WINDOW', 600); // 10 minutes
```

---

## Security Best Practices

### 1. Protect .env.php File

`.htaccess` already protects it, but verify:

```apache
<Files ".env.php">
    Require all denied
</Files>
```

### 2. Enable HTTPS

In Hostinger hPanel:
1. **SSL/TLS** → **Manage**
2. Enable **Force HTTPS redirect**
3. Install free Let's Encrypt SSL

### 3. Hide PHP Version

Add to `.htaccess`:
```apache
# Hide PHP version
Header unset X-Powered-By
ServerSignature Off
```

### 4. Limit File Upload Size

In `php.ini` or `.htaccess`:
```
php_value upload_max_filesize 2M
php_value post_max_size 2M
```

### 5. Regular Backups

- Enable automatic backups in Hostinger
- Backup frequency: Weekly recommended
- Keep 4 weeks of backups

---

## Updating Your Website

### Update Static Content

1. Edit files locally in `src/`
2. Run `npm run build`
3. Upload new files from `out/` to Hostinger

### Update PHP Backend

1. Edit `api/*.php` locally
2. Upload changed files via FTP
3. No build step needed

### Quick Update via FTP

```bash
# Upload only changed files
# Use FileZilla "Overwrite if newer" option
```

---

## Monitoring & Maintenance

### Check Logs Regularly

**PHP Error Logs**:
```bash
# Via File Manager or SSH
tail -f /public_html/error_log
```

**Contact Form Logs**:
```bash
# Check system temp directory
# Location varies by hosting setup
tail -f /tmp/provizient_contact.log
```

### Monitor Email Delivery

- Check `info@provizient.com` inbox daily
- Verify no emails in spam
- Test contact form weekly

### Performance Optimization

1. **Enable caching** in Hostinger
2. **Enable Gzip compression**
3. **Use CDN** (Cloudflare free tier)
4. **Optimize images** before upload

---

## Cost Breakdown

| Service | Cost | Notes |
|---------|------|-------|
| Hostinger Business | ~$3-7/month | Includes hosting, email, SSL |
| Domain (provizient.com) | ~$10-15/year | Usually included first year |
| **Total** | **~$50-100/year** | No additional costs |

**vs Azure Static Web Apps**:
- Azure: $0-9/month + email service costs
- Hostinger: All-in-one solution

---

## Migration Checklist

- [ ] Node.js and npm installed locally
- [ ] PHPMailer installed on Hostinger
- [ ] `npm run build` completed successfully
- [ ] All files uploaded to `public_html/`
- [ ] `.env.php` created with correct password
- [ ] File permissions set correctly
- [ ] HTTPS/SSL enabled
- [ ] Contact form tested (working)
- [ ] Consultation form tested (working)
- [ ] Both emails delivered successfully
- [ ] No emails in spam folder
- [ ] DNS pointing to Hostinger
- [ ] Old Azure resources deleted (optional)

---

## Next Steps

1. **Test thoroughly** on production
2. **Monitor logs** for first few days
3. **Set up DNS properly** (SPF, DKIM)
4. **Enable backups** in Hostinger
5. **Consider CDN** for better performance

---

## Support

**Hostinger Issues**: support.hostinger.com (24/7 chat)  
**Email SMTP**: Check Hostinger email documentation  
**PHP Errors**: Check error logs in hPanel  

---

**Last Updated**: January 2025  
**Version**: 1.0 - Hostinger Native PHP Setup
