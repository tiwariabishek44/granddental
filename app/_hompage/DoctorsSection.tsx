"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { doctorsData } from "@/data/doctors";

export default function DoctorsSection() {
  const featuredDoctors = doctorsData.slice(0, 4);

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16 border-b border-gray-100 space-y-10">
      {/* Responsive Header with Values Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-3">
          <span className="type-eyebrow">
            Specialized Dental Care
          </span>

          <h2 className="text-3xl lg:text-4xl font-medium leading-tight text-gray-900 tracking-tight">
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

          <p className="type-lead text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl">
            Our team of dental specialists takes the time to listen, explain every step clearly, and recommend only what is best for your smile.
          </p>
        </div>

        {/* Right Column: Practice Standards Box */}
        <div className="lg:col-span-5 rounded-2xl bg-[#F0F7FF] border border-[#DBEAFE] p-6 space-y-4 shadow-xs">
          <div className="text-xs font-bold text-[#0B3B8B] uppercase tracking-wider">
            Our Care Standard
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-800 font-medium">
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

          <div className="pt-3 border-t border-[#DBEAFE]">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#0B3B8B] hover:text-[#134FB0] group cursor-pointer"
            >
              <span>Meet All Our Doctors</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Portrait Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredDoctors.map((doc) => (
          <div
            key={doc.id}
            className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-gray-900 text-white min-h-[440px] p-6 shadow-md select-none"
          >
            {/* Photographic Canvas */}
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
  );
}
