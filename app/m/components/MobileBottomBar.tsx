"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200/90 px-3 py-2 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[calc(0.5rem+env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Quick Phone Call Button */}
        <a
          href="tel:9861161359"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gray-100/90 active:bg-gray-200 text-gray-900 text-xs sm:text-[13px] font-bold transition-colors"
          aria-label="Call Clinic at 9861161359"
        >
          <Phone className="w-4 h-4 text-[#0B3B8B] mb-0.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp Direct Chat Button */}
        <a
          href="https://wa.me/9779861161359?text=Hello%20Grand%20Dental,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 active:bg-emerald-100 text-emerald-900 text-xs sm:text-[13px] font-bold border border-emerald-200/80 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Primary Book Consultation CTA */}
        <Link
          href="/appointment"
          className="flex-[2] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#0B3B8B] active:bg-[#134FB0] text-white text-xs sm:text-sm font-bold shadow-sm transition-all text-center tracking-tight"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Visit</span>
        </Link>
      </div>
    </aside>
  );
}
