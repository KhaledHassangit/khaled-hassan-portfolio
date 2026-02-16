import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LayoutDashboard, Plug, Boxes, Gauge, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [LayoutDashboard, Plug, Boxes, Gauge, ShieldCheck];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3">{t.about.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t.about.heading1}{" "}
            <span className="text-primary">{t.about.heading2}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
            {t.about.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.about.strengths.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="card-surface-hover p-6 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
