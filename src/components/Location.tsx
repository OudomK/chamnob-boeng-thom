import { business, contact, mapLinks, t, ui, type Lang } from "@/content";
import Icon from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Location({ lang }: { lang: Lang }) {
  const rows = [
    { icon: "pin", label: contact.labels.address, value: t(business.location.address, lang) },
    {
      icon: "phone",
      label: contact.labels.phone,
      value: business.phone.display,
      href: business.phone.tel,
    },
    { icon: "clock", label: contact.labels.hours, value: t(business.hours, lang) },
    { icon: "utensils", label: contact.labels.services, value: t(business.services, lang) },
  ];

  return (
    <section id="contact" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t(contact.eyebrow, lang)} title={t(contact.title, lang)} />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="rounded-3xl bg-forest p-6 text-cream sm:p-8">
            <ul className="space-y-5">
              {rows.map((r) => (
                <li key={r.icon} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ember/90 text-white">
                    <Icon name={r.icon} className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm text-sand/70">{t(r.label, lang)}</p>
                    {r.href ? (
                      <a href={r.href} className="text-lg font-semibold underline-offset-4 hover:underline">
                        {r.value}
                      </a>
                    ) : (
                      <p className="font-medium">{r.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a
                href={mapLinks.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-ember px-5 py-3 font-semibold text-white transition-colors hover:bg-ember-dark"
              >
                <Icon name="pin" />
                {t(ui.openInMaps, lang)}
              </a>
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-cream/70 px-5 py-2.5 font-semibold transition-colors hover:bg-cream hover:text-forest"
              >
                <Icon name="facebook" />
                Facebook
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-sand-dark bg-sand">
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
    </section>
  );
}
