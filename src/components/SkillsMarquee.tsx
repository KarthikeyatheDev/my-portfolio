const skills = [
  "Python", "SQL", "TensorFlow", "Deep Learning", "Computer Vision", "NLP",
  "LLMs", "RAG", "AI Agents", "LangChain", "Git", "AWS", "FastAPI",
  "React", "Docker", "Firebase", "OOPs",
];

const SkillsMarquee = () => {
  return (
    <section className="py-12 border-y border-border/50 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap gap-8">
        {[...skills, ...skills].map((skill, i) => (
          <span
            key={i}
            className="mono text-sm md:text-base text-muted-foreground flex items-center gap-8"
          >
            {skill}
            <span className="text-primary/40">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsMarquee;
