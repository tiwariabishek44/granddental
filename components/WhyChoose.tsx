import { whyChoose } from "@/lib/content";
import { AnimatedHeading } from "./motion/AnimatedHeading";

export function WhyChoose() {
  return (
    <section className="section why" id="why">
      <div className="container why__inner">
        <div className="why__content">
          <span className="eyebrow eyebrow--light">{whyChoose.eyebrow}</span>
          <AnimatedHeading as="h2" className="section-title section-title--light" text={whyChoose.title} />
          <p className="why__text">{whyChoose.text}</p>
          <a href={whyChoose.cta.href} className="btn btn--primary btn--lg">
            {whyChoose.cta.label}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>

        <div className="why__figure">
          <div className="why__glow" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={whyChoose.image} alt="Our specialist" />
        </div>

        <ul className="why__features">
          {whyChoose.items.map((f) => (
            <li key={f.title} className="why-feature">
              <span className="why-feature__icon"><Spark /></span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Spark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2l2.4 6.9L21 11l-6.6 2.1L12 20l-2.4-6.9L3 11l6.6-2.1L12 2Z" fill="currentColor" />
    </svg>
  );
}
