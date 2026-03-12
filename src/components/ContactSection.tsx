import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto text-center" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="mono text-primary text-sm tracking-widest mb-4">05 — CONTACT</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
          Let's build<br />
          <span className="text-gradient glow-text">something great</span>.
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-12">
          Open to internships, collaborations, and conversations about AI/ML.
        </p>
        <a
          href="mailto:hello@karthikeya.dev"
          className="inline-block px-10 py-5 bg-primary text-primary-foreground font-semibold text-lg rounded-xl hover:shadow-[0_0_40px_hsl(var(--glow)/0.5)] transition-all duration-300 hover:scale-105"
        >
          Say Hello →
        </a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
