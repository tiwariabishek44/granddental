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
        {/* Section Header */}
        <div className="space-y-2">
          <span className="type-eyebrow">
            The Grand Dental Clinic Environment
          </span>

          <h2 className="type-section-title">
            Thoughtful care begins with the{" "}
            <span
              className="font-medium text-transparent"
              style={{
                background: "linear-gradient(246.94deg, #388EE8 -28.81%, #0B3B8B 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              space around you.
            </span>
          </h2>

          <p className="type-body font-normal">
            From the moment you walk in, every detail is designed to make dental care feel considered and comfortable. Clean, contemporary treatment spaces, modern clinical equipment, and attentive chairside care create an environment where you can slow down, ask questions, and feel confident about your care.
          </p>
        </div>

        {/* Asymmetric Image Flow */}
        <div className="space-y-4">
          {/* Main Large Facility Photo with ImageReveal animation */}
          <ImageReveal
            src={fontview}
            alt="Modern treatment room at Grand Dental Clinic"
            className="w-full h-[280px] rounded-3xl shadow-sm border border-gray-200/80"
          />

          {/* Secondary 3D Consultation Model Setup */}
          <ImageReveal
            src={holograph}
            alt="Modern dental consultation and clinical environment"
            className="w-full h-[210px] rounded-3xl shadow-sm border border-gray-200/80"
          />

          {/* Clinical Blue Experience Card */}
          <div className="rounded-3xl bg-[#EBF3FE] p-6 border border-[#DBEAFE] space-y-4 shadow-2xs">
            <div>
              <p className="text-base sm:text-lg font-medium leading-relaxed text-gray-900">
                A calm environment, attentive care, and clear guidance — because feeling comfortable is part of good dental care.
              </p>
            </div>

            <Link
              href="/about"
              className="flex items-center justify-between border-t border-[#0B3B8B]/15 pt-3 transition-opacity active:opacity-75 group cursor-pointer"
            >
              <span className="text-sm font-semibold text-[#0B3B8B]">
                Explore Our Clinic
              </span>
              <ArrowRight className="h-4 w-4 text-[#0B3B8B] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
