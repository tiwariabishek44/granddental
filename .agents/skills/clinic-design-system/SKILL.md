---
name: clinic-design-system
description: >-
  Comprehensive design system, UI guidelines, typography rules, color tokens,
  and component patterns for the Grand Dental clinic website, based on the official Clinical Blue banner identity.
---

# Grand Dental Clinic — Design System & UI Skill Guide

This skill guide defines the core design language, typography hierarchy, color tokens, and signature UI component patterns for the **Grand Dental Clinic** web platform, modeled after the official **Clinical Blue & Sapphire Navy** brand identity ("Care | Quality | Trust").

---

## 1. Design Philosophy & Mood

* **Core Mood:** High-Trust Clinical Precision meets Fresh Medical Modernism.
* **Key Visual Attributes:**
  * **Approachable Medical Tech:** Friendly geometric typography with softened ice-blue and crisp white bento cards instead of sterile, intimidating hospital whites or dark moody purple.
  * **Categorical Clarity:** Structured section headers, dual-tone navy/sky typography accents, pill badges, and clean visual hierarchy without redundant AI-style counter pills or flashing dots.
  * **Micro-Delight:** Smooth hover arrow shifts and subtle cyan-to-sapphire gradient text accents.
  * **Strict Minimum Font Size:** No user-facing text element shall ever be smaller than `12px` (`text-xs`). Micro-text sizes (`text-[9px]`, `text-[10px]`, `text-[11px]`) are prohibited.

---

## 2. Global Typography System

