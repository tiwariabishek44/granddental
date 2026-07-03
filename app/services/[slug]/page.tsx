import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageBanner } from "@/components/PageBanner";
import { ServiceDetail } from "@/components/ServiceDetail";
import { servicesPage, serviceDetails } from "@/lib/content";

export function generateStaticParams() {
  return servicesPage.items.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = servicesPage.items.find((s) => s.slug === slug);
  return { title: item ? item.title : "Services" };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = servicesPage.items.find((s) => s.slug === slug);
  if (!item || !serviceDetails[slug]) notFound();

  return (
    <main>
      <PageBanner
        title={item.title}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: item.title }]}
      />
      <ServiceDetail slug={slug} />
    </main>
  );
}
