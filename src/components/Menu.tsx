import { menu, t, type Lang, type MenuCategory } from "@/content";
import Icon from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Menu({ lang }: { lang: Lang }) {
  const other: Lang = lang === "km" ? "en" : "km";
  const categories: MenuCategory[] = menu.categories;

  return (
    <section id="menu" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t(menu.eyebrow, lang)} title={t(menu.title, lang)} />

        {/* Quick category jump links — horizontally scrollable on phones */}
        <nav className="-mx-5 mb-8 overflow-x-auto px-5">
          <ul className="flex w-max gap-2 sm:mx-auto">
            {categories.map((c) => (
              <li key={c.id}>
                <a
                  href={`#menu-${c.id}`}
                  className="flex items-center gap-2 rounded-full border border-sand-dark bg-cream px-4 py-2 text-sm font-medium text-forest transition-colors hover:border-ember hover:bg-ember/10"
                >
                  <Icon name={c.icon} className="size-4 text-ember-dark" />
                  {t(c.title, lang)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mx-auto mb-10 max-w-2xl rounded-2xl border border-dashed border-ember/60 bg-ember/5 px-4 py-3 text-center text-sm text-ember-dark">
          {t(menu.note, lang)}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((c) => (
            <article
              key={c.id}
              id={`menu-${c.id}`}
              className="rounded-3xl border border-sand-dark bg-white/60 p-6 sm:p-8"
            >
              <h3 className="flex items-center gap-3 font-serif text-2xl font-bold text-forest">
                <span className="grid size-10 place-items-center rounded-full bg-sand text-ember-dark">
                  <Icon name={c.icon} className="size-5" />
                </span>
                {t(c.title, lang)}
              </h3>
              <ul className="mt-5 divide-y divide-dashed divide-sand-dark">
                {c.items.map((item) => (
                  <li key={item.name.en} className="flex items-baseline justify-between gap-4 py-3">
                    <div className="min-w-0">
                      <p className="font-medium text-ink">{t(item.name, lang)}</p>
                      <p className="text-sm text-muted">{t(item.name, other)}</p>
                    </div>
                    {item.price ? (
                      <span className="shrink-0 font-semibold text-ember-dark">{item.price}</span>
                    ) : (
                      <span className="shrink-0 rounded-md bg-sand px-2 py-0.5 text-xs text-muted">
                        {menu.pricePlaceholder}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
