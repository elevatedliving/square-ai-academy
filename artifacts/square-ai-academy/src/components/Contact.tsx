import { useEffect } from "react";

declare global {
  interface Window {
    ml?: (...args: unknown[]) => void;
  }
}

export default function Contact() {
  useEffect(() => {
    if (window.ml) {
      window.ml("account", "2491186");
      return;
    }
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.onload = () => {
      window.ml!("account", "2491186");
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="section section--gold-light" aria-label="Contact and register interest">
      <div className="container">
        <span className="section-label">Contact</span>
        <h2 className="contact-heading">Ready to begin?</h2>
        <p className="contact-sub">
          Whether you are a learner, an employer, an educator or a partner — we
          want to hear from you.
        </p>
        <div className="ml-embedded" data-form="Ure4fS"></div>
      </div>
    </section>
  );
}
