// Demodog — quadruped creature with petal-flower head
const Demodog = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 120 60"
    className={className}
    style={{ transform: flip ? "scaleX(-1)" : undefined }}
  >
    <defs>
      <radialGradient id="dd-body" cx="50%" cy="50%">
        <stop offset="0%" stopColor="hsl(0 50% 12%)" />
        <stop offset="100%" stopColor="hsl(0 30% 5%)" />
      </radialGradient>
    </defs>
    <g fill="url(#dd-body)" stroke="hsl(0 60% 18%)" strokeWidth="0.8">
      {/* tail */}
      <path d="M 5 35 Q 15 30 25 38" fill="none" strokeWidth="2.5" />
      {/* body */}
      <ellipse cx="55" cy="35" rx="32" ry="12" />
      {/* legs */}
      <path d="M 35 45 L 32 58 M 45 47 L 43 58 M 70 47 L 72 58 M 80 45 L 83 58" stroke="hsl(0 50% 10%)" strokeWidth="2.5" />
      {/* neck + head base */}
      <ellipse cx="92" cy="30" rx="10" ry="9" />
      {/* petal flower head (open) */}
      <g transform="translate(100,28)">
        <path d="M 0 0 L 12 -8 L 8 0 Z" />
        <path d="M 0 0 L 14 0 L 8 4 Z" />
        <path d="M 0 0 L 12 8 L 8 4 Z" />
        <path d="M 0 0 L 4 -10 L 6 -2 Z" />
        <path d="M 0 0 L 4 10 L 6 2 Z" />
        {/* inner mouth */}
        <circle r="2.5" fill="hsl(0 90% 35%)" stroke="none" />
      </g>
      {/* spine ridges */}
      <path d="M 30 25 L 35 22 L 45 24 L 55 22 L 65 24 L 75 22 L 82 24" fill="none" stroke="hsl(0 70% 20%)" strokeWidth="1" />
    </g>
  </svg>
);

export default Demodog;
