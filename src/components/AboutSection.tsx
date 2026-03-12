import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "8.98", label: "CGPA / 10" },
  { value: "97.4%", label: "Spam Detection Acc." },
  { value: "20+", label: "Data Sources Processed" },
  { value: "80%", label: "Plugin Accuracy" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p className="mono text-primary text-sm tracking-widest mb-4">01 — ABOUT</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-12">
          Crafting intelligence,<br />
          <span className="text-muted-foreground">one model at a time.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-secondary-foreground leading-relaxed text-lg">
            I'm a Computer Science student specializing in AI/ML at VIT Chennai,
            with hands-on experience building NLP systems, LLM-powered tools, and
            real-time computer vision applications.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From designing SLM architectures at Chakralaya Analytics to building
            Android Studio plugins at Samsung PRISM, I thrive at turning complex
            AI concepts into production-ready solutions.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {["English", "Hindi", "Telugu", "Japanese (Basic)"].map((lang) => (
              <span key={lang} className="mono text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground">
                {lang}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-6 glow-border hover:border-primary/30 transition-colors duration-300"
            >
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="mono text-xs text-muted-foreground tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
