import Reveal from "./Reveal";
import { Mail, PhoneCall, Download } from "lucide-react";
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
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono section-number">06</span>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-mist/75">
              Get in Touch
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-bone mb-8 leading-[1.04] tracking-[-0.02em]">
            Let's <span className="italic font-semibold text-gradient">Build Something Great</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-strong rounded-[1.5rem] p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-ember/10 blur-3xl" />
            <p className="font-sans text-base sm:text-lg text-mist/80 leading-8 mb-8 max-w-2xl mx-auto">
              Combining analytical thinking and software development to create innovative and impactful solutions.
            </p>

            <div className="mb-10 grid gap-3 sm:grid-cols-2 max-w-2xl mx-auto text-left">
              {[
                { icon: Mail, href: "mailto:umamukesh1507@gmail.com", label: "Email", value: "umamukesh1507@gmail.com" },
                { icon: PhoneCall, href: "tel:+919944188623", label: "Phone", value: "+91 99441 88623" },
              ].map(({ icon: Icon, href, label, value }) => (
                <a
                  key={label}
                  href={href}
                  className="glass flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 px-4 py-4 text-bone transition-colors duration-300 hover:border-ember/40 hover:text-ember-soft"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ember/20 bg-ember/10 text-ember">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.24em] text-mist/70">
                      {label}
                    </span>
                    <span className="block truncate text-sm sm:text-base font-semibold text-bone">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-center">
              <MagneticButton
                href="/Mukesh_Elango_Resume_.pdf"
                download
                variant="ghost"
                className="px-10 py-4 text-sm tracking-[0.15em] flex items-center gap-2"
              >
                <Download size={16} />
                Resume
              </MagneticButton>
              <MagneticButton
                href="mailto:umamukesh1507@gmail.com"
                variant="solid"
                className="px-12 py-4 text-sm tracking-[0.18em]"
              >
                <Mail size={16} />
                Shoot a Message
              </MagneticButton>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {[
                { icon: Mail, href: "mailto:umamukesh1507@gmail.com", label: "Email" },
                { icon: LinkedinIcon, href: "https://www.linkedin.com/in/mukesh-elango-120275282", label: "LinkedIn" },
                { icon: GithubIcon, href: "https://github.com/mukesh-elango", label: "GitHub" },
                { icon: InstagramIcon, href: "https://www.instagram.com/_mukesh.15/", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass w-14 h-14 flex items-center justify-center rounded-full border border-white/10 text-bone hover:border-ember/40 hover:text-ember transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
