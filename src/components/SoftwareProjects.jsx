import { BrainCircuit, Code2, ShoppingBag } from "lucide-react";
import Reveal from "./Reveal";
import GlassCard from "./GlassCard";
import TechnologyIcon from "./TechnologyIcon";

const SOFTWARE_PROJECTS = [
  {
    n: "01",
    name: "Clinic Management System",
    icon: Code2,
    summary: "A role-based clinic platform for day-to-day patient, appointment, and billing workflows.",
    features: [
      "Patient and appointment management",
      "Billing workflows and role-based access control",
      "WhatsApp notifications with Twilio",
    ],
    stack: ["React.js", "Node.js", "Express.js", "AI-Assisted Development", "PostgreSQL", "JWT", "Twilio"],
  },
  {
    n: "02",
    name: "MindCare AI - Mental Health Diary",
    icon: BrainCircuit,
    summary: "A multilingual journaling and mood-tracking application with AI-assisted support features.",
    features: [
      "AI-powered diary and emotional support chatbot",
      "Mood tracking dashboard and crisis detection alerts",
      "Django application with a Claude API integration",
      "Multilingual support",
    ],
    stack: ["Python", "Django", "Claude API", "SQLite", "Chart.js"],
  },
  {
    n: "03",
    name: "E-Commerce Management System",
    icon: ShoppingBag,
    summary: "A commerce management application for maintaining products, processing orders, and connecting users to REST services.",
    features: [
      "Product management and order processing",
      "User authentication and REST API integration",
      "Django REST backend with PostgreSQL storage",
    ],
    stack: ["React.js", "AI-Assisted Development", "Django", "Django REST Framework", "PostgreSQL"],
  },
];

export default function SoftwareProjects() {
  return (
    <section id="software-projects" className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono section-number">05</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">Software Work</span>
          </div>
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-display text-4xl font-semibold text-bone sm:text-5xl">
              Software <span className="text-gradient">Projects</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-mist">
              Application development experience, presented separately from the data portfolio.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {SOFTWARE_PROJECTS.map(({ n, name, icon: Icon, summary, features, stack }, index) => (
            <Reveal key={name} delay={index * 0.09}>
              <GlassCard
                as="article"
                className="group flex h-full flex-col p-5 sm:p-6"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-signal/15 text-signal">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-[10px] text-mist">APP / {n}</span>
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold leading-snug text-bone">{name}</h3>
                <p className="mb-6 text-[15px] leading-relaxed text-mist sm:text-base">{summary}</p>
                <ul className="mb-7 space-y-2.5">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-bone/85">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-1.5 border-t border-ink/10 pt-4">
                  {stack.map((tool) => (
                    <span key={tool} className="inline-flex items-center gap-1.5 rounded-sm border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-mist">
                      <TechnologyIcon name={tool} />
                      {tool}
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