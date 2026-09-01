"use client";

import React from "react";
import { Phone, MessageCircle, Calendar, ArrowRight, Check } from "lucide-react";
import MobileSectionHeader from "../components/MobileSectionHeader";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export default function LocationBookingMobile() {
  const { openAppointmentModal } = useAppointmentModal();

  return (
    <section className="px-4 py-8 sm:hidden space-y-5">
      {/* Header */}
      <MobileSectionHeader
        eyebrow="Book Your Visit"
        title="Ready to fix your smile?"
        gradientWord="Let’s get started."
        subtitle="Whether you need a routine checkup, relief from sudden tooth pain, or specialized smile alignment, our team provides gentle, honest care every step of the way."
      />

      {/* Value Points Bento Card */}
      <div className="rounded-3xl bg-[#FCF5FE] border border-[#F3D5F9] p-5 space-y-3.5 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-[#5C205E] flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-[#ED91FB]" />
          </div>
          <p className="type-meta text-gray-900 font-semibold">
            Same-day consultations &amp; urgent pain relief
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-[#5C205E] flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-[#ED91FB]" />
          </div>
          <p className="type-meta text-gray-900 font-semibold">
            Transparent treatment plans with zero pressure
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-[#5C205E] flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-[#ED91FB]" />
          </div>
          <p className="type-meta text-gray-900 font-semibold">
            Gentle, step-by-step care designed to keep you at ease
          </p>
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
            Book an Appointment
          </h3>
          <p className="type-body text-white/95 font-normal leading-relaxed text-sm">
            Walk in or reserve your slot with our specialist team for a gentle, zero-fear checkup.
          </p>
        </div>

        <div className="relative z-10 pt-1 flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => openAppointmentModal()}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-white text-[#5C205E] type-ui-control font-bold shadow-sm active:bg-gray-100 transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Online Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href="tel:014950352"
              className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-full bg-white/15 border border-white/25 text-white type-ui-control text-xs sm:text-sm font-semibold active:bg-white/25 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ED91FB]" />
              <span>Call Us</span>
            </a>

            <a
              href="https://wa.me/9779841322789?text=Namaste%20Grand%20Dental,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-full bg-emerald-600/30 border border-emerald-400/40 text-white type-ui-control text-xs sm:text-sm font-semibold active:bg-emerald-600/40 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
