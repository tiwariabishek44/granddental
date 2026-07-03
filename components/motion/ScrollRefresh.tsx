"use client";
import { useEffect } from "react";
import { ScrollTrigger, useGsapReady } from "./gsap";

// Remote/late-loading images change layout after ScrollTrigger has already
// cached trigger positions, which leaves lower sections stuck at their hidden
// start state. Recompute positions as things settle.
export function ScrollRefresh() {
  useGsapReady();
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    let t: ReturnType<typeof setTimeout>;
    const debounced = () => {
      clearTimeout(t);
      t = setTimeout(refresh, 120);
    };

    window.addEventListener("load", refresh);
    // Any image finishing decode can shift layout.
    document.addEventListener("load", debounced, true);

    const timers = [500, 1500, 3000].map((ms) => setTimeout(refresh, ms));

    return () => {
      window.removeEventListener("load", refresh);
      document.removeEventListener("load", debounced, true);
      clearTimeout(t);
      timers.forEach(clearTimeout);
    };
  }, []);
  return null;
}
