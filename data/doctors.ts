import type { StaticImageData } from "next/image";

import drPrabinShresthaImg from "../assets/doctors/Doctor_standing_with_crossed_arms_202608292327.jpeg";
import drSnehaRajbhandariImg from "../assets/doctors/Female_doctor_standing_in_clinic_202608292326.jpeg";
import drAaratiJoshiImg from "../assets/doctors/Female_doctor_holding_clipboard_202608292327.jpeg";
import drRoshanKarkiImg from "../assets/doctors/Doctor_explaining_dental_procedure_202608292326.jpeg";
import drPujaThapaImg from "../assets/doctors/Doctor_smiling_in_clinic_202608292326.jpeg";
import drSauravPradhanImg from "../assets/doctors/Doctor_standing_with_crossed_arms_202608292327.jpeg";

export interface Doctor {
  id: string;
  name: string;
  title: string;
  role: string;
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
    id: "dr-prabin-shrestha",
    name: "Dr. Prabin Shrestha",
    title: "BDS, MDS (Oral & Maxillofacial Surgery)",
    role: "Oral Surgeon & Dental Implant Specialist",
    category: "implants",
    experience: "12+ Years Experience",
    image: drPrabinShresthaImg,
    education: "BDS, MDS (Oral & Maxillofacial Surgery)",
    certifications: [
      "Specialist Oral & Maxillofacial Surgeon",
      "Advanced Training in Dental Implantology",
      "Expert in Gentle Wisdom Tooth Removal",
    ],
    bio: "Specializing in permanent dental implants, gentle wisdom tooth removals, and restorative surgical care with patient comfort at the center.",
    longBio: "With over 12 years of specialized surgical practice, Dr. Prabin Shrestha focuses on smooth, comfortable dental implants and gentle extractions. He takes time to walk patients through the process step-by-step, helping restore full chewing ability and smile confidence with minimal downtime.",
    specialties: ["Dental Implants", "Wisdom Tooth Removal", "Gentle Extractions", "Bone Preservation", "Full-Arch Teeth Replacement"],
    keyProcedures: [
      { name: "Single & Full-Arch Dental Implants", desc: "Durable, natural-looking permanent tooth replacements placed with gentle care." },
      { name: "Gentle Wisdom Tooth Extractions", desc: "Smooth removal of painful or impacted teeth with minimal swelling and fast recovery." },
      { name: "Jawbone Support & Preservation", desc: "Strengthening the foundation to ensure long-term stability for replacement teeth." },
    ],
    schedule: "Sun, Tue, Thu (9:00 AM – 5:30 PM)",
    rating: "4.98",
    reviewsCount: 380,
    tint: "#F9EBFC",
    badgeColor: "#74267A",
  },
  {
    id: "dr-sneha-rajbhandari",
    name: "Dr. Sneha Rajbhandari",
    title: "BDS, MDS (Orthodontics)",
    role: "Orthodontist & Smile Alignment Specialist",
    category: "ortho",
    experience: "10+ Years Experience",
    image: drSnehaRajbhandariImg,
    education: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    certifications: [
      "Specialist in Orthodontics & Braces",
      "Certified Provider for Clear Invisible Aligners",
      "Expert in Teen & Adult Smile Alignment",
    ],
    bio: "Dedicated to correcting crooked teeth, gaps, and bite issues using comfortable clear aligners, discreet ceramic brackets, and traditional braces.",
    longBio: "Dr. Sneha Rajbhandari is known for her patient and meticulous approach to orthodontic care. Whether guiding a teenager through braces or helping an adult achieve a straight smile with invisible aligners, she designs personalized plans that fit your daily lifestyle.",
    specialties: ["Clear Invisible Aligners", "Ceramic Brackets", "Metal Braces", "Gap Correction", "Bite Alignment"],
    keyProcedures: [
      { name: "Clear Invisible Aligners", desc: "Custom removable transparent trays that straighten teeth discreetly without metal wires." },
      { name: "Ceramic Tooth-Colored Braces", desc: "Subtle, aesthetic brackets designed to blend naturally with your teeth." },
      { name: "Traditional Braces", desc: "Reliable, time-tested smile alignment for crowding, spacing, and bite correction." },
    ],
    schedule: "Sun, Wed, Fri (9:00 AM – 6:00 PM)",
    rating: "4.97",
    reviewsCount: 340,
    tint: "#EEEEFF",
    badgeColor: "#4F46E5",
  },
  {
    id: "dr-aarati-joshi",
    name: "Dr. Aarati Joshi",
    title: "BDS, MDS (Endodontics & Restorative Dentistry)",
    role: "Root Canal & Tooth Preservation Specialist",
    category: "endo",
    experience: "11+ Years Experience",
    image: drAaratiJoshiImg,
    education: "BDS, MDS (Conservative Dentistry & Endodontics)",
    certifications: [
      "Specialist Endodontist (Root Canal Care)",
      "Painless Single-Visit Treatment Specialist",
      "Advanced Natural Tooth Bonding & Fillings",
    ],
    bio: "Focused on saving infected and damaged teeth with gentle, pain-free root canals and seamless natural tooth fillings.",
    longBio: "Dr. Aarati Joshi is dedicated to preserving your natural teeth whenever possible. Using modern techniques and gentle numbing, she turns intimidating root canal treatments into smooth, comfortable procedures that provide immediate relief from tooth pain.",
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
    id: "dr-roshan-karki",
    name: "Dr. Roshan Karki",
    title: "BDS, MDS (Prosthodontics)",
    role: "Crown, Bridge & Tooth Replacement Specialist",
    category: "cosmetic",
    experience: "13+ Years Experience",
    image: drRoshanKarkiImg,
    education: "BDS, MDS (Prosthodontics & Crown-Bridge)",
    certifications: [
      "Specialist in Dental Crowns, Bridges & Dentures",
      "Expert in High-Strength Zirconia Restorations",
      "Full Smile Function & Chewing Restoration",
    ],
    bio: "Specializing in durable Zirconia crowns, fixed bridges, and comfortable dentures designed to restore natural chewing strength and appearance.",
    longBio: "With over 13 years of clinical practice, Dr. Roshan Karki crafts dental crowns and tooth replacements tailored to fit your bite naturally. He works with high-precision dental ceramics to ensure every restoration feels completely comfortable and looks natural.",
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
    id: "dr-puja-thapa",
    name: "Dr. Puja Thapa",
    title: "BDS, General & Paediatric Dentistry",
    role: "Family & Child Dental Surgeon",
    category: "pediatric",
    experience: "8+ Years Experience",
    image: drPujaThapaImg,
    education: "BDS (Bachelor of Dental Surgery)",
    certifications: [
      "Special Interest in Children's Oral Care",
      "Preventive Dentistry & Cavity Protection",
      "Gentle Family Dental Care",
    ],
    bio: "Dedicated to creating a warm, friendly environment for children, toddlers, and families, ensuring comfortable and fear-free dental visits.",
    longBio: "Dr. Puja Thapa believes early dental visits should be positive and reassuring. Her gentle and cheerful approach helps children feel at ease right away, building healthy oral hygiene habits and confident smiles without tears or stress.",
    specialties: ["Children's Dental Checkups", "Cavity Prevention & Fluoride", "Milk Tooth Fillings", "Gentle Cleaning", "Family Dental Advice"],
    keyProcedures: [
      { name: "Fun, Child-Friendly Checkups", desc: "Gentle dental examinations designed to keep kids relaxed and curious." },
      { name: "Preventive Fluoride & Sealants", desc: "Protective shield applied to young teeth to prevent cavities from forming." },
      { name: "Gentle Primary Tooth Care", desc: "Quick and painless tooth fillings tailored specifically for young children." },
    ],
    schedule: "Sun, Tue, Wed, Fri (8:30 AM – 4:30 PM)",
    rating: "4.99",
    reviewsCount: 390,
    tint: "#FCF5FE",
    badgeColor: "#4F46E5",
  },
  {
    id: "dr-saurav-pradhan",
    name: "Dr. Saurav Pradhan",
    title: "BDS, General & Aesthetic Dentistry",
    role: "Preventive & Aesthetic Dental Surgeon",
    category: "general",
    experience: "9+ Years Experience",
    image: drSauravPradhanImg,
    education: "BDS (Bachelor of Dental Surgery)",
    certifications: [
      "Specialist in Ultrasonic Teeth Cleaning",
      "Gum Health & Preventive Care",
      "Safe Aesthetic Teeth Whitening",
    ],
    bio: "Providing thorough oral checkups, gentle tartar and stain removal, and safe teeth whitening for clean, healthy smiles.",
    longBio: "Dr. Saurav Pradhan emphasizes routine preventive care to catch dental issues early before they cause pain. He delivers thorough ultrasonic cleanings to clear tartar and tea stains, providing clear and practical advice for everyday oral care.",
    specialties: ["Teeth Cleaning & Polishing", "Safe Teeth Whitening", "Gum Health Checks", "Digital X-Ray Assessment", "Routine Consultations"],
    keyProcedures: [
      { name: "Ultrasonic Scaling & Polishing", desc: "Smooth cleaning to remove hard tartar, plaque, and stubborn tea or tobacco stains." },
      { name: "Professional In-Clinic Whitening", desc: "Safe, effective brightening for stained or yellowed enamel." },
      { name: "Complete Oral Health Screening", desc: "Detailed dental examination with honest, practical guidance for daily care." },
    ],
    schedule: "Sun to Fri (8:00 AM – 5:00 PM)",
    rating: "4.95",
    reviewsCount: 280,
    tint: "#EEEEFF",
    badgeColor: "#74267A",
  },
];