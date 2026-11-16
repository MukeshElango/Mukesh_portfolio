import { useLayoutEffect } from "react";
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
import SoftwareProjects from "./components/SoftwareProjects";
import ScrollCinematics from "./components/ScrollCinematics";
import { MotionConfig } from "framer-motion";

function App() {
  useLayoutEffect(() => {
    const scrollToHashTarget = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      const offset = window.innerWidth < 768 ? 82 : 104;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(top, 0), behavior: "auto" });
    };

    scrollToHashTarget();
    window.addEventListener("hashchange", scrollToHashTarget);
    return () => {
      window.removeEventListener("hashchange", scrollToHashTarget);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative isolate min-h-screen overflow-x-clip text-bone">
        <AmbientField />
        <ScrollCinematics />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <SoftwareProjects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
