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
  Phone,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Clock,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/data/services";

import chairImg from "@/assets/chair.jpeg";
import receptionImg from "@/assets/reception.jpeg";
import frontViewImg from "@/assets/front view.jpeg";
import dentalToolsImg from "@/assets/Dental_tools_on_tray.jpeg";

export default function AboutMobile() {
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
      tabTitle: "1. Painless Care",
      subtitle: "Comfort-First Dental Treatment",
      image: chairImg,
      desc: "We understand that dental anxiety is real. Our treatments are designed around gentle local anesthesia techniques, modern ultrasonic scaling, and unhurried appointments so you feel completely at ease.",
      points: [
        "Gentle localized anesthesia for pain-free procedures",
        "Ultrasonic scaling that is gentle on teeth and gums",
        "Clear step-by-step explanations with zero surprises",
      ],
    },
    hygiene: {
      id: "hygiene",
      tabTitle: "2. Sterilization",
      subtitle: "Uncompromising Patient Safety",
      image: dentalToolsImg,
      desc: "Patient safety is our highest priority. Every instrument undergoes rigorous autoclave sterilization, and all treatment surfaces are disinfected between patients to maintain medical-grade hygiene.",
      points: [
        "100% autoclave sterilized instruments for every patient",
        "Disposable barriers and single-use protective equipment",
        "Clean, well-ventilated operatories with natural daylight",
      ],
    },
    transparency: {
      id: "transparency",
      tabTitle: "3. Honest Advice",
      subtitle: "Natural Tooth Preservation",
      image: frontViewImg,
      desc: "We focus on preserving your natural teeth whenever possible. Our specialists explain all options, timelines, and costs upfront so you can make confident, informed decisions without pressure.",
      points: [
        "Conservative treatment planning to save natural teeth",
        "Transparent pricing with no hidden procedure fees",
        "Digital imaging shown and explained before treatment",
      ],
    },
  };

  const currentPillar = pillarsData[activePillar];

  return (
    <div className="space-y-8 pb-12 sm:hidden font-sans">
      {/* 1. HERO SECTION */}
      <section className="px-4 pt-4 space-y-5">
        <div className="space-y-3">
          <span className="type-eyebrow px-3 py-1 rounded-full bg-[#FCF5FE] border border-[#F3D5F9] inline-block">
            About Grand Dental Clinic
          </span>

          <h1 className="text-3xl font-light text-gray-900 leading-tight tracking-tight">
            Painless Care. Honest Advice.{" "}
            <span
              className="font-medium text-transparent block"
              style={{
                background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              Lifelong Confidence.
            </span>
          </h1>

          <p className="type-body font-normal">
            Grand Dental Clinic was established in Swoyambhu, Kathmandu with a clear commitment: to provide clean, gentle, and reliable dental care where patients of all ages feel heard, respected, and completely at ease.
          </p>

          <p className="type-body font-normal text-gray-600">
            By pairing modern clinical equipment with compassionate chairside care, our multidisciplinary team of NMC-certified specialists takes the time to listen, explain every step transparently, and prioritize your natural tooth preservation without rushed or unnecessary procedures.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5">
          <Link
            href="/appointment"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#5C205E] active:bg-[#74267A] text-white type-ui-control font-bold shadow-md transition-colors min-h-[48px]"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="tel:01-4950352"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FCF5FE] border border-[#F3D5F9] text-[#74267A] type-ui-control font-bold min-h-[44px]"
          >
            <Phone className="w-4 h-4" />
            <span>Call 01-4950352</span>
          </a>
        </div>

        {/* Quick Trust Bar */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-1">
            <div className="type-card-title text-sm sm:text-base text-[#5C205E]">NMC Certified</div>
            <div className="type-meta text-gray-800 font-semibold">Experienced Specialists</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-1">
            <div className="type-card-title text-sm sm:text-base text-[#5C205E]">100% Sterilized</div>
            <div className="type-meta text-gray-800 font-semibold">Hospital Autoclave</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-1">
            <div className="type-card-title text-sm sm:text-base text-[#5C205E]">Painless Focus</div>
            <div className="type-meta text-gray-800 font-semibold">Gentle Anesthesia</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-1">
            <div className="type-card-title text-sm sm:text-base text-[#5C205E]">Open 6 Days</div>
            <div className="type-meta text-gray-800 font-semibold">Sun &ndash; Fri (8 AM - 6 PM)</div>
          </div>
        </div>

        {/* Hero Photo Tapestry */}
        <div className="space-y-3 pt-2">
          <div className="relative h-80 w-full rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-gray-900">
            <Image
              src={receptionImg}
              alt="Grand Dental Clinic Reception Lounge in Swoyambhu"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 type-meta text-white font-semibold">
              Welcoming Reception Lounge &middot; Swoyambhu
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-56 rounded-2xl overflow-hidden shadow-xs border border-gray-200 bg-gray-900">
              <Image
                src={frontViewImg}
                alt="Grand Dental Clinic Building Exterior"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-56 rounded-2xl overflow-hidden shadow-xs border border-gray-200 bg-gray-900">
              <Image
                src={chairImg}
                alt="Modern Sterilized Dental Operatory Chair"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 02: 3 CORE PHILOSOPHY PILLARS */}
      <section className="px-4 py-6 border-t border-gray-100 bg-[#FCF5FE]/30 space-y-5">
        <div className="space-y-2">
          <span className="type-eyebrow block">
            Our Care Philosophy
          </span>
          <h2 className="type-section-title">
            Three Pillars of Our{" "}
            <span
              className="font-medium text-transparent"
              style={{
                background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              Clinical Practice
            </span>
          </h2>
        </div>

        {/* Pillar Switcher Tabs */}
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-white border border-gray-200 shadow-2xs">
          {(["painless", "hygiene", "transparency"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActivePillar(key)}
              className={`py-2.5 px-2 rounded-xl type-ui-control font-bold transition-all text-center ${activePillar === key
                ? "bg-[#5C205E] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
                }`}
            >
              {key === "painless" ? "Painless" : key === "hygiene" ? "Sterilization" : "Honesty"}
            </button>
          ))}
        </div>

        {/* Active Pillar Card */}
        <div className="rounded-3xl bg-white border border-gray-200/80 overflow-hidden shadow-sm space-y-4 p-5">
          <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-xs bg-gray-900">
            <Image
              src={currentPillar.image}
              alt={currentPillar.subtitle}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white type-sub-title text-white">
              {currentPillar.subtitle}
            </div>
          </div>

          <div className="space-y-3">
            <p className="type-body font-normal text-gray-700">
              {currentPillar.desc}
            </p>

            <ul className="space-y-2 pt-1 border-t border-gray-100">
              {currentPillar.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2 type-body font-normal text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. SECTION 03: INTERACTIVE CLINIC VIDEO TOUR */}
      <section className="px-4 py-6 border-t border-gray-100 space-y-4">
        <div className="space-y-2">
          <span className="type-eyebrow block">
            Clinic Atmosphere &amp; Safety
          </span>
          <h2 className="type-section-title">
            Step Inside Our{" "}
            <span
              className="font-medium text-transparent"
              style={{
                background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              Swoyambhu Clinic
            </span>
          </h2>
        </div>

        {/* Video Player Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-gray-950 min-h-[300px] h-[330px] w-full flex items-center justify-center">
          <video
            ref={videoRef}
            src="/video.mp4"
            muted={isMuted}
            playsInline
            loop
            className="w-full h-full object-cover"
          />

          {/* Interactive Play/Pause & Mute Overlay */}
          <div className="absolute inset-0 bg-black/25 flex flex-col justify-between p-4 pointer-events-none">
            <div className="flex items-center justify-between pointer-events-auto">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white type-meta font-semibold">
                Clinic Tour Video
              </span>
              <button
                type="button"
                onClick={handleToggleMute}
                className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center active:bg-black/80 transition-colors"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex justify-center pointer-events-auto">
              <button
                type="button"
                onClick={handleTogglePlay}
                className="w-14 h-14 rounded-full bg-[#5C205E]/90 text-white flex items-center justify-center shadow-xl active:scale-95 transition-transform"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
              </button>
            </div>

            <div className="type-meta text-white/90 font-medium text-center pointer-events-auto">
              {isPlaying ? "Tap to Pause" : "Tap to Play Video Tour"}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 04: SIGNATURE CLINICAL PROCEDURES */}
      <section className="px-4 py-6 border-t border-gray-100 bg-[#FCF5FE]/30 space-y-5">
        <div className="space-y-2">
          <span className="type-eyebrow block">
            Clinical Disciplines
          </span>
          <h2 className="type-section-title">
            Advanced Treatments,{" "}
            <span
              className="font-medium text-transparent"
              style={{
                background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              Personalized Care
            </span>
          </h2>
        </div>

        {/* 3D Overlapping Card Stack for About Page */}
        <div className="relative h-[380px] w-full flex items-center justify-center overflow-hidden select-none">
          {servicesData.map((srv, index) => {
            const total = servicesData.length;
            let offset = (index - activeServiceIndex + total) % total;
            if (offset > total / 2) offset -= total;

            const isCenter = offset === 0;
            let translateX = 0;
            let translateY = 0;
            let scale = 0.82;
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
              translateX = 180;
              translateY = 14;
              scale = 0.78;
              opacity = 0.8;
              zIndex = 20;
              pointerEvents = "auto";
            } else if (offset === -1) {
              translateX = -180;
              translateY = -14;
              scale = 0.78;
              opacity = 0.8;
              zIndex = 20;
              pointerEvents = "auto";
            } else if (offset === 2) {
              translateX = 290;
              translateY = -8;
              scale = 0.64;
              opacity = 0.25;
              zIndex = 10;
              pointerEvents = "none";
            } else if (offset === -2) {
              translateX = -290;
              translateY = 8;
              scale = 0.64;
              opacity = 0.25;
              zIndex = 10;
              pointerEvents = "none";
            } else {
              translateX = 0;
              translateY = 0;
              scale = 0.6;
              opacity = 0;
              zIndex = 0;
              pointerEvents = "none";
            }

            return (
              <Link
                key={srv.id}
                href={`/services/${srv.slug || srv.id}`}
                onClick={(e) => {
                  if (!isCenter) {
                    e.preventDefault();
                    setActiveServiceIndex(index);
                  }
                }}
                className="group absolute overflow-hidden rounded-3xl bg-gray-900 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer"
                style={{
                  width: "270px",
                  height: "340px",
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
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white space-y-1.5">
                  <span className="type-eyebrow text-[#ED91FB] block">
                    {srv.categoryLabel}
                  </span>
                  <h3 className="type-card-title text-white line-clamp-2">
                    {srv.title}
                  </h3>
                  <div className="pt-1 flex items-center gap-1.5 type-ui-control font-semibold text-white">
                    <span>Explore Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Dashed Arrow Controls */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <button
            type="button"
            onClick={handlePrevService}
            className="rounded-full border border-dashed border-gray-800 p-2.5 text-gray-800 active:bg-black/10 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Previous Treatment"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <Link
            href="/services"
            className="px-5 py-2.5 rounded-full bg-white border border-[#F3D5F9] type-ui-control font-bold text-[#5C205E] active:bg-[#FCF5FE] transition-colors shadow-2xs min-h-[44px] flex items-center"
          >
            <span>All Treatments ({activeServiceIndex + 1}/{servicesData.length})</span>
          </Link>
          <button
            type="button"
            onClick={handleNextService}
            className="rounded-full border border-dashed border-gray-800 p-2.5 text-gray-800 active:bg-black/10 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Next Treatment"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 5. SECTION 05: BOTTOM CTA BANNER */}
      <section className="px-4 pt-4">
        <div className="relative rounded-3xl overflow-hidden bg-gray-900 text-white p-6 shadow-xl space-y-4">
          <div className="absolute inset-0 z-0">
            <Image
              src={receptionImg}
              alt="Grand Dental Clinic Atmosphere"
              fill
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
          </div>

          <div className="relative z-10 space-y-2">
            <span className="type-eyebrow text-[#ED91FB] block">
              Gentle Family Dentistry
            </span>
            <h3 className="type-card-title text-white text-xl font-bold leading-tight">
              Ready for a Gentle, Anxiety-Free Dental Visit?
            </h3>
            <p className="type-body text-gray-200 font-normal leading-relaxed">
              Visit our modern clinic in Swoyambhu, Kathmandu. Book an appointment or call us for transparent guidance.
            </p>
          </div>

          <div className="relative z-10 pt-2 flex flex-col gap-2.5">
            <Link
              href="/appointment"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-[#5C205E] active:bg-[#74267A] text-white type-ui-control font-bold shadow-md transition-colors min-h-[48px]"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/9779841322789?text=Hello%20Grand%20Dental,%20I%20would%20like%20to%20learn%20more%20about%20your%20clinic."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/15 active:bg-white/25 text-white type-ui-control text-xs sm:text-sm font-semibold border border-white/25 backdrop-blur-xs min-h-[44px]"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
