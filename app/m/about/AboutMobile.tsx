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
      tabTitle: "1. Painless & Gentle Care",
      subtitle: "Comfort First",
      image: chairImg,
      desc: "Dental fear is real, and we take it seriously. Every procedure is handled with careful, gentle numbing techniques and unhurried patience so you remain comfortable from start to finish.",
      points: [
        "Gentle localized numbing for stress-free treatments",
        "Ultrasonic teeth cleaning that is smooth on sensitive gums",
        "Clear step-by-step guidance so you always know what to expect",
      ],
    },
    hygiene: {
      id: "hygiene",
      tabTitle: "2. Hospital-Grade Cleanliness",
      subtitle: "Patient Safety",
      image: dentalToolsImg,
      desc: "We treat clinic cleanliness as an absolute priority. Every instrument undergoes medical-grade autoclave sterilization, and operatories are thoroughly sanitized between every single patient.",
      points: [
        "100% autoclave sterilized instruments for each appointment",
        "Disposable barriers and single-use safety materials",
        "Fresh, well-ventilated treatment suites with natural light",
      ],
    },
    transparency: {
      id: "transparency",
      tabTitle: "3. Honest & Ethical Advice",
      subtitle: "Tooth Preservation",
      image: frontViewImg,
      desc: "Our philosophy is simple: protect and preserve your natural teeth whenever possible. We explain your exact options, show you the reasons clearly, and never suggest treatments you do not need.",
      points: [
        "Focus on saving and repairing your natural teeth first",
        "Transparent fee estimates upfront with zero hidden charges",
        "Practical advice and tips for long-term home dental care",
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
            About Our Practice &bull; Swoyambhu
          </span>

          <h1 className="text-3xl font-light text-gray-900 leading-tight tracking-tight">
            Quality dental care delivered with{" "}
            <span
              className="font-normal text-transparent block"
              style={{
                background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              patience and honesty.
            </span>
          </h1>

          <p className="type-body font-normal">
            Grand Dental Clinic was established in Swoyambhu, Kathmandu with a clear goal: to make dental visits comfortable, transparent, and completely stress-free. Many people delay necessary treatment because of fear or uncertainty about costs. We built our practice to change that experience.
          </p>

          <p className="type-body font-normal text-gray-600">
            From routine checkups and gentle cleanings to root canals, braces, and restorative care, our specialists focus on preserving your natural teeth. We take the time to discuss your diagnosis clearly, answer your questions, and provide thoughtful care in a spotless, welcoming environment.
          </p>
        </div>

        {/* 4 Feature Badges */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <div className="p-3 rounded-2xl bg-white border border-[#F7E6FA] space-y-1 shadow-2xs">
            <div className="font-semibold text-xs sm:text-sm text-[#5C205E] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Gentle Care</span>
            </div>
            <p className="text-gray-600 text-[11px] font-normal leading-snug">Pain-free approach &amp; relaxed visits</p>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-[#F7E6FA] space-y-1 shadow-2xs">
            <div className="font-semibold text-xs sm:text-sm text-[#5C205E] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Strict Hygiene</span>
            </div>
            <p className="text-gray-600 text-[11px] font-normal leading-snug">Autoclave sterilization on all tools</p>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-[#F7E6FA] space-y-1 shadow-2xs">
            <div className="font-semibold text-xs sm:text-sm text-[#5C205E] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Modern Setup</span>
            </div>
            <p className="text-gray-600 text-[11px] font-normal leading-snug">Digital imaging &amp; precision tools</p>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-[#F7E6FA] space-y-1 shadow-2xs">
            <div className="font-semibold text-xs sm:text-sm text-[#5C205E] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Honest Advice</span>
            </div>
            <p className="text-gray-600 text-[11px] font-normal leading-snug">Clear pricing &amp; no unneeded treatments</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5 pt-1">
          {/* About-page hero appointment button intentionally hidden.
          <Link
            href="/appointment"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#5C205E] active:bg-[#74267A] text-white type-ui-control font-semibold shadow-md transition-colors min-h-[48px]"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </Link> */}

          <a
            href="tel:014950352"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#FCF5FE] border border-[#F3D5F9] text-[#74267A] type-ui-control font-semibold min-h-[44px]"
          >
            <Phone className="w-4 h-4" />
            <span>Call 01-4950352</span>
          </a>
        </div>

        {/* Quick Summary Bar */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-0.5">
            <div className="text-lg font-bold text-[#5C205E]">1,000+</div>
            <div className="text-xs font-semibold text-gray-800">Patients Welcomed</div>
            <div className="text-[10.5px] text-gray-500 font-normal">Kathmandu Valley</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-0.5">
            <div className="text-lg font-bold text-[#5C205E]">100%</div>
            <div className="text-xs font-semibold text-gray-800">Sterilized Equipment</div>
            <div className="text-[10.5px] text-gray-500 font-normal">Hospital Autoclave</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-0.5">
            <div className="text-lg font-bold text-[#5C205E]">Experienced</div>
            <div className="text-xs font-semibold text-gray-800">Dental Specialists</div>
            <div className="text-[10.5px] text-gray-500 font-normal">Focus on Natural Teeth</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] text-center space-y-0.5">
            <div className="text-lg font-bold text-[#5C205E]">Swoyambhu</div>
            <div className="text-xs font-semibold text-gray-800">Convenient Location</div>
            <div className="text-[10.5px] text-gray-500 font-normal">Dedicated Parking</div>
          </div>
        </div>

        {/* Visual Photo Highlights */}
        <div className="space-y-3 pt-2">
          <div className="relative h-72 w-full rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-gray-900">
            <Image
              src={receptionImg}
              alt="Reception lounge at Grand Dental Clinic Swoyambhu"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#5C205E] text-white uppercase tracking-wider">
                Patient Experience
              </span>
              <h3 className="text-base font-bold text-white">Calm, Unrushed Consultations</h3>
              <p className="text-xs text-white/90 font-normal">
                We listen attentively to your concerns and review examination findings clearly before starting treatment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-xs border border-gray-200 bg-gray-900">
              <Image
                src={frontViewImg}
                alt="Grand Dental Clinic Building Exterior"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-xs border border-gray-200 bg-gray-900">
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
            Our Core Philosophy
          </span>
          <h2 className="type-section-title">
            The Three Pillars of{" "}
            <span
              className="font-medium text-transparent"
              style={{
                background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              Our Dental Care
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
              className={`py-2 px-1.5 rounded-xl text-xs font-bold transition-all text-center ${activePillar === key
                ? "bg-[#5C205E] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
                }`}
            >
              {key === "painless" ? "1. Painless" : key === "hygiene" ? "2. Cleanliness" : "3. Honesty"}
            </button>
          ))}
        </div>

        {/* Active Pillar Card */}
        <div className="rounded-3xl bg-white border border-gray-200/80 overflow-hidden shadow-sm space-y-4 p-5">
          <div className="relative h-70 w-full rounded-2xl overflow-hidden shadow-xs bg-gray-900">


          </div>

          <div className="space-y-3">
            <h3 className="type-card-title">
              {currentPillar.tabTitle.replace(/^\d+\.\s*/, "")}
            </h3>

            <p className="type-body font-normal text-gray-700 text-sm">
              {currentPillar.desc}
            </p>

            <ul className="space-y-2 pt-2 border-t border-gray-100">
              {currentPillar.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2 type-body font-normal text-gray-800 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
            Clinic Tour
          </span>
          <h2 className="type-section-title">
            Take a look inside{" "}
            <span
              className="font-medium text-transparent"
              style={{
                background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              Grand Dental
            </span>
          </h2>
          <p className="type-body font-normal text-sm">
            Explore our reception area, modern treatment rooms, and clean setup located in Swoyambhu, Kathmandu.
          </p>
        </div>

        {/* Video Player Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-gray-950 min-h-[300px] h-[530px] w-full flex items-center justify-center">
          <video
            ref={videoRef}
            src="/video.mp4"
            poster={receptionImg.src}
            muted={isMuted}
            playsInline
            loop
            className="w-full h-full object-cover"
          />

          {/* Interactive Play/Pause & Mute Overlay */}
          <div className="absolute inset-0 bg-black/25 flex flex-col justify-between p-4 pointer-events-none">
            <div className="flex items-center justify-between pointer-events-auto">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white type-meta font-semibold">
                Clinic Walkthrough
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
            Our Services
          </span>
          <h2 className="type-section-title">
            Comprehensive dental treatments,{" "}
            <span
              className="font-medium text-transparent"
              style={{
                background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              gentle care.
            </span>
          </h2>
          <p className="type-body font-normal text-sm">
            From routine cleanings and natural tooth fillings to root canals, braces, and replacements, explore how we care for your smile.
          </p>
        </div>

        {/* 3D Overlapping Card Stack */}
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
              /* Treatment-detail navigation is intentionally disabled in the About page carousel.
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
              > */
              <div
                key={srv.id}
                onClick={() => !isCenter && setActiveServiceIndex(index)}
                aria-hidden={!isCenter}
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
                  {/* Treatment-detail CTA intentionally hidden.
                  <div className="pt-1 flex items-center gap-1.5 type-ui-control font-semibold text-white">
                    <span>Explore Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div> */}
                </div>
              </div>
              /* </Link> */
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
              src={frontViewImg}
              alt="Grand Dental Clinic Swoyambhu Front View"
              fill
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
          </div>

          <div className="relative z-10 space-y-2">
            <h3 className="type-card-title text-white text-xl font-bold leading-tight">
              Visit us for gentle dental care in Kathmandu
            </h3>
            <p className="type-body text-gray-200 font-normal leading-relaxed text-sm">
              Open Sunday to Friday (8:00 AM – 6:00 PM). Walk in or schedule a consultation with our experienced dental team in Swoyambhu.
            </p>
          </div>

          <div className="relative z-10 pt-2 flex flex-col gap-2.5">
            <Link
              href="/appointment"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-[#5C205E] active:bg-[#74267A] text-white type-ui-control font-bold shadow-md transition-colors min-h-[48px]"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:014950352"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white/15 active:bg-white/25 text-white type-ui-control text-xs sm:text-sm font-semibold border border-white/25 backdrop-blur-xs min-h-[44px]"
            >
              <Phone className="w-4 h-4" />
              <span>Call 01-4950352</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
