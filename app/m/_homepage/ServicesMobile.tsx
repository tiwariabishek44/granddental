"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { servicesData } from "@/data/services";

export default function ServicesMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % servicesData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  // Touch Swipe Gesture Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext(); // Swiped left -> show next card
    } else if (diff < -45) {
      handlePrev(); // Swiped right -> show prev card
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="py-10 border-b border-gray-100 bg-[#FCF5FE]/30 sm:hidden space-y-6 overflow-hidden">
      {/* Centered Section Header */}
      <div className="px-4 text-center max-w-md mx-auto space-y-2.5">
        <span className="type-eyebrow">
          Dental Treatments
        </span>

        <h2 className="type-section-title">
          Focused Care to Protect{" "}
          <span
            className="font-medium text-transparent"
            style={{
              background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            Your Natural Smile.
          </span>
        </h2>

        <p className="type-body font-normal">
          Preserving your natural teeth through gentle scaling, single-visit root canals, and tooth-colored composite restorations.
        </p>
      </div>

      {/* 3D Captive Overlapping Card Flow (Exact Desktop Parity for Mobile) */}
      <div
        className="relative h-[410px] w-full flex items-center justify-center overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {servicesData.map((srv, index) => {
          const total = servicesData.length;
          let offset = (index - activeIndex + total) % total;
          if (offset > total / 2) offset -= total;

          const isCenter = offset === 0;
          let translateX = 0;
          let translateY = 0;
          let scale = 0.82;
          let opacity = 0;
          let zIndex = 0;
          let pointerEvents: "auto" | "none" = "none";

          if (isCenter) {
            translateX = 0;
            translateY = 0;
            scale = 1;
            opacity = 1;
            zIndex = 30;
            pointerEvents = "auto";
          } else if (offset === 1) {
            translateX = 205;
            translateY = 14;
            scale = 0.78;
            opacity = 0.8;
            zIndex = 20;
            pointerEvents = "auto";
          } else if (offset === -1) {
            translateX = -205;
            translateY = -14;
            scale = 0.78;
            opacity = 0.8;
            zIndex = 20;
            pointerEvents = "auto";
          } else if (offset === 2) {
            translateX = 315;
            translateY = -8;
            scale = 0.64;
            opacity = 0.25;
            zIndex = 10;
            pointerEvents = "none";
          } else if (offset === -2) {
            translateX = -315;
            translateY = 8;
            scale = 0.64;
            opacity = 0.25;
            zIndex = 10;
            pointerEvents = "none";
          } else if (offset > 2) {
            translateX = 420;
            translateY = 0;
            scale = 0.6;
            opacity = 0;
            zIndex = 0;
            pointerEvents = "none";
          } else {
            translateX = -420;
            translateY = 0;
            scale = 0.6;
            opacity = 0;
            zIndex = 0;
            pointerEvents = "none";
          }

          return (
            <Link
              key={srv.id}
              href={`/services/${srv.slug || srv.id}`}
              onClick={(e) => {
                if (!isCenter) {
                  e.preventDefault();
                  setActiveIndex(index);
                }
              }}
              aria-hidden={!isCenter}
              tabIndex={isCenter ? 0 : -1}
              className="group absolute overflow-hidden rounded-3xl bg-gray-100 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer"
              style={{
                width: "280px",
                height: "360px",
                transform: `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px)) scale(${scale})`,
                left: "50%",
                top: "50%",
                zIndex,
                opacity,
                pointerEvents,
              }}
            >
              {/* Treatment Image */}
              <Image
                src={srv.image}
                alt={srv.title}
                fill
                priority={isCenter}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-colors duration-300 group-hover:bg-black/50" />

              {/* Card Bottom Typography */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white space-y-2">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ED91FB]">
                  {srv.categoryLabel}
                </span>

                <h3 className="whitespace-pre-line text-lg font-medium leading-snug tracking-tight text-white line-clamp-2">
                  {srv.title}
                </h3>

                <div className="pt-1 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white">
                  <span>Explore Treatment Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* ViScan Style Dashed Circle Arrow Buttons & Counter */}
      <div className="flex items-center justify-center gap-3 pt-1 px-4">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous service"
          className="rounded-full border border-dashed border-gray-800 p-2.5 text-gray-800 transition-all active:bg-black/10 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <Link
          href="/services"
          className="px-5 py-2.5 rounded-full bg-white border border-[#F3D5F9] text-xs sm:text-sm font-bold text-[#5C205E] active:bg-[#FCF5FE] transition-colors shadow-2xs text-center flex items-center gap-1.5 min-h-[44px]"
        >
          <span>All Treatments ({activeIndex + 1}/{servicesData.length})</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#74267A]" />
        </Link>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next service"
          className="rounded-full border border-dashed border-gray-800 p-2.5 text-gray-800 transition-all active:bg-black/10 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
