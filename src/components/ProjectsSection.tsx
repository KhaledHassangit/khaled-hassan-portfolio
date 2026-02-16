import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const projectTags = [
  ["Next.js", "TypeScript", "OAuth", "RTK Query"],
  ["Next.js", "TypeScript", "Three.js", "React"],
  ["React", "Redux", "TypeScript", "REST API"],
  ["React", "Mantine UI", "Redux Toolkit"],
];

const projectCategories = [
  ["SaaS", "Dashboards"],
  ["3D", "Corporate"],
  ["Dashboards"],
  ["Dashboards", "SaaS"],
];

// Map translated filter labels back to category keys
const filterKeys = ["All", "Dashboards", "SaaS", "3D", "Corporate"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIdx, setActiveIdx] = useState(0);
  const { t } = useLanguage();

  const filtered = activeIdx === 0
    ? t.projects.items
    : t.projects.items.filter((_, i) => projectCategories[i].includes(filterKeys[activeIdx]));

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-mono text-primary mb-3">{t.projects.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t.projects.heading1} <span className="text-primary">{t.projects.heading2}</span>
          </h2>

          <div className="flex flex-wrap gap-2">
            {t.projects.filters.map((f, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`px-4 py-1.5 text-sm rounded-lg transition-all duration-200 ${
                  activeIdx === idx
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-surface-hover"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, i) => {
            const originalIdx = t.projects.items.indexOf(project);
            return (
              <motion.div
                key={originalIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="card-surface-hover p-6 flex flex-col group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-surface-hover transition-colors">
                      <Github size={14} className="text-muted-foreground" />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-surface-hover transition-colors">
                      <ExternalLink size={14} className="text-muted-foreground" />
                    </button>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.desc}</p>

                <div className="px-3 py-2 rounded-lg bg-primary/5 border border-primary/10 mb-4">
                  <p className="text-xs text-primary font-mono">⚡ {project.highlight}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {projectTags[originalIdx]?.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs rounded bg-secondary text-muted-foreground font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
