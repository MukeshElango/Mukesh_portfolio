import {
  Activity,
  ChartNoAxesCombined,
  Code2,
  Database,
  FileSpreadsheet,
  Workflow,
  Wrench,
} from "lucide-react";
import Reveal from "./Reveal";
import GlassCard from "./GlassCard";
import TechnologyIcon from "./TechnologyIcon";

const SKILLS = [
  {
    cat: "SQL & Databases",
    icon: Database,
    items: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "JOINs",
      "CTEs",
      "Window Functions",
      "CASE Statements",
      "GROUP BY / HAVING",
    ],
  },
  {
    cat: "Python & Libraries",
    icon: Code2,
    items: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    cat: "Data Analytics & Data Science",
    icon: Activity,
    items: [
      "Exploratory Data Analysis (EDA)",
      "Data Cleaning",
      "Data Preprocessing",
      "Statistical Analysis",
      "Data Visualization",
      "Business Analytics",
      "KPI Reporting",
      "Data Interpretation",
      "Recommendation Systems",
    ],
  },
  {
    cat: "Data Engineering",
    icon: Workflow,
    items: [
      "ETL Development",
      "Data Pipelines",
      "Data Modeling",
      "Data Transformation",
      "REST API Integration",
      "Spotify Web API",
      "Requests",
      "JSON Processing",
    ],
  },
  {
    cat: "Power BI & Business Intelligence",
    icon: ChartNoAxesCombined,
    items: [
      "Power BI",
      "DAX",
      "Dashboard Development",
      "KPI Development",
      "Interactive Reporting",
      "Tableau",
    ],
  },
  {
    cat: "Excel & Reporting",
    icon: FileSpreadsheet,
    items: ["Microsoft Excel", "Pivot Tables", "Power Query"],
  },
  {
    cat: "Web Development",
    icon: Code2,
    items: [
      "React.js (Basic)",
      "JavaScript (Basic)",
      "Node.js",
      "Express.js",
      "Django (Basic)",
      "Django REST Framework",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    cat: "Tools & Workflow",
    icon: Wrench,
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Figma",
      "AI-Assisted Development",
    ],
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
          <h2 className="font-display text-4xl sm:text-5xl font-light text-bone mb-4">
            Technical{" "}
            <span className="italic font-semibold text-gradient">Skills</span>
          </h2>
          <p className="mb-14 max-w-2xl text-sm leading-6 text-mist sm:text-base">
            Core capabilities across SQL, Python, analytics, data pipelines,
            business intelligence, and software development, grounded in the
            projects and experience shown in this portfolio.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map(({ cat, icon: CategoryIcon, items }, i) => (
            <Reveal key={cat} delay={i * 0.07}>
              <GlassCard className="skill-panel h-full p-6 hover:bg-white/[0.05]">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-ember">
                    {cat}
                  </div>
                  <span className="skill-icon-orbit" aria-hidden="true">
                    <CategoryIcon size={16} strokeWidth={1.6} />
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((name) => (
                    <span key={name} className="web-chip skill-chip">
                      <TechnologyIcon name={name} className="skill-chip-mark" />
                      {name}
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
