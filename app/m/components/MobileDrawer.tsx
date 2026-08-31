"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  Phone,
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navLinks = [
    { label: "Home", href: "/", icon: Sparkles },
    { label: "All Treatments & Services", href: "/services", icon: Stethoscope },
    { label: "NMC-Certified Doctors", href: "/doctors", icon: ShieldCheck },
    { label: "About Clinic & Sterilization", href: "/about", icon: ShieldCheck },
    { label: "Location & Directions", href: "/contact", icon: MapPin },
  ];

  const featuredTreatments = [
    { name: "Painless Root Canal (RCT)", href: "/services/root-canal" },
    { name: "Dental Implants", href: "/services/dental-implants" },
    { name: "Clear Invisible Aligners", href: "/services/clear-aligners" },
    { name: "Ultrasonic Scaling & Polish", href: "/services/scaling-polishing" },
  ];

  return (
    <div className="fixed inset-0 z-[60] sm:hidden flex flex-col justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Card */}
      <div className="relative z-10 w-full max-h-[90vh] bg-white rounded-t-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
        {/* Header with Logo + Clinic Name */}
        <div className="px-5 pt-4 pb-3 flex items-center justify-between border-b border-gray-100">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 flex items-center justify-center shrink-0">
              <Image
                src="/logo.png"
                alt="Grand Dental Clinic"
                width={32}
                height={32}
                className="object-contain max-h-8 w-auto"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-sm text-gray-900 tracking-tight leading-none">
                GRAND DENTAL
              </span>
              <span className="text-xs font-semibold text-[#74267A] uppercase tracking-wider leading-tight mt-0.5">
                Clinic &middot; Swoyambhu
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl bg-gray-100 text-gray-700 active:bg-gray-200 transition-colors"
            aria-label="Close Navigation Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="p-4 overflow-y-auto space-y-3.5 flex-1">
          {/* Main Navigation Links */}
          <div className="space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50/90 active:bg-[#FCF5FE] text-gray-900 text-sm sm:text-base font-semibold transition-colors border border-transparent active:border-[#F3D5F9] min-h-[48px]"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-[#74267A]" />
                  <span>{item.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            ))}
          </div>

          {/* Popular Treatments Quick Grid */}
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2.5">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#74267A]">
              Popular Treatments
            </div>
            <div className="grid grid-cols-2 gap-2">
              {featuredTreatments.map((treatment) => (
                <Link
                  key={treatment.href}
                  href={treatment.href}
                  onClick={onClose}
                  className="p-2.5 rounded-xl bg-white border border-gray-200/70 text-xs sm:text-sm font-semibold text-gray-800 active:bg-[#FCF5FE] active:text-[#74267A] transition-colors leading-tight min-h-[42px] flex items-center"
                >
                  <span>{treatment.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Clinic Hours & Location Information */}
          <div className="p-4 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] space-y-2.5 text-xs sm:text-sm text-gray-700">
            <div className="flex items-center gap-2 text-[#74267A] font-bold">
              <Clock className="w-4 h-4 shrink-0" />
              <span>Sun – Fri: 8:00 AM – 6:00 PM</span>
            </div>
            <div className="flex items-start gap-2 text-gray-700 font-normal">
              <MapPin className="w-4 h-4 text-[#74267A] shrink-0 mt-0.5" />
              <span>Ring Road, Swoyambhu, Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 pt-1">
              <Phone className="w-4 h-4 text-[#74267A] shrink-0" />
              <a href="tel:01-4950352" className="font-bold text-gray-900 underline">
                01-4950352
              </a>
              <span>/</span>
              <a href="tel:9841322789" className="font-bold text-gray-900 underline">
                9841322789
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Booking Action Button */}
        <div className="p-4 border-t border-gray-100 bg-white pb-[calc(1rem+env(safe-area-inset-bottom))]">
          <Link
            href="/appointment"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#5C205E] active:bg-[#74267A] text-white font-bold text-sm sm:text-base shadow-md transition-colors min-h-[48px]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
