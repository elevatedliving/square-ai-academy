import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!formData.name || !formData.email || !formData.role) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", role: "", message: "" });
    } catch {
      setError("Something went wrong sending your message. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section section--gold-light" aria-label="Contact and register interest">
      <div className="container">
        <span className="section-label">Contact</span>
        <h2 className="contact-heading">Ready to begin?</h2>
        <p className="contact-sub">
          Whether you are a learner, an employer, an educator or a partner — we
          want to hear from you.
        </p>
        <div className="contact-grid">
          <div>
            <div className="contact-detail">
              <div className="contact-item">
                <strong>Email</strong>
                [email address to be confirmed]
              </div>
              <div className="contact-item">
                <strong>Location</strong>
                Woolwich, SE18, South East London
              </div>
              <div className="contact-item">
                <strong>Website</strong>
                squareaiacademy.com
              </div>
            </div>
            <div className="social-links" aria-label="Social media">
              <a
                className="social-link"
                href="https://www.linkedin.com/groups/25340017/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>
          <div>
            <form
              id="contact-form"
              noValidate
              aria-label="Register interest form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="role">I am a…</label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select your role</option>
                  <option>Community Member / Learner</option>
                  <option>Young Person (14–24)</option>
                  <option>Entrepreneur / Self-employed</option>
                  <option>Educator / Trainer</option>
                  <option>Employer / HR</option>
                  <option>Partner / Funder</option>
                  <option>DWP / Job Centre</option>
                  <option>Press / Media</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  Message{" "}
                  <span style={{ fontWeight: 400, color: "var(--taupe)" }}>(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              {error && (
                <div
                  role="alert"
                  aria-live="polite"
                  style={{ color: "#b3261e", fontSize: "0.875rem", marginBottom: "0.75rem" }}
                >
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="btn btn--gold"
                style={{ width: "100%", marginTop: "0.5rem" }}
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Get in Touch"}
              </button>
              <div
                className={`form-success${submitted ? " visible" : ""}`}
                role="alert"
                aria-live="polite"
              >
                ✓ Thank you — we will be in touch soon.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
