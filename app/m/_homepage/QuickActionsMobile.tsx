"use client";

import React from "react";
import Link from "next/link";
import { Zap, Sparkles, Smile, ShieldAlert, HeartHandshake } from "lucide-react";

export default function QuickActionsMobile() {
  const quickActions = [
    {
      label: "Toothache Relief",
      subtitle: "Painless RCT",
      href: "/services/root-canal",
      icon: ShieldAlert,
      badge: "Emergency",
      badgeColor: "bg-red-500 text-white",
    },
    {
      label: "Clean & Polish",
      subtitle: "Scaling & Tartar",
      href: "/services/scaling-polishing",
      icon: Sparkles,
      badge: "Popular",
      badgeColor: "bg-[#0B3B8B] text-white",
    },
    {
      label: "Braces & Aligners",
      subtitle: "Smile Alignment",
      href: "/services/clear-aligners",
      icon: Smile,
      badge: "Invisible",
      badgeColor: "bg-indigo-600 text-white",
    },
    {
      label: "Dental Implants",
      subtitle: "Titanium Root",
      href: "/services/dental-implants",
      icon: Zap,
      badge: "Permanent",
      badgeColor: "bg-emerald-600 text-white",
    },
    {
      label: "Kids Dentistry",
      subtitle: "Gentle Child Care",
      href: "/services/paediatric-dentistry",
      icon: HeartHandshake,
      badge: "Gentle",
      badgeColor: "bg-amber-600 text-white",
    },
  ];

  return (
    <section className="px-4 py-2 sm:hidden">
      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2.5 flex items-center justify-between">
        <span>Quick Treatment Shortcuts</span>
        <span className="text-[10px] text-[#0B3B8B] font-semibold">Swipe &rarr;</span>
      </div>

      <div className="flex gap-2.5 overflow-x-auto pb-2 -mx-4 px-4 no-scrollbar snap-x snap-mandatory">
        {quickActions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex-shrink-0 snap-start w-36 rounded-2xl bg-white border border-gray-200/90 p-3 shadow-2xs active:bg-[#F0F7FF] active:border-[#DBEAFE] transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-xl bg-[#F0F7FF] border border-[#DBEAFE] flex items-center justify-center text-[#0B3B8B]">
                <action.icon className="w-4 h-4" />
              </div>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${action.badgeColor}`}>
                {action.badge}
              </span>
            </div>

            <div className="font-bold text-xs text-gray-900 leading-tight line-clamp-1">
              {action.label}
            </div>
            <div className="text-[10px] text-gray-500 font-light mt-0.5 line-clamp-1">
              {action.subtitle}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
