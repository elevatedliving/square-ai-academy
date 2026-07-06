import { useState, useEffect } from "react";
import logo from "@assets/SquareAI_Logo_Primary_Transparent_v5_1782827954510.png";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav id="nav" className={scrolled ? "scrolled" : ""} aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#" aria-label="Square AI Academy — home" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="Square AI Academy" style={{ height: "56px", width: "auto" }} />
          </a>
          <ul className="nav-links" role="list">
            <li><a href="#about">About</a></li>
            <li><a href="#next-event">Events</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#built-for-you">Built for You</a></li>
            <li><a href="#funding">Funding</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button
            className="nav-cta"
            onClick={() => scrollTo("contact")}
          >
            Register Interest
          </button>
          <button
            className="hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <a href="#about" onClick={() => scrollTo("about")}>About</a>
        <a href="#next-event" onClick={() => scrollTo("next-event")}>Events</a>
        <a href="#courses" onClick={() => scrollTo("courses")}>Courses</a>
        <a href="#built-for-you" onClick={() => scrollTo("built-for-you")}>Built for You</a>
        <a href="#funding" onClick={() => scrollTo("funding")}>Funding</a>
        <a href="#contact" onClick={() => scrollTo("contact")}>Contact</a>
        <a
          href="#contact"
          className="nav-cta"
          onClick={() => scrollTo("contact")}
        >
          Register Interest
        </a>
      </div>
    </>
  );
}
