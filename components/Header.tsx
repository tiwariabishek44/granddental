"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Phone,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Calendar,
  ShieldCheck,
  Clock,
  MapPin,
  Stethoscope,
  Smile,
  Zap,
  Layers,
  HeartPulse,
  MessageCircle,
} from "lucide-react";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export default function Header() {
  const pathname = usePathname();
  const { openAppointmentModal } = useAppointmentModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to apply compact frosted effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  const featuredServices = [
    {
      name: "3D Dental Implants",
      href: "/services/dental-implants",
      desc: "Permanent titanium root replacements",
      icon: Layers,
      tint: "#EBF3FE",
      iconColor: "#0B3B8B",
      tag: "Popular",
    },
    {
      name: "Clear Invisible Aligners",
      href: "/services/clear-aligners",
      desc: "Discreet wire-free smile alignment",
      icon: Smile,
      tint: "#F0F7FF",
      iconColor: "#1E64D4",
      tag: "Trending",
    },
    {
      name: "Root Canal Treatment (RCT)",
      href: "/services/root-canal",
      desc: "Gentle pain-free tooth preservation",
      icon: HeartPulse,
      tint: "#E0F2FE",
      iconColor: "#0284C7",
    },
    {
      name: "Teeth Whitening & Polish",
      href: "/services/teeth-whitening",
      desc: "Instant shade brightening in 45 mins",
      icon: Zap,
      tint: "#F0F7FF",
      iconColor: "#388EE8",
    },
    {
      name: "Ultrasonic Scaling",
      href: "/services/scaling-polishing",
      desc: "Deep calculus & stain prophylaxis",
      icon: Stethoscope,
      tint: "#EBF3FE",
      iconColor: "#2563EB",
    },
    {
      name: "Paediatric Kids Dentistry",
      href: "/services/paediatric-dentistry",
      desc: "Gentle, fear-free care for children",
      icon: Smile,
      tint: "#E0F2FE",
      iconColor: "#0B3B8B",
    },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* 1. Top Pre-Header Marquee Ribbon */}
      <div
        className={`bg-[#0B3B8B] text-white text-xs sm:text-[13px] transition-all duration-300 font-medium overflow-hidden relative ${isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-12 opacity-100 py-2 border-b border-white/10"
          }`}
      >
        {/* Subtle Fade Edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#0B3B8B] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#0B3B8B] to-transparent z-10" />

        {/* Continuous Looping Marquee Track */}
        <div className="flex select-none overflow-hidden">
          <div className="animate-marquee flex items-center shrink-0 gap-6 sm:gap-10">
            {/* Cycle 1 */}
            <div className="flex items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-white">Open Today: 9:00 AM – 7:00 PM</span>
                <span className="text-white/70 font-normal">&middot; Walk-ins Welcome (9 AM – 6 PM)</span>
              </div>

              <span className="text-white/30">&bull;</span>

              <div className="flex items-center gap-1.5 text-white/95">
                <ShieldCheck className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>NMC Certified Doctors &bull; 100% Autoclaved Instruments</span>
              </div>

              <span className="text-white/30">&bull;</span>

              <div className="flex items-center gap-1.5 text-white font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Quality Dental Care &bull; Honest Pricing &bull; Every Smile Matters</span>
              </div>

              <span className="text-white/30">&bull;</span>

              <div className="flex items-center gap-1.5 text-white/95">
                <MapPin className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Swoyambhu, Kathmandu (150m from Buddha Park) &bull; On-Site Parking</span>
              </div>

              <span className="text-white/30">&bull;</span>

              <a
                href="tel:9861161359"
                className="flex items-center gap-1.5 text-white/95 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Hotline: <strong className="font-clinical font-bold">9861161359</strong> / <strong className="font-clinical font-bold">01-4950352</strong></span>
              </a>

              <span className="text-white/30">&bull;</span>

              <a
                href="https://wa.me/9779861161359"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/95 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: <strong className="font-clinical font-bold">9861161359</strong></span>
              </a>

              <span className="text-white/30">&bull;</span>

              <div className="flex items-center gap-1.5 text-white/90">
                <HeartPulse className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Painless Root Canal &bull; Aesthetic Fillings &bull; Clear Aligners &bull; Dental Implants</span>
              </div>

              <span className="text-white/30">&bull;</span>
            </div>

            {/* Cycle 2 (Exact Duplicate for seamless infinite loop) */}
            <div className="flex items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-white">Open Today: 9:00 AM – 7:00 PM</span>
                <span className="text-white/70 font-normal">&middot; Walk-ins Welcome (9 AM – 6 PM)</span>
              </div>

              <span className="text-white/30">&bull;</span>

              <div className="flex items-center gap-1.5 text-white/95">
                <ShieldCheck className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>NMC Certified Doctors &bull; 100% Autoclaved Instruments</span>
              </div>

              <span className="text-white/30">&bull;</span>

              <div className="flex items-center gap-1.5 text-white font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Quality Dental Care &bull; Honest Pricing &bull; Every Smile Matters</span>
              </div>

              <span className="text-white/30">&bull;</span>

              <div className="flex items-center gap-1.5 text-white/95">
                <MapPin className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Swoyambhu, Kathmandu (150m from Buddha Park) &bull; On-Site Parking</span>
              </div>

              <span className="text-white/30">&bull;</span>

              <a
                href="tel:9861161359"
                className="flex items-center gap-1.5 text-white/95 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Hotline: <strong className="font-clinical font-bold">9861161359</strong> / <strong className="font-clinical font-bold">01-4950352</strong></span>
              </a>

              <span className="text-white/30">&bull;</span>

              <a
                href="https://wa.me/9779861161359"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/95 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: <strong className="font-clinical font-bold">9861161359</strong></span>
              </a>

              <span className="text-white/30">&bull;</span>

              <div className="flex items-center gap-1.5 text-white/90">
                <HeartPulse className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Painless Root Canal &bull; Aesthetic Fillings &bull; Clear Aligners &bull; Dental Implants</span>
              </div>

              <span className="text-white/30">&bull;</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`bg-white/95 backdrop-blur-md text-gray-900 border-b border-gray-100 transition-all duration-300 ${isScrolled ? "shadow-md bg-white/95 py-1" : "shadow-2xs py-2"
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-21">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center group shrink-0">
              <Image
                src="/logo.png"
                alt="Grand Dental Clinic Logo"
                width={234}
                height={67}
                className="h-12 sm:h-16 lg:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3 text-[15px] xl:text-base font-medium">
              <Link
                href="/"
                className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive("/")
                  ? "bg-[#F0F7FF] text-[#0B3B8B] font-semibold border border-[#DBEAFE]"
                  : "text-gray-700 hover:text-[#0B3B8B] hover:bg-gray-50/80"
                  }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive("/about")
                  ? "bg-[#F0F7FF] text-[#0B3B8B] font-semibold border border-[#DBEAFE]"
                  : "text-gray-700 hover:text-[#0B3B8B] hover:bg-gray-50/80"
                  }`}
              >
                About
              </Link>

              <Link
                href="/services"
                className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive("/services")
                  ? "bg-[#F0F7FF] text-[#0B3B8B] font-semibold border border-[#DBEAFE]"
                  : "text-gray-700 hover:text-[#0B3B8B] hover:bg-gray-50/80"
                  }`}
              >
                Services
              </Link>

              <Link
                href="/doctors"
                className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive("/doctors")
                  ? "bg-[#F0F7FF] text-[#0B3B8B] font-semibold border border-[#DBEAFE]"
                  : "text-gray-700 hover:text-[#0B3B8B] hover:bg-gray-50/80"
                  }`}
              >
                Our Doctors
              </Link>

              <Link
                href="/contact"
                className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive("/contact")
                  ? "bg-[#F0F7FF] text-[#0B3B8B] font-semibold border border-[#DBEAFE]"
                  : "text-gray-700 hover:text-[#0B3B8B] hover:bg-gray-50/80"
                  }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Section */}
            <div className="hidden lg:flex items-center gap-3.5">
              {/* Quick Phone Call Pill */}
              <a
                href="tel:9861161359"
                className="flex items-center gap-2 text-sm sm:text-[15px] font-semibold text-gray-700 hover:text-[#0B3B8B] transition-colors px-3 py-2 rounded-full hover:bg-gray-50/90 border border-transparent hover:border-gray-200/60"
              >
                <div className="w-8 h-8 rounded-full bg-[#F0F7FF] text-[#0B3B8B] flex items-center justify-center border border-[#BFDBFE] shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-clinical font-semibold">9861161359</span>
              </a>

              {/* Signature Primary CTA Pill Button (Tier 1) */}
              <button
                type="button"
                onClick={() => openAppointmentModal()}
                className="group inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 bg-[#0B3B8B] text-white hover:bg-[#134FB0] h-11 sm:h-12 px-6 text-sm sm:text-base gap-2.5 shadow-sm cursor-pointer hover:shadow-md"
              >
                <span>Book Appointment</span>
                <span className="flex items-center justify-center rounded-full bg-white p-1.5 shadow-2xs transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B3B8B]" />
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => openAppointmentModal()}
                className="inline-flex items-center justify-center rounded-full bg-[#0B3B8B] text-white text-xs font-medium px-3.5 py-1.5 gap-1.5 shadow-2xs cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-white/90" />
                <span>Book</span>
              </button>

              <button
                type="button"
                aria-label="Toggle navigation menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-2xl bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200/70 transition-colors cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Mobile Slide-Over Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer Container */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-[340px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between p-6 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="space-y-6 overflow-y-auto pr-1">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="relative h-10 w-32">
                <Image
                  src="/logo.png"
                  alt="Grand Dental Clinic"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Navigation List */}
            <nav className="space-y-1">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-colors ${isActive("/")
                  ? "bg-[#F0F7FF] text-[#0B3B8B] border border-[#DBEAFE]"
                  : "text-gray-800 hover:bg-gray-50"
                  }`}
              >
                <span>Home</span>
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-colors ${isActive("/about")
                  ? "bg-[#F0F7FF] text-[#0B3B8B] border border-[#DBEAFE]"
                  : "text-gray-800 hover:bg-gray-50"
                  }`}
              >
                <span>About Grand Dental Clinic</span>
              </Link>

              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-colors ${isActive("/services")
                  ? "bg-[#F0F7FF] text-[#0B3B8B] border border-[#DBEAFE]"
                  : "text-gray-800 hover:bg-gray-50"
                  }`}
              >
                <span>Services</span>
              </Link>

              <Link
                href="/doctors"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-colors ${isActive("/doctors")
                  ? "bg-[#F0F7FF] text-[#0B3B8B] border border-[#DBEAFE]"
                  : "text-gray-800 hover:bg-gray-50"
                  }`}
              >
                <span>Specialist Doctors</span>
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-colors ${isActive("/contact")
                  ? "bg-[#F0F7FF] text-[#0B3B8B] border border-[#DBEAFE]"
                  : "text-gray-800 hover:bg-gray-50"
                  }`}
              >
                <span>Contact & Locations</span>
              </Link>
            </nav>

            {/* Timings Quick Badge */}
            <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-xs text-gray-600 space-y-1">
              <div className="font-semibold text-gray-900 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#0B3B8B]" />
                <span>Working Hours</span>
              </div>
              <p className="text-xs text-gray-500">Sun – Fri: 8:00 AM – 6:00 PM</p>
              <p className="text-xs text-gray-500">Saturday: Open by Appointment</p>
            </div>
          </div>

          {/* Drawer Bottom Actions */}
          <div className="pt-4 border-t border-gray-100 space-y-2.5">
            <a
              href="tel:014950352"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 border border-gray-200/70 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0B3B8B]" />
              <span className="font-clinical text-xs font-semibold">01-4950352</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openAppointmentModal();
              }}
              className="group inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 bg-[#0B3B8B] text-white hover:bg-[#134FB0] h-11 px-5 text-sm gap-2 shadow-sm w-full cursor-pointer"
            >
              <span>Book Appointment Now</span>
              <span className="flex items-center justify-center rounded-full bg-white p-1.5 transition-transform duration-200 group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5 text-[#0B3B8B]" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
