import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * 15 MYSTERIES — only true fans of the Upside Down will find them all.
 * Each mystery has: id, hint (cryptic, fan-only), location/trigger, reward text.
 */
export const MYSTERIES = [
  { id: "morse-sos", hint: "Three short, three long, three short — Will is signaling.", reward: "SOS · Will Byers tapped this from the Upside Down (S1E3)." },
  { id: "konami", hint: "Eleven remembers a code: ↑ ↑ ↓ ↓ ← → ← → B A", reward: "EGGO MODE UNLOCKED · +1 waffle." },
  { id: "type-friends", hint: "Friends don't lie. Type the truth.", reward: "Mike → Eleven, 1983. Bond restored." },
  { id: "type-running-up", hint: "Max's lifesaver. Hum its title.", reward: "Running Up That Hill · Kate Bush, 1985 (S4E4)." },
  { id: "click-clock", hint: "Vecna's grandfather keeps four chimes. Find and click it.", reward: "1, 2, 3, 4 — and you broke the curse." },
  { id: "hold-eleven", hint: "Hold the bleeding nose for 011 seconds.", reward: "Eleven channels her power. 011 confirmed." },
  { id: "find-dustins-hat", hint: "Pearl among the project bats.", reward: "Dustin's cap recovered from Suzie's tower." },
  { id: "scroll-upside-down", hint: "The world flips when you stop scrolling at the bottom of the bottom.", reward: "You crossed the gate. Welcome to the Upside Down." },
  { id: "alphabet-wall", hint: "Will's mother strung Christmas lights for him. Light A through Z.", reward: "RIGHT HERE · Joyce hears you." },
  { id: "demogorgon-roar", hint: "Click the flower-faced when its petals bloom.", reward: "Demogorgon stunned by D&D crit roll." },
  { id: "vhs-rewind", hint: "Old tapes rewind. Drag the origin tape backwards.", reward: "Tape 001 rewound — Henry remembers everything." },
  { id: "pizza-suzie", hint: "Surfer Boy's secret topping summons a girl genius.", reward: "Suzie do you copy? · NINA project located." },
  { id: "music-box", hint: "Vecna's music box plays at midnight. Open it.", reward: "Dear Billy · the curse rewinds." },
  { id: "hawkins-lab", hint: "The lab door needs a clearance code. Subject 011.", reward: "Hawkins National Laboratory — access granted." },
  { id: "endgame-pancakes", hint: "Find them all and Eleven cooks breakfast.", reward: "ALL 15 MYSTERIES SOLVED · You are an honorary member of The Party." },
] as const;

export type MysteryId = typeof MYSTERIES[number]["id"];

const STORAGE_KEY = "upside-down-mysteries-v1";

export const useMysteries = () => {
  const [solved, setSolved] = useState<Set<string>>(new Set());
  const [latest, setLatest] = useState<{ id: string; reward: string } | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSolved(new Set(JSON.parse(raw)));
    } catch {}
  }, []);

  const solve = useCallback((id: MysteryId) => {
    setSolved((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...next])); } catch {}
      const m = MYSTERIES.find((x) => x.id === id);
      if (m) setLatest({ id, reward: m.reward });
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setSolved(new Set());
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }, []);

  return { solved, solve, latest, dismissLatest: () => setLatest(null), reset };
};

