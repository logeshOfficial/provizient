# Quick Deploy to Hostinger - Step by Step

Follow these exact steps to deploy your ProVizient website to Hostinger.

---

## Before You Start

You need:
- [ ] Hostinger account with web hosting active
- [ ] FTP/SFTP credentials from Hostinger
- [ ] `info@provizient.com` email password
- [ ] FileZilla or any FTP client installed
- [ ] Node.js installed on your computer

---

## Step 1: Build Your Website (5 minutes)

Open PowerShell/Terminal and run:

```powershell
# Navigate to project
cd D:\provizient

# Install dependencies (if not done)
npm install

# Build static site
npm run build
```

✅ You should now have an `out/` folder with your website files.

---

## Step 2: Install PHPMailer on Hostinger (5 minutes)

### Via Hostinger Terminal (Recommended)

1. Login to **Hostinger hPanel**
2. Go to **Advanced** → **Terminal** (or **SSH Access**)
3. Run these commands:

```bash
cd public_html/api
composer require phpmailer/phpmailer
```

### Via Manual Upload (Alternative)

1. Download PHPMailer: https://github.com/PHPMailer/PHPMailer/releases
2. Extract the ZIP file
3. Upload the `PHPMailer` folder to `/public_html/api/PHPMailer/`

---

## Step 3: Upload Files via FTP (10 minutes)

### Connect to Hostinger FTP

1. Open **FileZilla** (or your FTP client)
2. Enter Hostinger FTP credentials:
   - **Host**: `ftp.provizient.com` (or IP from hPanel)
   - **Username**: Your FTP username
   - **Password**: Your FTP password
   - **Port**: `21` (FTP) or `22` (SFTP)
3. Click **Connect**

### Upload API Folder

On the **left side** (local): Navigate to `D:\provizient\api\`  
On the **right side** (server): Navigate to `/public_html/`

**Upload these files/folders**:
- ✅ `contact.php`
- ✅ `consultation.php`
- ✅ `config.php`
- ✅ `.htaccess`
- ✅ `.env.php.example` (rename to `.env.php` after upload)
- ❌ **DO NOT upload**: `contact/`, `consultation/`, `shared/`, `node_modules/`

### Upload Static Site

On the **left side** (local): Navigate to `D:\provizient\out\`  
On the **right side** (server): Navigate to `/public_html/`

**Upload EVERYTHING inside the out/ folder**:
- ✅ `_next/` folder
- ✅ `about/` folder
- ✅ `contact/` folder
- ✅ `index.html`
- ✅ All other files and folders

**IMPORTANT**: Upload the **contents** of `out/`, not the `out/` folder itself!

---

## Step 4: Configure Email Settings (3 minutes)

### Edit .env.php File

1. In FileZilla, navigate to `/public_html/api/`
2. Right-click `.env.php` (or rename from `.env.php.example`)
3. Click **View/Edit**
4. Replace the content with:

```php
<?php
putenv('SMTP_HOST=smtp.hostinger.com');
putenv('SMTP_PORT=587');
putenv('SMTP_USER=info@provizient.com');
putenv('SMTP_PASSWORD=YOUR_ACTUAL_PASSWORD');
putenv('SMTP_FROM_EMAIL=ProVizient <info@provizient.com>');
putenv('NOTIFICATION_EMAIL=info@provizient.com');
?>
```

5. Replace `YOUR_ACTUAL_PASSWORD` with your **real email password**
6. **Save** and close

**Get Password**:
- Same password you use at webmail.hostinger.com
- If you don't know it, reset it: hPanel → Emails → info@provizient.com → Change Password

---

## Step 5: Set File Permissions (2 minutes)

In FileZilla (or File Manager):

### Right-click on each file → File Permissions:

```
/public_html/api/            → 755
/public_html/api/contact.php → 644
/public_html/api/consultation.php → 644
/public_html/api/config.php  → 644
/public_html/api/.htaccess   → 644
/public_html/api/.env.php    → 600 (important!)
```

---

## Step 6: Enable SSL/HTTPS (3 minutes)

1. Login to **Hostinger hPanel**
2. Go to **SSL/TLS** → **Manage**
3. Click **Install SSL** for `provizient.com`
4. Choose **Free Let's Encrypt SSL**
5. Enable **Force HTTPS redirect**
6. Wait 5 minutes for SSL to activate

---

## Step 7: Test Your Website (5 minutes)

### Test 1: Check if website loads

Visit: `https://provizient.com`

