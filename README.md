# ProVizient — Enterprise AI Consulting Website

Premium enterprise AI consulting website built with Next.js 15 App Router, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, Prisma, PostgreSQL, Resend, and Cloudinary.

**Tagline:** Transforming Businesses Through Intelligent AI Solutions.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (Radix UI)
- **Animations:** Framer Motion
- **Database:** PostgreSQL + Prisma ORM
- **Auth:** NextAuth.js v5
- **Email:** Resend
- **Media:** Cloudinary
- **Analytics:** Google Analytics

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Resend API key (optional for email)
- Cloudinary account (optional for image uploads)

### Installation

```bash
# Clone and install
cd provizient
npm install

# Configure environment
cp .env.example .env
# Edit .env with your credentials

# Set up database
npm run db:setup

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Default Admin Credentials

After running `npm run db:seed`:

- **URL:** `/admin/login`
- **Email:** `admin@provizient.com`
- **Password:** `change-this-password` (or value from `ADMIN_PASSWORD` in `.env`)

## Project Structure

```
src/
├── app/
│   ├── (marketing)/     # Public pages (Home, About, Services, etc.)
│   ├── admin/           # Admin dashboard
│   └── api/             # API routes (contact, consultation, admin)
├── components/
│   ├── home/            # Homepage sections
│   ├── layout/          # Header, Footer
│   ├── forms/           # Contact & consultation forms
│   ├── shared/          # Reusable components
│   └── ui/              # shadcn/ui components
├── lib/                 # Utilities, auth, email, prisma, seo
└── types/               # TypeScript declarations
prisma/
├── schema.prisma        # Database schema
└── seed.ts              # Seed data
```

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
| Admin Dashboard | `/admin` |

## Admin Dashboard

- **Authentication** — Credential-based login
- **Blog Management** — Create, edit, delete posts
- **Testimonials** — Manage client testimonials
- **Contact Inquiries** — View and resolve inquiries
- **Consultations** — Manage consultation requests

## Environment Variables

See `.env.example` for all required variables:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `AUTH_SECRET` | NextAuth secret (generate with `openssl rand -base64 32`) |
| `RESEND_API_KEY` | Resend email API key |
| `CLOUDINARY_*` | Cloudinary credentials |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID |
| `NEXT_PUBLIC_SITE_URL` | Production site URL |

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables from `.env.example`
4. Set up PostgreSQL (Vercel Postgres, Neon, or Supabase)
5. Deploy

Post-deploy:

```bash
npx prisma db push
npx tsx prisma/seed.ts
```

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

Enable `output: 'standalone'` in `next.config.ts` for Docker deployments.

### Other Platforms

Works on Railway, Render, AWS, Azure, and GCP. Ensure:

- PostgreSQL is accessible
- All env vars are configured
- Run `prisma db push` after first deploy

## Features

- SEO optimization with Metadata API
- Automatic sitemap generation (`/sitemap.xml`)
- Robots.txt configuration
- Google Analytics integration
- Contact & consultation forms with email notifications
- Loading skeletons and error boundaries
- WCAG accessibility support
- Fully responsive dark theme with glassmorphism
- Framer Motion animations

## Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:seed      # Seed database
npm run db:setup     # Push + seed
```

## License

Proprietary — ProVizient. All rights reserved.
