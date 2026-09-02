"use client";

import React from "react";
import {
  HeroSection,
  ClinicSection,
  ServicesSection,
  OurClinicSection,
  DoctorsSection,
  TestimonialsSection,
  LocationBookingSection,
} from "./_hompage";
import {
  HeroMobile,
  ClinicSectionMobile,
  ServicesMobile,
  OurClinicMobile,
  DoctorsMobile,
  TestimonialsMobile,
  LocationBookingMobile,
} from "./m/_homepage";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-[#DBEAFE] selection:text-[#0B3B8B] font-sans">
      {/* DESKTOP / TABLET EXPERIENCE (sm:block) */}
      <div className="hidden sm:block">
        <HeroSection />
        <ClinicSection />
        <ServicesSection />
        <OurClinicSection />
        <DoctorsSection />
        <TestimonialsSection />
        <LocationBookingSection />
      </div>

      {/* DEDICATED MOBILE HOMEPAGE EXPERIENCE (sm:hidden) */}
      <div className="block sm:hidden space-y-6 pb-6">
        <HeroMobile />
        <ClinicSectionMobile />
        <ServicesMobile />
        <OurClinicMobile />
        <DoctorsMobile />
        <TestimonialsMobile />
        <LocationBookingMobile />
      </div>
    </main>
  );
}