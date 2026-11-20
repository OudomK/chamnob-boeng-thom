import { about, t, type Lang } from "@/content";
import AnimatedSection from "./AnimatedSection";
import Icon from "./Icons";

export default function About({ lang }: { lang: Lang }) {
  return (
    <AnimatedSection id="about" className="px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="reveal-item text-sm font-semibold tracking-wide text-ember-dark">{t(about.eyebrow, lang)}</p>
          <h2 className="reveal-item mt-2 font-serif text-3xl font-bold text-forest sm:text-4xl">
            {t(about.title, lang)}
          </h2>
          <div className="reveal-item mt-4 h-1 w-14 rounded-full bg-ember/70" />
          <div className="reveal-item mt-6 space-y-4 text-lg text-ink/90">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{t(p, lang)}</p>
            ))}
          </div>
        </div>

        <ul className="reveal-item grid gap-3 rounded-3xl bg-forest p-6 text-cream shadow-xl shadow-forest/20 sm:grid-cols-2 sm:p-8 lg:grid-cols-1">
          {about.facts.map((f) => (
            <li key={f.icon} className="flex items-center gap-4 rounded-2xl bg-cream/5 p-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ember/90 text-white">
                <Icon name={f.icon} className="size-5" />
              </span>
              <span className="font-medium">{t(f.label, lang)}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
