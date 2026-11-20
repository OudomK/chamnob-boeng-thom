"use client";

import { useId, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/** Animation settings — adjust the "wind" here. */
const MOTION = {
  leafAngle: 6, // degrees each frond sways either side
  leafDuration: [2, 2.5], // random seconds per sway, so fronds drift out of sync
  cloudDrift: 25, // px each cloud drifts left/right
  cloudDuration: 9, // seconds per drift
  glowDuration: 3, // seconds per sunset-glow pulse
};

// Brand tokens (same values as globals.css @theme)
const FOREST = "#2F4538";
const EMBER = "#D98A3D";
const CREAM = "#FAF7F0";

// Where the fronds attach (top of the trunk), in viewBox units.
const CROWN = { x: 195, y: 150 };

/**
 * Fronds: `a` = direction in degrees (0 = right, -90 = straight up),
 * `s` = length scale. Left-facing fronds are mirrored so they still droop down.
 */
const FRONDS = [
  { a: 20, s: 1 },
  { a: -30, s: 0.95 },
  { a: -78, s: 0.8 },
  { a: -118, s: 0.9 },
  { a: -165, s: 1 },
  { a: 155, s: 0.9 },
];

// One stylised frond pointing right from (0,0), drooping at the tip.
const FROND_PATH = "M0 0C40-26 104-22 150 28 128 14 112 12 98 14 70 4 36 2 0 7Z";

/**
 * Decorative coconut palm with swaying fronds, drifting clouds and a
 * pulsing sunset glow. Pure inline SVG (~2 KB), no image downloads.
 * Motion is skipped entirely when the OS "reduce motion" setting is on.
 */
export default function CoconutIllustration({ className }: { className?: string }) {
  const scope = useRef<SVGSVGElement>(null);
  // Unique gradient ids so this never clashes with other SVGs on the page.
  const id = useId().replace(/:/g, "");
  const glowId = `glow-${id}`;
  const trunkId = `trunk-${id}`;

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Fronds: each sways around the crown (not its own bbox, which for a
      // drooping frond would be near the tip) with its own random timing.
      gsap.utils.toArray<SVGGElement>(".leaf").forEach((leaf) => {
        gsap.fromTo(
          leaf,
          { rotation: -MOTION.leafAngle, svgOrigin: `${CROWN.x} ${CROWN.y}` },
          {
            rotation: MOTION.leafAngle,
            svgOrigin: `${CROWN.x} ${CROWN.y}`,
            duration: gsap.utils.random(MOTION.leafDuration[0], MOTION.leafDuration[1]),
            delay: gsap.utils.random(0, 1.5),
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          },
        );
      });

      gsap.fromTo(
        ".cloud",
        { x: -MOTION.cloudDrift },
        {
          x: MOTION.cloudDrift,
          duration: MOTION.cloudDuration,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: { each: 2.5, from: "end" },
        },
      );

      gsap.to(".sun-glow", {
        opacity: 1,
        scale: 1.08,
        transformOrigin: "50% 50%",
        duration: MOTION.glowDuration,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope },
  );

  return (
    <svg
      ref={scope}
      viewBox="0 0 400 500"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={glowId}>
          <stop offset="0" stopColor={EMBER} stopOpacity="0.7" />
          <stop offset="0.55" stopColor={EMBER} stopOpacity="0.25" />
          <stop offset="1" stopColor={EMBER} stopOpacity="0" />
        </radialGradient>
        {/* trunk fades out at the bottom so it doesn't end abruptly mid-hero */}
        <linearGradient id={trunkId} gradientUnits="userSpaceOnUse" x1="0" y1="150" x2="0" y2="490">
          <stop offset="0.55" stopColor={FOREST} />
          <stop offset="1" stopColor={FOREST} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* sunset glow behind the crown */}
      <circle className="sun-glow" cx={CROWN.x + 15} cy={CROWN.y + 10} r="175" fill={`url(#${glowId})`} opacity="0.75" />

      {/* clouds */}
      <g fill={CREAM} opacity="0.85">
        <g className="cloud">
          <ellipse cx="88" cy="92" rx="40" ry="15" />
          <ellipse cx="70" cy="84" rx="22" ry="14" />
          <ellipse cx="104" cy="80" rx="24" ry="18" />
        </g>
        <g className="cloud">
          <ellipse cx="322" cy="56" rx="32" ry="12" />
          <ellipse cx="308" cy="50" rx="17" ry="11" />
          <ellipse cx="335" cy="46" rx="19" ry="14" />
        </g>
      </g>

      {/* trunk */}
      <path
        d={`M252 490C244 380 168 300 ${CROWN.x} ${CROWN.y}`}
        fill="none"
        stroke={`url(#${trunkId})`}
        strokeWidth="15"
        strokeLinecap="round"
      />

      {/* fronds — each in its own .leaf group so they sway independently */}
      <g fill={FOREST}>
        {FRONDS.map(({ a, s }) => (
          <g key={a} className="leaf">
            <path
              d={FROND_PATH}
              transform={`translate(${CROWN.x} ${CROWN.y}) rotate(${a}) scale(${s} ${Math.abs(a) > 90 ? -s : s})`}
            />
          </g>
        ))}
      </g>

      {/* coconuts */}
      <g fill={EMBER}>
        <circle cx={CROWN.x - 9} cy={CROWN.y + 14} r="9" />
        <circle cx={CROWN.x + 9} cy={CROWN.y + 16} r="9" />
        <circle cx={CROWN.x} cy={CROWN.y + 27} r="9" />
      </g>
    </svg>
  );
}
