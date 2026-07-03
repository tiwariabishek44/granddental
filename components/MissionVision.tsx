import { missionVision } from "@/lib/content";
import { AnimatedHeading } from "./motion/AnimatedHeading";

export function MissionVision() {
  return (
    <section className="section mvv">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">{missionVision.eyebrow}</span>
          <AnimatedHeading as="h2" className="section-title" text={missionVision.title} />
        </div>
        <div className="mvv__grid">
          {missionVision.items.map((m) => (
            <article className="mvv-card cursor-hover" key={m.title}>
              <span className="mvv-card__icon"><Icon name={m.icon} /></span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Icon({ name }: { name: string }) {
  if (name === "target")
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  if (name === "eye")
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 21s-7-4.5-9.5-9C1 8.5 3 5 6.5 5 9 5 12 8 12 8s3-3 5.5-3C21 5 23 8.5 21.5 12 19 16.5 12 21 12 21Z" fill="currentColor" />
    </svg>
  );
}
