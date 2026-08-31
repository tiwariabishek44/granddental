"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, ShieldCheck, GraduationCap } from "lucide-react";
import { doctorsData } from "@/data/doctors";

export default function DoctorsSection() {
  const featuredDoctors = doctorsData.slice(0, 4);

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-gray-100 space-y-8 sm:space-y-10">
      {/* Asymmetric Header with Right-Side Credentials Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column (Span 7) */}
        <div className="lg:col-span-7 space-y-2">
          <span className="type-eyebrow">
            Clinical Faculty
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-gray-900 tracking-tight">
            Led by Experienced{" "}
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
          </h2>

          <p className="type-lead">
            Our multidisciplinary faculty unites dental surgeons, orthodontists, and endodontists who take the time to explain your options clearly without unnecessary procedures.
          </p>
        </div>

        {/* Right Column: Faculty Standards Box (Span 5) */}
        <div className="lg:col-span-5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] p-5 sm:p-6 space-y-3.5 shadow-2xs">
          <div className="text-sm font-semibold text-[#74267A] uppercase tracking-wider">
            Clinical Standards &amp; Credentials
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-gray-800 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#74267A] shrink-0" />
              <span>100% NMC Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#74267A] shrink-0" />
              <span>BDS &amp; MDS Surgeons</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#74267A] shrink-0" />
              <span>10+ Yrs Clinical Practice</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#74267A]" />
              <span>Painless Protocols</span>
            </div>
          </div>
          <div className="pt-2.5 border-t border-[#F3D5F9]">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#5C205E] hover:text-[#74267A] group cursor-pointer"
            >
              <span>Explore All Specialist Profiles</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Tall Full-Bleed Editorial Portrait Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {featuredDoctors.map((doc) => (
          <Link
            key={doc.id}
            href={`/doctors/${doc.id}`}
            className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-gray-900 text-white min-h-[420px] sm:min-h-[440px] p-5 sm:p-6 shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer"
          >
            {/* Background Photographic Canvas with Smooth Zoom */}
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
            <div className="relative z-10 space-y-2.5">
              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ED91FB]">
                  {doc.role}
                </span>
                <h3 className="text-lg sm:text-xl font-medium text-white transition-colors group-hover:text-[#ED91FB] leading-snug">
                  {doc.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 font-normal mt-1 line-clamp-1">
                  {doc.title} &middot; {doc.experience}
                </p>
              </div>

              <div className="pt-2.5 border-t border-white/20 flex items-center justify-between text-sm font-semibold text-white">
                <span>View Profile</span>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs transition-all duration-300 group-hover:bg-[#5C205E] group-hover:text-white">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
