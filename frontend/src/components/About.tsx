import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto" ref={ref}>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left - text */}
        <div>
          <p className="fade-in font-mono text-sm mb-4" style={{ color: "var(--purple)", animationDelay: "0s" }}>
            01 / about me
          </p>
          <h2 className="fade-in font-display font-bold text-4xl md:text-5xl mb-6 leading-tight" style={{ animationDelay: "0.1s" }}>
            Developer.{" "}
            <span className="gradient-text">Leader.</span>
            <br />
            Innovator.
          </h2>
          <p className="fade-in font-body text-base mb-6 leading-relaxed" style={{ color: "var(--muted)", animationDelay: "0.2s" }}>
            Hey there! I code, I deploy, I break things (and fix them) — full-stack & blockchain dev at your service.
            2+ years of building real applications that solve actual problems.
          </p>
          <p className="fade-in font-body text-base mb-8 leading-relaxed" style={{ color: "var(--muted)", animationDelay: "0.3s" }}>
            I'm the <span style={{ color: "var(--purple)" }}>Technical Lead at Code4All</span>, where I mentor juniors
            taking their first steps in tech — from React workshops to first open source contributions. I love those
            "aha!" moments when someone's code finally clicks.
          </p>
          <div className="fade-in flex flex-wrap gap-3" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://github.com/Pragyaa3"
              target="_blank"
              rel="noopener noreferrer"
              className="skill-pill"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/pragyahurmade03"
              target="_blank"
              rel="noopener noreferrer"
              className="skill-pill"
              style={{ color: "var(--indigo)", borderColor: "rgba(129,140,248,0.3)", background: "rgba(129,140,248,0.08)" }}
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:pragyahurmade2226@gmail.com"
              className="skill-pill"
              style={{ color: "var(--pink)", borderColor: "rgba(244,114,182,0.3)", background: "rgba(244,114,182,0.08)" }}
            >
              Email ↗
            </a>
          </div>
        </div>

        {/* Right - cards */}
        <div className="fade-in grid grid-cols-2 gap-4" style={{ animationDelay: "0.3s" }}>
          {[
            { emoji: "🎯", title: "Technical Lead", subtitle: "Code4All", desc: "Mentoring 50+ developers, running workshops on React, Git & open source" },
            { emoji: "🎸", title: "President", subtitle: "RGPV Jammers", desc: "Organizing college fests & performing on stage — debugging & guitar solos have more in common than you'd think" },
            { emoji: "⛓️", title: "Blockchain Dev", subtitle: "Web3 Builder", desc: "Writing smart contracts on Ethereum, Solana & ICP that actually work" },
            { emoji: "🥽", title: "VR Creator", subtitle: "Immersive Tech", desc: "Building at the frontier of WebXR and spatial computing" },
          ].map((card) => (
            <div
              key={card.title}
              className="card-hover p-5 rounded-2xl"
              style={{ background: "var(--surface)", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div className="text-2xl mb-3">{card.emoji}</div>
              <div className="font-display font-semibold text-sm mb-0.5">{card.title}</div>
              <div className="font-mono text-xs mb-2" style={{ color: "var(--purple)" }}>{card.subtitle}</div>
              <div className="font-body text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}