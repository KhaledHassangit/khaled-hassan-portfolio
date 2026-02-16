import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

const techBadges = ["React", "Next.js", "TypeScript", "RTK Query", "ShadCN UI"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Geometric accent */}
      <div className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-[10%] w-56 h-56 rounded-full bg-primary/3 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full glow-dot" style={{ backgroundColor: "hsl(142 70% 50%)", boxShadow: "0 0 8px hsl(142 70% 50% / 0.8)" }} />
          <span className="text-xs font-medium text-primary">Available for Work</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-foreground">Khaled Hassan</span>
          <br />
          <span className="gradient-text">Frontend Engineer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Specialized in high-performance dashboards, SaaS platforms, and interactive web experiences with React & Next.js.
        </motion.p>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground border border-border/50"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary text-foreground font-medium hover:bg-surface-hover transition-colors"
          >
            <Mail size={16} /> Contact Me
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary text-foreground font-medium hover:bg-surface-hover transition-colors"
          >
            <Download size={16} /> Resume
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
