# Axiom Wealth Group Website

Marketing website for Axiom Wealth Group, built with Next.js 16 (App Router), Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router, server components by default)
- **Styling:** Tailwind CSS v4, tokens in `app/globals.css`
- **Motion:** Framer Motion, one fade-up per section, respects reduced motion
- **Icons:** Lucide React
- **Fonts:** Cormorant Garamond (headings) and Source Sans 3 (body) via `next/font`
- **Email:** Resend, through the route handler at `app/api/contact/route.ts`

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Route              | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| `/`                | Home: hero, who we serve, services, how we work, process, CTA      |
| `/about`           | Founder, values, credentials                                       |
| `/services`        | Seven services grouped under Plan, Protect, Optimize               |
| `/team`            | Team profiles with BrokerCheck links                               |
| `/contact`         | Booking embed, contact details, map, contact form                  |
| `/disclosures`     | BrokerCheck, Form CRS, privacy, business continuity, disclaimer    |
| `/api/contact`     | POST handler that validates and emails contact form submissions    |
| `/opengraph-image` | Generated Open Graph image                                         |

## Environment Variables

| Variable                   | Required | Purpose                                                                 |
| -------------------------- | -------- | ----------------------------------------------------------------------- |
| `RESEND_API_KEY`           | Yes      | Resend API key used to send contact form emails                         |
| `CONTACT_TO_EMAIL`         | Yes      | Inbox that receives submissions                                         |
| `CONTACT_FROM_EMAIL`       | Yes      | Sender address on a domain verified in Resend                           |
| `NEXT_PUBLIC_CALENDLY_URL` | No       | Booking link for the inline embed on `/contact`; a placeholder card renders when unset |

Set these in `.env.local` for development and in the Vercel project settings for Preview and Production. Until the three email variables are set, the contact form returns a "not configured" error instead of sending.

The contact endpoint validates input on the server, keeps a honeypot field, and rate limits each IP to 5 submissions per 10 minutes (in memory, per function instance).

## The `[[CONFIRM]]` Workflow

The site never states a fact the client has not supplied. Anything unknown is written inline as `[[CONFIRM: what is needed]]` and renders visibly on the page so it is obvious in review.

To list everything still open:

```bash
grep -rn "CONFIRM" app components lib
```

To resolve one: replace the marker with the confirmed fact (most live in `lib/constants.ts`, the rest in the page files), then re-run the grep. The full list of open questions for the client is the checklist at the bottom of `REHAUL.md`. The site is not ready to launch until the grep returns only the helper code in `components/ConfirmText.tsx` and `components/BrokerCheckLink.tsx`.

Per-person BrokerCheck links: set `brokerCheckUrl` on the `TEAM` entry in `lib/constants.ts`. Until then the link points at the BrokerCheck home page and a marker renders next to it.

## Compliance Notes

- The footer on every page carries the FINRA BrokerCheck reference required by FINRA Rule 2210(d)(8), and every professional profile carries a per-person BrokerCheck link.
- Do not add testimonials, statistics, ratings, or firm history without written confirmation from the client and the required disclosures.
- Do not modify the logo files (`components/AxiomLogo.tsx`, `public/logo*`, `app/icon.svg`, `app/favicon.ico`).

## Checks

```bash
npx eslint .
npx tsc --noEmit
npm run build
```

## License

Private. Axiom Wealth Group.
