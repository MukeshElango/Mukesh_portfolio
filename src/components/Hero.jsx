import { motion } from "framer-motion";
import { Download, Mail, Monitor, Phone } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import mukeshPhoto from "../assets/mukesh.jpg";

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </svg>
);

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-14 px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-14 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-ember/90" />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-ember/80">
              Data Science graduate
            </span>
          </motion.div>

          <motion.h1 variants={item} className="font-display leading-[1.04] mb-8 overflow-visible">
            <span className="block text-[clamp(3rem,5.7vw,4.65rem)] font-semibold tracking-tight text-bone uppercase">
              Mukesh
            </span>
            <span className="block pb-2 text-[clamp(3rem,5.7vw,4.65rem)] font-semibold tracking-tight text-ember">
            
            </span>
          </motion.h1>

          <motion.div variants={item} className="flex flex-wrap gap-2 mb-6">
            {["Data Analyst", "Software Developer"].map((label) => (
              <span key={label} className="web-chip text-[13px]">
                {label}
              </span>
            ))}
          </motion.div>

          <motion.p variants={item} className="text-[15px] leading-relaxed text-mist/80 max-w-lg mb-8">
Data Analyst & Full-Stack Developer skilled in transforming data into actionable insights and building scalable web solutions that solve real-world problems          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-2.5 mb-8">
            <MagneticButton href="#projects" variant="ghost" className="px-2.5 py-1.5 text-[11px] gap-1.5">
              <Monitor size={12} strokeWidth={2} />
              View Projects
            </MagneticButton>
            <MagneticButton
              href="/Mukesh_Elango_Resume_.pdf"
              download
              variant="solid"
              className="px-2.5 py-1.5 text-[11px] gap-1.5"
            >
              <Download size={11} strokeWidth={2.5} />
              Download Resume
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3">
            {[
              { icon: LinkedinIcon, href: "https://www.linkedin.com/in/mukesh-elango-120275282", label: "LinkedIn" },
              { icon: GithubIcon, href: "https://github.com/mukesh-elango", label: "GitHub" },
              { icon: InstagramIcon, href: "https://www.instagram.com/_mukesh.15/", label: "Instagram" },
              { icon: Mail, href: "mailto:umamukesh1507@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+919944188623", label: "Phone" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full glass border border-white/15 bg-white/8 text-bone hover:text-ember-soft hover:border-ember/50 transition-colors duration-300"
              >
                <Icon size={16} strokeWidth={2} className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto lg:mx-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[230px] sm:w-[270px] lg:w-[310px] xl:w-[330px] mx-auto"
          >
            <div className="absolute inset-0 rounded-[2rem] border border-ember/20 bg-ember/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-ember/30 bg-[#09080f]/80 shadow-[0_32px_80px_rgba(232,35,43,0.14)]">
              <div className="absolute -left-4 top-1/3 w-4 h-4 rounded-full bg-ember/90 shadow-[0_0_32px_rgba(232,35,43,0.55)]" />
              <div className="aspect-[4/5] overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(232,35,43,0.14),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(7,7,12,0.88))]">
                <img
                  src={mukeshPhoto}
                  alt="Mukesh Elango"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 scroll-indicator">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-mist/60">Scroll</span>
        <div className="w-6 h-10 flex items-start justify-center">
          <div className="w-px h-8 bg-gradient-to-b from-ember/60 to-transparent mr-2" />
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  );
}
