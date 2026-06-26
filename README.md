# Zoho Corporation — Company Profile Website

A fully responsive, multi-page company profile site for Zoho Corporation,
built with React, React Router DOM, and plain CSS (no UI frameworks).

## Tech stack

- **React 19** — functional components + hooks only
- **React Router DOM v7** — client-side routing across 8 pages
- **Plain CSS** — design tokens in `src/styles/tokens.css`, no Tailwind
- **Vite** — build tooling

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── components/          # Reusable UI building blocks
│   ├── Navbar.jsx / .css
│   ├── Footer.jsx / .css
│   ├── Layout.jsx              # Wraps every route: Navbar + <Outlet/> + Footer + ScrollToTop
│   ├── PageHero.jsx / .css     # Dark banner header used on every sub-page
│   ├── Reveal.jsx              # Scroll-reveal animation wrapper
│   ├── StatCounter.jsx / .css  # Animated count-up stat
│   ├── ProductCard.jsx / .css  # Product card (Home + Products page)
│   ├── Timeline.jsx / .css     # Vertical milestone timeline (History page)
│   ├── CTASection.jsx / .css   # Reusable bottom-of-page call to action
│   └── ScrollToTopButton.jsx / .css
│
├── pages/                # One file (+ matching .css) per route
│   ├── Home.jsx / .css
│   ├── About.jsx / .css
│   ├── History.jsx / .css
│   ├── Products.jsx / .css
│   ├── WorkCulture.jsx / .css
│   ├── Achievements.jsx / .css
│   ├── Careers.jsx / .css
│   ├── Contact.jsx / .css
│   └── NotFound.jsx / .css
│
├── data/                 # Centralized content (single source of truth)
│   ├── products.js       # Product catalog used by Home + Products
│   └── companyData.js    # Stats, milestones, values, leadership, etc.
│
├── hooks/
│   ├── useScrollReveal.js              # IntersectionObserver-based reveal
│   ├── useScrollToTopOnRouteChange.js  # Resets scroll on navigation
│   └── useCountUp.js                   # Animated number counter
│
├── styles/
│   ├── tokens.css        # Color, type, spacing design tokens
│   └── global.css        # Reset, layout utilities, buttons, shared classes
│
├── App.jsx               # <Routes> definition
└── main.jsx               # Entry point, mounts <BrowserRouter>
```

## Routes

| Path            | Page                 |
|------------------|----------------------|
| `/`              | Home                 |
| `/about`         | About                |
| `/history`       | History              |
| `/products`      | Products & Services  |
| `/culture`       | Work Culture         |
| `/achievements`  | Achievements         |
| `/careers`       | Careers              |
| `/contact`       | Contact              |
| `*`              | 404 Not Found        |

## Design system

The visual identity is a "systems grid" look — engineering-led and
dashboard-flavored, reflecting Zoho's identity as a company that builds
business dashboards. Key tokens (see `src/styles/tokens.css`):

- **Colors:** deep navy ink (`--ink-900`), warm paper background
  (`--paper-50`), Zoho red accent (`--zoho-red`) used sparingly, plus
  signal green/amber for growth and award callouts.
- **Type:** Archivo (display/headings), Inter (body), IBM Plex Mono
  (data, eyebrows, stats) — loaded via Google Fonts in `index.html`.
- **Motion:** scroll-triggered reveals (`useScrollReveal` + `.reveal` /
  `.reveal-stagger` classes), animated stat counters, hover-lift on
  cards, animated underline on nav links — all respecting
  `prefers-reduced-motion`.

## Notes

- The Contact form is wired up with local state and a simulated submit
  (no backend). Swap the `handleSubmit` function in `Contact.jsx` for a
  real API call when connecting a backend.
- The embedded map on the Contact page uses a Google Maps iframe embed
  (no API key required for basic embeds).
- All company facts (stats, milestones, leadership, etc.) are illustrative
  placeholder content for design purposes — verify against Zoho's official
  sources before publishing.
