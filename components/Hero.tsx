import { MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col  ">
      <div className="flex flex-row justify-around items-center h-dvh">
        {/* 1st section */}{" "}
        <div className="flex flex-col justify-between items-start gap-5 -mt-64">
          <h3 className="font-mono text-sm text-text-muted">Hello I'm</h3>
          <h1 className="font-display text-[9.2rem] leading-32 text-text-primary font-[1000] font-stretch-200% w-sm">
            PATRICK <span className="text-accent"> UMEK</span>WE
          </h1>
          <h1 className="font-sans text-lg text-text-secondary font-black">
            Software Engineer
          </h1>
          <div className="mb-2 font-mono font-medium text-text-muted">
            <p>
              I Build Web Applications, client Experiences and whatever you need
            </p>
            <p>Don't believe me </p>
          </div>
          <button className="bg-accent transition-all font-mono ">
            <a
              href="#projects"
              className="gap-3 hover:gap-5 px-4 py-4 flex flex-row items-center"
            >
              View My Projects
              <MoveRight
                size={14}
                color="#fafafa"
                strokeWidth={3}
                absoluteStrokeWidth
                className="mt-0.5"
              />
            </a>
          </button>
        </div>
        {/* 2nd section */}
        <div className="flex flex-col h-64 w-56 -mt-32  bg-surface text-xs border-2 border-border-subtle gap-1.5 p-4 font-mono text-text-muted/50">
          <div className="flex flex-row border-b-2 border-border-subtle justify-between  p-4 items-center">
            <span>STATUS</span>
            <span className="text-accent font-black font-display">ONLINE</span>
          </div>
          <div className="flex flex-row border-b-2 border-border-subtle justify-between p-4 items-center">
            <span>PROJECTS</span>
            <span className="text-text-primary font-display">06</span>
          </div>
          <div className="flex flex-row border-b-2 border-border-subtle justify-between  p-4 items-center">
            <span>STACK</span>
            <span className="text-text-primary font-display">WEB*</span>
          </div>
          <div className="flex flex-row border-b-2 border-border-subtle justify-between p-4 items-center">
            <span>MODE</span>
            <span className="text-text-primary font-display">LEARNING</span>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
