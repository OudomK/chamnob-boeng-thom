import type { Metadata } from "next";
import Site from "@/components/Site";
import { business } from "@/content";

export const metadata: Metadata = {
  title: `${business.name.en} | ${business.name.km} — Lakeside Khmer Restaurant, Kampong Cham`,
  description: business.seoDescription.en,
  alternates: {
    canonical: "/en",
    languages: { km: "/", en: "/en" },
  },
  openGraph: {
    title: `${business.name.en} — ${business.tagline.en}`,
    description: business.seoDescription.en,
    url: "/en",
    locale: "en_US",
    alternateLocale: ["km_KH"],
  },
};

export default function HomeEn() {
  return <Site lang="en" />;
}
