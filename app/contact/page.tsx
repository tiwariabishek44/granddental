"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Car,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { ContactMobile } from "@/app/m/contact";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "General Dental Checkup & Consultation",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "General Dental Checkup & Consultation",
        message: "",
      });
    }, 800);
  };

  const faqs = [
    {
      q: "Can I just walk in, or do I need an appointment first?",
      a: "Walk-ins are always welcome from 8:00 AM to 6:00 PM (Sunday to Friday). However, calling or messaging on WhatsApp beforehand reserves your time and keeps your waiting time to a minimum.",
    },
    {
      q: "Is there easy parking available near the clinic?",
      a: "Yes. We have dedicated on-site parking right outside the clinic for both motorbikes/scooters and cars.",
    },
    {
      q: "Which treatments can be finished in a single visit?",
      a: "Routine checkups, diagnostic X-rays, teeth cleaning (scaling & polishing), simple cavity fillings, and urgent toothache relief are usually completed during a single visit.",
    },
    {
      q: "How do I find the clinic from Swoyambhu Ring Road?",
      a: "From the Buddha Park junction on the Ring Road, head approximately 150 meters down the Pachadhara road. We are located right next to the Pachadhara Khanepani Office.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-[#F3D5F9] selection:text-[#5C205E] font-sans">
      {/* Mobile Contact View */}
      <div className="block sm:hidden">
        <ContactMobile />
      </div>

      {/* Desktop Contact View */}
      <div className="hidden sm:block pb-24">
        {/* 1. Header Section */}
        <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="type-eyebrow">
              We’re Here to Help &middot; Swoyambhu, Kathmandu
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              <h1 className="type-display">
                Get in touch or{" "}
                <span
                  className="font-normal text-transparent"
                  style={{
                    background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  visit our clinic.
                </span>
              </h1>
              <p className="type-lead">
                Have a question about a treatment, sudden tooth pain, or need to schedule a consultation? Call us, message on WhatsApp, or send a quick message below.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Three Quick Contact Cards */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Direct Line & WhatsApp */}
            <div className="rounded-3xl border border-black/5 bg-[#F9EBFC] p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#74267A] shadow-2xs border border-[#EECFF4]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Quick Response
                  </span>
                </div>
                <h3 className="type-card-title pt-2">Call or WhatsApp</h3>
                <p className="type-body">
                  Speak directly with our front desk to ask questions or reserve an appointment time.
                </p>
              </div>
              <div className="pt-6 border-t border-black/5 space-y-2.5">
                <a
                  href="tel:014950352"
                  className="group flex items-center justify-between text-base font-bold text-[#5C205E] hover:text-[#74267A]"
                >
                  <span>Landline: 01-4950352</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/9779841322789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-800 hover:text-[#5C205E]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: 9841322789</span>
                </a>
              </div>
            </div>

            {/* Card 2: Clinic Location */}
            <div className="rounded-3xl border border-black/5 bg-[#EEEEFF] p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-indigo-700 shadow-2xs border border-indigo-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white text-indigo-800 border border-indigo-100">
                    Swoyambhu, Kathmandu
                  </span>
                </div>
                <h3 className="type-card-title pt-2">Our Location</h3>
                <p className="type-body">
                  Nagarjun-3, Pachadhara, Swoyambhu. Near Pachadhara Khanepani Office (150m from Buddha Park).
                </p>
              </div>
              <div className="pt-6 border-t border-black/5 flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-700">
                <span className="flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-indigo-700" /> On-site parking for bikes and cars
                </span>
              </div>
            </div>

            {/* Card 3: Opening Hours */}
            <div className="rounded-3xl border border-black/5 bg-[#FCF5FE] p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#74267A] shadow-2xs border border-[#EECFF4]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Open 6 Days
                  </span>
                </div>
                <h3 className="type-card-title pt-2">Opening Hours</h3>
                <div className="space-y-2 text-sm sm:text-base text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Sun &ndash; Fri:</span>
                    <span>8:00 AM &ndash; 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Saturday:</span>
                    <span className="text-[#74267A] font-semibold">By Prior Appointment</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-black/5">
                <a
                  href="mailto:grand.dentalclinic2079@gmail.com"
                  className="text-sm sm:text-base font-semibold text-gray-800 hover:text-[#74267A] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#74267A]" />
                  <span>grand.dentalclinic2079@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Inquiry Form & Map Section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="type-eyebrow">
                  Send a Message
                </span>
                <h2 className="type-section-title">
                  Ask a question or request a visit
                </h2>
                <p className="type-lead">
                  Leave your contact details and message. Our team will get back to you promptly by phone or WhatsApp.
                </p>
              </div>

              {/* Success Notice */}
              {isSubmitted && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div className="text-sm sm:text-base">
                    <span className="font-semibold">Message Sent!</span> We will contact you shortly to answer your questions or confirm your visit.
                  </div>
                </div>
              )}

              {/* Form Elements */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm sm:text-base font-semibold text-gray-800">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Shrestha"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 text-sm sm:text-base text-gray-900 focus:bg-white focus:border-[#74267A] focus:ring-2 focus:ring-[#EECFF4] transition-all outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm sm:text-base font-semibold text-gray-800">
                      Mobile Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g. 9841XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 text-sm sm:text-base text-gray-900 focus:bg-white focus:border-[#74267A] focus:ring-2 focus:ring-[#EECFF4] transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm sm:text-base font-semibold text-gray-800">
                      Email Address (Optional)
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 text-sm sm:text-base text-gray-900 focus:bg-white focus:border-[#74267A] focus:ring-2 focus:ring-[#EECFF4] transition-all outline-none"
                    />
                  </div>

                  {/* Service */}
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-sm sm:text-base font-semibold text-gray-800">
                      What can we help you with?
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 text-sm sm:text-base text-gray-900 focus:bg-white focus:border-[#74267A] focus:ring-2 focus:ring-[#EECFF4] transition-all outline-none cursor-pointer"
                    >
                      <option>General Dental Checkup &amp; Consultation</option>
                      <option>Teeth Cleaning &amp; Polishing (Scaling)</option>
                      <option>Toothache &amp; Root Canal Treatment</option>
                      <option>Tooth-Colored Cavity Fillings</option>
                      <option>Crowns &amp; Bridges (Missing Teeth)</option>
                      <option>Braces &amp; Smile Alignment</option>
                      <option>Teeth Whitening</option>
                      <option>Tooth Extraction &amp; Wisdom Tooth Care</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm sm:text-base font-semibold text-gray-800">
                    Additional Details or Preferred Time (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us briefly about any symptoms or your preferred day/time to visit..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50/50 text-sm sm:text-base text-gray-900 focus:bg-white focus:border-[#74267A] focus:ring-2 focus:ring-[#EECFF4] transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group btn-pill-primary w-full sm:w-auto text-sm sm:text-base font-semibold"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <span className="flex items-center justify-center rounded-full bg-white p-1.5 transition-transform duration-200 group-hover:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5 text-[#5C205E]" />
                    </span>
                  </button>

                  <span className="text-xs sm:text-sm text-gray-600 flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Patient-First &amp; Honest Care
                  </span>
                </div>
              </form>
            </div>

            {/* Right Column: Map & Directions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="relative h-72 w-full bg-gray-100">
                  <iframe
                    title="Grand Dental Clinic Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.062828695574!2d85.28638977546764!3d27.715330376178877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a4e21a64b9%3A0x6b4ef84c7a52f4ec!2sSwayambhu%20Buddha%20Park!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale-20 contrast-105"
                  />
                </div>

                <div className="p-6 space-y-3 bg-[#FCF5FE]/50 border-t border-gray-100">
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#74267A]">
                    How to Reach Us
                  </div>
                  <ul className="space-y-2.5 text-sm sm:text-base text-gray-700 font-normal">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#74267A] shrink-0 mt-2" />
                      <span>About 150 meters into the Pachadhara road from the Swoyambhu Buddha Park Ring Road junction.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#74267A] shrink-0 mt-2" />
                      <span>Located right next to the Pachadhara Khanepani Office with dedicated on-site parking.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Direct Booking Shortcut */}
              <div className="rounded-3xl border border-[#EECFF4] bg-gradient-to-br from-[#FCF5FE] via-white to-[#F9EBFC] p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#5C205E] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="type-sub-title">Looking for an Appointment?</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Pick your preferred doctor, time, and service directly.</p>
                  </div>
                </div>

                <Link
                  href="/appointment"
                  className="group btn-pill-primary w-full text-sm sm:text-base font-semibold"
                >
                  <span>Book Online in 1 Minute</span>
                  <span className="flex items-center justify-center rounded-full bg-white p-1.5 transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 text-[#5C205E]" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FAQ Accordion Section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50/60 rounded-3xl border border-gray-200/80 p-8 sm:p-12 space-y-8">
            <div className="space-y-2 max-w-2xl">
              <span className="type-eyebrow">
                Common Questions
              </span>
              <h2 className="type-section-title">
                Everything you should know before visiting
              </h2>
            </div>

            <div className="space-y-3.5">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-200 shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
                    >
                      <span className="type-sub-title">
                        {faq.q}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen
                            ? "rotate-180 bg-[#FCF5FE] text-[#74267A]"
                            : "bg-gray-100 text-gray-500"
                          }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 type-body text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}