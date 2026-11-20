import { business, primaryPhone, mapLinks, t, ui, type Lang } from "@/content";
import { siteUrl } from "@/lib/siteUrl";
import About from "./About";
import Features from "./Features";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Hero from "./Hero";
import Icon from "./Icons";
import Location from "./Location";
import Menu from "./Menu";

/** The whole one-page site, rendered in the given language. */
export default function Site({ lang }: { lang: Lang }) {
  return (
    <div lang={lang}>
      <Header
        brand={t(business.name, lang)}
        links={ui.nav.map((n) => ({ href: `#${n.id}`, label: t(n.label, lang) }))}
        switchHref={lang === "km" ? "/en" : "/"}
        switchLabel={t(ui.switchLang, lang)}
        switchAria={t(ui.switchLangAria, lang)}
        callLabel={t(ui.call, lang)}
        tel={primaryPhone.tel}
        openLabel={t(ui.openMenu, lang)}
        closeLabel={t(ui.closeMenu, lang)}
      />

      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Features lang={lang} />
        <Menu lang={lang} />
        <Gallery lang={lang} />
        <Location lang={lang} />
      </main>

      <Footer lang={lang} />
      <MobileActionBar lang={lang} />
      <StructuredData lang={lang} />
    </div>
  );
}

/** Thumb-friendly Call / Directions bar, phones only. */
function MobileActionBar({ lang }: { lang: Lang }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-sand-dark bg-cream/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur sm:hidden">
      <a
        href={primaryPhone.tel}
        className="flex items-center justify-center gap-2 rounded-full bg-ember py-3 font-semibold text-white"
      >
        <Icon name="phone" />
        {t(ui.call, lang)}
      </a>
      <a
        href={mapLinks.google}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-forest py-3 font-semibold text-cream"
      >
        <Icon name="pin" />
        {t(ui.directions, lang)}
      </a>
    </div>
  );
}

/** schema.org Restaurant data — helps Google show hours/phone/map in search. */
function StructuredData({ lang }: { lang: Lang }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: `${business.name.km} (${business.name.en})`,
    description: t(business.seoDescription, lang),
    url: lang === "km" ? siteUrl : `${siteUrl}/en`,
    telephone: primaryPhone.international,
    servesCuisine: "Khmer",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Kampong Cham",
      addressCountry: "KH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.location.lat,
      longitude: business.location.lng,
    },
    hasMap: mapLinks.google,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [business.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
