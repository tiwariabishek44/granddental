"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu } from "lucide-react";
import MobileDrawer from "./MobileDrawer";

export default function MobileHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header
        aria-label="Mobile Navigation Header"
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-2.5 sm:hidden shadow-2xs"
      >
        <div className="flex items-center justify-between h-12">
          {/* Logo Mark + Clinic Name */}
          <Link href="/" className="flex items-center gap-2.5 group py-1 select-none">
            <div className="relative h-9 w-9 rounded-full border border-[#F3D5F9] bg-white p-0.5 shadow-2xs flex items-center justify-center shrink-0">
              <Image
                src="/logo.png"
                alt="Grand Dental Clinic Logo"
                width={36}
                height={36}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-2xl font-normal tracking-tight text-gray-950 leading-none group-hover:text-[#5C205E] transition-colors">
                Grand Dental
              </span>
              <span className="text-[9.5px] font-bold tracking-[0.22em] uppercase text-[#74267A] mt-1 font-sans">
                Clinic &bull; Kathmandu
              </span>
            </div>
          </Link>

          {/* Quick Call & Drawer Trigger (Min 44x44px Touch Targets) */}
          <div className="flex items-center gap-2">
            <a
              href="tel:01-4950352"
              className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl bg-[#FCF5FE] border border-[#F3D5F9] text-[#74267A] active:bg-[#F3D5F9] transition-colors"
              aria-label="Call Grand Dental Clinic at 01-4950352"
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

      {/* Slide-Up Mobile Navigation Drawer */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
