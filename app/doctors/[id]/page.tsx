import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Stethoscope,
  Star,
  Clock,
  ChevronRight,
  Phone,
} from "lucide-react";
import { doctorsData, Doctor } from "@/data/doctors";
import LocationBookingSection from "@/components/LocationBookingSection";
import { DoctorDetailMobile } from "@/app/m/doctors";

export function generateStaticParams() {
  return doctorsData.map((doc) => ({
    id: doc.id,
  }));
}

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const doctor = doctorsData.find((d) => d.id === resolvedParams.id);

  if (!doctor) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-[#DBEAFE] selection:text-[#0B3B8B] font-sans">
      {/* MOBILE DOCTOR DETAIL VIEW (sm:hidden) */}
      <div className="block sm:hidden">
        <DoctorDetailMobile doctor={doctor} />
      </div>

      {/* DESKTOP DOCTOR DETAIL VIEW (hidden sm:block) */}
      <div className="hidden sm:block pb-24">
        {/* 1. BREADCRUMBS & SECTION HEADER */}
        <section className="relative overflow-hidden pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-gray-100 bg-[#F0F7FF]/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            {/* Breadcrumb Path */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500">
            <Link href="/" className="hover:text-[#0B3B8B] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/doctors" className="hover:text-[#0B3B8B] transition-colors">
              Doctors &amp; Specialists
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0B3B8B] font-bold">{doctor.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DBEAFE] text-xs sm:text-sm font-semibold text-[#0B3B8B] shadow-2xs mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Specialist Profile</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-gray-900 leading-tight">
                {doctor.name},{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(246.94deg, #388EE8 -28.81%, #0B3B8B 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {doctor.title}
                </span>
              </h1>
              <p className="type-lead mt-2">{doctor.role}</p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={`/appointment?doctor=${doctor.id}`}
                className="group btn-pill-primary"
              >
                <span>Book Consultation</span>
                <span className="flex items-center justify-center rounded-full bg-white p-1.5 transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B3B8B]" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DOCTOR PROFILE MAIN GRID */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Portrait & Quick Facts (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Portrait Card */}
            <div className="rounded-3xl border border-black/5 bg-white p-4 shadow-sm overflow-hidden space-y-4">
              <div className="relative h-[380px] sm:h-[440px] w-full overflow-hidden rounded-2xl bg-gray-100 border border-black/5">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white/95 backdrop-blur-xs text-gray-900 shadow-sm border border-black/5">
                    {doctor.experience} Experience
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-amber-500 text-xs sm:text-sm font-bold shadow-sm border border-black/5">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-gray-900">{doctor.rating}</span>
                    <span className="text-gray-500 font-normal">({doctor.reviewsCount})</span>
                  </div>
                </div>
              </div>

              {/* Clinic Schedule Info */}
              <div className="p-5 rounded-2xl bg-[#F0F7FF] border border-[#DBEAFE] space-y-2">
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B3B8B] flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>Clinical Hours</span>
                </div>
                <div className="text-base font-semibold text-gray-900">{doctor.schedule}</div>
                <div className="text-xs sm:text-sm text-gray-600">Appointments available on-site &amp; emergency triage.</div>
              </div>
            </div>

            {/* Direct Consultation Card */}
            <div className="rounded-3xl border border-gray-200 bg-gray-50/70 p-6 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#0B3B8B] text-white flex items-center justify-center shadow-2xs">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Book Direct with {doctor.name.split(" ")[1]}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Same-week priority consultations in Swoyambhu.</p>
                </div>
              </div>

              <Link
                href={`/appointment?doctor=${doctor.id}`}
                className="group btn-pill-primary w-full"
              >
                <span>Select Appointment Slot</span>
                <span className="flex items-center justify-center rounded-full bg-white p-1.5 transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B3B8B]" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Full Biography, Certifications & Key Procedures (Span 7) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Biography */}
            <div className="space-y-4">
              <h2 className="type-section-title">About {doctor.name}</h2>
              <p className="type-body leading-relaxed">
                {doctor.longBio}
              </p>
            </div>

            {/* Education & Academic Honors */}
            <div className="space-y-4 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-2xs">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0B3B8B]">
                <GraduationCap className="w-4 h-4" />
                <span>Education &amp; Fellowships</span>
              </div>
              <div className="text-base font-semibold text-gray-900">
                {doctor.education}
              </div>
              <div className="pt-3 border-t border-gray-100 space-y-2.5">
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500">Board Accreditations</div>
                <ul className="space-y-2.5 text-sm sm:text-base text-gray-800">
                  {doctor.certifications.map((cert) => (
                    <li key={cert} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Clinical Procedures */}
            <div className="space-y-4">
              <h3 className="type-sub-title">Key Procedures &amp; Clinical Focus</h3>
              <div className="space-y-3.5">
                {doctor.keyProcedures.map((proc) => (
                  <div
                    key={proc.name}
                    className="p-5 rounded-2xl border border-gray-200 bg-white hover:border-[#DBEAFE] transition-colors space-y-1 shadow-2xs"
                  >
                    <div className="text-base font-bold text-gray-900">{proc.name}</div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">{proc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties Badges List */}
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500">Areas of Expertise</div>
              <div className="flex flex-wrap gap-2.5">
                {doctor.specialties.map((spec) => (
                  <span
                    key={spec}
                    className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#F0F7FF] border border-[#DBEAFE] text-[#0B3B8B]"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RETURN TO DIRECTORY BANNER */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="rounded-3xl border border-gray-200 bg-gray-50/70 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-900">Looking for other specialties?</h4>
            <p className="text-sm sm:text-base text-gray-600 mt-0.5">Explore our entire board-certified multidisciplinary team.</p>
          </div>
          <Link
            href="/doctors"
            className="btn-pill-outline"
          >
            <span>View All Doctors</span>
            <ArrowRight className="w-4 h-4 text-[#0B3B8B]" />
          </Link>
        </div>
      </section>

      {/* 4. CTA BOOKING & CLINIC LOGISTICS SECTION */}
      <LocationBookingSection />
      </div>
    </main>
  );
}
