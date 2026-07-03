"use client";
import { useCallback, useRef, useState } from "react";

// Draggable before/after image comparison (twentytwenty-style).
export function BeforeAfter({
  before,
  after,
  className,
}: {
  before: string;
  after: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  const onDown = (clientX: number) => {
    dragging.current = true;
    setFromClientX(clientX);
  };
  const onMove = (clientX: number) => {
    if (dragging.current) setFromClientX(clientX);
  };
  const stop = () => { dragging.current = false; };

  return (
    <div
      ref={ref}
      className={`ba${className ? " " + className : ""}`}
      onMouseDown={(e) => onDown(e.clientX)}
      onMouseMove={(e) => onMove(e.clientX)}
      onMouseUp={stop}
      onMouseLeave={stop}
      onTouchStart={(e) => onDown(e.touches[0].clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onTouchEnd={stop}
    >
      {/* after (full) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="ba__img" src={after} alt="After" draggable={false} />
      {/* before (full-size, clipped from the right so it never distorts) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="ba__img ba__img--before"
        src={before}
        alt="Before"
        draggable={false}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <div className="ba__handle" style={{ left: `${pos}%` }}>
        <span className="ba__grip" aria-hidden>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M11 7 6 12l5 5M13 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </div>
    </div>
  );
}
