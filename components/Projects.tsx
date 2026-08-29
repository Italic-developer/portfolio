import projectsData from "@/data/Projects.json";
import ProjectCard from "./ui/ProjectCard";
import { Project } from "@/lib/types";
import { Dot } from "lucide-react";

const projects = projectsData as Project[];

export default function Projects() {
  return (
    <div className="flex flex-col gap-3.5 p-10">
      <p className="font-display text-xs text-accent ">02 / Selected Work</p>
      <span className="flex flex-row justify-between items-start">
        <p className="font-display text-6xl font-black">PROJECTS</p>
        <p className="font-mono text-xs text-text-muted flex flex-row items-center p-10 gap-4">
          <span>06 Works</span>
          <Dot
            size={2}
            color="#767676"
            strokeWidth={3}
            absoluteStrokeWidth
            className=""
          />
          <span> 2022-2025</span>
        </p>
      </span>
      <div className="grid w-full grid-cols-2 gap-1">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={project.id} index={index + 1} />
        ))}
      </div>
    </div>
  );
}
