"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  GraduationCap,
} from "lucide-react";
import { doctorsData } from "@/data/doctors";
import { DoctorsMobile } from "@/app/m/doctors";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export default function DoctorsPage() {
  const { openAppointmentModal } = useAppointmentModal();
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-[#DBEAFE] selection:text-[#0B3B8B] font-sans">
      {/* MOBILE DOCTORS VIEW (sm:hidden) */}
      <div className="block sm:hidden">
        <DoctorsMobile />
      </div>

      {/* DESKTOP DOCTORS VIEW (hidden sm:block) */}
      <div className="hidden sm:block pb-24">
        {/* 1. HERO SECTION */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 mb-16">
          <div
            className="rounded-3xl border border-gray-200/80 p-6 sm:p-10 lg:p-12 shadow-sm space-y-6"
            style={{
              background: "radial-gradient(100% 286.18% at 100% 100%, #F0F7FF 0%, #F8FAFC 100%)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="type-eyebrow">
                  Clinical Faculty
                </span>
                <h1 className="type-display">
                  Meet Our{" "}
                  <span
                    className="font-normal text-transparent"
                    style={{
                      background: "linear-gradient(246.94deg, #388EE8 -28.81%, #0B3B8B 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    NMC-Certified
                  </span>{" "}
                  Dental Doctors.
                </h1>
                <p className="type-lead">
                  A multidisciplinary team of qualified dental surgeons, orthodontists, endodontists, and prosthodontists dedicated to providing gentle, thorough, and transparent dental care in Swoyambhu, Kathmandu.
                </p>
              </div>

              {/* Doctors-page hero actions intentionally hidden.
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
                <Link href="/appointment" className="group btn-pill-primary w-full sm:w-auto text-center justify-center">
                  <span>Book Consultation</span>
                  <span className="flex items-center justify-center rounded-full bg-white p-1.5 transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 text-[#0B3B8B]" />
                  </span>
                </Link>
                <Link href="/contact" className="btn-pill-outline w-full sm:w-auto text-center justify-center">
                  <span>Contact Clinic</span>
                </Link>
              </div> */}
            </div>

            {/* Quick Pedigree Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200/80">
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-1 text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#0B3B8B]">100%</div>
                <div className="text-sm sm:text-base text-gray-800 font-semibold">NMC Registered Surgeons</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-1 text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#0B3B8B]">BDS &amp; MDS</div>
                <div className="text-sm sm:text-base text-gray-800 font-semibold">Specialized Clinical Faculty</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-1 text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#0B3B8B]">Gentle Care</div>
                <div className="text-sm sm:text-base text-gray-800 font-semibold">Painless Treatment Focus</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-1 text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#0B3B8B]">Swoyambhu</div>
                <div className="text-sm sm:text-base text-gray-800 font-semibold">Open 6 Days a Week</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. DOCTORS DIRECTORY */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="type-eyebrow">
              Specialist Directory &middot; {doctorsData.length} Specialists
            </span>
            <h2 className="type-section-title mt-2">
              Our Dental Specialists &amp; Surgeons
            </h2>
          </div>

          {/* Doctors Grid (3 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {doctorsData.map((doc) => (
              <div
                key={doc.id}
                className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-gray-900 text-white min-h-[440px] sm:min-h-[460px] p-6 shadow-md select-none"
              >
                {/* Background Photographic Canvas */}
                <div className="absolute inset-0">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover object-top opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                </div>

                {/* Bottom Profile Details */}
                <div className="relative z-10 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
                      {doc.role}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white/15 text-white/90 border border-white/20">
                      {doc.nmc}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white leading-snug">
                    {doc.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. BOTTOM INVITATION BANNER */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="rounded-3xl bg-[#0B192C] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#388EE8]/20 blur-3xl pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold bg-white/15 backdrop-blur-md text-white border border-white/20">
                  Swoyambhu, Kathmandu
                </span>
                <h2 className="text-2xl sm:text-4xl font-medium text-white leading-tight">
                  Consult with Our Specialists Today
                </h2>
                <p className="text-white/95 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                  Whether you need a gentle routine cleaning, braces consultation, or pain relief from toothache, our team is here to help you smile with confidence.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end justify-center">
                <button
                  type="button"
                  onClick={() => openAppointmentModal()}
                  className="w-full sm:w-auto text-center justify-center bg-white text-gray-900 hover:bg-gray-100 px-7 py-4 rounded-full text-base font-semibold shadow-md transition-colors cursor-pointer"
                >
                  Book Appointment
                </button>
                <a
                  href="https://wa.me/9779861161359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center justify-center inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-7 py-4 rounded-full text-base font-semibold transition-colors cursor-pointer"
                >
                  <span>WhatsApp: 9861161359</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
