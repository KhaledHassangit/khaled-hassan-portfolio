import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ExperienceTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3">{t.experience.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t.experience.heading1} <span className="text-primary">{t.experience.heading2}</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute start-4 md:start-1/2 top-0 bottom-0 w-px bg-border" />

          {t.experience.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className={`relative flex items-start mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute start-4 md:start-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 rtl:translate-x-1.5 mt-1.5 glow-dot z-10" />

              <div className={`ms-12 md:ms-0 md:w-1/2 ${i % 2 === 0 ? "md:pe-12 md:text-end" : "md:ps-12"}`}>
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
