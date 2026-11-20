import type { Metadata, Viewport } from "next";
import { Noto_Sans_Khmer, Noto_Serif_Khmer } from "next/font/google";
import localFont from "next/font/local";
import { business } from "@/content";
import { siteUrl } from "@/lib/siteUrl";
import "./globals.css";

/**
 * Khmer script → Kantumruy Pro. Self-hosted Khmer-only subset (variable,
 * weights 100–700) with an explicit unicode-range, so the browser only uses
 * it for Khmer characters. (next/font/google always emits @font-face rules
 * for every subset — `subsets` only controls preloading — so a Google-loaded
 * Kantumruy Pro would also take over Latin text.)
 */
const khmer = localFont({
  src: "./fonts/KantumruyPro-Khmer-Variable.woff2",
  weight: "100 700",
  style: "normal",
  variable: "--font-khmer",
  display: "swap",
  declarations: [{ prop: "unicode-range", value: "U+1780-17FF, U+19E0-19FF, U+200C-200D, U+25CC" }],
});

/** Latin text keeps its existing Noto look (Khmer chars are caught by Kantumruy first). */
const sans = Noto_Sans_Khmer({
  subsets: ["latin"],
  variable: "--font-khmer-sans",
  display: "swap",
});

const serif = Noto_Serif_Khmer({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-khmer-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${business.name.km} | ${business.name.en} — ${business.tagline.km}`,
  description: business.seoDescription.km,
  alternates: {
    canonical: "/",
    languages: { km: "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    siteName: `${business.name.km} ${business.name.en}`,
    title: `${business.name.km} — ${business.tagline.km}`,
    description: business.seoDescription.km,
    url: "/",
    locale: "km_KH",
    alternateLocale: ["en_US"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#2F4538",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km" className={`${khmer.variable} ${sans.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
