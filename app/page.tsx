"use client";
import About from "@/components/About";
import Achievement from "@/components/Achievements";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useState } from "react";

export default function Home() {
  const [homeVisible, setHomeVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [achievementsVisible, setAchievementsVisible] = useState(false);
  return (
    <div>
      <div className="fixed inset-x-0 bottom-0 h-[60vh] pointer-events-none hero-glow z-0"></div>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Achievement />
      </main>
    </div>
  );
}
