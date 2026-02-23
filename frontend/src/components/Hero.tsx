import { useEffect, useRef } from "react";

const floatingEmojis = ["🌸", "🌼", "🦋", "♪", "⛓️", "🥽", "🚀", "⚡"];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string }[] = [];
    const colors = ["#c084fc", "#f472b6", "#818cf8"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(192,132,252,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Orbs */}
      <div className="orb w-96 h-96 top-10 -left-20 z-0" style={{ background: "rgba(192,132,252,0.12)", animationDuration: "8s" }} />
      <div className="orb w-80 h-80 bottom-10 -right-10 z-0" style={{ background: "rgba(244,114,182,0.1)", animationDuration: "10s", animationDelay: "2s" }} />
      <div className="orb w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" style={{ background: "rgba(129,140,248,0.08)", animationDuration: "12s", animationDelay: "4s" }} />

      {/* Floating emojis */}
      {floatingEmojis.map((emoji, i) => (
        <span
          key={i}
          className="absolute text-2xl select-none pointer-events-none z-10"
          style={{
            left: `${10 + (i * 12) % 85}%`,
            top: `${15 + (i * 17) % 70}%`,
            animation: `float ${5 + i * 0.7}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            opacity: 0.3,
            filter: "blur(0.5px)",
          }}
        >
          {emoji}
        </span>
      ))}

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono mb-8"
          style={{
            background: "rgba(192,132,252,0.08)",
            border: "1px solid rgba(192,132,252,0.2)",
            color: "var(--purple)",
            animationDelay: "0.2s",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>

        <h1
          className="font-display font-bold mb-6 leading-none"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          <span style={{ color: "var(--text)" }}>Pragya</span>
          <br />
          <span className="gradient-text">Hurmade</span>
        </h1>

        <p
          className="font-display text-lg md:text-2xl mb-4 font-medium"
          style={{ color: "var(--muted)" }}
        >
          Where Full-Stack Meets{" "}
          <span style={{ color: "var(--purple)" }}>Blockchain</span> Meets{" "}
          <span style={{ color: "var(--pink)" }}>Virtual Reality</span>
        </p>

        <p className="font-body text-base mb-12 max-w-xl mx-auto" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          Developer who builds at the intersection of emerging technologies. I code the future, one project at a time.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full font-body font-medium text-sm transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, var(--purple), var(--pink))",
              color: "white",
              boxShadow: "0 0 30px rgba(192,132,252,0.4)",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = "scale(1.05)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = "scale(1)")}
          >
            View My Work 🚀
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full font-body font-medium text-sm transition-all duration-300"
            style={{
              background: "transparent",
              border: "1px solid rgba(192,132,252,0.4)",
              color: "var(--purple)",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = "rgba(192,132,252,0.1)";
              (e.target as HTMLElement).style.borderColor = "rgba(192,132,252,0.7)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = "transparent";
              (e.target as HTMLElement).style.borderColor = "rgba(192,132,252,0.4)";
            }}
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-8 md:gap-16 justify-center mt-16 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          {[
            { value: "20+", label: "Projects" },
            { value: "2+", label: "Years" },
            { value: "50+", label: "Devs Mentored" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-bold text-3xl md:text-4xl gradient-text">{value}</div>
              <div className="font-body text-xs mt-1" style={{ color: "var(--muted)" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2" style={{ color: "var(--muted)" }}>
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-purple-400 to-transparent animate-pulse" />
      </div>
    </section>
  );
}