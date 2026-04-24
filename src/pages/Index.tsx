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

const skills = {
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
  const { solved, solve, latest, dismissLatest, reset } = useMysteries();

  useEffect(() => {
    if (solved.size === 14 && !solved.has("endgame-pancakes")) {
      // when 14 unique are solved, trigger endgame
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
    setTimeout(() => {
      const a = document.createElement("a");
      a.href = "/Kaashvi_Gupta_Resume.pdf";
      a.download = "Kaashvi_Gupta_Resume.pdf";
      a.click();
      setDecrypting(false);
    }, 1400);
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Lightning />
      <GlobalMysteryListener onSolve={solve} />
      <UpsideDownFlipWatcher onSolve={solve} solved={solved.has("scroll-upside-down")} />
      <MysteryTracker solved={solved} onReset={reset} />
      <MysteryToast latest={latest} onDismiss={dismissLatest} />

      {/* Floating nav */}
      <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full border border-primary/20 bg-background/60 px-5 py-2 backdrop-blur-md">
        <ul className="flex gap-5 font-mono-glitch text-[10px] uppercase tracking-widest text-muted-foreground">
          {["hero", "about", "origin", "skills", "projects", "system", "human", "leetcode", "resume", "contact"].map((s) => (
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

      {/* ABOUT — Vecna presence */}
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
              { k: "Years", v: "2024 — 2028" },
              { k: "GPA", v: "8.62 / 10" },
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

      {/* ORIGIN — Henry Creel + VHS */}
      <SectionShell
        id="origin"
        label="archival footage / 02"
        title="ORIGIN TRANSMISSION"
        background={
          <>
            <div className="absolute inset-0 vhs" />
            <div className="absolute right-4 top-10 h-[80%] opacity-40 md:right-20"><HumanFigure variant="henry" /></div>
            <DemogorgonBloom onSolve={solve} />
            <Particles count={12} />
          </>
        }
      >
        <div className="font-mono-glitch mb-6 flex items-center gap-3 text-xs uppercase text-primary/70">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          REC · TAPE 001 · {new Date().toLocaleDateString()}
        </div>
        <div className="space-y-6 border-l-2 border-primary/40 pl-6">
          {[
            { y: "2024", t: "Began B.Tech in CSE — AI/ML at K.R. Mangalam University." },
            { y: "05/2025", t: "PowerBI Intern at Codveda Technologies — built dashboards for data-driven decisions." },
            { y: "08/2025", t: "Joined DevSphereIndia as Graphic Designer." },
            { y: "09/2025", t: "Started editing video content for DevSphereIndia & TechEra." },
            { y: "12/2025", t: "Stepped on stage as Associate Designer & Public Speaker at OSEN." },
            { y: "04/2026", t: "Selected as Google Student Ambassador for Google Gemini." },
          ].map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_hsl(var(--primary))]" />
              <p className="font-mono-glitch text-xs text-primary/80">{e.y}</p>
              <p className="text-foreground/90">{e.t}</p>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      {/* SKILLS — Demodogs */}
      <SectionShell
        id="skills"
        label="creature analysis / 03"
        title="SKILL SPECIMENS"
        background={
          <>
            <Particles count={10} />
            {/* crawling demodogs — multiple visible creatures */}
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
            <div className="absolute top-[92%] w-full crawl" style={{ animationDelay: "-3s", animationDuration: "30s" }}>
              <Demodog className="h-12 w-auto opacity-70" />
            </div>
          </>
        }
      >
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([cat, items]) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-sm border border-primary/20 bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-primary/60 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
            >
              <h3 className="font-display mb-4 text-sm uppercase tracking-[0.3em] text-primary">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="font-mono-glitch cursor-default rounded-sm border border-border bg-background/60 px-3 py-1 text-xs text-foreground/80 transition-all hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10">
          <h3 className="font-display mb-4 text-sm uppercase tracking-[0.3em] text-primary">Soft Signals</h3>
          <p className="text-foreground/80">Communication · Problem Solving · Analytical Thinking · Team Collaboration · Adaptability</p>
        </div>
      </SectionShell>

      {/* PROJECTS — Demobats */}
      <SectionShell
        id="projects"
        label="missions / 04"
        title="PROJECT FLIGHT LOGS"
        background={
          <>
            <Particles count={8} />
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

      {/* SYSTEM — Mind Flayer */}
      <SectionShell
        id="system"
        label="hive mind / 05"
        title="SYSTEM ARCHITECTURE"
        background={<><MindFlayer /><Particles count={20} /><HiddenClock onSolve={solve} /><MusicBox onSolve={solve} /><ElevenOrb onSolve={solve} /></>}
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-foreground/90">
            Experience as a <span className="text-blood">PowerBI Intern at Codveda Technologies</span> shaped
            how I approach systems — building dashboards that visualize trends and support
            data-driven decision making.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Across roles I work with cloud and deployment platforms — AWS, Vercel, Netlify, Render,
            Pinata, Lovable — composing pieces into systems that feel intentional from the
            interface down to the infrastructure.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { k: "System Design", v: "Architecture & flow" },
              { k: "Cloud Computing", v: "AWS · Vercel · Render" },
              { k: "Data Visualization", v: "Power BI · Tableau" },
            ].map((b) => (
              <div key={b.k} className="rounded-sm border border-primary/20 bg-card/30 p-4 backdrop-blur-sm">
                <p className="font-display text-xs uppercase tracking-widest text-primary">{b.k}</p>
                <p className="mt-1 text-sm text-foreground/80">{b.v}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* HUMAN — Will Byers */}
      <div className="group/human">
      <SectionShell
        id="human"
        label="emotional resonance / 06"
        title="THE HUMAN SIGNAL"
        background={
          <>
            {/* Will Byers — interactive */}
            <div className="absolute bottom-0 left-4 h-[95%] opacity-90 drop-shadow-[0_0_30px_hsl(var(--primary)/0.3)] md:left-20">
              <HumanFigure variant="will" interactive />
            </div>
            <div className="absolute bottom-0 right-10 hidden h-[60%] opacity-50 transition-opacity duration-700 group-hover/human:opacity-80 md:block">
              <HumanFigure variant="will" interactive />
            </div>

            {/* Demobats flying across */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute" style={{ animation: "bat-fly 26s linear infinite", animationDelay: "0s" }}><Demobat size={45} /></div>
              <div className="absolute" style={{ animation: "bat-fly 32s linear infinite", animationDelay: "-8s" }}><Demobat size={60} /></div>
              <div className="absolute" style={{ animation: "bat-fly 22s linear infinite", animationDelay: "-15s" }}><Demobat size={36} /></div>
              <div className="absolute" style={{ animation: "bat-fly 38s linear infinite", animationDelay: "-22s" }}><Demobat size={52} /></div>
            </div>

            {/* Hover-triggered lightning flash localized to section */}
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

      {/* LEETCODE — signal transmission */}
      <SectionShell
        id="leetcode"
        label="incoming signal / 07"
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
          {/* scanline overlay */}
          <div className="pointer-events-none absolute inset-0 vhs opacity-60" />
        </motion.a>
      </SectionShell>

      {/* RESUME — classified file */}
      <SectionShell id="resume" label="classified / 08" title="CLASSIFIED FILE">
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
                {decrypting ? <span className="glitch" data-text="DECRYPTING...">DECRYPTING...</span> : "▸ Decrypt Resume"}
              </button>
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
        </div>
      </SectionShell>

      {/* CONTACT */}
      <SectionShell id="contact" label="end of signal / 09" title="OPEN A CHANNEL">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display flicker text-3xl text-blood md:text-4xl">
            kaashvigupta00@gmail.com
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono-glitch text-sm text-muted-foreground">
            <a href="mailto:kaashvigupta00@gmail.com" className="transition-colors hover:text-primary">EMAIL</a>
            <span className="text-primary/40">/</span>
            <a href="tel:+918130823345" className="transition-colors hover:text-primary">+91 8130823345</a>
            <span className="text-primary/40">/</span>
            <span>NEW DELHI</span>
          </div>
          <p className="font-mono-glitch mt-16 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60">
            // transmission ends · friends don't lie
          </p>
        </div>
      </SectionShell>
    </main>
  );
};

export default Index;
