const panels = [
  {
    cls: "audience-panel--1",
    title: "For Everyone in the Community",
    body: `Square AI Academy is rooted in Woolwich and open to the whole community — whatever your age, background, or starting point. If you are curious about AI, you belong here.\n\nWe have a particular focus on young people aged 14–24, as well as adults returning to learning, people facing redundancy, and anyone who has been told that technology is not for them.`,
    stat: "Over 1 million young people in the UK are missing out on the AI economy. Millions more adults face the same risk. We exist to change that.",
    link: "See what's on offer →",
    linkTarget: "courses",
  },
  {
    cls: "audience-panel--2",
    title: "For Entrepreneurs",
    body: `You have built something. AI can take it further. Our course is built specifically for business owners and self-employed people who want practical AI skills — not a lecture on theory.\n\nWe acknowledge your expertise. AI adds to it, not replaces it.`,
    stat: "56% of UK employers rate their own AI knowledge as beginner or novice. Close that gap on your own terms.",
    link: "AI for Entrepreneurs →",
    linkTarget: "courses",
  },
  {
    cls: "audience-panel--3",
    title: "For Educators",
    body: `You cannot teach what you do not know. Square AI Academy offers CPD for teachers, trainers and learning professionals who need to stay ahead — and speak about AI with confidence and credibility.\n\nAI is already in your students' lives. It belongs in your professional toolkit too.`,
    stat: "CPD you can evidence. Qualifications that hold up in professional review.",
    link: "CPD enquiries →",
    linkTarget: "contact",
  },
  {
    cls: "audience-panel--4",
    title: "For Employers",
    body: `Give your team nationally recognised AI qualifications delivered at our Woolwich hub. We handle the learning. You get a more capable, more confident workforce.\n\nSimple process, no HR overhead. Talk to us about team enrolment.`,
    stat: "AI-skill roles projected to grow from 158,000 to 3.9M by 2035. DSIT, 2026.",
    link: "Talk to us about team training →",
    linkTarget: "contact",
  },
];

export default function BuiltForYou() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="built-for-you" className="section section--community" aria-label="Built for you">
      <div className="container">
        <span className="section-label">Built for You</span>
        <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1.25rem" }}>
          Four equal sides. One standard of excellence.
        </h2>
        <p className="audience-intro">
          Every side of our square is equal. No audience is prioritised over
          another in terms of quality of provision.
        </p>
        <div className="audience-grid">
          {panels.map((p) => (
            <div key={p.title} className={`audience-panel ${p.cls}`}>
              <h3 className="audience-panel-title">{p.title}</h3>
              <div className="audience-panel-body">
                {p.body.split("\n\n").map((para, i) => (
                  <p key={i} style={{ marginBottom: i < p.body.split("\n\n").length - 1 ? "1rem" : 0 }}>
                    {para}
                  </p>
                ))}
              </div>
              <p className="audience-stat">{p.stat}</p>
              <button
                className="audience-link"
                onClick={() => scrollTo(p.linkTarget)}
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
              >
                {p.link}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
