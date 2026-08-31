"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, ShieldCheck, Phone, Calendar, MessageCircle } from "lucide-react";
import { servicesData } from "@/data/services";

export default function ServicesMobilePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Treatments" },
    { id: "preventive", label: "Preventive" },
    { id: "restorative", label: "Restorative" },
    { id: "replacement", label: "Replacement" },
    { id: "orthodontics", label: "Orthodontics" },
    { id: "cosmetic", label: "Cosmetic" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <div className="space-y-6 pb-12 sm:hidden font-sans">
      {/* 1. HERO HEADER SECTION */}
      <section className="px-4 pt-4 space-y-2.5">
        <span className="type-eyebrow px-3 py-1 rounded-full bg-[#FCF5FE] border border-[#F3D5F9] inline-block">
          Treatments &amp; Dental Care
        </span>

        <h1 className="text-3xl font-light text-gray-900 leading-tight tracking-tight">
          Complete dental care for your whole family,{" "}
          <span
            className="font-medium text-transparent"
            style={{
              background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            under one roof.
          </span>
        </h1>

        <p className="type-body font-normal">
          From routine cleanings and natural tooth fillings to pain-free root canals, braces, and permanent dental implants—our experienced specialists provide gentle care designed to protect your natural teeth.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col gap-2.5">
          <Link
            href="/appointment"
            className="w-full flex items-center justify-center gap-2.5 bg-[#5C205E] active:bg-[#74267A] text-white py-3.5 px-5 rounded-full type-ui-control font-semibold shadow-md transition-all min-h-[48px]"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white border border-gray-200 text-gray-800 type-ui-control text-xs sm:text-sm font-semibold active:bg-gray-50 transition-colors min-h-[44px]"
          >
            <span>Call 01-4950352</span>
          </Link>
        </div>
      </section>

      {/* 2. PEDIGREE & CREDENTIALS MATRIX */}
      <section className="px-4">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-1">
            <div className="text-lg font-bold text-[#5C205E]">Comfort First</div>
            <div className="text-xs font-semibold text-gray-800">Gentle &amp; Pain-Free</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-1">
            <div className="text-lg font-bold text-[#5C205E]">Experienced</div>
            <div className="text-xs font-semibold text-gray-800">Specialist Dental Doctors</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-1">
            <div className="text-lg font-bold text-[#5C205E]">Honest Plans</div>
            <div className="text-xs font-semibold text-gray-800">Clear &amp; Upfront Pricing</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-1">
            <div className="text-lg font-bold text-[#5C205E]">100% Sterile</div>
            <div className="text-xs font-semibold text-gray-800">Autoclaved Instruments</div>
          </div>
        </div>
      </section>

      {/* 3. TREATMENT DIRECTORY CARDS */}
      <section className="px-4 space-y-4">
        <div className="space-y-1">
          <span className="type-eyebrow block">
            Explore Treatments &middot; {filteredServices.length} Treatments
          </span>
          <h2 className="type-section-title">
            Services we offer
          </h2>
          <p className="type-body font-normal text-sm">
            Complete dental care for every stage of your smile, combining experienced care, modern treatments, and thoughtful guidance under one roof.
          </p>
        </div>

        <div className="space-y-4">
          {filteredServices.map((srv) => (
            <Link
              key={srv.id}
              href={`/services/${srv.slug || srv.id}`}
              className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-gray-900 text-white min-h-[320px] p-5 shadow-md active:scale-[0.99] transition-transform cursor-pointer block"
            >
              {/* Photo Background */}
              <Image
                src={srv.image}
                alt={srv.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />

              {/* Bottom Details */}
              <div className="relative z-10 space-y-2">


                <h3 className="type-card-title text-white text-lg sm:text-xl">
                  {srv.title}
                </h3>

                <div className="pt-2 border-t border-white/20 flex items-center justify-between type-meta text-white/90 font-medium">
                  <div className="flex items-center gap-1 type-ui-control font-semibold text-white">
                    <span>Learn about this treatment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
              Book Your Visit
            </span>
            <h3 className="type-card-title text-white text-xl font-bold leading-tight">
              Ready to fix your smile? Let’s get started.
            </h3>
            <p className="type-body text-white/95 font-normal leading-relaxed text-sm">
              Whether you need a routine checkup, relief from sudden tooth pain, or specialized smile alignment, our team provides gentle, honest care every step of the way.
            </p>
          </div>

          <div className="relative z-10 pt-1 flex flex-col gap-2.5">
            <Link
              href="/appointment"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-white text-[#5C205E] type-ui-control font-bold shadow-sm active:bg-gray-100 transition-colors min-h-[48px]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

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
