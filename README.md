# ProVizient — Enterprise AI Consulting Website

Static marketing website for ProVizient, hosted on **Hostinger**. Contact and consultation forms send email via **PHP + Hostinger SMTP** — no database, no Azure dependency.

**Tagline:** Transforming Businesses Through Intelligent AI Solutions.

## Tech Stack

- **Framework:** Next.js 16 (static export)
- **Hosting:** Hostinger Web Hosting
- **Forms:** PHP backend + Hostinger SMTP
- **Styling:** Tailwind CSS v4, shadcn/ui, Framer Motion
- **Email:** Native Hostinger SMTP (info@provizient.com)

## Quick Start

```powershell
cd D:\provizient
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Hostinger

See **[HOSTINGER-SETUP-GUIDE.md](./docs/HOSTINGER-SETUP-GUIDE.md)** for complete production hosting setup.

### Email Setup for Contact Forms

📧 **Complete setup guides available:**

- **[Hostinger Setup Guide](./docs/HOSTINGER-SETUP-GUIDE.md)** — Full hosting & email setup
- **[Email Setup Guide](./docs/EMAIL-SETUP-GUIDE.md)** — SMTP configuration details  
- **[Quick Setup Checklist](./docs/EMAIL-SETUP-CHECKLIST.md)** — Step-by-step checklist

**Simple approach:** Use `info@provizient.com` for both sending and receiving emails via Hostinger SMTP.

## Share a POC demo (GitHub Pages — free)

See **[GITHUB-PAGES.md](./GITHUB-PAGES.md)** — live demo URL:

**https://logeshOfficial.github.io/provizient/**

Enable **Settings → Pages → Source: GitHub Actions**, then push to `main`.

Note: Forms won't work on GitHub Pages (static hosting only). Use Hostinger for full functionality.

## Updating Content

| Content | File |
|---------|------|
| Blog posts | `src/data/blog.ts` |
| Services, case studies | `src/lib/constants.ts` |
| Testimonials | `src/components/home/testimonials.tsx` |

Edit → `npm run build` → upload to Hostinger.

## Scripts

```powershell
npm run dev      # Development server
npm run build    # Static export to out/
npm run start    # Preview static site locally
npm run lint     # ESLint
```

## Project Structure

```
provizient/
├── api/                    # PHP backend (upload to Hostinger)
│   ├── contact.php        # Contact form endpoint
│   ├── consultation.php   # Consultation form endpoint
│   ├── PHPMailer/        # Email library
│   └── .env.php          # SMTP configuration (create on server)
├── src/                   # Next.js source files
├── out/                   # Built static site (npm run build)
└── docs/                  # Documentation
```

## License

Proprietary — ProVizient. All rights reserved.
