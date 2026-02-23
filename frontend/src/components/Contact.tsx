import { useEffect, useRef } from "react";

export default function Contact() {
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
    <section id="contact" className="py-32 px-6" style={{ background: "rgba(19,19,26,0.5)" }} ref={ref}>
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <p className="fade-in font-mono text-sm mb-4" style={{ color: "var(--purple)" }}>
          04 / say hello
        </p>
        <h2 className="fade-in font-display font-bold text-4xl md:text-6xl mb-6 leading-tight" style={{ animationDelay: "0.1s" }}>
          Let's Create Something{" "}
          <span className="gradient-text">Magical</span>
        </h2>
        <p className="fade-in font-body text-base mb-12 leading-relaxed" style={{ color: "var(--muted)", animationDelay: "0.2s" }}>
          Whether it's building the next breakthrough application or composing digital symphonies —
          I'm excited to collaborate and bring your vision to life.
        </p>

        <div className="fade-in flex flex-wrap gap-4 justify-center mb-16" style={{ animationDelay: "0.3s" }}>
          <a
            href="mailto:pragyahurmade2226@gmail.com"
            className="px-8 py-4 rounded-full font-body font-medium text-sm transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, var(--purple), var(--pink))",
              color: "white",
              boxShadow: "0 0 30px rgba(192,132,252,0.4)",
            }}
            onMouseEnter={(e) => ((e.currentTarget.style.transform = "scale(1.05)"))}
            onMouseLeave={(e) => ((e.currentTarget.style.transform = "scale(1)"))}
          >
            Send a Message ✨
          </a>
          <a
            href="https://linkedin.com/in/pragyahurmade03"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-body font-medium text-sm transition-all duration-300"
            style={{
              border: "1px solid rgba(192,132,252,0.3)",
              color: "var(--purple)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(192,132,252,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Pragyaa3"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-body font-medium text-sm transition-all duration-300"
            style={{
              border: "1px solid rgba(129,140,248,0.3)",
              color: "var(--indigo)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(129,140,248,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            GitHub
          </a>
        </div>

        <div className="fade-in" style={{ animationDelay: "0.4s", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "2rem" }}>
          <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
            Crafted with 💜 by Pragya Hurmade · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}