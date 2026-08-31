"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageReveal from "./ImageReveal";

import holograph from "../../assets/Holographic_dental_model.jpeg"
import fontview from "../../assets/front view.jpeg"

export interface ClinicSectionProps {
  id?: string;
  className?: string;
}

export default function ClinicSection({
  id = "clinic-space",
  className = "",
}: ClinicSectionProps) {
  return (
    <section id={id} className={`py-12 sm:py-16 border-b border-gray-100 ${className}`}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Harmonized 2-Column Section Header */}
        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 md:items-start md:gap-12 md:text-left">
          <div className="space-y-2">
            <span className="type-eyebrow">
              Clinic Environment
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-gray-900">
              A space where{" "}
              <span
                className="font-medium text-transparent"
                style={{
                  background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                }}
              >
                modern care
              </span>{" "}
              meets genuine calm.
            </h2>
          </div>
          <p className="type-lead md:pt-4">
            We designed our Swoyambhu clinic to eliminate dental anxiety. Ergonomic treatment chairs, natural daylight, and hospital-grade autoclave sterilization make every appointment feel safe and unhurried.
          </p>
        </div>

        {/* Asymmetric Image Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          <ImageReveal
            src={fontview}
            alt="Clean, sterilized dental operatory at Grand Dental Clinic"
            className="col-span-12 h-[320px] rounded-3xl sm:col-span-8 sm:h-[500px]"
          />

          <div className="col-span-12 flex flex-col gap-4 sm:col-span-4">
            <ImageReveal
              src={holograph}
              alt="Comfortable doctor consultation setup"
              className="h-[250px] rounded-3xl sm:h-[280px]"
            />

            <div className="flex flex-1 flex-col justify-between rounded-3xl bg-[#F9EBFC] p-7 sm:p-8 border border-[#F0CEF6]">
              <div>
                <span className="text-sm sm:text-base text-[#74267A] font-semibold">
                  डेन्टल क्लिनिक भनेपछि अब डराउनु पर्दैन
                </span>

                <p className="mt-3 text-lg sm:text-xl font-medium leading-relaxed text-gray-900">
                  Unhurried chairside attention and transparent guidance make every visit reassuring and fear-free.
                </p>
              </div>

              <Link
                href="/about"
                className="mt-6 flex items-center justify-between border-t border-[#74267A]/15 pt-4 transition-opacity hover:opacity-80 group cursor-pointer"
              >
                <span className="text-sm sm:text-base font-semibold text-[#5C205E]">
                  Learn More About Our Clinic
                </span>
                <ArrowRight className="h-4 w-4 text-[#74267A] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
