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

There are no build steps, linters, tests, or compilation. Changes to HTML/CSS/JS take effect immediately on reload.

## Architecture

**Single-page app with anchor-based sections.** All content lives in `index.html` with sections: hero, stats, about, services, programs, why-us, how-it-works, testimonials, pricing, FAQ, contact, footer.

### CSS (`css/`)
- `styles.css` — Design system via CSS custom properties (`:root` variables for colors, typography, spacing, shadows, z-index, container). All component styles. Responsive breakpoints: 1024px, 768px, 480px.
- `animations.css` — Scroll reveal animations using `[data-animate]` attribute system (fade-up/down/left/right, scale-up, zoom-in, flip) with `[data-delay]` stagger support. Respects `prefers-reduced-motion`.

### JS (`js/`)
- `main.js` — Core UI: navbar scroll effect, mobile menu, smooth scroll, animated counters (`[data-count]`), testimonial carousel, pricing currency toggle (CAD/TRY), FAQ accordion, contact form (currently simulated submission).
- `animations.js` — IntersectionObserver-based scroll animations and parallax. Exports utility functions via `window.KonceptMastersAnimations`.
- `language.js` — Bilingual EN/HI system using `[data-lang]` attributes on HTML elements. Translation keys in a `translations` object. Persists to `localStorage` key `konceptmasters-lang`. Supports `?lang=` URL param. Exports via `window.KonceptMastersLang`.

### Key Patterns
- **Data attributes drive behavior:** `data-animate`, `data-delay`, `data-lang`, `data-count`, `data-price`, `data-currency` — follow these conventions when adding interactive elements.
- **No framework dependencies.** Vanilla JS with `DOMContentLoaded` initialization. Each feature initializes independently in `main.js`.
- **Images:** Use `object-fit: contain` (not `cover`) to show the full tutor photo without cropping. Use `height: auto` with `max-height` for flexible sizing.

## SEO & Structured Data

The site has extensive SEO meta tags, Schema.org JSON-LD (Organization, LocalBusiness, EducationalOrganization, FAQPage, Service), Open Graph, Twitter cards, hreflang tags, and `robots.txt`/`sitemap.xml`. The canonical domain is `konceptmasters.ca` (not `.com`).

## Cloudflare Pages Deployment Notes

- Custom domain requires the domain to be added to the Cloudflare account first.
- Error 1014 "CNAME Cross-User Banned" means the domain isn't registered in the Pages project. Fix: delete manual CNAME, then add custom domain through Pages UI (it creates DNS automatically).
