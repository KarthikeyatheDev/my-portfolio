import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const certs = [
    "Deep Learning — NPTEL (IIT Ropar)",
    "Computer Vision — Kaggle",
  ];

  const coursework = ["Machine Learning", "Algorithms", "Operating Systems", "Software Engineering"];

  return (
    <section id="education" className="section-padding max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p className="mono text-primary text-sm tracking-widest mb-4">04 — EDUCATION</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          Academic <span className="text-gradient">foundation</span>.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="glass rounded-2xl p-8 md:p-12 glow-border"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Vellore Institute of Technology</h3>
            <p className="text-muted-foreground text-lg">B.Tech in Computer Science (AI/ML)</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-gradient">8.98</p>
            <p className="mono text-xs text-muted-foreground">CGPA / 10</p>
            <p className="mono text-xs text-muted-foreground mt-1">Expected Aug 2027</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mono text-xs text-primary tracking-widest mb-4">COURSEWORK</p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((c) => (
                <span key={c} className="mono text-xs px-3 py-1.5 rounded-full border border-border text-secondary-foreground">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="mono text-xs text-primary tracking-widest mb-4">CERTIFICATIONS</p>
            <ul className="space-y-2">
              {certs.map((cert) => (
                <li key={cert} className="flex gap-3 text-secondary-foreground">
                  <span className="text-primary text-xs mt-1.5">▸</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
