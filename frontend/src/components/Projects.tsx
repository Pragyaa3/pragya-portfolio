import { useEffect, useRef } from "react";

const projects = [
  {
    emoji: "🥽",
    title: "VerdictXR",
    subtitle: "Virtual Courtroom",
    description: "VR courtroom simulation where you can experience trials with AI lawyers and judges. Users participate as defendants, plaintiffs, or observers in real-time legal proceedings.",
    tech: ["React.js", "Three.js", "ICP", "Motoko", "Google Gemini", "WebXR"],
    github: "https://github.com/Pragyaa3/verdictXR",
    live: null,
    color: "var(--purple)",
    border: "rgba(192,132,252,0.15)",
  },
  {
    emoji: "🏪",
    title: "Enchanted E-commerce",
    subtitle: "Microservices Platform",
    description: "Scalable e-commerce platform with proper microservices architecture. Each service runs independently for fault isolation. Dockerized with RabbitMQ for async messaging.",
    tech: ["Node.js", "Express.js", "React.js", "Docker", "RabbitMQ", "MongoDB"],
    github: "https://github.com/Pragyaa3/Microservices_project",
    live: null,
    color: "var(--pink)",
    border: "rgba(244,114,182,0.15)",
  },
  {
    emoji: "🏆",
    title: "CertifyHub",
    subtitle: "Digital Credentials on Solana",
    description: "Decentralized certification platform on Solana blockchain. Issue, verify, and manage digital certificates that can't be faked or lost. Perfect for universities and bootcamps.",
    tech: ["Next.js", "Node.js", "Solana", "Rust", "Anchor", "Web3"],
    github: "https://github.com/Pragyaa3/CertifyHub",
    live: "https://certify-hub-seven.vercel.app/",
    color: "var(--indigo)",
    border: "rgba(129,140,248,0.15)",
  },

  {
    emoji: "📬",
    title: "Unified Inbox",
    subtitle: "Multi-Channel Communication Platform",
    description: "Full-stack platform aggregating SMS, WhatsApp, and email into a unified inbox for businesses. Real-time webhook processing, thread-based conversation management, message scheduling and analytics dashboard.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Twilio API", "TypeScript"],
    github: null,
    live: null,
    color: "var(--pink)",
    border: "rgba(244,114,182,0.15)",
  },

  {
    emoji: "🏥",
    title: "MediSync",
    subtitle: "Healthcare on Blockchain",
    description: "Complete healthcare ecosystem on blockchain. Patients securely store health records, view lab reports, and schedule appointments. Doctors manage access with proper permissions.",
    tech: ["React.js", "Solidity", "Ethereum", "Firebase", "Ethers.js", "IPFS"],
    github: null,
    live: null,
    color: "var(--purple)",
    border: "rgba(192,132,252,0.15)",
  },
];

export default function Projects() {
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
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="fade-in font-mono text-sm mb-4" style={{ color: "var(--purple)" }}>
            03 / my work
          </p>
          <h2 className="fade-in font-display font-bold text-4xl md:text-5xl" style={{ animationDelay: "0.1s" }}>
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="fade-in font-body mt-4 text-base" style={{ color: "var(--muted)", animationDelay: "0.2s" }}>
            Real applications solving actual problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="fade-in card-hover p-7 rounded-2xl flex flex-col"
              style={{
                background: "var(--surface)",
                border: `1px solid ${project.border}`,
                animationDelay: `${i * 0.12}s`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{project.emoji}</span>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs px-3 py-1.5 rounded-full transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "var(--muted)",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget.style.color = project.color))}
                      onMouseLeave={(e) => ((e.currentTarget.style.color = "var(--muted)"))}
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs px-3 py-1.5 rounded-full transition-all duration-200"
                      style={{
                        background: "rgba(192,132,252,0.1)",
                        border: `1px solid ${project.border}`,
                        color: project.color,
                      }}
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display font-bold text-xl mb-1">{project.title}</h3>
              <p className="font-mono text-xs mb-4" style={{ color: project.color }}>{project.subtitle}</p>
              <p className="font-body text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--muted)" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: `1px solid ${project.border}`,
                      color: project.color,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in text-center mt-10" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://github.com/Pragyaa3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm transition-all duration-300 px-6 py-3 rounded-full"
            style={{
              border: "1px solid rgba(192,132,252,0.3)",
              color: "var(--purple)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(192,132,252,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            View All 15+ Projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}