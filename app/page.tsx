import { Hero } from "@/components/Hero";
import { InfoStrip } from "@/components/InfoStrip";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Expertise } from "@/components/Expertise";
import { WhyChoose } from "@/components/WhyChoose";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Transformation } from "@/components/Transformation";
import { Faq } from "@/components/Faq";
import { Blog } from "@/components/Blog";
import { Appointment } from "@/components/Appointment";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <InfoStrip />
      <About />
      <Services />
      <Expertise />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
      <Transformation />
      <Faq />
      <Blog />
      <Appointment />
    </main>
  );
}
