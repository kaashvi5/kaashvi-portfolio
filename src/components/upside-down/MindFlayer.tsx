// Mind Flayer — large shadow entity with slow swaying tentacles
const MindFlayer = () => (
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
    <svg viewBox="0 0 800 600" className="h-full w-full opacity-50" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="mf-body" cx="50%" cy="40%">
          <stop offset="0%" stopColor="hsl(0 40% 8%)" />
          <stop offset="60%" stopColor="hsl(0 30% 4%)" />
          <stop offset="100%" stopColor="hsl(0 0% 0%)" stopOpacity="0" />
        </radialGradient>
        <filter id="mf-blur"><feGaussianBlur stdDeviation="4" /></filter>
      </defs>
      <g filter="url(#mf-blur)">
        {/* body mass */}
        <ellipse cx="400" cy="220" rx="280" ry="160" fill="url(#mf-body)" />
        {/* spider-like leg/tentacle bases */}
        <g stroke="hsl(0 30% 6%)" strokeWidth="14" fill="none" strokeLinecap="round">
          {[
            "M 280 240 Q 180 320 120 480 Q 100 540 140 590",
            "M 320 270 Q 240 380 200 520 Q 195 560 220 600",
            "M 400 290 Q 400 420 380 580",
            "M 480 270 Q 560 380 600 520 Q 605 560 580 600",
            "M 520 240 Q 620 320 680 480 Q 700 540 660 590",
            "M 240 220 Q 130 240 60 300",
            "M 560 220 Q 670 240 740 300",
          ].map((d, i) => (
            <path
              key={i}
              d={d}
              style={{
                transformOrigin: "400px 220px",
                animation: `tentacle-sway ${5 + i * 0.7}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </g>
        {/* secondary thinner tendrils */}
        <g stroke="hsl(0 50% 10%)" strokeWidth="3" fill="none" opacity="0.6">
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const x1 = 400 + Math.cos(angle) * 100;
            const y1 = 220 + Math.sin(angle) * 60;
            const x2 = 400 + Math.cos(angle) * 280;
            const y2 = 220 + Math.sin(angle) * 200;
            return (
              <path
                key={i}
                d={`M ${x1} ${y1} Q ${(x1 + x2) / 2 + 30} ${(y1 + y2) / 2} ${x2} ${y2}`}
                style={{
                  transformOrigin: "400px 220px",
                  animation: `tentacle-sway ${6 + (i % 4)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            );
          })}
        </g>
      </g>
    </svg>
  </div>
);

export default MindFlayer;
