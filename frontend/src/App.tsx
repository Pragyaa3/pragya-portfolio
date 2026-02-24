import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import ChatWidget from "./components/ChatWidget";

export default function App() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    const follower = document.createElement("div");
    follower.className = "cursor-follower";
    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    let fx = 0, fy = 0;
    let mx = 0, my = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    const animate = () => {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      follower.style.left = `${fx}px`;
      follower.style.top = `${fy}px`;
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", onMove);
      cursor.remove();
      follower.remove();
    };
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <ChatWidget />
    </main>
  );
}