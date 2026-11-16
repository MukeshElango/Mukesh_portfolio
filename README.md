# Mukesh Elango — Portfolio

React + Tailwind CSS + Framer Motion.

## Stack
- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** lucide-react

## Design
- Headings and navigation: **Space Grotesk** — Body: **Inter** — Hero highlights: **Barlow Condensed** — Mono accents: **IBM Plex Mono**
- Glassmorphism throughout (`.glass` / `.glass-strong` utilities in `src/index.css`)
- Ambient drifting ember-colored glow orbs behind the glass panels (`src/components/AmbientField.jsx`) — the signature motion element
- Scroll-reveal on every section, magnetic-hover buttons, orchestrated hero load sequence

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, GitHub Pages, etc.

## Edit content

All copy lives directly in the component files under `src/components/` —
`Hero.jsx`, `About.jsx`, `Skills.jsx`, `Projects.jsx`, `Experience.jsx`,
`Education.jsx`, `Contact.jsx`. Swap the photo by replacing
`src/assets/mukesh.jpg`.

## Update links

- LinkedIn / GitHub / email are set in `Hero.jsx` and `Contact.jsx`.
- Resume download uses `public/Mukesh_Elango_Resume_.pdf`.
