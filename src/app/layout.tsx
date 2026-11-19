import type { Metadata, Viewport } from "next";
import { Noto_Sans_Khmer, Noto_Serif_Khmer } from "next/font/google";
import { business } from "@/content";
import { siteUrl } from "@/lib/siteUrl";
import "./globals.css";

const sans = Noto_Sans_Khmer({
  subsets: ["khmer", "latin"],
  variable: "--font-khmer-sans",
  display: "swap",
});

const serif = Noto_Serif_Khmer({
  subsets: ["khmer", "latin"],
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
    <html lang="km" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
