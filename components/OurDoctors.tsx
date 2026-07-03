import { doctors } from "@/lib/content";
import { AnimatedHeading } from "./motion/AnimatedHeading";

export function OurDoctors() {
  return (
    <section className="section doctors" id="doctors">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">{doctors.eyebrow}</span>
          <AnimatedHeading as="h2" className="section-title" text={doctors.title} />
        </div>
        <div className="doctors__grid">
          {doctors.items.map((d) => (
            <article className="doctor-card cursor-hover" key={d.name}>
              <div className="doctor-card__img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.img} alt={d.name} />
                <div className="doctor-card__socials">
                  <a href="#" aria-label="Facebook"><Dot /></a>
                  <a href="#" aria-label="Twitter"><Dot /></a>
                  <a href="#" aria-label="Instagram"><Dot /></a>
                </div>
              </div>
              <div className="doctor-card__body">
                <h3>{d.name}</h3>
                <span>{d.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}