### Typeface Setup
* **Primary Sans:** `Outfit` (`var(--font-outfit)`, fallback: `Urbanist`, `sans-serif`)
  * Used for: All headlines, body paragraphs, buttons, navigation, and card titles.
  * Weights: `300` (Light), `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold).
* **Diagnostic / Monospace:** `Geist Mono` / `Space Grotesk` (`var(--font-clinical)`)
  * Used for: Telephone numbers, license registrations, and clinical metrics.

### Global Typography Token Classes (`globals.css`)

| Token Class | Applied Tailwind Classes | Effective Size / Weight / Line Height | Primary Usage |
| :--- | :--- | :--- | :--- |
| `.type-display` | `text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]` | 30px–60px / 300 / 1.1 | Hero section main $H_1$ titles |
| `.type-section-title` | `text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight leading-tight text-gray-900` | 24px–36px / 500 / 1.2 | Main section $H_2$ headings |
| `.type-card-title` | `text-lg sm:text-xl font-semibold leading-snug text-gray-900` | 18px–20px / 600 / 1.3 | Bento card & treatment titles |
| `.type-sub-title` | `text-base sm:text-lg font-semibold leading-snug text-gray-900` | 16px–18px / 600 / 1.375 | Modal titles, FAQ headers, column headers |
| `.type-lead` | `text-lg sm:text-xl leading-relaxed text-gray-700 font-normal` | 18px–20px / 400 / 1.625 | Hero intros and section sub-leads |
| `.type-body` | `text-base sm:text-[17px] leading-relaxed text-gray-700 font-normal` | 16px–17px / 400 / 1.625 | Standard body descriptions |
| `.type-eyebrow` | `text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0B3B8B]` | 13px–14px / 600 / 1.4 | Section kicker labels & category tags |
| `.type-meta` | `text-xs sm:text-sm text-gray-600 font-normal` | 13px–14px / 400 / 1.4 | Timestamps, durations, disclosures ($\ge 13px$) |
| `.type-ui-control` | `text-sm sm:text-base font-medium` | 15px–16px / 500 | Button labels, form inputs, navigation items |
| `.btn-card-link` | `text-sm font-semibold text-gray-900 hover:text-[#0B3B8B]` | 14px / 600 | Interactive card action links |

---

## 3. Color Palette & Design Tokens

### Primary Brand Spectrum (Deep Clinical Navy & Cerulean Sky Blue)

```css
:root {
  --color-primary-900: #0B3B8B; /* Brand Deep Navy (Buttons, primary CTAs, deep accents) */
  --color-primary-800: #134FB0; /* Royal Blue (Button hover, heading gradient end) */
  --color-primary-700: #1E64D4; /* Medium Clinical Blue (Link highlights) */
  --color-primary-600: #388EE8; /* Cerulean Sky Blue (Gradient text start, badge accents) */
  --color-primary-500: #60A5FA; /* Bright Sky (Subtle glows, active status) */
  --color-primary-400: #93C5FD; /* Light Sky (Indicators & interactive dots) */
  --color-primary-200: #BFDBFE; /* Soft Ice Tint (Card borders) */
  --color-primary-100: #DBEAFE; /* Pale Ice Blue (Borders & badge backgrounds) */
  --color-primary-50:  #F0F7FF; /* Whisper Sky (Section backgrounds & soft cards) */
}
```

### Neutrals & Dark Surface Tokens
* **Dark High-Contrast Surface:** `#0B192C` / `#101828` (Deep Midnight Blue used for high-contrast hero & diagnostic visualizer sections).
* **Text Primary ($H_1, H_2, H_3$):** `#0F172A` / `#111827` (`text-slate-900`).
* **Text Secondary (Body):** `#475569` / `#4B5563` (`text-slate-600`).
* **Text Muted (Captions & Footnotes):** `#64748B` (`text-slate-500`).
* **Borders & Dividers:** `#E2E8F0` (`border-slate-200`) and `#DBEAFE` (`border-blue-100`).
* **Pure White:** `#FFFFFF`.

### Soft Pastel Card Tints (Clinical Blue Family)
* **Doctor / Practitioner Bento:** `#EBF3FE` (Soft Cerulean Whisper)
* **Patient / Partner Bento:** `#F0FDF4` / `#F1F5F9` (Clean Medical Slate / Soft Mint)
* **App / Digital Feature Bento:** `#E0F2FE` (Crisp Sky Tint)
* **Diagnostic Metric Orbit:** `#F8FAFC` (Pure Ice Neutral)

---

## 4. Gradients & Visual Effects

### 1. Headline Accent Text Gradient
Apply to 1–2 keywords in a headline to create visual focal points:
```tsx
<span
  className="font-medium text-transparent"
  style={{
    background: "linear-gradient(246.94deg, #388EE8 -28.81%, #0B3B8B 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
  }}
>
  healthier smile
</span>
```

### 2. High-Tech Dark Section Glow
For dark innovation or technology sections:
* Background: `#0B192C` (Midnight Clinical Navy)
* Radial Glow: `bg-[radial-gradient(circle,rgba(56,142,232,0.18),transparent_60%)]`
* Text Glow: `linear-gradient(251.6deg, #60A5FA 21.52%, #E0F2FE 50.16%, #BAE6FD 56.51%, #388EE8 89.38%)`

---

## 5. Signature UI Component Recipes

### Recipe 1: Global Section Header
```tsx
<div className="space-y-2 mb-8">
  <span className="type-eyebrow">
    Our Services
  </span>
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start md:gap-12">
    <h2 className="type-section-title">
      Advanced Testing,{" "}
      <span
        className="font-medium text-transparent"
        style={{
          background: "linear-gradient(246.94deg, #388EE8 -28.81%, #0B3B8B 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
        }}
      >
        Personalized
      </span>{" "}
      Care
    </h2>
    <p className="type-body font-light">
      From comprehensive dental scans to gentle hygiene and restorative care, our clinic provides precision care in one seamless visit.
    </p>
  </div>
</div>
```

### Recipe 2: Button & CTA System

#### Variant 1: Primary Deep Navy Pill (`.btn-pill-primary`)
```tsx
<button className="btn-pill-primary">
  <span>Book Appointment</span>
  <span className="flex items-center justify-center rounded-full bg-white p-1.5 transition-transform duration-200 group-hover:translate-x-1">
    <ArrowRight className="w-3.5 h-3.5 text-[#0B3B8B]" />
  </span>
</button>
```

#### Variant 2: Outline Button (`.btn-pill-outline`)
```tsx
<button className="btn-pill-outline">
  <Phone className="w-4 h-4 text-[#0B3B8B]" />
  <span>Call Helpline</span>
</button>
```

---

## 6. Spacing, Radii & Grid Rules

* **Container Max Width:** `max-w-[1400px]` with `px-4 sm:px-6 lg:px-8`
* **Section Padding:** `py-12 md:py-20`
* **Corner Radii:**
  * **Large Containers & Bento Cards:** `rounded-3xl` (24px)
  * **Inner Images & Media Blocks:** `rounded-2xl` (16px)
  * **Pill Badges & Buttons:** `rounded-full` (9999px)
  * **Small Controls / Inputs:** `rounded-xl` or `rounded-2xl` (12px–16px)
* **Icons:** `lucide-react` with standard stroke width `stroke-width={2}` or `stroke-width={1.5}`.
