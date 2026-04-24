import { useEffect, useRef, useState } from "react";
import type { MysteryId } from "./MysterySystem";

/* A clickable hidden grandfather clock (4 chimes) — embed inside System or Hero */
export const HiddenClock = ({ onSolve }: { onSolve: (id: MysteryId) => void }) => {
  const [chimes, setChimes] = useState(0);
  const reset = useRef<number | null>(null);

  const tick = () => {
    setChimes((c) => {
      const next = c + 1;
      if (reset.current) window.clearTimeout(reset.current);
      reset.current = window.setTimeout(() => setChimes(0), 3000);
      if (next === 4) {
        onSolve("click-clock");
        return 0;
      }
      return next;
    });
  };

  return (
    <button
      onClick={tick}
      aria-label="Old grandfather clock"
      className="absolute right-[8%] top-[18%] z-10 opacity-30 transition-opacity hover:opacity-90"
      title=""
    >
      <svg width="42" height="70" viewBox="0 0 42 70" fill="none">
        <rect x="4" y="2" width="34" height="66" rx="2" stroke="hsl(var(--primary))" strokeWidth="1" fill="hsl(0 30% 6%)" />
        <circle cx="21" cy="20" r="10" stroke="hsl(var(--primary))" strokeWidth="0.8" fill="hsl(0 0% 4%)" />
        <line x1="21" y1="20" x2="21" y2="13" stroke="hsl(var(--primary))" strokeWidth="0.8" />
        <line x1="21" y1="20" x2="26" y2="22" stroke="hsl(var(--primary))" strokeWidth="0.8" />
        <line x1="21" y1="38" x2="21" y2="60" stroke="hsl(var(--primary))" strokeWidth="0.6" />
        <circle cx="21" cy="60" r="3" fill="hsl(var(--primary))" opacity="0.7" />
      </svg>
      {chimes > 0 && (
        <span className="font-mono-glitch absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] text-primary">
          {"●".repeat(chimes)}
        </span>
      )}
    </button>
  );
};

/* Hold-to-channel-eleven nose-bleed orb (11 seconds) */
export const ElevenOrb = ({ onSolve }: { onSolve: (id: MysteryId) => void }) => {
  const [held, setHeld] = useState(0);
  const interval = useRef<number | null>(null);

  const start = () => {
    interval.current = window.setInterval(() => {
      setHeld((h) => {
        if (h + 0.1 >= 11) {
          stop();
          onSolve("hold-eleven");
          return 0;
        }
        return h + 0.1;
      });
    }, 100);
  };
  const stop = () => {
    if (interval.current) window.clearInterval(interval.current);
    interval.current = null;
    setHeld(0);
  };

  return (
    <button
      onMouseDown={start}
      onMouseUp={stop}
      onMouseLeave={stop}
      onTouchStart={start}
      onTouchEnd={stop}
      aria-label="A glowing orb pulses faintly"
      className="absolute bottom-[12%] left-[6%] z-10 h-6 w-6 rounded-full bg-primary/30 transition-all hover:bg-primary/60"
      style={{ boxShadow: held > 0 ? `0 0 ${held * 6}px hsl(var(--primary))` : "0 0 8px hsl(var(--primary)/0.4)" }}
    >
      {held > 0 && (
        <span className="font-mono-glitch absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-primary">
          {held.toFixed(1)}
        </span>
      )}
    </button>
  );
};

/* Hidden Dustin hat among bats — clickable */
export const DustinHat = ({ onSolve }: { onSolve: (id: MysteryId) => void }) => (
  <button
    onClick={() => onSolve("find-dustins-hat")}
    aria-label="A small object glints"
    className="absolute right-[14%] top-[40%] z-10 opacity-40 transition-all hover:opacity-100 hover:scale-125"
  >
    <svg width="28" height="20" viewBox="0 0 28 20">
      <path d="M2 16 Q 14 0 26 16 L 26 18 L 2 18 Z" fill="hsl(15 60% 30%)" stroke="hsl(15 80% 50%)" strokeWidth="0.5" />
      <rect x="0" y="14" width="28" height="3" fill="hsl(15 70% 40%)" />
    </svg>
  </button>
);

