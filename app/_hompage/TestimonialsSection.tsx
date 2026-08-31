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
      procedure: "Root Canal & Crown",
      doctor: "Dr. Aarati Joshi",
      quote:
        "I had put off getting my root canal for months out of fear. Dr. Aarati made the whole procedure surprisingly easy and painless. I was back to eating comfortably the next day.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: "adhikari",
      patient: "Pooja Adhikari",
      location: "Nagarjun, Kathmandu",
      procedure: "Braces Alignment",
      doctor: "Dr. Sneha Rajbhandari",
      timeframe: "14 Months",
      quote:
        "What stood out to me was the patience during every checkup. Dr. Sneha explained each adjustment clearly, and my teeth look completely aligned today. Truly happy with my smile.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: "tamang",
      patient: "Bikash Tamang",
      location: "Balaju, Kathmandu",
      procedure: "Deep Cleaning & Filling",
      doctor: "Dr. Saurav Pradhan",
      timeframe: "Single Visit",
      quote:
        "Very clean setup and no unnecessary procedures recommended. The doctor took time to show me what needed fixing and finished the filling smoothly without any sensitivity.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16 border-b border-gray-100 space-y-10">
      {/* Responsive Section Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-6 lg:gap-12 text-left">
        <div className="md:col-span-6 space-y-2">
          <span className="type-eyebrow">
            Patient Stories
          </span>
          <h2 className="text-3xl lg:text-4xl font-medium leading-tight text-gray-900">
            Hear directly from people{" "}
            <span
              className="font-medium text-transparent"
              style={{
                background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              who trusted us with their care.
            </span>
          </h2>
        </div>
        <p className="md:col-span-6 type-lead text-gray-600 text-base lg:text-lg leading-relaxed md:pt-4">
          From first-time checkups to complete dental treatments, see how our focus on comfort and honest advice makes every visit stress-free.
        </p>
      </div>

      {/* 3 Editorial Patient Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {stories.map((story) => (
          <div
            key={story.id}
            className="rounded-3xl border border-gray-200/80 bg-white p-7 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-6"
          >
            {/* Top Rating & Quote */}
            <div className="space-y-3.5">
              <div className="flex items-center gap-1">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-[16px] text-gray-800 leading-relaxed font-normal">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
            </div>

            {/* Procedure & Patient Details */}
            <div className="pt-4 border-t border-gray-100 space-y-3.5">
              <div className="flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gray-200 shadow-2xs shrink-0">
                  <Image
                    src={story.avatar}
                    alt={story.patient}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 leading-tight">{story.patient}</h4>
                  <p className="text-xs text-gray-500 font-normal mt-0.5">{story.location}</p>
                </div>
              </div>



            </div>
          </div>
        ))}
      </div>
    </section>
  );
}