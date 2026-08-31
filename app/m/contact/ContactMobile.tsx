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
  Navigation,
} from "lucide-react";

export default function ContactMobile() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "General Dental Checkup & Consultation",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ Accordion State
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
    <div className="space-y-6 pb-12 sm:hidden font-sans">
      {/* 1. HEADER SECTION */}
      <section className="px-4 pt-4 space-y-2.5">
        <span className="type-eyebrow px-3 py-1 rounded-full bg-[#FCF5FE] border border-[#F3D5F9] inline-block">
          We’re Here to Help &middot; Swoyambhu, Kathmandu
        </span>

        <h1 className="text-3xl font-light text-gray-900 leading-tight tracking-tight">
          Get in touch or{" "}
          <span
            className="font-medium text-transparent"
            style={{
              background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            visit our clinic.
          </span>
        </h1>

        <p className="type-body font-normal">
          Have a question about a treatment, sudden tooth pain, or need to schedule a consultation? Call us, message on WhatsApp, or send a quick message below.
        </p>
      </section>

      {/* 2. THREE QUICK CONTACT BENTO CARDS */}
      <section className="px-4 space-y-3">
        {/* Card 1: Telephone & WhatsApp */}
        <div className="rounded-3xl border border-[#F3D5F9] bg-[#F9EBFC] p-5 space-y-3.5 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#74267A] shadow-2xs border border-[#EECFF4]">
              <Phone className="w-5 h-5" />
            </div>
            <span className="type-meta px-2.5 py-0.5 rounded-full font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              Quick Response
            </span>
          </div>

          <div>
            <h3 className="type-card-title">Call or WhatsApp</h3>
            <p className="type-meta text-gray-600 mt-0.5">
              Speak directly with our front desk to ask questions or reserve an appointment time.
            </p>
          </div>

          <div className="pt-3 border-t border-[#74267A]/15 space-y-2">
            <a
              href="tel:014950352"
              className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#F3D5F9] type-ui-control font-bold text-[#5C205E] active:bg-[#FCF5FE]"
            >
              <span>Landline: 01-4950352</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://wa.me/9779841322789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 type-ui-control font-bold text-emerald-800 active:bg-emerald-100"
            >
              <div className="flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: 9841322789</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Card 2: Location & Address */}
        <div className="rounded-3xl border border-indigo-100 bg-[#EEEEFF] p-5 space-y-3.5 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-indigo-700 shadow-2xs border border-indigo-100">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="type-meta px-2.5 py-0.5 rounded-full font-semibold bg-white text-indigo-800 border border-indigo-100">
              Swoyambhu, Kathmandu
            </span>
          </div>

          <div>
            <h3 className="type-card-title">Our Location</h3>
            <p className="type-body text-gray-700 font-normal mt-0.5 leading-relaxed">
              Nagarjun-3, Pachadhara, Swoyambhu, Kathmandu. Conveniently located near the Pachadhara Khanepani Office, just 150m from Ring Road.
            </p>
          </div>

          <div className="pt-2 border-t border-indigo-200/50 flex items-center gap-1.5 type-ui-control font-semibold text-indigo-900">
            <Car className="w-4 h-4 text-indigo-700" />
            <span>Dedicated On-Site Parking Available</span>
          </div>
        </div>

        {/* Card 3: Hours & Schedule */}
        <div className="rounded-3xl border border-[#F3D5F9] bg-[#FCF5FE] p-5 space-y-3.5 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#74267A] shadow-2xs border border-[#EECFF4]">
              <Clock className="w-5 h-5" />
            </div>
            <span className="type-meta px-2.5 py-0.5 rounded-full font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              Open 6 Days a Week
            </span>
          </div>

          <div>
            <h3 className="type-card-title">Clinic Hours</h3>
            <div className="space-y-1.5 type-meta text-gray-700 pt-1">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Sun — Fri:</span>
                <span>8:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Saturday:</span>
                <span className="text-[#74267A] font-bold">Open by Appointment</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#74267A]/15">
            <a
              href="mailto:grand.dentalclinic2079@gmail.com"
              className="type-ui-control font-semibold text-gray-700 active:text-[#74267A] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-[#74267A]" />
              <span className="break-all">grand.dentalclinic2079@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAP & DIRECT DIRECTIONS */}
      <section className="px-4 space-y-3">
        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="relative h-60 w-full bg-gray-100">
            <iframe
              title="Grand Dental Clinic Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.062828695574!2d85.28638977546764!3d27.715330376178877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a4e21a64b9%3A0x6b4ef84c7a52f4ec!2sSwayambhu%20Buddha%20Park!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="p-4 space-y-2.5 bg-[#FCF5FE]/60 border-t border-gray-100">
            <div className="type-eyebrow block">
              Arrival &amp; Landmark Directions
            </div>
            <ul className="space-y-1.5 type-body text-gray-700 font-normal">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#74267A] shrink-0 mt-2" />
                <span>150m from Swoyambhu Ring Road Buddha Park towards Pachadhara.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#74267A] shrink-0 mt-2" />
                <span>Next to the Pachadhara Khanepani Office with dedicated on-site parking out front.</span>
              </li>
            </ul>

            <a
              href="https://maps.google.com/?q=Swoyambhu+Kathmandu+Nepal"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-[#F3D5F9] text-[#74267A] type-ui-control font-bold shadow-2xs"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE INQUIRY FORM */}
      <section className="px-4">
        <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-sm space-y-4">
          <div className="space-y-1">
            <span className="type-eyebrow block">
              Send a Message
            </span>
            <h2 className="type-section-title">
              Book a Consultation
            </h2>
            <p className="type-body font-normal text-gray-600">
              Fill in your details below and our team will get back to you promptly to confirm your visit.
            </p>
          </div>

          {/* Success Message Alert */}
          {isSubmitted && (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2.5 type-ui-control">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="font-semibold">Message Sent!</span> We will contact you via phone or WhatsApp shortly to confirm your visit.
              </div>
            </div>
          )}

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="space-y-1">
              <label htmlFor="mobile-name" className="type-ui-control font-semibold text-gray-800 block">
                Full Name *
              </label>
              <input
                id="mobile-name"
                type="text"
                required
                placeholder="e.g. Ramesh Shrestha"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-3 rounded-xl border border-gray-200 bg-gray-50/50 type-ui-control text-gray-900 focus:bg-white focus:border-[#74267A] outline-none min-h-[44px]"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="mobile-phone" className="type-ui-control font-semibold text-gray-800 block">
                Phone Number *
              </label>
              <input
                id="mobile-phone"
                type="tel"
                required
                placeholder="e.g. 9841XXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-3 rounded-xl border border-gray-200 bg-gray-50/50 type-ui-control text-gray-900 focus:bg-white focus:border-[#74267A] outline-none min-h-[44px]"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="mobile-service" className="type-ui-control font-semibold text-gray-800 block">
                Treatment of Interest
              </label>
              <select
                id="mobile-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-3 rounded-xl border border-gray-200 bg-gray-50/50 type-ui-control text-gray-900 focus:bg-white focus:border-[#74267A] outline-none min-h-[44px] cursor-pointer"
              >
                <option>General Dental Checkup &amp; Consultation</option>
                <option>Scaling &amp; Teeth Cleaning (Polishing)</option>
                <option>Root Canal Treatment (RCT)</option>
                <option>Tooth-Colored Aesthetic Fillings</option>
                <option>Crowns &amp; Bridges (Tooth Replacement)</option>
                <option>Braces &amp; Orthodontic Consultation</option>
                <option>Teeth Whitening</option>
                <option>Tooth Extraction &amp; Minor Surgery</option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="mobile-message" className="type-ui-control font-semibold text-gray-800 block">
                Note or Message (Optional)
              </label>
              <textarea
                id="mobile-message"
                rows={3}
                placeholder="Tell us about specific dental symptoms or preferred appointment time..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 type-ui-control text-gray-900 focus:bg-white focus:border-[#74267A] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#5C205E] active:bg-[#74267A] text-white type-ui-control font-bold shadow-md transition-colors min-h-[48px]"
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* 5. PATIENT FAQ ACCORDION SECTION */}
      <section className="px-4">
        <div className="bg-gray-50 rounded-3xl border border-gray-200/80 p-5 space-y-4">
          <div className="space-y-1">
            <span className="type-eyebrow block">
              Patient Information
            </span>
            <h2 className="type-section-title">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 active:bg-gray-50 min-h-[48px]"
                  >
                    <span className="type-sub-title text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 bg-[#FCF5FE] text-[#74267A]"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 type-body text-gray-700 font-normal leading-relaxed border-t border-gray-100 pt-3">
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
  );
}
