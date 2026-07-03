import { servicesPage } from "@/lib/content";
import { AnimatedHeading } from "./motion/AnimatedHeading";
import { ServiceIcon } from "./ServiceIcon";

export function AllServices() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">{servicesPage.eyebrow}</span>
          <AnimatedHeading as="h2" className="section-title" text={servicesPage.title} />
        </div>

        <div className="services__grid services__grid--3x2">
          {servicesPage.items.map((s) => (
            <article className="service-card cursor-hover" key={s.title}>
              <div className="service-card__head">
                <span className="service-card__icon"><ServiceIcon name={s.icon} /></span>
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
