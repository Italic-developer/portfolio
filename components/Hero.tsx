import { MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[calc(100dvh-76px)] w-full max-w-360 flex-col justify-center gap-16 px-6 py-24 md:flex-row md:items-center md:justify-between md:px-10 md:py-28"
    >
      <div className="flex max-w-4xl flex-col items-start gap-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
          Hello, I&apos;m
        </p>
        <h1 className="max-w-4xl font-display text-[clamp(4.7rem,12.5vw,11rem)] font-black leading-[0.76] tracking-[-0.02em] text-text-primary">
          PATRICK <span className="text-accent">UMEKWE</span>
        </h1>
        <p className="font-sans text-base font-black uppercase tracking-[0.12em] text-text-secondary md:text-lg">
          Software Engineer
        </p>
        <p className="max-w-md font-sans text-sm font-medium leading-7 text-text-muted md:text-base">
          I build web applications, client experiences, and whatever you need.
        </p>
        <a
          href="#projects"
          className="flex flex-row items-center gap-3 bg-accent px-4 py-4 font-mono text-sm text-white transition-all hover:gap-5"
        >
          View My Projects
          <MoveRight size={14} strokeWidth={3} />
        </a>
      </div>
      <div className="flex h-64 w-full max-w-xs flex-col gap-1.5 border border-border-subtle bg-surface/80 p-3 font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted/50 md:mr-[8%] md:mt-16">
        {[
          ["STATUS", "ONLINE"],
          ["PROJECTS", "06"],
          ["STACK", "WEB*"],
          ["MODE", "LEARNING"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex flex-row items-center justify-between border-b border-border-subtle p-4"
          >
            <span>{label}</span>
            <span
              className={
                label === "STATUS"
                  ? "font-display font-black text-accent"
                  : "font-display text-text-primary"
              }
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
