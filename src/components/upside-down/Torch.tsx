// Animated torch — flickering flashlight beam moving across the section
const Torch = ({
  side = "left",
  delay = 0,
  duration = 14,
}: {
  side?: "left" | "right";
  delay?: number;
  duration?: number;
}) => {
  const fromLeft = side === "left";
  return (
    <div
      className="pointer-events-none absolute top-0 h-full w-40"
      style={{
        animation: `torch-${fromLeft ? "right" : "left"} ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="relative h-full w-full">
        {/* Flashlight cone */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[120vh] w-[55vw] origin-left"
          style={{
            background: fromLeft
              ? "radial-gradient(ellipse 60% 50% at 0% 50%, hsl(45 100% 75% / 0.18), hsl(45 100% 70% / 0.08) 30%, transparent 60%)"
              : "radial-gradient(ellipse 60% 50% at 100% 50%, hsl(45 100% 75% / 0.18), hsl(45 100% 70% / 0.08) 30%, transparent 60%)",
            left: fromLeft ? "20px" : "auto",
            right: fromLeft ? "auto" : "20px",
            transform: fromLeft ? "translateY(-50%)" : "translateY(-50%) scaleX(-1)",
            mixBlendMode: "screen",
            animation: "flicker 3s infinite",
          }}
        />
        {/* Hot spot */}
        <div
          className="absolute top-1/2 h-6 w-6 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(45 100% 85%), hsl(45 100% 60% / 0.6) 40%, transparent 70%)",
            left: fromLeft ? "10px" : "auto",
            right: fromLeft ? "auto" : "10px",
            boxShadow: "0 0 30px hsl(45 100% 70% / 0.8)",
          }}
        />
      </div>
    </div>
  );
};

export default Torch;
