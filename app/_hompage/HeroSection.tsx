"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import hero from "../../assets/hero.png";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-4 mb-0 sm:mb-2">
      {/* Cinematic Editorial Canvas */}
      <div className="relative h-[80vh] min-h-[520px] max-h-[700px] w-full rounded-3xl overflow-hidden bg-[#101828] shadow-sm border border-black/5 flex flex-col justify-between p-8 sm:p-12 lg:p-16">
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

        {/* Top Location Bar */}
        <div className="relative z-10 flex items-center justify-between text-xs sm:text-sm text-white/90">

        </div>

        {/* Center Editorial Typography */}
        <div className="relative z-10 max-w-2xl space-y-6 my-auto">
          <div className="space-y-2">

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08]">
              Modern Dentistry.
              <br />
              <span className="font-normal text-white">
                Made Gently Human.
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-white/95 leading-relaxed font-normal max-w-xl">
            From routine ultrasonic cleaning to painless root canals and orthodontic braces, experience unhurried dental care by NMC-certified specialists in Swoyambhu.
          </p>

          {/* Focused Action Pair */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-3 bg-[#5C205E] hover:bg-[#74267A] text-white px-8 py-4 rounded-full text-base font-semibold shadow-md transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/about"
              className="text-base font-medium text-white/90 hover:text-white underline underline-offset-8 transition-colors"
            >
              Explore Our Approach
            </Link>
          </div>
        </div>

        {/* Understated Minimalist Footer Note */}
        <div className="relative z-10 flex flex-wrap items-center justify-between text-xs sm:text-sm text-white/85 pt-4 border-t border-white/15 gap-2 font-normal">
          <span>
            NMC Certified Doctors &middot; Autoclave Sterilized Facility
          </span>
          <span>
            Telephone: 01-4950352 &middot; Sun &ndash; Fri: 8 AM &ndash; 6 PM
          </span>
        </div>
      </div>
    </section>
  );
}
