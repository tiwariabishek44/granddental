"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import MobileDrawer from "./MobileDrawer";

export default function MobileHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header
        aria-label="Mobile Navigation Header"
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 sm:hidden shadow-2xs"
      >
        {/* Top Marquee Ribbon */}
        <div className="bg-[#0B3B8B] text-white text-[11px] font-medium py-1.5 overflow-hidden relative border-b border-white/10 select-none">
          {/* Subtle Fade Edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#0B3B8B] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#0B3B8B] to-transparent z-10" />

          {/* Continuous Loop Marquee Track */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-mobile flex items-center shrink-0 gap-5">
              {/* Cycle 1 */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span className="font-semibold text-white">Open Today: 9 AM – 7 PM</span>
                </div>

                <span className="text-white/30">&bull;</span>

                <div className="flex items-center gap-1 text-white/95">
                  <ShieldCheck className="w-3 h-3 text-[#60A5FA]" />
                  <span>NMC Certified Specialists</span>
                </div>

                <span className="text-white/30">&bull;</span>

                <div className="flex items-center gap-1 text-white/95">
                  <MapPin className="w-3 h-3 text-[#60A5FA]" />
                  <span>Swoyambhu, Kathmandu</span>
                </div>

                <span className="text-white/30">&bull;</span>

                <a href="tel:9861161359" className="flex items-center gap-1 text-white font-semibold">
                  <Phone className="w-3 h-3 text-[#60A5FA]" />
                  <span>9861161359</span>
                </a>

                <span className="text-white/30">&bull;</span>

                <div className="flex items-center gap-1 text-white font-semibold">
                  <Sparkles className="w-3 h-3 text-[#60A5FA]" />
                  <span>Quality Dental Care &bull; Honest Pricing &bull; Every Smile Matters</span>
                </div>

                <span className="text-white/30">&bull;</span>
              </div>

              {/* Cycle 2 (Exact Duplicate for seamless infinite loop) */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span className="font-semibold text-white">Open Today: 9 AM – 7 PM</span>
                </div>

                <span className="text-white/30">&bull;</span>

                <div className="flex items-center gap-1 text-white/95">
                  <ShieldCheck className="w-3 h-3 text-[#60A5FA]" />
                  <span>NMC Certified Specialists</span>
                </div>

                <span className="text-white/30">&bull;</span>

                <div className="flex items-center gap-1 text-white/95">
                  <MapPin className="w-3 h-3 text-[#60A5FA]" />
                  <span>Swoyambhu, Kathmandu</span>
                </div>

                <span className="text-white/30">&bull;</span>

                <a href="tel:9861161359" className="flex items-center gap-1 text-white font-semibold">
                  <Phone className="w-3 h-3 text-[#60A5FA]" />
                  <span>9861161359</span>
                </a>

                <span className="text-white/30">&bull;</span>

                <div className="flex items-center gap-1 text-white font-semibold">
                  <Sparkles className="w-3 h-3 text-[#60A5FA]" />
                  <span>Quality Dental Care &bull; Honest Pricing &bull; Every Smile Matters</span>
                </div>

                <span className="text-white/30">&bull;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Logo & Menu Bar */}
        <div className="px-4 py-2 flex items-center justify-between h-14 sm:h-16">
          {/* Rectangular Brand Logo */}
          <Link href="/" className="flex items-center group py-0.5 select-none shrink-0">
            <Image
              src="/logo.png"
              alt="Grand Dental Clinic Logo"
              width={180}
              height={50}
              className="h-11 sm:h-12.5 w-auto object-contain"
              priority
            />
          </Link>

          {/* Quick Call & Drawer Trigger (Min 44x44px Touch Targets) */}
          <div className="flex items-center gap-2">
            <a
              href="tel:9861161359"
              className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl bg-[#F0F7FF] border border-[#DBEAFE] text-[#0B3B8B] active:bg-[#DBEAFE] transition-colors"
              aria-label="Call Grand Dental Clinic at 9861161359"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl bg-gray-100 text-gray-800 active:bg-gray-200 transition-colors"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-over Drawer Menu */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
