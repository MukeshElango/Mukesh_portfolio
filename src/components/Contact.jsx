import Reveal from "./Reveal";
import { ArrowUpRight, Download, Mail, MapPin, PhoneCall } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...props}>
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.43 9.8 8.2 11.38.6.11.8-.26.8-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.30 3.49 1 .11-.77.42-1.31.76-1.60-2.67-.30-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.30-.53-1.52.12-3.17 0 0 1.01-.32 3.30 1.23A11.51 11.51 0 0112 5.80c1.02 0 2.05.14 3.01.40 2.29-1.55 3.30-1.23 3.30-1.23.65 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.60-2.81 5.62-5.47 5.92.43.37.82 1.10.82 2.22v3.29c0 .32.19.69.80.58C20.57 21.80 24 17.30 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <path d="M7 7h.01" />
    <path d="M16 11.37a4 4 0 1 1-7.99.62 4 4 0 0 1 7.99-.62Z" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="contact-section relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="contact-web absolute right-[-5rem] top-[-8rem] h-[34rem] w-[34rem]" aria-hidden="true" />
      <div className="contact-light absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex items-center gap-3">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono section-number">07</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist">Open to data roles / Tamil Nadu, India</span>
          </div>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <Reveal delay={0.08}>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-signal">Good data starts with a conversation</p>
            <h2 className="max-w-3xl font-display text-6xl font-bold uppercase leading-[.86] text-bone sm:text-7xl lg:text-8xl">
              Let&apos;s make
              <span className="contact-title-accent block">data matter.</span>
            </h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-mist sm:text-lg">
              Building reliable pipelines and thoughtful analysis for teams that want to make better decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="mailto:umamukesh1507@gmail.com" variant="solid" className="gap-2 px-6 py-3 text-xs">
                <Mail size={15} /> Get in touch <ArrowUpRight size={15} />
              </MagneticButton>
              <MagneticButton href="/Mukesh_Elango_Resume_.pdf" download variant="ghost" className="gap-2 px-6 py-3 text-xs">
                <Download size={15} /> Resume
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="contact-details self-end">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-mist">Contact coordinates</div>
            <a href="mailto:umamukesh1507@gmail.com" className="contact-row group">
              <span className="contact-row-icon"><Mail size={17} /></span>
              <span className="min-w-0 flex-1">
                <span className="contact-row-label">Email</span>
                <span className="contact-row-value">umamukesh1507@gmail.com</span>
              </span>
              <ArrowUpRight size={17} className="contact-row-arrow" />
            </a>
            <a href="tel:+919944188623" className="contact-row group">
              <span className="contact-row-icon"><PhoneCall size={17} /></span>
              <span className="min-w-0 flex-1">
                <span className="contact-row-label">Phone</span>
                <span className="contact-row-value">+91 99441 88623</span>
              </span>
              <ArrowUpRight size={17} className="contact-row-arrow" />
            </a>
            <div className="contact-row contact-location">
              <span className="contact-row-icon"><MapPin size={17} /></span>
              <span className="min-w-0 flex-1">
                <span className="contact-row-label">Location</span>
                <span className="contact-row-value">Tamil Nadu, India</span>
              </span>
            </div>
            <div className="contact-socials mt-7 flex flex-wrap gap-3">
              {[
                { icon: LinkedinIcon, href: "https://www.linkedin.com/in/mukesh-elango-120275282", label: "LinkedIn" },
                { icon: GithubIcon, href: "https://github.com/mukesh-elango", label: "GitHub" },
                { icon: InstagramIcon, href: "https://www.instagram.com/_mukesh.15/", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="contact-social-link">
                  <Icon /> <span>{label}</span> <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
