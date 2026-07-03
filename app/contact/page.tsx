import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Contact } from "@/components/Contact";
import { contactPage } from "@/lib/content";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactRoute() {
  return (
    <main>
      <PageBanner {...contactPage.banner} />
      <Contact />
    </main>
  );
}
