import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lightning from "@/components/upside-down/Lightning";
import Particles from "@/components/upside-down/Particles";
import Forest from "@/components/upside-down/Forest";
import Vecna from "@/components/upside-down/Vecna";
import MindFlayer from "@/components/upside-down/MindFlayer";
import Demodog from "@/components/upside-down/Demodog";
import Demobat from "@/components/upside-down/Demobat";
import HumanFigure from "@/components/upside-down/HumanFigure";
import SectionShell from "@/components/upside-down/SectionShell";
import WalkieTalkie from "@/components/upside-down/WalkieTalkie";
import Torch from "@/components/upside-down/Torch";
import EmergencyTransmission from "@/components/upside-down/EmergencyTransmission";
import {
  useMysteries,
  MysteryToast,
  MysteryTracker,
  GlobalMysteryListener,
  UpsideDownFlipWatcher,
} from "@/components/upside-down/MysterySystem";
import {
  HiddenClock,
  ElevenOrb,
  DustinHat,
  AlphabetLights,
  DemogorgonBloom,
  VHSRewind,
  MusicBox,
} from "@/components/upside-down/HiddenInteractives";

const skills: Record<string, string[]> = {
  Languages: ["Python", "Java", "C++", "JavaScript", "SQL"],
  Web: ["HTML", "CSS", "REST API", "MongoDB"],
  Tools: ["Power BI", "VS Code", "Canva", "Figma", "Git", "GitHub", "Excel", "Lens Studio", "Tableau"],
  "Core CS": ["Data Structures", "Algorithms", "DAA", "OOPS", "DBMS", "Operating Systems", "ML"],
  Cloud: ["AWS", "Vercel", "Netlify", "Render", "Lovable", "Pinata"],
};

const experiences = [
  { role: "Associate Designer & Public Speaker", org: "OSEN", date: "12/2025 — Present", desc: "Hosted events and delivered public speaking sessions; prepared monthly performance reports." },
  { role: "Google Student Ambassador", org: "Google Gemini", date: "04/2026 — Present", desc: "Lead campus initiatives promoting Google technologies and tech-driven learning." },
  { role: "Video Editor", org: "DevSphereIndia & TechEra", date: "09/2025 — Present", desc: "Produce promotional, social, and event videos aligned with brand aesthetics." },
  { role: "Graphic Designer", org: "DevSphereIndia", date: "08/2025 — Present", desc: "Design social media posts, digital ads, and marketing materials." },
  { role: "PowerBI Intern", org: "Codveda Technologies", date: "05/2025 — 06/2025", desc: "Built Power BI dashboards to visualize trends and support decision making." },
];

const projects = [
  { name: "MediVault", lines: ["Secure medical record storage system using blockchain-based encryption.", "Decentralized access control ensuring data privacy and integrity."] },
  { name: "MindMate", lines: ["Digital mental wellness platform for emotional expression and self-reflection.", "Integrated accessible coping tools to enhance user engagement."] },
  { name: "FraudShield", lines: ["Web app to detect and prevent online fraud using activity analysis.", "Intuitive UI to identify phishing attempts and improve awareness."] },
];

const certifications = [
  "Data Science Methodology", "IBM Cloud Essentials", "Elite Code (Open Source)",
  "Prompt Engineering", "Data Privacy Fundamentals", "GirlScript Summer of Code",
  "Data Analysis with Python", "AWS",
];

