import Reveal from "./Reveal";
import GlassCard from "./GlassCard";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";

const EXPERIENCE = [
  {
    role: "Full Stack Developer Intern",
    company: "Vattara Solutions Private Limited",
    years: "4 Months",
    highlights: [
      "Contributed to AI-assisted full-stack web application development, working across frontend and backend layers.",
      "Built and integrated REST APIs with PostgreSQL databases, supporting reliable data flow between client and server.",
      "Debugged and tested application modules, improving feature stability prior to deployment.",
      "Collaborated within an Agile workflow using Git for version control and team code reviews.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono section-number">03</span>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-mist/75">
              Full Stack Development / Internship
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-bone mb-14">
            Experience
          </h2>
          <p className="max-w-xl text-sm leading-6 text-mist">
            Four months of full stack development experience across frontend features, APIs, PostgreSQL, testing, and Agile collaboration.
          </p>
        </Reveal>

        <div className="timeline-track relative">
          <span className="timeline-progress" aria-hidden="true" />
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.1}>
              <div className="relative flex gap-5 pb-10 last:pb-0">
                <div className="relative flex flex-col items-center w-3 flex-shrink-0">
                  <span className="mt-1.5 w-3 h-3 rounded-full bg-ember shadow-[0_0_16px_rgba(232,35,43,0.35)] flex-shrink-0" />
                </div>

                <GlassCard className="w-full p-5 sm:p-6 hover:bg-white/[0.05]">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ember mb-1.5">
                        {item.years}
                      </p>
                      <h3 className="font-display text-lg sm:text-xl text-bone leading-snug mb-1 font-semibold tracking-[-0.01em]">
                        {item.role}
                      </h3>
                      <p className="text-xs sm:text-sm text-mist/75">
                        {item.company}
                      </p>
                    </div>
                    <div className="experience-icon w-9 h-9 rounded-full bg-ember/10 border border-ember/20 flex items-center justify-center flex-shrink-0">
                      <BriefcaseBusiness size={15} className="text-ember" strokeWidth={1.75} />
                    </div>
                  </div>
                  <ul className="experience-highlights space-y-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-xs sm:text-sm text-mist/85">
                        <CheckCircle2 size={14} className="mt-0.5 text-ember flex-shrink-0" strokeWidth={1.75} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
