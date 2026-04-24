// Vecna humanoid silhouette — slow breathing presence in About section
const Vecna = () => (
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
    <svg viewBox="0 0 400 600" className="breathe h-[90%] w-auto opacity-30">
      <defs>
        <radialGradient id="vecna-glow" cx="50%" cy="30%">
          <stop offset="0%" stopColor="hsl(0 80% 25%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(0 0% 0%)" stopOpacity="0" />
        </radialGradient>
        <filter id="vecna-blur"><feGaussianBlur stdDeviation="2" /></filter>
      </defs>
      <ellipse cx="200" cy="300" rx="220" ry="320" fill="url(#vecna-glow)" />
      <g filter="url(#vecna-blur)" fill="hsl(0 30% 3%)" stroke="hsl(0 60% 18%)" strokeWidth="1.2">
        {/* gnarled head */}
        <path d="M 200 60 Q 150 70 145 130 Q 140 170 165 195 Q 160 215 175 230 L 225 230 Q 240 215 235 195 Q 260 170 255 130 Q 250 70 200 60 Z" />
        {/* glowing eyes */}
        <ellipse cx="180" cy="135" rx="6" ry="4" fill="hsl(0 100% 55%)" opacity="0.9" />
        <ellipse cx="220" cy="135" rx="6" ry="4" fill="hsl(0 100% 55%)" opacity="0.9" />
        {/* shoulders & torso */}
        <path d="M 175 230 Q 110 250 95 320 L 110 460 Q 120 500 150 520 L 250 520 Q 280 500 290 460 L 305 320 Q 290 250 225 230 Z" />
        {/* long claw arms */}
        <path d="M 110 280 Q 60 360 40 480 Q 38 520 50 540 Q 55 520 60 500 L 75 380 Z" />
        <path d="M 290 280 Q 340 360 360 480 Q 362 520 350 540 Q 345 520 340 500 L 325 380 Z" />
        {/* finger tendrils */}
        <g stroke="hsl(0 50% 15%)" strokeWidth="2" fill="none">
          <path d="M 50 540 Q 45 560 48 580" />
          <path d="M 55 545 Q 52 570 56 590" />
          <path d="M 350 540 Q 355 560 352 580" />
          <path d="M 345 545 Q 348 570 344 590" />
        </g>
        {/* vine tendrils from body */}
        <g stroke="hsl(350 40% 18%)" strokeWidth="1.5" fill="none" opacity="0.7">
          <path d="M 200 230 Q 210 280 195 340 Q 205 400 198 460" />
          <path d="M 180 250 Q 165 310 175 370" />
          <path d="M 220 250 Q 235 310 225 370" />
        </g>
      </g>
    </svg>
  </div>
);

export default Vecna;
