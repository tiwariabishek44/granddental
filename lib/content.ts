// ─────────────────────────────────────────────────────────────────────────
// SINGLE SWAP POINT
// All copy + image URLs live here. Images currently point at the reference
// theme demo (remote placeholders) — replace `IMG.*` with local /public assets
// and rewrite the copy for the real clinic before production.
// ─────────────────────────────────────────────────────────────────────────

const DEMO = "https://demo.awaikenthemes.com/primecare/wp-content/uploads/2024/09";
const THEME = "https://demo.awaikenthemes.com/primecare/wp-content/themes/primecare/assets/images";

export const IMG = {
  logo: `/logo.png`,
  footerLogo: `/logo.png`,
  heroImage: `${DEMO}/hero-image.jpg`,
  heroBadge1: `${DEMO}/hero-title-img-1.jpg`,
  heroBadge2: `${DEMO}/hero-title-img-2.jpg`,
  about: `${DEMO}/about-image.jpg`,
  aboutBadge: `${DEMO}/hero-image.jpg`, // placeholder for the "25+ experience" badge card
  founder: `${DEMO}/about-company-founder-img.jpg`,
  service1: `${DEMO}/service-img-1.jpg`,
  service2: `${DEMO}/service-img-2.jpg`,
  service3: `${DEMO}/service-img-3.jpg`,
  expertise1: `${DEMO}/expertise-img-1.jpg`,
  expertise2: `${DEMO}/expertise-img-2.jpg`,
  whyChoose: `/why-choose-image.png_2K_202607022112.png`,
  expertDoctor: `${DEMO}/expert-doctor-image.png`,
  howWork1: `${DEMO}/how-work-img-1.jpg`,
  howWork2: `${DEMO}/how-work-img-2.jpg`,
  howWork3: `${DEMO}/how-work-img-3.jpg`,
  transform1: `${DEMO}/transformation-img-1.jpg`,
  transform2: `${DEMO}/transformation-img-2.jpg`,
  transform3: `${DEMO}/transformation-img-3.jpg`,
  transform4: `${DEMO}/transformation-img-4.jpg`,
  post1: `${DEMO}/post-1.jpg`,
  post2: `${DEMO}/post-2.jpg`,
  doctor1: `${DEMO}/doctor-1.jpg`,
  doctor2: `${DEMO}/doctor-2.jpg`,
  doctor3: `${DEMO}/doctor-3.jpg`,
  doctor4: `${DEMO}/doctor-4.jpg`,
  loader: `${THEME}/loader.svg`,
} as const;

