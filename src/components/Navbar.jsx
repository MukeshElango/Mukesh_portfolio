import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { AlignRight, X } from "lucide-react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "software-projects", label: "Software" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    const offset = window.innerWidth < 768 ? 82 : 104;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.history.pushState(null, "", `#${id}`);
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    window.scrollTo({ top, behavior });
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
    if (!open) return undefined;
    const previousFocus = document.activeElement;
    const focusable = [...document.querySelectorAll("[role='dialog'] a, [role='dialog'] button")];
    focusable[0]?.focus();
    document.body.style.overflow = "hidden";
    const handleDialogKeys = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
      if (event.key === "Tab" && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handleDialogKeys);
    return () => {
      window.removeEventListener("keydown", handleDialogKeys);
      document.body.style.overflow = "";
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [open]);

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
      <motion.div className="scroll-progress fixed inset-x-0 top-0 z-[70] h-[2px] origin-left" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <motion.header
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className={`nav-glass relative flex items-center justify-between overflow-hidden rounded-full px-4 sm:px-6 transition-all duration-500 ${
              scrolled ? "py-2.5 shadow-[0_16px_42px_rgba(23,36,29,0.12)]" : "py-3"
            } ${scrolled ? "nav-scrolled" : ""}`}
          >
              <a href="#hero" className="font-display text-xl font-semibold tracking-tight text-bone">
                MUKESH ELANGO
              </a>

            <nav className="hidden md:flex items-center gap-0">
              {LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(l.id);
                  }}
                  className={`nav-link relative px-2 xl:px-3 py-2 text-[11px] xl:text-[12px] font-mono tracking-[0.12em] uppercase transition-colors duration-300 ${
                    active === l.id ? "text-bone" : "text-mist hover:text-bone"
                  }`}
                  aria-current={active === l.id ? "location" : undefined}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full border border-ember/30 bg-ember/10"
                      transition={{ type: "spring", stiffness: 300, damping: 34, mass: 0.8 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
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
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
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
            <nav id="mobile-navigation" className="flex flex-col items-center gap-2 px-6 pt-8">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(l.id);
                  }}
                  initial={{ y: 12 }}
                  animate={{ y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-display text-3xl py-3 text-bone"
                  aria-current={active === l.id ? "location" : undefined}
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
