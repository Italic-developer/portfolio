import technologies from "@/data/technologies.json";
const techs = technologies as { name: string }[];
export default function About() {
  return (
    <div className="h-[90dvh] flex flex-row justify-center items-center gap-3">
      <div className="flex flex-col text-balance w-[37dvw]">
        <p className="font-mono text-xs text-accent -ml-1 mb-3">03 / PROFILE</p>
        <p className="font-display text-8xl font-black">ABOUT</p>
        <p className="font-sans text-text-secondary text-lg text-balance w-[37dvw]">
          I build things that live on the web, from full-stack applications and
          developer tools to interactive digital experiences, with a focus on
          clean interfaces and thoughtful engineering.
        </p>
        <p className="my-6 font-sans text-text-muted  ">
          Currently in university and continuing to sharpen my skills through
          personal projects and experiments. I primarily work with React,
          Next.js, TypeScript, and modern web technologies, while exploring
          backend systems, mobile development, and everything in between.
        </p>
        <p className=" font-sans text-text-muted  ">
          When I'm not building, I'm usually learning something new,
          experimenting with an idea, or taking apart an existing system to
          understand how it works. I'm interested in building software that is
          useful, well-crafted, and worth coming back to.
        </p>
      </div>
      <div>
        <p className="text-muted-foreground/60 mb-2 font-light text-lg font-display ">
          Technologies
        </p>
        <div className="grid grid-cols-6 gap-1.5">
          {techs.map((tech) => (
            <p className="   border-muted-foreground/25 border p-1 px-2 font-display text-muted-foreground/25 transition-all duration-300 ease-in-out text-sm hover:border-accent hover:text-text-primary">
              {tech.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
