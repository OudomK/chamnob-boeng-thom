import { business, footer, mapLinks, t, ui, type Lang } from "@/content";
import Icon from "./Icons";

export default function Footer({ lang }: { lang: Lang }) {
  const socials = [
    { href: business.facebook, icon: "facebook", label: "Facebook", external: true },
    { href: mapLinks.google, icon: "pin", label: "Google Maps", external: true },
    { href: business.phone.tel, icon: "phone", label: business.phone.display, external: false },
  ];

  return (
    // Extra bottom padding on phones so the fixed action bar doesn't cover content.
    <footer className="bg-forest-deep px-5 pt-14 pb-28 text-sand sm:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div>
          <p className="font-serif text-3xl font-bold text-cream">{t(business.name, lang)}</p>
          <p className="mt-1 text-sand/80">{t(business.tagline, lang)}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm">
          {ui.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-ember">
              {t(n.label, lang)}
            </a>
          ))}
        </nav>

        <ul className="flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <li key={s.icon}>
              <a
                href={s.href}
                {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 text-sm transition-colors hover:bg-ember hover:text-white"
              >
                <Icon name={s.icon} className="size-4" />
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-sand/60">
          © {new Date().getFullYear()} {business.name.km} · {business.name.en}. {t(footer.rights, lang)}.
        </p>
      </div>
    </footer>
  );
}
