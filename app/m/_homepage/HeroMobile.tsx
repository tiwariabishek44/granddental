"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";
import heroImg from "@/assets/image copy.png";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export default function HeroMobile() {
  const { openAppointmentModal } = useAppointmentModal();
  return (
    <section className="w-full sm:hidden">
      {/* Full-Width Edge-to-Edge Flagship Hero Canvas with Fixed Stable Height (No Scroll Resize) */}
      <div className="relative min-h-[580px] h-[calc(100svh-3.5rem)] w-full overflow-hidden bg-[#0B192C] flex flex-col justify-between p-5 pt-6 pb-8">
        {/* Fullscreen Background Editorial Photograph */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={heroImg}
            alt="Doctor in consultation at Grand Dental Clinic"
            fill
            priority
            className="object-cover object-center opacity-90"
          />
          {/* Multi-Stop Dark Vignette for High-Contrast Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 pointer-events-none" />
        </div>

        {/* Top Status & Slogan Badge */}
        <div className="relative z-10 flex items-center justify-start text-xs sm:text-sm text-white/95">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B3B8B]/90 backdrop-blur-md border border-[#388EE8]/50 text-white text-[11px] font-semibold tracking-wide shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse shrink-0" />
            <span>Quality Dental Care &bull; Honest Pricing &bull; Every Smile Matters</span>
          </span>
        </div>

        {/* Bottom Hero Anchor: Flagship Typography & Direct Booking */}
        <div className="relative z-10 space-y-4 pt-8">
          {/* Core Headlines */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-4xl font-light text-white tracking-tight leading-[1.12]">
              Smile without{" "}
              <span className="font-normal text-white block">
                thinking twice.
              </span>
            </h1>
            <p className="type-lead text-white/90 text-sm leading-relaxed max-w-sm font-normal">
              Your smile is part of how you eat, speak, laugh, and connect. Grand Dental Clinic brings thoughtful, comprehensive dental care together with a calm, personal approach.
            </p>
          </div>

          {/* Primary Action Stack */}
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => openAppointmentModal()}
              className="w-full flex items-center justify-center gap-2.5 bg-[#0B3B8B] active:bg-[#134FB0] text-white py-3.5 px-6 rounded-full type-ui-control font-semibold shadow-lg transition-all group min-h-[48px] cursor-pointer"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <Link
              href="/services"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white/15 active:bg-white/25 text-white type-ui-control text-xs sm:text-sm font-medium border border-white/20 backdrop-blur-xs transition-colors min-h-[44px]"
            >
              <span>Explore Treatments</span>
            </Link>
          </div>

          {/* Minimal Trust Strip */}
          <div className="pt-2.5 border-t border-white/20 text-center text-[11px] sm:text-xs text-white font-semibold">
            <div className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 inline-block text-white shadow-2xs">
              General Dentistry &middot; Implants &middot; Orthodontics &middot; Cosmetic &middot; Pediatric
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
