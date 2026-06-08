import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SkillCategoryCard } from "./SkillCategoryCard";

interface SkillCategory {
  category: string;
  skills: string[];
}

const SKILL_CATEGORIES = [
{
category: "AI Engineering",
skills: ["LLMs","RAG","AI Agents","LangChain","LangGraph","Prompt Engineering","Vector Search","Hugging Face"],
},
{
category: "Backend Engineering",
skills: [
"Python",
"FastAPI",
"REST APIs",
"Async Programming",
"Authentication",
"WebSockets",
"Microservices"
],
},
{
category: "Data & Storage",
skills: [
"PostgreSQL",
"Redis",
"Vector Databases",
"SQL",
"Database Design",
"Caching"
],
},
{
category: "Cloud & DevOps",
skills: [
"Docker",
"AWS",
"EC2",
"Nginx",
"GitHub Actions",
"Linux",
"CI/CD"
],
},
{
category: "Frontend",
skills: [
"React",
"TypeScript",
"Next.js",
"Tailwind CSS",
"Vite",
"Framer Motion"
],
},
{
category: "Currently Learning",
skills: [
"MCP",
"Kafka",
"Terraform",
"Kubernetes",
"MLOps",
"Agent Workflows"
],
},
];


const MARQUEE_ITEMS = [
"AI Agents",
"RAG",
"LangGraph",
"LangChain",
"FastAPI",
"Python",
"Docker",
"AWS",
"PostgreSQL",
"Redis",
"CI/CD",
"Linux",
"Nginx",
"React",
"TypeScript",
"Vector Databases",
"Prompt Engineering",
"LLMs"
];


const SkillBadge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-4 py-1.5 rounded-full whitespace-nowrap shrink-0">
    {label}
  </span>
);

const SkillsMarquee = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
            Toolkit
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Skills
          </h2>
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden mb-16 py-2">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="flex gap-3 w-max"
          >
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <SkillBadge key={`${item}-${i}`} label={item} />
            ))}
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCategoryCard key={cat.category} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;