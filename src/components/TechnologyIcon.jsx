import {
  siCss,
  siDjango,
  siFigma,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siClaude,
  siExpress,
  siJupyter,
  siMongodb,
  siMysql,
  siNodedotjs,
  siNumpy,
  siPandas,
  siPostgresql,
  siPython,
  siReact,
  siSpotify,
  siSqlite,
} from "simple-icons";
import {
  Activity,
  ArrowDownToLine,
  Bot,
  Braces,
  ChartNoAxesCombined,
  Code2,
  Database,
  FileSpreadsheet,
  FileText,
  Filter,
  LayoutDashboard,
  Network,
  Search,
  Sigma,
  Sparkles,
  Table,
  Workflow,
} from "lucide-react";

const BRAND_ICONS = {
  "CSS3": siCss,
  "Django": siDjango,
  "Django (Basic)": siDjango,
  "Django REST": siDjango,
  "Django REST Framework": siDjango,
  "Claude API": siClaude,
  "Express.js": siExpress,
  "Figma": siFigma,
  "Git": siGit,
  "GitHub": siGithub,
  "HTML5": siHtml5,
  "JavaScript": siJavascript,
  "JavaScript (Basic)": siJavascript,
  "Jupyter": siJupyter,
  "Jupyter Notebook": siJupyter,
  "MongoDB": siMongodb,
  "MySQL": siMysql,
  "Node.js": siNodedotjs,
  "NumPy": siNumpy,
  "Pandas": siPandas,
  "PostgreSQL": siPostgresql,
  "Python": siPython,
  "React": siReact,
  "React.js": siReact,
  "React.js (Basic)": siReact,
  "Spotify Web API": siSpotify,
  "SQLite": siSqlite,
};

const BRAND_COLORS = {
  "Django": "#44B78B",
  "Django (Basic)": "#44B78B",
  "Django REST": "#44B78B",
  "GitHub": "#F1F2F4",
  "NumPy": "#69BCE6",
  "SQLite": "#5AAAE6",
};

const CONCEPT_ICONS = {
  "AI-Assisted Development": Bot,
  "Chart.js": ChartNoAxesCombined,
  "CASE": Code2,
  "CTEs": Code2,
  "DAX": Sigma,
  "Dashboard Development": LayoutDashboard,
  "Data Cleaning": Filter,
  "Data Modeling": Database,
  "Data Pipelines": Workflow,
  "Data Visualization": ChartNoAxesCombined,
  "EDA": Search,
  "ETL": Workflow,
  "Excel": FileSpreadsheet,
  "GROUP BY / HAVING": Table,
  "JOINs": Workflow,
  "Matplotlib": ChartNoAxesCombined,
  "MS Word": FileText,
  "Pivot Tables": Table,
  "Power BI": ChartNoAxesCombined,
  "Power Query": Workflow,
  "Recommendation Systems": Sparkles,
  "Responsive Design": LayoutDashboard,
  "Requests": ArrowDownToLine,
  "REST APIs": Network,
  "SQL": Braces,
  "Statistical Analysis": Activity,
  "Tableau": ChartNoAxesCombined,
  "VS Code": Code2,
  "Window Functions": Activity,
};

export default function TechnologyIcon({ name, className = "" }) {
  const brandIcon = BRAND_ICONS[name];
  if (brandIcon) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={`technology-mark ${className}`}
        style={{ color: BRAND_COLORS[name] || `#${brandIcon.hex}` }}
        aria-hidden="true"
      >
        <path fill="currentColor" d={brandIcon.path} />
      </svg>
    );
  }

  const Icon = CONCEPT_ICONS[name] || Code2;
  return <Icon className={`technology-mark ${className}`} aria-hidden="true" />;
}
