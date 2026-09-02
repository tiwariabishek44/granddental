import React from "react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Palette,
  Type,
  Layout,
  ExternalLink,
  ShieldCheck,
  Phone,
  Calendar,
  MousePointerClick,
} from "lucide-react";

export default function DesignGuide() {
  const brandColors = [
    { name: "primary-900", hex: "#0B3B8B", label: "Brand Deep Navy", desc: "Main hero background, primary CTAs, deep accents" },
    { name: "primary-800", hex: "#134FB0", label: "Royal Blue / Hover", desc: "Button hover states & heading gradient end" },
    { name: "primary-700", hex: "#1E64D4", label: "Medium Clinical Blue", desc: "Link accents and secondary highlights" },
    { name: "primary-600", hex: "#388EE8", label: "Cerulean Sky Blue", desc: "Gradient text highlight start" },
    { name: "primary-500", hex: "#60A5FA", label: "Bright Sky", desc: "Subtle glow radial gradients & status" },
    { name: "primary-400", hex: "#93C5FD", label: "Light Sky", desc: "Chart dots and interactive indicators" },
    { name: "primary-100", hex: "#DBEAFE", label: "Pale Ice Blue", desc: "Card borders and badge accents" },
    { name: "primary-50", hex: "#F0F7FF", label: "Soft Whisper Sky", desc: "Subtle card & section background tint" },
  ];

  const neutralColors = [
    { name: "Dark Surface", hex: "#0B192C", label: "Midnight Clinical Navy", desc: "High-Tech Showcase Dark Section" },
    { name: "Text Primary", hex: "#0F172A", label: "Slate 900", desc: "Main titles & heading labels" },
    { name: "Text Secondary", hex: "#475569", label: "Slate 600", desc: "Body paragraphs & descriptions" },
    { name: "Text Muted", hex: "#64748B", label: "Slate 500", desc: "Subtitles, year tags & address text" },
    { name: "Card BG Soft", hex: "#F8FAFC", label: "Slate 50", desc: "Bento cards & feature tile backgrounds" },
    { name: "Border Light", hex: "#E2E8F0", label: "Slate 200", desc: "Section dividers and pill borders" },
  ];

  const softPastelTints = [
    { name: "Doctor Card", hex: "#EBF3FE", label: "Cerulean Soft Tint" },
    { name: "Partner Card", hex: "#F1F5F9", label: "Slate Soft Tint" },
    { name: "App Showcase", hex: "#E0F2FE", label: "Sky Soft Tint" },
    { name: "Stats Orbit", hex: "#F8FAFC", label: "Neutral Ice Neutral" },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 antialiased py-12 px-4 sm:px-6 lg:px-12 font-sans selection:bg-[#DBEAFE] selection:text-[#0B3B8B]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <header className="space-y-4 text-center md:text-left border-b border-gray-200 pb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#DBEAFE] bg-[#F0F7FF] text-xs font-semibold text-[#0B3B8B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Design System Analysis & Reference</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900">
                Grand Dental Clinic <br />
                <span
                  className="text-transparent"
                  style={{
                    background:
                      "linear-gradient(246.94deg, #388EE8 -28.81%, #0B3B8B 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Clinical Blue Design Architecture & Tokens
                </span>
              </h1>
              <p className="text-slate-600 mt-3 max-w-2xl text-base sm:text-lg">
                Official Clinical Blue & Sapphire Navy brand identity ("Care | Quality | Trust") for Grand Dental Clinic.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left">
                <div className="text-xs text-slate-500 font-medium">Core Brand Mood</div>
                <div className="text-sm font-semibold text-slate-900 mt-0.5">Clinical High-Trust & Sapphire Navy</div>
              </div>
            </div>
          </div>
        </header>

        {/* 1. TYPOGRAPHY SYSTEM */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#F0F7FF] text-[#0B3B8B]">
                <Type className="w-5 h-5" />
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">1. Typography System</h2>
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono">(01)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Font Info */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B3B8B]">Primary Typeface</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">Google Font</span>
              </div>
              <h3 className="text-4xl font-bold tracking-tight text-slate-900">Outfit</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A modern geometric sans-serif with friendly rounded terminals, high legibility on medical diagnostics, and a tech-forward clinical tone.
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1 text-xs text-slate-500">
                <div><span className="font-semibold text-slate-700">Weights:</span> 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)</div>
                <div><span className="font-semibold text-slate-700">Monospace Fallback:</span> Space Grotesk / Geist Mono</div>
              </div>
            </div>

            {/* Typography Hierarchy Scale */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B3B8B]">Hierarchy & Scale Examples</span>

              <div className="space-y-4 divide-y divide-slate-100">
                <div className="pt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <div className="text-xs font-medium text-slate-400 mb-1">Hero Title (36px — 65px / Medium / 1.15 Leading)</div>
                    <div className="text-2xl sm:text-4xl font-medium text-slate-900 tracking-tight">
                      Diagnostics for a <span style={{ background: "linear-gradient(246.94deg, #388EE8 -28.81%, #0B3B8B 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}>healthier smile.</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 shrink-0">H1 · 65px</span>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <div className="text-xs font-medium text-slate-400 mb-1">Section Title (24px — 40px / Medium)</div>
                    <div className="text-xl sm:text-2xl font-medium text-slate-900">
                      Your Partner in Exceptional <span style={{ background: "linear-gradient(246.94deg, #388EE8 -28.81%, #0B3B8B 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}>Dental Care</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 shrink-0">H2 · 36px</span>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <div className="text-xs font-medium text-slate-400 mb-1">Card Title & Badges (18px — 20px / SemiBold)</div>
                    <div className="text-lg font-semibold text-slate-900">Dental Professionals & Clinics</div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 shrink-0">H3 · 20px</span>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <div className="text-xs font-medium text-slate-400 mb-1">Body Text (15px — 16px / Regular / 1.6 Leading)</div>
                    <div className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                      Precision imaging, detailed reports and effortless access — all in one click. Confidence for dentists. Clarity for patients.
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 shrink-0">Body · 16px</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. COLOR PALETTE */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#F0F7FF] text-[#0B3B8B]">
                <Palette className="w-5 h-5" />
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">2. Color Palette & Gradients</h2>
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono">(02)</span>
          </div>

          {/* Primary Blue Spectrum */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Primary Brand Spectrum (Navy & Cerulean Sky)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {brandColors.map((c) => (
                <div key={c.name} className="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div
                      className="w-full h-16 rounded-xl border border-black/5 shadow-inner mb-2.5"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div className="font-mono text-xs font-bold text-slate-900">{c.hex}</div>
                    <div className="text-[11px] font-semibold text-slate-700 truncate">{c.name}</div>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-2 leading-tight">{c.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dark Surface & Neutrals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Neutrals & High-Contrast Dark Surface</h3>
              <div className="space-y-3">
                {neutralColors.map((n) => (
                  <div key={n.name} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg border border-black/10 shrink-0"
                        style={{ backgroundColor: n.hex }}
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-900">{n.name} ({n.hex})</div>
                        <div className="text-[11px] text-slate-500">{n.desc}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{n.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature Gradients & Accents */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Signature Gradient Accents</h3>
                <div className="space-y-4">
                  {/* Headline Gradient */}
                  <div className="p-4 rounded-2xl border border-slate-200 space-y-2">
                    <div className="text-xs font-semibold text-slate-700">1. Heading Accent Text Gradient</div>
                    <div
                      className="h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm"
                      style={{ background: "linear-gradient(246.94deg, #388EE8 -28.81%, #0B3B8B 100%)" }}
                    >
                      linear-gradient(246.94deg, #388EE8, #0B3B8B)
                    </div>
                  </div>

                  {/* Dark Tech Radial Glow */}
                  <div className="p-4 rounded-2xl bg-[#0B192C] text-white space-y-2">
                    <div className="text-xs font-semibold text-slate-300">2. Clinical Dark Section Glow</div>
                    <div
                      className="h-10 rounded-xl flex items-center justify-center font-bold text-xs"
                      style={{
                        background:
                          "linear-gradient(251.6deg, #60A5FA 21.52%, #E0F2FE 50.16%, #BAE6FD 56.51%, #388EE8 89.38%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Glow: radial-gradient(circle, rgba(56,142,232,0.18), transparent)
                    </div>
                  </div>

                  {/* Pastel Story Banner Gradient */}
                  <div className="p-4 rounded-2xl border border-slate-200 space-y-2">
                    <div className="text-xs font-semibold text-slate-700">3. Soft Ice Blue Banner Strip</div>
                    <div
                      className="h-10 rounded-xl flex items-center justify-center font-bold text-slate-800 text-xs shadow-inner"
                      style={{
                        background:
                          "linear-gradient(250.03deg, #DBEAFE -44.45%, #F0F7FF 33.37%, #EBF3FE 70.17%, #BFDBFE 139.93%)",
                      }}
                    >
                      #DBEAFE → #F0F7FF → #EBF3FE → #BFDBFE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. BUTTON ARCHITECTURE */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#F0F7FF] text-[#0B3B8B]">
                <MousePointerClick className="w-5 h-5" />
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">3. Complete Button Architecture</h2>
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono">(03)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Variant 1: Primary Navy Pill */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B3B8B]">Tier 1: Primary Navy Pill</span>
                <p className="text-xs text-slate-500">Main booking & primary call-to-action with sliding white circle arrow.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 flex items-center justify-center">
                <button className="group inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 bg-[#0B3B8B] text-white hover:bg-[#134FB0] h-12 px-5 text-sm gap-2 shadow-sm cursor-pointer">
                  <span>Book Appointment</span>
                  <span className="flex items-center justify-center rounded-full bg-white p-1.5 transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 text-[#0B3B8B]" />
                  </span>
                </button>
              </div>
              <div className="text-[11px] font-mono text-slate-500 bg-slate-50 p-2.5 rounded-xl">
                Class: <span className="font-bold text-slate-800">.btn-pill-primary</span>
              </div>
            </div>

            {/* Variant 2: Secondary Badge Pill */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B3B8B]">Tier 2: Secondary Badge Pill</span>
                <p className="text-xs text-slate-500">Feature triggers, filters & search pills with embedded left icon circle.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 flex items-center justify-center">
                <button className="group inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 bg-blue-50 text-slate-900 hover:bg-blue-100 h-11 px-4 text-sm shadow-sm cursor-pointer">
                  <span className="mr-2 rounded-full bg-white p-1.5 shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#0B3B8B]" />
                  </span>
                  <span>Free Smile Consultation</span>
                </button>
              </div>
              <div className="text-[11px] font-mono text-slate-500 bg-slate-50 p-2.5 rounded-xl">
                Class: <span className="font-bold text-slate-800">.btn-pill-secondary</span>
              </div>
            </div>

            {/* Variant 3: Inverted Hero White Button */}
            <div className="bg-[#0B192C] text-white rounded-3xl p-6 border border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA]">Tier 3: Inverted Hero White</span>
                <p className="text-xs text-slate-400">High-contrast white button inside deep navy & dark hero sections.</p>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 flex items-center justify-center">
                <button className="group inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 bg-white text-slate-900 hover:bg-[#0B3B8B] hover:text-white h-12 px-6 text-sm shadow-sm gap-2 cursor-pointer">
                  <Calendar className="w-4 h-4 text-[#0B3B8B] group-hover:text-white transition-colors" />
                  <span>Book Appointment Now</span>
                </button>
              </div>
              <div className="text-[11px] font-mono text-gray-400 bg-black/40 p-2.5 rounded-xl">
                Class: <span className="font-bold text-white">.btn-pill-hero-white</span>
              </div>
            </div>

            {/* Variant 4: Outline / Soft Tint Pill */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B3B8B]">Tier 4: Outline & Whisper Pill</span>
                <p className="text-xs text-slate-500">Secondary contact buttons, telephone triggers & clear filters.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 flex items-center justify-center">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 h-11 px-5 text-sm gap-2 cursor-pointer">
                  <Phone className="w-4 h-4 text-[#0B3B8B]" />
                  <span>01-4950352</span>
                </button>
              </div>
              <div className="text-[11px] font-mono text-slate-500 bg-slate-50 p-2.5 rounded-xl">
                Class: <span className="font-bold text-slate-800">.btn-pill-outline</span>
              </div>
            </div>

            {/* Variant 5: Micro Card Link */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B3B8B]">Tier 5: Micro Card Link</span>
                <p className="text-xs text-slate-500">Embedded within Bento feature cards and treatment grids.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 flex items-center justify-center">
                <button className="group inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-[#0B3B8B] transition-colors cursor-pointer">
                  <span>Explore 3D Implants</span>
                  <span className="flex items-center justify-center rounded-full bg-white p-1.5 shadow-2xs transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 text-[#0B3B8B]" />
                  </span>
                </button>
              </div>
              <div className="text-[11px] font-mono text-slate-500 bg-slate-50 p-2.5 rounded-xl">
                Class: <span className="font-bold text-slate-800">.btn-card-link</span>
              </div>
            </div>

            {/* Variant 6: Badge Pill */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B3B8B]">Tier 6: Badge & Promo Pill</span>
                <p className="text-xs text-slate-500">Category tags, certifications and promo indicators.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 flex items-center justify-center gap-2">
                <span className="rounded-full border border-[#DBEAFE] bg-[#F0F7FF] px-3.5 py-1 text-xs font-semibold text-[#0B3B8B] shadow-2xs inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#0B3B8B]" />
                  <span>NMC Certified Doctors</span>
                </span>
              </div>
              <div className="text-[11px] font-mono text-slate-500 bg-slate-50 p-2.5 rounded-xl">
                Badge: <span className="font-bold text-slate-800">#F0F7FF / #DBEAFE</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. KEY TAKEAWAYS */}
        <section className="bg-gradient-to-br from-[#F0F7FF] via-white to-[#EBF3FE] rounded-3xl p-8 border border-[#DBEAFE] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-[#0B3B8B] text-white">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold text-slate-900">Key Design Lessons for Grand Dental Clinic</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2 bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-100 shadow-2xs">
              <div className="font-semibold text-[#0B3B8B] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> 1. Clean & Legible Typography
              </div>
              <p className="text-slate-600 leading-relaxed">
                Using <strong>Outfit</strong> gives a modern, approachable feel while maintaining clinical precision and high legibility.
              </p>
            </div>

            <div className="space-y-2 bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-100 shadow-2xs">
              <div className="font-semibold text-[#0B3B8B] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> 2. Clinical Blue & Sapphire Navy
              </div>
              <p className="text-slate-600 leading-relaxed">
                Deep Sapphire Navy (`#0B3B8B`) paired with Cerulean Sky (`#388EE8`) establishes medical authority, calm trust, and high clinical clarity.
              </p>
            </div>

            <div className="space-y-2 bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-100 shadow-2xs">
              <div className="font-semibold text-[#0B3B8B] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> 3. Consistent Button Architecture
              </div>
              <p className="text-slate-600 leading-relaxed">
                Using structured button classes (`.btn-pill-primary`, `.btn-pill-secondary`, etc.) guarantees visual harmony across every view.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
