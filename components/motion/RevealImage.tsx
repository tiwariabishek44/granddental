"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGsapReady } from "./gsap";

// Curtain reveal: the frame slides in from one side while the inner image
// counter-slides from the other, resolving into place.
export function RevealImage({
  src,
  alt = "",
  className,
  rounded = true,
}: {
  src: string;
  alt?: string;
  className?: string;
  rounded?: boolean;
}) {
  useGsapReady();
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = ref.current;
    if (!container) return;
    const image = container.querySelector("img");
    if (!image) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(container, { autoAlpha: 1 });
      return;
    }

    let revealed = false;
    const show = () => { revealed = true; };

    const ctx = gsap.context(() => {
      gsap.set(container, { autoAlpha: 0 });
      const tl = gsap.timeline({
        scrollTrigger: { trigger: container, start: "top 88%", once: true, onEnter: show },
      });
      tl.set(container, { autoAlpha: 1 });
      tl.from(container, { duration: 1, xPercent: -100, ease: "power2.out" });
      tl.from(image, { duration: 1, xPercent: 100, delay: -1, ease: "power2.out" });
    }, container);

    // Keep trigger positions correct once the (remote) image lands.
    const onLoad = () => ScrollTrigger.refresh();
    if (!(image as HTMLImageElement).complete) image.addEventListener("load", onLoad);

    // Safety: never leave content invisible if a trigger is somehow missed.
    const safety = setTimeout(() => {
      if (!revealed) gsap.set(container, { autoAlpha: 1 });
    }, 3000);

    return () => {
      image.removeEventListener("load", onLoad);
      clearTimeout(safety);
      ctx.revert();
    };
  }, [src]);

  return (
    <div
      ref={ref}
      className={`reveal-img${rounded ? " reveal-img--rounded" : ""}${className ? " " + className : ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
    </div>
  );
}
