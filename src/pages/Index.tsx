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

type Project = {
  name: string;
  tag: string;
  stack: string[];
  lines: string[];
  repo?: string;
};

const projects: Project[] = [
  {
    name: "MindMate",
    tag: "AI · Mental Wellness",
    stack: ["Next.js", "AI", "Tailwind"],
    lines: [
      "Digital mental wellness companion for emotional expression and self-reflection.",
      "Accessible coping tools, mood journaling, and AI-guided check-ins.",
    ],
    repo: "https://github.com/kaashvi5/v0-mental-health-companion",
  },
  {
    name: "FraudShield",
    tag: "Security · Web",
    stack: ["React", "Node", "Heuristics"],
    lines: [
      "Web app that detects and prevents online fraud through activity analysis.",
      "Intuitive UI to flag phishing attempts and raise user awareness.",
    ],
    repo: "https://github.com/kaashvi5/fraud-shield",
  },
  {
    name: "SkillSwap",
    tag: "Community · Marketplace",
    stack: ["React", "Auth", "DB"],
    lines: [
      "Peer-to-peer skill exchange — trade what you know for what you want to learn.",
      "Profiles, matchmaking, and session scheduling — learning, free of cost.",
    ],
    repo: "https://github.com/kaashvi5/skill-swap-ex",
  },
  {
    name: "VMS · Volunteer Management",
    tag: "Events · Ops",
    stack: ["React", "REST API", "DB"],
    lines: [
      "Manage and hire volunteers for events end-to-end.",
      "Role assignment, attendance, and event analytics in one dashboard.",
    ],
    repo: "https://github.com/kaashvi5/VMS",
  },
  {
    name: "MediVault",
    tag: "Blockchain · Health",
    stack: ["Solidity", "Web3", "React"],
    lines: [
      "Secure medical record storage using blockchain-based encryption.",
      "Decentralized access control ensuring data privacy and integrity.",
    ],
    repo: "https://github.com/aaneya/huntrix",
  },
];

const certifications = [
  "Data Science Methodology", "IBM Cloud Essentials", "Elite Code (Open Source)",
  "Prompt Engineering", "Data Privacy Fundamentals", "GirlScript Summer of Code",
  "Data Analysis with Python", "AWS Cloud Foundations", "Machine Learning Basics",
  "Generative AI Fundamentals", "Frontend Development", "Python for Everybody",
];

const openSource = [
  { org: "ECWoC", full: "Eclectic Community Winter of Code", roles: ["Contributor", "Campus Ambassador"] },
  { org: "SSoC", full: "Social Summer of Code", roles: ["Contributor", "Mentor"] },
  { org: "GSSoC", full: "GirlScript Summer of Code", roles: ["Contributor"], tracks: ["Open Source", "AI Agents"] },
  { org: "NSoC", full: "Nexus Spring of Code", roles: ["Contributor"] },
];

