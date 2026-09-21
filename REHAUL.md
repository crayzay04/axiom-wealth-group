# Axiom Wealth Group Website Rehaul

Brief for Claude Code. Read this whole file before touching anything. Work through the sections in order. Commit after each section with a message that names the section.

## Hard constraints

1. Do not modify `components/AxiomLogo.tsx`, `public/logo.png`, `public/logo-mark.png`, `public/logo-mark.svg`, `app/icon.svg`, or `app/favicon.ico`. The logo was built by hand. Use it as-is. You may change the size or placement of the rendered logo, never its paths or colors.
2. Do not invent facts about the firm. No founding year, no client counts, no years of experience, no retention rates, no career history, no client quotes, no credentials, no license numbers. Where the site needs a fact the client has not supplied, write `[[CONFIRM: what is needed]]` inline so it can be grepped and filled in later. Every `[[CONFIRM]]` must also appear in the checklist at the bottom of this file.
3. Use the four staff photos already in `public/team/` (`jason.jpg`, `nikki.jpg`, `luis.jpg`, `lyle.jpg`). Do not add stock photography from Unsplash or anywhere else. Remove every Unsplash reference and the `images.remotePatterns` entry in `next.config.ts`.
4. No em dashes anywhere in site copy. Use commas, periods, or colons.
5. The firm is a FINRA member (confirmed). Keep that claim and add the required BrokerCheck references described below.

## Section 1: Compliance removals (do this first)

These items expose the client to regulatory risk. Remove them completely, then rebuild the affected sections per the later sections of this brief.

- Delete the entire testimonial marquee on the home page, `MARQUEE_TESTIMONIALS`, `TestimonialMarqueeCard`, `components/ui/3d-testimonials.tsx`, `components/ui/avatar.tsx`, `components/ui/card.tsx`, and the `@radix-ui/react-avatar` dependency. Do not replace testimonials with placeholders. If the client later supplies real, written client consent and quotes, they get added as a separate task with the required disclosures.
- Delete the `STATS` array and the stat bar. Delete `components/StatCounter.tsx`.
- Rewrite the "Our Story" section on `/about`. Remove "founded in 1998", "first decade of his career at a major Wall Street firm", "serves more than 500 families", and any sentence that asserts history or scale. Use the replacement copy in Section 3.
- Remove the five-star rating pattern anywhere it appears.
- Add FINRA BrokerCheck references. FINRA Rule 2210(d)(8) requires a readily apparent reference and hyperlink to BrokerCheck on the firm's initial web page and on any page that includes a professional profile of a registered person. Implement as: a "Check the background of this firm and its professionals on FINRA's BrokerCheck" line with a link to `https://brokercheck.finra.org/` in the footer (renders on every page including home), and a per-person BrokerCheck link on every team card and on the founder section of `/about`. Per-person links use `[[CONFIRM: BrokerCheck URL or CRD number for NAME]]` until supplied.
- Footer disclosure text: minimum 13px, `text-muted` at full opacity (not 50%), max-width 72ch, left-aligned. Replace the current paragraph with:

  > Axiom Wealth Group is a member of FINRA. `[[CONFIRM: member SIPC? If yes, add "and SIPC".]]` `[[CONFIRM: Is Axiom Wealth Group itself the registered broker-dealer, or a DBA offering securities through another broker-dealer? If the latter, add "Securities offered through NAME, member FINRA/SIPC."]]` Information on this website is for general educational purposes and does not constitute individualized investment, tax, or legal advice, nor an offer or solicitation to buy or sell any security or product. Insurance products are offered through `[[CONFIRM: licensed entity name and state license numbers, if required]]`. Please consult a qualified professional regarding your specific situation.

- Create `app/disclosures/page.tsx` at `/disclosures` with sections: BrokerCheck, Form CRS (link to `[[CONFIRM: Form CRS PDF]]`, Form CRS applies to broker-dealers serving retail customers), Privacy Policy (`[[CONFIRM: privacy policy text]]`), Business Continuity (`[[CONFIRM]]`), and General Disclaimer (reuse the footer text). Point every footer legal link here. Remove the "ADV Part 2" link entirely; it is an RIA document. If the client confirms dual registration as an RIA, it comes back as a separate task.
- Soften absolutes in the values copy. "We act in your best interest, always" becomes "We put your interests first in every recommendation." "The only interests that matter" is removed.

