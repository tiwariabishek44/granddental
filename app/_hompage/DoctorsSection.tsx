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
                background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
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
        <div className="lg:col-span-5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] p-6 space-y-4 shadow-xs">
          <div className="text-xs font-bold text-[#74267A] uppercase tracking-wider">
            Our Care Standard
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-800 font-medium">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#74267A] shrink-0" />
              <span>Experienced Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#74267A] shrink-0" />
              <span>Painless Procedures</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#74267A] shrink-0" />
              <span>Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#74267A] shrink-0" />
              <span>Gentle &amp; Patient-First</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#F3D5F9]">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#5C205E] hover:text-[#74267A] group cursor-pointer"
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
          <Link
            key={doc.id}
            href={`/doctors/${doc.id}`}
            className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-gray-900 text-white min-h-[440px] p-6 shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
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
            <div className="relative z-10 space-y-3">
              <div>

                <h3 className="text-xl font-medium text-white transition-colors group-hover:text-[#ED91FB] leading-snug">
                  {doc.name}
                </h3>
                <p className="text-sm text-gray-300 font-normal mt-0.5 line-clamp-1">
                  {doc.experience}
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