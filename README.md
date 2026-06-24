# DSTF — Don't Spoil The Future

> Browse freely. Stay spoiler-free.

DSTF is an intelligent spoiler protection web app that automatically detects and redacts spoilers for the shows, movies, games and events you care about.

---

## Setup & Run Instructions (CMD / PowerShell / Terminal)

### Prerequisites

Install these first if you haven't already:

- **Node.js** (v18 or later) — https://nodejs.org  
  To check: `node -v`
- **npm** (comes with Node.js)  
  To check: `npm -v`

---

### Step-by-Step Setup

**1. Clone or download the repository**

```bash
git clone <your-repo-url>
cd BMU
```

**2. Navigate into the app folder**

```bash
cd dstf
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open your browser**

The terminal will show something like:
```
  VITE ready in 300ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open **http://localhost:5173** in your browser.

---

### Build for Production

To create an optimised production build:

```bash
npm run build
```

The output goes into `dstf/dist/`. To preview the production build locally:

```bash
npm run preview
```

Then open **http://localhost:4173** in your browser.

---

## Pages

| Page | Description |
|------|-------------|
| **Home** | Hero banner, featured protected titles, trending content, how it works |
| **Browse** | Search & filter all titles, toggle protection on/off |
| **My Protection** | Dashboard showing your protected vs unprotected titles, stats |
| **Pricing** | Subscription plans (Free, Movies & TV £4.99/yr, Games Add-On +£2.99/yr) |

---

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Lucide React** icons
- No backend — all state is in-memory (prototype)

---

## Branding

| Colour | Hex | Use |
|--------|-----|-----|
| Alert Red | `#e63c2f` | Warning & Protection |
| Burnt Orange | `#e87722` | Energy & Focus |
| Deep Black | `#0a0a0a` | Stealth & Privacy |
| White | `#ffffff` | Clarity & Readability |

---

## Project Structure

```
dstf/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation bar
│   │   ├── ContentCard.jsx     # Movie/show card with protect toggle
│   │   └── Footer.jsx          # Site footer
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing / home page
│   │   ├── BrowsePage.jsx      # Browse & search
│   │   ├── MyProtectionPage.jsx# User's protection dashboard
│   │   └── PricingPage.jsx     # Subscription plans
│   ├── data/
│   │   └── mockData.js         # Sample content data
│   ├── App.jsx                 # Root component + routing state
│   └── index.css               # Global styles + Tailwind import
├── index.html
├── vite.config.js
└── package.json
```

---

*DSTF — File No. 042025. No spoilers. No exceptions.*