const Index = () => {
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
          {["hero", "about", "skills", "projects", "human", "leetcode", "profiles", "opensource", "certs", "contact"].map((s) => (
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 40, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-sm border border-primary/30 bg-gradient-to-b from-card/80 to-background/60 p-6 backdrop-blur-sm transition-all hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)]"
              >
                <div className="absolute right-3 top-3 opacity-30 transition-opacity group-hover:opacity-100">
                  <Demobat size={36} />
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-mono-glitch text-xs text-primary/70">// MISSION_{num}</p>
                  <p className="font-mono-glitch text-[10px] uppercase tracking-widest text-muted-foreground">{p.tag}</p>
                </div>
                <h3 className="font-display mt-2 text-2xl uppercase tracking-wider text-foreground">{p.name}</h3>
                <div className="mt-3 h-px w-full bg-gradient-to-r from-primary/60 to-transparent" />
                <ul className="mt-4 flex-1 space-y-2">
                  {p.lines.map((l) => (
                    <li key={l} className="flex gap-2 text-sm text-foreground/80">
                      <span className="text-primary">▸</span>{l}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="font-mono-glitch rounded-sm border border-border bg-background/60 px-2 py-0.5 text-[10px] uppercase tracking-widest text-foreground/70">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono-glitch inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary transition-colors hover:text-primary-foreground hover:bg-primary px-2 py-1 rounded-sm border border-primary/40"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.93 10.93 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"/>
                      </svg>
                      view code
                    </a>
                  ) : (
                    <span className="font-mono-glitch text-[10px] uppercase tracking-widest text-muted-foreground/60">private repo</span>
                  )}
                  <span className="font-mono-glitch text-[10px] uppercase tracking-widest text-muted-foreground/70">_{num}</span>
                </div>
              </motion.article>
            );
          })}
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

      {/* DEV PROFILES — replaces Resume vault */}
      <SectionShell id="profiles" label="developer signal / 06" title="DEV PROFILES">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* GitHub card */}
            <a
              href="https://github.com/kaashvi5"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-sm border-2 border-primary/40 bg-black/70 p-7 backdrop-blur-sm transition-all hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.35)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.93 10.93 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"/>
                  </svg>
                  <div>
                    <p className="font-mono-glitch text-[10px] uppercase tracking-widest text-primary/70">// source.repository</p>
                    <h3 className="font-display text-xl uppercase tracking-wider text-foreground">GitHub</h3>
                  </div>
                </div>
                <span className="font-mono-glitch text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">↗ open</span>
              </div>
              <div className="mt-5 font-mono-glitch space-y-1 text-sm">
                <p className="text-muted-foreground">&gt; user: <span className="text-foreground">kaashvi5</span></p>
                <p className="text-muted-foreground">&gt; status: <span className="text-primary">PUSHING_COMMITS</span></p>
                <p className="text-muted-foreground">&gt; url: github.com/kaashvi5</p>
              </div>
              <div className="pointer-events-none absolute inset-0 vhs opacity-50" />
            </a>

            {/* LinkedIn card */}
            <a
              href="https://www.linkedin.com/in/kaashvi-gupta/"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-sm border-2 border-primary/40 bg-black/70 p-7 backdrop-blur-sm transition-all hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.35)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/>
                  </svg>
                  <div>
                    <p className="font-mono-glitch text-[10px] uppercase tracking-widest text-primary/70">// professional.network</p>
                    <h3 className="font-display text-xl uppercase tracking-wider text-foreground">LinkedIn</h3>
                  </div>
                </div>
                <span className="font-mono-glitch text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">↗ open</span>
              </div>
              <div className="mt-5 font-mono-glitch space-y-1 text-sm">
                <p className="text-muted-foreground">&gt; profile: <span className="text-foreground">kaashvi-gupta</span></p>
                <p className="text-muted-foreground">&gt; status: <span className="text-primary">OPEN_TO_WORK</span></p>
                <p className="text-muted-foreground">&gt; url: linkedin.com/in/kaashvi-gupta</p>
              </div>
              <div className="pointer-events-none absolute inset-0 vhs opacity-50" />
            </a>
          </div>

          <AlphabetLights onSolve={solve} />
          <VHSRewind onSolve={solve} />
          <DemogorgonBloom onSolve={solve} />
        </div>
      </SectionShell>

      {/* OPEN SOURCE */}
      <SectionShell
        id="opensource"
        label="contributor signal / 07"
        title="OPEN SOURCE OPS"
        background={<><div className="absolute inset-0 vhs opacity-40" /><Particles count={8} /></>}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {openSource.map((p, i) => (
            <motion.div
              key={p.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-sm border border-primary/30 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-blood">{p.org}</h3>
                  <p className="font-mono-glitch mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{p.full}</p>
                </div>
                <span className="font-mono-glitch text-[10px] uppercase tracking-widest text-primary/60">// node_{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.roles.map((r) => (
                  <span key={r} className="font-mono-glitch rounded-sm border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-widest text-primary">
                    {r}
                  </span>
                ))}
              </div>
              {p.tracks && (
                <div className="mt-3">
                  <p className="font-mono-glitch text-[10px] uppercase tracking-widest text-muted-foreground">tracks</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {p.tracks.map((t) => (
                      <span key={t} className="font-mono-glitch rounded-sm border border-border bg-background/60 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-foreground/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </SectionShell>

      {/* CERTIFICATIONS — expanded vault */}
      <SectionShell
        id="certs"
        label="recovered files / 08"
        title="CERTIFICATIONS VAULT"
        background={<><div className="absolute inset-0 vhs opacity-40" /><Particles count={6} /></>}
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group flex items-start gap-3 rounded-sm border border-primary/30 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary hover:bg-card/70"
            >
              <span className="font-mono-glitch mt-0.5 text-xs text-primary">▸</span>
              <div className="flex-1">
                <p className="font-display text-sm uppercase tracking-wider text-foreground">{c}</p>
                <p className="font-mono-glitch text-[10px] uppercase tracking-widest text-muted-foreground">cert_{String(i + 1).padStart(3, "0")} · verified</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Public speaker mini section */}
        <div className="relative mt-12 overflow-hidden rounded-sm border-2 border-primary/40 bg-gradient-to-br from-card/80 to-background/60 p-6 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="font-display text-5xl leading-none text-blood">5+</div>
            <div className="flex-1">
              <p className="font-mono-glitch text-[10px] uppercase tracking-widest text-primary/70">// broadcast.log</p>
              <h3 className="font-display mt-1 text-2xl uppercase tracking-wider text-foreground">Public Speaker</h3>
              <p className="mt-2 text-sm text-foreground/80">
                Delivered <span className="text-primary">5+ public speaking sessions</span> across campus events,
                tech communities, and student programs — and actively looking for more stages to broadcast from.
              </p>
              <p className="font-mono-glitch mt-3 text-[10px] uppercase tracking-widest text-primary/70">
                status: <span className="text-primary">OPEN_FOR_INVITES</span>
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 vhs opacity-50" />
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
