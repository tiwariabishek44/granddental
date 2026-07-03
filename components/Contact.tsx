"use client";
import { contactPage } from "@/lib/content";
import { AnimatedHeading } from "./motion/AnimatedHeading";

export function Contact() {
  return (
    <>
      <section className="section contact-info-sec">
        <div className="container contact-info__grid">
          {contactPage.info.map((c) => (
            <article className="contact-info-card cursor-hover" key={c.title}>
              <span className="contact-info-card__icon"><InfoIcon name={c.icon} /></span>
              <h3>{c.title}</h3>
              {c.lines.map((l) => <p key={l}>{l}</p>)}
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-form-sec">
        <div className="container contact__inner">
          <div className="contact__intro">
            <span className="eyebrow">{contactPage.form.eyebrow}</span>
            <AnimatedHeading as="h2" className="section-title" text={contactPage.form.title} />
            <p className="section-text">{contactPage.form.note}</p>
          </div>

          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact__fields">
              <input type="text" placeholder="Enter Your Name" aria-label="Your name" required />
              <input type="email" placeholder="Enter Your Email" aria-label="Your email" required />
              <input type="tel" placeholder="Enter Your Phone" aria-label="Your phone" />
              <input type="text" placeholder="Subject" aria-label="Subject" />
            </div>
            <textarea placeholder="Write Your Message" aria-label="Your message" rows={5} />
            <button type="submit" className="btn btn--primary btn--lg">Send Message
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </form>
        </div>
      </section>

      <section className="contact-map">
        <iframe
          src={contactPage.mapEmbed}
          title="Clinic location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

function InfoIcon({ name }: { name: string }) {
  if (name === "pin")
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  if (name === "clock")
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
