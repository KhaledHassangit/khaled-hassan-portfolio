import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  { date: "Oct 2024", title: "Super Admin Dashboard", desc: "Clinic management system with full CRUD & role-based access." },
  { date: "Nov 2024", title: "Bakery Management System", desc: "Business management platform with inventory and order tracking." },
  { date: "Dec 2024", title: "E-commerce Dashboard", desc: "Smart Cell admin panel with Mantine UI & Redux architecture." },
  { date: "May 2025", title: "Moonglish Academy", desc: "Educational platform with course management and student tracking." },
  { date: "Oct 2025", title: "Virtual Twins", desc: "Interactive 3D website with Three.js and dashboard integration." },
  { date: "Dec 2025", title: "AdWallPro", desc: "Full-scale advertising platform with OAuth & notification system." },
];

const ExperienceTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3">// experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Project <span className="text-primary">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className={`relative flex items-start mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-1.5 glow-dot z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="text-xs font-mono text-primary">{item.date}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
