import { useEffect, useRef } from "react";

const achievements = [
  {
    emoji: "🏆",
    title: "Smart India Hackathon 2025",
    badge: "Grand Finalist",
    org: "Ministry of AYUSH, Government of India",
    desc: "Developed blockchain-based traceability solution for Ayurvedic supply chain management, selected among top teams nationally.",
    color: "var(--purple)",
    border: "rgba(192,132,252,0.25)",
    bg: "rgba(192,132,252,0.06)",
    year: "2025",
  },
  {
    emoji: "⛓️",
    title: "WCHL Hackathon – ICP Blockchain",
    badge: "National Finalist",
    org: "Internet Computer Protocol",
    desc: "Advanced through regional and national rounds with VerdictXR — an immersive AI-powered 3D courtroom simulation.",
    color: "var(--pink)",
    border: "rgba(244,114,182,0.25)",
    bg: "rgba(244,114,182,0.06)",
    year: "2025",
  },
  {
    emoji: "🌐",
    title: "ETHGlobal Hackathon",
    badge: "Participant",
    org: "ETHGlobal",
    desc: "Developed DataDAO platform for privacy-preserving data monetization using decentralized storage and verification protocols.",
    color: "var(--indigo)",
    border: "rgba(129,140,248,0.25)",
    bg: "rgba(129,140,248,0.06)",
    year: "Sep 2025",
  },
  {
    emoji: "🌸",
    title: "GirlScript Summer of Code & Hacktoberfest",
    badge: "Open Source Contributor",
    org: "GSSoC / GitHub",
    desc: "Contributed to 15+ open-source repositories through bug fixes, documentation enhancements, and code quality improvements with global communities.",
    color: "var(--purple)",
    border: "rgba(192,132,252,0.25)",
    bg: "rgba(192,132,252,0.06)",
    year: "2024",
  },
];

const stats = [
  { value: "2x", label: "National Finalist" },
  { value: "15+", label: "Open Source PRs" },
  { value: "3", label: "Hackathons" },
  { value: "500+", label: "Event Participants" },
];

export default function Achievements() {
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
    <section id="achievements" className="py-32 px-6" style={{ background: "rgba(19,19,26,0.5)" }} ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="fade-in font-mono text-sm mb-4" style={{ color: "var(--purple)" }}>
            05 / recognition
          </p>
          <h2 className="fade-in font-display font-bold text-4xl md:text-5xl" style={{ animationDelay: "0.1s" }}>
            Achievements &{" "}
            <span className="gradient-text">Hackathons</span>
          </h2>
          <p className="fade-in font-body mt-4 text-base" style={{ color: "var(--muted)", animationDelay: "0.2s" }}>
            Competing, contributing, and building at a national level
          </p>
        </div>

        {/* Stats bar */}
        <div className="fade-in grid grid-cols-2 md:grid-cols-4 gap-4 mb-12" style={{ animationDelay: "0.2s" }}>
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="text-center p-5 rounded-2xl"
              style={{ background: "var(--surface)", border: "1px solid rgba(192,132,252,0.1)" }}
            >
              <div className="font-display font-bold text-3xl gradient-text">{value}</div>
              <div className="font-body text-xs mt-1" style={{ color: "var(--muted)" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((ach, i) => (
            <div
              key={ach.title}
              className="fade-in card-hover p-6 rounded-2xl relative overflow-hidden"
              style={{
                background: ach.bg,
                border: `1px solid ${ach.border}`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {/* Year badge */}
              <div
                className="absolute top-4 right-4 font-mono text-xs px-2.5 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.04)", color: "var(--muted)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {ach.year}
              </div>

              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{ach.emoji}</span>
                <div>
                  <span
                    className="inline-block font-mono text-xs px-3 py-1 rounded-full mb-2"
                    style={{ background: ach.border, color: ach.color, border: `1px solid ${ach.border}` }}
                  >
                    {ach.badge}
                  </span>
                  <h3 className="font-display font-bold text-base leading-tight">{ach.title}</h3>
                  <p className="font-mono text-xs mt-1" style={{ color: ach.color }}>{ach.org}</p>
                </div>
              </div>

              <p className="font-body text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {ach.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}