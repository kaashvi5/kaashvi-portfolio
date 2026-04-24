// SVG dark forest silhouette with vines for atmospheric backdrop
const Forest = () => (
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] opacity-70">
    <svg viewBox="0 0 1440 400" className="h-full w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="tree-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(0 30% 4%)" stopOpacity="0" />
          <stop offset="100%" stopColor="hsl(0 0% 1%)" stopOpacity="1" />
        </linearGradient>
      </defs>
      {/* far trees */}
      <g opacity="0.5">
        {Array.from({ length: 18 }).map((_, i) => {
          const x = i * 85 + Math.random() * 30;
          const h = 180 + Math.random() * 100;
          return (
            <g key={`f-${i}`} transform={`translate(${x},${400 - h})`}>
              <rect x="-2" y="0" width="4" height={h} fill="hsl(0 20% 5%)" />
              {Array.from({ length: 6 }).map((_, j) => (
                <line
                  key={j}
                  x1="0"
                  y1={20 + j * 25}
                  x2={(j % 2 === 0 ? -1 : 1) * (15 + Math.random() * 20)}
                  y2={10 + j * 25 + Math.random() * 10}
                  stroke="hsl(0 25% 6%)"
                  strokeWidth="1.5"
                />
              ))}
            </g>
          );
        })}
      </g>
      {/* near trees */}
      <g>
        {Array.from({ length: 10 }).map((_, i) => {
          const x = i * 160 + Math.random() * 40;
          const h = 280 + Math.random() * 120;
          return (
            <g key={`n-${i}`} transform={`translate(${x},${400 - h})`}>
              <rect x="-4" y="0" width="8" height={h} fill="hsl(0 25% 3%)" />
              {Array.from({ length: 8 }).map((_, j) => (
                <line
                  key={j}
                  x1="0"
                  y1={30 + j * 30}
                  x2={(j % 2 === 0 ? -1 : 1) * (25 + Math.random() * 30)}
                  y2={20 + j * 30 + Math.random() * 15}
                  stroke="hsl(0 30% 5%)"
                  strokeWidth="2"
                />
              ))}
            </g>
          );
        })}
      </g>
      {/* vines drooping from top */}
      <g opacity="0.4">
        {Array.from({ length: 8 }).map((_, i) => {
          const x = 100 + i * 180;
          return (
            <path
              key={`v-${i}`}
              d={`M ${x} 0 Q ${x + 20} 40 ${x - 10} 80 T ${x + 15} 160`}
              stroke="hsl(350 40% 15%)"
              strokeWidth="2"
              fill="none"
            />
          );
        })}
      </g>
      <rect x="0" y="0" width="1440" height="400" fill="url(#tree-grad)" />
    </svg>
  </div>
);

export default Forest;
