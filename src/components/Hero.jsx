import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Mail, Phone } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import mukeshPhoto from "../assets/mukesh.jpg";

const ROLES = ["Data Analyst", "Data Engineer", "BI Analyst", "Software Developer"];

const SocialMark = ({ type }) => {
  if (type === "linkedin") {
    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.2 3.4a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9.3H7v11.3H3.4V9.3Zm5.8 0h3.4v1.5h.1a3.7 3.7 0 0 1 3.3-1.8c3.5 0 4.2 2.3 4.2 5.2v6.4h-3.6v-5.7c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1v5.8H9.2V9.3Z" /></svg>;
  }
  if (type === "github") {
    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.4-4.1-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.4 1.3-3.3-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.7 11.7 0 0 1 6.2 0c2.4-1.6 3.4-1.3 3.4-1.3.7 1.7.3 3 .1 3.3.8.9 1.3 2 1.3 3.3 0 4.7-2.8 5.8-5.5 6.1.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" /></svg>;
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>;
};

function tiltPortrait(event) {
  if (event.pointerType !== "mouse") return;
  const bounds = event.currentTarget.getBoundingClientRect();
  const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
  const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
  event.currentTarget.style.setProperty("--portrait-tilt-x", `${vertical * -4}deg`);
  event.currentTarget.style.setProperty("--portrait-tilt-y", `${horizontal * 5}deg`);
  event.currentTarget.style.setProperty("--portrait-light-x", `${(horizontal + 0.5) * 100}%`);
  event.currentTarget.style.setProperty("--portrait-light-y", `${(vertical + 0.5) * 100}%`);
}

function resetPortraitTilt(event) {
  event.currentTarget.style.setProperty("--portrait-tilt-x", "0deg");
  event.currentTarget.style.setProperty("--portrait-tilt-y", "0deg");
  event.currentTarget.style.setProperty("--portrait-light-x", "50%");
  event.currentTarget.style.setProperty("--portrait-light-y", "50%");
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % ROLES.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section id="hero" className="hero-scene relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-8 pt-24 sm:pb-20 sm:pt-28">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-4 sm:gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="hero-copy relative">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-9 bg-ember" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">M.Sc Data Science / Tamil Nadu, India</span>
          </div>

          <h1 className="mb-4 font-hero text-[3.5rem] font-bold uppercase leading-[0.8] text-bone sm:mb-5 sm:text-[4.75rem] lg:text-[6rem]">
            <span className="block">Mukesh</span>
            <span className="block text-gradient">Elango<span className="text-ember">.</span></span>
          </h1>

          <div className="mb-4 flex min-h-9 items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-mist sm:mb-6 sm:text-base">
            <span className="h-2 w-2 rounded-full bg-ember shadow-[0_0_14px_rgba(230,36,41,0.7)]" />
            <span aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={ROLES[roleIndex]}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.22 }}
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="role-caret" aria-hidden="true" />
          </div>

          <p className="mb-5 max-w-xl text-sm leading-6 text-mist sm:mb-8 sm:text-lg sm:leading-7">
            I turn raw API and business data into reliable datasets, clear analysis, and reporting that supports better decisions.
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-3 sm:mb-9">
            <MagneticButton href="#projects" variant="solid" className="gap-2 px-5 py-2.5 text-[10px] sm:px-6 sm:py-3 sm:text-xs">
              Explore Projects <ArrowUpRight size={15} />
            </MagneticButton>
            <MagneticButton href="/Mukesh_Elango_Resume_.pdf" download variant="ghost" className="gap-2 px-5 py-2.5 text-[10px] sm:px-6 sm:py-3 sm:text-xs">
              <Download size={14} /> Resume
            </MagneticButton>
          </div>

          <div className="flex items-center gap-2.5">
            {[
              { type: "linkedin", href: "https://www.linkedin.com/in/mukesh-elango-120275282", label: "LinkedIn" },
              { type: "github", href: "https://github.com/mukesh-elango", label: "GitHub" },
              { type: "instagram", href: "https://www.instagram.com/_mukesh.15/", label: "Instagram" },
              { icon: Mail, href: "mailto:umamukesh1507@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+919944188623", label: "Phone" },
            ].map(({ icon: Icon, type, href, label }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} aria-label={label} className="social-link">
                {Icon ? <Icon size={16} strokeWidth={1.8} /> : <SocialMark type={type} />}
              </a>
            ))}
          </div>
        </div>

        <div
          onPointerMove={tiltPortrait}
          onPointerLeave={resetPortraitTilt}
          className="hero-portrait relative mx-auto w-full max-w-[360px]"
        >
          <div className="portrait-orbit absolute -inset-4" aria-hidden="true" />
          <div className="portrait-frame relative aspect-[0.88] overflow-hidden border border-white/10 bg-surface shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
            <div className="portrait-light absolute inset-0" aria-hidden="true" />
            <div className="portrait-particles" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <img src={mukeshPhoto} alt="Mukesh Elango" className="relative h-full w-full object-cover object-center" fetchPriority="high" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/90 to-transparent" />
              <div className="hero-portrait-caption absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.24em] text-mint">Portfolio / 2026</div>
                <div className="mt-1 font-display text-lg font-semibold uppercase text-bone">Build. Analyze. Repeat.</div>
              </div>
              <div className="web-emblem flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-ink/45 text-bone backdrop-blur-sm" aria-label="Original web-inspired emblem">
                <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
                  <path d="M16 3v26M4 9l24 14M4 23 28 9M9 4l14 24M23 4 9 28" stroke="currentColor" strokeWidth="1" />
                  <circle cx="16" cy="16" r="2.5" fill="currentColor" />
                  <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth=".8" />
                </svg>
              </div>
            </div>
          </div>
          <div className="hero-stat hero-stat-low absolute -bottom-4 -left-4 rounded-lg border border-white/10 bg-surface/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-28">
            <div className="font-display text-2xl font-bold text-ember">10K<span className="text-signal">+</span></div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-mist">Tracks processed</div>
          </div>
          <div className="hero-stat hero-stat-high absolute -right-3 top-[18%] rounded-lg border border-white/10 bg-surface/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-9">
            <div className="font-display text-2xl font-bold text-bone">100K<span className="text-signal">+</span></div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-mist">Sales records</div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 font-mono text-[9px] uppercase tracking-[0.28em] text-mist">
        <span>Scroll to explore</span><ArrowDown size={13} />
      </a>
    </section>
  );
}
