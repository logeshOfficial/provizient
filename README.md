# ProVizient — Enterprise AI Consulting Website

Premium enterprise AI consulting website built with Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui, and Framer Motion. Deployed as a **static site** on **Azure Static Web Apps**.

**Tagline:** Transforming Businesses Through Intelligent AI Solutions.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Hosting:** Azure Static Web Apps
- **Forms API:** Azure Functions + Resend email
- **Styling:** Tailwind CSS v4
- **UI:** shadcn/ui (Radix UI)
- **Animations:** Framer Motion
- **Analytics:** Google Analytics (optional)

## Getting Started

```bash
cd provizient
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Test forms locally (with Azure Functions)

```bash
npm run build
npx @azure/static-web-apps-cli start ./out --api-location ./api
```

## Deploy to Azure

See **[AZURE-DEPLOY.md](./AZURE-DEPLOY.md)** for step-by-step Azure Portal instructions.

Quick summary:

1. Create **Static Web App** in Azure Portal
2. Connect GitHub repo (`main` branch)
3. Set build: **output** = `out`, **api** = `api`
4. Add env vars: `RESEND_API_KEY`, `NOTIFICATION_EMAIL`, `NEXT_PUBLIC_SITE_URL`

## Updating Content

| Content | File to edit |
|---------|--------------|
| Blog posts | `src/data/blog.ts` |
| Services, case studies | `src/lib/constants.ts` |
| Homepage testimonials | `src/components/home/testimonials.tsx` |

After editing, run `npm run build` and push to deploy.

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| About Us | `/about` |
| Services | `/services` |
| AI Solutions | `/ai-solutions` |
| Industries | `/industries` |
| Case Studies | `/case-studies` |
| Blog | `/blog` |
| Contact Us | `/contact` |
| Book Consultation | `/book-consultation` |
| Privacy Policy | `/privacy-policy` |
| Terms & Conditions | `/terms-and-conditions` |

## Scripts

```bash
npm run dev      # Development server
npm run build    # Static export to out/
npm run start    # Preview static site locally
npm run lint     # ESLint
```

## License

Proprietary — ProVizient. All rights reserved.
