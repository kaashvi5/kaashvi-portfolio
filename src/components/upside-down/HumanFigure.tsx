// Generic dim human silhouette — used for Henry Creel and Will Byers presences
const HumanFigure = ({
  variant = "will",
  interactive = false,
}: {
  variant?: "henry" | "will";
  interactive?: boolean;
}) => {
  const tint = variant === "henry" ? "hsl(0 0% 8%)" : "hsl(220 30% 8%)";
  return (
    <svg
      viewBox="0 0 200 400"
      className={`h-full w-auto opacity-40 breathe ${
        interactive ? "transition-all duration-700 ease-out group-hover/human:opacity-90 group-hover/human:drop-shadow-[0_0_40px_hsl(var(--primary)/0.6)]" : ""
      }`}
      preserveAspectRatio="xMidYMax meet"
    >
      <defs>
        <radialGradient id={`hf-${variant}`} cx="50%" cy="20%">
          <stop offset="0%" stopColor={variant === "henry" ? "hsl(0 50% 25%)" : "hsl(220 50% 30%)"} stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(0 0% 0%)" stopOpacity="0" />
        </radialGradient>
        <filter id={`blur-${variant}`}><feGaussianBlur stdDeviation="1.5" /></filter>
      </defs>
      <ellipse cx="100" cy="200" rx="120" ry="200" fill={`url(#hf-${variant})`} />
      <g filter={`url(#blur-${variant})`} fill={tint} stroke="hsl(0 0% 15%)" strokeWidth="0.6">
        {/* head — tilts on hover when interactive */}
        <g
          style={{ transformOrigin: "100px 88px" }}
          className={interactive ? "transition-transform duration-700 ease-out group-hover/human:[transform:rotate(-8deg)_translateY(-2px)]" : ""}
        >
          <ellipse cx="100" cy="60" rx="22" ry="28" />
          <path
            d={variant === "henry"
              ? "M 78 50 Q 100 25 122 50 Q 120 38 100 32 Q 80 38 78 50 Z"
              : "M 78 55 Q 85 35 100 32 Q 115 35 122 55 Q 110 45 100 50 Q 90 45 78 55 Z"}
            fill="hsl(0 0% 10%)"
          />
          {/* eyes glow (subtle) */}
          <circle cx="92" cy="58" r="1.2" fill="hsl(0 100% 60%)" opacity="0.6" className={interactive ? "transition-all duration-500 group-hover/human:[r:2] group-hover/human:opacity-100" : ""} />
          <circle cx="108" cy="58" r="1.2" fill="hsl(0 100% 60%)" opacity="0.6" className={interactive ? "transition-all duration-500 group-hover/human:[r:2] group-hover/human:opacity-100" : ""} />
        </g>
        {/* neck */}
        <rect x="92" y="85" width="16" height="14" />
        {/* torso */}
        <path d="M 70 100 Q 60 110 60 160 L 65 240 Q 70 260 80 270 L 120 270 Q 130 260 135 240 L 140 160 Q 140 110 130 100 Z" />
        {/* arms */}
        <path d="M 60 110 Q 45 160 45 230 Q 50 240 55 235 Q 60 180 65 130 Z" />
        <path d="M 140 110 Q 155 160 155 230 Q 150 240 145 235 Q 140 180 135 130 Z" />
        {/* legs */}
        <path d="M 80 270 Q 75 320 78 390 L 95 390 Q 95 330 95 275 Z" />
        <path d="M 120 270 Q 125 320 122 390 L 105 390 Q 105 330 105 275 Z" />
      </g>
    </svg>
  );
};

export default HumanFigure;
