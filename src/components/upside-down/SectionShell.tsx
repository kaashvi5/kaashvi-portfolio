import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  background?: ReactNode;
  className?: string;
}

const SectionShell = ({ id, label, title, children, background, className = "" }: Props) => {
  return (
    <section id={id} className={`relative overflow-hidden py-28 md:py-36 ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-fog" />
      {background}
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono-glitch mb-3 text-xs uppercase tracking-[0.4em] text-primary/70">
            // {label}
          </p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-wider text-foreground md:text-6xl">
            <span className="text-blood">{title.split(" ")[0]}</span>{" "}
            <span>{title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <div className="mt-2 h-px w-32 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
        </motion.div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
};

export default SectionShell;
