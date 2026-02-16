import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const filters = ["All", "Dashboards", "SaaS", "3D", "Corporate"];

const projects = [
  {
    title: "AdWallPro",
    subtitle: "Advertising Platform",
    desc: "Scalable Next.js advertising platform with Google OAuth, real-time notification system, and a full dashboard architecture.",
    tags: ["Next.js", "TypeScript", "OAuth", "RTK Query"],
    category: ["SaaS", "Dashboards"],
    highlight: "API-driven scalable architecture",
  },
  {
    title: "Virtual Twins",
    subtitle: "Interactive 3D Website",
    desc: "Interactive 3D web experience built with Three.js and Next.js, featuring a React dashboard backend integration.",
    tags: ["Next.js", "TypeScript", "Three.js", "React"],
    category: ["3D", "Corporate"],
    highlight: "Real-time 3D rendering pipeline",
  },
  {
    title: "Super Admin Dashboard",
    subtitle: "Clinic Management System",
    desc: "Full CRUD clinic management dashboard with Redux architecture, role-based access control, and complete API integration.",
    tags: ["React", "Redux", "TypeScript", "REST API"],
    category: ["Dashboards"],
    highlight: "Role-based access & CRUD operations",
  },
  {
    title: "Smart Cell E-commerce",
    subtitle: "Admin Dashboard",
    desc: "E-commerce admin panel built with Mantine UI and Redux Toolkit, featuring deep backend integration for product management.",
    tags: ["React", "Mantine UI", "Redux Toolkit"],
    category: ["Dashboards", "SaaS"],
    highlight: "Mantine UI + Redux architecture",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-mono text-primary mb-3">// projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Featured <span className="text-primary">Work</span>
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 text-sm rounded-lg transition-all duration-200 ${
                  active === f
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
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
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

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.desc}
              </p>

              <div className="px-3 py-2 rounded-lg bg-primary/5 border border-primary/10 mb-4">
                <p className="text-xs text-primary font-mono">⚡ {project.highlight}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs rounded bg-secondary text-muted-foreground font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
