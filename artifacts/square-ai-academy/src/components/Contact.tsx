import { useEffect } from "react";

declare global {
  interface Window {
    ml?: (...args: unknown[]) => void;
  }
}

export default function Contact() {
  useEffect(() => {
    // Script in index.html runs before React renders, so the ml-embedded div
    // isn't found on first scan. Calling ml('account') again after mount
    // triggers a fresh DOM scan and renders the form.
    if (window.ml) {
      window.ml("account", "2491186");
    }
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
