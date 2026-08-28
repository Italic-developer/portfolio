import { Project } from "@/lib/types";
import { SquareArrowOutUpRight } from "lucide-react";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className={`group ${
        index % 2 === 0 ? "hover:-rotate-3" : "hover:rotate-3"
      } transition-transform  ease-in-out duration-300 flex flex-col relative m-6 bg-surface w-2xl border-2 border-muted/50 overflow-clip hover:border-primary/60`}
    >
      <div className="relative h-60 overflow-hidden">
        <p className="absolute top-5 left-5 font-mono text-xs text-muted-foreground  ease-in-out transition-colors duration-500 group-hover:text-accent z-10">
          {index < 10 ? "0" + index : index}
        </p>
        <p className="absolute top-5 right-5 font-mono text-xs text-muted-foreground z-10">
          {project.year}
        </p>
        <img
          className="w-full h-full object-cover ease-in-out saturate-0 transition-transform duration-500 group-hover:saturate-100 group-hover:scale-110"
          src={
            "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=900&h=500&fit=crop&auto=format"
          }
          alt={`A preview image of ${project.name}`}
        />
      </div>

      <div className="flex flex-col flex-1 p-4">
        <div className="flex flex-row items-center justify-between ease-in-out font-display text-3xl font-black">
          <h2>{project.name}</h2>
          <SquareArrowOutUpRight
            size={24}
            strokeWidth={2.5}
            absoluteStrokeWidth
            className="text-foreground/50  transition-all duration-500 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
        </div>

        <p className="font-sans text-muted-foreground mt-2">
          {project.shortDescription}
        </p>

        <div className="flex flex-row flex-wrap items-center gap-2 mt-auto pt-4">
          {project.technologies.map((tech) => (
            <p
              key={tech}
              className="border-muted-foreground/25 border p-1 px-2 font-mono text-muted-foreground/25 text-xs group-hover:border-accent group-hover:text-text-secondary/50"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
