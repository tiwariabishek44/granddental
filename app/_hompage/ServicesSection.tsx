"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { servicesData } from "@/data/services";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % servicesData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  return (
    <section className="py-12 sm:py-16 border-b border-gray-100 bg-[#FCF5FE]/30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="type-eyebrow">
            Dental Treatments
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-gray-900 tracking-tight">
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

          <p className="type-lead">
            Rather than rushing into aggressive procedures, our primary mission is preserving your natural teeth through gentle scaling, single-visit root canals, and tooth-colored composite restorations.
          </p>
        </div>

        {/* Mobile Horizontal Snap Carousel */}
        <div className="sm:hidden">
          <div
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 no-scrollbar scrollbar-hide"
          >
            {servicesData.map((srv) => (
              <Link
                key={srv.id}
                href={`/services`}
                className="group relative block h-[340px] w-[270px] shrink-0 snap-start overflow-hidden rounded-3xl bg-gray-100 shadow-md cursor-pointer"
              >
                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/55" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white space-y-1.5">

                  <h3 className="whitespace-pre-line text-lg font-medium leading-snug tracking-tight text-white">
                    {srv.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Captive 3D Overlapping Card Stack */}
        <div className="hidden sm:block">
          <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
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
                translateX = 340;
                translateY = 24;
                scale = 0.82;
                opacity = 0.9;
                zIndex = 20;
                pointerEvents = "none";
              } else if (offset === -1) {
                translateX = -340;
                translateY = -24;
                scale = 0.82;
                opacity = 0.9;
                zIndex = 20;
                pointerEvents = "none";
              } else if (offset === 2) {
                translateX = 640;
                translateY = -16;
                scale = 0.82;
                opacity = 0.45;
                zIndex = 10;
                pointerEvents = "none";
              } else if (offset === -2) {
                translateX = -640;
                translateY = 16;
                scale = 0.82;
                opacity = 0.45;
                zIndex = 10;
                pointerEvents = "none";
              } else if (offset > 2) {
                translateX = 940;
                translateY = 0;
                scale = 0.82;
                opacity = 0;
                zIndex = 0;
                pointerEvents = "none";
              } else {
                translateX = -940;
                translateY = 0;
                scale = 0.82;
                opacity = 0;
                zIndex = 0;
                pointerEvents = "none";
              }

              return (
                <Link
                  key={srv.id}
                  href={`/services`}
                  aria-hidden={!isCenter}
                  tabIndex={isCenter ? 0 : -1}
                  className="group absolute overflow-hidden rounded-3xl bg-gray-100 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer"
                  style={{
                    width: "360px",
                    height: "430px",
                    transform: `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px)) scale(${scale})`,
                    left: "50%",
                    top: "50%",
                    zIndex,
                    opacity,
                    pointerEvents,
                  }}
                >
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-colors duration-300 group-hover:bg-black/50" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white space-y-3">

                    <h3 className="whitespace-pre-line text-xl sm:text-2xl font-medium leading-snug tracking-tight text-white">
                      {srv.title}
                    </h3>
                    <div className="pt-1 flex items-center gap-2 text-sm sm:text-base font-semibold text-white">
                      <span>Explore Treatment Details</span>
                      <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* ViScan Style Dashed Circle Arrow Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous service"
              className="rounded-full border border-dashed border-gray-800 p-2.5 text-gray-800 transition-all hover:bg-black/5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next service"
              className="rounded-full border border-dashed border-gray-800 p-2.5 text-gray-800 transition-all hover:bg-black/5 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
