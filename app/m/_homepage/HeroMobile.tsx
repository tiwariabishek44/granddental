"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";
import heroImg from "@/assets/hero.png";

export default function HeroMobile() {
  return (
    <section className="w-full sm:hidden">
      {/* Full-Width Edge-to-Edge Flagship Hero Canvas with Fixed Stable Height (No Scroll Resize) */}
      <div className="relative min-h-[580px] h-[calc(100svh-3.5rem)] w-full overflow-hidden bg-[#101828] flex flex-col justify-between p-5 pt-6 pb-8">
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

        {/* Top Status & Location Badge */}
        <div className="relative z-10 flex items-center justify-between text-xs sm:text-sm text-white/95">

        </div>

        {/* Bottom Hero Anchor: Flagship Typography & Direct Booking */}
        <div className="relative z-10 space-y-4 pt-16">
          {/* Core Headlines */}
          <div className="space-y-2">

            <h1 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-[1.12]">
              Modern Dentistry.{" "}
              <span className="font-semibold text-white block">
                Made Gently Human.
              </span>
            </h1>
            <p className="type-lead text-white/95 max-w-xs">
              Painless root canals, ultrasonic cleaning, and clear aligners by NMC-certified specialists.
            </p>
          </div>

          {/* Primary Action Stack */}
          <div className="pt-2 flex flex-col gap-2.5">
            <Link
              href="/appointment"
              className="w-full flex items-center justify-center gap-2.5 bg-[#5C205E] active:bg-[#74267A] text-white py-4 px-6 rounded-2xl type-ui-control font-bold shadow-lg transition-all group min-h-[50px]"
            >
              <span>Book Dental Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="tel:01-4950352"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/15 active:bg-white/25 text-white type-ui-control text-xs sm:text-sm font-semibold border border-white/20 backdrop-blur-xs transition-colors min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-[#ED91FB]" />
              <span>Call Helpline: </span>
              <span className="font-clinical font-bold">01-4950352</span>
            </a>
          </div>

          {/* Minimal Trust Strip */}
          <div className="pt-2 border-t border-white/15 flex items-center justify-between type-meta text-white/90 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#ED91FB]" />
              <span>100% Autoclave Sterilized</span>
            </span>
            <span>NMC Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
