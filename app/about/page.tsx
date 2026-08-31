"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";
import { servicesData } from "@/data/services";

import chairImg from "@/assets/chair.jpeg";
import receptionImg from "@/assets/reception.jpeg";
import frontViewImg from "@/assets/front view.jpeg";
import dentalToolsImg from "@/assets/Dental_tools_on_tray.jpeg";
import { AboutMobile } from "@/app/m/about";

export default function AboutPage() {
  // 3 Core Pillars Active Tab State
  const [activePillar, setActivePillar] = useState<"painless" | "hygiene" | "transparency">("painless");

  // Captive 3D Service Carousel Active Index
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  // Video Player State & Ref
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleNextService = () => {
    setActiveServiceIndex((prev) => (prev + 1) % servicesData.length);
  };

  const handlePrevService = () => {
    setActiveServiceIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  const pillarsData: Record<
    "painless" | "hygiene" | "transparency",
    {
      id: string;
      tabTitle: string;
      subtitle: string;
      image: StaticImageData | string;
      desc: string;
      points: string[];
    }
  > = {
    painless: {
      id: "painless",
      tabTitle: "1. Painless & Gentle Care",
      subtitle: "Comfort-First Dental Treatment",
      image: chairImg,
      desc: "We understand that dental anxiety is real. At Grand Dental, our treatments are designed around gentle local anesthesia techniques, modern ultrasonic scaling, and unhurried appointments so you feel completely at ease throughout your visit.",
      points: [
        "Gentle, localized anesthesia for pain-free procedures",
        "Ultrasonic scaling that is gentle on teeth and gums",
        "Clear step-by-step explanations so there are zero surprises",
      ],
    },
    hygiene: {
      id: "hygiene",
      tabTitle: "2. Strict Sterilization",
      subtitle: "Uncompromising Patient Safety",
      image: dentalToolsImg,
      desc: "Patient safety is our highest priority. Every instrument used at our clinic undergoes rigorous autoclave sterilization, and all treatment surfaces are thoroughly disinfected between patients to maintain medical-grade clinical hygiene.",
      points: [
        "100% autoclave sterilized instruments for every patient",
        "Disposable barriers and single-use protective equipment",
        "Clean, well-ventilated operatories with natural daylight",
      ],
    },
    transparency: {
      id: "transparency",
      tabTitle: "3. Honest Guidance",
      subtitle: "Natural Tooth Preservation",
      image: frontViewImg,
      desc: "Our primary mission is to protect and preserve your natural teeth for a lifetime. We provide honest clinical assessments, discuss all viable options with transparent pricing, and never recommend unnecessary treatments.",
      points: [
        "Focus on saving natural teeth whenever clinically possible",
        "Transparent, upfront treatment costs with no hidden fees",
        "Detailed oral hygiene advice for long-term home care",
      ],
    },
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-[#F3D5F9] selection:text-[#5C205E] font-sans">
      {/* DEDICATED MOBILE ABOUT PAGE (sm:hidden) */}
      <div className="block sm:hidden">
        <AboutMobile />
      </div>

      {/* DESKTOP ABOUT PAGE (hidden sm:block) */}
      <div className="hidden sm:block pb-24">
        {/* 1. HERO SECTION: THE CLINIC MANIFESTO */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 mb-16">
          <div
            className="rounded-3xl border border-gray-200/80 p-6 sm:p-10 lg:p-12 shadow-sm space-y-10"
            style={{
              background: "radial-gradient(100% 286.18% at 100% 100%, #FCF5FE 0%, #F5F3F6 100%)",
            }}
          >
            {/* Top Narrative Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F7E6FA] text-[#74267A] text-xs font-semibold uppercase tracking-wider shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#922F9C]" />
                  <span>Our Heritage &amp; Clinical Manifesto</span>
                </div>

                <h1 className="type-display">
                  Where Advanced Clinical Care Meets{" "}
                  <span
                    className="font-normal text-transparent"
                    style={{
                      background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    Real Human Warmth.
                  </span>
                </h1>

                <div className="space-y-3.5 text-gray-700 font-light leading-relaxed text-sm sm:text-base max-w-3xl">
                  <p>
                    Grand Dental Clinic was founded in Swoyambhu, Kathmandu with a single unwavering mission: to dismantle dental anxiety through painless, evidence-based dentistry and genuine transparency. Too often, patients delay dental visits out of fear or uncertain costs. We built our practice to change that perception completely.
                  </p>
                  <p className="text-gray-600">
                    From routine oral prophylaxis to complex surgical implantology and aesthetic smile makeovers, our NMC-certified dental surgeons combine digital 3D precision imaging with conservative tooth-preservation principles. Every diagnosis is explained with visual evidence, every treatment plan is co-created with you, and every procedure is delivered in a hospital-grade sterile environment.
                  </p>
                </div>

                {/* 4 Core Pillars Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white/80 border border-[#F7E6FA] space-y-1">
                    <div className="font-semibold text-sm sm:text-base text-[#5C205E] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Zero-Anxiety Care</span>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm font-normal">Gentle micro-anesthesia &amp; unhurried pace</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/80 border border-[#F7E6FA] space-y-1">
                    <div className="font-semibold text-sm sm:text-base text-[#5C205E] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Class-B Sterility</span>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm font-normal">100% autoclave hygiene guarantee</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/80 border border-[#F7E6FA] space-y-1">
                    <div className="font-semibold text-sm sm:text-base text-[#5C205E] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Digital Precision</span>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm font-normal">Low-radiation 3D imaging &amp; scans</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/80 border border-[#F7E6FA] space-y-1">
                    <div className="font-semibold text-sm sm:text-base text-[#5C205E] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Honest Pricing</span>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm font-normal">Zero hidden fees or forced treatments</p>
                  </div>
                </div>
              </div>

              {/* Action Trigger Block */}
              <div className="lg:col-span-4 flex flex-col gap-3.5 justify-center lg:items-end w-full lg:pt-8">
                <div className="w-full bg-white rounded-3xl p-6 border border-gray-200/80 shadow-2xs space-y-4">
                  <div className="space-y-1">
                    <span className="type-eyebrow">
                      Visit Our Clinic
                    </span>
                    <h4 className="text-lg font-semibold text-gray-900 leading-snug">
                      Schedule an Initial Consultation
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 font-normal">
                      Direct access to experienced NMC dental specialists with dedicated on-site parking in Swoyambhu.
                    </p>
                  </div>

                  <Link href="/appointment" className="group btn-pill-primary w-full text-center justify-between">
                    <span>Book Appointment</span>
                    <span className="flex items-center justify-center rounded-full bg-white p-1.5 transition-transform duration-200 group-hover:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5 text-[#5C205E]" />
                    </span>
                  </Link>

                  <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm text-gray-700">
                    <span className="font-medium">Direct Telephone:</span>
                    <a href="tel:014950352" className="font-semibold text-[#5C205E] hover:underline">
                      01-4950352
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Asymmetric 3-Piece Visual Tapestry */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Tapestry 1: Gentle Patient Care / Welcoming Reception (Span 6) */}
              <div className="md:col-span-6 relative h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-md border-2 border-white bg-gray-900">
                <Image
                  src={receptionImg}
                  alt="Welcoming reception and patient lounge at Grand Dental Clinic"
                  fill
                  priority
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#5C205E] text-white uppercase tracking-wider shadow-sm">
                    The Patient Experience
                  </div>
                  <h3 className="type-card-title text-white leading-snug">Unhurried, Zero-Fear Consultations</h3>
                  <p className="text-sm sm:text-base text-white/95 leading-relaxed max-w-lg font-normal">
                    We take time to listen, review high-resolution digital scans with you on chairside monitors, and explain every viable clinical option with transparent pricing before initiating treatment.
                  </p>
                </div>
              </div>

              {/* Tapestry 2: Clean Operatory (Span 3) */}
              <div className="md:col-span-3 relative h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-md border-2 border-white bg-gray-900">
                <Image
                  src={chairImg}
                  alt="Hospital-grade sterilized dental operatory suite at Grand Dental"
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                  <div className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-emerald-600 text-white uppercase tracking-wider shadow-sm">
                    Hygiene Standard
                  </div>
                  <h3 className="type-sub-title text-white leading-snug">Hospital-Grade Sterilization</h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                    Class-B multi-stage autoclave sterilization &amp; single-use barrier controls for every single patient.
                  </p>
                </div>
              </div>

              {/* Tapestry 3: Certified Doctors (Span 3) */}
              <div className="md:col-span-3 relative min-h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-md border-2 border-white bg-white p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FCF5FE] border border-[#EECFF4] flex items-center justify-center text-[#74267A] shadow-2xs">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="type-sub-title leading-tight">NMC-Certified Doctors</h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium mt-0.5">Specialist Dental Surgeons</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pt-1 font-normal">
                    Continuous clinical training in endodontics, prosthodontics, periodontics, and aesthetic smile rehabilitation.
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#5C205E]">
                  <span>Swoyambhu, Kathmandu</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            </div>

            {/* Integrated Live Trust Matrix Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200/80">
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-1 text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#5C205E]">10,000+</div>
                <div className="text-sm sm:text-base text-gray-800 font-semibold">Happy Patients Treated</div>
                <div className="text-xs sm:text-sm text-gray-500 font-normal">Kathmandu Valley &amp; Beyond</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-1 text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#5C205E]">100%</div>
                <div className="text-sm sm:text-base text-gray-800 font-semibold">Class-B Autoclave Sterile</div>
                <div className="text-xs sm:text-sm text-gray-500 font-normal">Zero Infection Guarantee</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-1 text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#5C205E]">NMC Registered</div>
                <div className="text-sm sm:text-base text-gray-800 font-semibold">Certified Specialists</div>
                <div className="text-xs sm:text-sm text-gray-500 font-normal">Conservative Preservation Focus</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs space-y-1 text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#5C205E]">Swoyambhu</div>
                <div className="text-sm sm:text-base text-gray-800 font-semibold">Buddha Park Location</div>
                <div className="text-xs sm:text-sm text-gray-500 font-normal">Free On-Site Car &amp; Bike Parking</div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. SECTION 02: 3 CORE PILLARS OF GRAND DENTAL CARE */}
        {/* ========================================================================= */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-16 overflow-hidden space-y-6">
          <div>
            <span className="type-eyebrow">
              Our Core Philosophy
            </span>
            <h2 className="type-section-title mt-2">
              The Three Pillars of{" "}
              <span
                className="font-medium text-transparent"
                style={{
                  background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                }}
              >
                Grand Dental Care
              </span>
            </h2>
          </div>

          {/* Interactive Pillar Selector Tabs */}
          <div className="flex flex-wrap gap-3">
            {(["painless", "hygiene", "transparency"] as const).map((key) => {
              const isActive = activePillar === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActivePillar(key)}
                  className={`px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 cursor-pointer ${isActive
                    ? "bg-[#5C205E] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {pillarsData[key].tabTitle}
                </button>
              );
            })}
          </div>

          {/* 2-Column Pillar Showcase Card */}
          {(() => {
            const pillar = pillarsData[activePillar];
            return (
              <div className="grid items-center gap-8 lg:grid-cols-12 bg-gray-50/90 p-6 sm:p-10 rounded-3xl border border-gray-200">
                {/* Pillar Image */}
                <div className="lg:col-span-5 relative h-[280px] sm:h-[340px] w-full rounded-2xl overflow-hidden shadow-md bg-gray-100 border border-black/5">
                  <Image
                    src={pillar.image}
                    alt={pillar.subtitle}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Pillar Content */}
                <div className="lg:col-span-7 space-y-4">
                  <span className="inline-block px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#74267A] bg-[#FCF5FE] border border-[#EECFF4] uppercase tracking-wider">
                    {pillar.subtitle}
                  </span>

                  <h3 className="type-section-title">
                    {pillar.tabTitle.replace(/^\d+\.\s*/, "")}
                  </h3>

                  <p className="type-body leading-relaxed text-gray-700">
                    {pillar.desc}
                  </p>

                  <div className="space-y-2.5 pt-3 border-t border-gray-200/80">
                    {pillar.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#74267A] shrink-0 mt-1" />
                        <span className="text-sm sm:text-base text-gray-800 font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </section>

        {/* ========================================================================= */}
        {/* 3. SECTION 03: IN-CLINIC VISUAL WALKTHROUGH VIDEO */}
        {/* ========================================================================= */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-16 space-y-6">
          <div>
            <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 md:items-start md:gap-12 md:text-left">
              <div className="space-y-2">
                <span className="type-eyebrow">
                  Physical Facility
                </span>
                <h2 className="type-section-title">
                  Step Inside Grand Dental &mdash;{" "}
                  <span
                    className="font-medium text-transparent"
                    style={{
                      background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    Clinic Tour
                  </span>
                </h2>
              </div>
              <p className="type-lead md:pt-4">
                Explore our reception lounge, modern dental operatories, and cleanroom sterilization setup located in Swoyambhu, Kathmandu.
              </p>
            </div>
          </div>

          {/* Clean Facility Video Player Container */}
          <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-[#101828] shadow-xl">
            <div className="relative aspect-video max-h-[520px] w-full overflow-hidden flex items-center justify-center">
              {/* Real HTML5 Video */}
              <video
                ref={videoRef}
                src="/video.mp4"
                poster={receptionImg.src}
                className="w-full h-full object-cover"
                playsInline
                loop
                muted={isMuted}
                onClick={handleTogglePlay}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Gradient Overlay (fades out when playing for immersive viewing) */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 pointer-events-none transition-opacity duration-500 ${isPlaying ? "opacity-30" : "opacity-80"
                  }`}
              />

              {/* Center Interactive Play/Pause Button */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4 transition-opacity duration-300 ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
                  }`}
              >
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  className="group flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#5C205E] text-white shadow-2xl ring-8 ring-white/20 transition-all duration-300 hover:scale-110 hover:bg-[#74267A] hover:ring-white/30 cursor-pointer"
                  aria-label={isPlaying ? "Pause Tour" : "Play Virtual Clinic Tour"}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
                  ) : (
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                  )}
                </button>

                <div className="mt-4 space-y-1">
                  <h3 className="type-card-title text-white tracking-wide">
                    {isPlaying ? "Clinic Tour Playing" : "Watch Clinic Walkthrough"}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 max-w-md font-normal">
                    Take a visual walkthrough of our reception, treatment suites, and clean sterilization station.
                  </p>
                </div>
              </div>

              {/* Bottom Player Controls */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleTogglePlay}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={handleToggleMute}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                <div className="text-xs sm:text-sm text-white/85 font-medium">
                  Grand Dental Clinic &mdash; Swoyambhu
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. SECTION 04: CAPTIVE 3D OVERLAPPING SERVICES CAROUSEL */}
        {/* ========================================================================= */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-16 space-y-6">
          <div>
            <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 md:items-start md:gap-12 md:text-left mb-6">
              <div className="space-y-2">
                <span className="type-eyebrow">
                  Our Services
                </span>
                <h2 className="type-section-title">
                  Comprehensive Dental Treatments,{" "}
                  <span
                    className="font-medium text-transparent"
                    style={{
                      background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    Gentle Care
                  </span>
                </h2>
              </div>
              <p className="type-lead md:pt-4">
                From routine scaling and composite fillings to pain-free root canals and orthodontic braces, our treatments are tailored to protect your natural smile.
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <Link href="/services" className="btn-pill-primary">
                <span>View All Treatments</span>
                <span className="flex items-center justify-center rounded-full bg-white p-1.5 transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#5C205E]" />
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Horizontal Snap Carousel */}
          <div className="sm:hidden">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 no-scrollbar">
              {servicesData.map((srv) => (
                <Link
                  key={srv.id}
                  href="/services"
                  className="group relative block h-[300px] w-[240px] shrink-0 snap-start overflow-hidden rounded-2xl bg-gray-100 shadow-md"
                >
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h3 className="type-card-title text-white leading-tight">
                      {srv.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Captive 3D Overlapping Card Stack */}
          <div className="hidden sm:block">
            <div className="relative h-[440px] flex items-center justify-center overflow-hidden">
              {servicesData.map((srv, index) => {
                const total = servicesData.length;
                let offset = (index - activeServiceIndex + total) % total;
                if (offset > total / 2) offset -= total;

                const isCenter = offset === 0;
                let translateX = 0;
                let translateY = 0;
                let scale = 0.78;
                let opacity = 0;
                let zIndex = 0;
                let pointerEvents: "auto" | "none" = "none";

                if (isCenter) {
                  translateX = 0;
                  translateY = 0;
                  scale = 1;
                  opacity = 1;
                  zIndex = 30;
                  pointerEvents = "auto";
                } else if (offset === 1) {
                  translateX = 300;
                  translateY = 22;
                  scale = 0.78;
                  opacity = 0.9;
                  zIndex = 20;
                  pointerEvents = "none";
                } else if (offset === -1) {
                  translateX = -300;
                  translateY = -22;
                  scale = 0.78;
                  opacity = 0.9;
                  zIndex = 20;
                  pointerEvents = "none";
                } else if (offset === 2) {
                  translateX = 560;
                  translateY = -14;
                  scale = 0.78;
                  opacity = 0.45;
                  zIndex = 10;
                  pointerEvents = "none";
                } else if (offset === -2) {
                  translateX = -560;
                  translateY = 14;
                  scale = 0.78;
                  opacity = 0.45;
                  zIndex = 10;
                  pointerEvents = "none";
                } else if (offset > 2) {
                  translateX = 820;
                  translateY = 0;
                  scale = 0.78;
                  opacity = 0;
                  zIndex = 0;
                  pointerEvents = "none";
                } else {
                  translateX = -820;
                  translateY = 0;
                  scale = 0.78;
                  opacity = 0;
                  zIndex = 0;
                  pointerEvents = "none";
                }

                return (
                  <Link
                    key={srv.id}
                    href="/services"
                    aria-hidden={!isCenter}
                    tabIndex={isCenter ? 0 : -1}
                    className="group absolute overflow-hidden rounded-3xl bg-gray-100 shadow-lg transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer"
                    style={{
                      width: "320px",
                      height: "380px",
                      transform: `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px)) scale(${scale})`,
                      left: "50%",
                      top: "50%",
                      zIndex,
                      opacity,
                      pointerEvents,
                    }}
                  >
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />

                    <div className="absolute inset-x-0 bottom-0 p-6 text-white space-y-1.5">
                      <h3 className="type-card-title text-white leading-tight">
                        {srv.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#fff]">
                        <span>Explore Treatment Details</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <button
                type="button"
                onClick={handlePrevService}
                aria-label="Previous services"
                className="rounded-full border border-dashed border-gray-800 p-2.5 text-gray-800 transition-all hover:bg-black/5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNextService}
                aria-label="Next services"
                className="rounded-full border border-dashed border-gray-800 p-2.5 text-gray-800 transition-all hover:bg-black/5 cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. SECTION 05: BOTTOM CTA BANNER */}
        {/* ========================================================================= */}
        <section className="relative h-[280px] sm:h-[380px] w-full overflow-hidden mt-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-full w-full rounded-3xl overflow-hidden">
            <Image
              src={frontViewImg}
              alt="Grand Dental Clinic Swoyambhu Front View"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-8 lg:px-16">
              <div className="mx-auto max-w-3xl space-y-4">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium leading-tight text-white">
                  Experience Gentle Dental Care in Kathmandu
                </h2>
                <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-white/95 font-normal">
                  Open Sunday to Friday (8:00 AM – 6:00 PM). Walk in or book your consultation with our experienced dental team in Swoyambhu.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <Link href="/appointment" className="btn-pill-primary">
                    <span>Book Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/contact" className="btn-pill-outline bg-white/15 hover:bg-white/25 text-white border-white/30 backdrop-blur-md">
                    <span>Call 01-4950352</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
