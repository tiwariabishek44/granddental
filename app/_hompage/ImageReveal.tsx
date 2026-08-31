"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { StaticImageData } from "next/image";

export interface ImageRevealProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function ImageReveal({
  src,
  alt,
  className = "",
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const imageSrc = typeof src === "string" ? src : src.src;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { scale: 1.08, opacity: 0 }}
      whileInView={shouldReduceMotion ? {} : { scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden ${className}`}
    >
      <img
        src={imageSrc}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </motion.div>
  );
}
