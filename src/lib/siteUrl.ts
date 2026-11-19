/**
 * Absolute site URL, used for Open Graph / canonical / sitemap.
 * Priority: NEXT_PUBLIC_SITE_URL (set this once you have a custom domain)
 *        → Vercel's production URL (automatic on Vercel)
 *        → localhost for local dev.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