## Section 2: Design system

Replace the current dark-navy-plus-gold template look with a warmer, quieter two-metal system that derives from the logo. The logo's gold is `#CFB16B` and its silver is `#9AA0AA`. The site currently uses a different gold (`#C9A84C`) and ignores the silver entirely. Fix both.

### Tokens (`app/globals.css`)

```
--color-background: #0C0B0A;      /* warm near-black, replaces #0D0D0D */
--color-surface: #141311;         /* section alternate, replaces navy #111827 */
--color-card: #1A1816;            /* card fill, replaces navy #1A1F2E */
--color-foreground: #F1EDE4;      /* warm off-white */
--color-muted: #A9A6A0;           /* body-secondary; passes AA on all three backgrounds */
--color-gold: #CFB16B;            /* matches the logo exactly */
--color-gold-deep: #A98D4A;       /* hover and pressed states only */
--color-silver: #9AA0AA;          /* rules, eyebrow labels, icons, secondary accents */
--color-line: rgba(154,160,170,0.18);  /* default borders, silver not gold */
--color-line-gold: rgba(207,177,107,0.35); /* borders on the single primary element per section */
```

Delete `--color-bg-secondary`, `--color-border-gold`, `--color-gold-light`, `--color-gold-dark`, `.gold-shimmer`, `.gold-gradient-text`, `.animate-float`, the marquee keyframes, and the custom scrollbar styles.

### Rules

- Gold is for one thing per screen: the primary CTA, or a single heading accent. Everything else that used to be gold (borders, icons, dividers, labels, breadcrumbs, hover underlines) becomes silver or line.
- Primary button: solid `--color-gold` fill, `--color-background` text, no gradient, no glow, no scale. Hover: `--color-gold-deep`. Focus: 2px silver ring with 2px offset.
- Secondary button: 1px silver border, foreground text, hover fills `--color-surface`.
- Cards: `--color-card` fill, 1px `--color-line` border, 12px radius. Hover: border shifts to `--color-line-gold`. No lift, no glow, no icon scaling.
- Section rhythm: alternate `background` and `surface`. Padding `py-24 md:py-32`. Section headings left-aligned, not centered, with a silver eyebrow label above (12px, uppercase, `tracking-[0.18em]`) and a short 40px silver rule beneath. Keep `max-w-6xl` containers.

### Typography

- Keep Cormorant Garamond for headings, weights 400 and 600 only. Drop 300, 500, 700 to shrink the font payload.
- Replace Inter with Source Sans 3 (via `next/font/google`) for body and UI. It is slightly warmer and pairs better with a Garamond.
- Scale: h1 `text-5xl md:text-6xl lg:text-7xl` weight 400 with `leading-[1.05]`; h2 `text-3xl md:text-4xl` weight 600; h3 `text-xl md:text-2xl` weight 600; body `text-base md:text-[17px] leading-[1.7]`; small `text-sm`; nothing below 13px anywhere on the site.
- Body paragraphs use `--color-foreground` at full opacity. `--color-muted` is only for captions, labels, metadata, and the footer.
- Remove every inline `style={{ letterSpacing: "0.15em" }}`; use Tailwind tracking utilities.

### Motion

- Wrap the app in framer's `MotionConfig` with `reducedMotion="user"`.
- Allowed motion: a single fade-up (`y: 16 → 0`, 0.5s, ease-out, once) on section entry via `SectionWrapper`. That is the only scroll-triggered animation.
- Remove the shimmer, the WebGL shader (`components/ui/shader-lines.tsx` and its cdnjs script injection), the floating random squares in `HeroSection`, the bouncing chevron, all `whileHover` lifts and glows, and the staggered per-card delays.
- Navbar background transition on scroll may stay.

### Imagery

- Hero background: no shader. Use a large, low-opacity (6 to 8%) render of `<AxiomLogo />` positioned off the right edge as a watermark, plus a soft radial gradient of `--color-gold` at 4% opacity centered top. Nothing else.
- Sub-page heroes: same treatment at smaller scale, no watermark, just the gradient.
- The "Why Axiom" image slots on the home page and the "Our Story" image on `/about` currently hold stock photos. Replace with `jason.jpg` on the founder section, and replace the second home image with a typographic block (a large Cormorant pull line in foreground on a `surface` card, for example the tagline "Clarity in Every Decision.").
- Team photos: render in a 4:5 portrait crop with `object-cover object-top`, 12px radius, 1px `--color-line` border. Confirm each of the four files crops acceptably at 4:5; if a face gets cut, fall back to 1:1 for that card only.

