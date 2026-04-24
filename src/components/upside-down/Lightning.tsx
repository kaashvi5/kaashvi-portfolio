import { useEffect, useState } from "react";

// Real animated red lightning bolts that crack across the screen periodically
const generateBolt = (seed: number) => {
  const startX = 10 + Math.random() * 80;
  const segments = 8 + Math.floor(Math.random() * 6);
  let path = `M ${startX} 0`;
  let x = startX;
  let y = 0;
  for (let i = 0; i < segments; i++) {
    x += (Math.random() - 0.5) * 12;
    y += 100 / segments;
    path += ` L ${x} ${y}`;
  }
  // branches
  const branches: string[] = [];
  for (let b = 0; b < 2; b++) {
    const bx = startX + (Math.random() - 0.5) * 10;
    const by = 20 + Math.random() * 50;
    let bxc = bx, byc = by;
    let bp = `M ${bx} ${by}`;
    for (let i = 0; i < 4; i++) {
      bxc += (Math.random() - 0.5) * 8;
      byc += 8;
      bp += ` L ${bxc} ${byc}`;
    }
    branches.push(bp);
  }
  return { path, branches, key: seed };
};

const Lightning = () => {
  const [bolts, setBolts] = useState<ReturnType<typeof generateBolt>[]>([]);

  useEffect(() => {
    let mounted = true;
    const strike = () => {
      if (!mounted) return;
      const newBolts = Array.from({ length: 1 + Math.floor(Math.random() * 2) }, (_, i) =>
        generateBolt(Date.now() + i)
      );
      setBolts(newBolts);
      setTimeout(() => mounted && setBolts([]), 300);
      const next = 4000 + Math.random() * 6000;
      setTimeout(strike, next);
    };
    const t = setTimeout(strike, 1500);
    return () => { mounted = false; clearTimeout(t); };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {/* Screen flash overlay */}
      {bolts.length > 0 && (
        <div
          className="absolute inset-0 animate-[screen-flash_0.3s_ease-out]"
          style={{ background: "hsl(0 100% 60% / 0.15)" }}
        />
      )}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="bolt-glow">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {bolts.map((b) => (
          <g key={b.key} filter="url(#bolt-glow)" style={{ animation: "lightning 0.3s ease-out" }}>
            <path d={b.path} stroke="hsl(0 100% 70%)" strokeWidth="0.4" fill="none" vectorEffect="non-scaling-stroke" />
            <path d={b.path} stroke="hsl(0 90% 50%)" strokeWidth="0.15" fill="none" vectorEffect="non-scaling-stroke" />
            {b.branches.map((bp, i) => (
              <path key={i} d={bp} stroke="hsl(0 90% 60%)" strokeWidth="0.2" fill="none" vectorEffect="non-scaling-stroke" opacity="0.8" />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
};

export default Lightning;
