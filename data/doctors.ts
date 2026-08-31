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
    role: "Lead Dental Implantologist & Oral Surgeon",
    category: "implants",
    experience: "12+ Years",
    image: drPrabinShresthaImg,
    education: "BDS, MDS (Oral & Maxillofacial Surgery) • NMC Registered Specialist",
    certifications: [
      "Nepal Medical Council (NMC) Certified Specialist",
      "Fellowship in Advanced Dental Implantology",
      "Specialist in Atraumatic Surgical Tooth Extractions",
    ],
    bio: "Specializing in single and full-arch dental implants, surgical wisdom tooth extractions, and restorative bone preservation with gentle chairside care.",
    longBio: "With over 12 years of specialized surgical experience, Dr. Prabin Shrestha focuses on precise, minimally invasive dental implant placement and painless extractions. He emphasizes thorough pre-operative planning, ensuring that patients receive permanent, comfortable tooth replacements that restore full natural chewing strength.",
    specialties: ["Dental Implants", "Wisdom Tooth Removal", "Surgical Extractions", "Bone Grafting", "Full-Arch Replacement"],
    keyProcedures: [
      { name: "Single & Multiple Dental Implants", desc: "Biocompatible titanium root fixtures placed under gentle local anesthesia." },
      { name: "Painless Wisdom Tooth Extractions", desc: "Careful removal of deeply impacted wisdom teeth with minimal swelling." },
      { name: "Bone Preservation & Augmentation", desc: "Restoring jawbone volume to create a stable foundation for long-lasting implants." },
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
    role: "Director of Orthodontics & Clear Aligners",
    category: "ortho",
    experience: "10+ Years",
    image: drSnehaRajbhandariImg,
    education: "BDS, MDS (Orthodontics & Dentofacial Orthopedics) • NMC Registered Specialist",
    certifications: [
      "Nepal Medical Council (NMC) Certified Orthodontist",
      "Certified Provider for Clear Invisible Aligners",
      "Specialist in Adolescent & Adult Smile Alignment",
    ],
    bio: "Dedicated to correcting crowded, spaced, or forward teeth for teens and adults using traditional metal braces, ceramic brackets, and clear aligners.",
    longBio: "Dr. Sneha Rajbhandari is an experienced orthodontist dedicated to creating balanced, harmonious smiles. She customizes each alignment plan to fit the patient's lifestyle, whether utilizing discreet tooth-colored ceramic braces or modern transparent aligners, ensuring gentle and steady progress.",
    specialties: ["Clear Invisible Aligners", "Metal Braces", "Ceramic Braces", "Crowding & Gap Correction", "Bite Realignment"],
    keyProcedures: [
      { name: "Clear Aligner Therapy", desc: "Removable transparent aligner trays that gently straighten teeth without wires." },
      { name: "Ceramic Aesthetic Braces", desc: "Tooth-colored brackets providing discreet orthodontic correction for adults." },
      { name: "Traditional Metal Braces", desc: "Reliable and cost-effective alignment for complex crowding and bite issues." },
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
    title: "BDS, MDS (Conservative Dentistry & Endodontics)",
    role: "Chief of Restorative Dentistry & Root Canal Therapy",
    category: "endo",
    experience: "11+ Years",
    image: drAaratiJoshiImg,
    education: "BDS, MDS (Endodontics & Restorative Dentistry) • NMC Registered Specialist",
    certifications: [
      "Nepal Medical Council (NMC) Certified Endodontist",
      "Specialist in Rotary Root Canal Instrumentation",
      "Advanced Training in Aesthetic Composite Bonding",
    ],
    bio: "Focused on saving natural teeth through painless, single-visit root canal treatments (RCT) and long-lasting tooth-colored composite restorations.",
    longBio: "Dr. Aarati Joshi specializes in saving infected or broken teeth that might otherwise require extraction. Using modern rotary endodontic equipment and effective local anesthesia, she delivers gentle root canal procedures that completely eliminate severe toothache with zero discomfort.",
    specialties: ["Painless Root Canal (RCT)", "Tooth Preservation", "Composite Aesthetic Fillings", "Re-Root Canal Treatment", "Emergency Toothache Relief"],
    keyProcedures: [
      { name: "Single-Visit Root Canal Treatment", desc: "Gentle disinfection and permanent sealing of infected tooth pulp." },
      { name: "Tooth-Colored Aesthetic Fillings", desc: "Seamless composite resin layering to restore cavities and chipped enamel." },
      { name: "Broken Tooth Core Build-Up", desc: "Rebuilding structural tooth foundation before crown placement." },
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
    role: "Specialist in Crowns, Bridges & Dentures",
    category: "cosmetic",
    experience: "13+ Years",
    image: drRoshanKarkiImg,
    education: "BDS, MDS (Prosthodontics & Crown-Bridge) • NMC Registered Specialist",
    certifications: [
      "Nepal Medical Council (NMC) Certified Prosthodontist",
      "Expert in Zirconia & All-Ceramic Restorations",
      "Specialist in Full-Mouth Functional Rehabilitation",
    ],
    bio: "Expert in crafting high-strength Zirconia crowns, fixed dental bridges, and comfortable dentures that restore full chewing strength and natural smile aesthetics.",
    longBio: "Dr. Roshan Karki focuses on restoring damaged or missing teeth with precision-crafted prosthetics. He works closely with dental ceramists to ensure that every crown, bridge, and denture fits comfortably, matches your natural bite, and looks completely lifelike.",
    specialties: ["Zirconia Crowns", "Fixed Dental Bridges", "Complete & Partial Dentures", "Smile Makeovers", "Teeth Whitening"],
    keyProcedures: [
      { name: "Custom Zirconia & Ceramic Crowns", desc: "Durable tooth caps protecting root-canal-treated or fractured teeth." },
      { name: "Fixed Dental Bridges", desc: "Seamless replacement for missing teeth anchored to neighboring teeth." },
      { name: "Complete & Partial Dentures", desc: "Custom-fitted removable prostheses restoring natural chewing ability." },
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
    title: "BDS, General & Paediatric Dental Care",
    role: "Paediatric & Family Dental Surgeon",
    category: "pediatric",
    experience: "8+ Years",
    image: drPujaThapaImg,
    education: "BDS (Bachelor of Dental Surgery) • NMC Registered Dental Surgeon",
    certifications: [
      "Nepal Medical Council (NMC) Registered Dental Surgeon",
      "Special Interest in Child Dental Health & Preventive Care",
      "Certified in Ultrasonic Scaling & Gum Health Management",
    ],
    bio: "Passionate about creating a calming, tear-free dental environment for children, toddlers, and families, providing gentle checkups and preventive care.",
    longBio: "Dr. Puja Thapa is dedicated to family and pediatric dental health. She believes that gentle childhood checkups build lifelong confidence in oral care. Her friendly, patient chairside manner ensures children feel relaxed, safe, and happy during every visit.",
    specialties: ["Kids Dental Checkups", "Preventive Fluoride Treatment", "Milk Tooth Fillings", "Ultrasonic Scaling", "Oral Health Education"],
    keyProcedures: [
      { name: "Child-Friendly Dental Checkups", desc: "Gentle examination and cavity detection in a fun, positive environment." },
      { name: "Preventive Fluoride & Sealants", desc: "Protective coatings applied to young teeth to prevent future decay." },
      { name: "Gentle Primary Tooth Fillings", desc: "Quick, painless composite fillings tailored specifically for children." },
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
    role: "Preventive & Aesthetic Dental Practitioner",
    category: "general",
    experience: "9+ Years",
    image: drSauravPradhanImg,
    education: "BDS (Bachelor of Dental Surgery) • NMC Registered Dental Surgeon",
    certifications: [
      "Nepal Medical Council (NMC) Registered Dental Surgeon",
      "Specialist in Ultrasonic Scaling & Gum Disease Prevention",
      "Certified in In-Clinic Teeth Bleaching Protocols",
    ],
    bio: "Dedicated to comprehensive oral health assessments, ultrasonic scaling, gum health maintenance, and safe in-clinic teeth whitening.",
    longBio: "Dr. Saurav Pradhan focuses on preventive dental maintenance and cosmetic brightening. He provides thorough diagnostic checkups, cleans away tough tartar and tea stains with ultrasonic scalers, and guides patients on personalized home oral hygiene routines.",
    specialties: ["Ultrasonic Scaling & Polishing", "Teeth Bleaching (Whitening)", "Gum Health Screening", "Diagnostic X-Rays", "Routine Consultations"],
    keyProcedures: [
      { name: "Ultrasonic Scaling & Polishing", desc: "Deep cleaning removing hardened tartar and tea/tobacco stains." },
      { name: "Professional In-Clinic Bleaching", desc: "Safe cosmetic brightening for discolored or yellowed teeth." },
      { name: "Comprehensive Oral Health Checkup", desc: "Thorough visual examination, gum check, and personalized advice." },
    ],
    schedule: "Sun to Fri (8:00 AM – 5:00 PM)",
    rating: "4.95",
    reviewsCount: 280,
    tint: "#EEEEFF",
    badgeColor: "#74267A",
  },
];
