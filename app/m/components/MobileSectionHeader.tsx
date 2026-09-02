"use client";

import React from "react";

interface MobileSectionHeaderProps {
  eyebrow: string;
  title: string;
  gradientWord?: string;
  subtitle?: string;
  className?: string;
}

export default function MobileSectionHeader({
  eyebrow,
  title,
  gradientWord,
  subtitle,
  className = "",
}: MobileSectionHeaderProps) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B3B8B] px-3 py-1 rounded-full bg-[#F0F7FF] border border-[#DBEAFE] inline-block">
        {eyebrow}
      </span>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
        {title}{" "}
        {gradientWord && (
          <span
            className="font-bold text-transparent"
            style={{
              background: "linear-gradient(246.94deg, #388EE8 -28.81%, #0B3B8B 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            {gradientWord}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-xs sm:text-sm text-gray-700 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
