import { expertise } from "@/lib/content";
import { AnimatedHeading } from "./motion/AnimatedHeading";
import { RevealImage } from "./motion/RevealImage";
import { Counter } from "./motion/Counter";

export function Expertise() {
  return (
    <section className="section expertise" id="expertise">
      <div className="container expertise__inner">
        <div className="expertise__content">
          <span className="eyebrow">{expertise.eyebrow}</span>
          <AnimatedHeading as="h2" className="section-title" text={expertise.title} />
          <p className="section-text">{expertise.text}</p>

          <div className="expertise__divider" />

          <ul className="expertise__features">
            {expertise.features.map((f, i) => (
              <li key={i}>
                <Check />
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="expertise__media">
          <span className="expertise__shape" aria-hidden />
          <RevealImage src={expertise.images[0]} alt="" className="expertise__img expertise__img--1" />
          <RevealImage src={expertise.images[1]} alt="" className="expertise__img expertise__img--2" />
          <div className="expertise__badge">
            <span className="expertise__badge-icon"><Phone /></span>
            <div>
              <strong><Counter value={expertise.badge.value} suffix={expertise.badge.suffix} /></strong>
              <span>{expertise.badge.label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect width="24" height="24" rx="7" fill="#5E5EEE" />
      <path d="M7 12.5 10.5 16 17 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Phone() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
