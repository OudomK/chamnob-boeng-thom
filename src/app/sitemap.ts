import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, alternates: { languages: { km: siteUrl, en: `${siteUrl}/en` } } },
    { url: `${siteUrl}/en` },
  ];
}
