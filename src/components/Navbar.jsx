import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlignRight, X } from "lucide-react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    const offset = window.innerWidth < 768 ? 82 : 104;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.history.pushState(null, "", `#${id}`);
    window.scrollTo({ top, behavior: "smooth" });
    setActive(id);
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`nav-glass relative flex items-center justify-between overflow-hidden rounded-full px-5 sm:px-6 transition-all duration-500 ${
              scrolled ? "py-2.5 shadow-[0_22px_90px_rgba(0,0,0,0.42)]" : "py-3"
            }`}
          >
              <a href="#hero" className="font-display text-xl font-semibold tracking-tight text-bone">
                MUKESH ELANGO
              </a>

            <nav className="hidden md:flex items-center gap-1">
              {LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(l.id);
                  }}
                  className={`relative px-4 py-2 text-[12px] font-mono tracking-[0.28em] uppercase transition-colors duration-300 ${
                    active === l.id ? "text-bone" : "text-mist hover:text-bone"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full border border-white/20 bg-white/[0.10] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]"
                      transition={{ type: "spring", stiffness: 300, damping: 34, mass: 0.8 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full glass text-bone"
              aria-label="Open menu"
            >
              <AlignRight size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] glass-strong md:hidden"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full glass text-bone"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-2 px-6 pt-8">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(l.id);
                  }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-display text-3xl py-3 text-bone"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
