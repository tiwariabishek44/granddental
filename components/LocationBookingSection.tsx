"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, ArrowRight, Check } from "lucide-react";
import clinicBg from "../assets/front view.jpeg";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export default function LocationBookingSection() {
  const { openAppointmentModal } = useAppointmentModal();
  return (
    <section className="relative w-full min-h-[600px] lg:h-[580px] overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={clinicBg}
          alt="Grand Dental Clinic Kathmandu"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Responsive Readability Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/60 lg:bg-gradient-to-r lg:from-black/40 lg:via-black/70 lg:to-black/95" />
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column (Spacer for background framing) */}
          <div className="hidden lg:block lg:col-span-5" />

          {/* Right Column (CTA Content) */}
          <div className="lg:col-span-7 flex flex-col justify-center max-w-xl lg:ml-auto">

            {/* Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-widest text-[#60A5FA] mb-2">
              Book Your Visit
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-medium leading-tight mb-3 text-white">
              Ready to fix your smile?{" "}
              <span className="text-[#60A5FA]">Let’s get started.</span>
            </h2>

            {/* Subtext */}
            <p className="text-white/85 text-sm sm:text-base font-normal leading-relaxed mb-6">
              Whether you need a routine checkup, relief from sudden tooth pain, or specialized smile alignment, our team provides gentle, honest care every step of the way.
            </p>

            {/* Key Value Points */}
            <div className="mb-7 space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0B3B8B] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#93C5FD]" />
                </div>
                <p className="text-white/90 text-sm font-medium">
                  Same-day consultations &amp; urgent pain relief
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0B3B8B] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#93C5FD]" />
                </div>
                <p className="text-white/90 text-sm font-medium">
                  Transparent treatment plans with zero pressure
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0B3B8B] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#93C5FD]" />
                </div>
                <p className="text-white/90 text-sm font-medium">
                  Gentle, step-by-step care designed to keep you at ease
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => openAppointmentModal()}
                className="group flex-1 bg-[#0B3B8B] hover:bg-[#134FB0] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#388EE8]/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex gap-2.5">
                <a
                  href="tel:014950352"
                  className="flex-1 sm:flex-initial bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white font-medium text-sm px-4 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  aria-label="Call clinic directly"
                >
                  <Phone className="w-4 h-4 text-[#60A5FA]" />
                  <span>Call Us</span>
                </a>

                <a
                  href="https://wa.me/9779841322789?text=Namaste%20Grand%20Dental,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial bg-emerald-600/20 backdrop-blur-md hover:bg-emerald-600/30 border border-emerald-500/40 text-white font-medium text-sm px-4 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  aria-label="Message on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Footer Location Note */}
            <p className="text-white/60 text-xs mt-5 text-left font-normal">
              Conveniently located at Swoyambhu Ring Road, Kathmandu &bull; Open 7 Days a Week
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}