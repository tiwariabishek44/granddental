"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageReveal from "@/app/_hompage/ImageReveal";
import holograph from "@/assets/Holographic_dental_model.jpeg";
import fontview from "@/assets/front view.jpeg";

export interface ClinicSectionMobileProps {
  id?: string;
  className?: string;
}

export default function ClinicSectionMobile({
  id = "clinic-space-mobile",
  className = "",
}: ClinicSectionMobileProps) {
  return (
    <section id={id} className={`py-10 px-4 border-b border-gray-100 sm:hidden ${className}`}>
      <div className="space-y-6">
        {/* Section Header (Preserved Exactly from Desktop Version) */}
        <div className="space-y-2">
          <span className="type-eyebrow">
            Clinic Environment
          </span>

          <h2 className="type-section-title">
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

          <p className="type-body font-normal">
            We designed our Swoyambhu clinic to eliminate dental anxiety. Ergonomic treatment chairs, natural daylight, and hospital-grade autoclave sterilization make every appointment feel safe and unhurried.
          </p>
        </div>

        {/* Asymmetric Image Flow (Direct Parity with Desktop Grid) */}
        <div className="space-y-4">
          {/* Main Large Facility Photo with ImageReveal animation */}
          <ImageReveal
            src={fontview}
            alt="Clean, sterilized dental operatory at Grand Dental Clinic"
            className="w-full h-[280px] rounded-3xl shadow-sm border border-gray-200/80"
          />

          {/* Secondary 3D Consultation Model Setup */}
          <ImageReveal
            src={holograph}
            alt="Comfortable doctor consultation setup"
            className="w-full h-[210px] rounded-3xl shadow-sm border border-gray-200/80"
          />

          {/* Purple Pastel Quote Bento Card */}
          <div className="rounded-3xl bg-[#F9EBFC] p-6 border border-[#F0CEF6] space-y-4 shadow-2xs">
            <div className="space-y-2">
              <span className="type-eyebrow text-[#74267A] block">
                डेन्टल क्लिनिक भनेपछि अब डराउनु पर्दैन
              </span>

              <p className="type-card-title text-base sm:text-lg">
                Unhurried chairside attention and transparent guidance make every visit reassuring and fear-free.
              </p>
            </div>

            <Link
              href="/about"
              className="flex items-center justify-between border-t border-[#74267A]/15 pt-3 transition-opacity active:opacity-75 group cursor-pointer"
            >
              <span className="type-ui-control font-semibold text-[#5C205E]">
                Learn More About Our Clinic
              </span>
              <ArrowRight className="h-4 w-4 text-[#74267A] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