export const site = {
  brand: "Grand Dental Clinic",
  phone: "(+01) 789 987 645",
  phoneHref: "tel:+01789987645",
  email: "support@domain.com",
  emergency: "659-989-698565",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export const topbar = {
  help: { label: "Need Help ?", value: site.phone },
  rating: "Best Service & 5 Star Hospital are crucial institutions in our society",
  services: { label: "Need Dental Services ?", value: site.phone },
  hours: { label: "Opening Hours", value: "Mon to Sat 9:00AM to 9:00PM" },
};

export const infoStrip = {
  items: [
    { label: "Need Dental Services ?", value: site.phone, href: site.phoneHref, icon: "phone" },
    { label: "Opening Hours", value: "Mon to Sat 9:00AM to 9:00PM", icon: "clock" },
  ],
  cta: { label: "Make An Appointment", href: "#appointment" },
};

export const hero = {
  eyebrow: "Best Service & 5 Star",
  title: ["Your smile", "matters", "expert dental care", "a bright tomorrow"],
  text: "Top-quality dental care focused on your smile's health and beauty. Trust us to create a brighter, healthier tomorrow.",
  primaryCta: { label: "Book Now", href: "#appointment" },
  secondaryCta: { label: "Enquires", href: "#appointment" },
  stats: [
    { value: 24, suffix: "X7", label: "Emergency Service" },
    { value: 25, suffix: "k", label: "Recover Patient" },
    { value: 15, suffix: "+", label: "Market Experience" },
  ],
};

export const about = {
  eyebrow: "ABOUT US",
  title: "Commitment to your smile's health and beauty",
  text: "We provide friendly, caring dentistry with modern facilities and experienced professionals. Every treatment plan is built around your comfort and long-term oral health.",
  founder: { name: "Dianne Russell", role: "Co founder" },
  cta: { label: "More About", href: "/about" },
  // Overlapping badge card on the image (bottom-right).
  badge: { value: 25, suffix: "+", label: "experience in medical services", img: IMG.aboutBadge },
  stats: [
    { value: 98, suffix: "%", label: "Invisalign Treatment Complete" },
    { value: 100, suffix: "%", label: "Patient Satisfaction Rate" },
  ],
};

export const services = {
  eyebrow: "OUR SERVICES",
  title: "Comprehensive dental care tailored services for every smile",
  cta: { label: "All Services", href: "/services" },
  items: [
    { slug: "general-dentistry", title: "General Dentistry", text: "Routine care that keeps your teeth and gums healthy for life.", img: IMG.service1 },
    { slug: "cosmetic-dentistry", title: "Cosmetic Dentistry", text: "Brighten and reshape your smile with modern cosmetic treatments.", img: IMG.service2 },
    { slug: "restorative-dentistry", title: "Restorative Dentistry", text: "Restore function and confidence with crowns, bridges and implants.", img: IMG.service3 },
  ],
};

export const expertise = {
  eyebrow: "EXPERTISE",
  title: "Commitment to your oral health and smile aesthetics",
  text: "A specialist doctor is available for any need. We are available in many locations with modern facilities and experienced doctors.",
  features: [
    { title: "The needs of our patients always come first", text: "A specialist doctor is available for any need, with modern facilities and experienced doctors." },
    { title: "The needs of our patients always come first", text: "A specialist doctor is available for any need, with modern facilities and experienced doctors." },
  ],
  badge: { value: 250, suffix: "+", label: "Expert Doctor" },
  images: [IMG.expertise1, IMG.expertise2],
};

export const whyChoose = {
  eyebrow: "WHY CHOOSE US",
  title: "Excellence results you can trust",
  text: "Accurate diagnosis of dental conditions ensures effective treatment plans, helping to maintain oral health and prevent further complications.",
  cta: { label: "Contact Us", href: "/contact" },
  image: IMG.whyChoose,
  items: [
    { title: "Emergency Services", text: "The goal of our clinic is to provide friendly, caring dentistry and the." },
    { title: "Positive Patient Reviews", text: "The goal of our clinic is to provide friendly, caring dentistry and the." },
    { title: "Experienced Professionals", text: "The goal of our clinic is to provide friendly, caring dentistry and the." },
  ],
};

export const howItWorks = {
  eyebrow: "HOW IT WORK",
  title: "Understanding the patient journey",
  images: [IMG.howWork1, IMG.howWork2, IMG.howWork3],
  items: [
    { q: "Do you accept insurance?", a: "Yes, we accept most major dental insurance plans. Please contact us to verify your coverage." },
    { q: "What services do you offer?", a: "We offer general, cosmetic and restorative dentistry, plus 24/7 emergency care under one roof." },
    { q: "How often should I visit the dentist?", a: "For most people a check-up every six months keeps teeth and gums healthy and catches issues early." },
  ],
};

export const testimonials = {
  eyebrow: "TESTIMONIAL",
  title: "Real stories of exceptional care and transformative smiles",
  cta: { label: "Contact Us Now", href: "/contact" },
  items: [
    { text: "The team were amazing. From the moment I walked in, I felt at ease. The care and attention to detail was outstanding, and everything was explained clearly. The best dental experience I've ever had.", name: "Dianne Russell", role: "Co, Founder", avatar: IMG.founder },
    { text: "My smile has never looked better. I've always been nervous visiting the dentist, but the staff made me feel so comfortable throughout the procedure. Highly recommended.", name: "Wade Warren", role: "Patient", avatar: IMG.founder },
    { text: "Friendly, professional and gentle from start to finish. My whole family is treated here now and every visit has been a great experience.", name: "Jenny Wilson", role: "Patient", avatar: IMG.founder },
    { text: "Booking was simple and the appointment started right on time. The dentist explained each step clearly and made sure I was comfortable throughout.", name: "Robert Fox", role: "Patient", avatar: IMG.founder },
    { text: "A calm, modern clinic with a caring team. I finally look forward to my dental check-ups instead of dreading them.", name: "Kristin Watson", role: "Patient", avatar: IMG.founder },
  ],
};

export const transformation = {
  eyebrow: "SEE THE TRANSFORMATION",
  title: "Stunning results that showcase the life changing impact",
  cta: { label: "Contact Now", href: "#appointment" },
  // Before/after comparison sliders: small pair (left), large pair (right).
  pairs: [
    { before: IMG.transform1, after: IMG.transform2, size: "sm" as const },
    { before: IMG.transform3, after: IMG.transform4, size: "lg" as const },
  ],
};

export const faq = {
  eyebrow: "FAQS",
  title: "Everything you need to know about dental care",
  emergency: { label: "24/7 Emergency", value: site.emergency },
  items: [
    { q: "How often should I visit the dentist?", a: "For most people a check-up every six months keeps teeth and gums healthy and catches issues early." },
    { q: "Do you offer emergency dental care?", a: "Yes. We provide 24/7 emergency services for urgent dental problems and pain relief." },
    { q: "Are your treatments painless?", a: "We use modern, gentle techniques and take every step to keep you comfortable during treatment." },
    { q: "Do you accept new patients?", a: "Absolutely. We welcome new patients and make the first visit simple and reassuring." },
  ],
};

export const blog = {
  eyebrow: "LATEST NEWS",
  title: "Latest dental news insights and oral health advice",
  cta: { label: "View All Post", href: "#" },
  posts: [
    { title: "Essential tips for a healthy smile", img: IMG.post1, href: "#" },
    { title: "Benefit of regular Dental Checkup", img: IMG.post2, href: "#" },
  ],
};

export const appointment = {
  eyebrow: "BOOK YOUR APPOINTMENT",
  title: "Book your dental visit online with Grand Dental Clinic",
  text: "Ready to take the next step towards a healthier smile? Use our easy online booking system to schedule your dental appointment. Simply select a convenient date and time, provide some basic information, and we'll handle the rest.",
  formNote: "Fill out the form below to request your dental appointment. We'll confirm your time and send you a reminder.",
  hours: { title: "Working Hours", lines: ["Monday To Friday  8am - 7pm", "Saturday  9am - 4pm", "Sunday  Closed"] },
  emergency: { title: "24/7 Emergency", value: site.emergency },
  times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"],
};

export const footer = {
  tagline: "Top-quality dental care focused on your smile's health and beauty. Trust us to create a brighter, healthier tomorrow.",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Appointment", href: "/contact" },
    { label: "Services", href: "/services" },
  ],
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
  ],
  services: [
    { label: "General Dentistry", href: "/services" },
    { label: "Cosmetic Dentistry", href: "/services" },
    { label: "Restorative Dentistry", href: "/services" },
    { label: "Emergency Dental Care", href: "/services" },
  ],
  copyright: "© 2026 Grand Dental Clinic. All Rights Reserved.",
  legal: [
    { label: "Term & Condition", href: "#" },
    { label: "Support", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

// ── Inner-page data ─────────────────────────────────────────────────────────

export const aboutPage = {
  banner: { title: "About Us", crumbs: [{ label: "Home", href: "/" }, { label: "About Us" }] },
};

export const missionVision = {
  eyebrow: "COMMITTED TO EXCELLENCE",
  title: "Our vision for the future and mission to serve with integrity",
  items: [
    { icon: "target", title: "Our Mission", text: "To deliver gentle, modern dentistry that keeps every patient comfortable, informed and confident about their care." },
    { icon: "eye", title: "Our Vision", text: "To be the most trusted dental clinic in the community, known for honest advice and lasting results." },
    { icon: "heart", title: "Our Value", text: "Compassion, transparency and clinical excellence guide everything we do, from consultation to follow-up." },
  ],
};

export const doctors = {
  eyebrow: "OUR DOCTORS",
  title: "Meet our expert dentists skilled professionals doctors",
  items: [
    { name: "Dr. Rohini Joe", role: "Orthodontist", img: IMG.doctor1 },
    { name: "Dr. James Smith", role: "Dental Surgeon", img: IMG.doctor2 },
    { name: "Dr. Michael John", role: "Endodontist", img: IMG.doctor3 },
    { name: "Dr. Laura Davis", role: "Periodontist", img: IMG.doctor4 },
  ],
};

export const servicesPage = {
  banner: { title: "Services", crumbs: [{ label: "Home", href: "/" }, { label: "Services" }] },
  eyebrow: "OUR SERVICES",
  title: "Comprehensive dental care tailored services for every smile",
  items: [
    { slug: "general-dentistry", title: "General Dentistry", text: "Routine care that keeps your teeth and gums healthy for life.", img: IMG.service1, icon: "tooth" },
    { slug: "cosmetic-dentistry", title: "Cosmetic Dentistry", text: "Brighten and reshape your smile with modern cosmetic treatments.", img: IMG.service2, icon: "braces" },
    { slug: "restorative-dentistry", title: "Restorative Dentistry", text: "Restore function and confidence with crowns, bridges and implants.", img: IMG.service3, icon: "crown" },
    { slug: "dental-sealants", title: "Dental Sealants", text: "Protective coatings that guard teeth against decay and cavities.", img: IMG.howWork1, icon: "shield" },
    { slug: "emergency-dental-care", title: "Emergency Dental Care", text: "Fast, gentle relief for dental pain and urgent problems, 24/7.", img: IMG.howWork2, icon: "emergency" },
    { slug: "pediatric-dentistry", title: "Pediatric Dentistry", text: "Friendly, patient care that makes dental visits easy for children.", img: IMG.howWork3, icon: "child" },
  ],
};

// Per-service detail-page content. Generic placeholder copy — swap per clinic.
export const serviceDetails: Record<string, {
  intro: string;
  heading: string;
  paragraphs: string[];
  benefits: string[];
  gallery: string[];
}> = {
  "general-dentistry": {
    intro: "Comprehensive everyday care that keeps your whole family's smiles healthy, from routine check-ups to cleanings and preventive treatment.",
    heading: "Key benefits of regular dentistry",
    paragraphs: [
      "Regular dental care is the foundation of a healthy smile. Routine visits let us catch small problems before they become painful or expensive, and keep your teeth and gums in great shape year-round.",
      "Every appointment is gentle, unhurried and clearly explained, so you always understand what's happening and why.",
    ],
    benefits: ["Thorough check-ups & cleaning", "Early problem detection", "Gentle, painless treatment", "Personalised care plans", "Preventive advice", "Family-friendly service"],
    gallery: [IMG.service1, IMG.howWork1],
  },
  "cosmetic-dentistry": {
    intro: "Modern cosmetic treatments that brighten, straighten and reshape your smile so you can feel confident every time you laugh.",
    heading: "Key benefits of cosmetic dentistry",
    paragraphs: [
      "A beautiful smile can transform your confidence. Our cosmetic treatments are tailored to your goals, whether that's whitening, veneers or reshaping.",
      "We plan every result with you first, so you know exactly what to expect before we begin.",
    ],
    benefits: ["Teeth whitening", "Veneers & bonding", "Smile reshaping", "Natural-looking results", "Confidence boost", "Tailored treatment plans"],
    gallery: [IMG.service2, IMG.howWork2],
  },
  "restorative-dentistry": {
    intro: "Restore function and confidence with crowns, bridges, fillings and implants that look and feel like your natural teeth.",
    heading: "Key benefits of restorative dentistry",
    paragraphs: [
      "Damaged or missing teeth affect more than your smile — they affect how you eat and speak. Our restorative treatments rebuild strength and function that lasts.",
      "We use durable, natural-looking materials and gentle techniques for comfortable, long-term results.",
    ],
    benefits: ["Crowns & bridges", "Tooth-coloured fillings", "Dental implants", "Restored chewing function", "Long-lasting materials", "Comfortable procedures"],
    gallery: [IMG.service3, IMG.howWork3],
  },
  "dental-sealants": {
    intro: "Thin protective coatings applied to the chewing surfaces of teeth to guard against decay — especially effective for children and teens.",
    heading: "Key benefits of dental sealants",
    paragraphs: [
      "Sealants add an extra layer of protection where cavities most often start. The treatment is quick, painless and highly effective at keeping decay away.",
      "It's one of the simplest ways to protect healthy teeth for years to come.",
    ],
    benefits: ["Cavity protection", "Quick & painless", "Great for children", "Long-lasting shield", "Affordable prevention", "No drilling required"],
    gallery: [IMG.howWork1, IMG.service1],
  },
  "emergency-dental-care": {
    intro: "Fast, gentle relief when you need it most. We handle dental pain, injuries and urgent problems with same-day and 24/7 support.",
    heading: "Key benefits of emergency care",
    paragraphs: [
      "Dental emergencies don't wait, and neither do we. Whether it's severe pain, a broken tooth or an injury, our team is ready to help you quickly and calmly.",
      "We prioritise relief first, then walk you through the next steps for lasting treatment.",
    ],
    benefits: ["24/7 availability", "Same-day appointments", "Fast pain relief", "Trauma & injury care", "Calm, gentle handling", "Clear next-step guidance"],
    gallery: [IMG.howWork2, IMG.service2],
  },
  "pediatric-dentistry": {
    intro: "Friendly, patient care that makes dental visits easy and fun for children, building healthy habits that last a lifetime.",
    heading: "Key benefits of pediatric dentistry",
    paragraphs: [
      "Early positive experiences shape a lifetime of good dental health. We make every visit gentle, playful and reassuring for young patients and their parents.",
      "Our team focuses on comfort, education and prevention so children grow up confident about dental care.",
    ],
    benefits: ["Child-friendly approach", "Gentle first visits", "Preventive care", "Cavity protection", "Healthy-habit coaching", "Reassuring for parents"],
    gallery: [IMG.howWork3, IMG.service3],
  },
};

export const contactPage = {
  banner: { title: "Contact Us", crumbs: [{ label: "Home", href: "/" }, { label: "Contact Us" }] },
  info: [
    { icon: "pin", title: "Address", lines: ["123 Dental Street, Suite 100", "Your City, State 44600"] },
    { icon: "phone", title: "Contact", lines: [site.phone, site.email] },
    { icon: "clock", title: "Opening Hours", lines: ["Mon – Sat: 9:00AM – 9:00PM", "Sunday: Closed"] },
  ],
  form: { eyebrow: "CONTACT FORM", title: "Get in touch with us.", note: "Have a question or want to book a visit? Send us a message and we'll get back to you shortly." },
  mapEmbed: "https://www.google.com/maps?q=Kathmandu&output=embed",
};
