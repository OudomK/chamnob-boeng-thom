import Image from "next/image";
import { gallery, t, type GalleryItem, type Lang } from "@/content";
import Icon from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Gallery({ lang }: { lang: Lang }) {
  const items: GalleryItem[] = gallery.items;
  // On the 2-column phone grid, stretch the last tile if it would be left alone.
  const lastIsOrphan = (items.length - 1) % 2 === 1;

  return (
    <section id="gallery" className="bg-sand px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t(gallery.eyebrow, lang)} title={t(gallery.title, lang)} />

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {items.map((item, i) => (
            <li
              key={i}
              // First tile is featured: spans 2 columns & rows on larger screens.
              className={`relative overflow-hidden rounded-2xl ${
                i === 0
                  ? "col-span-2 aspect-4/3 md:row-span-2 md:aspect-auto"
                  : lastIsOrphan && i === items.length - 1
                    ? "col-span-2 aspect-2/1 md:col-span-1 md:aspect-square"
                    : "aspect-square"
              }`}
            >
              {item.src ? (
                <>
                  <Image
                    src={item.src}
                    alt={t(item.alt, lang)}
                    fill
                    sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent p-3 pt-8 text-sm font-medium text-cream">
                    {t(item.alt, lang)}
                  </span>
                </>
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 border-2 border-dashed border-sand-dark bg-linear-to-br from-cream to-sand-dark/60 p-4 text-center">
                  <span className="grid size-12 place-items-center rounded-full bg-forest/10 text-forest/60">
                    <Icon name="image" className="size-6" />
                  </span>
                  <span className="font-medium text-forest">{t(item.alt, lang)}</span>
                  <span className="text-xs text-muted">{gallery.placeholderLabel}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
