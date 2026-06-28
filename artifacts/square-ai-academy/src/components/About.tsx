export default function About() {
  const corners = [
    { num: "1", title: "Awareness", desc: "I can see AI in the world around me", cls: "corner-block--1" },
    { num: "2", title: "Understanding", desc: "I understand how AI works, its ethics and limitations", cls: "corner-block--2" },
    { num: "3", title: "Application", desc: "I can use AI tools practically and with confidence", cls: "corner-block--3" },
    { num: "4", title: "Integration", desc: "AI has become part of how I think and work", cls: "corner-block--4" },
  ];

  const squareLetters = [
    { char: "S", word: "See", desc: "Spot AI in your everyday life" },
    { char: "Q", word: "Question", desc: "Know when to trust it" },
    { char: "U", word: "Use", desc: "Have a go — it's easier than you think" },
    { char: "A", word: "Apply", desc: "Put it to work in your real life" },
    { char: "R", word: "Reflect", desc: "Use AI responsibly" },
    { char: "E", word: "Evolve", desc: "Stay curious, keep learning" },
  ];

  return (
    <section id="about" className="section section--cream" aria-label="About the Academy">
      <div className="container">
        <span className="section-label">About</span>
        <div className="about-grid">
          <div>
            <h2 className="about-heading">Why Square?</h2>
            <p className="about-body">
              We chose the square for a reason. Every side equal. Every angle
              exact. It doesn't bend when things get hard. It holds.
            </p>
            <p className="about-body">
              We built Square AI Academy on that idea. Whatever brings you
              through our door, you get the same standard as everyone else. AI
              learning that is solid, honest, and built to last.
            </p>
            <span className="gold-rule--short" />
            <blockquote className="pull-quote">
              "Every turning point needs the right angle."
            </blockquote>
          </div>
          <div>
            <div className="four-corners" role="list" aria-label="Four stages of AI learning">
              {corners.map((c) => (
                <div key={c.num} className={`corner-block ${c.cls}`} role="listitem">
                  <div className="corner-num">{c.num}</div>
                  <div className="corner-title">{c.title}</div>
                  <div className="corner-desc">{c.desc}</div>
                </div>
              ))}
            </div>
            <div className="square-model" aria-label="S.Q.U.A.R.E. learning model trademark">
              <span className="square-model-label">The S.Q.U.A.R.E. Learning Model™</span>
              <div className="square-letters">
                {squareLetters.map((item) => (
                  <div key={item.char} className="square-letter">
                    <div className="sq-char">{item.char}</div>
                    <div className="sq-word">{item.word}</div>
                    <div className="sq-desc">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="location-callout" aria-label="Location">
          <p>We are based in Woolwich, SE18, South East London. Our doors are open.</p>
        </div>
      </div>
    </section>
  );
}
