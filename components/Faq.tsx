"use client";
import { useState } from "react";
import { faq } from "@/lib/content";
import { AnimatedHeading } from "./motion/AnimatedHeading";

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" id="faq">
      <div className="container faq__inner">
        <div className="faq__intro">
          <span className="eyebrow">{faq.eyebrow}</span>
          <AnimatedHeading as="h2" className="section-title" text={faq.title} />
          <div className="faq__emergency">
            <Phone />
            <div>
              <span>{faq.emergency.label}</span>
              <strong>{faq.emergency.value}</strong>
            </div>
          </div>
        </div>

        <div className="faq__list">
          {faq.items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div className={`faq-item${isOpen ? " faq-item--open" : ""}`} key={item.q}>
                <button className="faq-item__q" onClick={() => setOpen(isOpen ? -1 : idx)} aria-expanded={isOpen}>
                  {item.q}
                  <span className="faq-item__sign">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq-item__a" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div><p>{item.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Phone() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
