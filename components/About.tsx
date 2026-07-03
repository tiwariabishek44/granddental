import { about, IMG } from "@/lib/content";
import { AnimatedHeading } from "./motion/AnimatedHeading";
import { RevealImage } from "./motion/RevealImage";
import { Counter } from "./motion/Counter";

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <div className="about__media">
          <RevealImage src={IMG.about} alt="About the clinic" className="about__main-img" />
          <div className="about__badge">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={about.badge.img} alt="" />
            <div className="about__badge-inner">
              <strong><Counter value={about.badge.value} suffix={about.badge.suffix} /></strong>
              <span>{about.badge.label}</span>
            </div>
          </div>
        </div>

        <div className="about__content">
          <span className="eyebrow">{about.eyebrow}</span>
          <AnimatedHeading as="h2" className="section-title" text={about.title} />
          <p className="section-text">{about.text}</p>

          <div className="about__divider" />

          <div className="about__stats">
            {about.stats.map((s) => (
              <div className="about-stat" key={s.label}>
                <strong><Counter value={s.value} suffix={s.suffix} /></strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="about__divider" />

          <div className="about__foot">
            <a href={about.cta.href} className="btn btn--primary">
              {about.cta.label}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <div className="about__founder">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.founder} alt={about.founder.name} />
              <div>
                <strong>{about.founder.name}</strong>
                <span>{about.founder.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
