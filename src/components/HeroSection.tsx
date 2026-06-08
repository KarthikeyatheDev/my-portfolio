import { motion, cubicBezier } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    delay,
    ease: cubicBezier(0.22, 1, 0.36, 1),
  },
});

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center pt-16 overflow-hidden"
  >
    {/* Background grid */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:64px_64px] opacity-50"
    />

    {/* Radial fade */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,0,0,0.04),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.03),transparent)]"
    />

    <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN */}
        <div>
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full px-3 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for Internships & AI Engineering Opportunities
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.05] mb-6">
            Karthikeya
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">Mohan</span>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="text-xl md:text-2xl font-medium text-neutral-500 dark:text-neutral-400 mb-6 tracking-tight">
            AI Engineer • Agentic AI • RAG Systems
          </motion.p>

          <motion.p {...fadeUp(0.4)} className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg mb-10">
            I build AI-powered applications that combine LLMs, retrieval systems,
            backend engineering, and cloud infrastructure. Currently focused on
            Agentic AI, RAG pipelines, workflow automation, and production-ready
            AI systems.
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors duration-200"
            >
              View Projects
            </a>

            <a
              href="https://drive.google.com/file/d/1QK8pfzQpR6qVZlu6lU5rVh6n9Nz7ZEz_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-sm font-medium px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200"
            >
              Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div {...fadeUp(0.6)} className="flex items-center gap-4 mt-8">
            <a href="https://github.com/KarthikeyatheDev" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/karthikeya-m-48516a288/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors">
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: cubicBezier(0.22, 1, 0.36, 1),
          }}
          className="hidden md:block"
        >
          <div className="relative">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 shadow-sm">
              <div className="space-y-5">
                {[
                  { label: "Specialization", value: "LLMs & AI Systems" },
                  { label: "Experience", value: "2+ Years" },
                  { label: "Location", value: "Vijayawada, India" },
                  { label: "Status", value: "Open to Internships", highlight: true },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-sm text-neutral-400 dark:text-neutral-500">{item.label}</span>
                    <span className={item.highlight ? "text-emerald-600 dark:text-emerald-400" : "text-neutral-800 dark:text-neutral-200"}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-3 uppercase tracking-wider">
                  Core Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "FastAPI", "LangChain", "Docker", "AWS", "React"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 rounded-md text-neutral-600 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-neutral-900 dark:bg-neutral-100 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-neutral-200 dark:bg-neutral-800 rounded-xl -z-10" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;