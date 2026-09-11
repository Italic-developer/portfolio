"use client";

import projectsData from "@/data/Projects.json";
import ProjectCard from "./ui/ProjectCard";
import { Project } from "@/lib/types";
import { motion } from "motion/react";

const projects = projectsData as Project[];

export default function Projects() {
  const years = projects.map((project) => project.year);

  return (
    <motion.section
      id="projects"
      className="mx-auto flex w-full max-w-360 scroll-mt-24 flex-col gap-3.5 px-6 py-24 md:px-10 md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, x: -16 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.45 }}
        className="font-display text-xs text-accent"
      >
        02 / Selected Work
      </motion.p>
      <motion.span
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="flex flex-col items-start justify-between gap-3 md:flex-row"
      >
        <h2 className="font-display text-6xl font-black">PROJECTS</h2>
        <p className="flex flex-row items-center gap-4 pt-3 font-mono text-xs text-text-muted md:pr-2 md:pt-10">
          <span>{projects.length.toString().padStart(2, "0")} Works</span>
          <span className="text-accent">/</span>
          <span>
            {Math.min(...years)}-{Math.max(...years)}
          </span>
        </p>
      </motion.span>
      <motion.div
        variants={{ hidden: {}, visible: {} }}
        className="grid w-full grid-cols-1 gap-2 md:grid-cols-2"
      >
        {projects.map((project, index) => (
          <ProjectCard project={project} key={project.id} index={index + 1} />
        ))}
      </motion.div>
    </motion.section>
  );
}
