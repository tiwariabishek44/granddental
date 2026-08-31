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
    { name: "primary-900", hex: "#5C205E", label: "Brand Dark Plum", desc: "Main hero background, primary CTAs, dark accents" },
    { name: "primary-800", hex: "#74267A", label: "Deep Plum / Hover", desc: "Button hover states & heading gradient end" },
    { name: "primary-700", hex: "#922F9C", label: "Medium Plum", desc: "Link accents and secondary highlights" },
    { name: "primary-600", hex: "#B43ABF", label: "Vibrant Magenta", desc: "Gradient text highlight start" },
    { name: "primary-500", hex: "#CE59DC", label: "Bright Orchid", desc: "Subtle glow radial gradients" },
    { name: "primary-400", hex: "#D886E2", label: "Light Orchid", desc: "Chart dots and interactive indicators" },
    { name: "primary-100", hex: "#F7E6FA", label: "Pale Lavender", desc: "Card borders and badge accents" },
    { name: "primary-50", hex: "#FCF5FE", label: "Soft Whisper BG", desc: "Subtle card & section background tint" },
  ];

  const neutralColors = [
    { name: "Dark Surface", hex: "#101828", label: "Rich Slate Dark", desc: "AI / Tech Showcase Dark Section" },
    { name: "Text Primary", hex: "#111827", label: "Gray 900", desc: "Main titles & heading labels" },
    { name: "Text Secondary", hex: "#4B5563", label: "Gray 600", desc: "Body paragraphs & descriptions" },
    { name: "Text Muted", hex: "#6B7280", label: "Gray 500", desc: "Subtitles, year tags & address text" },
    { name: "Card BG Soft", hex: "#F2F4F7", label: "Gray 100", desc: "Bento cards & feature tile backgrounds" },
    { name: "Border Light", hex: "#E5E7EB", label: "Gray 200", desc: "Section dividers and pill borders" },
  ];

  const softPastelTints = [
    { name: "Doctor Card", hex: "#F9EBFC", label: "Plum Soft Tint" },
    { name: "Partner Card", hex: "#EEEEFF", label: "Lavender Soft Tint" },
    { name: "App Showcase", hex: "#FDF0F2", label: "Rose Blush Soft" },
    { name: "Stats Orbit", hex: "#F5F3F6", label: "Neutral Gray-Pink" },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBFD] text-gray-900 antialiased py-12 px-4 sm:px-6 lg:px-12 font-sans selection:bg-[#F3D5F9] selection:text-[#5C205E]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <header className="space-y-4 text-center md:text-left border-b border-gray-200 pb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#eecff4] bg-[#fcf5fe] text-xs font-semibold text-[#74267a]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Design System Analysis & Reference</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                Grand Dental Clinic <br />
                <span
                  className="text-transparent"
                  style={{
                    background:
                      "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Design Architecture & Tokens
                </span>
              </h1>
              <p className="text-gray-600 mt-3 max-w-2xl text-base sm:text-lg">
                Extracted styles, typography hierarchy, curated color palette, and UI components from{" "}
                <a
                  href="https://viscandiagnostics.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[#74267a] underline inline-flex items-center gap-1"
                >
                  viscandiagnostics.com <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm text-left">
                <div className="text-xs text-gray-500 font-medium">Core Brand Mood</div>
                <div className="text-sm font-semibold text-gray-900 mt-0.5">Clinical High-Tech & Luxury Plum</div>
              </div>
            </div>
          </div>
        </header>

        {/* 1. TYPOGRAPHY SYSTEM */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#FCF5FE] text-[#74267A]">
                <Type className="w-5 h-5" />
              </span>
              <h2 className="text-2xl font-semibold text-gray-900">1. Typography System</h2>
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono">(01)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Font Info */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#74267A]">Primary Typeface</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">Google Font</span>
              </div>
              <h3 className="text-4xl font-bold tracking-tight text-gray-900">Outfit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A modern geometric sans-serif with friendly rounded terminals, high legibility on medical diagnostics, and a tech-forward clinical tone.
              </p>
              <div className="pt-2 border-t border-gray-100 space-y-1 text-xs text-gray-500">
                <div><span className="font-semibold text-gray-700">Weights:</span> 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)</div>
                <div><span className="font-semibold text-gray-700">Monospace Fallback:</span> Space Grotesk / Geist Mono</div>
              </div>
            </div>

            {/* Typography Hierarchy Scale */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#74267A]">Hierarchy & Scale Examples</span>

              <div className="space-y-4 divide-y divide-gray-100">
                <div className="pt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <div className="text-xs font-medium text-gray-400 mb-1">Hero Title (36px — 65px / Medium / 1.15 Leading)</div>
                    <div className="text-2xl sm:text-4xl font-medium text-gray-900 tracking-tight">
                      Diagnostics for a <span style={{ background: "linear-gradient(246.94deg, #b43abf -28.81%, #74267a 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}>healthier smile.</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gray-400 shrink-0">H1 · 65px</span>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <div className="text-xs font-medium text-gray-400 mb-1">Section Title (24px — 40px / Medium)</div>
                    <div className="text-xl sm:text-2xl font-medium text-gray-900">
                      Your Partner in Exceptional <span style={{ background: "linear-gradient(246.94deg, #b43abf -28.81%, #74267a 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}>Dental Care</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gray-400 shrink-0">H2 · 36px</span>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <div className="text-xs font-medium text-gray-400 mb-1">Card Title & Badges (18px — 20px / SemiBold)</div>
                    <div className="text-lg font-semibold text-gray-900">Dental Professionals & Clinics</div>
                  </div>
                  <span className="text-xs font-mono text-gray-400 shrink-0">H3 · 20px</span>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <div className="text-xs font-medium text-gray-400 mb-1">Body Text (15px — 16px / Regular / 1.6 Leading)</div>
                    <div className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                      Precision imaging, detailed reports and effortless access — all in one click. Confidence for dentists. Clarity for patients.
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gray-400 shrink-0">Body · 16px</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. COLOR PALETTE */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#FCF5FE] text-[#74267A]">
                <Palette className="w-5 h-5" />
              </span>
              <h2 className="text-2xl font-semibold text-gray-900">2. Color Palette & Gradients</h2>
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono">(02)</span>
          </div>

          {/* Primary Plum Spectrum */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Primary Brand Spectrum (Plum & Orchid)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {brandColors.map((c) => (
                <div key={c.name} className="bg-white rounded-2xl p-3 border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div
                      className="w-full h-16 rounded-xl border border-black/5 shadow-inner mb-2.5"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div className="font-mono text-xs font-bold text-gray-900">{c.hex}</div>
                    <div className="text-[11px] font-semibold text-gray-700 truncate">{c.name}</div>
                  </div>
                  <div className="text-[10px] text-gray-400 mt-2 leading-tight">{c.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dark Surface & Neutrals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">Neutrals & High-Contrast Dark Surface</h3>
              <div className="space-y-3">
                {neutralColors.map((n) => (
                  <div key={n.name} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg border border-black/10 shrink-0"
                        style={{ backgroundColor: n.hex }}
                      />
                      <div>
                        <div className="text-xs font-bold text-gray-900">{n.name} ({n.hex})</div>
                        <div className="text-[11px] text-gray-500">{n.desc}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-gray-400">{n.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature Gradients & Accents */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Signature Gradient Accents</h3>
                <div className="space-y-4">
                  {/* Headline Gradient */}
                  <div className="p-4 rounded-2xl border border-gray-200 space-y-2">
                    <div className="text-xs font-semibold text-gray-700">1. Heading Accent Text Gradient</div>
                    <div
                      className="h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm"
                      style={{ background: "linear-gradient(246.94deg, #B43ABF -28.81%, #74267A 100%)" }}
                    >
                      linear-gradient(246.94deg, #B43ABF, #74267A)
                    </div>
                  </div>

                  {/* Dark Tech Radial Glow */}
                  <div className="p-4 rounded-2xl bg-[#101828] text-white space-y-2">
                    <div className="text-xs font-semibold text-gray-300">2. AI Section Dark Mode Glow</div>
                    <div
                      className="h-10 rounded-xl flex items-center justify-center font-bold text-xs"
                      style={{
                        background:
                          "linear-gradient(251.6deg, #ED91FB 21.52%, #FFE1E1 50.16%, #FFD4D2 56.51%, #C76ECA 89.38%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Glow: radial-gradient(circle, rgba(237,145,251,0.18), transparent)
                    </div>
                  </div>

                  {/* Pastel Story Banner Gradient */}
                  <div className="p-4 rounded-2xl border border-gray-200 space-y-2">
                    <div className="text-xs font-semibold text-gray-700">3. Pastel Milestone Timeline Strip</div>
                    <div
                      className="h-10 rounded-xl flex items-center justify-center font-bold text-gray-800 text-xs shadow-inner"
                      style={{
                        background:
                          "linear-gradient(250.03deg, #EBB5F3 -44.45%, #FEF2F2 33.37%, #FEE2E1 70.17%, #C59BC7 139.93%)",
                      }}
                    >
                      #EBB5F3 → #FEF2F2 → #FEE2E1 → #C59BC7
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE COMPLETE 5-TIER BUTTON ARCHITECTURE MATRIX */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#FCF5FE] text-[#74267A]">
                <MousePointerClick className="w-5 h-5" />
              </span>
              <h2 className="text-2xl font-semibold text-gray-900">3. Complete 5-Tier Button Architecture</h2>
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono">(03)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Variant 1: Primary Dark Plum Pill */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#74267A]">Tier 1: Primary Plum Pill</span>
                <p className="text-xs text-gray-500">Main booking & primary call-to-action with sliding white circle arrow.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 flex items-center justify-center">
                <button className="group inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 bg-[#5C205E] text-white hover:bg-[#74267A] h-12 px-5 text-sm gap-2 shadow-sm cursor-pointer">
                  <span>Book Appointment</span>
                  <span className="flex items-center justify-center rounded-full bg-white p-1.5 transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 text-[#5C205E]" />
                  </span>
                </button>
              </div>
              <div className="text-[11px] font-mono text-gray-500 bg-gray-50 p-2.5 rounded-xl">
                Class: <span className="font-bold text-gray-800">.btn-pill-primary</span>
              </div>
            </div>

            {/* Variant 2: Secondary Badge Pill */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#74267A]">Tier 2: Secondary Badge Pill</span>
                <p className="text-xs text-gray-500">AI feature triggers, demos & modals with embedded left icon circle.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 flex items-center justify-center">
                <button className="group inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 bg-gray-100 text-gray-900 hover:bg-gray-200 h-11 px-4 text-sm shadow-sm cursor-pointer">
                  <span className="mr-2 rounded-full bg-white p-1.5 shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#74267A]" />
                  </span>
                  <span>Free Smile AI Scan</span>
                </button>
              </div>
              <div className="text-[11px] font-mono text-gray-500 bg-gray-50 p-2.5 rounded-xl">
                Class: <span className="font-bold text-gray-800">.btn-pill-secondary</span>
              </div>
            </div>

            {/* Variant 3: Inverted Hero White Button */}
            <div className="bg-[#101828] text-white rounded-3xl p-6 border border-gray-800 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ED91FB]">Tier 3: Inverted Hero White</span>
                <p className="text-xs text-gray-400">High-contrast white button inside deep plum & dark hero sections.</p>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 flex items-center justify-center">
                <button className="group inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 bg-white text-gray-900 hover:bg-[#5C205E] hover:text-white h-12 px-6 text-sm shadow-sm gap-2 cursor-pointer">
                  <Calendar className="w-4 h-4 text-[#74267A] group-hover:text-white transition-colors" />
                  <span>Book Appointment Now</span>
                </button>
              </div>
              <div className="text-[11px] font-mono text-gray-400 bg-black/40 p-2.5 rounded-xl">
                Class: <span className="font-bold text-white">.btn-pill-hero-white</span>
              </div>
            </div>

            {/* Variant 4: Outline / Soft Tint Pill */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#74267A]">Tier 4: Outline & Whisper Pill</span>
                <p className="text-xs text-gray-500">Secondary contact buttons, telephone triggers & clear filters.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 flex items-center justify-center">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 h-11 px-5 text-sm gap-2 cursor-pointer">
                  <Phone className="w-4 h-4 text-[#74267A]" />
                  <span>+1 (800) 555-DENT</span>
                </button>
              </div>
              <div className="text-[11px] font-mono text-gray-500 bg-gray-50 p-2.5 rounded-xl">
                Class: <span className="font-bold text-gray-800">.btn-pill-outline</span>
              </div>
            </div>

            {/* Variant 5: Micro Card Link */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#74267A]">Tier 5: Micro Card Link</span>
                <p className="text-xs text-gray-500">Embedded within Bento feature cards and treatment grids.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 flex items-center justify-center">
                <button className="group inline-flex items-center gap-2 text-xs font-bold text-gray-900 hover:text-[#74267A] transition-colors cursor-pointer">
                  <span>Explore 3D Implants</span>
                  <span className="flex items-center justify-center rounded-full bg-white p-1.5 shadow-2xs transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 text-[#5C205E]" />
                  </span>
                </button>
              </div>
              <div className="text-[11px] font-mono text-gray-500 bg-gray-50 p-2.5 rounded-xl">
                Class: <span className="font-bold text-gray-800">.btn-card-link</span>
              </div>
            </div>

            {/* Variant 6: Animated Promo Pill */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#74267A]">Tier 6: Badge & Promo Pill</span>
                <p className="text-xs text-gray-500">Live discount badges, specialty tags and category indicators.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 flex items-center justify-center gap-2">
                <span className="rounded-full border border-[#EECFF4] bg-[#FCF5FE] px-3.5 py-1 text-xs font-semibold text-[#74267A] shadow-2xs inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Free 3D Scan Promo</span>
                </span>
              </div>
              <div className="text-[11px] font-mono text-gray-500 bg-gray-50 p-2.5 rounded-xl">
                Badge: <span className="font-bold text-gray-800">#FCF5FE / #EECFF4</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. KEY TAKEAWAYS FOR GRAND DENTAL */}
        <section className="bg-gradient-to-br from-[#FCF5FE] via-white to-[#F9EBFC] rounded-3xl p-8 border border-[#eecff4] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-[#5C205E] text-white">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold text-gray-900">Key Design Lessons for Grand Dental Clinic</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2 bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 shadow-2xs">
              <div className="font-semibold text-[#74267A] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> 1. Clean & Legible Typography
              </div>
              <p className="text-gray-600 leading-relaxed">
                Using <strong>Outfit</strong> gives a modern, approachable feel while maintaining clinical precision and high legibility.
              </p>
            </div>

            <div className="space-y-2 bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 shadow-2xs">
              <div className="font-semibold text-[#74267A] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> 2. Plum & Orchid Color Palette
              </div>
              <p className="text-gray-600 leading-relaxed">
                Deep rich plum (`#5C205E`) paired with vibrant magenta gradients creates an upscale, premium medical feel compared to generic healthcare blue.
              </p>
            </div>

            <div className="space-y-2 bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 shadow-2xs">
              <div className="font-semibold text-[#74267A] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> 3. 5-Tier Button Architecture
              </div>
              <p className="text-gray-600 leading-relaxed">
                Using structured button classes (`.btn-pill-primary`, `.btn-pill-secondary`, etc.) guarantees visual harmony across every view.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
