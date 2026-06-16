# Deploy ProVizient to Azure Static Web Apps

This site is a **static Next.js export** hosted on **Azure Static Web Apps**. Contact and consultation forms use **Azure Functions** in the `/api` folder.

---

## What changed (static site)

| Removed | Replaced with |
|---------|----------------|
| Admin dashboard (`/admin`) | Edit content in `src/data/blog.ts` and `src/lib/constants.ts` |
| PostgreSQL + Prisma | Static data files |
| NextAuth | Not needed |
| Vercel API routes | Azure Functions (`api/contact`, `api/consultation`) |

---

## Option A — Deploy from Azure Portal (quickest)

### 1. Create the Static Web App

1. Sign in to [Azure Portal](https://portal.azure.com)
2. **Create a resource** → search **Static Web App** → **Create**
3. Fill in:
   - **Subscription:** your subscription
   - **Resource group:** create new (e.g. `rg-provizient`)
   - **Name:** `provizient` (or your choice — becomes `https://<name>.azurestaticapps.net`)
   - **Plan type:** Free (fine for marketing sites)
   - **Region:** pick closest to your users
   - **Deployment source:** GitHub
4. Sign in to GitHub and select:
   - **Organization:** your account
   - **Repository:** `logeshOfficial/provizient` (or your repo)
   - **Branch:** `main`
5. **Build Details:**
   - **Build Presets:** Custom
   - **App location:** `/`
   - **Api location:** `api`
   - **Output location:** `out`
6. Click **Review + create** → **Create**

Azure creates a GitHub Actions workflow and deploys automatically on push to `main`.

### 2. Configure environment variables (for forms)

In Azure Portal → your Static Web App → **Settings** → **Environment variables** → **Add**:

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | Your [Resend](https://resend.com) API key |
| `RESEND_FROM_EMAIL` | `ProVizient <noreply@yourdomain.com>` |
| `NOTIFICATION_EMAIL` | Email that receives form submissions |
| `NEXT_PUBLIC_SITE_URL` | `https://<your-app>.azurestaticapps.net` |
| `NEXT_PUBLIC_SITE_NAME` | `ProVizient` |

Redeploy after adding variables (**Deployments** → **Redeploy**).

### 3. Custom domain (optional)

Static Web App → **Custom domains** → **Add** → follow DNS steps for your domain.

---

## Option B — Deploy manually (no GitHub)

```powershell
cd D:\provizient
npm install
npm run build
```

Install [Azure Static Web Apps CLI](https://azure.github.io/static-web-apps-cli/):

```powershell
npm install -g @azure/static-web-apps-cli
```

Deploy (get deployment token from Azure Portal → Static Web App → **Manage deployment token**):

```powershell
swa deploy ./out --api-location ./api --deployment-token <YOUR_TOKEN>
```

---

## Local development

```powershell
cd D:\provizient
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

**Note:** Forms call `/api/contact` and `/api/consultation`. Those only work when deployed to Azure (or with SWA CLI):

```powershell
npm run build
swa start ./out --api-location ./api
```

---

## Updating content

### Blog posts

Edit `src/data/blog.ts` — add or change posts, then commit and push (or redeploy).

### Case studies, services, testimonials

Edit `src/lib/constants.ts` and `src/components/home/testimonials.tsx`.

After changes:

```powershell
npm run build
git add .
git commit -m "Update site content"
git push
```

---

## Project structure

```
provizient/
├── api/                    # Azure Functions (contact + consultation forms)
│   ├── contact/
│   ├── consultation/
│   └── shared/
├── out/                    # Generated static site (after npm run build)
├── src/
│   ├── app/(marketing)/    # Public pages
│   ├── data/blog.ts        # Blog content (edit here)
│   └── lib/constants.ts    # Services, case studies, etc.
├── staticwebapp.config.json
└── .github/workflows/      # CI/CD to Azure
```

---

## Troubleshooting

### 404 on page refresh or deep links

Ensure `staticwebapp.config.json` is copied into `out/` (the build script does this automatically).

### Forms return 404 locally

Expected — use `swa start ./out --api-location ./api` or test on the deployed Azure URL.

### Forms fail in production

1. Check `RESEND_API_KEY` is set in Azure environment variables
2. Verify your Resend domain is verified
3. View logs: Static Web App → **Monitoring** → **Log stream**

### Build fails on GitHub Actions

- Confirm **Output location** is `out` (not `.next`)
- Confirm **Api location** is `api`
- Node 20+ is required (set in workflow)

---

## Cost

Azure Static Web Apps **Free** tier includes:

- 100 GB bandwidth/month
- 2 custom domains
- Azure Functions for the API (limited free executions)

Sufficient for a consulting marketing website.
