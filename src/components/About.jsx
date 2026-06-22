import Reveal from "./Reveal";
import GlassCard from "./GlassCard";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const INTERESTS = [ "Data Analyst","Software Development", "Python Backend Development", "Data Visualization"];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono section-number">
              01
            </span>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-mist/75">
              Introduction
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-bone mb-16">
            About <span className="italic font-semibold text-gradient">Me</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-mist/90 mb-6 font-light">
              Completed an <span className="text-bone">M.Sc in Data Science</span> at
              VIT University and a <span className="text-bone">B.Sc in Computer Science</span> at
              SRM University. I have strong expertise in software development, database
              systems, and data analysis built through academic study and internship
              experience.
            </p>
            <p className="text-lg leading-relaxed text-mist/90 mb-10 font-light">
              I enjoy working across the full stack - from designing intuitive interfaces to
              architecting backend systems and integrating data pipelines that are technically
              sound and genuinely useful.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {INTERESTS.map((tag, i) => (
                <Reveal key={tag} delay={0.15 + i * 0.05} y={10}>
                  <span className="web-chip text-sm text-bone/90">
                    {tag}
                  </span>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="space-y-4">
            {[
              { icon: GraduationCap, label: "Education", value: "M.Sc  Data Science - VIT University" },
              { icon: GraduationCap, label: "Education", value: "B.Sc Computer Science - SRM University" },
              { icon: MapPin, label: "Location", value: "Tamil Nadu, India" },
              { icon: Briefcase, label: "Open to", value: "Software Developer , Data Analyst Roles" },
            ].map(({ icon: Icon, label, value }) => ( 
              <GlassCard key={label} className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-ember/10 border border-ember/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={17} className="text-ember" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-ember mb-1">
                    {label}
                  </div>
                  <div className="text-[15px] text-bone/90 leading-snug">{value}</div>
                </div>
              </GlassCard>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
