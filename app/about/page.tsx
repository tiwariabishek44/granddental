import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { About } from "@/components/About";
import { MissionVision } from "@/components/MissionVision";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChoose } from "@/components/WhyChoose";
import { OurDoctors } from "@/components/OurDoctors";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Appointment } from "@/components/Appointment";
import { aboutPage } from "@/lib/content";

export const metadata: Metadata = { title: "About Us" };

export default function AboutRoute() {
  return (
    <main>
      <PageBanner {...aboutPage.banner} />
      <About />
      <MissionVision />
      <HowItWorks />
      <WhyChoose />
      <OurDoctors />
      <Testimonials />
      <Faq />
      <Appointment />
    </main>
  );
}
