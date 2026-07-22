const ORGANISER_URL = "https://square-ai-academy.eventbrite.com";

export default function NextEvent() {
  return (
    <section id="next-event" className="section section--gold-light" aria-label="Upcoming events">
      <div className="container">
        <span className="section-label">Events</span>
        <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1rem" }}>
          Upcoming Events
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.8", maxWidth: "560px", marginBottom: "2rem" }}>
          View all our upcoming events and book your place directly on Eventbrite.
        </p>
        <a
          href={ORGANISER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--teal"
        >
          See all events on Eventbrite
        </a>
      </div>
    </section>
  );
}
