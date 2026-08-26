import { Dot } from 'lucide-react';


function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center px-3 py-6 pl-5 sticky">
        <span className="flex flex-row gap-1 hover:opacity-65 font-display">
            <span className="text-accent font-bold ">P</span>C U</span>
        <ul className="flex flex-row gap-8 text-muted opacity-70 font-mono text-sm ">
            <li className="active:text-accent active:underline decoration-accent"><a href="#">Home</a></li>
            <li className="active:text-accent active:underline decoration-accent">Projects</li>
            <li className="active:text-accent active:underline decoration-accent">About</li>
            <li className="active:text-accent active:underline decoration-accent">Contact</li>
            <li className="active:text-accent active:underline decoration-accent">Achievements</li>
        </ul>
        <span className="flex flex-row gap-0.5 items-center justify-center-safe font-display opacity-50 text-base">
            <Dot size={48} color="#e5092f" strokeWidth={3} absoluteStrokeWidth className="animate-pulse" />
            <span>Online</span>
        </span>
    </nav>
  )
}

export default Navbar