/* Christmas-light alphabet wall — light up A-Z by clicking the letters in order */
export const AlphabetLights = ({ onSolve }: { onSolve: (id: MysteryId) => void }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [progress, setProgress] = useState(0);
  return (
    <div className="mt-12 rounded-sm border border-primary/20 bg-black/40 p-5">
      <p className="font-mono-glitch mb-3 text-[10px] uppercase tracking-widest text-primary/70">
        // joyce's wall · click in order
      </p>
      <div className="flex flex-wrap gap-1.5">
        {letters.map((l, i) => {
          const lit = i < progress;
          return (
            <button
              key={l}
              onClick={() => {
                if (i === progress) {
                  const next = progress + 1;
                  setProgress(next);
                  if (next === 26) onSolve("alphabet-wall");
                } else {
                  setProgress(0);
                }
              }}
              className={`font-display h-8 w-8 rounded-full border text-xs transition-all ${
                lit
                  ? "border-primary bg-primary/30 text-primary shadow-[0_0_12px_hsl(var(--primary))]"
                  : "border-border text-muted-foreground/60 hover:border-primary/40"
              }`}
            >
              {l}
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* Demogorgon flower-face — petals bloom every ~6s, click during bloom */
export const DemogorgonBloom = ({ onSolve }: { onSolve: (id: MysteryId) => void }) => {
  const [bloom, setBloom] = useState(false);
  useEffect(() => {
    const i = window.setInterval(() => {
      setBloom(true);
      window.setTimeout(() => setBloom(false), 1400);
    }, 6000);
    return () => window.clearInterval(i);
  }, []);
  return (
    <button
      onClick={() => bloom && onSolve("demogorgon-roar")}
      aria-label="A creature blooms briefly"
      className="absolute left-[10%] top-[60%] z-10"
      style={{ opacity: bloom ? 0.95 : 0.25, transition: "opacity 0.4s" }}
    >
      <svg width="46" height="46" viewBox="0 0 46 46">
        <g style={{ transformOrigin: "23px 23px", transform: bloom ? "scale(1.4)" : "scale(0.6)", transition: "transform 0.5s" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <ellipse
              key={i}
              cx="23" cy="10" rx="4" ry="10"
              fill="hsl(0 70% 25%)"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              transform={`rotate(${i * 60} 23 23)`}
            />
          ))}
        </g>
        <circle cx="23" cy="23" r="4" fill="hsl(0 0% 0%)" />
      </svg>
    </button>
  );
};

/* VHS rewind — drag horizontally leftward across to rewind */
export const VHSRewind = ({ onSolve }: { onSolve: (id: MysteryId) => void }) => {
  const [progress, setProgress] = useState(100);
  const dragging = useRef(false);
  const last = useRef(0);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    last.current = e.clientX;
  };
  const onMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - last.current;
    last.current = e.clientX;
    if (dx < 0) {
      setProgress((p) => {
        const next = Math.max(0, p + dx);
        if (next === 0) onSolve("vhs-rewind");
        return next;
      });
    }
  };
  const onUp = () => { dragging.current = false; };

  return (
    <div className="mt-8 rounded-sm border border-primary/30 bg-black/60 p-4">
      <p className="font-mono-glitch mb-2 text-[10px] uppercase tracking-widest text-primary/70">
        // tape 001 · drag left to rewind
      </p>
      <div
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        className="relative h-3 w-full cursor-ew-resize rounded-full bg-card"
      >
        <div className="absolute left-0 top-0 h-3 rounded-full bg-primary/60" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

/* Music box — click to open at midnight (or any time) */
export const MusicBox = ({ onSolve }: { onSolve: (id: MysteryId) => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => { setOpen(true); onSolve("music-box"); }}
      aria-label="A small ornate box"
      className="absolute right-[6%] bottom-[14%] z-10 opacity-40 transition-opacity hover:opacity-100"
    >
      <svg width="34" height="28" viewBox="0 0 34 28">
        <rect x="2" y="10" width="30" height="16" fill="hsl(0 30% 10%)" stroke="hsl(var(--primary))" strokeWidth="0.6" />
        <path
          d={open ? "M 2 10 L 17 -2 L 32 10" : "M 2 10 L 17 4 L 32 10"}
          fill="hsl(0 40% 14%)"
          stroke="hsl(var(--primary))"
          strokeWidth="0.6"
          style={{ transition: "all 0.5s" }}
        />
        {open && <circle cx="17" cy="2" r="1.5" fill="hsl(var(--primary))" className="animate-pulse" />}
      </svg>
    </button>
  );
};
