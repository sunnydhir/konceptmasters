# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static single-page tutoring website for KonceptMasters (konceptmasters.ca). No build system, bundler, or package manager — plain HTML/CSS/JS served directly.

**Hosting:** Cloudflare Pages (project: `damp-violet-e321`). Deploy by pushing to the connected repository or uploading directly via Cloudflare Pages dashboard.

## Development

Open `index.html` directly in a browser or use any local server:
```
python3 -m http.server 8000
```

Internal links use extensionless URLs (`/privacy`, `/terms`) because Cloudflare 307-redirects `*.html` to them. `python3 -m http.server` can't resolve those; use `npx wrangler dev` to test them locally.

There are no build steps, linters, tests, or compilation. Changes to HTML/CSS/JS take effect immediately on reload.

## Architecture

**Primary single-page app with anchor-based sections, plus standalone legal pages.**

- `index.html` — main page. Section IDs in order: `hero`, `stats`, `about`, `mission`, `services`, `get-ahead`, `programs`, `why`, `how`, `testimonials`, `pricing`, `faq`, `contact` (followed by footer). Note: the "why us" and "how it works" sections use CSS classes `why-choose` / `how-it-works` but IDs `why` / `how` — use the IDs for anchor links.
- `privacy.html`, `terms.html` — standalone legal pages, marked `noindex, follow`. They reuse `css/styles.css` plus an inline `<style>` block for `.policy-page` typography.

### CSS (`css/`)
- `styles.css` — Design system via CSS custom properties (`:root` variables for colors, typography, spacing, shadows, z-index, container). All component styles. Responsive breakpoints: 1024px, 768px, 480px. Color system is teal-primary (`--primary-900` through `--primary-50`) with gold/green/red/amber accents.
- `animations.css` — Scroll reveal animations using `[data-animate]` attribute system (fade-up/down/left/right, scale-up, zoom-in, flip) with `[data-delay]` stagger support. Respects `prefers-reduced-motion`.

### Typography
Self-hosted in `assets/fonts/` (woff2 variable fonts, latin + latin-ext subsets — together they cover Turkish ğ ş ı İ) with `@font-face` at the top of `css/styles.css`. **Do not re-add Google Fonts `<link>`s**: fonts.googleapis.com / fonts.gstatic.com are blocked in China and make the page hang there. Licences: `assets/fonts/OFL-*.txt`.
- `--font-primary`: **DM Sans** (body / UI)
- `--font-display`: **Playfair Display** (display headings)

### JS (`js/`)
- `main.js` — Core UI initialized on `DOMContentLoaded`: `initPageLoader` (hides `#pageLoader` on `window.load` with a 3s fallback), `initNavbar` (scroll class toggle), `initMobileMenu`, `initSmoothScroll`, `initCounters` (`[data-count]` + optional `[data-suffix]`), `initTestimonials` (auto-play carousel, responsive `cardsToShow`), `initPricing` (currency toggle CAD ↔ TRY using `[data-price]` / `[data-price-try]` / `[data-price-currency]`), `initFAQ`, `initContactForm` (**currently simulated submission only — no real backend wired**), `initFooterYear`.
- `animations.js` — IntersectionObserver-based scroll animations and parallax. Exports utility functions via `window.KonceptMastersAnimations`.
- `language.js` — Bilingual system using `[data-lang]` attributes. Translation keys live in a `translations` object with `en` and `hi` blocks. Persists selection to `localStorage` key `konceptmasters-lang`. Supports `?lang=` URL param (accepts `en` or `hi`). Exports via `window.KonceptMastersLang`.
  - **Work in progress:** the `hi` block contains English placeholder text, not real translations. `index.html` deliberately has no hreflang tags; add them only once a real second-language version exists.

### Assets (`assets/`)
- `images/tutor.png` — primary tutor photo (~144KB).
- `images/logo.svg` — KonceptMasters logo (vector).
- `images/og-image.jpg` (1200×630 social-share card), `images/logo.png` (512×512, used by Organization schema), `images/apple-touch-icon.png` (180×180, white background) — rendered from `logo.svg` + `tutor.png` with headless Chrome.
- `fonts/` — self-hosted DM Sans (upright + italic) and Playfair Display (upright) woff2 + OFL licences. Playfair italic is browser-synthesized (hero `.highlight`), matching the previous Google Fonts look.
- `icons/` — currently empty.

### Key Patterns
- **Data attributes drive behavior:** `data-animate`, `data-delay`, `data-lang`, `data-count`, `data-suffix`, `data-price`, `data-price-try`, `data-price-currency`, `data-currency` — follow these conventions when adding interactive elements.
- **No framework dependencies.** Vanilla JS with `DOMContentLoaded` initialization. Each feature initializes independently in `main.js` and is a no-op if its target DOM nodes are absent.
- **Images:** Use `object-fit: contain` (not `cover`) to show the full tutor photo without cropping. Use `height: auto` with `max-height` for flexible sizing.

## SEO & Structured Data

The site has extensive SEO meta tags, Schema.org JSON-LD (Organization, LocalBusiness, EducationalOrganization, FAQPage, Service), Open Graph, Twitter cards, and `robots.txt`/`sitemap.xml` (sitemap lists only the homepage — the legal pages are `noindex`). The canonical domain is `konceptmasters.ca` (not `.com`). Target markets: Canada, Turkey, China (+ India) — `areaServed` in the EducationalOrganization and Service schema lists all four. The site must load without any Google-hosted resource (China).

## Cloudflare Pages Deployment Notes

- Custom domain requires the domain to be added to the Cloudflare account first.
- Error 1014 "CNAME Cross-User Banned" means the domain isn't registered in the Pages project. Fix: delete manual CNAME, then add custom domain through Pages UI (it creates DNS automatically).
