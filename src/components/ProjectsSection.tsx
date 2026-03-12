import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Spam Email Detection",
    subtitle: "Using DistilBERT",
    date: "Jun 2025",
    description: "Built a spam detection system using transformer-based NLP models achieving 97.4% accuracy and 98.36% precision.",
    tags: ["NLP", "Transformers", "DistilBERT", "Python"],
    accent: "from-primary to-[hsl(174_90%_75%)]",
  },
  {
    title: "Driver Drowsiness Detection",
    subtitle: "Real-time CV System",
    date: "Dec 2023",
    description: "Developed a real-time drowsiness detection system in a 4-member team that triggers alert mechanisms to reduce accident risk.",
    tags: ["Computer Vision", "OpenCV", "Deep Learning", "Python"],
    accent: "from-[hsl(200_80%_60%)] to-primary",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p className="mono text-primary text-sm tracking-widest mb-4">03 — PROJECTS</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          Selected <span className="text-gradient">work</span>.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 * (i + 1) }}
            className="group glass rounded-2xl overflow-hidden glow-border hover:border-primary/30 transition-all duration-500"
          >
            {/* Gradient top bar */}
            <div className={`h-1 bg-gradient-to-r ${project.accent}`} />

            <div className="p-8 md:p-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.subtitle}</p>
                </div>
                <span className="mono text-xs text-muted-foreground">{project.date}</span>
              </div>

              <p className="text-secondary-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
