// Demobat — flying creature with flapping wings
const Demobat = ({ className = "", size = 60 }: { className?: string; size?: number }) => (
  <svg viewBox="0 0 120 80" className={className} width={size} height={size * 0.66}>
    <defs>
      <linearGradient id="bat-wing" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(0 50% 14%)" />
        <stop offset="100%" stopColor="hsl(0 30% 4%)" />
      </linearGradient>
    </defs>
    {/* left wing */}
    <g style={{ transformOrigin: "60px 40px", animation: "wing-flap 0.4s ease-in-out infinite" }}>
      <path
        d="M 60 40 Q 30 20 5 30 Q 15 40 10 50 Q 25 45 35 55 Q 45 50 60 45 Z"
        fill="url(#bat-wing)"
        stroke="hsl(0 60% 20%)"
        strokeWidth="0.8"
      />
    </g>
    {/* right wing */}
    <g style={{ transformOrigin: "60px 40px", animation: "wing-flap 0.4s ease-in-out infinite" }}>
      <path
        d="M 60 40 Q 90 20 115 30 Q 105 40 110 50 Q 95 45 85 55 Q 75 50 60 45 Z"
        fill="url(#bat-wing)"
        stroke="hsl(0 60% 20%)"
        strokeWidth="0.8"
      />
    </g>
    {/* body + petal head */}
    <ellipse cx="60" cy="42" rx="8" ry="14" fill="hsl(0 40% 8%)" stroke="hsl(0 60% 20%)" strokeWidth="0.6" />
    <g transform="translate(60,30)">
      <path d="M 0 0 L -4 -8 L 0 -3 Z M 0 0 L 4 -8 L 0 -3 Z M 0 0 L -6 -4 L -2 0 Z M 0 0 L 6 -4 L 2 0 Z" fill="hsl(0 50% 12%)" stroke="hsl(0 70% 22%)" strokeWidth="0.5" />
      <circle r="1.5" fill="hsl(0 90% 40%)" />
    </g>
    {/* tail */}
    <path d="M 60 56 Q 62 65 58 72" stroke="hsl(0 40% 10%)" strokeWidth="1.5" fill="none" />
  </svg>
);

export default Demobat;
