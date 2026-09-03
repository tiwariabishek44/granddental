"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ChevronRight,
  Phone,
  Calendar,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Service, servicesData } from "@/data/services";

export default function ServiceDetailMobile({ service }: { service: Service }) {
  const relatedServices = servicesData
    .filter((s) => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

  return (
    <div className="space-y-6 pb-12 sm:hidden font-sans">
      {/* 1. BREADCRUMBS & SECTION HEADER */}
      <section className="px-4 pt-4 space-y-3">
        <nav className="flex items-center gap-1.5 type-meta">
          <Link href="/" className="hover:text-[#0B3B8B] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/services" className="hover:text-[#0B3B8B] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0B3B8B] font-bold truncate max-w-[140px]">{service.title}</span>
        </nav>

        <div className="space-y-2">
          <span className="type-eyebrow px-3 py-1 rounded-full bg-[#F0F7FF] border border-[#DBEAFE] inline-block text-[#0B3B8B]">
            {service.categoryLabel} &middot; {service.subtitle}
          </span>
          <h1 className="text-3xl font-light text-gray-900 leading-tight tracking-tight">
            {service.title.split(" (")[0]}{" "}
            <span
              className="font-medium text-transparent block"
              style={{
                background: "linear-gradient(246.94deg, #388EE8 -28.81%, #0B3B8B 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              at Grand Dental Clinic
            </span>
          </h1>
          <p className="type-body font-normal text-gray-700">
            {service.shortDesc}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5 pt-1">
          <Link
            href="/appointment"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-[#0B3B8B] active:bg-[#134FB0] text-white type-ui-control font-semibold shadow-md transition-colors min-h-[48px]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Treatment Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:9861161359"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white border border-gray-200 text-gray-800 type-ui-control text-xs sm:text-sm font-semibold active:bg-gray-50 transition-colors min-h-[44px]"
          >
            <Phone className="w-4 h-4 text-[#0B3B8B]" />
            <span>Call 9861161359</span>
          </a>
        </div>
      </section>

      {/* 2. IMAGE & CLINICAL SPECS MATRIX */}
      <section className="px-4 space-y-3.5">
        <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-gray-900">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Quick Specs Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DBEAFE] space-y-1">
            <div className="type-eyebrow flex items-center gap-1.5 text-emerald-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Comfort Level</span>
            </div>
            <div className="type-card-title text-sm sm:text-base text-gray-900">{service.painLevel}</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DBEAFE] space-y-1">
            <div className="type-eyebrow flex items-center gap-1.5 text-[#0B3B8B]">
              <Clock className="w-4 h-4 text-[#0B3B8B]" />
              <span>Typical Duration</span>
            </div>
            <div className="type-card-title text-sm sm:text-base text-gray-900">{service.duration}</div>
          </div>
        </div>
      </section>

      {/* 3. TREATMENT OVERVIEW */}
      <section className="px-4 space-y-2.5">
        <h2 className="type-section-title">Overview &amp; Clinical Approach</h2>
        <p className="type-body font-normal leading-relaxed text-gray-700">
          {service.longDesc}
        </p>
      </section>

      {/* 4. PROCEDURE STEPS */}
      <section className="px-4 space-y-3">
        <h3 className="type-section-title">Step-by-Step Procedure</h3>
        <div className="space-y-3">
          {service.procedureSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-gray-200 bg-white space-y-1.5 shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0B3B8B] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="type-card-title text-base">{step.title}</span>
              </div>
              <p className="type-body font-normal text-gray-700 leading-relaxed pl-8">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. KEY BENEFITS */}
      <section className="px-4">
        <div className="bg-[#F0F7FF] rounded-3xl p-5 border border-[#DBEAFE] space-y-3">
          <h3 className="type-card-title text-[#0B3B8B]">Why Choose Grand Dental Clinic?</h3>
          <ul className="space-y-2.5">
            {service.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2.5 type-body text-gray-800 font-normal">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. RELATED TREATMENTS */}
      {relatedServices.length > 0 && (
        <section className="px-4 space-y-3">
          <h3 className="type-section-title">Related Treatments</h3>
          <div className="space-y-2.5">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                href={`/services/${rel.slug || rel.id}`}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-200 active:bg-[#F0F7FF] transition-colors shadow-2xs"
              >
                <div>
                  <div className="type-card-title text-sm sm:text-base">{rel.title}</div>
                  <div className="type-meta text-gray-500">{rel.subtitle}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#0B3B8B]" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 7. BOTTOM DIRECT CTA */}
      <section className="px-4">
        <div className="rounded-3xl bg-[#0B192C] text-white p-6 space-y-4 shadow-lg relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-[#388EE8]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-2">
            <span className="type-eyebrow px-3 py-1 rounded-full bg-white/20 text-white inline-block">
              Swoyambhu, Kathmandu
            </span>
            <h3 className="type-card-title text-white text-xl font-bold leading-tight">
              Book Your Consultation for {service.title.split(" (")[0]}
            </h3>
            <p className="type-body text-white/95 font-normal leading-relaxed">
              Experience transparent, painless dentistry with zero hidden fees and unhurried clinical care.
            </p>
          </div>

          <div className="relative z-10 pt-1 flex flex-col gap-2.5">
            <Link
              href="/appointment"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-white text-[#0B3B8B] type-ui-control font-bold shadow-sm active:bg-gray-100 transition-colors min-h-[48px]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/9779861161359"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white/15 border border-white/25 text-white type-ui-control text-xs sm:text-sm font-semibold active:bg-white/25 transition-colors min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
