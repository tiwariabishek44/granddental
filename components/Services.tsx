import { services } from "@/lib/content";
import { AnimatedHeading } from "./motion/AnimatedHeading";
import { ServiceIcon } from "./ServiceIcon";

const iconNames = ["tooth", "braces", "crown"];

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <span className="eyebrow">{services.eyebrow}</span>
            <AnimatedHeading as="h2" className="section-title" text={services.title} />
          </div>
          <a href={services.cta.href} className="btn btn--primary btn--lg">
            {services.cta.label}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>

        <div className="services__grid">
          {services.items.map((s, i) => (
            <article className="service-card cursor-hover" key={s.title}>
              <div className="service-card__head">
                <span className="service-card__icon"><ServiceIcon name={iconNames[i % iconNames.length]} /></span>
                <h3>{s.title}</h3>
                <a href={`/services/${s.slug}`} className="service-card__arrow" aria-label={`${s.title} — read more`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </div>
              <div className="service-card__divider" />
              <p className="service-card__text">{s.text}</p>
              <div className="service-card__img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.title} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
