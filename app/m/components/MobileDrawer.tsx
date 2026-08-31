"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  X,
  Phone,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

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

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <div className="fixed inset-0 z-[60] sm:hidden flex flex-col justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Card */}
      <div className="relative z-10 w-full max-h-[92vh] bg-white rounded-t-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
        {/* Header with Logo + Clinic Name */}
        <div className="px-5 pt-4 pb-3 flex items-center justify-between border-b border-gray-100">
          <Link href="/" onClick={onClose} className="inline-flex items-center gap-2.5 select-none">
            <div className="relative h-8 w-8 rounded-full border border-[#F3D5F9] bg-white p-0.5 shadow-2xs flex items-center justify-center shrink-0">
              <Image
                src="/logo.png"
                alt="Grand Dental Clinic"
                width={32}
                height={32}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-baseline gap-1 leading-none">
                <span className="font-brand text-[19px] font-semibold tracking-[-0.01em] text-gray-950">
                  Grand
                </span>
                <span className="font-brand text-[19px] font-normal italic text-[#74267A]">
                  Dental
                </span>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="h-[1px] w-1.5 bg-[#ED91FB]" />
                <span className="text-[7.5px] font-bold tracking-[0.24em] uppercase text-gray-500 font-sans">
                  CLINIC &bull; KATHMANDU
                </span>
              </div>
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
          {/* Main Navigation Links Matching Desktop */}
          <nav className="space-y-1.5">
            {/* 1. Home */}
            <Link
              href="/"
              onClick={onClose}
              className={`flex items-center justify-between p-3.5 rounded-2xl text-sm sm:text-base font-semibold transition-colors min-h-[48px] ${
                isActive("/")
                  ? "bg-[#FCF5FE] text-[#74267A] border border-[#F7E6FA]"
                  : "text-gray-800 hover:bg-gray-50 active:bg-gray-100"
              }`}
            >
              <span>Home</span>
            </Link>

            {/* 2. About */}
            <Link
              href="/about"
              onClick={onClose}
              className={`flex items-center justify-between p-3.5 rounded-2xl text-sm sm:text-base font-semibold transition-colors min-h-[48px] ${
                isActive("/about")
                  ? "bg-[#FCF5FE] text-[#74267A] border border-[#F7E6FA]"
                  : "text-gray-800 hover:bg-gray-50 active:bg-gray-100"
              }`}
            >
              <span>About</span>
            </Link>

            {/* 3. Services */}
            <Link
              href="/services"
              onClick={onClose}
              className={`flex items-center justify-between p-3.5 rounded-2xl text-sm sm:text-base font-semibold transition-colors min-h-[48px] ${
                isActive("/services")
                  ? "bg-[#FCF5FE] text-[#74267A] border border-[#F7E6FA]"
                  : "text-gray-800 hover:bg-gray-50 active:bg-gray-100"
              }`}
            >
              <span>Services</span>
            </Link>

            {/* 4. Our Doctors */}
            <Link
              href="/doctors"
              onClick={onClose}
              className={`flex items-center justify-between p-3.5 rounded-2xl text-sm sm:text-base font-semibold transition-colors min-h-[48px] ${
                isActive("/doctors")
                  ? "bg-[#FCF5FE] text-[#74267A] border border-[#F7E6FA]"
                  : "text-gray-800 hover:bg-gray-50 active:bg-gray-100"
              }`}
            >
              <span>Our Doctors</span>
            </Link>

            {/* 5. Contact */}
            <Link
              href="/contact"
              onClick={onClose}
              className={`flex items-center justify-between p-3.5 rounded-2xl text-sm sm:text-base font-semibold transition-colors min-h-[48px] ${
                isActive("/contact")
                  ? "bg-[#FCF5FE] text-[#74267A] border border-[#F7E6FA]"
                  : "text-gray-800 hover:bg-gray-50 active:bg-gray-100"
              }`}
            >
              <span>Contact</span>
            </Link>
          </nav>

          {/* Quick Contact Box */}
          <div className="p-4 rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] space-y-2.5 text-xs sm:text-sm text-gray-700">
            <div className="flex items-center gap-2 text-[#74267A] font-bold">
              <Clock className="w-4 h-4 shrink-0" />
              <span>Sun – Fri: 8:00 AM – 6:00 PM</span>
            </div>
            <div className="flex items-start gap-2 text-gray-700 font-normal">
              <MapPin className="w-4 h-4 text-[#74267A] shrink-0 mt-0.5" />
              <span>Ring Road, Swoyambhu, Kathmandu, Nepal</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#F3D5F9]">
              <a
                href="tel:014950352"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white border border-[#F3D5F9] text-[#74267A] font-bold shadow-2xs text-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>01-4950352</span>
              </a>
              <a
                href="https://wa.me/9779841322789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold shadow-2xs text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Booking Action Button */}
        <div className="p-4 border-t border-gray-100 bg-white pb-[calc(1rem+env(safe-area-inset-bottom))]">
          <Link
            href="/appointment"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#5C205E] active:bg-[#74267A] text-white font-bold text-sm sm:text-base shadow-md transition-colors min-h-[48px]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
