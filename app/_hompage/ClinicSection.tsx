"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ImageReveal from "./ImageReveal";

import holograph from "../../assets/Holographic_dental_model.jpeg";
import fontview from "../../assets/front view.jpeg";

export interface ClinicSectionProps {
  id?: string;
  className?: string;
}

export default function ClinicSection({
  id = "clinic-space",
  className = "",
}: ClinicSectionProps) {
  return (
    <section
      id={id}
      className={`py-16 border-b border-gray-100 ${className}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-12 text-left">
          <div className="space-y-3">
            <span className="type-eyebrow">
              The Grand Dental Clinic Environment
            </span>

            <h2 className="text-3xl lg:text-4xl font-medium leading-[1.15] tracking-tight text-gray-900 max-w-xl">
              Thoughtful care begins with the{" "}
              <span
                className="font-medium text-transparent"
                style={{
                  background:
                    "linear-gradient(246.94deg, #388EE8 -28.81%, #0B3B8B 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                }}
              >
                space around you.
              </span>
            </h2>
          </div>

          <p className="type-lead pt-1 lg:pt-4 max-w-2xl">
            From the moment you walk in, every detail is designed to make
            dental care feel considered and comfortable. Clean, contemporary
            treatment spaces, modern clinical equipment, and attentive
            chairside care create an environment where you can slow down, ask
            questions, and feel confident about your care.
          </p>
        </div>

        {/* Asymmetric Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Clinic Image */}
          <ImageReveal
            src={fontview}
            alt="Modern treatment room at Grand Dental Clinic"
            className="lg:col-span-8 h-[380px] lg:h-[500px] rounded-3xl"
          />

          {/* Secondary Content Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Secondary Image */}
            <ImageReveal
              src={holograph}
              alt="Modern dental consultation and clinical environment"
              className="h-[260px] lg:h-[280px] rounded-3xl"
            />

            {/* Experience Card */}
            <div className="flex flex-1 flex-col justify-between rounded-3xl bg-[#EBF3FE] p-7 lg:p-8 border border-[#DBEAFE]">
              <div>


                <p className="mt-3 text-lg lg:text-xl font-medium leading-relaxed text-gray-900">
                  A calm environment, attentive care, and clear guidance —
                  because feeling comfortable is part of good dental care.
                </p>
              </div>

              {/* About / Clinic Link */}
              <Link
                href="/about"
                className="mt-8 flex items-center justify-between border-t border-[#0B3B8B]/15 pt-4 transition-opacity hover:opacity-80 group"
              >
                <span className="text-sm lg:text-base font-semibold text-[#0B3B8B]">
                  Explore Our Clinic
                </span>

                <ArrowRight
                  className="h-4 w-4 text-[#134FB0] transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}