import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface Props {
  open: boolean;
  category: string | null;
  items: string[];
  onClose: () => void;
}

const WalkieTalkie = ({ open, category, items, onClose }: Props) => {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && category && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.6, rotate: -8, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.6, rotate: 8, opacity: 0 }}
            transition={{ type: "spring", damping: 18 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[300px] sm:w-[340px]"
          >
            {/* Walkie body */}
            <div className="relative rounded-[28px] bg-gradient-to-b from-[#3a2618] via-[#2a1810] to-[#1a0e08] border-4 border-[#1a0e08] shadow-[0_0_60px_hsl(var(--primary)/0.5)] p-5 pb-8">
              {/* Antenna */}
              <div className="absolute -top-20 right-8 h-24 w-1.5 bg-gradient-to-t from-zinc-700 to-zinc-400 rounded-full">
                <div className="absolute -top-1 -left-1 h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_hsl(var(--primary))] animate-pulse" />
              </div>
              {/* Brand */}
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono-glitch text-[9px] uppercase tracking-widest text-amber-200/70">HAWKINS · CH 4</span>
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
              </div>
              {/* Screen */}
              <div className="rounded-md border-2 border-amber-900/60 bg-black/90 p-4 shadow-inner relative overflow-hidden min-h-[180px]">
                <div className="vhs absolute inset-0 pointer-events-none" />
                <p className="font-mono-glitch text-[10px] uppercase tracking-widest text-primary/80">
                  ▸ INCOMING TRANSMISSION
                </p>
                <p className="font-display mt-2 text-lg uppercase tracking-wider text-amber-200 text-glow">
                  {category}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {items.map((s, i) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="font-mono-glitch rounded-sm border border-primary/40 bg-primary/5 px-2 py-0.5 text-[11px] text-amber-100/90"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
                <p className="font-mono-glitch mt-3 text-[9px] text-primary/60 animate-pulse">
                  &gt; over...
                </p>
              </div>
              {/* Speaker grille */}
              <div className="mt-4 grid grid-cols-8 gap-1 px-2">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="h-1.5 rounded-full bg-black/60" />
                ))}
              </div>
              {/* Knob + button */}
              <div className="mt-3 flex items-center justify-between px-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 border border-black" />
                <button
                  onClick={onClose}
                  className="font-mono-glitch rounded-sm border border-primary/60 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  end · over
                </button>
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 border border-black" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WalkieTalkie;
