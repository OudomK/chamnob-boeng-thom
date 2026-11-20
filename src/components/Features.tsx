import { features, t, type Lang } from "@/content";
import AnimatedSection from "./AnimatedSection";
import Icon from "./Icons";

export default function Features({ lang }: { lang: Lang }) {
  return (
    // Slightly wider stagger so the 3 cards visibly arrive one after another.
    <AnimatedSection
      stagger={0.2}
      aria-label={lang === "km" ? "ចំណុចពិសេស" : "Highlights"}
      className="bg-sand px-5 py-16 sm:py-20"
    >
      <ul className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {features.map((f) => (
          <li
            key={f.icon}
            className="reveal-item rounded-3xl border border-sand-dark bg-cream p-7 transition-shadow hover:shadow-lg hover:shadow-forest/10"
          >
            <span className="grid size-14 place-items-center rounded-2xl bg-forest text-ember">
              <Icon name={f.icon} className="size-7" />
            </span>
            <h3 className="mt-5 font-serif text-xl font-bold text-forest">{t(f.title, lang)}</h3>
            <p className="mt-2 text-muted">{t(f.body, lang)}</p>
          </li>
        ))}
      </ul>
    </AnimatedSection>
  );
}