## Section 3: Copy

Rewrite copy to the following. Where a line contains `[[CONFIRM]]`, keep the marker in the rendered page so it is visible in review.

### Home

Hero eyebrow: `Bakersfield, California`
Hero h1: `Clarity in Every Decision.`
Hero subhead: `Financial planning, cash flow strategy, and protection for families and business owners who want one team that sees the whole picture.`
Primary CTA: `Schedule a Consultation` (links to the booking section on `/contact`)
Secondary CTA: `Meet the Team` (links to `/team`)

Section "Who we serve" (replaces the stat bar). Three cards, silver icons:
- `Families` : `Households building toward retirement, education, and the transfer of what they have built.`
- `Business owners` : `Owners who need their business and personal finances to work as one plan.`
- `Pre-retirees` : `People within ten years of retirement who want a clear income picture before they step away.`

Section "What we do": keep the three featured services (Wealth Management, Retirement Planning, Cash Flow Management) with a "View all services" link.

Section "How we work" (replaces "Why Axiom"). Left: `jason.jpg`. Right:
h2: `One team. One plan.`
Body: `Most people have pieces of a financial plan spread across an advisor, an insurance agent, a CPA, and an attorney who have never spoken to each other. We start by listening, then build a single strategy that covers cash flow, growth, protection, and legacy, and we coordinate with the other professionals in your life so the pieces fit.`
Second block:
h3: `Fees and reasoning, in plain language.`
Body: `You will know what a recommendation costs and why we are making it before you decide. If a strategy cannot be explained simply, it is not the right strategy.`

Section "Our process": move `PROCESS_STEPS` here from the services page, rendered as a four-step horizontal timeline on desktop and a vertical list on mobile.

CTA banner:
h2: `Start with a conversation.`
Body: `A first meeting costs nothing and carries no obligation. In person in Bakersfield, or virtual.`
Button: `Schedule a Consultation`

### About

Hero: `About Axiom` / `Independent guidance for the people who trust us with their plans.` `[[CONFIRM: is "independent" accurate given the broker-dealer relationship?]]`

Founder section, with `jason.jpg` and a BrokerCheck link:
h2: `Built by Jason Doss-Carter.`
Body: `Jason founded Axiom Wealth Group in Bakersfield to give families and business owners the kind of coordinated planning that is usually reserved for institutions. [[CONFIRM: one or two sentences of Jason's actual background, credentials, and why he started the firm.]] Today the firm serves clients across California with a team that works together on every plan.` `[[CONFIRM: "across California" or a narrower geography]]`

Values: keep Integrity, Clarity, Legacy, Partnership with the softened copy from Section 1.

Credentials: a single row: `Member FINRA` badge linking to BrokerCheck, `[[CONFIRM: SIPC]]`, `[[CONFIRM: any designations held by staff, e.g. CFP, ChFC, CLU]]`.

### Services

Group the seven services under three pillars with an h2 per pillar and an intro sentence:
- `Plan` : Wealth Management, Retirement Planning, Cash Flow Management. Intro: `Where your money is, where it is going, and what it needs to do.`
- `Protect` : Insurance Solutions, Estate Planning. Intro: `Keeping what you have built intact for the people who depend on it.`
- `Optimize` : Tax Planning, Business Financial Planning. Intro: `Making the plan more efficient every year it runs.`

Service cards show the four offerings by default (no `expanded` prop needed). Remove the per-card "Get in Touch" button; one CTA banner at the bottom of the page is enough. Remove "Our Process" from this page (it moves to home).

### Team

Hero: `Meet Your Team` / `The people who will know your plan by name.`
Keep the pyramid layout (founder featured, three below). Each card: photo, name, title, a two-sentence bio marked `[[CONFIRM: bio for NAME]]`, and a `BrokerCheck` text link. Keep the existing titles. Add an optional `credentials: string[]` field to each `TEAM` entry, rendered as silver text under the title, empty until confirmed.

### Contact

