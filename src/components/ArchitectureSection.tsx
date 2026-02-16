import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, FolderTree, Database, GitBranch, Component } from "lucide-react";

const layers = [
  { icon: FolderTree, title: "Feature-Based Architecture", desc: "Organized by feature, not by type. Each module is self-contained with its own components, hooks, and utils." },
  { icon: Component, title: "Modular Components", desc: "Reusable, composable UI primitives built with clean props interfaces and proper TypeScript generics." },
  { icon: Database, title: "API Layer Separation", desc: "Dedicated service layer with RTK Query/React Query for data fetching, caching, and optimistic updates." },
  { icon: GitBranch, title: "State Management Strategy", desc: "Server state via RTK Query, client state via Redux slices, local state via hooks — each in its domain." },
  { icon: Layers, title: "Reusable UI Systems", desc: "Design system tokens, variant-based components, and consistent patterns across the entire application." },
];

const ArchitectureSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="architecture" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3">// architecture</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How I Build <span className="text-primary">Scalable Systems</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            A structured approach to frontend engineering — from folder architecture to state management.
          </p>
        </motion.div>

        {/* Diagram-like layout */}
        <div className="relative">
          {/* Connection lines (decorative) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border/50" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="card-surface-hover p-5 text-center relative"
              >
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 mt-2">
                  <layer.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-2">{layer.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{layer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Code snippet preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 card-surface p-6 font-mono text-sm overflow-x-auto"
        >
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(45 90% 50% / 0.6)" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(142 70% 45% / 0.6)" }} />
          </div>
          <pre className="text-muted-foreground">
            <code>{`src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/   ← RTK Query API
│   │   └── types/
│   ├── dashboard/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
├── shared/
│   ├── ui/             ← Design system
│   ├── hooks/
│   └── utils/
└── app/
    ├── store.ts
    └── routes.tsx`}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
