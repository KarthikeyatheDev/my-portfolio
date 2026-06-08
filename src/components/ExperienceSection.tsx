import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Experience {
  role: string;
  company: string;
  duration: string;
  type: string;
  description: string[];
}

const EXPERIENCES: Experience[] = [
  {
    role: "Project Engineer",
    company: "Samsung PRISM",
    duration: "Aug 2025 – Apr 2026",
    type: "Internship",
    description: [
      "Developed an AI-powered Android Studio plugin to convert XML layouts into Jetpack Compose code for faster UI migration workflows",
      "Built parsing and code generation pipelines for automated UI transformation and component mapping",
      "Working on improving conversion accuracy and handling complex nested UI structure."
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full border-2 border-neutral-900 dark:border-white bg-white dark:bg-neutral-900" />

      <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{exp.role}</h3>
          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 rounded-full">
            {exp.type}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{exp.company}</span>
          <span className="text-neutral-300 dark:text-neutral-600">·</span>
          <span className="text-sm text-neutral-400 dark:text-neutral-500">{exp.duration}</span>
        </div>
        <ul className="space-y-2">
          {exp.description.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
              <span className="text-neutral-300 dark:text-neutral-600 mt-1 shrink-0">—</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="experience" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-neutral-200 dark:bg-neutral-800" />

          <div className="space-y-6">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={exp.role + exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;