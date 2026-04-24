import { useMemo } from "react";

// Floating particles / spores rising through the upside down
const Particles = ({ count = 30 }: { count?: number }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 14,
        opacity: 0.2 + Math.random() * 0.5,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: 0,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `hsl(0 80% ${50 + Math.random() * 20}% / ${p.opacity})`,
            boxShadow: `0 0 ${p.size * 3}px hsl(0 100% 60% / 0.5)`,
            animation: `particle ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
