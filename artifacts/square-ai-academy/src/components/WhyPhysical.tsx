const blocks = [
  {
    stat: "1.7M households",
    body: "in the UK have no device at home. 1.6 million people have no internet. Online-only AI training excludes the people who need it most. We remove that barrier.",
  },
  {
    stat: "In the room",
    body: "Confidence is built in rooms. That's why we're not an app. We're a place — and everyone in it is figuring it out together.",
  },
  {
    stat: "Woolwich, SE18",
    body: "We are not a platform. We are not an app. We are a place. You can walk through our door. Come and find us in South East London.",
  },
];

export default function WhyPhysical() {
  return (
    <section id="why-physical" className="section section--aos-bg" aria-label="Why a physical hub">
      <div className="container">
        <span className="section-label">Why Physical</span>
        <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
          Learning happens in a room.
        </h2>
        <div className="physical-grid">
          {blocks.map((b) => (
            <div key={b.stat} className="physical-block">
              <div className="physical-stat">{b.stat}</div>
              <p className="physical-body">{b.body}</p>
            </div>
          ))}
        </div>
        <div className="location-block" aria-label="Our location">
          <div className="location-icon" aria-hidden="true">📍</div>
          <div>
            <div className="location-text">
              Woolwich, SE18, South East London
              <span>squareaiacademy.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
