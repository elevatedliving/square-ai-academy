export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" aria-label="Introduction">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">AI Academy · Woolwich, SE18 · South East London</p>
          <h1 className="hero-headline">
            AI belongs to <em>everyone.</em>
          </h1>
          <p className="hero-sub">
            Square AI Academy is South East London's{" "}
            <strong>first physical AI learning hub</strong>. Open to all — from
            14 to 60+, from curious to confident. We are in Woolwich and our
            doors are open.
          </p>
          <p className="hero-select-prompt">Who are you here for?</p>
          <div className="self-select" role="group" aria-label="Find your path">
            {["Community", "Entrepreneurs", "Educators", "Employers"].map((label) => (
              <button
                key={label}
                className="self-select-btn"
                onClick={() => scrollTo("built-for-you")}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="hero-stats" role="list">
            <div className="hero-stat" role="listitem">
              <div className="hero-stat-num">1M+</div>
              <div className="hero-stat-text">
                young people in the UK missing out on the AI economy
              </div>
              <div className="hero-stat-source">ONS, 2026</div>
            </div>
            <div className="hero-stat" role="listitem">
              <div className="hero-stat-num">56%</div>
              <div className="hero-stat-text">
                of UK employers rate their teams' AI knowledge as beginner or novice
              </div>
              <div className="hero-stat-source">DSIT, 2026</div>
            </div>
            <div className="hero-stat" role="listitem">
              <div className="hero-stat-num">3.9M</div>
              <div className="hero-stat-text">
                AI-skill jobs projected in the UK by 2035
              </div>
              <div className="hero-stat-source">DSIT, 2026</div>
            </div>
          </div>
        </div>
        <div className="hero-image-col">
          <img
            src="/hero-laptop.png"
            alt="A laptop showing an AI interface in a bright, cosy workspace"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
