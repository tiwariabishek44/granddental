"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { doctorsData } from "@/data/doctors";

export default function DoctorsMobile() {
  const featuredDoctors = doctorsData.slice(0, 4);

  return (
    <section className="py-10 px-4 border-b border-gray-100 sm:hidden space-y-6">
      {/* Header & Care Standards */}
      <div className="space-y-4">
        <div className="space-y-2">
          <span className="type-eyebrow">
            Specialized Dental Care
          </span>

          <h2 className="type-section-title">
            Comprehensive dental expertise under one roof.{" "}
            <span
              className="font-medium text-transparent"
              style={{
                background: "linear-gradient(246.94deg, #388EE8 -28.81%, #0B3B8B 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              From routine care to surgery.
            </span>
          </h2>

          <p className="type-body font-normal">
            Our team of dental specialists takes the time to listen, explain every step clearly, and recommend only what is best for your smile.
          </p>
        </div>

        {/* Practice Standards Box */}
        <div className="rounded-2xl bg-[#F0F7FF] border border-[#DBEAFE] p-4 sm:p-5 space-y-3 shadow-2xs">
          <div className="text-xs font-bold text-[#0B3B8B] uppercase tracking-wider">
            Our Care Standard
          </div>
          <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm text-gray-800 font-medium">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#0B3B8B] shrink-0" />
              <span>Experienced Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0B3B8B] shrink-0" />
              <span>Painless Procedures</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0B3B8B] shrink-0" />
              <span>Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#0B3B8B] shrink-0" />
              <span>Gentle &amp; Patient-First</span>
            </div>
          </div>
          <div className="pt-2.5 border-t border-[#DBEAFE]">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B3B8B] active:text-[#134FB0] group cursor-pointer"
            >
              <span>Meet All Our Doctors</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Portrait Cards (Horizontal Snap Carousel) */}
      <div className="flex gap-4 overflow-x-auto pb-3 -mr-4 pr-4 no-scrollbar snap-x snap-mandatory">
        {featuredDoctors.map((doc) => (
          <div
            key={doc.id}
            className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-gray-900 text-white min-h-[380px] w-[270px] shrink-0 snap-start p-5 shadow-md select-none"
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
              <div className="flex items-center justify-between gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#60A5FA]">
                  {doc.role}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/15 text-white/90 border border-white/20">
                  {doc.nmc}
                </span>
              </div>
              <h3 className="type-card-title text-white">
                {doc.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
