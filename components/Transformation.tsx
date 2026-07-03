import { transformation } from "@/lib/content";
import { AnimatedHeading } from "./motion/AnimatedHeading";
import { BeforeAfter } from "./motion/BeforeAfter";

export function Transformation() {
  return (
    <section className="section transformation" id="transformation">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <span className="eyebrow">{transformation.eyebrow}</span>
            <AnimatedHeading as="h2" className="section-title" text={transformation.title} />
          </div>
          <a href={transformation.cta.href} className="btn btn--primary btn--lg">
            {transformation.cta.label}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>

        <div className="transformation__grid">
          {transformation.pairs.map((p, i) => (
            <BeforeAfter
              key={i}
              before={p.before}
              after={p.after}
              className={`transformation__ba transformation__ba--${p.size}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