Hero: `Contact` / `Tell us what you are working toward. We will take it from there.`
Add a "Book a time" block above the form with the Calendly inline embed. Read the URL from `NEXT_PUBLIC_CALENDLY_URL`; if the env var is unset, render a `[[CONFIRM: Calendly or booking link]]` placeholder card in its place. Keep the form, map, and contact details.

### Footer

Four columns: brand (logo, tagline, address, phone, email), Company, Services (each link to `/services#plan`, `/services#protect`, `/services#optimize`, add matching ids), Legal (`/disclosures`, `/disclosures#form-crs`, `/disclosures#privacy`). BrokerCheck line and disclosure paragraph below the columns per Section 1.

## Section 4: Engineering

- Convert every `app/**/page.tsx` to a server component. Keep client behavior in leaf components (`Navbar`, `SectionWrapper`, the contact form, the Calendly embed). Move page `metadata` exports into the pages themselves and delete the per-route `layout.tsx` files that exist only to hold metadata.
- Fix the hydration bug: remove the `Math.random()` calls in `HeroSection` along with the floating squares.
- Replace hero and breadcrumb `<a>` tags with `next/link`.
- Navbar: remove the `useEffect` that closes the menu on pathname change (the `onClick` handlers already do it). Add `aria-expanded` and `aria-controls` to the toggle. Lock body scroll while the overlay is open. Move focus to the close button on open and back to the toggle on close. Close on Escape.
- Contact form: replace Formspree with a route handler at `app/api/contact/route.ts` that sends via Resend. Env vars `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`. Keep the honeypot and the client-side validation. Add server-side validation and a simple per-IP rate limit (in-memory is fine for this traffic). Return JSON `{ ok: true }` on success. Add `.env.example`.
- Add JSON-LD `FinancialService` structured data in the root layout with name, url, telephone, address, and `areaServed`.
- Add an Open Graph image: a static `app/opengraph-image.tsx` rendering the logo mark, "Axiom Wealth Group", and the tagline on the background color.
- Dependencies: remove `@paper-design/shaders-react`, `@radix-ui/react-avatar`, and `sharp`. Add `resend`. Rename the package to `axiom-wealth-group`.
- Delete `vercel.json` (Vercel auto-detects Next.js). Add `.claude/settings.local.json` to `.gitignore` and remove it from the repo with `git rm --cached`.
- Add `/disclosures` to `app/sitemap.ts`.
- Run `npx eslint .` and `npx tsc --noEmit` and fix everything until both are clean. Run `npm run build` and confirm it succeeds.
- Update `README.md`: correct the route table, remove the Calendly comment-uncomment instructions, document the env vars, and add the `[[CONFIRM]]` workflow (`grep -rn "CONFIRM" app components lib`).

## Section 5: Done criteria

- `grep -rn "unsplash" .` returns nothing outside `node_modules`.
- `grep -rn "500\|1998\|98%\|Wall Street\|Retired Executive" app components lib` returns nothing.
- `grep -rn "—" app components lib` returns nothing.
- `grep -rn "text-\[10px\]\|text-\[11px\]" app components` returns nothing.
- Every page renders a BrokerCheck link in the footer; `/team` and `/about` render per-person links.
- Lint, typecheck, and build all pass.
- Logo files are byte-identical to the originals (`git diff --stat` shows no changes under `components/AxiomLogo.tsx`, `public/logo*`, `app/icon.svg`, `app/favicon.ico`).

## Client confirmation checklist

Everything marked `[[CONFIRM]]` in the site, collected for Jason:

1. Is Axiom Wealth Group itself the FINRA-registered broker-dealer, or a DBA offering securities through another broker-dealer? If the latter, the broker-dealer's name.
2. SIPC membership: yes or no.
3. Insurance licensing entity and any state license numbers that must appear on the site.
4. Form CRS PDF.
5. Privacy policy text and business continuity summary.
6. BrokerCheck URLs or CRD numbers for Jason, Nikki, Luis, and Lyle.
7. Full names for Nikki, Luis, and Lyle.
8. Two-sentence bios and any designations for each of the four team members.
9. Jason's actual background: prior firms, years licensed, and why he started Axiom.
10. Whether "independent" and "across California" are accurate descriptions.
11. Calendly or other booking link.
12. Whether the firm is also registered as an investment adviser (if yes, ADV Part 2 and fiduciary language come back in a follow-up).
