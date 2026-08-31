"use client";

import React from "react";
import Image from "next/image";
import { Star, CheckCircle2 } from "lucide-react";

export default function TestimonialsMobile() {
  const stories = [
    {
      id: "shrestha",
      patient: "Sunil Shrestha",
      location: "Swoyambhu, Kathmandu",
      quote:
        "I had put off getting my root canal for months out of fear. Dr. Aarati made the whole procedure surprisingly easy and painless. I was back to eating comfortably the next day.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: "adhikari",
      patient: "Pooja Adhikari",
      location: "Nagarjun, Kathmandu",
      quote:
        "What stood out to me was the patience during every checkup. Dr. Sneha explained each adjustment clearly, and my teeth look completely aligned today. Truly happy with my smile.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: "tamang",
      patient: "Bikash Tamang",
      location: "Balaju, Kathmandu",
      quote:
        "Very clean setup and no unnecessary procedures recommended. The doctor took time to show me what needed fixing and finished the filling smoothly without any sensitivity.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-10 px-4 border-b border-gray-100 bg-[#FCF5FE]/30 sm:hidden space-y-6">
      {/* Header Matching Desktop Version */}
      <div className="space-y-2">
        <span className="type-eyebrow">
          Patient Stories
        </span>

        <h2 className="type-section-title">
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

        <p className="type-body font-normal">
          From first-time checkups to complete dental treatments, see how our focus on comfort and honest advice makes every visit stress-free.
        </p>
      </div>

      {/* 3 Editorial Patient Review Cards (Horizontal Snap Flow) */}
      <div className="flex gap-4 overflow-x-auto pb-3 -mr-4 pr-4 no-scrollbar snap-x snap-mandatory">
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex-shrink-0 snap-start w-[290px] rounded-3xl border border-gray-200/80 bg-white p-6 shadow-xs flex flex-col justify-between space-y-5"
          >
            {/* Top Rating & Quote */}
            <div className="space-y-3">
              <div className="flex items-center gap-1">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="type-body text-gray-800 leading-relaxed font-normal text-sm sm:text-base">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
            </div>

            {/* Patient Attribution */}
            <div className="pt-3 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gray-200 shadow-2xs shrink-0">
                  <Image
                    src={story.avatar}
                    alt={story.patient}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">{story.patient}</h4>
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
