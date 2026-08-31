import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ChevronRight,
  Phone,
  Calendar,
} from "lucide-react";
import { servicesData, Service } from "@/data/services";
import LocationBookingSection from "@/components/LocationBookingSection";
import { ServiceDetailMobile } from "@/app/m/services";

export function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug || svc.id,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const service = servicesData.find(
    (s) => s.slug === resolvedParams.slug || s.id === resolvedParams.slug
  );

  if (!service) {
    notFound();
  }

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
          className="rounded-3xl border border-gray-200/80 p-6 sm:p-10 lg:p-12 shadow-sm space-y-6"
          style={{
            background: "radial-gradient(100% 286.18% at 100% 100%, #FCF5FE 0%, #F5F3F6 100%)",
          }}
        >
          {/* Breadcrumb Path */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500">
            <Link href="/" className="hover:text-[#74267A] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-[#74267A] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#74267A] font-bold">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="type-eyebrow">
                {service.categoryLabel} &middot; {service.subtitle}
              </span>

              <h1 className="type-display">
                {service.title.split(" (")[0]}{" "}
                <span
                  className="font-normal text-transparent"
                  style={{
                    background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  at Grand Dental Clinic.
                </span>
              </h1>

              <p className="type-lead">
                {service.shortDesc}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link href="/appointment" className="group btn-pill-primary">
                  <span>Book Consultation</span>
                  <span className="flex items-center justify-center rounded-full bg-white p-1.5 transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 text-[#5C205E]" />
                  </span>
                </Link>

                <Link href="/contact" className="btn-pill-outline">
                  <Phone className="w-3.5 h-3.5 text-[#74267A]" />
                  <span>Call 01-4950352</span>
                </Link>
              </div>

              {/* Trust highlights */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-700 border-t border-gray-200/80">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{service.painLevel}</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#74267A]" />
                  <span>{service.duration}</span>
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

      {/* 2. CLINICAL OVERVIEW & SPECIALIST */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Benefits & Candidate Checklist */}
          <div className="lg:col-span-5 space-y-6">
            {/* Key Benefits Bento */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FCF5FE] border border-[#EECFF4] space-y-4">
              <span className="type-eyebrow">
                Key Highlights
              </span>
              <h3 className="type-card-title">
                Why Choose This Treatment
              </h3>
              <div className="space-y-2.5">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-800 font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Candidate Checklist */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-2xs space-y-4">
              <span className="type-eyebrow text-gray-500">
                Recommended For
              </span>
              <h3 className="type-sub-title">
                Ideal Patient Cases
              </h3>
              <div className="space-y-2.5">
                {service.candidateFor.map((c) => (
                  <div key={c} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#74267A] shrink-0 mt-2.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Assigned Specialist Card */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#5C205E] text-white flex items-center justify-center font-bold text-base shadow-2xs">
                  GD
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium">Assigned Specialist</div>
                  <div className="text-base font-bold text-gray-900">{service.leadDoctorName}</div>
                  <span className="text-xs sm:text-sm font-semibold text-[#74267A]">{service.leadDoctorRole}</span>
                </div>
              </div>
              <Link
                href="/doctors"
                className="btn-pill-outline text-sm font-semibold"
              >
                <span>View Team</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Procedure Steps & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="type-eyebrow">
                Clinical Workflow
              </span>
              <h2 className="type-section-title">
                Treatment Roadmap &amp; Procedure
              </h2>
              <p className="type-body leading-relaxed">
                {service.longDesc}
              </p>
            </div>

            <div className="space-y-3.5 bg-gray-50/80 p-6 sm:p-8 rounded-3xl border border-gray-200">
              {service.procedureSteps.map((step, idx) => (
                <div key={step.title} className="flex items-start gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-gray-100 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-[#5C205E] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </div>
                  <div className="space-y-1">
                    <div className="text-base font-bold text-gray-900">{step.title}</div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick In-Clinic Booking Prompt */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FCF5FE] to-[#F9EBFC] border border-[#EECFF4] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="type-sub-title">Ready to book this treatment?</h4>
                <p className="text-sm sm:text-base text-gray-700 mt-1">Walk-ins welcome or schedule an unhurried consultation.</p>
              </div>
              <Link href="/appointment" className="btn-pill-primary shrink-0">
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA BOOKING & CLINIC LOGISTICS SECTION */}
      <LocationBookingSection />
      </div>
    </main>
  );
}
