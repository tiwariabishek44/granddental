import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { AllServices } from "@/components/AllServices";
import { WhyChoose } from "@/components/WhyChoose";
import { Faq } from "@/components/Faq";
import { Testimonials } from "@/components/Testimonials";
import { servicesPage } from "@/lib/content";

export const metadata: Metadata = { title: "Services" };

export default function ServicesRoute() {
  return (
    <main>
      <PageBanner {...servicesPage.banner} />
      <AllServices />
      <WhyChoose />
      <Faq />
      <Testimonials />
    </main>
  );
}
