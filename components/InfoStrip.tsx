import { infoStrip } from "@/lib/content";

export function InfoStrip() {
  return (
    <section className="info-strip">
      <div className="container info-strip__inner">
        {infoStrip.items.map((it) => (
          <div className="info-strip__item" key={it.label}>
            <span className="info-strip__icon">
              {it.icon === "phone" ? <Phone /> : <Clock />}
            </span>
            <div>
              <span className="info-strip__label">{it.label}</span>
              {it.href ? (
                <a href={it.href} className="info-strip__value">{it.value}</a>
              ) : (
                <strong className="info-strip__value">{it.value}</strong>
              )}
            </div>
          </div>
        ))}
        <a href={infoStrip.cta.href} className="btn btn--primary btn--lg info-strip__cta">
          {infoStrip.cta.label}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </div>
    </section>
  );
}

function Phone() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Clock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
