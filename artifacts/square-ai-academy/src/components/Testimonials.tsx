const testimonials = [
  {
    name: "Floyd M",
    quote:
      "Learning to navigate AI as a complete beginner can feel overwhelming, but working with Kay at Square AI Academy changed everything. She is an absolute powerhouse of an instructor who possesses that rare, brilliant gift of making cutting-edge technology feel approachable, clear, and genuinely exciting. Her passion for sharing knowledge is so engaging that you leave every single session feeling empowered rather than intimidated. If you are a total beginner looking to unlock the power of AI without the headache, learning from Kay is hands-down the best investment you can make. She doesn't just teach you how to use a tool—she completely transforms how you interact with technology.",
  },
  {
    name: "Claudette H",
    quote:
      "Working with Kay at Square AI Academy as an absolute beginner in AI has been an incredible experience! In just a few classes, I've gone from knowing practically nothing to feeling more confident and excited about using AI tools. Kay has a fantastic way of breaking down complex concepts into clear, easy-to-understand lessons without ever feeling overwhelming. Her patience, encouragement, and clear teaching style make every session insightful and fun. I'm genuinely amazed at how much I've learned in such a short amount of time—I highly recommend her classes to anyone looking to start their AI journey!",
  },
  {
    name: "Your Confidence Coach",
    quote:
      "A game-changer for anyone looking to master AI tools without the overwhelm. Kay at Square AI Academy is a phenomenal instructor. Her Claude AI for Beginners training is delivered in jargon-free language and turns it into an accessible, everyday superpower. What sets Kay apart is her relentlessly practical approach—she doesn't just teach theory; she walks you through real-world tasks and actionable strategies that are relevant to your lifestyle or work which you can implement immediately. Thanks to her clear teaching style and patient guidance, I went from being hesitant about AI to confidently using Claude to streamline my daily work. If you have the chance to learn from Kay, take it!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section--cream" aria-label="Client testimonials">
      <div className="container">
        <span className="section-label">Testimonials</span>
        <h2 className="testimonials-heading">What our learners say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <article key={t.name} className="testimonial-card">
              <div className="testimonial-name">{t.name}</div>
              <blockquote className="testimonial-quote">
                <span className="testimonial-open-quote">&ldquo;</span>
                {t.quote}
                <span className="testimonial-close-quote">&rdquo;</span>
              </blockquote>
              <div className="testimonial-stars" aria-label="5 stars">
                {"★★★★★"}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
