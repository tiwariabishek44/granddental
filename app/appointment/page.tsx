"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Phone, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export default function AppointmentPage() {
  const { openAppointmentModal } = useAppointmentModal();
  return (
    <main className="min-h-[70vh] bg-white text-gray-900 font-sans pb-24 selection:bg-[#DBEAFE] selection:text-[#0B3B8B]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="type-eyebrow">
            Online Appointment &middot; Swoyambhu, Kathmandu
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <h1 className="type-display">
              Reserve Your{" "}
              <span
                className="font-normal text-transparent"
                style={{
                  background: "linear-gradient(246.94deg, #388EE8 -28.81%, #0B3B8B 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Dental Visit
              </span>
            </h1>
            <p className="type-lead">
              Fast, hassle-free scheduling. Walk in directly or book ahead to reserve your preferred consultation time with our specialist doctors.
            </p>
          </div>
        </div>

        {/* Welcome Content Card */}
        <div className="rounded-3xl border border-[#DBEAFE] bg-[#F0F7FF] p-6 sm:p-10 lg:p-12 space-y-8 shadow-sm">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DBEAFE] text-xs font-semibold text-[#0B3B8B]">
              <Calendar className="w-4 h-4" />
              <span>Direct Scheduling &middot; Open 6 Days a Week</span>
            </span>

            <h2 className="type-section-title">
              How Would You Like to Connect?
            </h2>
            <p className="type-body text-gray-700 max-w-2xl font-light">
              Choose your preferred method below to confirm your appointment, ask questions about treatment procedures, or get directions to our Swoyambhu clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Option 1: WhatsApp Online Booking Modal */}
            <div className="bg-white p-6 rounded-2xl border-2 border-[#0B3B8B] shadow-md space-y-4 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0B3B8B] text-white flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="type-card-title text-gray-900">Instant Online Request</h3>
                <p className="type-body text-xs sm:text-sm">
                  Select your doctor, preferred treatment, date &amp; time to send instantly via WhatsApp.
                </p>
              </div>
              <button
                type="button"
                onClick={() => openAppointmentModal()}
                className="btn-pill-primary w-full text-center cursor-pointer"
              >
                <span>Open Booking Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Option 2: Direct Phone */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#F0F7FF] text-[#0B3B8B] flex items-center justify-center border border-[#DBEAFE]">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="type-card-title">Phone Call</h3>
                <p className="type-body text-xs sm:text-sm">
                  Speak directly with our receptionist to book your slot immediately.
                </p>
              </div>
              <a
                href="tel:014950352"
                className="btn-pill-outline w-full text-center"
              >
                <span>Call 01-4950352</span>
              </a>
            </div>

            {/* Option 3: Walk-In Visit */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#F0F7FF] text-[#0B3B8B] flex items-center justify-center border border-[#DBEAFE]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="type-card-title">Walk-In Visit</h3>
                <p className="type-body text-xs sm:text-sm">
                  Visit us in Swoyambhu (near Buddha Park &amp; Pachadhara). Dedicated free parking.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-pill-outline w-full text-center"
              >
                <span>View Location Map</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
