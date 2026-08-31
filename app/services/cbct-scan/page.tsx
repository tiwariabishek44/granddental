"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Calendar,
  ChevronRight,
  Stethoscope,
  Zap,
  Activity,
  Scan,
  Layers,
  ChartArea,
} from "lucide-react";
import { servicesData } from "@/data/services";
import LocationBookingSection from "@/components/LocationBookingSection";
import { ServiceDetailMobile } from "@/app/m/services";

export default function CBCTScanPage() {
  const service = servicesData.find((s) => s.id === "cbct-scan")!;

  const whyUsCards = [
    {
      title: "Sub-Millimeter 3D Resolution",
      desc: "Ultra-precise 0.075mm voxel volumetric slice reconstruction mapping teeth, nerves, and bone.",
      tint: "#F8EFF8",
      icon: "🔬",
    },
    {
      title: "75% Lower Radiation",
      desc: "Green CBCT pulsed sensor technology ensuring minimal radiation exposure safe for all ages.",
      tint: "#EEEEFF",
      icon: "⚡",
    },
    {
      title: "Rapid 14-Second Scan",
      desc: "Open-air standing scanner completing panoramic 3D acquisition in under 14 seconds with zero contact.",
      tint: "#F3D5F9",
      icon: "✨",
    },
    {
      title: "Instant Cloud Access",
      desc: "DICOM files immediately available to referring dentists and oral surgeons worldwide.",
      tint: "#FDF0F2",
      icon: "🌐",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-[#F3D5F9] selection:text-[#5C205E] font-sans">
      {/* MOBILE SERVICE DETAIL VIEW (sm:hidden) */}
      <div className="block sm:hidden">
        <ServiceDetailMobile service={service} />
      </div>

      {/* DESKTOP SERVICE DETAIL VIEW (hidden sm:block) */}
      <div className="hidden sm:block pb-24">
        {/* 1. HERO BANNER */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 mb-16">
          <div
            className="rounded-3xl border border-indigo-100 p-6 sm:p-10 lg:p-12 shadow-sm space-y-6"
            style={{
              background: "radial-gradient(100% 286.18% at 100% 100%, #EEEEFF 0%, #F5F3F6 100%)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="type-eyebrow text-indigo-700">
                Diagnostic Radiology &middot; High-Definition 3D Imaging
              </span>

              <h1 className="type-display">
                Ultra-Low Dose 3D CBCT{" "}
                <span
                  className="font-normal text-transparent"
                  style={{
                    background: "linear-gradient(246.94deg, #4338CA -28.81%, #74267A 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Volumetric Scan.
                </span>
              </h1>

              <p className="type-lead">
                Sub-millimeter anatomical precision in 14 seconds. Ideal for dental implants, wisdom teeth surgery, root canals, and airway assessments in Kathmandu.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link href="/appointment" className="group btn-pill-primary">
                  <span>Book 3D Imaging Scan</span>
                  <span className="flex items-center justify-center rounded-full bg-white p-1.5 transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 text-[#5C205E]" />
                  </span>
                </Link>

                <Link href="/contact" className="btn-pill-outline">
                  <ChartArea className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Call 01-4950352</span>
                </Link>
              </div>

              {/* Trust highlights */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600 border-t border-indigo-100">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  <span>85% Reduced Radiation Protocol</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-indigo-600" />
                  <span>14 Seconds Scan Time</span>
                </span>
              </div>
            </div>

            {/* Right: Crisp Bright Image Card */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-md border-2 border-white bg-white">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>



      {/* 3. SECTION 02: "WHY CHOOSE US?" PASTEL BENTO GRID */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-16 space-y-10">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="type-eyebrow">
              Why Us?
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-400 font-mono">(02)</span>
          </div>
          <hr className="border-gray-200" />
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-gray-900">
              Why Choose Grand Dental Clinic for{" "}
              <span
                style={{
                  background:
                    "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                3D CBCT Scans
              </span>
              ?
            </h2>
            <p className="type-lead">
              High Resolution. 75% Lower Radiation. 14-Second Rapid Scan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsCards.map((c) => (
            <div
              key={c.title}
              className="p-6 sm:p-7 rounded-3xl border border-black/5 shadow-2xs flex flex-col justify-between space-y-4 text-center items-center hover:shadow-md transition-all duration-300"
              style={{ backgroundColor: c.tint }}
            >
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-sm border border-black/5">
                {c.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="type-card-title">{c.title}</h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CLINICAL OVERVIEW & SPECIALIST */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-72 sm:h-80 w-full rounded-3xl overflow-hidden bg-gray-100 border border-black/5 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop"
                alt="CBCT Diagnostic Equipment"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="p-6 rounded-3xl bg-[#EEEEFF] border border-indigo-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-indigo-700 text-white flex items-center justify-center font-bold text-lg shadow-2xs">
                  GD
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium">Diagnostic Director</div>
                  <div className="text-base font-bold text-gray-900">{service.leadDoctorName}</div>
                  <span className="text-xs sm:text-sm font-semibold text-indigo-700">{service.leadDoctorRole}</span>
                </div>
              </div>
              <Link
                href={`/doctors/${service.leadDoctorId}`}
                className="btn-pill-outline text-sm font-semibold"
              >
                <span>View Profile</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h3 className="type-section-title">Treatment Roadmap &amp; Timeline</h3>
              <p className="type-body leading-relaxed">{service.longDesc}</p>
            </div>

            <div className="space-y-3.5 bg-gray-50/70 p-6 sm:p-8 rounded-3xl border border-gray-200">
              {service.procedureSteps.map((step, idx) => (
                <div key={step.title} className="flex items-start gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-gray-100 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-indigo-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </div>
                  <div className="space-y-1">
                    <div className="text-base font-bold text-gray-900">{step.title}</div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA BOOKING & CLINIC LOGISTICS SECTION */}
      <LocationBookingSection />
      </div>
    </main>
  );
}
