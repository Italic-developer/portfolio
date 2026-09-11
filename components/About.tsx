"use client";

import technologies from "@/data/technologies.json";
import HiddenLogo from "@/components/ui/HiddenLogo";
import { motion } from "motion/react";
import { dispatchStackTrace } from "@/lib/achievements";

const techs = technologies as { name: string }[];

export default function About() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative mx-auto flex w-full max-w-360 scroll-mt-24 flex-col gap-12 px-6 py-24 md:px-10 md:py-28"
    >
      <HiddenLogo />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 18 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        className="border-t border-border-subtle pt-4"
      >
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          04 / Profile
        </p>
        <h2 className="mt-5 font-display text-7xl font-black leading-[0.8] md:text-9xl">
          ABOUT
        </h2>
      </motion.div>
      <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] md:gap-24">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -18 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="max-w-2xl text-balance"
        >
          <p className="font-sans text-lg leading-8 text-text-secondary">
            I build things that live on the web, from full-stack applications
            and developer tools to interactive digital experiences, with a focus
            on clean interfaces and thoughtful engineering.
          </p>
          <p className="mt-7 font-sans leading-7 text-text-muted">
            Currently in university and continuing to sharpen my skills through
            personal projects and experiments. I primarily work with React,
            Next.js, TypeScript, and modern web technologies, while exploring
            backend systems, mobile development, and everything in between.
          </p>
          <p className="mt-6 font-sans leading-7 text-text-muted">
            When I'm not building, I'm usually learning something new,
            experimenting with an idea, or taking apart an existing system to
            understand how it works. I'm interested in building software that is
            useful, well-crafted, and worth coming back to.
          </p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 18 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="pt-1"
        >
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-muted">
            Technology Stack
          </p>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {techs.map((tech) => (
              <motion.button
                type="button"
                key={tech.name}
                onClick={dispatchStackTrace}
                whileHover={{
                  y: -3,
                  borderColor: "var(--accent)",
                  color: "var(--text-primary)",
                }}
                className="border border-border-subtle px-3 py-2 font-mono text-xs text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-text-primary"
              >
                {tech.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
