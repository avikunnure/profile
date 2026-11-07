# Enterprise Freelance Developer Portfolio

A responsive personal portfolio built with React, Vite, Tailwind CSS v4, Framer Motion, and Lucide icons. The visual direction is enterprise-focused: midnight navy, periwinkle accents, clean typography, and project case-study cards.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Customize before publishing

Search the project for these placeholders and replace them:

- `Avinash Kunnure` — your professional name or personal brand.
- `your-email@example.com` — your actual contact email. Update both the mailto links and `handleSubmit` in `src/App.jsx`.
- GitHub and LinkedIn links — replace the generic profile URLs with your own.
- Project descriptions — make sure they accurately describe what you have implemented.
- Project visuals — the dashboard artwork is illustrative mock UI created in React, not a live business system.

## Contact form

The contact form currently prepares an email using `mailto:`. It does not send data to a server. For production, connect a backend endpoint or trusted form provider, add validation and spam protection, and display success/failure states.

## Notes

- Project concepts are explicitly presented as self-initiated examples; don't imply they were delivered for real clients.
- Review accessibility, SEO metadata, and performance before deploying.
