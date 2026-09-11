import About from "@/components/About";
import Achievement from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[60vh] hero-glow" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Achievement />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
