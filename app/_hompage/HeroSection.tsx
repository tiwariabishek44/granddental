"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import hero from "../../assets/hero.png";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export default function HeroSection() {
  const { openAppointmentModal } = useAppointmentModal();
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-8 mt-4 mb-2">
      {/* Cinematic Editorial Canvas */}
      <div className="relative h-[80vh] min-h-[560px] max-h-[720px] w-full rounded-3xl overflow-hidden bg-[#101828] shadow-sm border border-black/5 flex flex-col justify-between p-12 lg:p-16">
        {/* Editorial Photograph with Natural Light & Clean Negative Space */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hero}
            alt="Doctor in consultation with patient at Grand Dental Clinic"
            fill
            priority
            className="object-cover object-right lg:object-center opacity-90 transition-transform duration-1000 ease-out"
          />

          {/* Gentle Directional Vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        {/* Narrative Core (Patient Reassurance) */}
        <div className="relative z-10 max-w-xl space-y-6 my-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-semibold uppercase tracking-wider">
            <span>Swoyambhu, Kathmandu</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ED91FB]" />
            <span>Grand Dental Clinic</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.08]">
            Thoughtful dental care,{" "}
            <span className="font-serif italic font-normal text-[#ED91FB]">
              designed around you.
            </span>
          </h1>

          {/* Human, Reassuring Subtitle */}
          <p className="text-lg sm:text-xl font-normal text-white/85 leading-relaxed max-w-lg">
            Experienced doctors, clear conversations, and gentle treatments — so you always know what to expect.
          </p>

          {/* Focused Action Pair */}
          <div className="pt-2 flex items-center gap-5">
            <button
              type="button"
              onClick={() => openAppointmentModal()}
              className="inline-flex items-center gap-3 bg-[#5C205E] hover:bg-[#74267A] text-white px-8 py-4 rounded-full text-base font-semibold shadow-md transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <Link
              href="/services"
              className="text-base font-medium text-white/90 hover:text-white underline underline-offset-8 transition-colors"
            >
              Explore Treatments
            </Link>
          </div>
        </div>

        {/* Understated Minimalist Footer Note */}
        <div className="relative z-10 flex items-center justify-between text-sm text-white/85 pt-4 border-t border-white/15 gap-4 font-normal">
          <span>
            General Dentistry &middot; Implants &middot; Orthodontics &middot; Cosmetic Dentistry &middot; Pediatric Care
          </span>
          <span>
            Swoyambhu, Kathmandu &middot; Sun &ndash; Fri: 8 AM &ndash; 6 PM
          </span>
        </div>
      </div>
    </section>
  );
}
