"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/** Hero entrance settings — adjust timing here. */
const HERO = {
  y: 24, // px each step rises from
  duration: 0.9, // seconds per element
  ease: "power2.out", // calm ease-out
  overlap: 0.45, // seconds each step overlaps the previous one
  titleStagger: 0.1, // eyebrow → name → sub-name
  ctaStagger: 0.15, // "Call us" → "Facebook page"
  /**
   * Slow-connection guard (ms since navigation start). If the page's JS
   * arrives later than this, the CSS failsafe in globals.css has already
   * revealed the text, so we skip the animation instead of replaying it.
   * The same value drives the CSS failsafe delay (see --hero-failsafe-delay).
   */
  skipAfterMs: 2500,
};

/**
 * Plays a one-time entrance timeline on page load for children tagged with
 * data-hero-step="title" | "tagline" | "cta" (in that order).
 */
export default function HeroEntrance({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = scope.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (performance.now() > HERO.skipAfterMs) return;

        const step = (name: string) => el.querySelectorAll(`[data-hero-step="${name}"]`);
        const hidden = { opacity: 0, y: HERO.y };
        const shown = { opacity: 1, y: 0 };

        gsap
          .timeline({ defaults: { duration: HERO.duration, ease: HERO.ease } })
          .fromTo(step("title"), hidden, { ...shown, stagger: HERO.titleStagger })
          .fromTo(step("tagline"), hidden, shown, `-=${HERO.overlap}`)
          .fromTo(step("cta"), hidden, { ...shown, stagger: HERO.ctaStagger }, `-=${HERO.overlap}`);
      });

      // Hand control from the CSS pre-hide (globals.css) to GSAP. fromTo()
      // has already applied the hidden state inline, so there's no flash.
      el.dataset.heroReady = "";

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <div
      ref={scope}
      data-hero-entrance=""
      className={className}
      style={{ "--hero-failsafe-delay": `${HERO.skipAfterMs}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
