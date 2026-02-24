import { useEffect, useRef } from "react";

const experiences = [
  {
    emoji: "🏭",
    role: "Technical Lead",
    company: "Code4All",
    period: "Sep 2024 – Present",
    location: "Bhopal, India",
    color: "var(--purple)",
    border: "rgba(192,132,252,0.2)",
    bg: "rgba(192,132,252,0.05)",
    points: [
      "Mentoring 100+ students in full-stack development through 15+ workshops on React.js, Node.js, Git & system design",
      "Coordinated 8 collaborative projects with 60% completion rate",
      "Fostering hands-on learning in API design, database management & web architecture",
    ],
  },
  {
    emoji: "⚡",
    role: "Industrial Training – Computer Science",
    company: "BHEL (Bharat Heavy Electricals Limited)",
    period: "Jul 2025 – Aug 2025",
    location: "Bhopal, India",
    color: "var(--pink)",
    border: "rgba(244,114,182,0.2)",
    bg: "rgba(244,114,182,0.05)",
    points: [
      "Developed Python-Oracle authentication system with automated validation logic for enterprise ERP",
      "Exposure to SAP ERP, SCADA/PLC systems and cybersecurity in enterprise environment",
      "Covered Oracle databases, Python automation in 4-week intensive training",
    ],
  },
  {
    emoji: "⛓️",
    role: "Blockchain Development Intern",
    company: "Quadb Tech",
    period: "Mar 2025 – Apr 2025",
    location: "Remote",
    color: "var(--indigo)",
    border: "rgba(129,140,248,0.2)",
    bg: "rgba(129,140,248,0.05)",
    points: [
      "Built 5+ production-ready dApps across Aptos, ICP, Ethereum & Solana — Lending-Borrowing Protocol, SPL Token system, Gas Fee Tracker",
      "Implemented reentrancy attack mitigation on Ethereum smart contracts",
      "Developed canister-based storage solutions on ICP for secure on-chain data management",
    ],
  },
  {
    emoji: "💼",
    role: "Software Engineering Intern",
    company: "Invyu",
    period: "Mar 2024 – May 2024",
    location: "Remote",
    color: "var(--purple)",
    border: "rgba(192,132,252,0.2)",
    bg: "rgba(192,132,252,0.05)",
    points: [
      "Built Employee Management System using React.js, Node.js & Firebase serving 200+ users with task assignment, shift scheduling & leave workflows",
      "Implemented geofencing-based attendance validation & automated alerts, reducing manual follow-ups by 40%",
      "Built role-based dashboards with real-time Firebase updates for daily coordination",
    ],
  },
];

export default function Experience() {
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
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="fade-in font-mono text-sm mb-4" style={{ color: "var(--purple)" }}>
            03 / experience
          </p>
          <h2 className="fade-in font-display font-bold text-4xl md:text-5xl" style={{ animationDelay: "0.1s" }}>
            Where I've{" "}
            <span className="gradient-text">Worked</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, var(--purple), var(--pink), transparent)" }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="fade-in md:pl-16 relative"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3.5 top-6 w-5 h-5 rounded-full hidden md:flex items-center justify-center text-xs"
                  style={{
                    background: exp.color,
                    boxShadow: `0 0 12px ${exp.color}`,
                    transform: "translateX(-50%)",
                  }}
                />

                <div
                  className="card-hover p-6 rounded-2xl"
                  style={{ background: exp.bg, border: `1px solid ${exp.border}` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{exp.emoji}</span>
                      <div>
                        <h3 className="font-display font-bold text-lg">{exp.role}</h3>
                        <p className="font-mono text-sm" style={{ color: exp.color }}>{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${exp.border}`, color: exp.color }}>
                        {exp.period}
                      </p>
                      <p className="font-mono text-xs mt-1" style={{ color: "var(--muted)" }}>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-2 font-body text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                        <span style={{ color: exp.color, flexShrink: 0 }}>→</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}