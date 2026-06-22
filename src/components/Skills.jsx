import Reveal from "./Reveal";
import GlassCard from "./GlassCard";

const SKILLS = [
  {
    cat: "Languages",
    items: ["Python", "JavaScript (Basic)", "SQL", "HTML5", "CSS3"],
  },
  {
    cat: "Frontend",
    items: ["React.js (Basic)", "AI-Assisted Development", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    cat: "Backend",
    items: ["python","Django (Basic)", "Django REST", "REST APIs"],
  },
  {
    cat: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    cat: "Data & Analytics",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Statistical Analysis",
      "Data Visualization",
      "EDA",
      "Recommendation Systems",
    ],
  },
  {
    cat: "Tools",
    items: ["Git", "GitHub", "VS Code", "Tableau", "Power BI", "Jupyter", "Figma","Excel","MS Word"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono section-number">02</span>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-mist/75">
              Capabilities
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-bone mb-16">
            Technical{" "}
            <span className="italic font-semibold text-gradient">Skills</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map(({ cat, items }, i) => (
            <Reveal key={cat} delay={i * 0.07}>
              <GlassCard className="p-6 h-full hover:bg-white/[0.05]">
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-ember mb-4">
                  {cat}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="web-chip">
                      {s}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}