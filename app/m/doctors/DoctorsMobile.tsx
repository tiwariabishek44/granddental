"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, GraduationCap, Clock, Phone, MessageCircle } from "lucide-react";
import { doctorsData } from "@/data/doctors";

export default function DoctorsMobile() {
  return (
    <div className="space-y-6 pb-12 sm:hidden font-sans">
      {/* 1. HERO HEADER SECTION */}
      <section className="px-4 pt-4 space-y-2.5">


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
          Specialists
        </h1>

        <p className="type-body font-normal">
          A dedicated faculty of qualified dental surgeons, orthodontists, endodontists, and prosthodontists providing gentle, transparent care in Kathmandu.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col gap-2.5">
          <Link
            href="/appointment"
            className="w-full flex items-center justify-center gap-2.5 bg-[#5C205E] active:bg-[#74267A] text-white py-3.5 px-5 rounded-2xl type-ui-control font-bold shadow-md transition-all min-h-[48px]"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:01-4950352"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-gray-200 text-gray-800 type-ui-control text-xs sm:text-sm font-semibold active:bg-gray-50 transition-colors min-h-[44px]"
          >
            <Phone className="w-4 h-4 text-[#74267A]" />
            <span>Call Helpline: 01-4950352</span>
          </a>
        </div>
      </section>

      {/* 2. PEDIGREE & CREDENTIALS MATRIX */}
      <section className="px-4">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-1">
            <div className="type-card-title text-[#5C205E]">100%</div>
            <div className="type-meta text-gray-800 font-semibold">NMC Registered</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-1">
            <div className="type-card-title text-[#5C205E]">BDS &amp; MDS</div>
            <div className="type-meta text-gray-800 font-semibold">Clinical Faculty</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-1">
            <div className="type-card-title text-[#5C205E]">Painless</div>
            <div className="type-meta text-gray-800 font-semibold">Gentle Protocols</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-1">
            <div className="type-card-title text-[#5C205E]">6 Days</div>
            <div className="type-meta text-gray-800 font-semibold">Open in Swoyambhu</div>
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
            Our Specialist Doctors
          </h2>
        </div>

        <div className="space-y-4">
          {doctorsData.map((doc) => (
            <Link
              key={doc.id}
              href={`/doctors/${doc.id}`}
              className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-gray-900 text-white min-h-[400px] p-5 shadow-md active:scale-[0.99] transition-transform cursor-pointer block"
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
              <div className="relative z-10 space-y-2.5">
                <div>

                  <h3 className="type-card-title text-white text-lg sm:text-xl">
                    {doc.name}
                  </h3>

                </div>

                <div className="pt-2.5 border-t border-white/20 flex items-center justify-between type-ui-control font-semibold text-white">
                  <span>View Full Profile</span>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
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
            <p className="type-body text-white/95 font-normal leading-relaxed">
              Whether you need gentle scaling, braces consultation, or pain relief, our team is here for you.
            </p>
          </div>

          <div className="relative z-10 pt-1 flex flex-col gap-2.5">
            <Link
              href="/appointment"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-white text-[#5C205E] type-ui-control font-bold shadow-sm active:bg-gray-100 transition-colors min-h-[48px]"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/9779841322789"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white/15 border border-white/25 text-white type-ui-control text-xs sm:text-sm font-semibold active:bg-white/25 transition-colors min-h-[44px]"
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
