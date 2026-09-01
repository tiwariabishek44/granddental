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
      tint: "#F9EBFC",
      iconColor: "#74267A",
      tag: "Popular",
    },
    {
      name: "Clear Invisible Aligners",
      href: "/services/clear-aligners",
      desc: "Discreet wire-free smile alignment",
      icon: Smile,
      tint: "#EEEEFF",
      iconColor: "#4338CA",
      tag: "Trending",
    },
    {
      name: "Root Canal Treatment (RCT)",
      href: "/services/root-canal",
      desc: "Gentle pain-free tooth preservation",
      icon: HeartPulse,
      tint: "#FDF0F2",
      iconColor: "#BE185D",
    },
    {
      name: "Teeth Whitening & Polish",
      href: "/services/teeth-whitening",
      desc: "Instant shade brightening in 45 mins",
      icon: Zap,
      tint: "#FCF5FE",
      iconColor: "#922F9C",
    },
    {
      name: "Ultrasonic Scaling",
      href: "/services/scaling-polishing",
      desc: "Deep calculus & stain prophylaxis",
      icon: Stethoscope,
      tint: "#EEEEFF",
      iconColor: "#2563EB",
    },
    {
      name: "Paediatric Kids Dentistry",
      href: "/services/paediatric-dentistry",
      desc: "Gentle, fear-free care for children",
      icon: Smile,
      tint: "#F9EBFC",
      iconColor: "#74267A",
    },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* 1. Top Pre-Header Bar */}
      <div
        className={`bg-[#5C205E] text-white text-xs sm:text-[13px] transition-all duration-300 font-medium ${isScrolled ? "max-h-0 opacity-0 overflow-hidden py-0" : "max-h-12 opacity-100 py-2 border-b border-white/10"
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Accreditations & Hours */}
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2 text-white/90">
              <ShieldCheck className="w-4 h-4 text-[#ED91FB]" />
              <span className="hidden sm:inline">NMC Certified Doctors &middot; Modern Dental Facility</span>
              <span className="sm:hidden">NMC Certified Doctors</span>
            </div>

            <span className="hidden md:inline text-white/30">|</span>

            <div className="hidden md:flex items-center gap-2 text-white/80">
              <Clock className="w-4 h-4 text-[#ED91FB]" />
              <span>Sun – Fri: 8:00 AM – 6:00 PM</span>
            </div>
          </div>

          {/* Right: Live Status & Emergency */}
          <div className="flex items-center gap-4 text-white/90">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-[13px] text-white/90 font-medium">Open Today</span>
            </div>

            <span className="text-white/30 hidden sm:inline">|</span>

            <a
              href="tel:014950352"
              className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ED91FB]" />
              <span className="font-clinical font-semibold tracking-tight text-xs sm:text-sm">01-4950352</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`bg-white/95 backdrop-blur-md text-gray-900 border-b border-gray-100 transition-all duration-300 ${isScrolled ? "shadow-md bg-white/95 py-1" : "shadow-2xs py-2"
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 flex items-center justify-center rounded-full border border-[#F3D5F9] bg-white p-0.5 shadow-2xs">
                <Image
                  src="/logo.png"
                  alt="Grand Dental Clinic Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif text-2xl sm:text-[26px] font-normal tracking-tight text-gray-950 leading-none group-hover:text-[#5C205E] transition-colors">
                  Grand Dental
                </span>
                <span className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.22em] uppercase text-[#74267A] mt-1 font-sans">
                  Clinic &bull; Kathmandu
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3 text-[15px] xl:text-base font-medium">
              <Link
                href="/"
                className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive("/")
                  ? "bg-[#FCF5FE] text-[#74267A] font-semibold border border-[#F7E6FA]"
                  : "text-gray-700 hover:text-[#74267A] hover:bg-gray-50/80"
                  }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive("/about")
                  ? "bg-[#FCF5FE] text-[#74267A] font-semibold border border-[#F7E6FA]"
                  : "text-gray-700 hover:text-[#74267A] hover:bg-gray-50/80"
                  }`}
              >
                About
              </Link>

              <Link
                href="/services"
                className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive("/services")
                  ? "bg-[#FCF5FE] text-[#74267A] font-semibold border border-[#F7E6FA]"
                  : "text-gray-700 hover:text-[#74267A] hover:bg-gray-50/80"
                  }`}
              >
                Services
              </Link>

              <Link
                href="/doctors"
                className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive("/doctors")
                  ? "bg-[#FCF5FE] text-[#74267A] font-semibold border border-[#F7E6FA]"
                  : "text-gray-700 hover:text-[#74267A] hover:bg-gray-50/80"
                  }`}
              >
                Our Doctors
              </Link>

              <Link
                href="/contact"
                className={`px-4 py-2 rounded-full transition-all duration-200 ${isActive("/contact")
                  ? "bg-[#FCF5FE] text-[#74267A] font-semibold border border-[#F7E6FA]"
                  : "text-gray-700 hover:text-[#74267A] hover:bg-gray-50/80"
                  }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Section */}
            <div className="hidden lg:flex items-center gap-3.5">
              {/* Quick Phone Call Pill */}
              <a
                href="tel:014950352"
                className="flex items-center gap-2 text-sm sm:text-[15px] font-semibold text-gray-700 hover:text-[#74267A] transition-colors px-3 py-2 rounded-full hover:bg-gray-50/90 border border-transparent hover:border-gray-200/60"
              >
                <div className="w-8 h-8 rounded-full bg-[#FCF5FE] text-[#74267A] flex items-center justify-center border border-[#EECFF4] shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-clinical font-semibold">01-4950352</span>
              </a>

              {/* Signature Primary CTA Pill Button (Tier 1) */}
              <button
                type="button"
                onClick={() => openAppointmentModal()}
                className="group inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 bg-[#5C205E] text-white hover:bg-[#74267A] h-11 sm:h-12 px-6 text-sm sm:text-base gap-2.5 shadow-sm cursor-pointer hover:shadow-md"
              >
                <span>Book Appointment</span>
                <span className="flex items-center justify-center rounded-full bg-white p-1.5 shadow-2xs transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-[#5C205E]" />
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => openAppointmentModal()}
                className="inline-flex items-center justify-center rounded-full bg-[#5C205E] text-white text-xs font-medium px-3.5 py-1.5 gap-1.5 shadow-2xs cursor-pointer"
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
                  ? "bg-[#FCF5FE] text-[#74267A] border border-[#F7E6FA]"
                  : "text-gray-800 hover:bg-gray-50"
                  }`}
              >
                <span>Home</span>
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-colors ${isActive("/about")
                  ? "bg-[#FCF5FE] text-[#74267A] border border-[#F7E6FA]"
                  : "text-gray-800 hover:bg-gray-50"
                  }`}
              >
                <span>About Grand Dental Clinic</span>
              </Link>

              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-colors ${isActive("/services")
                  ? "bg-[#FCF5FE] text-[#74267A] border border-[#F7E6FA]"
                  : "text-gray-800 hover:bg-gray-50"
                  }`}
              >
                <span>Services</span>
              </Link>

              <Link
                href="/doctors"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-colors ${isActive("/doctors")
                  ? "bg-[#FCF5FE] text-[#74267A] border border-[#F7E6FA]"
                  : "text-gray-800 hover:bg-gray-50"
                  }`}
              >
                <span>Specialist Doctors</span>
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-colors ${isActive("/contact")
                  ? "bg-[#FCF5FE] text-[#74267A] border border-[#F7E6FA]"
                  : "text-gray-800 hover:bg-gray-50"
                  }`}
              >
                <span>Contact & Locations</span>
              </Link>
            </nav>

            {/* Timings Quick Badge */}
            <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-xs text-gray-600 space-y-1">
              <div className="font-semibold text-gray-900 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#74267A]" />
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
              <Phone className="w-3.5 h-3.5 text-[#74267A]" />
              <span className="font-clinical text-xs font-semibold">01-4950352</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openAppointmentModal();
              }}
              className="group inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 bg-[#5C205E] text-white hover:bg-[#74267A] h-11 px-5 text-sm gap-2 shadow-sm w-full cursor-pointer"
            >
              <span>Book Appointment Now</span>
              <span className="flex items-center justify-center rounded-full bg-white p-1.5 transition-transform duration-200 group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5 text-[#5C205E]" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
