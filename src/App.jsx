import AmbientField from "./components/AmbientField";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useLayoutEffect } from "react";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.history.replaceState(null, "", "#hero");
    } catch {
      window.location.hash = "#hero";
    }
    const el = document.getElementById("hero");
    if (el && el.scrollIntoView) {
      window.requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);
  return (
    <div className="relative min-h-screen text-bone">
      <ParticleBackground />
      <AmbientField />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
