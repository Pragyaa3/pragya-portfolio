import { useState, useEffect } from "react";

const navLinks = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(192,132,252,0.1)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-display font-bold text-xl tracking-tight gradient-text"
        >
          PH
        </a>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className="font-body text-sm tracking-wide transition-all duration-200 relative group"
                style={{
                  color: active === link ? "var(--purple)" : "var(--muted)",
                }}
              >
                {link}
                <span
                  className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"
                  style={{ width: active === link ? "100%" : "0%" }}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:pragyahurmade2226@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-300"
          style={{
            background: "rgba(192,132,252,0.1)",
            border: "1px solid rgba(192,132,252,0.3)",
            color: "var(--purple)",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = "rgba(192,132,252,0.2)";
            (e.target as HTMLElement).style.boxShadow = "0 0 20px rgba(192,132,252,0.3)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = "rgba(192,132,252,0.1)";
            (e.target as HTMLElement).style.boxShadow = "none";
          }}
        >
          Hire Me ✨
        </a>
      </div>
    </nav>
  );
}