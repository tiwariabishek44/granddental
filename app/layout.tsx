import { Urbanist, Syne, Instrument_Serif, Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MobileHeader, MobileFooter } from "@/app/m/components";
import { AppointmentModalProvider } from "@/context/AppointmentModalContext";
import AppointmentModal from "@/components/AppointmentModal";

// Primary Geometric Sans: Outfit (as used in ViScan)
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

// Primary Body & UI: Sleek, high-legibility geometric sans
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

// Display / Headlines: Sculptural, modern, avant-garde medical brand typography
const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Luxury Editorial Serif: For high-end aesthetic dental accents & quotes
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// Scientific / Clinical Monospace: Precision badges, NMC IDs, and diagnostics
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-clinical",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grand Dental Clinic — Advanced & Gentle Dental Care",
  description:
    "Top-quality dental care focused on your smile's health and beauty. General, cosmetic, and restorative dentistry with state-of-the-art technology.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${urbanist.variable} ${syne.variable} ${instrumentSerif.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen flex flex-col justify-between antialiased">
        <AppointmentModalProvider>
          <a className="skip-link" href="#main-content">Skip to content</a>

          {/* 1. HEADER: Strictly segregated between desktop and mobile */}
          <div className="hidden sm:block">
            <Header />
          </div>
          <div className="block sm:hidden">
            <MobileHeader />
          </div>

          {/* 2. MAIN CONTENT AREA */}
          <div id="main-content" className="flex-1">
            {children}
          </div>

          {/* 3. FOOTER: Strictly segregated between desktop and mobile */}
          <div className="hidden sm:block">
            <Footer />
          </div>
          <div className="block sm:hidden">
            <MobileFooter />
          </div>

          {/* 4. GLOBAL APPOINTMENT POPUP MODAL */}
          <AppointmentModal />
        </AppointmentModalProvider>
      </body>
    </html>
  );
}
