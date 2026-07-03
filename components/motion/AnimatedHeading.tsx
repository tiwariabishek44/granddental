"use client";
import { useEffect, useRef, createElement, Fragment } from "react";
import { gsap, ScrollTrigger, useGsapReady } from "./gsap";

type Variant = "chars" | "words";

// Reveal recipe mirrors the reference theme's heading motion:
//  - "chars": each letter springs in from x/opacity with Back ease (style-3)
//  - "words": each word slides up with a soft stagger (style-1)
export function AnimatedHeading({
  as = "h2",
  text,
  className,
  variant = "chars",
}: {
  as?: keyof HTMLElementTagNameMap;
  text: string;
  className?: string;
  variant?: Variant;
}) {
  useGsapReady();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>("[data-unit]");
    if (!targets.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(targets, { opacity: 1, x: 0, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      if (variant === "words") {
        gsap.from(targets, {
          duration: 1,
          delay: 0.1,
          y: 24,
          autoAlpha: 0,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      } else {
        gsap.set(el, { perspective: 400 });
        gsap.set(targets, { opacity: 0, x: 50 });
        gsap.to(targets, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.02,
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [text, variant]);

  const words = text.split(" ");
  const children = words.map((word, wi) => {
    if (variant === "words") {
      return createElement(
        "span",
        { key: wi, className: "ah-word" },
        createElement("span", { "data-unit": "", className: "ah-unit" }, word),
        wi < words.length - 1 ? createElement("span", { className: "ah-space" }, " ") : null
      );
    }
    // char variant
    const chars = [...word].map((ch, ci) =>
      createElement("span", { key: ci, "data-unit": "", className: "ah-unit" }, ch)
    );
    return createElement(
      "span",
      { key: wi, className: "ah-word" },
      ...chars,
      wi < words.length - 1
        ? createElement("span", { className: "ah-space" }, " ")
        : null
    );
  });

  return createElement(
    as,
    { ref: ref as never, className: className ? `ah ${className}` : "ah" },
    createElement(Fragment, null, ...children)
  );
}
