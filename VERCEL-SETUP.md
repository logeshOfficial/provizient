# Vercel Deployment Checklist — ProVizient

If you see **404: NOT_FOUND** (white Vercel box) despite a successful build, the project is usually **not configured as Next.js**.

## Required Vercel Dashboard Settings

Go to **Project → Settings → General → Build & Development Settings**:

| Setting | Correct value |
|---------|----------------|
| **Framework Preset** | `Next.js` |
| **Root Directory** | *(leave empty)* |
| **Build Command** | `prisma generate && next build` *(or use default — `vercel.json` sets this)* |
| **Output Directory** | *(leave empty — do NOT set `.next` or `out`)* |
| **Install Command** | `npm install` |

## Environment Variables (Production)

| Variable | Example |
|----------|---------|
| `DATABASE_URL` | Neon pooler URL with `?sslmode=require` |
| `AUTH_SECRET` | Random base64 string |
| `AUTH_URL` | `https://project-uf7yq.vercel.app` |
| `NEXT_PUBLIC_SITE_URL` | `https://project-uf7yq.vercel.app` |
| `NEXT_PUBLIC_SITE_NAME` | `ProVizient` |

## After changing settings

1. **Deployments** → latest → **⋯** → **Redeploy**
2. Uncheck **Use existing Build Cache**
3. Visit your production URL — you should see the dark ProVizient homepage

## Git connection

Prefer **GitHub integration** over Deploy Hooks alone:

- **Settings → Git** → connect `logeshOfficial/provizient`
- Production branch: `main`

## Repo includes

- `vercel.json` — forces `framework: "nextjs"` so routing works correctly
