import { servicesPage, serviceDetails, site } from "@/lib/content";
import { AnimatedHeading } from "./motion/AnimatedHeading";
import { RevealImage } from "./motion/RevealImage";

export function ServiceDetail({ slug }: { slug: string }) {
  const item = servicesPage.items.find((s) => s.slug === slug)!;
  const detail = serviceDetails[slug];

  return (
    <section className="section service-detail">
      <div className="container service-detail__inner">
        <div className="service-detail__main">
          <RevealImage src={item.img} alt={item.title} className="service-detail__hero" />

          <p className="service-detail__intro">{detail.intro}</p>
          <AnimatedHeading as="h2" className="section-title" text={detail.heading} />
          {detail.paragraphs.map((p, i) => (
            <p key={i} className="service-detail__p">{p}</p>
          ))}

          <ul className="service-detail__benefits">
            {detail.benefits.map((b) => (
              <li key={b}><Tick /> {b}</li>
            ))}
          </ul>

          <div className="service-detail__gallery">
            {detail.gallery.map((g, i) => (
              <RevealImage key={i} src={g} alt="" />
            ))}
          </div>
        </div>

        <aside className="service-detail__sidebar">
          <div className="svc-widget">
            <h3 className="svc-widget__title">Our Services</h3>
            <ul className="svc-widget__list">
              {servicesPage.items.map((s) => (
                <li key={s.slug} className={s.slug === slug ? "is-active" : ""}>
                  <a href={`/services/${s.slug}`}>
                    {s.title}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="svc-help">
            <span className="svc-help__icon"><Phone /></span>
            <p>Need Help ?</p>
            <a href={site.phoneHref} className="svc-help__phone">{site.phone}</a>
            <a href="/contact" className="btn btn--primary btn--block">Make An Appointment</a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Tick() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect width="24" height="24" rx="7" fill="#5E5EEE" />
      <path d="M7 12.5 10.5 16 17 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Phone() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
