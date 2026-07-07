import { useEffect } from "react";

declare global {
  interface Window {
    EBWidgets?: {
      createWidget: (opts: {
        widgetType: string;
        eventId: string;
        modal: boolean;
        modalTriggerElementId: string;
        onOrderComplete?: () => void;
      }) => void;
    };
  }
}

const events = [
  {
    id: "1993267333251",
    title: "AI Coffee Club — AI Basics for Absolute Beginners",
    description: "A relaxed, hands-on session for anyone curious about AI. No experience needed — just bring yourself.",
    image: "/ai-coffee-club-event.jpg",
    imageAlt: "AI Coffee Club event poster",
  },
  {
    id: "1993448306547",
    title: "Getting Ahead with AI — Practical AI Skills for Beginners",
    description: "A 4-week course starting 6 Aug · 18:00 · Equitable House, Woolwich. Build practical AI skills you can use straight away.",
    image: "/getting-ahead-with-ai-event.png",
    imageAlt: "Getting Ahead with AI event poster",
  },
];

export default function NextEvent() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="eb_widgets"]');

    const initWidgets = () => {
      events.forEach(({ id }) => {
        window.EBWidgets?.createWidget({
          widgetType: "checkout",
          eventId: id,
          modal: true,
          modalTriggerElementId: `eventbrite-widget-modal-trigger-${id}`,
          onOrderComplete: () => {
            console.log("Order complete!");
          },
        });
      });
    };

    if (window.EBWidgets) {
      initWidgets();
      return;
    }

    if (existingScript) {
      existingScript.addEventListener("load", initWidgets);
      return () => existingScript.removeEventListener("load", initWidgets);
    }

    const script = document.createElement("script");
    script.src = "https://www.eventbrite.co.uk/static/widgets/eb_widgets.js";
    script.async = true;
    script.onload = initWidgets;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section id="next-event" className="section section--gold-light" aria-label="Upcoming events">
      <div className="container">
        <span className="section-label">Events</span>
        <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "2rem" }}>
          Upcoming Events
        </h2>

        <div className="events-list">
          {events.map(({ id, title, description, image, imageAlt }) => (
            <div key={id} className="eventbrite-block">
              <img
                src={image}
                alt={imageAlt}
                className="eventbrite-image"
              />
              <div className="eventbrite-details">
                <h3 className="event-card-title">{title}</h3>
                <p className="eventbrite-intro">{description}</p>
                <noscript>
                  <a
                    href={`https://www.eventbrite.co.uk/e/tickets-${id}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Buy Tickets on Eventbrite
                  </a>
                </noscript>
                <button
                  id={`eventbrite-widget-modal-trigger-${id}`}
                  className="btn btn--teal"
                  type="button"
                >
                  Book your place
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
