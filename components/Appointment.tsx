"use client";
import { appointment } from "@/lib/content";
import { AnimatedHeading } from "./motion/AnimatedHeading";

export function Appointment() {
  return (
    <section className="section appointment" id="appointment">
      <div className="container">
        <div className="section-head section-head--split appointment__head">
          <div>
            <span className="eyebrow">{appointment.eyebrow}</span>
            <AnimatedHeading as="h2" className="section-title" text={appointment.title} />
          </div>
          <p className="appointment__lead">{appointment.text}</p>
        </div>

        <div className="appointment__inner">
          <aside className="appointment__hours">
            <h3>{appointment.hours.title}</h3>
            <div className="appointment__hours-divider" />
            <ul>
              {appointment.hours.lines.map((l) => {
                const [day, time] = l.split(/\s{2,}/);
                return (
                  <li key={l}><span>{day}</span><strong>{time}</strong></li>
                );
              })}
            </ul>
            <div className="appointment__emergency">
              <span>{appointment.emergency.title}</span>
              <strong>{appointment.emergency.value}</strong>
            </div>
          </aside>

          <form className="appointment__form" onSubmit={(e) => e.preventDefault()}>
            <p className="appointment__form-note">{appointment.formNote}</p>
            <div className="appointment__fields">
              <div className="field">
                <input id="ap-name" name="name" type="text" placeholder="Enter Your Name" aria-label="Your name" required />
              </div>
              <div className="field">
                <input id="ap-email" name="email" type="email" placeholder="Enter Your Email" aria-label="Your email" required />
              </div>
              <div className="field">
                <input id="ap-location" name="location" type="text" placeholder="Enter Your Location" aria-label="Your location" />
              </div>
              <div className="field">
                <input id="ap-record" name="recordno" type="text" placeholder="Medical Record No." aria-label="Medical record number" />
              </div>
              <div className="field">
                <input id="ap-date" name="date" type="date" aria-label="Preferred date" />
              </div>
              <div className="field">
                <select id="ap-time" name="choosetime" defaultValue="" aria-label="Choose time">
                  <option value="" disabled>Choose Time</option>
                  {appointment.times.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn--primary btn--lg">Make An Appointment
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
