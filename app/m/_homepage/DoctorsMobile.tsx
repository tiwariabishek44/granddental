"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, ShieldCheck, GraduationCap } from "lucide-react";
import { doctorsData } from "@/data/doctors";

export default function DoctorsMobile() {
  const featuredDoctors = doctorsData.slice(0, 4);

  return (
    <section className="py-10 px-4 border-b border-gray-100 sm:hidden space-y-6">
      {/* Header & Faculty Standards (Direct Parity with Desktop DoctorsSection) */}
      <div className="space-y-4">
        <div className="space-y-2">
          <span className="type-eyebrow">
            Clinical Faculty
          </span>

          <h2 className="type-section-title">
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

          <p className="type-body font-normal">
            Our multidisciplinary faculty unites dental surgeons, orthodontists, and endodontists who take the time to explain your options clearly without unnecessary procedures.
          </p>
        </div>

        {/* Faculty Standards Box (Adopted from Desktop) */}
        <div className="rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] p-4 sm:p-5 space-y-3 shadow-2xs">
          <div className="type-eyebrow text-[#74267A] block">
            Clinical Standards &amp; Credentials
          </div>
          <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm text-gray-800 font-semibold">
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
              <span>10+ Yrs Practice</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#74267A] shrink-0 ml-1 mr-0.5" />
              <span>Painless Protocols</span>
            </div>
          </div>
          <div className="pt-2 border-t border-[#F3D5F9]">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-1.5 type-ui-control font-semibold text-[#5C205E] active:text-[#74267A] group cursor-pointer"
            >
              <span>Explore All Specialist Profiles</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Tall Full-Bleed Editorial Portrait Cards (Horizontal Snap Carousel) */}
      <div className="flex gap-4 overflow-x-auto pb-3 -mr-4 pr-4 no-scrollbar snap-x snap-mandatory">
        {featuredDoctors.map((doc) => (
          <Link
            key={doc.id}
            href={`/doctors/${doc.id}`}
            className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-gray-900 text-white min-h-[380px] w-[270px] shrink-0 snap-start p-5 shadow-md active:scale-[0.99] transition-transform cursor-pointer"
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

                <h3 className="type-card-title text-white">
                  {doc.name}
                </h3>
                <p className="type-meta text-gray-200 mt-0.5 line-clamp-1">
                  {doc.title} &middot; {doc.experience}
                </p>
              </div>

              <div className="pt-2.5 border-t border-white/20 flex items-center justify-between text-xs sm:text-sm font-semibold text-white">
                <span>View Profile</span>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
