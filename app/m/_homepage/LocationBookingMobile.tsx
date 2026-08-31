"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Clock, Navigation, Calendar, ArrowRight } from "lucide-react";
import MobileSectionHeader from "../components/MobileSectionHeader";

export default function LocationBookingMobile() {
  return (
    <section className="px-4 py-8 sm:hidden space-y-5">
      {/* Header */}
      <MobileSectionHeader
        eyebrow="Find Us & Book"
        title="Visit Grand Dental in"
        gradientWord="Swoyambhu"
        subtitle="Conveniently located along Ring Road with dedicated patient parking and wheelchair accessibility."
      />

      {/* Location Details Bento Card */}
      <div className="rounded-3xl bg-[#FCF5FE] border border-[#F3D5F9] p-5 space-y-4 shadow-2xs">
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 type-ui-control text-gray-900 font-semibold">
            <MapPin className="w-4 h-4 text-[#74267A] shrink-0 mt-0.5" />
            <span>Nagarjun-3, Pachadhara, Swoyambhu, Kathmandu (Near Stupa Gate)</span>
          </div>

          <div className="flex items-center gap-2.5 type-meta text-gray-700 font-normal">
            <Clock className="w-4 h-4 text-[#74267A] shrink-0" />
            <span>Sun – Fri: 8:00 AM – 6:00 PM (Saturday Closed)</span>
          </div>
        </div>

        {/* Action Buttons: Google Maps & Phone */}
        <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-[#F3D5F9]">
          <a
            href="https://maps.google.com/?q=Swoyambhu+Kathmandu+Nepal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-white border border-[#F3D5F9] text-[#74267A] type-ui-control font-bold shadow-2xs active:bg-gray-50"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Google Maps</span>
          </a>

          <a
            href="tel:01-4950352"
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-[#5C205E] active:bg-[#74267A] text-white type-ui-control font-bold shadow-2xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>01-4950352</span>
          </a>
        </div>
      </div>

      {/* Instant Appointment Card */}
      <div className="rounded-3xl bg-[#5C205E] text-white p-6 space-y-4 shadow-lg relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-[#CE59DC]/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <span className="type-eyebrow px-3 py-1 rounded-full bg-white/20 text-white inline-block">
            Direct Consultation
          </span>
          <h3 className="type-card-title text-white text-xl font-bold leading-tight">
            Book Your Dental Consultation
          </h3>
          <p className="type-body text-white/95 font-normal leading-relaxed">
            Walk in or reserve your slot with our specialist team for a gentle, zero-fear checkup.
          </p>
        </div>

        <div className="relative z-10 pt-1 flex flex-col gap-2.5">
          <Link
            href="/appointment"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-white text-[#5C205E] type-ui-control font-bold shadow-sm active:bg-gray-100 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Online Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/9779841322789"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white/15 border border-white/25 text-white type-ui-control text-xs sm:text-sm font-semibold active:bg-white/25 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