/* ---------- Toast for newly-solved mysteries ---------- */
export const MysteryToast = ({
  latest, onDismiss,
}: { latest: { id: string; reward: string } | null; onDismiss: () => void }) => {
  useEffect(() => {
    if (!latest) return;
    const t = setTimeout(onDismiss, 5000);
    return () => clearTimeout(t);
  }, [latest, onDismiss]);

  return (
    <AnimatePresence>
      {latest && (
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
          exit={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-sm border-2 border-primary bg-background/95 px-6 py-4 shadow-[0_0_40px_hsl(var(--primary)/0.6)] backdrop-blur"
          role="status"
          aria-live="polite"
        >
          <p className="font-mono-glitch text-[10px] uppercase tracking-[0.3em] text-primary">
            ▸ MYSTERY SOLVED
          </p>
          <p className="font-display mt-1 text-sm text-foreground">{latest.reward}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ---------- Hunt tracker drawer (top-right) ---------- */
export const MysteryTracker = ({
  solved, onReset,
}: { solved: Set<string>; onReset: () => void }) => {
  const [open, setOpen] = useState(false);
  const total = MYSTERIES.length;
  const count = solved.size;

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open mystery tracker"
        className="fixed right-4 top-4 z-[55] rounded-full border border-primary/40 bg-background/70 px-3 py-2 font-mono-glitch text-[10px] uppercase tracking-widest text-primary backdrop-blur transition-all hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
      >
        ◉ {count}/{total} mysteries
      </button>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", damping: 22 }}
            className="fixed right-4 top-16 z-[55] max-h-[80vh] w-80 overflow-y-auto rounded-sm border-2 border-primary/50 bg-background/95 p-5 backdrop-blur"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-primary">
                Hunt Log · {count}/{total}
              </h3>
              <button
                onClick={onReset}
                className="font-mono-glitch text-[9px] uppercase tracking-widest text-muted-foreground hover:text-primary"
                title="Reset hunt"
              >
                reset
              </button>
            </div>
            <p className="font-mono-glitch mb-4 text-[10px] leading-relaxed text-muted-foreground">
              15 mysteries are hidden across this dimension. Only true fans of the Upside Down will solve them all.
            </p>
            <ul className="space-y-3">
              {MYSTERIES.map((m, i) => {
                const done = solved.has(m.id);
                return (
                  <li
                    key={m.id}
                    className={`rounded-sm border p-3 transition-all ${
                      done
                        ? "border-primary/60 bg-primary/5"
                        : "border-border bg-card/40"
                    }`}
                  >
                    <p className="font-mono-glitch flex items-center gap-2 text-[10px] uppercase tracking-widest">
                      <span className={done ? "text-primary" : "text-muted-foreground"}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={done ? "text-primary" : "text-muted-foreground/80"}>
                        {done ? "● SOLVED" : "○ LOCKED"}
                      </span>
                    </p>
                    <p className={`mt-1 text-xs ${done ? "text-foreground/90" : "text-foreground/60"}`}>
                      {done ? m.reward : m.hint}
                    </p>
                  </li>
                );
              })}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

/* ---------- Global keyboard listeners (Konami, type-words, morse) ---------- */
export const GlobalMysteryListener = ({ onSolve }: { onSolve: (id: MysteryId) => void }) => {
  const buffer = useRef<string>("");
  const konami = useRef<string[]>([]);
  const morseTimes = useRef<number[]>([]);
  const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Konami
      konami.current.push(e.key);
      if (konami.current.length > KONAMI.length) konami.current.shift();
      if (konami.current.length === KONAMI.length &&
          konami.current.every((k, i) => k.toLowerCase() === KONAMI[i].toLowerCase())) {
        onSolve("konami");
        konami.current = [];
      }

      // Word buffer
      if (e.key.length === 1) {
        buffer.current = (buffer.current + e.key.toLowerCase()).slice(-40);
        if (buffer.current.endsWith("friendsdontlie") || buffer.current.endsWith("friends dont lie")) onSolve("type-friends");
        if (buffer.current.endsWith("runninguptht") || buffer.current.endsWith("runninguptthat") || buffer.current.endsWith("runningupthathill")) onSolve("type-running-up");
        if (buffer.current.endsWith("011")) onSolve("hawkins-lab");
        if (buffer.current.endsWith("pineapple")) onSolve("pizza-suzie");
      }
    };

    // Morse SOS via spacebar taps: ... --- ...
    const onSpace = (e: KeyboardEvent) => {
      if (e.code !== "Space") return;
      const now = Date.now();
      morseTimes.current.push(now);
      morseTimes.current = morseTimes.current.filter((t) => now - t < 6000);
      if (morseTimes.current.length >= 9) {
        // Quick heuristic: 9+ space taps within 6s = morse SOS attempt
        onSolve("morse-sos");
        morseTimes.current = [];
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("keydown", onSpace);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keydown", onSpace);
    };
  }, [onSolve]);

  return null;
};

/* ---------- Scroll-to-bottom flip mystery ---------- */
export const UpsideDownFlipWatcher = ({ onSolve }: { onSolve: (id: MysteryId) => void; solved?: boolean }) => {
  const [flipped, setFlipped] = useState(false);
  const stillTimer = useRef<number | null>(null);
  const solvedRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const atBottom = window.innerHeight + window.scrollY >= scrollHeight - 60;
      const atTop = window.scrollY <= 40;

      if (atBottom && !flipped) {
        if (stillTimer.current) window.clearTimeout(stillTimer.current);
        stillTimer.current = window.setTimeout(() => {
          setFlipped(true);
          if (!solvedRef.current) {
            onSolve("scroll-upside-down");
            solvedRef.current = true;
          }
        }, 800);
      } else if (atTop && flipped) {
        // Unflip when user returns to the top
        setFlipped(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (stillTimer.current) window.clearTimeout(stillTimer.current);
    };
  }, [onSolve, flipped]);

  useEffect(() => {
    document.body.style.transition = "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)";
    document.body.style.transformOrigin = "center center";
    document.body.style.transform = flipped ? "rotate(180deg)" : "";
    return () => { document.body.style.transform = ""; };
  }, [flipped]);

  return null;
};
