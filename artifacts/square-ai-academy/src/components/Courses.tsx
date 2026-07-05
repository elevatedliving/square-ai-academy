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

const courses = [
  {
    title: "AI Awareness",
    desc: "What is AI, and where is it in your world already? The starting point for everyone — no experience needed.",
    full: false,
  },
  {
    title: "AI in Everyday Life",
    desc: "How AI is shaping work, communication and daily decisions — and how to navigate it with confidence.",
    full: false,
  },
  {
    title: "Using AI Tools",
    desc: "Hands-on practice with real AI tools for real tasks. You will leave with practical skills you can use immediately.",
    full: false,
  },
  {
    title: "AI Ethics and Society",
    desc: "How to think critically about AI — bias, safety, responsibility — and why it matters for everyone, not just developers.",
    full: false,
  },
  {
    title: "AI for Entrepreneurs",
    desc: "Apply AI to grow your business. Designed for founders and the self-employed who want practical AI skills — not a lecture on theory.",
    full: true,
  },
];

export default function Courses() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src*="eb_widgets"]'
    );

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
    <section id="courses" className="section section--aos-bg" aria-label="Events and courses">
      <div className="container">
        <span className="section-label">Events &amp; Courses</span>
        <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1.25rem" }}>
          AI skills you can evidence.
        </h2>
        <p className="courses-intro">
          All courses are delivered in person at our Woolwich hub.
        </p>

        <div className="courses-grid">
          {courses.map((course) => (
            <article
              key={course.title}
              className={`course-card${course.full ? " course-card--full" : ""}`}
            >
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.desc}</p>
            </article>
          ))}
        </div>

        <div className="eventbrite-block">
          <img
            src="/ai-coffee-club-event.jpg"
            alt="AI Coffee Club — AI Basics for Absolute Beginners"
            className="eventbrite-image"
          />
          <div className="eventbrite-details">
            <p className="eventbrite-intro">
              Our next event: <strong>AI Coffee Club — AI Basics for Absolute Beginners</strong>. Join us in person for a relaxed, hands-on session in Woolwich.
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
            <button id={TRIGGER_ID} className="btn btn--dark" type="button">
              Book your place
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
