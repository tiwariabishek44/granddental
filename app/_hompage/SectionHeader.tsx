"use client";

import React from "react";

export interface SectionHeaderProps {
  number: string;
  label: string;
  title: React.ReactNode;
  description?: string;
  accent?: React.ReactNode;
  className?: string;
}

export default function SectionHeader({
  number,
  label,
  title,
  description,
  accent,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${className}`}>
      <div className="mb-5 flex items-center justify-between">
        <span className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium tracking-wide text-gray-700 shadow-sm">
          {label}
        </span>

        <span className="font-mono text-xs font-medium text-gray-400">
          ({number})
        </span>
      </div>

      <div className="mb-8 h-px w-full bg-gray-200" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <h2 className="max-w-3xl text-3xl font-medium leading-[1.1] tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
          {title}
          {accent}
        </h2>

        {description && (
          <p className="max-w-xl text-sm leading-7 text-gray-600 sm:text-base lg:pt-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
