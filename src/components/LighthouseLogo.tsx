type Props = { className?: string; size?: number; animated?: boolean };

export function LighthouseLogo({ className, size = 40, animated = true }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lightwarp lighthouse"
    >
      <defs>
        <linearGradient id="lh-tower" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.75 0.22 18)" />
          <stop offset="100%" stopColor="oklch(0.45 0.22 18)" />
        </linearGradient>
        <linearGradient id="lh-beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.65 0.24 18)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.6 0.22 260)" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="lh-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="oklch(1 0.05 60)" />
          <stop offset="60%" stopColor="oklch(0.65 0.24 18)" />
          <stop offset="100%" stopColor="oklch(0.6 0.22 260)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Beams */}
      <g className={animated ? "animate-flicker" : ""} style={{ transformOrigin: "32px 22px" }}>
        <path d="M32 22 L62 8 L62 36 Z" fill="url(#lh-beam)" opacity="0.6" />
        <path d="M32 22 L2 8 L2 36 Z" fill="url(#lh-beam)" opacity="0.6" transform="scale(-1,1) translate(-64,0)" />
      </g>

      {/* Tower body */}
      <path d="M24 28 L26 58 L38 58 L40 28 Z" fill="url(#lh-tower)" />
      {/* Stripes */}
      <rect x="25" y="34" width="14" height="4" fill="oklch(0.98 0.005 0)" />
      <rect x="25" y="44" width="14" height="4" fill="oklch(0.98 0.005 0)" />

      {/* Lamp room */}
      <rect x="22" y="20" width="20" height="10" rx="1.5" fill="oklch(0.2 0.04 350)" stroke="oklch(0.65 0.24 18)" strokeWidth="1" />
      {/* Light bulb */}
      <circle cx="32" cy="25" r="5" fill="url(#lh-glow)" className={animated ? "animate-flicker" : ""} />
      {/* Roof */}
      <path d="M22 20 L32 10 L42 20 Z" fill="oklch(0.6 0.22 260)" />
      <circle cx="32" cy="8" r="1.2" fill="oklch(0.65 0.24 18)" />

      {/* Base */}
      <rect x="22" y="58" width="20" height="3" rx="1" fill="oklch(0.3 0.02 350)" />
    </svg>
  );
}
