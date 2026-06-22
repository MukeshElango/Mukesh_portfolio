import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    n: "01",
    name: "Clinic Management System",
    stack: ["React.js", "Node.js", "Express.js","AI- Assisted Development", "PostgreSQL", "JWT", "Twilio"],
    features: [
      "Patient Management",
      "Appointment Scheduling",
      "Billing Management",
      "Role-Based Access Control",
      "WhatsApp Notifications",
    ],
  },
  {
    n: "02",
    name: "MindCare AI - Mental Health Diary",
    stack: ["Python", "Django", "Claude API", "SQLite", "Chart.js"],
    features: [
      "AI-powered diary system",
      "Emotional support chatbot",
      "Mood tracking dashboard",
      "Crisis detection alerts",
      "Multilingual support",
    ],
  },
  {
    n: "03",
    name: "E-Commerce Management System",
    stack: ["React.js","AI-Assisted Development","Django", "DRF", "PostgreSQL"],
    features: [
      "Product Management",
      "Order Processing",
      "User Authentication",
      "REST API Integration",
    ],
  },
  {
    n: "04",
    name: "Exercise Impact on Blood Pressure & Heart Rate",
    stack: ["Python", "Pandas", "NumPy", "Statistical Analysis"],
    features: [
      "Data Cleaning & Preparation",
      "Correlation Analysis",
      "Statistical Reporting",
      "Data Visualization",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono section-number">
              03
            </span>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-mist/75">
              Work
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-bone mb-16">
            Selected <span className="italic font-semibold text-gradient">Projects</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative glass rounded-2xl p-7 h-full overflow-hidden hover:border-ember/30"
              >
                <div
                  className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-ember/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative flex items-start justify-between mb-5">
                  <span className="font-display text-sm italic text-ember/70">
                    {p.n}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-mist/40 group-hover:text-ember group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>
                <h3 className="font-display text-xl text-bone mb-5 leading-snug">
                  {p.name}
                </h3>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13.5px] text-mist/85">
                      <span className="text-ember mt-1 text-[10px]">&gt;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 relative">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md bg-ember/10 border border-ember/15 text-[11px] font-medium text-ember-soft"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
