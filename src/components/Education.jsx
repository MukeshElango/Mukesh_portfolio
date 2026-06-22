import Reveal from "./Reveal";
import GlassCard from "./GlassCard";
import { Award } from "lucide-react";

const EDUCATION = [
  { degree: "M.Sc Data Science", school: "VIT University", years: "2024 - 2026", gpa: "7.4 / 10" },
  { degree: "B.Sc Computer Science", school: "SRM University", years: "2021 - 2024", gpa: "8.5 / 10" },
];

const CERTS = [
  "NPTEL Cloud Computing",
  "Oracle Academy - Database Design and Programming with SQL",
  "Java Programming Certification - SRM Axis Intellects",
];

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono section-number">05</span>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-mist/75">
              Background
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-bone mb-14">
            Education
          </h2>
        </Reveal>

        <div className="relative mb-14">
          {EDUCATION.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.1}>
              <div className="relative flex gap-5 pb-10 last:pb-0">
                <div className="relative flex flex-col items-center w-3 flex-shrink-0">
                  <span className="mt-1.5 w-3 h-3 rounded-full bg-ember shadow-[0_0_16px_rgba(232,35,43,0.35)] flex-shrink-0" />
                  {i !== EDUCATION.length - 1 && (
                    <span className="w-px flex-1 bg-ember/20 mt-2" />
                  )}
                </div>

                <div className="pb-2">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ember mb-1.5">
                    {item.years}
                  </p>
                  <h3 className="font-display text-lg sm:text-xl text-bone leading-snug mb-1 font-semibold tracking-[-0.01em]">
                    {item.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-mist/75 max-w-2xl">
                    {item.school} - CGPA {item.gpa}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <h3 className="font-display text-lg sm:text-xl text-bone mb-5">
            Certifications
          </h3>
          <div className="space-y-3">
            {CERTS.map((cert, i) => (
              <Reveal key={cert} delay={0.25 + i * 0.06} y={12}>
                <GlassCard className="p-3.5 flex items-center gap-4 hover:bg-white/[0.05]">
                  <div className="w-8 h-8 rounded-full bg-ember/10 border border-ember/20 flex items-center justify-center flex-shrink-0">
                    <Award size={14} className="text-ember" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs sm:text-sm text-bone/90">{cert}</span>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
