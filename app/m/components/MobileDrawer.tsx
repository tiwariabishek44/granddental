"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Phone, MessageCircle, Clock, Calendar, ArrowRight } from "lucide-react";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();
  const { openAppointmentModal } = useAppointmentModal();

  // Helper to test if a nav link is active
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  // Lock body scroll when drawer is open
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

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex sm:hidden"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel */}
      <div className="relative ml-auto w-full max-w-[320px] bg-white h-full shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-right duration-250 ease-out font-sans">
        {/* Drawer Header */}
        <div className="p-4 flex items-center justify-between border-b border-gray-100">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2 select-none"
          >
            <div className="relative h-9 w-9 rounded-full border border-[#DBEAFE] bg-white p-0.5 shadow-2xs flex items-center justify-center shrink-0">
              <Image
                src="/logo.png"
                alt="Grand Dental Clinic"
                width={36}
                height={36}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-2xl font-normal tracking-tight text-gray-950 leading-none group-hover:text-[#0B3B8B] transition-colors">
                Grand Dental
              </span>
              <span className="text-[9.5px] font-bold tracking-[0.22em] uppercase text-[#0B3B8B] mt-1 font-sans">
                Clinic &bull; Kathmandu
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl bg-gray-100 text-gray-700 active:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Close Navigation Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="p-4 overflow-y-auto space-y-3.5 flex-1">
          {/* Main Navigation Links Matching Desktop */}
          <nav className="space-y-1">
            <Link
              href="/"
              onClick={onClose}
              className={`flex items-center justify-between py-3 px-3.5 rounded-2xl text-sm font-semibold transition-colors ${isActive("/") && pathname === "/"
                ? "bg-[#F0F7FF] text-[#0B3B8B] border border-[#DBEAFE]"
                : "text-gray-800 active:bg-gray-50"
                }`}
            >
              <span>Home</span>
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className={`flex items-center justify-between py-3 px-3.5 rounded-2xl text-sm font-semibold transition-colors ${isActive("/about")
                ? "bg-[#F0F7FF] text-[#0B3B8B] border border-[#DBEAFE]"
                : "text-gray-800 active:bg-gray-50"
                }`}
            >
              <span>About</span>
            </Link>

            <Link
              href="/services"
              onClick={onClose}
              className={`flex items-center justify-between py-3 px-3.5 rounded-2xl text-sm font-semibold transition-colors ${isActive("/services")
                ? "bg-[#F0F7FF] text-[#0B3B8B] border border-[#DBEAFE]"
                : "text-gray-800 active:bg-gray-50"
                }`}
            >
              <span>Services</span>
            </Link>

            <Link
              href="/doctors"
              onClick={onClose}
              className={`flex items-center justify-between py-3 px-3.5 rounded-2xl text-sm font-semibold transition-colors ${isActive("/doctors")
                ? "bg-[#F0F7FF] text-[#0B3B8B] border border-[#DBEAFE]"
                : "text-gray-800 active:bg-gray-50"
                }`}
            >
              <span>Our Doctors</span>
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className={`flex items-center justify-between py-3 px-3.5 rounded-2xl text-sm font-semibold transition-colors ${isActive("/contact")
                ? "bg-[#F0F7FF] text-[#0B3B8B] border border-[#DBEAFE]"
                : "text-gray-800 active:bg-gray-50"
                }`}
            >
              <span>Contact</span>
            </Link>
          </nav>

          {/* Direct Phone & WhatsApp Call Box */}
          <div className="pt-2">
            <div className="p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DBEAFE] space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <Clock className="w-3.5 h-3.5 text-[#0B3B8B]" />
                <span className="font-semibold text-gray-900">Sun – Fri: 8:00 AM – 6:00 PM</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#DBEAFE]">
                <a
                  href="tel:014950352"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white border border-[#DBEAFE] text-[#0B3B8B] font-bold shadow-2xs text-xs"
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
        </div>

        {/* Bottom Booking Action Button */}
        <div className="p-4 border-t border-gray-100 bg-white pb-[calc(1rem+env(safe-area-inset-bottom))]">
          <button
            type="button"
            onClick={() => {
              onClose();
              openAppointmentModal();
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#0B3B8B] active:bg-[#134FB0] text-white font-bold text-sm sm:text-base shadow-md transition-colors min-h-[48px] cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
