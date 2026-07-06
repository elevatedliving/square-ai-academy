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

const EVENT_ID = "1993267333251";
const TRIGGER_ID = `eventbrite-widget-modal-trigger-${EVENT_ID}`;

export default function NextEvent() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="eb_widgets"]');

    const initWidget = () => {
      window.EBWidgets?.createWidget({
        widgetType: "checkout",
        eventId: EVENT_ID,
        modal: true,
        modalTriggerElementId: TRIGGER_ID,
        onOrderComplete: () => {
          console.log("Order complete!");
        },
      });
    };

    if (window.EBWidgets) {
      initWidget();
      return;
    }

    if (existingScript) {
      existingScript.addEventListener("load", initWidget);
      return () => existingScript.removeEventListener("load", initWidget);
    }

    const script = document.createElement("script");
    script.src = "https://www.eventbrite.co.uk/static/widgets/eb_widgets.js";
    script.async = true;
    script.onload = initWidget;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section id="next-event" className="section section--gold-light" aria-label="Our next event">
      <div className="container">
        <span className="section-label">Events</span>
        <h2 className="eventbrite-heading" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1.5rem", borderTop: "none", paddingTop: 0, marginTop: 0 }}>
          Our Next Event
        </h2>
        <div className="eventbrite-block" style={{ marginTop: 0 }}>
          <img
            src="/ai-coffee-club-event.jpg"
            alt="AI Coffee Club — AI Basics for Absolute Beginners"
            className="eventbrite-image"
          />
          <div className="eventbrite-details">
            <p className="eventbrite-intro">
              <strong>AI Coffee Club — AI Basics for Absolute Beginners</strong>. Join us in person for a relaxed, hands-on session in Woolwich.
            </p>
            <noscript>
              <a
                href={`https://www.eventbrite.co.uk/e/ai-coffee-club-ai-basics-for-absolute-beginners-in-person-tickets-${EVENT_ID}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Buy Tickets on Eventbrite
              </a>
            </noscript>
            <button id={TRIGGER_ID} className="btn btn--teal" type="button">
              Book your place
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
