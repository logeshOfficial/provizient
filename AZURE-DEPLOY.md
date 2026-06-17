# Deploy ProVizient to Azure Static Web Apps

Static marketing site with **no database**. Forms send email via Azure Functions + Resend.

| Component | Azure service |
|-----------|---------------|
| Website (HTML/CSS/JS) | Azure Static Web Apps |
| Contact & consultation forms | Azure Functions (in `/api`) |
| Email delivery | Resend (third-party API) |

---

## Step 1 — Create Static Web App

1. [Azure Portal](https://portal.azure.com) → **Create a resource** → **Static Web App**
2. Settings:
   - **Resource group:** `rg-provizient`
   - **Name:** `provizient` → `https://provizient.azurestaticapps.net`
   - **Plan:** Free
   - **Deployment source:** GitHub
   - **Repository:** `logeshOfficial/provizient`
   - **Branch:** `main`
3. **Build details:**
   - **Build Presets:** Custom
   - **App location:** `/`
   - **Api location:** `api`
   - **Output location:** `out`
4. **Review + create**

Azure adds a deploy token to GitHub secrets automatically when you connect the repo.

---

## Step 2 — Environment variables

Static Web App → **Settings** → **Environment variables**:

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | Your [Resend](https://resend.com) API key |
| `RESEND_FROM_EMAIL` | `ProVizient <noreply@yourdomain.com>` |
| `NOTIFICATION_EMAIL` | Email that receives form submissions |
| `NEXT_PUBLIC_SITE_URL` | `https://provizient.azurestaticapps.net` |
| `NEXT_PUBLIC_SITE_NAME` | `ProVizient` |

Redeploy after saving.

---

## Step 3 — Verify

1. Visit your Azure URL
2. Submit the contact form at `/contact`
3. Check `NOTIFICATION_EMAIL` inbox

---

## Local development

```powershell
cd D:\provizient
npm install
npm run dev
```

Forms only work with the SWA emulator:

```powershell
npm run build
npx @azure/static-web-apps-cli start ./out --api-location ./api
```

---

## GitHub Actions

Workflow: `.github/workflows/azure-static-web-apps.yml`

If deploying manually, add secret `AZURE_STATIC_WEB_APPS_API_TOKEN` from:
**Static Web App → Manage deployment token**

---

## Updating content

1. Edit `src/data/blog.ts`, `src/lib/constants.ts`, or testimonials component
2. `npm run build`
3. Push to `main`

---

## Architecture

```
GitHub (main)
    │
    ▼
GitHub Actions ──► Azure Static Web Apps
                         ├── Static files (out/)
                         └── Azure Functions (api/)
                                    │
                                    ▼
                              Resend API (email)
```

No PostgreSQL. No admin panel. Leads arrive by email.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| 404 on subpages | Ensure `staticwebapp.config.json` is in `out/` (build script copies it) |
| Forms 404 locally | Use `swa start ./out --api-location ./api` |
| Forms fail in production | Set `RESEND_API_KEY` in Azure env vars; verify Resend domain |
| Build fails | Confirm output location is `out`, not `.next` |

---

## Cost

**Free tier** includes 100 GB bandwidth/month and Azure Functions for the API — sufficient for a consulting marketing site.
