"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "./Icons";

type Props = {
  brand: string;
  links: { href: string; label: string }[];
  switchHref: string;
  switchLabel: string;
  switchAria: string;
  callLabel: string;
  tel: string;
  openLabel: string;
  closeLabel: string;
};

/**
 * Sticky header: transparent over the hero, solid cream after scrolling.
 * Receives already-translated strings so content.ts isn't shipped to the client.
 */
export default function Header(p: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-cream/95 text-forest shadow-sm backdrop-blur" : "bg-transparent text-cream"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-serif text-xl font-bold">
          {/* Decorative (alt="") — the brand name is right next to it as text. */}
          <Image
            src="/images/logo.png"
            alt=""
            width={44}
            height={44}
            loading="eager"
            className="size-11 shrink-0 rounded-full"
          />
          {p.brand}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {p.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-[15px] font-medium transition-colors hover:bg-ember/15"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href={p.switchHref}
            aria-label={p.switchAria}
            className="rounded-full border border-current/30 px-3 py-1 text-sm font-semibold transition-colors hover:bg-ember/15"
          >
            {p.switchLabel}
          </Link>
          <a
            href={p.tel}
            className="hidden items-center gap-1.5 rounded-full bg-ember px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-ember-dark sm:flex"
          >
            <Icon name="phone" className="size-4" />
            {p.callLabel}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? p.closeLabel : p.openLabel}
            className="grid size-10 place-items-center rounded-full hover:bg-ember/15 md:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="size-6" />
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-nav" className="border-t border-forest/10 px-4 pb-4 md:hidden">
          {p.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-lg font-medium hover:bg-sand"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
