# ជំនោរបឹងធំ — Chamnob Boeng Thom

A one-page website for a lakeside Khmer restaurant in Kampong Cham. Built with Next.js (App Router), TypeScript and Tailwind CSS v4. Khmer is served at `/` and English at `/en`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks)
```

## Edit content

**All text, prices, links and photos live in [`src/content.ts`](src/content.ts).** Search that file for `PLACEHOLDER` to find what still needs real data:

- exact address (`business.location.address`)
- menu dishes and prices (`menu.categories[].items[].price`, e.g. `"15,000៛"`)
- gallery photos (`gallery.items[].src`) and optional hero photo (`hero.image`). See [`public/images/README.md`](public/images/README.md).

## Structure

```
src/
  content.ts            ← edit me
  lib/siteUrl.ts        absolute URL for SEO
  app/
    layout.tsx          fonts, default (Khmer) metadata
    page.tsx            Khmer page  (/)
    en/page.tsx         English page (/en)
    opengraph-image.tsx Facebook preview image (auto-generated)
    icon.svg            favicon
    sitemap.ts, robots.ts
  components/           one file per section; Header is the only client component
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. On https://vercel.com, choose **Add New → Project**, import the repo, and keep the defaults. Then click **Deploy**.
3. Optional: once you have a custom domain, set the env var `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` and redeploy. Without it, the site uses the Vercel production URL for Open Graph links.
4. After deploying, paste the URL into https://developers.facebook.com/tools/debug/ to refresh Facebook's link preview.
