"use client";
import { useState } from "react";
import { howItWorks, IMG } from "@/lib/content";
import { AnimatedHeading } from "./motion/AnimatedHeading";

export function HowItWorks() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section how" id="how">
      <div className="container how__inner">
        <div className="how__collage">
          <div className="how__col how__col--1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={howItWorks.images[0]} alt="" />
          </div>
          <div className="how__col how__col--2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={howItWorks.images[1]} alt="" />
          </div>
          <div className="how__col how__col--3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={howItWorks.images[2]} alt="" />
          </div>
          <div className="how__avatars">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.founder} alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.founder} alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.founder} alt="" />
          </div>
        </div>

        <div className="how__content">
          <span className="eyebrow">{howItWorks.eyebrow}</span>
          <AnimatedHeading as="h2" className="section-title" text={howItWorks.title} />

          <div className="how__accordion">
            {howItWorks.items.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div className={`how-item${isOpen ? " how-item--open" : ""}`} key={item.q}>
                  <button className="how-item__q" onClick={() => setOpen(isOpen ? -1 : idx)} aria-expanded={isOpen}>
                    <span className="how-item__no">{idx + 1}.</span>
                    <span className="how-item__text">{item.q}</span>
                    {!isOpen && <span className="how-item__sign">+</span>}
                  </button>
                  <div className="how-item__a" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                    <div><p>{item.a}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
