import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or email us directly at enquiry@squareaiacademy.com");
      }
    } catch {
      alert("Something went wrong. Please try again or email us directly at enquiry@squareaiacademy.com");
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
        <div className="contact-form-wrap">
            <form
              id="contact-form"
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
                  <option>Business Owner</option>
                  <option>Educator / Trainer</option>
                  <option>Employer / HR</option>
                  <option>Partner / Funder</option>
                  <option>DWP / Job Centre</option>
                  <option>Press / Media</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn--gold"
                style={{ width: "100%", marginTop: "0.5rem" }}
              >
                Get in Touch
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
    </section>
  );
}
