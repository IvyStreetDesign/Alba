# Alba Parkdale — Website Prototype

High-fidelity front-end prototype for the Alba Parkdale residential development by DM Property.

---

## Running locally

No install required. Serve the `Website/` folder from any static file server:

```bash
npx serve .
# → http://localhost:3000
```

Or open directly in a browser — most features work from `file://`, except video autoplay which requires a server.

> **Note for development:** The page uses Babel Standalone to compile JSX in the browser. Babel caches compiled output in `localStorage`, so after editing any `.jsx` or `.css` file you need a **hard reload** (`Cmd+Shift+R` / `Ctrl+Shift+R`) to bust the cache.

---

## File structure

```
Website/
├── index.html              # App shell, React root, global scroll/form logic
├── website.css             # All layout and component styles
├── colors_and_type.css     # Design tokens — colours, type scale, spacing, motion
│
├── Header.jsx              # Fixed nav bar (reveals on scroll past hero)
├── Hero.jsx                # Full-screen video hero (position: fixed, z-index 1)
├── BeigeSection.jsx        # Scrolling editorial section with sticky crossfade images
├── YellowSection.jsx       # Atmospheric statement section
├── Footer.jsx              # Credits grid + legal
├── RegisterForm.jsx        # Slide-in registration form + side tab trigger
│
├── fonts/                  # Moret (display) + Maison Neue (sans/mono)
└── assets/                 # Images, video, SVG logos
```

---

## Architecture notes

### No build step (prototype only)
This prototype uses **React 18 + Babel Standalone via CDN** — JSX is compiled in the browser at runtime. There is no `package.json`, bundler, or node_modules.

Each component file assigns itself to `window` (e.g. `window.Header = Header`) so `index.html` can reference it — the equivalent of ES module exports without a bundler. In production these would be standard `import`/`export` with Vite or Next.js.

### Curtain scroll pattern
The hero (`z-index: 1`) sits fixed behind the page. The beige section (`z-index: 2`) scrolls over the top of it like a curtain. This is achieved with `position: fixed` on the hero and a full-viewport spacer div (`alba-hero-spacer`) that takes up the scroll distance.

### Sticky crossfade images (BeigeSection)
The right column image stack uses `position: sticky`. The active image is determined by a scroll listener that checks which moment's centre has passed 92% of viewport height — giving the slow fade-in time to complete before the text is in reading position.

The `top` value for the sticky element is calculated once on load/resize (never on scroll) to avoid jitter. See the comment in `BeigeSection.jsx`.

### Register form
The form open/close state lives in `App` (index.html). Any element with `data-action="register"` anywhere in the page will open the form via a delegated click listener — no prop drilling required.

The form auto-closes when the user scrolls past the hero, and re-opens if they scroll back — unless they manually closed it first (tracked via `manuallyClosedRef`).

---

## What needs doing for production

| Item | Notes |
|---|---|
| **Form submission** | Currently a stub. Wire to Formspree, a serverless function, or your CRM. See `TODO` comment in `RegisterForm.jsx`. |
| **Favicon** | Add `favicon.ico` (or `.svg`) to `assets/`. The `<link rel="icon">` tag is already in `index.html`. |
| **Build pipeline** | Port to Vite + React, or Next.js if SSR/SEO is needed. Component structure maps 1-to-1. |
| **Analytics** | Add GA4 / GTM snippet to `index.html` `<head>`. |
| **Privacy policy** | `#privacy` href in the footer legal text needs a real destination. |
| **OG/social meta** | Add `og:image`, `og:title`, `twitter:card` tags to `<head>`. |
| **Font hosting** | Moret and Maison Neue are loaded from local `/fonts/`. Confirm licensing allows web use, or switch to a web font service. |

---

## Design tokens

All colours, type sizes, spacing and motion values are CSS custom properties in `colors_and_type.css`. Change them there and they cascade everywhere.

Key palette:
- `--alba-walnut` `#3d2a1f` — primary dark brown
- `--alba-beige` / `--alba-beige-light` `#efebe6` — page background
- `--alba-yellow` `#e3bd7b` — accent / atmospheric section
- `--alba-powder-blue` `#7b9fb5` — register form

Breakpoint: **980px** (single breakpoint, mobile-first styles in `@media (max-width: 980px)` block at the bottom of `website.css`).
