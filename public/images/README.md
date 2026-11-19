# Photos

Put restaurant photos here, then reference them in `src/content.ts`:

```ts
// hero
image: "/images/hero.jpg",

// gallery
{ src: "/images/sunset-1.jpg", alt: { km: "ថ្ងៃលិចលើបឹង", en: "Sunset over the lake" } },
```

Tips for slow connections:
- Export JPGs around 1600–2000px wide, quality ~75–80. Next.js resizes and converts them to AVIF/WebP automatically.
- Landscape photos work best for the hero, and square-ish ones work best for the gallery.
