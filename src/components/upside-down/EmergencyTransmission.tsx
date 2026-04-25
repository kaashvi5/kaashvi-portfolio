import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EmergencyTransmission = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/kaashvigupta00@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: "🔴 CODE RED — Emergency Transmission from the Upside Down",
          _template: "table",
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setTimeout(() => {
          setName(""); setEmail(""); setMessage("");
          setStatus("idle");
        }, 6000);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative mx-auto max-w-2xl">
      {/* Console frame */}
      <div className="relative overflow-hidden rounded-md border-2 border-primary/60 bg-gradient-to-b from-black/90 to-[#1a0606]/95 p-6 sm:p-8 shadow-[0_0_60px_hsl(var(--primary)/0.3)]">
        <div className="vhs absolute inset-0 pointer-events-none opacity-50" />

        {/* Header strip */}
        <div className="relative flex items-center justify-between border-b-2 border-primary/40 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 animate-pulse rounded-full bg-primary shadow-[0_0_15px_hsl(var(--primary))]" />
            <span className="font-mono-glitch text-[10px] uppercase tracking-[0.3em] text-primary">
              ▸ EMERGENCY TRANSMISSION SYSTEM
            </span>
          </div>
          <span className="font-mono-glitch text-[10px] text-primary/60">CH · 011</span>
        </div>

        <div className="relative mt-5">
          <p className="font-display text-xl uppercase tracking-wider text-blood text-glow">
            Message the Sorcerer
          </p>
          <p className="font-mono-glitch mt-2 text-xs leading-relaxed text-muted-foreground">
            &gt; encrypted line open. transmit name, return frequency &amp; intel.<br />
            &gt; signal will reach the operator across the dimension.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="font-mono-glitch text-[10px] uppercase tracking-widest text-primary/70">
                ▸ Identity
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status === "sending" || status === "sent"}
                required
                placeholder="your name, traveler"
                className="mt-1 w-full rounded-sm border border-primary/40 bg-black/60 px-3 py-2 font-mono-glitch text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
              />
            </div>
            <div>
              <label className="font-mono-glitch text-[10px] uppercase tracking-widest text-primary/70">
                ▸ Return Frequency
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "sending" || status === "sent"}
                required
                placeholder="signal@dimension.net"
                className="mt-1 w-full rounded-sm border border-primary/40 bg-black/60 px-3 py-2 font-mono-glitch text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
              />
            </div>
            <div>
              <label className="font-mono-glitch text-[10px] uppercase tracking-widest text-primary/70">
                ▸ Encrypted Intel
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === "sending" || status === "sent"}
                required
                rows={4}
                placeholder="speak now... the curtain is thin."
                className="mt-1 w-full rounded-sm border border-primary/40 bg-black/60 px-3 py-2 font-mono-glitch text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:shadow-[0_0_15px_hsl(var(--primary)/0.4)] resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="font-display w-full rounded-sm border-2 border-primary bg-primary/10 px-6 py-3 text-sm uppercase tracking-[0.3em] text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] disabled:opacity-50"
            >
              {status === "sending" ? (
                <span className="glitch" data-text="TRANSMITTING...">TRANSMITTING...</span>
              ) : status === "sent" ? (
                "▸ SIGNAL DELIVERED"
              ) : status === "error" ? (
                "▸ Retry Transmission"
              ) : (
                "▸ Send Code Red"
              )}
            </button>
            {status === "error" && (
              <p className="font-mono-glitch text-center text-xs text-destructive">
                &gt; transmission interrupted by the mind flayer. try again.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* CODE RED overlay on success */}
      <AnimatePresence>
        {status === "sent" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center pointer-events-none"
          >
            {/* Red strobe */}
            <motion.div
              animate={{ opacity: [0, 0.7, 0.2, 0.6, 0.1, 0.5, 0] }}
              transition={{ duration: 4, times: [0, 0.1, 0.25, 0.4, 0.6, 0.8, 1] }}
              className="absolute inset-0 bg-primary/40 mix-blend-screen"
            />
            {/* Scanlines */}
            <div className="absolute inset-0 vhs opacity-80" />
            {/* Center stamp */}
            <motion.div
              initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 1.4, opacity: 0 }}
              transition={{ type: "spring", damping: 14 }}
              className="relative rounded-md border-4 border-primary bg-black/80 px-10 py-8 text-center shadow-[0_0_80px_hsl(var(--primary)/0.9)]"
            >
              <div className="font-mono-glitch flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
                <span className="h-3 w-3 animate-pulse rounded-full bg-primary shadow-[0_0_15px_hsl(var(--primary))]" />
                ALERT · ALERT · ALERT
                <span className="h-3 w-3 animate-pulse rounded-full bg-primary shadow-[0_0_15px_hsl(var(--primary))]" />
              </div>
              <p
                className="font-display mt-4 text-5xl font-black uppercase tracking-wider text-blood glitch md:text-6xl"
                data-text="CODE RED"
              >
                CODE RED
              </p>
              <p className="font-display mt-2 text-2xl uppercase tracking-[0.3em] text-foreground">
                signal sent
              </p>
              <p className="font-mono-glitch mt-4 text-xs text-muted-foreground">
                &gt; transmission received across the dimension<br />
                &gt; the sorcerer will respond. friends don't lie.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmergencyTransmission;
