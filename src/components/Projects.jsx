import { Activity, ChartNoAxesCombined, Database, GitBranch } from "lucide-react";
import Reveal from "./Reveal";
import TechnologyIcon from "./TechnologyIcon";

const PROJECT_GROUPS = [
  {
    role: "Data Analytics",
    description: "Data quality, SQL analysis, modeling, and business reporting",
    icon: ChartNoAxesCombined,
    projects: [
      {
        n: "01",
        visual: "sales",
        visualLabel: "Data quality / SQL / Power BI",
        name: "Amazon Sales Data Pipeline & Modeling",
        scale: "100,000+ records",
        summary: "A complete sales analytics workflow, from data preparation and SQL analysis through a modeled Power BI reporting layer.",
        features: [
          "Resolved missing values, duplicates, and inconsistent data types",
          "Queried sales with JOINs, CTEs, window functions, CASE, and GROUP BY/HAVING",
          "Built DAX measures and an interactive dashboard for revenue and category KPIs",
        ],
        stack: ["Python", "Pandas", "SQL", "Excel", "Power Query", "Power BI", "DAX"],
      },
      {
        n: "02",
        visual: "health",
        visualLabel: "Exercise / Heart rate / Blood pressure",
        name: "Exercise Impact on Blood Pressure & Heart Rate",
        scale: "Statistical analysis",
        summary: "A focused study of how exercise relates to blood pressure and heart-rate outcomes using a cleaned dataset.",
        features: [
          "Prepared and cleaned data for analysis",
          "Explored correlations between exercise and health measures",
          "Presented findings through statistical summaries and visualizations",
        ],
        stack: ["Python", "Pandas", "NumPy", "Statistical Analysis", "Data Visualization"],
      },
    ],
  },
  {
    role: "Data Engineering",
    description: "API ingestion, transformation, and analysis-ready datasets",
    icon: Database,
    projects: [
      {
        n: "03",
        visual: "pipeline",
        visualLabel: "Extraction / Transformation / Dataset",
        name: "Spotify Web API Data Extraction Pipeline",
        scale: "10,000+ tracks",
        summary: "Token-authenticated extraction of playlist and track data, shaped into structured datasets for downstream listening-trend analysis.",
        features: [
          "Extracted playlist and track-level data from the Spotify Web API",
          "Parsed nested JSON responses with Requests and Pandas",
          "Cleaned missing values and standardized inconsistent fields",
        ],
        stack: ["Python", "Spotify Web API", "REST APIs", "Requests", "JSON", "Pandas", "Jupyter"],
      },
    ],
  },
];

const VISUALS = {
  pipeline: { icon: GitBranch, stages: ["Spotify API", "Nested JSON", "Pandas"] },
  sales: { icon: ChartNoAxesCombined, stages: ["Clean", "SQL", "Power BI"] },
  health: { icon: Activity, stages: ["Exercise", "Heart rate", "Blood pressure"] },
};

function ProjectVisual({ type, label }) {
  const { icon: Icon, stages } = VISUALS[type];
  return (
    <div className={`project-art project-art-${type} relative mb-6 flex min-h-36 items-center justify-between gap-2 overflow-hidden rounded-lg border border-white/[0.07] px-4 py-5 sm:px-6`} role="img" aria-label={`Conceptual workflow: ${label}`}>
      <div className="absolute inset-0 project-art-grid" aria-hidden="true" />
      <div className="absolute left-4 top-3 font-mono text-[8px] uppercase tracking-[0.2em] text-mist/70">{label}</div>
      <div className="project-visual-track relative z-10">
        <span className="project-connector" aria-hidden="true" />
        {stages.map((stage, index) => (
          <div key={stage} className="project-stage">
            <div className="project-node flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-surface/90 text-ember-soft sm:h-11 sm:w-11">
              {index === 1 ? <Icon size={17} strokeWidth={1.6} /> : <span className="h-1.5 w-1.5 rounded-full bg-signal" />}
            </div>
            <span className="max-w-20 text-[9px] leading-tight text-bone/80 sm:text-[10px]">{stage}</span>
          </div>
        ))}
      </div>
      <span className="absolute bottom-2 right-3 font-mono text-[8px] text-mist/50">PROCESS MAP / CONCEPT</span>
    </div>
  );
}

function tiltProject(event) {
  if (event.pointerType !== "mouse") return;
  const bounds = event.currentTarget.getBoundingClientRect();
  const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
  const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
  event.currentTarget.style.setProperty("--tilt-x", `${vertical * -2.2}deg`);
  event.currentTarget.style.setProperty("--tilt-y", `${horizontal * 2.2}deg`);
  event.currentTarget.style.setProperty("--light-x", `${(horizontal + 0.5) * 100}%`);
  event.currentTarget.style.setProperty("--light-y", `${(vertical + 0.5) * 100}%`);
}

function resetProjectTilt(event) {
  event.currentTarget.style.setProperty("--tilt-x", "0deg");
  event.currentTarget.style.setProperty("--tilt-y", "0deg");
  event.currentTarget.style.setProperty("--light-x", "50%");
  event.currentTarget.style.setProperty("--light-y", "50%");
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono section-number">04</span>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-mist/75">Work</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-bone mb-5">
            Data <span className="italic font-semibold text-gradient">Portfolio</span>
          </h2>
          <p className="max-w-2xl text-[15px] leading-relaxed text-mist/80 mb-14">
            Selected work across data pipelines, analytical modeling, and business intelligence.
          </p>
        </Reveal>

        <div className="space-y-20">
          {PROJECT_GROUPS.map(({ role, description, icon: Icon, projects }, groupIndex) => (
            <div key={role}>
              <Reveal>
                <div className="flex items-start gap-4 mb-7">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ember/25 bg-ember/10 text-ember">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-bone">{role}</h3>
                    <p className="mt-1 text-sm text-mist/75">{description}</p>
                  </div>
                </div>
              </Reveal>
              <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project, projectIndex) => (
                  <Reveal key={project.name} delay={(groupIndex + projectIndex) * 0.08} className={projects.length === 1 ? "md:col-span-2" : ""}>
                    <article
                      onPointerMove={tiltProject}
                      onPointerLeave={resetProjectTilt}
                      className={`project-card group relative glass h-full overflow-hidden rounded-xl p-5 sm:p-7 ${projects.length === 1 ? "project-featured" : ""}`}
                    >
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ember-soft">CASE / {project.n}</span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-mist">{project.scale}</span>
                      </div>
                      <ProjectVisual type={project.visual} label={project.visualLabel} />
                      <h4 className="mb-3 font-display text-2xl font-semibold leading-snug text-bone sm:text-3xl">{project.name}</h4>
                      <p className="mb-5 max-w-2xl text-[15px] leading-relaxed text-mist sm:text-base">{project.summary}</p>
                      <ul className="mb-6 space-y-2.5">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-mist/90 sm:text-[15px]">
                            <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-ember shadow-[0_0_8px_rgba(230,36,41,0.5)]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="project-tags flex flex-wrap gap-1.5">
                        {project.stack.map((tool) => (
                          <span key={tool} className="inline-flex items-center gap-1.5 rounded-sm border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-mist">
                            <TechnologyIcon name={tool} />
                            {tool}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
