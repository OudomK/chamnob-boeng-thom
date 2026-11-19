import Image from "next/image";
import { business, hero, t, ui, type Lang } from "@/content";
import HeroScene from "./HeroScene";
import Icon from "./Icons";

export default function Hero({ lang }: { lang: Lang }) {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[min(92svh,960px)] items-center overflow-hidden bg-forest-deep text-cream"
    >
      {hero.image ? (
        <Image
          src={hero.image}
          alt={t(hero.imageAlt, lang)}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
      ) : (
        <HeroScene className="absolute inset-0 -z-20 h-full w-full" />
      )}
      {/* darken the top for legible text */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/50 via-black/15 to-black/30" />

      <div className="mx-auto w-full max-w-4xl px-5 pt-24 pb-40 text-center sm:pb-48">
        <p className="inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-1 text-sm font-medium backdrop-blur-sm">
          <span className="size-2 rounded-full bg-ember" />
          {t(hero.eyebrow, lang)}
        </p>
        <h1 className="text-glow mt-5 font-serif text-5xl font-bold sm:text-7xl">
          {t(business.name, lang)}
        </h1>
        {lang === "en" ? (
          <p className="mt-1 font-serif text-xl text-sand/90">{business.name.km}</p>
        ) : (
          <p className="mt-1 text-lg tracking-wide text-sand/90">{business.name.en}</p>
        )}
        <p className="text-glow mx-auto mt-5 max-w-xl text-lg sm:text-2xl">
          {t(business.tagline, lang)}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={business.phone.tel}
            className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-ember px-7 py-3.5 text-lg font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-ember-dark sm:w-auto"
          >
            <Icon name="phone" />
            {t(ui.callUs, lang)}
          </a>
          <a
            href={business.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full border-2 border-cream/80 px-7 py-3 text-lg font-semibold transition-colors hover:bg-cream hover:text-forest sm:w-auto"
          >
            <Icon name="facebook" />
            {t(ui.facebookPage, lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
