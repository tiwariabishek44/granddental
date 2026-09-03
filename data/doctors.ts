import type { StaticImageData } from "next/image";

import doctor1 from "../assets/doctors/doctor1.png"
import doctor2 from "../assets/doctors/doctor_3.jpeg_2K_202609012055.jpeg"
import doctor3 from "../assets/doctors/doctr_4.jpeg_202609012056.jpeg"
import doctor4 from "../assets/doctors/doctor_5.jpeg_202609012057.jpeg"
import doctorAnuna from "../assets/doctors/dr_anuna.jpg"



export interface Doctor {
  id: string;
  name: string;
  title: string;
  role: string;
  nmc: string;
  category: "implants" | "ortho" | "cosmetic" | "endo" | "perio" | "pediatric" | "general";
  experience: string;
  image: StaticImageData | string;
  education: string;
  certifications: string[];
  bio: string;
  longBio: string;
  specialties: string[];
  keyProcedures: { name: string; desc: string }[];
  schedule: string;
  rating: string;
  reviewsCount: number;
  tint: string;
  badgeColor: string;
}

export const doctorsData: Doctor[] = [
  {
    id: "dr-anuna-lama",
    name: "Dr. Anuna Lama",
    title: "Dental Surgeon",
    role: "Dental Surgeon",
    nmc: "NMC: 28952",
    category: "cosmetic",
    experience: "13+ Years Experience",
    image: doctorAnuna,
    education: "BDS, MDS (Prosthodontics & Crown-Bridge)",
    certifications: [
      "Specialist in Dental Crowns, Bridges & Dentures",
      "Expert in High-Strength Zirconia Restorations",
      "Full Smile Function & Chewing Restoration",
    ],
    bio: "Specializing in durable Zirconia crowns, fixed bridges, and comfortable dentures designed to restore natural chewing strength and appearance.",
    longBio: "With over 13 years of clinical practice, Dr. Anuna Lama crafts dental crowns and tooth replacements tailored to fit your bite naturally. She works with high-precision dental ceramics to ensure every restoration feels completely comfortable and looks natural.",
    specialties: ["Zirconia Crowns", "Fixed Dental Bridges", "Full & Partial Dentures", "Smile Restoration", "Tooth Replacement"],
    keyProcedures: [
      { name: "Custom Zirconia & Ceramic Crowns", desc: "Strong, lifelike tooth caps that protect fractured or treated teeth." },
      { name: "Fixed Bridges for Missing Teeth", desc: "Securely anchored replacements to fill gaps and restore chewing ability." },
      { name: "Comfortable Dentures", desc: "Custom-fitted full or partial prosthetics designed for natural speech and eating." },
    ],
    schedule: "Mon, Wed, Thu, Fri (9:00 AM – 5:30 PM)",
    rating: "4.96",
    reviewsCount: 310,
    tint: "#FDF0F2",
    badgeColor: "#E11D48",
  },
  {
    id: "dr-mukunda-jha",
    name: "Dr. Mukunda Jha",
    title: "Orthodontist",
    role: "Orthodontist",
    nmc: "NMC: 17171",
    category: "ortho",
    experience: "12+ Years Experience",
    image: doctor1,
    education: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    certifications: [
      "Specialist Orthodontist & Teeth Alignment",
      "Metal & Ceramic Braces Specialist",
      "Clear Aligners & Malocclusion Care",
    ],
    bio: "Specializing in metal braces, ceramic braces, and clear aligners to create perfectly aligned, confident smiles for patients of all ages.",
    longBio: "Dr. Mukunda Jha brings extensive clinical experience in orthodontic diagnosis and smile alignment. He creates custom treatment plans using modern braces and clear aligners to achieve comfortable, aesthetic, and lasting smile results.",
    specialties: ["Metal & Ceramic Braces", "Clear Aligners", "Bite Correction", "Crowded Teeth Alignment", "Retainers"],
    keyProcedures: [
      { name: "Precision Metal & Ceramic Braces", desc: "Effective alignment for complex bite issues and crowded teeth." },
      { name: "Clear Aligner Therapy", desc: "Discreet, removable custom aligners for modern smile straightening." },
      { name: "Preventive & Interceptive Orthodontics", desc: "Guiding proper jaw growth and tooth eruption in young patients." },
    ],
    schedule: "Sun, Tue, Thu (9:00 AM – 5:30 PM)",
    rating: "4.98",
    reviewsCount: 380,
    tint: "#F9EBFC",
    badgeColor: "#74267A",
  },
  {
    id: "dr-shekhar-das",
    name: "Dr. Shekhar Das",
    title: "Dental Surgeon",
    role: "Dental Surgeon",
    nmc: "NMC: 33999",
    category: "endo",
    experience: "11+ Years Experience",
    image: doctor2,
    education: "BDS (Bachelor of Dental Surgery)",
    certifications: [
      "Painless Root Canal Specialist",
      "Natural Tooth Preservation",
      "Composite Tooth Fillings & Restoration",
    ],
    bio: "Focused on saving infected and damaged teeth with gentle, pain-free root canals and seamless natural tooth fillings.",
    longBio: "Dr. Shekhar Das is dedicated to preserving your natural teeth whenever possible. Using modern techniques and gentle numbing, he turns root canal treatments into smooth, comfortable procedures that provide immediate relief from tooth pain.",
    specialties: ["Painless Root Canal (RCT)", "Natural Tooth Preservation", "Tooth-Colored Fillings", "Emergency Toothache Care", "Tooth Repair"],
    keyProcedures: [
      { name: "Single-Visit Painless Root Canal", desc: "Gentle cleaning and sealing of infected teeth to eliminate pain and save the tooth." },
      { name: "Tooth-Colored Aesthetic Fillings", desc: "Seamless composite restorations that blend invisibly with your natural enamel." },
      { name: "Chipped & Broken Tooth Restoration", desc: "Rebuilding damaged tooth structure for strength and a natural look." },
    ],
    schedule: "Sun, Mon, Tue, Thu (8:30 AM – 5:00 PM)",
    rating: "4.99",
    reviewsCount: 420,
    tint: "#FCF5FE",
    badgeColor: "#922F9C",
  },
  {
    id: "dr-shrisha-pant",
    name: "Dr. Shrisha Pant",
    title: "Dental Surgeon",
    role: "Dental Surgeon",
    nmc: "NMC: 31052",
    category: "general",
    experience: "8+ Years Experience",
    image: doctor4,
    education: "BDS (Bachelor of Dental Surgery)",
    certifications: [
      "Comprehensive Dental Care & Diagnostics",
      "Preventive Dentistry & Tooth Cleaning",
      "Gentle Family Dental Care",
    ],
    bio: "Dedicated to creating a warm, friendly environment for family dental care, tooth cleanings, checkups, and comfortable dental visits.",
    longBio: "Dr. Shrisha Pant believes every dental visit should be positive and reassuring. Her gentle approach helps patients feel at ease, building healthy oral hygiene habits and confident smiles without stress.",
    specialties: ["Dental Checkups", "Scaling & Polishing", "Tooth Fillings", "Gentle Extraction", "Family Dental Care"],
    keyProcedures: [
      { name: "Comprehensive Dental Checkups", desc: "Gentle oral examination and digital X-ray diagnostics." },
      { name: "Ultrasonic Scaling & Polishing", desc: "Thorough plaque removal for fresh breath and healthy gums." },
      { name: "Gentle Dental Fillings & Repair", desc: "Quick and painless composite restorations for healthy teeth." },
    ],
    schedule: "Sun, Tue, Wed, Fri (8:30 AM – 4:30 PM)",
    rating: "4.99",
    reviewsCount: 390,
    tint: "#FCF5FE",
    badgeColor: "#4F46E5",
  },
];