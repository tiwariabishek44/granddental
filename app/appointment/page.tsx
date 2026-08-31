import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Phone, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Book an Appointment — Grand Dental Clinic",
  description: "Schedule your dental checkup, consultation, or 3D scan online with Grand Dental Clinic in Swoyambhu, Kathmandu.",
};

export default function AppointmentPage() {
  return (
    <main className="min-h-[70vh] bg-white text-gray-900 font-sans pb-24">
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
                  background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
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
        <div className="rounded-3xl border border-[#EECFF4] bg-[#FCF5FE] p-6 sm:p-10 lg:p-12 space-y-8 shadow-sm">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EECFF4] text-xs font-semibold text-[#74267A]">
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
            {/* Option 1: Direct Phone */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FCF5FE] text-[#74267A] flex items-center justify-center border border-[#EECFF4]">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="type-card-title">Phone Call</h3>
                <p className="type-body text-xs sm:text-sm">
                  Speak directly with our receptionist to book your slot immediately.
                </p>
              </div>
              <a
                href="tel:014950352"
                className="btn-pill-primary w-full text-center"
              >
                <span>Call 01-4950352</span>
              </a>
            </div>

            {/* Option 2: WhatsApp Chat */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="type-card-title">WhatsApp Message</h3>
                <p className="type-body text-xs sm:text-sm">
                  Send your preferred time, symptoms, or photo for quick appointment confirmation.
                </p>
              </div>
              <a
                href="https://wa.me/9779841322789?text=Namaste%20Grand%20Dental,%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 bg-emerald-700 text-white hover:bg-emerald-800 h-11 px-5 text-sm gap-2 shadow-sm"
              >
                <span>WhatsApp: 9841322789</span>
              </a>
            </div>

            {/* Option 3: Walk-In Visit */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FCF5FE] text-[#74267A] flex items-center justify-center border border-[#EECFF4]">
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
