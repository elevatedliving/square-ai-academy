const cards = [
  {
    amount: "£2.5bn",
    title: "Youth Guarantee",
    body: "Every 16–24 year old guaranteed access to learning, work or apprenticeship. DWP referral pathway. £3,000 Youth Jobs Grant per long-term unemployed hire. Trailblazer pilots across England, Scotland and Wales.",
  },
  {
    amount: "£225k",
    title: "TechLocal / AI Skills Grant",
    body: "Up to £225,000 available for AI skills coaching providers. Adult Skills Fund £1.4bn per year for digital and AI skills. New modular AI strategy training from April 2026.",
  },
  {
    amount: "£2,000",
    title: "Growth & Skills Levy",
    body: "Full funding of apprenticeships for under-25s at SMEs. £2,000 SME apprenticeship incentives. New Foundation Apprenticeships in key sectors across the UK.",
  },
  {
    amount: "UKSPF",
    title: "Community & Redundancy Routes",
    body: "UK Shared Prosperity Fund routes for career changers, community cohorts, and outplacement programmes serving adults in employment transition across South East London.",
  },
];

export default function Funding() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="funding" className="section section--cream" aria-label="Government funding and policy alignment">
      <div className="container">
        <span className="section-label">Funding</span>
        <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1.25rem" }}>
          Aligned with national priorities.
        </h2>
        <p className="funding-intro">
          Square AI Academy is positioned within the UK Government's key
          funding and policy frameworks for AI skills, youth employment, and
          community learning.
        </p>
        <div className="funding-grid">
          {cards.map((card) => (
            <div key={card.title} className="funding-card">
              <div className="funding-amount">{card.amount}</div>
              <div className="funding-title">{card.title}</div>
              <p className="funding-body">{card.body}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button
            className="btn btn--outline-gold"
            onClick={() => scrollTo("contact")}
          >
            Partner with us on funding
          </button>
        </div>
      </div>
    </section>
  );
}