const Index = () => {
  const [decrypting, setDecrypting] = useState(false);
  const [walkie, setWalkie] = useState<string | null>(null);
  const { solved, solve, latest, dismissLatest, reset } = useMysteries();

  useEffect(() => {
    if (solved.size === 14 && !solved.has("endgame-pancakes")) {
      setTimeout(() => solve("endgame-pancakes"), 600);
    }
  }, [solved, solve]);

  useEffect(() => {
    document.title = "Kaashvi Gupta — Surviving the Upside Down";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Kaashvi Gupta — CS student & AI/ML enthusiast. A cinematic portfolio inspired by the Upside Down.");
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  const handleDecrypt = () => {
    setDecrypting(true);
    // Open in a new tab as a fallback so users always get the file
    setTimeout(() => {
      const a = document.createElement("a");
      a.href = "/Kaashvi_Gupta_Resume.pdf";
      a.download = "Kaashvi_Gupta_Resume.pdf";
      a.target = "_blank";
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setDecrypting(false);
    }, 1200);
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Lightning />
      <GlobalMysteryListener onSolve={solve} />
      <UpsideDownFlipWatcher onSolve={solve} />
      <MysteryTracker solved={solved} onReset={reset} />
      <MysteryToast latest={latest} onDismiss={dismissLatest} />
      <WalkieTalkie
        open={!!walkie}
        category={walkie}
        items={walkie ? skills[walkie] || [] : []}
        onClose={() => setWalkie(null)}
      />

      {/* Persistent Henry Creel watcher in the background — fixed across all sections */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Far left silhouette */}
        <div className="absolute bottom-0 left-2 hidden h-[70vh] opacity-25 breathe drop-shadow-[0_0_40px_hsl(0_80%_30%/0.5)] md:block">
          <HumanFigure variant="henry" />
        </div>
        {/* Far right tall silhouette */}
        <div className="absolute bottom-0 right-2 hidden h-[80vh] opacity-20 breathe drop-shadow-[0_0_60px_hsl(0_90%_40%/0.4)] md:block" style={{ animationDelay: "-3s" }}>
          <HumanFigure variant="henry" />
        </div>
        {/* Mobile centered ghost */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[55vh] opacity-15 breathe md:hidden">
          <HumanFigure variant="henry" />
        </div>
      </div>

      {/* Floating nav */}
      <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full border border-primary/20 bg-background/60 px-5 py-2 backdrop-blur-md">
        <ul className="flex flex-wrap justify-center gap-5 font-mono-glitch text-[10px] uppercase tracking-widest text-muted-foreground">
          {["hero", "about", "skills", "projects", "human", "leetcode", "resume", "contact"].map((s) => (
            <li key={s}>
              <a href={`#${s}`} className="transition-colors hover:text-primary">{s}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-fog" />
        <Forest />
        <Particles count={40} />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="font-mono-glitch mb-6 text-xs uppercase text-primary/70"
          >
            // signal intercepted — dimension breach
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="font-display text-5xl font-black uppercase leading-none md:text-8xl"
          >
            <span className="glitch text-blood" data-text="KAASHVI">KAASHVI</span>{" "}
            <span className="glitch" data-text="GUPTA">GUPTA</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mx-auto mt-8 max-w-2xl text-lg italic text-muted-foreground md:text-xl"
          >
            "Not just building projects… surviving the Upside Down."
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="font-mono-glitch mt-10 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest text-muted-foreground"
          >
            <span>CS · AI/ML</span>
            <span className="text-primary">●</span>
            <span>K.R. Mangalam University</span>
            <span className="text-primary">●</span>
            <span>New Delhi</span>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce font-mono-glitch text-xs text-primary/60">
          ↓ descend
        </div>
      </section>

      {/* ABOUT — Vecna presence (GPA + Years removed) */}
      <SectionShell
        id="about"
        label="entity scan / 01"
        title="ABOUT THE SURVIVOR"
        background={<>
          <Vecna />
          <div className="absolute right-6 top-10 hidden h-64 w-64 opacity-70 md:block"><Vecna /></div>
          <Particles count={18} />
        </>}
      >
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-lg leading-relaxed text-foreground/90">
              Detail-oriented Computer Science student specializing in{" "}
              <span className="text-blood">Artificial Intelligence and Machine Learning</span>,
              with hands-on experience in building real-world applications across web development
              and AI-driven solutions.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Skilled in Python, Java, and modern web technologies, with a strong foundation in
              data structures and problem-solving. Passionate about developing impactful,
              user-centric products and continuously exploring emerging technologies.
            </p>
          </div>
          <div className="space-y-4 md:col-span-2">
            {[
              { k: "Degree", v: "B.Tech CSE — AI/ML" },
              { k: "University", v: "K.R. Mangalam University" },
              { k: "Location", v: "New Delhi, IN" },
            ].map((row) => (
              <div key={row.k} className="flex justify-between border-b border-border/60 pb-2 font-mono-glitch text-sm">
                <span className="text-muted-foreground">{row.k}</span>
                <span className="text-foreground">{row.v}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* SKILLS — Demodogs + Walkie Talkie reveal */}
      <SectionShell
        id="skills"
        label="creature analysis / 02"
        title="SKILL SPECIMENS"
        background={
          <>
            <Particles count={10} />
            <div className="absolute top-[10%] w-full crawl" style={{ animationDelay: "0s" }}>
              <Demodog className="h-20 w-auto opacity-90 drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]" />
            </div>
            <div className="absolute top-[35%] w-full crawl" style={{ animationDelay: "-4s", animationDuration: "20s" }}>
              <Demodog className="h-16 w-auto opacity-80" flip />
            </div>
            <div className="absolute top-[58%] w-full crawl" style={{ animationDelay: "-9s", animationDuration: "24s" }}>
              <Demodog className="h-24 w-auto opacity-85 drop-shadow-[0_0_25px_hsl(var(--primary)/0.4)]" />
            </div>
            <div className="absolute top-[78%] w-full crawl" style={{ animationDelay: "-14s", animationDuration: "26s" }}>
              <Demodog className="h-14 w-auto opacity-75" flip />
            </div>
          </>
        }
      >
        <p className="font-mono-glitch mb-6 text-xs uppercase tracking-widest text-primary/70">
          ▸ tap a specimen to open the walkie-talkie · channel 4
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([cat, items]) => (
            <motion.button
              type="button"
              onClick={() => setWalkie(cat)}
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-sm border border-primary/20 bg-card/40 p-6 text-left backdrop-blur-sm transition-all hover:border-primary/60 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-sm uppercase tracking-[0.3em] text-primary">{cat}</h3>
                <span className="font-mono-glitch text-[10px] uppercase tracking-widest text-primary/60 group-hover:text-primary">
                  ▸ open
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="font-mono-glitch rounded-sm border border-border bg-background/60 px-3 py-1 text-xs text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
                {items.length > 4 && (
                  <span className="font-mono-glitch rounded-sm border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary">
                    +{items.length - 4} more
                  </span>
                )}
              </div>
            </motion.button>
          ))}
        </div>
        <div className="mt-10">
          <h3 className="font-display mb-4 text-sm uppercase tracking-[0.3em] text-primary">Soft Signals</h3>
          <p className="text-foreground/80">Communication · Problem Solving · Analytical Thinking · Team Collaboration · Adaptability</p>
        </div>
      </SectionShell>

      {/* PROJECTS — Demobats + 2 moving torches */}
      <SectionShell
        id="projects"
        label="missions / 03"
        title="PROJECT FLIGHT LOGS"
        background={
          <>
            <Particles count={8} />
            {/* Two moving torches sweeping the section */}
            <Torch side="left" delay={0} duration={16} />
            <Torch side="right" delay={4} duration={20} />
            <div className="absolute inset-0">
              <div className="absolute" style={{ animation: "bat-fly 18s linear infinite", animationDelay: "0s" }}><Demobat size={50} /></div>
              <div className="absolute" style={{ animation: "bat-fly 24s linear infinite", animationDelay: "-5s" }}><Demobat size={70} /></div>
              <div className="absolute" style={{ animation: "bat-fly 22s linear infinite", animationDelay: "-12s" }}><Demobat size={40} /></div>
              <div className="absolute" style={{ animation: "bat-fly 30s linear infinite", animationDelay: "-18s" }}><Demobat size={60} /></div>
            </div>
            <DustinHat onSolve={solve} />
          </>
        }
      >
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-sm border border-primary/30 bg-gradient-to-b from-card/80 to-background/60 p-6 backdrop-blur-sm transition-all hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)]"
            >
              <div className="absolute right-3 top-3 opacity-30 transition-opacity group-hover:opacity-100">
                <Demobat size={36} />
              </div>
              <p className="font-mono-glitch text-xs text-primary/70">// MISSION_0{i + 1}</p>
              <h3 className="font-display mt-2 text-2xl uppercase tracking-wider text-foreground">{p.name}</h3>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/60 to-transparent" />
              <ul className="mt-4 space-y-2">
                {p.lines.map((l) => (
                  <li key={l} className="flex gap-2 text-sm text-foreground/80">
                    <span className="text-primary">▸</span>{l}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </SectionShell>

      {/* HUMAN — Will Byers (kept; system architecture removed) */}
      {/* Hidden interactives that lived inside the removed system section */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-0 opacity-0">
        <HiddenClock onSolve={solve} />
        <MusicBox onSolve={solve} />
        <ElevenOrb onSolve={solve} />
        <MindFlayer />
      </div>

      <div className="group/human">
      <SectionShell
        id="human"
        label="emotional resonance / 04"
        title="THE HUMAN SIGNAL"
        background={
          <>
            <div className="absolute bottom-0 left-4 h-[95%] opacity-90 drop-shadow-[0_0_30px_hsl(var(--primary)/0.3)] md:left-20">
              <HumanFigure variant="will" interactive />
            </div>
            <div className="absolute bottom-0 right-10 hidden h-[60%] opacity-50 transition-opacity duration-700 group-hover/human:opacity-80 md:block">
              <HumanFigure variant="will" interactive />
            </div>

            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute" style={{ animation: "bat-fly 26s linear infinite", animationDelay: "0s" }}><Demobat size={45} /></div>
              <div className="absolute" style={{ animation: "bat-fly 32s linear infinite", animationDelay: "-8s" }}><Demobat size={60} /></div>
              <div className="absolute" style={{ animation: "bat-fly 22s linear infinite", animationDelay: "-15s" }}><Demobat size={36} /></div>
              <div className="absolute" style={{ animation: "bat-fly 38s linear infinite", animationDelay: "-22s" }}><Demobat size={52} /></div>
            </div>

            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/human:opacity-100">
              <div className="absolute inset-0" style={{ background: "hsl(0 100% 60% / 0.08)", animation: "screen-flash 2s ease-out infinite" }} />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 30 0 L 28 25 L 35 30 L 25 60 L 32 65 L 22 100" stroke="hsl(0 100% 70%)" strokeWidth="0.3" fill="none" vectorEffect="non-scaling-stroke" style={{ animation: "lightning 1.4s ease-out infinite" }} />
                <path d="M 70 0 L 73 22 L 66 28 L 76 55 L 68 62 L 78 100" stroke="hsl(0 100% 65%)" strokeWidth="0.25" fill="none" vectorEffect="non-scaling-stroke" style={{ animation: "lightning 1.6s ease-out infinite", animationDelay: "0.3s" }} />
              </svg>
            </div>

            <Particles count={10} />
          </>
        }
      >
        <div className="max-w-2xl space-y-10">
          {experiences.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l-2 border-primary/40 pl-5 transition-all duration-500 hover:border-primary hover:pl-7 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
            >
              <p className="font-mono-glitch text-xs text-primary/70">{e.date} · {e.org}</p>
              <h3 className="font-display mt-1 text-xl uppercase tracking-wide text-foreground">{e.role}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
            </motion.div>
          ))}
          <p className="font-mono-glitch pt-4 text-sm italic text-muted-foreground">
            "Consistency in small signals is how you stay yourself across dimensions."
          </p>
        </div>
      </SectionShell>
      </div>

      {/* LEETCODE */}
      <SectionShell
        id="leetcode"
        label="incoming signal / 05"
        title="LEETCODE TRANSMISSION"
        background={<div className="absolute inset-0 vhs" />}
      >
        <motion.a
          href="https://leetcode.com/u/Q66UbRIjoS/"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="group relative block overflow-hidden rounded-sm border-2 border-primary/40 bg-black/60 p-8 backdrop-blur-sm transition-all hover:border-primary"
        >
          <div className="font-mono-glitch space-y-3 text-sm">
            <p className="flex items-center gap-3 text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
              CHANNEL_OPEN · awaiting handshake...
            </p>
            <p className="text-muted-foreground">&gt; locating user...</p>
            <p className="text-foreground">&gt; user: <span className="glitch text-blood" data-text="Q66UbRIjoS">Q66UbRIjoS</span></p>
            <p className="text-muted-foreground">&gt; protocol: leetcode.com</p>
            <p className="text-muted-foreground">&gt; status: <span className="text-primary">SOLVING</span></p>
            <div className="mt-6 border-t border-primary/30 pt-4">
              <p className="text-foreground/90">▸ click to open transmission →</p>
              <p className="text-xs text-muted-foreground">leetcode.com/u/Q66UbRIjoS/</p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 vhs opacity-60" />
        </motion.a>
      </SectionShell>

      {/* RESUME */}
      <SectionShell id="resume" label="classified / 06" title="CLASSIFIED FILE">
        <div className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-sm border-2 border-dashed border-primary/50 bg-black/70 p-8">
            <div className="font-mono-glitch space-y-2 text-sm">
              <div className="flex justify-between border-b border-primary/30 pb-2 text-xs uppercase tracking-widest text-primary">
                <span>● CLASSIFIED</span>
                <span>CLEARANCE: SUBJECT 011</span>
              </div>
              <p className="pt-4 text-muted-foreground">FILE: KAASHVI_GUPTA_RESUME.pdf</p>
              <p className="text-muted-foreground">SIZE: ████ KB</p>
              <p className="text-muted-foreground">STATUS: <span className="text-primary">ENCRYPTED</span></p>
              <div className="my-4 h-24 rounded bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
              <button
                onClick={handleDecrypt}
                disabled={decrypting}
                className="font-display mt-2 w-full rounded-sm border-2 border-primary bg-primary/10 px-6 py-3 text-sm uppercase tracking-[0.3em] text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] disabled:opacity-50"
              >
                {decrypting ? <span className="glitch" data-text="DECRYPTING...">DECRYPTING...</span> : "▸ Decrypt & Download Resume"}
              </button>
              {/* Direct fallback link in case popup blockers interfere */}
              <a
                href="/Kaashvi_Gupta_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                download="Kaashvi_Gupta_Resume.pdf"
                className="font-mono-glitch mt-3 block text-center text-[11px] uppercase tracking-widest text-primary/70 underline-offset-4 hover:text-primary hover:underline"
              >
                ▸ direct link · open resume in new tab
              </a>
              {decrypting && (
                <div className="mt-4 space-y-1 text-xs text-primary/80">
                  <p>&gt; bypassing dimensional firewall...</p>
                  <p>&gt; channeling lightning protocol...</p>
                  <p>&gt; download initiated.</p>
                </div>
              )}
            </div>
            <div className="pointer-events-none absolute inset-0 vhs" />
          </div>
          <div className="mt-8">
            <p className="font-mono-glitch mb-3 text-xs uppercase tracking-widest text-primary/70">// certifications recovered</p>
            <div className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span key={c} className="rounded-sm border border-border bg-card/40 px-3 py-1 font-mono-glitch text-xs text-foreground/80">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <AlphabetLights onSolve={solve} />
          <VHSRewind onSolve={solve} />
          <DemogorgonBloom onSolve={solve} />
        </div>
      </SectionShell>

      {/* CONTACT — Emergency Transmission */}
      <SectionShell
        id="contact"
        label="end of signal / 07"
        title="EMERGENCY TRANSMISSION"
        background={<>
          <div className="absolute inset-0 vhs opacity-60" />
          <Particles count={14} />
        </>}
      >
        <EmergencyTransmission />
        <div className="mx-auto mt-10 max-w-xl text-center">
          <p className="font-display flicker text-2xl text-blood md:text-3xl">
            kaashvigupta00@gmail.com
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 font-mono-glitch text-sm text-muted-foreground">
            <a href="mailto:kaashvigupta00@gmail.com" className="transition-colors hover:text-primary">EMAIL</a>
            <span className="text-primary/40">/</span>
            <a href="tel:+918130823345" className="transition-colors hover:text-primary">+91 8130823345</a>
            <span className="text-primary/40">/</span>
            <span>NEW DELHI</span>
          </div>
          <p className="font-mono-glitch mt-12 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60">
            // transmission ends · friends don't lie
          </p>
        </div>
      </SectionShell>
    </main>
  );
};

export default Index;
