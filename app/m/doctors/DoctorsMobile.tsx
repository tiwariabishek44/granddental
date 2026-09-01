"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, GraduationCap, Clock, Phone, MessageCircle } from "lucide-react";
import { doctorsData } from "@/data/doctors";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export default function DoctorsMobile() {
  const { openAppointmentModal } = useAppointmentModal();
  return (
    <div className="space-y-6 pb-12 sm:hidden font-sans">
      {/* 1. HERO HEADER SECTION */}
      <section className="px-4 pt-4 space-y-2.5">
        <span className="type-eyebrow px-3 py-1 rounded-full bg-[#FCF5FE] border border-[#F3D5F9] inline-block">
          Clinical Faculty
        </span>

        <h1 className="text-3xl font-light text-gray-900 leading-tight tracking-tight">
          Meet Our{" "}
          <span
            className="font-medium text-transparent"
            style={{
              background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            NMC-Certified
          </span>{" "}
          Dental Doctors.
        </h1>

        <p className="type-body font-normal">
          A multidisciplinary team of qualified dental surgeons, orthodontists, endodontists, and prosthodontists dedicated to providing gentle, thorough, and transparent dental care in Swoyambhu, Kathmandu.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col gap-2.5">
          <Link
            href="/appointment"
            className="w-full flex items-center justify-center gap-2.5 bg-[#5C205E] active:bg-[#74267A] text-white py-3.5 px-5 rounded-full type-ui-control font-semibold shadow-md transition-all min-h-[48px]"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white border border-gray-200 text-gray-800 type-ui-control text-xs sm:text-sm font-semibold active:bg-gray-50 transition-colors min-h-[44px]"
          >
            <span>Contact Clinic</span>
          </Link>
        </div>
      </section>

      {/* 2. PEDIGREE & CREDENTIALS MATRIX */}
      <section className="px-4">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-1">
            <div className="text-lg font-bold text-[#5C205E]">100%</div>
            <div className="text-xs font-semibold text-gray-800">NMC Registered Surgeons</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-1">
            <div className="text-lg font-bold text-[#5C205E]">BDS &amp; MDS</div>
            <div className="text-xs font-semibold text-gray-800">Specialized Clinical Faculty</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-1">
            <div className="text-lg font-bold text-[#5C205E]">Gentle Care</div>
            <div className="text-xs font-semibold text-gray-800">Painless Treatment Focus</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-1">
            <div className="text-lg font-bold text-[#5C205E]">Swoyambhu</div>
            <div className="text-xs font-semibold text-gray-800">Open 6 Days a Week</div>
          </div>
        </div>
      </section>

      {/* 3. DOCTORS DIRECTORY */}
      <section className="px-4 space-y-4">
        <div className="space-y-1">
          <span className="type-eyebrow block">
            Specialist Directory &middot; {doctorsData.length} Specialists
          </span>
          <h2 className="type-section-title">
            Our Dental Specialists &amp; Surgeons
          </h2>
        </div>

        <div className="space-y-4">
          {doctorsData.map((doc) => (
            <div
              key={doc.id}
              className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-gray-900 text-white min-h-[400px] p-5 shadow-md select-none block"
            >
              {/* Photo Background */}
              <div className="absolute inset-0">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover object-top opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              </div>

              {/* Doctor Details */}
              <div className="relative z-10 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ED91FB]">
                  {doc.role}
                </span>
                <h3 className="type-card-title text-white text-lg sm:text-xl">
                  {doc.name}
                </h3>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INVITATION CTA BANNER */}
      <section className="px-4">
        <div className="rounded-3xl bg-[#5C205E] text-white p-6 space-y-4 shadow-lg relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-[#CE59DC]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-2">
            <span className="type-eyebrow px-3 py-1 rounded-full bg-white/20 text-white inline-block">
              Swoyambhu, Kathmandu
            </span>
            <h3 className="type-card-title text-white text-xl font-bold leading-tight">
              Consult with Our Specialists Today
            </h3>
            <p className="type-body text-white/95 font-normal leading-relaxed text-sm">
              Whether you need a gentle routine cleaning, braces consultation, or pain relief from toothache, our team is here to help you smile with confidence.
            </p>
          </div>

          <div className="relative z-10 pt-1 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => openAppointmentModal()}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-white text-[#5C205E] type-ui-control font-bold shadow-sm active:bg-gray-100 transition-colors min-h-[48px] cursor-pointer"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/9779841322789"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white/15 border border-white/25 text-white type-ui-control text-xs sm:text-sm font-semibold active:bg-white/25 transition-colors min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>WhatsApp: 9841322789</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
