import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/motion/Preloader";
import { MagicCursor } from "@/components/motion/MagicCursor";
import { ScrollRefresh } from "@/components/motion/ScrollRefresh";
import { site } from "@/lib/content";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.brand} — Dentist & Dental Clinic`,
  description:
    "Top-quality dental care focused on your smile's health and beauty. General, cosmetic and restorative dentistry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <Preloader />
        <MagicCursor />
        <ScrollRefresh />
        <a className="skip-link" href="#home">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
