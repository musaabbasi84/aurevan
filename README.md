# AUREVAN
React + Vite + Tailwind. Run: `npm install && npm run dev` (site :5173, API :8787). Build: `npm run build`.
Production: `npm run build && NODE_ENV=production INQUIRY_WEBHOOK_URL=<your CRM/email webhook> node server/index.js`. Without the webhook, production returns 503 and the form shows a failure (nothing is faked). In dev, enquiries are saved to `inquiries.dev.jsonl` (git-ignored).
Data: `src/data/properties.js` is SAMPLE data; swap for an API/CMS. Imagery: `Art.jsx` is a placeholder; pass real licensed photos via `src` and set contact info in `src/config.js`.
Before launch: replace `YOUR-DOMAIN` in `public/robots.txt`, add `public/sitemap.xml`, and write real privacy/terms text.

## Photography (important)
No photographs are bundled: the build environment had no access to Unsplash/Pexels, and licences must be checked per image. Put licensed files in `src/assets/photos/` named by slot (jpg/webp, ~2000px wide hero, ~1400px others, compressed). Slots: `hero`, `arch-main`, `arch-detail`, and per property `<slug>-1` to `<slug>-5` (e.g. `courtyard-house-dha-2-1.jpg`; image 1 is the card/hero image). Missing slots fall back to the drawn placeholder, so nothing breaks. Keep a record of each photo's source and licence, and label stock images as illustrative, never as the actual listing.
