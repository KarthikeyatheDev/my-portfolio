import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

const PROJECTS: Project[] = [
{
title: "Legal Intelligence System",
description:
"Built an AI-powered legal research platform that uses semantic search and embedding-based retrieval to match legal queries with relevant case documents. Implemented similarity ranking, explainability features, and an efficient indexing pipeline for large-scale legal text analysis.",
tech: [
"Python",
"FastAPI",
"Embeddings",
"Vector Search",
"NLP",
"PostgreSQL"
],
github: "https://github.com/KarthikeyatheDev/AI-Legal-System",
},

{
title: "RAG Knowledge Assistant",
description:
"Built an end-to-end Retrieval-Augmented Generation (RAG) chatbot that enables users to interact with uploaded documents through natural language. Implemented document processing, chunking, embedding generation, vector search, and context-aware response generation to provide grounded answers from knowledge bases.",
tech: [
"Python",
"FastAPI",
"LangChain",
"Vector Database",
"Embeddings",
"LLMs"
],
github: "https://github.com/KarthikeyatheDev/Rag-Bot",
},

{
title: "Restaurant Management Platform",
description:
"Engineered a full-stack restaurant management system for handling orders, customers, and operational workflows. Built secure REST APIs, real-time data management features, and an integrated frontend-backend architecture using modern web technologies.",
tech: [
"React",
"FastAPI",
"Supabase",
"REST APIs"
],
github: "https://github.com/KarthikeyatheDev/Restaurant-Website",
},

{
title: "Optimal Shallow SNN in Reinforcement Learning",
description:
"Explored the application of Spiking Neural Networks (SNNs) within reinforcement learning environments to achieve efficient policy learning. Evaluated reward-based performance and analyzed trade-offs between model complexity, computational efficiency, and learning effectiveness.",
tech: [
"Python",
"PyTorch",
"Spiking Neural Networks",
"Reinforcement Learning",
"Machine Learning"
],
github: "https://github.com/KarthikeyatheDev/Snn-Project",
},
];


const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md dark:hover:shadow-neutral-900/50 transition-all duration-300 flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 dark:text-neutral-400 group-hover:bg-neutral-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-neutral-900 transition-colors duration-300">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2 leading-snug">{project.title}</h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

const ProjectsSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">Work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Selected Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;