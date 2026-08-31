"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { servicesData } from "@/data/services";
import LocationBookingSection from "@/components/LocationBookingSection";
import { ServicesMobilePage } from "@/app/m/services";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

  const categories = [
    { id: "all", label: "All Treatments" },
    { id: "preventive", label: "Preventive & Family" },
    { id: "restorative", label: "Restorative Care" },
    { id: "replacement", label: "Tooth Replacement" },
    { id: "orthodontics", label: "Orthodontics & Aligners" },
    { id: "cosmetic", label: "Cosmetic & Surgery" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  const handleNext = () => {
    setActiveCarouselIndex((prev) => (prev + 1) % servicesData.length);
  };

  const handlePrev = () => {
    setActiveCarouselIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-[#F3D5F9] selection:text-[#5C205E] font-sans">
      {/* MOBILE SERVICES DIRECTORY VIEW (sm:hidden) */}
      <div className="block sm:hidden">
        <ServicesMobilePage />
      </div>

      {/* DESKTOP SERVICES VIEW (hidden sm:block) */}
      <div className="hidden sm:block pb-24">
        {/* 1. HERO SECTION */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 mb-16">
          <div
            className="rounded-3xl border border-gray-200/80 p-6 sm:p-10 lg:p-12 shadow-sm space-y-6"
            style={{
              background: "radial-gradient(100% 286.18% at 100% 100%, #FCF5FE 0%, #F5F3F6 100%)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="type-eyebrow">
                  Clinical Disciplines
                </span>
                <h1 className="type-display">
                  Comprehensive Dental Care for{" "}
                  <span
                    className="font-normal text-transparent"
                    style={{
                      background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    Every Smile.
                  </span>
                </h1>
                <p className="type-lead">
                  From ultrasonic cleanings and painless root canals to aesthetic ceramic crowns and orthodontic braces, explore complete oral healthcare provided by NMC-certified doctors in Swoyambhu, Kathmandu.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
                <Link href="/appointment" className="group btn-pill-primary w-full sm:w-auto text-center justify-center">
                  <span>Book Appointment</span>
                  <span className="flex items-center justify-center rounded-full bg-white p-1.5 transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 text-[#5C205E]" />
                  </span>
                </Link>
                <Link href="/contact" className="btn-pill-outline w-full sm:w-auto text-center justify-center">
                  <span>Call 01-4950352</span>
                </Link>
              </div>
            </div>

            {/* Quick Trust Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200/80">
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-1 text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#5C205E]">12+</div>
                <div className="text-sm sm:text-base text-gray-800 font-semibold">Dental Disciplines</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-1 text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#5C205E]">NMC Certified</div>
                <div className="text-sm sm:text-base text-gray-800 font-semibold">Experienced Surgeons</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-1 text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#5C205E]">Painless Focus</div>
                <div className="text-sm sm:text-base text-gray-800 font-semibold">Comfort-First Protocols</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-1 text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#5C205E]">100% Sterilized</div>
                <div className="text-sm sm:text-base text-gray-800 font-semibold">Medical Autoclave Standard</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SECTION 02: 3D CAPTIVE OVERLAPPING CAROUSEL */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-16 space-y-6">
          <div>
            <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 md:items-start md:gap-12 md:text-left mb-6">
              <div className="space-y-2">
                <span className="type-eyebrow">
                  Signature Treatments
                </span>
                <h2 className="type-section-title">
                  Featured{" "}
                  <span
                    className="font-medium text-transparent"
                    style={{
                      background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    Clinical Procedures
                  </span>
                </h2>
              </div>
              <p className="type-lead md:pt-4">
                Browse our key treatment categories below, each delivered with careful chairside attention and transparent patient guidance.
              </p>
            </div>
          </div>

          {/* Mobile 2-Column Visual Card Grid */}
          <div className="sm:hidden">
            <div className="grid grid-cols-2 gap-3.5">
              {servicesData.map((srv) => (
                <Link
                  key={srv.id}
                  href={`/services/${srv.slug || srv.id}`}
                  className="group relative flex flex-col justify-end overflow-hidden  bg-gray-900 shadow-md min-h-[280px] p-4 active:scale-[0.98] transition-transform cursor-pointer"
                >
                  {/* Photographic Background */}
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient Contrast Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />

                  {/* Bottom Card Content */}
                  <div className="relative z-10 space-y-2">
                    <h3 className="text-sm font-bold leading-snug text-white line-clamp-2">
                      {srv.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Captive 3D Overlapping Card Stack */}
          <div className="hidden sm:block">
            <div className="relative h-[440px] flex items-center justify-center overflow-hidden">
              {servicesData.map((srv, index) => {
                const total = servicesData.length;
                let offset = (index - activeCarouselIndex + total) % total;
                if (offset > total / 2) offset -= total;

                const isCenter = offset === 0;
                let translateX = 0;
                let translateY = 0;
                let scale = 0.78;
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
                  translateX = 300;
                  translateY = 22;
                  scale = 0.78;
                  opacity = 0.9;
                  zIndex = 20;
                  pointerEvents = "none";
                } else if (offset === -1) {
                  translateX = -300;
                  translateY = -22;
                  scale = 0.78;
                  opacity = 0.9;
                  zIndex = 20;
                  pointerEvents = "none";
                } else if (offset === 2) {
                  translateX = 560;
                  translateY = -14;
                  scale = 0.78;
                  opacity = 0.45;
                  zIndex = 10;
                  pointerEvents = "none";
                } else if (offset === -2) {
                  translateX = -560;
                  translateY = 14;
                  scale = 0.78;
                  opacity = 0.45;
                  zIndex = 10;
                  pointerEvents = "none";
                } else if (offset > 2) {
                  translateX = 820;
                  translateY = 0;
                  scale = 0.78;
                  opacity = 0;
                  zIndex = 0;
                  pointerEvents = "none";
                } else {
                  translateX = -820;
                  translateY = 0;
                  scale = 0.78;
                  opacity = 0;
                  zIndex = 0;
                  pointerEvents = "none";
                }

                return (
                  <Link
                    key={srv.id}
                    href={`/services/${srv.slug || srv.id}`}
                    aria-hidden={!isCenter}
                    tabIndex={isCenter ? 0 : -1}
                    className="group absolute overflow-hidden rounded-3xl bg-gray-100 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer"
                    style={{
                      width: "320px",
                      height: "380px",
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
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-colors duration-300 group-hover:bg-black/50" />

                    {/* Card Content Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white space-y-2">

                      <h3 className="type-card-title text-white">
                        {srv.title}
                      </h3>

                    </div>
                  </Link>
                );
              })}
            </div>

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
        </section>

        {/* 4. CTA BOOKING & CLINIC LOGISTICS SECTION */}
        <LocationBookingSection />
      </div>
    </main>
  );
}
