import { useEffect, useRef } from "react";

const skillCategories = [
  {
    icon: "🎨",
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Three.js", "Tailwind CSS", "Material-UI"],
    color: "var(--pink)",
    border: "rgba(244,114,182,0.2)",
    bg: "rgba(244,114,182,0.05)",
  },
  {
    icon: "⛓️",
    title: "Blockchain",
    skills: ["Solidity", "Rust", "Move", "Ethereum", "Solana", "Aptos", "ICP", "Motoko"],
    color: "var(--purple)",
    border: "rgba(192,132,252,0.2)",
    bg: "rgba(192,132,252,0.05)",
  },
  {
    icon: "🏗️",
    title: "Backend",
    skills: ["Python", "FastAPI", "Flask", "Node.js", "Express.js", "NestJS", "GraphQL", "RabbitMQ"],
    color: "var(--indigo)",
    border: "rgba(129,140,248,0.2)",
    bg: "rgba(129,140,248,0.05)",
  },
  {
    icon: "🗃️",
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "IPFS", "Arweave"],
    color: "var(--pink)",
    border: "rgba(244,114,182,0.2)",
    bg: "rgba(244,114,182,0.05)",
  },
  {
    icon: "🚀",
    title: "DevOps",
    skills: ["Docker", "AWS", "Git", "GitHub", "Hardhat", "Truffle", "Web3.js"],
    color: "var(--purple)",
    border: "rgba(192,132,252,0.2)",
    bg: "rgba(192,132,252,0.05)",
  },
  {
    icon: "⚡",
    title: "Languages",
    skills: ["JavaScript", "Python", "Java", "C/C++", "Rust", "HTML5", "CSS3"],
    color: "var(--indigo)",
    border: "rgba(129,140,248,0.2)",
    bg: "rgba(129,140,248,0.05)",
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-32 px-6" style={{ background: "rgba(19,19,26,0.5)" }} ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="fade-in font-mono text-sm mb-4" style={{ color: "var(--purple)" }}>
            02 / my toolkit
          </p>
          <h2 className="fade-in font-display font-bold text-4xl md:text-5xl" style={{ animationDelay: "0.1s" }}>
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="fade-in font-body mt-4 text-base" style={{ color: "var(--muted)", animationDelay: "0.2s" }}>
            From pixels to smart contracts — here's what I love building with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="fade-in card-hover p-6 rounded-2xl"
              style={{
                background: cat.bg,
                border: `1px solid ${cat.border}`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-display font-bold text-lg" style={{ color: cat.color }}>
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill text-xs"
                    style={{
                      color: cat.color,
                      borderColor: cat.border,
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}