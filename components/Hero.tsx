"use client";
import { hero, IMG } from "@/lib/content";
import { AnimatedHeading } from "./motion/AnimatedHeading";
import { Counter } from "./motion/Counter";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow"><i /> {hero.eyebrow}</span>
          <AnimatedHeading as="h1" className="hero__title" variant="words" text={hero.title.join(" ")} />
          <p className="hero__text">{hero.text}</p>

          <div className="hero__cta">
            <a href={hero.primaryCta.href} className="btn btn--primary btn--lg">{hero.primaryCta.label} <Arrow /></a>
            <a href={hero.secondaryCta.href} className="btn btn--ghost btn--lg">{hero.secondaryCta.label}</a>
          </div>

          <div className="hero__stats">
            {hero.stats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <div className="hero-stat__num"><Counter value={s.value} suffix={s.suffix} /></div>
                <div className="hero-stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.heroImage} alt="Dental care" />
          </div>
          <div className="hero__badge hero__badge--rating">
            <div className="hero__stars">★★★★★</div>
            <p>Best Service &amp; 5 Star</p>
            <span>Hospital are crucial institutions in our society</span>
          </div>
          <div className="hero__badge hero__badge--avatars">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.heroBadge1} alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.heroBadge2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
