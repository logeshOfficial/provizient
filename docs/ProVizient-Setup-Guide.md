# ProVizient — Technical Documentation & Setup Guide

**Company:** ProVizient  
**Tagline:** Transforming Businesses Through Intelligent AI Solutions.  
**Document Version:** 3.0  
**Last Updated:** June 2026  
**Project Location:** `D:\provizient`  
**Repository:** https://github.com/logeshOfficial/provizient

---

## 1. Project Overview

ProVizient is a premium enterprise AI consulting **marketing website** for lead generation. It is not an AI SaaS product.

**This version uses no database.** Content is stored in code files. Contact and consultation forms send email via Azure Functions + Resend.

### What's included

- Public marketing website (11 pages)
- Contact and consultation forms (email notifications)
- Static blog with posts defined in code
- SEO, sitemap, robots.txt, Google Analytics

### What's NOT included (by design)

- PostgreSQL / database
- Admin dashboard
- User authentication
- Stored form submissions (leads go to your email inbox)

### Production hosting

| Component | Service |
|-----------|---------|
| Website | Azure Static Web Apps |
| Forms API | Azure Functions (`/api` folder) |
| Email | Resend |

---

## 2. Technology Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (static export) |
| UI | React 19, Tailwind CSS v4, shadcn/ui, Framer Motion |
| Forms | React Hook Form + Zod |
| Hosting | Azure Static Web Apps |
| Form backend | Azure Functions (Node.js) |
| Email | Resend API |
| CI/CD | GitHub Actions |

---

## 3. Prerequisites

1. **Node.js 20+** — https://nodejs.org  
2. **npm** — included with Node.js  
3. **Git** — https://git-scm.com  
4. **Azure account** — https://portal.azure.com  
5. **Resend account** (optional for email) — https://resend.com  

---

## 4. Project Structure

```
provizient/
├── api/                        # Azure Functions (contact + consultation)
│   ├── contact/
│   ├── consultation/
│   └── shared/
├── src/
│   ├── app/(marketing)/        # Public pages
│   ├── data/blog.ts            # Blog posts (edit here)
│   ├── lib/constants.ts        # Services, case studies
│   └── components/
├── out/                        # Built static site (after npm run build)
├── staticwebapp.config.json
├── .github/workflows/          # Azure deploy pipeline
└── package.json
```

---

## 5. Local Setup

### Step 1: Install

```powershell
cd D:\provizient
npm install
```

### Step 2: Environment (optional for local preview)

```powershell
copy .env.example .env
```

For local dev, `.env` is optional — the site runs without it. Email requires Resend keys on Azure.

### Step 3: Run

```powershell
npm run dev
```

Open **http://localhost:3000**

### Step 4: Test forms locally

```powershell
npm run build
npx @azure/static-web-apps-cli start ./out --api-location ./api
```

Set Resend env vars in your shell or `.env` when testing forms.

---

## 6. Environment Variables

### Azure Portal (production — required for forms)

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key |
| `RESEND_FROM_EMAIL` | Sender address |
| `NOTIFICATION_EMAIL` | Where form submissions are sent |
| `NEXT_PUBLIC_SITE_URL` | Production URL |
| `NEXT_PUBLIC_SITE_NAME` | `ProVizient` |
| `NEXT_PUBLIC_GA_ID` | (optional) Google Analytics |

### No database variables needed

There is no `DATABASE_URL`, `AUTH_SECRET`, or admin configuration.

---

## 7. Updating Content

### Blog posts

Edit `src/data/blog.ts`:

```typescript
{
  slug: "my-new-post",
  title: "My New Post",
  excerpt: "Short summary...",
  content: "<p>HTML content...</p>",
  author: "ProVizient Team",
  tags: ["AI Strategy"],
  createdAt: "2026-06-16",
}
```

### Services & case studies

Edit `src/lib/constants.ts`

### Testimonials

Edit `src/components/home/testimonials.tsx`

After changes: `npm run build` → commit → push to `main`

---

## 8. Website Pages

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

---

## 9. Azure Deployment

### Create Static Web App

1. Azure Portal → **Static Web App** → **Create**
2. Connect GitHub repo `logeshOfficial/provizient`, branch `main`
3. Build settings:
   - App location: `/`
   - Api location: `api`
   - Output location: `out`
4. Add environment variables (Section 6)
5. Push to `main` — auto-deploys

See `AZURE-DEPLOY.md` for full details.

---

## 10. NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Build static site to `out/` |
| `npm run start` | Preview `out/` locally |
| `npm run lint` | ESLint |

---

## 11. Quick Start Checklist

- [ ] Node.js 20+ installed  
- [ ] `cd D:\provizient` && `npm install`  
- [ ] `npm run dev` — site opens at localhost:3000  
- [ ] Azure Static Web App created  
- [ ] Resend API key configured in Azure  
- [ ] Code pushed to `main` — deployment succeeded  
- [ ] Contact form tested on production URL  

---

## 12. Troubleshooting

| Issue | Solution |
|-------|----------|
| Forms don't work locally | Use `swa start ./out --api-location ./api` |
| No email received | Check `RESEND_API_KEY` and Resend domain verification |
| 404 on blog post | Add slug to `generateStaticParams` via `BLOG_POSTS` in `blog.ts` |
| Build fails | Run `npm run build` locally to see errors |

---

## 13. Support

**GitHub:** https://github.com/logeshOfficial/provizient  
**Site email:** contact@provizient.com  

---

*Document version 3.0 — Static site, no database, Azure Static Web Apps + email forms.*
