"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Star,
  Clock,
  ChevronRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Doctor } from "@/data/doctors";

export default function DoctorDetailMobile({ doctor }: { doctor: Doctor }) {
  return (
    <div className="space-y-6 pb-12 sm:hidden font-sans">
      {/* 1. BREADCRUMBS & TOP PROFILE HEADER */}
      <section className="px-4 pt-4 space-y-3">
        <nav className="flex items-center gap-1.5 type-meta">
          <Link href="/" className="hover:text-[#0B3B8B] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/doctors" className="hover:text-[#0B3B8B] transition-colors">
            Doctors
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0B3B8B] font-bold truncate max-w-[140px]">{doctor.name}</span>
        </nav>

        <div className="space-y-2">
          <span className="type-eyebrow px-3 py-1 rounded-full bg-[#F0F7FF] border border-[#DBEAFE] inline-block text-[#0B3B8B]">
            {doctor.role}
          </span>
          <h1 className="text-3xl font-light text-gray-900 leading-tight tracking-tight">
            {doctor.name},{" "}
            <span
              className="font-medium text-transparent"
              style={{
                background: "linear-gradient(246.94deg, #388EE8 -28.81%, #0B3B8B 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              {doctor.title}
            </span>
          </h1>
          <p className="type-body font-normal text-gray-700">
            {doctor.experience} Practice &middot; Specialized Faculty at Swoyambhu Clinic
          </p>
        </div>
      </section>

      {/* 2. PORTRAIT & CLINIC SCHEDULE */}
      <section className="px-4 space-y-3.5">
        <div className="rounded-3xl border border-gray-200 bg-white p-3.5 shadow-sm space-y-3">
          <div className="relative h-[340px] w-full overflow-hidden rounded-2xl bg-gray-900">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              priority
              className="object-cover object-top"
            />
            <div className="absolute top-3 left-3">
              <span className="type-meta font-bold px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-gray-900 shadow-sm">
                {doctor.experience} Experience
              </span>
            </div>
            <div className="absolute top-3 right-3">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-amber-500 type-meta font-bold shadow-sm">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-gray-900">{doctor.rating}</span>
                <span className="text-gray-500 font-normal">({doctor.reviewsCount})</span>
              </div>
            </div>
          </div>

          {/* Schedule Info */}
          <div className="p-4 rounded-2xl bg-[#F0F7FF] border border-[#DBEAFE] space-y-1.5">
            <div className="type-eyebrow flex items-center gap-1.5 text-[#0B3B8B]">
              <Clock className="w-4 h-4 text-[#0B3B8B]" />
              <span>Clinical Schedule</span>
            </div>
            <div className="type-card-title text-base">{doctor.schedule}</div>
            <div className="type-meta text-gray-600">On-site appointments &amp; emergency consultations in Swoyambhu.</div>
          </div>
        </div>

        {/* Primary Booking Action */}
        <div className="flex flex-col gap-2.5">
          <Link
            href={`/appointment?doctor=${doctor.id}`}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#0B3B8B] active:bg-[#134FB0] text-white type-ui-control font-bold shadow-md transition-colors min-h-[48px]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Visit with {doctor.name.split(" ")[1]}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:01-4950352"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-gray-200 text-gray-800 type-ui-control text-xs sm:text-sm font-semibold active:bg-gray-50 transition-colors min-h-[44px]"
          >
            <Phone className="w-4 h-4 text-[#0B3B8B]" />
            <span>Direct Reception: 01-4950352</span>
          </a>
        </div>
      </section>

      {/* 3. BIOGRAPHY & PHILOSOPHY */}
      <section className="px-4 space-y-2.5">
        <h2 className="type-section-title">About {doctor.name}</h2>
        <p className="type-body font-normal leading-relaxed text-gray-700">
          {doctor.longBio}
        </p>
      </section>

      {/* 4. EDUCATION & BOARD ACCREDITATIONS */}
      <section className="px-4">
        <div className="bg-white rounded-3xl p-5 border border-gray-200 shadow-2xs space-y-3.5">
          <div className="type-eyebrow flex items-center gap-2 text-[#0B3B8B]">
            <GraduationCap className="w-4 h-4 text-[#0B3B8B]" />
            <span>Education &amp; Fellowships</span>
          </div>
          <div className="type-card-title text-base">
            {doctor.education}
          </div>

          <div className="pt-3 border-t border-gray-100 space-y-2.5">
            <div className="type-eyebrow text-gray-500 block">Board Certifications</div>
            <ul className="space-y-2 type-body text-gray-800 font-normal">
              {doctor.certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. KEY PROCEDURES */}
      <section className="px-4 space-y-3">
        <h3 className="type-section-title">Key Procedures &amp; Focus</h3>
        <div className="space-y-3">
          {doctor.keyProcedures.map((proc) => (
            <div
              key={proc.name}
              className="p-4 rounded-2xl border border-gray-200 bg-white space-y-1 shadow-2xs"
            >
              <div className="type-card-title text-base">{proc.name}</div>
              <p className="type-body font-normal text-gray-700 leading-relaxed">{proc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SPECIALTIES PILLS */}
      <section className="px-4 space-y-2.5">
        <div className="type-eyebrow text-gray-500 block">Areas of Expertise</div>
        <div className="flex flex-wrap gap-2">
          {doctor.specialties.map((spec) => (
            <span
              key={spec}
              className="px-3 py-1.5 rounded-xl type-eyebrow bg-[#F0F7FF] border border-[#DBEAFE] text-[#0B3B8B]"
            >
              {spec}
            </span>
          ))}
        </div>
      </section>

      {/* 7. RETURN TO DIRECTORY LINK */}
      <section className="px-4">
        <div className="rounded-3xl border border-gray-200 bg-[#F0F7FF] p-5 space-y-3">
          <div>
            <h4 className="type-card-title text-base">Looking for other specialists?</h4>
            <p className="type-meta text-gray-600 mt-0.5">Explore our entire NMC-certified multidisciplinary team.</p>
          </div>
          <Link
            href="/doctors"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-[#DBEAFE] text-[#0B3B8B] type-ui-control font-bold shadow-2xs active:bg-gray-50 min-h-[44px]"
          >
            <span>View All Doctors</span>
            <ArrowRight className="w-4 h-4 text-[#0B3B8B]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
