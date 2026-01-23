# DAAT Website

Modern, premium B2B website for DAAT - Business Automation & Finance Ops Tech.

## Features

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **TailwindCSS** + **shadcn/ui** for UI components
- **TR/EN i18n** support with dictionary-based translations
- **MDX** blog support
- **SEO optimized** with metadata, sitemap, robots.txt, and JSON-LD schemas
- **Contact form** with API route
- **Responsive design** with premium styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
UNSPLASH_ACCESS_KEY=your_unsplash_key_here
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
DAAT/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Locale-based routing (tr/en)
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Header, Footer
│   ├── sections/         # Page sections
│   └── forms/            # Form components
├── content/              # Content files
│   ├── posts/           # MDX blog posts
│   └── translations/    # i18n dictionaries
├── lib/                 # Utilities
│   ├── i18n.ts         # i18n functions
│   ├── mdx.ts          # MDX processing
│   └── utils.ts        # General utilities
└── public/              # Static assets
    └── images/         # Images
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

- `NEXT_PUBLIC_SITE_URL` - Your site URL (for SEO and sitemap)
- `UNSPLASH_ACCESS_KEY` - Unsplash API key (optional, for images)

## Pages

- `/` or `/tr` - Home (Turkish)
- `/en` - Home (English)
- `/services` - Services page
- `/case-studies` - Case studies list
- `/case-studies/[slug]` - Case study detail
- `/insights` - Blog/insights list
- `/insights/[slug]` - Blog post detail
- `/about` - About page
- `/contact` - Contact form
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## Styling

The project uses:
- **TailwindCSS** for utility-first styling
- **shadcn/ui** components with custom styling
- **Gold accent colors** (#D4AF37, #F4D03F)
- **Rounded-2xl** borders for premium look
- **Soft shadows** for depth

## i18n

Translations are stored in `content/translations/`:
- `tr.json` - Turkish translations
- `en.json` - English translations

Use `getTranslations(locale)` to access translations in components.

## Contact Form

The contact form sends data to `/api/contact` route. Currently logs to console. To enable email sending, update `app/api/contact/route.ts` with your email service.

## Deployment

The site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any Node.js hosting

Make sure to set environment variables in your hosting platform.

## License

Private - All rights reserved.
