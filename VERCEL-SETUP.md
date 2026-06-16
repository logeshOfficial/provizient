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

Set these under **Project → Settings → Environment Variables** for the **Production** environment:

| Variable | Value | Notes |
|----------|-------|-------|
| `DATABASE_URL` | Neon **pooler** connection string | Must include `?sslmode=require`. Use the pooler host (`…-pooler.…neon.tech`), not the direct host. **Required for admin login.** |
| `AUTH_SECRET` | Random string (32+ bytes) | Generate: `openssl rand -base64 32` (PowerShell: `[Convert]::ToBase64String((1..32 \| ForEach-Object { Get-Random -Maximum 256 }))`) |
| `AUTH_URL` | `https://project-uf7yq.vercel.app` | Must match your production URL exactly (no trailing slash) |
| `NEXT_PUBLIC_SITE_URL` | `https://project-uf7yq.vercel.app` | Same as production URL |
| `NEXT_PUBLIC_SITE_NAME` | `ProVizient` | |

Optional (email, images, analytics): `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `NOTIFICATION_EMAIL`, `CLOUDINARY_*`, `NEXT_PUBLIC_GA_ID`.

`ADMIN_EMAIL` and `ADMIN_PASSWORD` are **not** needed on Vercel — they are only used when running the seed script locally against your database.

## Admin login not working?

Admin login at `/admin/login` fails with **"Invalid email or password"** or a server error when:

1. **`DATABASE_URL` is missing or wrong on Vercel** — the most common cause. The contact form can still return success without saving to the DB.
2. **Admin user was never seeded** in the production Neon database (only local was seeded).
3. **Wrong password** — use the `ADMIN_PASSWORD` from your local `.env` (default seed password is `admin123` if unset).
4. **`AUTH_SECRET` or `AUTH_URL` missing/mismatched** on Vercel.

### Fix: set env vars and seed production database

**Step 1 — Vercel env vars**

1. Open [Vercel → your project → Settings → Environment Variables](https://vercel.com).
2. Add/update `DATABASE_URL` (Neon **pooler** URL), `AUTH_SECRET`, and `AUTH_URL` as in the table above.
3. **Deployments → latest → ⋯ → Redeploy** (uncheck build cache).

**Step 2 — Push schema and seed admin (from your machine)**

Use your Neon **direct** connection string in a temporary shell env (from Neon Dashboard → Connect → Direct connection):

```powershell
cd D:\provizient

$env:DATABASE_URL = "postgresql://USER:PASS@ep-xxx.region.aws.neon.tech/neondb?sslmode=require"
$env:ADMIN_EMAIL = "admin@provizient.com"
$env:ADMIN_PASSWORD = "YourSecurePasswordHere"

npx prisma db push
npm run db:seed
```

The seed script bcrypt-hashes `ADMIN_PASSWORD` and upserts the admin user. Re-running seed updates the password if the user already exists.

**Step 3 — Log in**

- URL: `https://project-uf7yq.vercel.app/admin/login`
- Email: `admin@provizient.com` (or your `ADMIN_EMAIL`)
- Password: the `ADMIN_PASSWORD` you used when seeding

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
- `src/lib/auth.ts` — NextAuth v5 with `trustHost: true` for Vercel
