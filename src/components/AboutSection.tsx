import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { LayoutDashboard, Plug, Boxes, Gauge, ShieldCheck } from "lucide-react";

const strengths = [
  { icon: LayoutDashboard, title: "Scalable Dashboard Systems", desc: "Building complex, data-rich dashboards with modular architecture." },
  { icon: Plug, title: "API Integration & State Management", desc: "RTK Query, React Query, and robust data-fetching patterns." },
  { icon: Boxes, title: "Clean Component Architecture", desc: "Feature-based structures with reusable, testable components." },
  { icon: Gauge, title: "Performance Optimization", desc: "Code splitting, lazy loading, and render optimization." },
  { icon: ShieldCheck, title: "OAuth & Auth Integration", desc: "Google OAuth, role-based access, and secure auth flows." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3">// about</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Building the Frontend,{" "}
            <span className="text-primary">the Right Way</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
            Passionate Frontend Developer skilled in React.js, Next.js, TypeScript, Tailwind CSS, 
            Redux Toolkit (RTK Query), and ShadCN UI. Experienced in building scalable dashboards, 
            admin systems, and interactive 3D platforms with clean architecture and API integrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="card-surface-hover p-6 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
