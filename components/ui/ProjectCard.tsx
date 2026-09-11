"use client";

import { Project } from "@/lib/types";
import { motion } from "motion/react";
import { ArrowUpRight, SquareArrowOutUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { dispatchAchievement, dispatchProjectOpened } from "@/lib/achievements";

const previewColors = [
  "#291323",
  "#13212b",
  "#252013",
  "#172820",
  "#261929",
  "#172326",
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <motion.div
        role="button"
        tabIndex={0}
        onClick={() => {
          setIsOpen(true);
          dispatchAchievement("PROJECT HUNTER");
          dispatchProjectOpened(project.id);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            setIsOpen(true);
            dispatchAchievement("PROJECT HUNTER");
            dispatchProjectOpened(project.id);
          }
        }}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.55,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
        className="group relative m-1 flex w-full flex-col overflow-clip border-2 border-muted/50 bg-surface shadow-background transition-colors duration-500 hover:border-primary/60 hover:shadow-2xl"
      >
        <div
          className="relative h-60 overflow-hidden"
          style={{
            backgroundColor: previewColors[(index - 1) % previewColors.length],
          }}
        >
          <p className="absolute left-5 top-5 z-10 font-mono text-xs text-muted-foreground transition-colors duration-500 ease-in-out group-hover:text-accent">
            {index < 10 ? "0" + index : index}
          </p>
          <p className="absolute right-5 top-5 z-10 font-mono text-xs text-muted-foreground">
            {project.year}
          </p>
          <motion.img
            src={project.image}
            alt=""
            aria-hidden="true"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.style.visibility = "hidden";
            }}
            className="h-full w-full object-cover saturate-0 transition-[filter] duration-500 group-hover:saturate-100"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex flex-row items-center justify-between font-display text-3xl font-black ease-in-out">
            <h2>{project.name}</h2>
            <motion.span
              whileHover={{ x: 3, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <SquareArrowOutUpRight
                size={24}
                strokeWidth={2.5}
                absoluteStrokeWidth
                className="text-foreground/50 transition-colors duration-500 group-hover:text-accent"
              />
            </motion.span>
          </div>

          <p className="mt-2 max-w-2xl font-sans text-text-secondary">
            {project.shortDescription}
          </p>

          <div className="mt-auto pt-4">
            <div className="flex flex-row flex-wrap items-center gap-2 pr-2">
              {project.technologies.map((tech) => (
                <p
                  key={tech}
                  className="border border-muted-foreground/25 p-1 px-2 font-mono text-xs text-text-secondary/70 transition-colors duration-500 group-hover:border-accent group-hover:text-text-primary"
                >
                  {tech}
                </p>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-border-subtle pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                {project.role}
              </span>
              <span className="flex shrink-0 items-center font-mono text-xs uppercase text-text-muted transition-colors group-hover:text-accent">
                Open ↗
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
        >
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="absolute right-0 top-[69px] h-[calc(100%-69px)] w-full max-w-2xl overflow-y-auto border-l border-border-subtle bg-background p-6 md:top-0 md:h-full md:p-10"
          >
            <div className="sticky top-0 z-20 -mx-6 -mt-6 mb-6 flex justify-end bg-background/95 p-4 backdrop-blur-md md:-mx-10 md:-mt-10">
              <button
                type="button"
                aria-label="Close project details"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 border border-border-subtle px-3 py-2 font-mono text-xs uppercase text-text-muted transition-colors hover:border-accent hover:text-accent"
              >
                Close
                <X size={18} />
              </button>
            </div>
            <div
              className="relative mt-12 h-64 overflow-hidden"
              style={{
                backgroundColor:
                  previewColors[(index - 1) % previewColors.length],
              }}
            >
              <img
                src={project.image}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.visibility = "hidden";
                }}
              />
              <span className="absolute bottom-5 left-5 font-mono text-sm text-accent">
                {index.toString().padStart(2, "0")}
              </span>
            </div>
            <div className="mt-8 flex items-start justify-between gap-6 border-b border-border-subtle pb-6">
              <h2 className="font-display text-5xl font-black uppercase">
                {project.name}
              </h2>
              <span className="font-mono text-xs text-text-muted">
                {project.year}
              </span>
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {project.role}
            </p>
            <p className="mt-6 font-sans leading-7 text-text-secondary">
              {project.longDescription}
            </p>
            <div className="mt-8">
              <p className="font-mono text-xs uppercase text-text-muted">
                Key Features
              </p>
              <ul className="mt-4 space-y-3 font-sans text-sm text-text-secondary">
                {project.keyFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="text-accent">—</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-border-subtle px-3 py-2 font-mono text-xs text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-10 flex gap-3">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-accent px-4 py-3 font-mono text-xs text-white transition-colors hover:bg-accent-hover"
                >
                  Live Demo <ArrowUpRight size={14} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-border-subtle px-4 py-3 font-mono text-xs text-text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  GitHub <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </motion.aside>
        </motion.div>
      )}
    </>
  );
}

export default ProjectCard;
