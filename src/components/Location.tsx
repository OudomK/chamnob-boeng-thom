import { business, contact, mapLinks, t, ui, type Lang, type Text } from "@/content";
import AnimatedSection from "./AnimatedSection";
import Icon from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Location({ lang }: { lang: Lang }) {
  const rows: { icon: string; label: Text; content: React.ReactNode }[] = [
    {
      icon: "pin",
      label: contact.labels.address,
      content: <p className="font-medium">{t(business.location.address, lang)}</p>,
    },
    {
      icon: "phone",
      label: contact.labels.phone,
      content: (
        <ul className="space-y-1">
          {business.phones.map((p) => (
            <li key={p.tel} className="flex flex-wrap items-baseline gap-x-2">
              <a href={p.tel} className="text-lg font-semibold underline-offset-4 hover:underline">
                {p.display}
              </a>
              <span className="text-xs text-sand/60">{t(p.label, lang)}</span>
            </li>
          ))}
        </ul>
      ),
    },
    { icon: "clock", label: contact.labels.hours, content: <p className="font-medium">{t(business.hours, lang)}</p> },
    {
      icon: "utensils",
      label: contact.labels.services,
      content: <p className="font-medium">{t(business.services, lang)}</p>,
    },
  ];

  return (
    <AnimatedSection id="contact" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t(contact.eyebrow, lang)} title={t(contact.title, lang)} />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="reveal-item rounded-3xl bg-forest p-6 text-cream sm:p-8">
            <ul className="space-y-5">
              {rows.map((r) => (
                <li key={r.icon} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ember/90 text-white">
                    <Icon name={r.icon} className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm text-sand/70">{t(r.label, lang)}</p>
                    {r.content}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a
                href={mapLinks.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-10 items-center justify-center gap-2 rounded-full bg-ember px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ember-dark"
              >
                <Icon name="pin" className="size-4" />
                {t(ui.openInMaps, lang)}
              </a>
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-10 items-center justify-center gap-2 rounded-full border border-cream/70 px-4 py-2 text-sm font-medium transition-colors hover:bg-cream hover:text-forest"
              >
                <Icon name="facebook" className="size-4" />
                Facebook
              </a>
            </div>
          </div>

          <div className="reveal-item overflow-hidden rounded-3xl border border-sand-dark bg-sand">
            <iframe
              src={mapLinks.embed}
              title={t(contact.mapTitle, lang)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-80 w-full sm:h-full sm:min-h-[420px]"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