✅ **Should see**: Your home page loads properly  
❌ **If not**: Clear browser cache and try again

### Test 2: Test Contact Form

1. Visit: `https://provizient.com/contact`
2. Fill out the form with your personal email
3. Click **Send Message**

✅ **Should see**: "Message sent!" success message

### Test 3: Check Emails

**Check `info@provizient.com` inbox**:
- ✅ Should receive: "New Contact Inquiry" email
- ✅ Contains: Your name, email, subject, message

**Check your personal email inbox**:
- ✅ Should receive: "Thank you for contacting ProVizient" email
- ✅ Contains: Thank you message with your first name

### Test 4: Test Consultation Form

1. Visit: `https://provizient.com/book-consultation`
2. Fill out the form
3. Submit

✅ **Should see**: Success message and both emails received

---

## ✅ Deployment Complete!

If all tests passed, your website is live! 🎉

---

## ❌ Troubleshooting

### Problem: Forms show "Failed to send message"

**Check**:
1. Is `.env.php` file present in `/public_html/api/`?
2. Is password correct in `.env.php`?
3. Test login at webmail.hostinger.com with same password

**Fix**:
```php
// Verify .env.php has correct password
putenv('SMTP_PASSWORD=correct-password-here');
```

### Problem: 500 Internal Server Error

**Check**:
1. Is PHPMailer installed at `/public_html/api/PHPMailer/`?
2. Are file permissions correct?

**Fix**:
```bash
# Reinstall PHPMailer via Terminal
cd public_html/api
composer require phpmailer/phpmailer
```

### Problem: CSS/Images not loading

**Check**:
1. Did you upload contents of `out/` folder (not the folder itself)?
2. Is `_next/` folder present in `/public_html/`?

**Fix**: Re-upload all files from `out/` folder to `public_html/` root

### Problem: Emails going to spam

**Fix**:
1. Add SPF record to DNS (see [EMAIL-SETUP-GUIDE.md](./docs/EMAIL-SETUP-GUIDE.md))
2. Enable DKIM in Hostinger email settings
3. Ask recipient to mark as "Not Spam"

---

## 📚 Need More Help?

**Complete Guides**:
- [HOSTINGER-SETUP-GUIDE.md](./docs/HOSTINGER-SETUP-GUIDE.md) - Full setup guide
- [EMAIL-SETUP-GUIDE.md](./docs/EMAIL-SETUP-GUIDE.md) - Email configuration
- [EMAIL-TROUBLESHOOTING.md](./docs/EMAIL-TROUBLESHOOTING.md) - Problem solving

**Support**:
- Hostinger Support: support.hostinger.com (24/7 chat)

---

## 📋 Deployment Checklist

After deployment, verify:

- [ ] Website loads at https://provizient.com
- [ ] HTTPS/SSL enabled (green padlock)
- [ ] All pages load correctly
- [ ] Images and CSS working
- [ ] Contact form works
- [ ] Consultation form works
- [ ] Notification emails received at info@provizient.com
- [ ] Confirmation emails received by users
- [ ] No emails in spam folder
- [ ] No errors in browser console
- [ ] Mobile responsive working

**All checked?** You're done! 🚀

---

## 🔄 Future Updates

When you need to update the website:

```powershell
# 1. Make changes locally in src/ folder
# 2. Build
npm run build

# 3. Upload changed files from out/ via FTP
# Upload only the files you changed!

# Done!
```

---

**Quick Deploy Version**: 1.0  
**Time Required**: ~30 minutes  
**Difficulty**: Easy  
**Status**: Production Ready ✅
