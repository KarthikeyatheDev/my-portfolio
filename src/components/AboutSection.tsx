import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HIGHLIGHTS = [
  { label: "AI & Full-Stack Projects", value: "10+" },
  { label: "RAG & Agent Systems Built", value: "5+" },
  { label: "Technologies Explored", value: "20+" },
  { label: "Research Papers Studied", value: "50+" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">Me</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            About
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left – bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-5 text-neutral-600 dark:text-neutral-400 leading-relaxed">
  <p>
    I'm Karthikeya Mohan - a Computer Science student and aspiring AI Engineer
    focused on building intelligent systems that solve real-world problems.
    My interests span Agentic AI, Retrieval-Augmented Generation (RAG),
    LLM applications, backend engineering, and cloud infrastructure.
  </p>

  <p>
    I learn by building. From AI-powered document analysis systems and RAG
    pipelines to FastAPI backends, Dockerized deployments, and cloud-hosted
    applications, I enjoy turning ideas into working products while gaining a
    deeper understanding of the technologies behind them.
  </p>

  <p>
    Currently, I'm exploring AI Agents, workflow automation, MLOps, DevOps,
    and scalable AI systems. My goal is to become an engineer capable of
    designing, deploying, and operating production-grade AI applications
    from model to infrastructure.
  </p>
</div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/KarthikeyatheDev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 px-4 py-2 rounded-full hover:border-neutral-400 dark:hover:border-neutral-500 hover:bg-white dark:hover:bg-neutral-800 transition-all"
              >
                GitHub Profile
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="mailto:mkarthikeya122@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 px-4 py-2 rounded-full hover:border-neutral-400 dark:hover:border-neutral-500 hover:bg-white dark:hover:bg-neutral-800 transition-all"
              >
                Send Email
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right – highlights */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6"
                >
                  <p className="text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mb-1">
                    {h.value}
                  </p>
                  <p className="text-sm text-neutral-400 dark:text-neutral-500">{h.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 bg-neutral-900 dark:bg-white rounded-2xl p-6 text-white dark:text-neutral-900">
  <p className="text-sm font-semibold mb-1">Philosophy</p>
  <p className="text-sm text-neutral-300 dark:text-neutral-600 leading-relaxed">
    "Learn deeply, build relentlessly, and deploy often. Real understanding
    comes from turning ideas into systems that people can actually use."
  </p>
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;