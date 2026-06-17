# ProVizient — GitHub Pages Demo (POC)

Share a live demo with your team — **free**, no Azure account needed.

**Live URL (after setup):** https://logeshOfficial.github.io/provizient/

---

## One-time setup (2 minutes)

### Step 1 — Enable GitHub Pages

1. Open https://github.com/logeshOfficial/provizient  
2. Go to **Settings** → **Pages**  
3. Under **Build and deployment**:
   - **Source:** GitHub Actions  
4. Save — no other settings needed.

### Step 2 — Trigger deploy

Push any change to `main`, or:

1. Go to **Actions** tab  
2. Select **Deploy to GitHub Pages**  
3. Click **Run workflow** → **Run workflow**

### Step 3 — Wait ~2 minutes

1. **Actions** tab → wait for green checkmark  
2. **Settings** → **Pages** → your URL appears at the top  

Share this link with your senior:

```
https://logeshOfficial.github.io/provizient/
```

---

## What works on the demo

| Feature | Demo (GitHub Pages) | Production (Azure) |
|---------|---------------------|-------------------|
| All marketing pages | Yes | Yes |
| Blog, case studies | Yes | Yes |
| Animations & design | Yes | Yes |
| Contact form UI | Yes (simulated success) | Yes (real email) |
| Consultation form UI | Yes (simulated success) | Yes (real email) |

Forms run in **demo mode** on GitHub Pages — they show a success message but do not send email. That is intentional for the POC.

---

## Local preview (GitHub Pages style)

```powershell
cd D:\provizient
$env:GITHUB_PAGES = "true"
$env:NEXT_PUBLIC_SITE_URL = "http://localhost:3000/provizient"
$env:NEXT_PUBLIC_DEMO_MODE = "true"
npm run build:pages
npx serve out
```

Open http://localhost:3000/provizient/

---

## Updating the demo

1. Edit content (blog, services, etc.)  
2. Commit and push to `main`  
3. GitHub Actions redeploys automatically (~2 min)

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| 404 on Pages | Settings → Pages → Source must be **GitHub Actions** |
| Workflow failed | Check **Actions** log for build errors |
| CSS/JS broken | Ensure `GITHUB_PAGES=true` in workflow (already set) |
| Old version showing | Hard refresh (Ctrl+Shift+R) or wait for deploy |

---

## When you need real forms

Deploy to **Azure Static Web Apps** — see `AZURE-DEPLOY.md` for email-enabled production hosting.
