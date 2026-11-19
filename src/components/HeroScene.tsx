/**
 * Illustrated lakeside sunset with coconut palms — pure SVG, no image download.
 * Shown in the hero until a real photo is set in content.ts (hero.image).
 */

// Bumpy distant tree line along the horizon (computed once at build time).
const treeLine = (() => {
  let d = "M0 662 L0 654";
  for (let x = 0; x < 1440; x += 48) {
    const h = 10 + ((x * 37) % 23);
    d += ` Q${x + 24} ${654 - h} ${x + 48} 654`;
  }
  return `${d} L1440 662 Z`;
})();

const reflections = [
  { w: 150, y: 676 },
  { w: 110, y: 694 },
  { w: 170, y: 714 },
  { w: 80, y: 736 },
  { w: 130, y: 760 },
  { w: 60, y: 788 },
];

export default function HeroScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1F2E25" />
          <stop offset="0.3" stopColor="#3E4A3A" />
          <stop offset="0.55" stopColor="#9C6638" />
          <stop offset="0.7" stopColor="#E09A4E" />
          <stop offset="0.75" stopColor="#F4C27C" />
        </linearGradient>
        <radialGradient id="glow">
          <stop offset="0" stopColor="#FFE3AE" stopOpacity="0.85" />
          <stop offset="1" stopColor="#FFE3AE" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B87A43" />
          <stop offset="0.35" stopColor="#5A4C35" />
          <stop offset="1" stopColor="#16231B" />
        </linearGradient>
        <symbol id="palm" viewBox="0 0 220 420">
          <path d="M92 420C98 320 122 210 112 95h8c12 115-10 225-16 325z" />
          <path d="M116 92C80 70 40 80 8 122c37-25 72-28 108-24z" />
          <path d="M116 92c34-27 74-17 96 23-30-23-60-25-96-17z" />
          <path d="M116 92C95 50 60 30 28 35c37 10 64 30 86 61z" />
          <path d="M116 92c19-47 54-62 81-52-30 8-57 25-79 56z" />
          <path d="M116 94c-31 6-56 36-66 81 22-40 45-63 68-75z" />
          <path d="M116 94c34 11 54 41 59 81-17-37-37-60-61-75z" />
          <path d="M116 92c-4-37 2-67 19-87-7 30-11 55-15 89z" />
          <circle cx="110" cy="102" r="6" />
          <circle cx="121" cy="104" r="6" />
          <circle cx="115" cy="111" r="6" />
        </symbol>
      </defs>

      {/* sky + sun */}
      <rect width="1440" height="662" fill="url(#sky)" />
      <circle cx="720" cy="600" r="300" fill="url(#glow)" />
      <circle cx="720" cy="618" r="66" fill="#FFE2A8" />

      {/* far shore + lake */}
      <path d={treeLine} fill="#2C3A2C" />
      <rect y="660" width="1440" height="240" fill="url(#lake)" />
      <g fill="#FFE2A8">
        {reflections.map((r, i) => (
          <rect
            key={r.y}
            x={720 - r.w / 2}
            y={r.y}
            width={r.w}
            height="4"
            rx="2"
            opacity={0.75 - i * 0.1}
          />
        ))}
      </g>

      {/* foreground banks and palms */}
      <g fill="#16231B">
        <path d="M0 900V770q200-40 420 20 120 35 170 110z" />
        <path d="M1440 900V750q-200-30-380 40-100 40-140 110z" />
        <use href="#palm" x="-60" y="190" width="330" height="630" />
        <use href="#palm" x="170" y="390" width="200" height="380" />
        <use href="#palm" x="455" y="590" width="150" height="290" />
        <g transform="translate(1440 0) scale(-1 1)">
          <use href="#palm" x="-40" y="230" width="300" height="580" />
          <use href="#palm" x="210" y="430" width="170" height="330" />
          <use href="#palm" x="480" y="620" width="130" height="250" />
        </g>
      </g>
    </svg>
  );
}
