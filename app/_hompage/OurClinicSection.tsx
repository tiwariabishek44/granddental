"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ourclinicimage from "../../assets/chair.jpeg";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);
  return { ref, visible };
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } ${className}`}
    >
      {children}
    </div>
  );
}

export default function OurClinicSection() {
  return (
    <section id="clinic-reveal" className="py-16 border-b border-gray-100 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 space-y-8">
        {/* Streamlined Responsive Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="type-eyebrow">
              Modern Clinical Care
            </span>
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 leading-tight">
              World-class dental facilities, right here in the city.{" "}
              <span
                className="font-medium text-transparent"
                style={{
                  background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                }}
              >
                Designed for your complete comfort.
              </span>
            </h2>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-base font-semibold text-[#5C205E] hover:text-[#74267A] shrink-0 group cursor-pointer"
          >
            <span>Tour our clinic</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cinematic Full-Width Reveal */}
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200/60">
            <Image
              src={ourclinicimage}
              alt="Modern operatory chair and precision instruments at our dental clinic"
              className="w-full h-[480px] object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}