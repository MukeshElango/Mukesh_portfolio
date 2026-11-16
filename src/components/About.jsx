import Reveal from "./Reveal";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const INTERESTS = ["Data Analytics", "Business Intelligence", "Data Engineering", "ETL Pipelines", "Python & SQL"];

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
          <h2 className="font-display text-4xl sm:text-5xl font-light text-bone mb-12">
            From raw data <span className="italic font-semibold text-gradient">to decisions</span>
          </h2>
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
          <Reveal delay={0.1}>
            <p className="mb-6 max-w-2xl font-display text-2xl font-medium leading-snug text-bone sm:text-3xl">
              I turn raw data into meaningful insights that support clear business decisions.
            </p>
            <div className="mb-9 max-w-2xl space-y-5 text-base leading-7 text-mist sm:text-lg sm:leading-8">
              <p>
                I am a Data Science postgraduate at VIT University with a Computer Science
                background from SRM University. I am building my career in data analytics,
                combining Python, SQL, and business intelligence to turn raw data into meaningful
                insights for better decisions.
              </p>
              <p>
                My project work spans API-based data extraction, data cleaning, transformation,
                SQL analysis, and business intelligence. I built a Spotify Web API workflow
                covering more than 10,000 tracks and prepared an Amazon sales dataset of more
                than 100,000 records for analysis and Power BI reporting. I work with Python,
                Pandas, REST APIs, JSON, relational databases, and data modeling.
              </p>
              <p>
                During a four-month Full Stack Developer internship at Vattara Solutions Private
                Limited, I contributed to frontend and backend features, integrated REST APIs
                with PostgreSQL, and took part in testing and Agile team workflows. I am
                interested in transforming raw data into clear business insights and in
                developing reliable data pipelines.
              </p>
            </div>
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

          <Reveal delay={0.2} className="about-facts space-y-0">
            {[
              { icon: GraduationCap, label: "M.Sc Data Science", value: "VIT University · 2024–2026" },
              { icon: GraduationCap, label: "B.Sc Computer Science", value: "SRM University · 2021–2024" },
              { icon: MapPin, label: "Based in", value: "Tamil Nadu, India" },
              { icon: Briefcase, label: "Role focus", value: "Data Analytics · Data Engineering" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={value} className="about-fact flex items-start gap-4 border-t border-white/10 py-4">
                <Icon size={17} className="mt-1 shrink-0 text-ember" strokeWidth={1.75} />
                <div>
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-mist">{label}</div>
                  <div className="text-sm leading-snug text-bone sm:text-[15px]">{value}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
