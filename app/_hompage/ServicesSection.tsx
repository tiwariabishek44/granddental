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
    setActiveIndex(
      (prev) => (prev - 1 + servicesData.length) % servicesData.length
    );
  };

  return (
    <section className="py-16 border-b border-gray-100 bg-[#FCF5FE]/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="type-eyebrow">Our Treatments</span>

          <h2 className="text-3xl lg:text-4xl font-medium leading-tight text-gray-900 tracking-tight">
            Care for your teeth.{" "}
            <span
              className="font-medium text-transparent"
              style={{
                background:
                  "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              Care for your confidence.
            </span>
          </h2>

          <p className="type-lead">
            From everyday preventive care to restorative, cosmetic, and
            specialist treatments, we bring the expertise you need together
            under one roof—with thoughtful guidance from consultation to
            follow-up.
          </p>
        </div>

        {/* Treatment Card Carousel */}
        <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
          {servicesData.map((srv, index) => {
            const total = servicesData.length;

            let offset = (index - activeIndex + total) % total;

            if (offset > total / 2) {
              offset -= total;
            }

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
            } else if (offset === -1) {
              translateX = -340;
              translateY = -24;
              scale = 0.82;
              opacity = 0.9;
              zIndex = 20;
            } else if (offset === 2) {
              translateX = 640;
              translateY = -16;
              scale = 0.82;
              opacity = 0.45;
              zIndex = 10;
            } else if (offset === -2) {
              translateX = -640;
              translateY = 16;
              scale = 0.82;
              opacity = 0.45;
              zIndex = 10;
            } else if (offset > 2) {
              translateX = 940;
              translateY = 0;
              scale = 0.82;
              opacity = 0;
              zIndex = 0;
            } else {
              translateX = -940;
              translateY = 0;
              scale = 0.82;
              opacity = 0;
              zIndex = 0;
            }

            return (
              <div
                key={srv.id}
                aria-hidden={!isCenter}
                tabIndex={isCenter ? 0 : -1}
                onClick={() => {
                  if (!isCenter) {
                    setActiveIndex(index);
                  }
                }}
                className={`group absolute overflow-hidden rounded-3xl bg-gray-100 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] select-none ${
                  !isCenter ? "cursor-pointer" : ""
                }`}
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
                  sizes="360px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* Card Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 text-white space-y-2">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ED91FB]">
                    {srv.categoryLabel}
                  </span>

                  <h3 className="whitespace-pre-line text-2xl font-medium leading-snug tracking-tight text-white">
                    {srv.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous treatment"
            className="rounded-full border border-dashed border-gray-800 p-2.5 text-gray-800 transition-all hover:bg-black/5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next treatment"
            className="rounded-full border border-dashed border-gray-800 p-2.5 text-gray-800 transition-all hover:bg-black/5 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Full Treatment Link */}
        <div className="flex justify-center pt-2">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#74267A] hover:text-[#5C205E] transition-colors"
          >
            View All Treatments
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}