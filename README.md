# ProVizient — Enterprise AI Consulting Website

Static marketing website for ProVizient, hosted on **Azure Static Web Apps**. Contact and consultation forms send email via **Azure Functions** + Resend — no database required.

**Tagline:** Transforming Businesses Through Intelligent AI Solutions.

## Tech Stack

- **Framework:** Next.js 16 (static export)
- **Hosting:** Azure Static Web Apps
- **Forms:** Azure Functions + Resend email
- **Styling:** Tailwind CSS v4, shadcn/ui, Framer Motion

## Quick Start

```powershell
cd D:\provizient
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Test forms locally

```powershell
npm run build
npx @azure/static-web-apps-cli start ./out --api-location ./api
```

## Deploy to Azure

See **[AZURE-DEPLOY.md](./AZURE-DEPLOY.md)** for production hosting with real email forms.

## Share a POC demo (GitHub Pages — free)

See **[GITHUB-PAGES.md](./GITHUB-PAGES.md)** — live demo URL:

**https://logeshOfficial.github.io/provizient/**

Enable **Settings → Pages → Source: GitHub Actions**, then push to `main`.

## Updating Content

| Content | File |
|---------|------|
| Blog posts | `src/data/blog.ts` |
| Services, case studies | `src/lib/constants.ts` |
| Testimonials | `src/components/home/testimonials.tsx` |

Edit → `npm run build` → push to `main` → Azure redeploys.

## Scripts

```powershell
npm run dev      # Development server
npm run build    # Static export to out/
npm run start    # Preview static site locally
npm run lint     # ESLint
```

## License

Proprietary — ProVizient. All rights reserved.
