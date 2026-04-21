# Axiom Wealth Group — Website

A premium, multi-page marketing website for Axiom Wealth Group built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 with custom brand theme
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Cormorant Garamond + Inter (Google Fonts via `next/font`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route            | Description                        |
| ---------------- | ---------------------------------- |
| `/`              | Home — hero, stats, services, CTA  |
| `/about`         | Company story, values, credentials |
| `/services`      | Full service list + process        |
| `/team`          | Advisory team profiles             |
| `/testimonials`  | Client stories                     |
| `/portal`        | Client portal login (UI only)      |
| `/contact`       | Contact form + info                |

## Customization Checklist

### Calendly Integration
Placeholder `<div>` elements are left on the Home page and Contact page. To embed Calendly:
1. Get your Calendly embed script from [calendly.com](https://calendly.com)
2. Search for `calendly-placeholder` and `calendly-embed-contact` in the codebase
3. Uncomment and replace with your Calendly inline widget code

### Team Photos
Replace Unsplash URLs in `lib/constants.ts` → `TEAM` array with real team headshots.

### Email Integration (Contact Form)
The contact form currently logs to the server console via `/api/contact/route.ts`. To add email delivery:
1. Install a provider SDK (e.g., `npm install @sendgrid/mail`)
2. Update `app/api/contact/route.ts` to send email instead of logging
3. Add API keys to `.env.local`

### Client Portal
The `/portal` page is a UI shell only. Connect it to your custodian's portal or implement authentication as needed.

## Build

```bash
npm run build
npm start
```

## License

Private — Axiom Wealth Group.
