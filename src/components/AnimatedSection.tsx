"use client";

import { useRef, type ComponentPropsWithoutRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Scroll-reveal settings shared by every AnimatedSection.
 * Tweak these to change the feel of the whole site in one place.
 */
const REVEAL = {
  y: 40, // px each item rises from
  duration: 0.8, // seconds per item
  ease: "power2.out", // calm ease-out (no bounce/overshoot)
  start: "top 85%", // fire when an item's top edge reaches 85% down the viewport
};

type Props = ComponentPropsWithoutRef<"section"> & {
  /** Seconds between items that come into view together (e.g. a row of cards). */
  stagger?: number;
};

/**
 * Drop-in replacement for <section> that gently fades up every descendant
 * marked with className="reveal-item" the first time it scrolls into view.
 *
 * - Each item triggers on its own, so long lists (menu, gallery) reveal as
 *   you reach them; items entering at the same moment are staggered.
 * - Plays once only (no replay when scrolling back up).
 * - Only opacity/transform are animated → no layout shift.
 * - Skipped entirely when the OS "reduce motion" setting is on, and content
 *   stays fully visible if JavaScript never loads (nothing is hidden by CSS).
 */
export default function AnimatedSection({ stagger = 0.15, children, ...rest }: Props) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray<HTMLElement>(".reveal-item", scope.current);
        if (!items.length) return;

        // Start hidden & slightly lowered. (opacity only, not visibility, so
        // keyboard users can still tab to links inside not-yet-revealed items.)
        gsap.set(items, { opacity: 0, y: REVEAL.y });

        ScrollTrigger.batch(items, {
          start: REVEAL.start,
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: REVEAL.duration,
              ease: REVEAL.ease,
              stagger,
              overwrite: true,
              clearProps: "transform", // drop the leftover inline transform when done
            }),
        });
      });

      return () => mm.revert();
    },
    { scope, dependencies: [stagger] },
  );

  return (
    <section ref={scope} {...rest}>
      {children}
    </section>
  );
}
