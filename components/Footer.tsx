import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative z-10 flex flex-col gap-4 border-t border-border-subtle px-6 py-8 font-mono text-xs text-text-muted md:flex-row md:items-center md:justify-between md:px-10"
    >
      <span>© {new Date().getFullYear()} Patrick Umekwe</span>
      <span>Build_2026.09 · Online</span>
      <a
        href="#home"
        className="flex items-center gap-2 transition-colors hover:text-accent"
      >
        Back to top
        <ArrowUp size={14} />
      </a>
    </footer>
  );
}
