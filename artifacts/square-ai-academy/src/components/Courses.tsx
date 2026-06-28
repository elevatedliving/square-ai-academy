const courses = [
  {
    level: "Entry Level · AQA Unit Award",
    title: "AI Awareness",
    desc: "What is AI, and where is it in your world already? The starting point for everyone — no experience needed.",
    full: false,
  },
  {
    level: "Level 1 · AQA Unit Award",
    title: "AI in Everyday Life",
    desc: "How AI is shaping work, communication and daily decisions — and how to navigate it with confidence.",
    full: false,
  },
  {
    level: "Level 1 · AQA Unit Award",
    title: "Using AI Tools",
    desc: "Hands-on practice with real AI tools for real tasks. You will leave with practical skills you can use immediately.",
    full: false,
  },
  {
    level: "Level 2 · AQA Unit Award",
    title: "AI Ethics and Society",
    desc: "How to think critically about AI — bias, safety, responsibility — and why it matters for everyone, not just developers.",
    full: false,
  },
  {
    level: "Level 2 · AQA Unit Award",
    title: "AI for Entrepreneurs",
    desc: "Apply AI to grow your business. Designed for founders and the self-employed who want practical AI skills — not a lecture on theory. Not a course for beginners starting from zero.",
    full: true,
  },
];

export default function Courses() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="courses" className="section section--aos-bg" aria-label="Courses and qualifications">
      <div className="container">
        <span className="section-label">Courses</span>
        <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1.25rem" }}>
          AI skills you can evidence.
        </h2>
        <p className="courses-intro">
          We offer nationally recognised AI qualifications through the AQA Unit
          Award Scheme — a trusted achievement framework used across community
          and professional learning in the UK. All courses are delivered in
          person at our Woolwich hub.
        </p>
        <div className="courses-grid">
          {courses.map((course) => (
            <article
              key={course.title}
              className={`course-card${course.full ? " course-card--full" : ""}`}
            >
              <div className="course-level">{course.level}</div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.desc}</p>
              <button
                className="course-link"
                onClick={() => scrollTo("contact")}
                style={{ background: "none", border: "none", padding: 0 }}
              >
                Find out more <span aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </div>
        <div className="qual-note" role="note">
          Our qualifications are awarded through the AQA Unit Award Scheme — a
          nationally recognised achievement framework. They are not
          Ofqual-regulated qualifications, but are valued by employers and
          further education providers as evidence of genuine learning and
          achievement.
        </div>
      </div>
    </section>
  );
}
