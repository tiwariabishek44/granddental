"use client";

import React from "react";
import Image from "next/image";
import { Star, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const stories = [
    {
      id: "shrestha",
      patient: "Sunil Shrestha",
      location: "Swoyambhu, Kathmandu",
      procedure: "Painless Root Canal & Zirconia Crown",
      doctor: "Dr. Aarati Joshi",
      timeframe: "2 Visits",
      quote:
        "I was genuinely terrified of having a root canal done. But the doctor made the entire procedure completely pain-free and comfortable. The crown looks natural, and I can eat normally with zero sensitivity.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: "adhikari",
      patient: "Pooja Adhikari",
      location: "Nagarjun, Kathmandu",
      procedure: "Orthodontic Braces Alignment",
      doctor: "Dr. Sneha Rajbhandari",
      timeframe: "14 Months Treatment",
      quote:
        "Came to Grand Dental to fix my crooked front teeth. Dr. Sneha was extremely patient and attentive during every monthly checkup. My smile has transformed completely straight and I feel so confident now.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: "tamang",
      patient: "Bikash Tamang",
      location: "Balaju, Kathmandu",
      procedure: "Ultrasonic Scaling & Composite Restoration",
      doctor: "Dr. Saurav Pradhan",
      timeframe: "Single Visit",
      quote:
        "The cleanliness of the clinic and modern equipment put me at ease right away. The deep cleaning and tooth-colored cavity filling were done with great precision and care. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-gray-100 space-y-8 sm:space-y-10">
      {/* Clean 2-Column Section Header */}
      <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 md:items-start md:gap-12 md:text-left">
        <div className="space-y-2">
          <span className="type-eyebrow">
            Patient Experiences
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-gray-900">
            Real Smiles,{" "}
            <span
              className="font-medium text-transparent"
              style={{
                background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              Honest Experiences
            </span>
          </h2>
        </div>
        <p className="type-lead md:pt-4">
          Patient trust and comfort are at the heart of everything we do. Read what patients across Kathmandu have to say about their treatment journey at Grand Dental.
        </p>
      </div>

      {/* 3 Rich Editorial Patient Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {stories.map((story) => (
          <div
            key={story.id}
            className="rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-5"
          >
            {/* Top Rating & Quote */}
            <div className="space-y-3.5">
              <div className="flex items-center gap-1">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-base sm:text-[17px] text-gray-800 leading-relaxed font-normal">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
            </div>

            {/* Procedure & Patient Attribution */}
            <div className="pt-4 border-t border-gray-100 space-y-3.5">
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200 shadow-2xs shrink-0">
                  <Image
                    src={story.avatar}
                    alt={story.patient}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">{story.patient}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-normal">{story.location}</p>
                </div>
              </div>

              <div className="rounded-2xl bg-[#FCF5FE]/60 p-3.5 text-xs sm:text-sm space-y-1.5 border border-[#F3D5F9]/60">
                <div className="flex items-center justify-between text-gray-900 font-semibold">
                  <span>{story.procedure}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-gray-600 font-normal flex items-center justify-between">
                  <span>Treated by {story.doctor}</span>
                  <span className="text-xs text-gray-500 font-medium">{story.timeframe}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
