"use client";

import { Circle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { sectionEvent } from "@/lib/achievements";

const navigationItems = [
  ["HOME", "home"],
  ["PROJECTS", "projects"],
  ["ACHIEVEMENTS", "achievements"],
  ["ABOUT", "about"],
  ["CONTACT", "contact"],
] as const;

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const currentPosition = window.scrollY + 120;
      const visibleSection = navigationItems
        .map(([, section]) => document.getElementById(section))
        .filter((section): section is HTMLElement => Boolean(section))
        .filter((section) => section.offsetTop <= currentPosition)
        .at(-1);

      if (visibleSection) setActiveSection(visibleSection.id);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  const navigateTo = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    window.dispatchEvent(new CustomEvent(sectionEvent, { detail: section }));
  };

  return (
    <nav className="sticky top-0 z-20 mx-auto flex w-full max-w-360 flex-row items-center justify-between border-b border-border-subtle bg-background/90 px-6 py-5 backdrop-blur-md md:px-10">
      <button
        type="button"
        onClick={() => navigateTo("home")}
        className="font-display text-xl tracking-widest transition-opacity hover:opacity-65"
      >
        <span className="font-bold text-accent">P</span>CU
      </button>
      <ul className="hidden flex-row gap-3 font-mono text-[10px] font-black uppercase text-text-muted sm:gap-5 lg:flex lg:gap-8">
        {navigationItems.map(([label, section]) => (
          <li key={section}>
            <button
              type="button"
              onClick={() => navigateTo(section)}
              className={`border-b-2 pb-1 transition-colors hover:text-accent ${activeSection === section ? "border-accent text-accent" : "border-transparent"}`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
        className="border border-border-subtle p-2 text-text-muted transition-colors hover:border-accent hover:text-accent lg:hidden"
      >
        <span className="block h-px w-5 bg-current" />
        <span className="mt-1.5 block h-px w-5 bg-current" />
      </button>
      <button
        type="button"
        onClick={() => navigateTo("contact")}
        className="hidden flex-row items-center gap-2 font-display text-sm uppercase text-text-muted transition-colors hover:text-text-primary sm:flex"
      >
        <Circle size={8} fill="currentColor" className="text-accent" />
        Online
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full border-b border-border-subtle bg-background px-6 py-5 lg:hidden"
          >
            <div className="flex flex-col gap-5 font-mono text-xs uppercase text-text-muted">
              {navigationItems.map(([label, section], index) => (
                <motion.button
                  key={section}
                  type="button"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  onClick={() => navigateTo(section)}
                  className={`w-fit border-b-2 pb-1 text-left transition-colors hover:text-accent ${activeSection === section ? "border-accent text-accent" : "border-transparent"}`}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
