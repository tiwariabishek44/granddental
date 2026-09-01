"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  Phone,
  Calendar as CalendarIcon,
  Clock,
  User,
  Stethoscope,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useAppointmentModal } from "@/context/AppointmentModalContext";
import { servicesData } from "@/data/services";
import { doctorsData } from "@/data/doctors";

export default function AppointmentModal() {
  const { isOpen, options, closeAppointmentModal } = useAppointmentModal();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [preferredDoctor, setPreferredDoctor] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredSlot, setPreferredSlot] = useState("Morning (8:00 AM – 12:00 PM)");
  const [notes, setNotes] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Sync pre-selected options if provided
  useEffect(() => {
    if (isOpen) {
      if (options.treatment) {
        setTreatment(options.treatment);
      } else {
        setTreatment("General Dental Checkup & Consultation");
      }

      if (options.doctor) {
        setPreferredDoctor(options.doctor);
      } else {
        setPreferredDoctor("Any Available Specialist");
      }

      // Default preferred date to tomorrow's date formatted as YYYY-MM-DD
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const yyyy = tomorrow.getFullYear();
      const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
      const dd = String(tomorrow.getDate()).padStart(2, "0");
      setPreferredDate(`${yyyy}-${mm}-${dd}`);
      setErrorMessage("");
    }
  }, [isOpen, options]);

  // Lock background scroll on modal open
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

  // Handle ESC key to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeAppointmentModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeAppointmentModal]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!phone.trim() || phone.replace(/\D/g, "").length < 8) {
      setErrorMessage("Please enter a valid phone number (at least 8–10 digits).");
      return;
    }

    // Format WhatsApp Message
    const formattedMessage = `🦷 *New Appointment Request — Grand Dental Clinic*
────────────────────────────
👤 *Patient Name:* ${fullName.trim()}
📞 *Phone:* ${phone.trim()}
🩺 *Treatment / Concern:* ${treatment || "General Consultation"}
👨‍⚕️ *Doctor Preference:* ${preferredDoctor || "Any Available Specialist"}
📅 *Preferred Date:* ${preferredDate || "Earliest Available"}
⏰ *Preferred Time Slot:* ${preferredSlot}
${notes.trim() ? `📝 *Patient Notes:* ${notes.trim()}` : ""}
────────────────────────────
_Sent via granddentalclinic.com_`;

    const whatsappUrl = `https://wa.me/9779841322789?text=${encodeURIComponent(formattedMessage)}`;

    // Open WhatsApp in new tab / app
    window.open(whatsappUrl, "_blank");

    // Close modal after dispatch
    closeAppointmentModal();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 transition-all duration-300"
    >
      {/* Dark Blur Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
        onClick={closeAppointmentModal}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full sm:max-w-xl max-h-[92vh] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300 border border-gray-100 font-sans">
        {/* Modal Header */}
        <div className="px-5 sm:px-6 py-4 bg-gradient-to-r from-[#FCF5FE] to-[#F7E6FA] border-b border-[#F3D5F9] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full border border-[#F3D5F9] bg-white p-0.5 shadow-2xs flex items-center justify-center shrink-0">
              <Image
                src="/logo.png"
                alt="Grand Dental Clinic"
                width={36}
                height={36}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="type-eyebrow text-[#74267A]">
                  Grand Dental Clinic
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                Book an Appointment
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={closeAppointmentModal}
            className="w-9 h-9 rounded-full bg-white text-gray-600 hover:text-gray-900 border border-gray-200/80 flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
            aria-label="Close Appointment Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {/* Error Alert */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm font-medium flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Patient Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="type-meta font-semibold text-gray-700 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#74267A]" />
                <span>Full Name *</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Pooja Sharma"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#74267A] focus:ring-2 focus:ring-[#F7E6FA] text-sm text-gray-900 bg-white outline-hidden transition-all"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-1">
              <label className="type-meta font-semibold text-gray-700 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#74267A]" />
                <span>Phone Number *</span>
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9841XXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#74267A] focus:ring-2 focus:ring-[#F7E6FA] text-sm text-gray-900 bg-white outline-hidden transition-all"
              />
            </div>
          </div>

          {/* Treatment Selection Dropdown */}
          <div className="space-y-1">
            <label className="type-meta font-semibold text-gray-700 flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5 text-[#74267A]" />
              <span>Select Treatment / Concern</span>
            </label>
            <select
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#74267A] focus:ring-2 focus:ring-[#F7E6FA] text-sm text-gray-900 bg-white outline-hidden transition-all cursor-pointer"
            >
              <option value="General Dental Checkup & Consultation">General Dental Checkup &amp; Consultation</option>
              <option value="Teeth Cleaning & Ultrasonic Scaling">Teeth Cleaning &amp; Ultrasonic Scaling</option>
              <option value="Painless Root Canal Treatment (RCT)">Painless Root Canal Treatment (RCT)</option>
              <option value="Permanent Dental Implants">Permanent Dental Implants</option>
              <option value="Clear Invisible Aligners / Braces">Clear Invisible Aligners / Braces</option>
              <option value="Tooth-Colored Aesthetic Fillings">Tooth-Colored Aesthetic Fillings</option>
              <option value="Professional Teeth Whitening">Professional Teeth Whitening</option>
              <option value="Crowns & Bridges Replacement">Crowns &amp; Bridges Replacement</option>
              <option value="Emergency Toothache Relief">Emergency Toothache Relief</option>
              <option value="Paediatric / Kids Dental Care">Paediatric / Kids Dental Care</option>
              {servicesData.map((svc) => (
                <option key={svc.id} value={svc.title}>
                  {svc.title}
                </option>
              ))}
            </select>
          </div>

          {/* Doctor Preference & Preferred Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Preferred Doctor */}
            <div className="space-y-1">
              <label className="type-meta font-semibold text-gray-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#74267A]" />
                <span>Preferred Doctor (Optional)</span>
              </label>
              <select
                value={preferredDoctor}
                onChange={(e) => setPreferredDoctor(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#74267A] focus:ring-2 focus:ring-[#F7E6FA] text-sm text-gray-900 bg-white outline-hidden transition-all cursor-pointer"
              >
                <option value="Any Available Specialist">Any Available Specialist</option>
                {doctorsData.map((doc) => (
                  <option key={doc.id} value={doc.name}>
                    {doc.name} ({doc.role.split(" &")[0]})
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Date */}
            <div className="space-y-1">
              <label className="type-meta font-semibold text-gray-700 flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-[#74267A]" />
                <span>Preferred Date</span>
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#74267A] focus:ring-2 focus:ring-[#F7E6FA] text-sm text-gray-900 bg-white outline-hidden transition-all"
              />
            </div>
          </div>

          {/* Preferred Time Slot */}
          <div className="space-y-1">
            <label className="type-meta font-semibold text-gray-700 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#74267A]" />
              <span>Preferred Time Slot</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                "Morning (8 AM – 12 PM)",
                "Afternoon (12 PM – 4 PM)",
                "Evening (4 PM – 6 PM)",
              ].map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setPreferredSlot(slot)}
                  className={`py-2 px-2 rounded-xl text-xs font-semibold text-center transition-all border ${
                    preferredSlot === slot
                      ? "bg-[#5C205E] text-white border-[#5C205E] shadow-2xs"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {slot.split(" ")[0]}
                  <span className="block text-[10px] font-normal opacity-80 mt-0.5">
                    {slot.split("(")[1]?.replace(")", "")}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Additional Notes */}
          <div className="space-y-1">
            <label className="type-meta font-semibold text-gray-700 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#74267A]" />
              <span>Message / Chief Complaint (Optional)</span>
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Mild pain in back tooth, looking for a consult on braces..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-gray-200 focus:border-[#74267A] focus:ring-2 focus:ring-[#F7E6FA] text-sm text-gray-900 bg-white outline-hidden transition-all resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm sm:text-base shadow-md transition-all cursor-pointer min-h-[48px]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Send Request via WhatsApp</span>
            </button>

            {/* Direct Helpline Alternative */}
            <div className="flex items-center justify-center gap-2 pt-1 text-xs text-gray-500">
              <span>Or call reception directly:</span>
              <a
                href="tel:014950352"
                className="font-bold text-[#5C205E] hover:underline flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-[#74267A]" />
                <span>01-4950352</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
