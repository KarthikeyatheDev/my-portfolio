import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">Background</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 md:p-10 overflow-hidden"
        >
          {/* Decorative corner accent */}
          <div
            aria-hidden
            className="absolute top-0 right-0 w-40 h-40 bg-neutral-50 dark:bg-neutral-800/50 rounded-bl-[80px] border-b border-l border-neutral-100 dark:border-neutral-700"
          />

          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                  Degree
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white leading-tight">
                  B.Tech in Computer Science 
                  <br />
                  <span className="text-neutral-400 dark:text-neutral-500 font-medium">& Engineering </span>
                </h3>
              </div>
              <div className="text-right">
                <span className="inline-block text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 px-3 py-1 rounded-full">
                  2023 – 2027
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 dark:bg-white flex items-center justify-center">
                <svg className="w-5 h-5 text-white dark:text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <p className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
                  VIT Chennai
                </p>
                <p className="text-sm text-neutral-400 dark:text-neutral-500">India</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-100 dark:border-neutral-800">
              {[
                { label: "CGPA", value: "8.95 / 10" },
                { label: "Specialization", value: "AI & Machine Learning" },
                { label: "Working Project", value: "RAG for Legal Docs" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-0.5">{stat.label}</p>
                  <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Deep Learning",
                  "Natural Language Processing",
                  "Data Structures & Algorithms",
                  "Database Management Systems",
                  "Operating Systems",
                  "Computer Networks",
                  "Probability & Statistics",
                ].map((course) => (
                  <span
                    key={course}
                    className="text-xs font-medium text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 rounded-md"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;