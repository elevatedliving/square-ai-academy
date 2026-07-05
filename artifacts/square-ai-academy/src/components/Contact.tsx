import { useEffect, useRef } from "react";

declare global {
  interface Window {
    ml?: (...args: unknown[]) => void;
  }
}

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Inject the ml-embedded div fresh so MailerLite sees it when the script runs
    container.innerHTML = '<div class="ml-embedded" data-form="Ure4fS"></div>';

    // Remove any previous MailerLite script + state so it re-initialises cleanly
    const existing = document.querySelector('script[src*="mailerlite"]');
    if (existing) existing.remove();
    delete window.ml;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.onload = () => {
      window.ml?.("account", "2491186");
    };
    document.body.appendChild(script);

    return () => {
      const s = document.querySelector('script[src*="mailerlite"]');
      if (s) s.remove();
    };
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
        <div ref={containerRef} />
      </div>
    </section>
  );
}
