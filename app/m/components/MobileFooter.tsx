"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from "lucide-react";

export default function MobileFooter() {
  const quickLinks = [
    { name: "About Clinic", href: "/about" },
    { name: "Our Specialists", href: "/doctors" },
    { name: "Book Appointment", href: "/appointment" },
    { name: "Patient Reviews", href: "/#testimonials" },
    { name: "Emergency Care", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "3D Dental Implants", href: "/services/dental-implants" },
    { name: "Clear Aligners", href: "/services/clear-aligners" },
    { name: "Smile Makeover", href: "/services/smile-makeover" },
    { name: "Laser Whitening", href: "/services/teeth-whitening" },
    { name: "Painless Root Canal", href: "/services/root-canal" },
    { name: "Ultrasonic Scaling", href: "/services/scaling-polishing" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-gray-200/80 bg-white text-gray-700 px-4 pt-10 pb-12 sm:hidden space-y-6">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 translate-y-1/3 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(ellipse closest-side, #CE59DC 0%, #B43ABF 30%, rgba(180, 58, 191, 0.4) 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 space-y-6">
        {/* 1. Brand Logo, Mission & Trust Badge */}
        <div className="space-y-3.5">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 flex items-center justify-center shrink-0">
              <Image
                src="/logo.png"
                alt="Grand Dental Clinic"
                width={36}
                height={36}
                className="object-contain max-h-9 w-auto"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-base text-gray-900 tracking-tight leading-none">
                GRAND DENTAL
              </span>
              <span className="type-eyebrow leading-tight mt-0.5">
                Clinic &middot; Swoyambhu
              </span>
            </div>
          </Link>

          <p className="type-body font-normal">
            Precision dentistry, modern autoclave sterilization, and anxiety-free gentle care &mdash; empowering confident, lifelong smiles in Kathmandu.
          </p>



          {/* Social Media Links (Min 44x44px Touch Targets) */}
          <div className="flex items-center gap-2 pt-1">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook page"
              className="w-11 h-11 rounded-full bg-gray-100 text-[#5C205E] active:bg-[#FCF5FE] transition-colors flex items-center justify-center border border-gray-200/60"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="w-11 h-11 rounded-full bg-gray-100 text-[#5C205E] active:bg-[#FCF5FE] transition-colors flex items-center justify-center border border-gray-200/60"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-11 h-11 rounded-full bg-gray-100 text-[#5C205E] active:bg-[#FCF5FE] transition-colors flex items-center justify-center border border-gray-200/60"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* 2. Direct Contact & Hours Card */}
        <div className="rounded-2xl bg-[#FCF5FE] border border-[#F3D5F9] p-4 space-y-3">
          <div className="type-eyebrow block">
            Get In Touch
          </div>

          <div className="space-y-2.5 type-ui-control font-normal">
            <a
              href="tel:01-4950352"
              className="flex items-center gap-2.5 text-gray-900 font-bold active:text-[#74267A]"
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-[#F3D5F9] flex items-center justify-center text-[#74267A] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-clinical text-sm sm:text-base">01-4950352 / 9841322789</span>
            </a>

            <a
              href="mailto:contact@granddental.com.np"
              className="flex items-center gap-2.5 text-gray-800 font-medium active:text-[#74267A]"
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-[#F3D5F9] flex items-center justify-center text-[#74267A] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm sm:text-base">contact@granddental.com.np</span>
            </a>

            <div className="flex items-start gap-2.5 text-gray-700">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#F3D5F9] flex items-center justify-center text-[#74267A] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-sm sm:text-base leading-relaxed font-normal">
                Nagarjun-3, Pachadhara, Swoyambhu, Kathmandu
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-gray-700 pt-1.5 border-t border-[#F3D5F9]">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#F3D5F9] flex items-center justify-center text-[#74267A] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="type-meta space-y-0.5">
                <span className="font-semibold text-gray-900 block">Sun &ndash; Fri: 8:00 AM &ndash; 6:00 PM</span>
                <span className="block text-gray-600 font-normal">Saturday: Open by Appointment</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. 2-Column Links Grid */}
        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100">
          {/* Explore Links */}
          <div className="space-y-2.5">
            <h3 className="type-eyebrow block">
              Explore
            </h3>
            <ul className="space-y-2.5 type-ui-control text-gray-700 font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 active:text-[#74267A] transition-colors block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Treatments */}
          <div className="space-y-2.5">
            <h3 className="type-eyebrow block">
              Specialized Care
            </h3>
            <ul className="space-y-2.5 type-ui-control text-gray-700 font-medium">
              {serviceLinks.map((svc) => (
                <li key={svc.name}>
                  <Link
                    href={svc.href}
                    className="text-gray-700 active:text-[#74267A] transition-colors block py-0.5"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4. Legal & Bottom Bar Safety Spacing */}
        <div className="pt-4 border-t border-gray-100 text-center space-y-2 type-meta text-gray-600 font-normal">
          <div>
            &copy; {new Date().getFullYear()} Grand Dental Clinic. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <Link href="/contact" className="active:text-[#74267A]">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="active:text-[#74267A]">
              Terms
            </Link>
            <span>&bull;</span>
            <Link href="/design-system" className="text-[#74267A] font-semibold">
              Design Guide
            </Link>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-gray-500 pt-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>for patient comfort in Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
