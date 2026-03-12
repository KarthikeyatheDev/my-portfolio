import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "NLP Engineer",
    company: "Chakralaya Analytics (Startup)",
    period: "Aug 2025 – Present",
    points: [
      "Aggregated and processed unstructured data from 20+ sources for a new SLM product",
      "Designed a working architecture for an SLM-based product",
    ],
  },
  {
    role: "Project Intern",
    company: "Samsung PRISM",
    period: "Aug 2025 – Present",
    points: [
      "Developed a plugin using LLMs and Parsing trees for Android Studio",
      "Successfully tested the plugin on an existing open-source Android app with 80% accuracy",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p className="mono text-primary text-sm tracking-widest mb-4">02 — EXPERIENCE</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          Where I've <span className="text-gradient">built</span> things.
        </h2>
      </motion.div>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
            className="group border-t border-border/50 py-10 md:py-14 hover:bg-card/30 transition-colors duration-500 px-4 -mx-4 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {exp.role}
                </h3>
                <p className="text-muted-foreground text-lg">{exp.company}</p>
              </div>
              <span className="mono text-sm text-muted-foreground shrink-0">{exp.period}</span>
            </div>
            <ul className="space-y-3 max-w-2xl">
              {exp.points.map((point, j) => (
                <li key={j} className="flex gap-3 text-secondary-foreground">
                  <span className="text-primary mt-1.5 text-xs">▸</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
