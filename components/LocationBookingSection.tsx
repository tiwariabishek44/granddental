"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import clinicBg from "../assets/front view.jpeg";

export default function LocationBookingSection() {
  return (
    <section className="relative w-full h-[540px] md:h-[580px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={clinicBg}
          alt="Grand Dental Clinic Kathmandu"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Subtle Overlay Gradient - Matching Hotel Reference */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/80" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left side - reserved for background subject */}
          <div className="hidden md:block" />

          {/* Right side - Minimalist CTA content */}
          <div className="flex flex-col justify-center">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-normal leading-tight mb-3 text-white">
              <span>Every Great Smile </span>
              <span className="text-[#ED91FB]">Begins With a Step</span>
            </h2>

            {/* Description */}
            <p className="text-white/90 text-sm font-normal leading-relaxed mb-6">
              Experience modern, anxiety-free dental care in Kathmandu. From precision 3D digital imaging to gentle restorative treatments, our specialists craft your healthiest smile with personalized attention.
            </p>

            {/* Value Props - Quick bullets */}
            <div className="mb-7 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-[#ED91FB] rounded-full shrink-0 shadow-[0_0_6px_#ED91FB]" />
                <p className="text-white/90 text-xs sm:text-sm font-medium">
                  Comprehensive 3D CBCT digital scans &amp; consultation
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-[#ED91FB] rounded-full shrink-0 shadow-[0_0_6px_#ED91FB]" />
                <p className="text-white/90 text-xs sm:text-sm font-medium">
                  Anxiety-free, gentle procedures by experienced specialists
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-[#ED91FB] rounded-full shrink-0 shadow-[0_0_6px_#ED91FB]" />
                <p className="text-white/90 text-xs sm:text-sm font-medium">
                  Free on-site parking at Swoyambhu Buddha Park
                </p>
              </div>
            </div>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-col gap-3">
              <Link
                href="/appointment"
                className="group bg-[#5C205E] hover:bg-[#74267A] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#B43ABF]/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Your Consultation Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary Options */}
              <div className="flex gap-3">
                <a
                  href="tel:014950352"
                  className="flex-1 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white font-medium text-xs sm:text-sm px-4 py-2.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ED91FB]" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/9779841322789?text=Namaste%20Grand%20Dental,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white font-medium text-xs sm:text-sm px-4 py-2.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#ED91FB]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Trust Badge */}
            <p className="text-white/60 text-xs mt-4 text-center font-light">
              ✓ Trusted by 10,000+ patients in Kathmandu • Swoyambhu Ring Road
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}



