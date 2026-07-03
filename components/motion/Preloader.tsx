"use client";
import { useEffect, useState } from "react";
import { IMG } from "@/lib/content";

export function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const finish = () => setHidden(true);
    if (document.readyState === "complete") {
      const t = setTimeout(finish, 400);
      return () => clearTimeout(t);
    }
    window.addEventListener("load", finish);
    const fallback = setTimeout(finish, 2500);
    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!hidden) return;
    const t = setTimeout(() => setGone(true), 600);
    return () => clearTimeout(t);
  }, [hidden]);

  if (gone) return null;
  return (
    <div className={`preloader${hidden ? " preloader--hidden" : ""}`} aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={IMG.loader} alt="" width={40} height={38} />
    </div>
  );
}
