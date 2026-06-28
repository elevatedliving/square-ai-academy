import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import BuiltForYou from "@/components/BuiltForYou";
import Funding from "@/components/Funding";
import WhyPhysical from "@/components/WhyPhysical";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link" style={{
        position: "absolute", top: "-100px", left: "1rem",
        background: "var(--gold)", color: "var(--dark-brown)",
        padding: "0.5rem 1rem", fontWeight: 600, fontSize: "0.875rem",
        zIndex: 9999, transition: "top 0.2s",
      }}>
        Skip to main content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <hr className="gold-rule" />
        <WhyPhysical />
        <hr className="gold-rule" />
        <About />
        <hr className="gold-rule" />
        <Courses />
        <hr className="gold-rule" />
        <BuiltForYou />
        <hr className="gold-rule" />
        <Funding />
        <hr className="gold-rule" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
