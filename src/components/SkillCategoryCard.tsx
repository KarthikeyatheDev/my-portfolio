import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillCategory {
  category: string;
  skills: string[];
}

export function SkillCategoryCard({
  cat,
  index,
}: {
  cat: SkillCategory;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm transition-all duration-300"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
        {cat.category}
      </p>

      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}