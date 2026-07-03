"use client";
import { useState } from "react";
import { testimonials } from "@/lib/content";
import { AnimatedHeading } from "./motion/AnimatedHeading";

export function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.items.length;
  const go = (d: number) => setI((p) => (p + d + n) % n);
  const t = testimonials.items[i];

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow eyebrow--light">{testimonials.eyebrow}</span>
          <AnimatedHeading as="h2" className="section-title section-title--light" text={testimonials.title} />
        </div>

        <div className="testimonial-card">
          <span className="testimonial-card__quote">&ldquo;</span>
          <p className="testimonial-card__text">{t.text}</p>
          <div className="testimonial-card__foot">
            <div className="testimonial-card__author">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.avatar} alt={t.name} />
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
            <div className="testimonial-card__nav">
              <button onClick={() => go(-1)} aria-label="Previous">‹</button>
              <button onClick={() => go(1)} aria-label="Next">›</button>
            </div>
          </div>
        </div>

        <div className="testimonials__foot">
          <span className="testimonials__dots">
            {testimonials.items.map((_, d) => (
              <button
                key={d}
                className={`testimonials__dot${d === i ? " is-active" : ""}`}
                onClick={() => setI(d)}
                aria-label={`Go to testimonial ${d + 1}`}
              />
            ))}
          </span>
          <a href={testimonials.cta.href} className="btn btn--primary">{testimonials.cta.label}</a>
        </div>
      </div>
    </section>
  );
}
