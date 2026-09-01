import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Our Clinic", href: "/about" },
    { name: "Specialist Doctors", href: "/doctors" },
    { name: "Dental Treatments", href: "/services" },
    { name: "Book an Appointment", href: "/appointment" },
    { name: "Contact & Directions", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "Teeth Cleaning & Polishing", href: "/services/scaling-polishing" },
    { name: "Painless Root Canal (RCT)", href: "/services/root-canal" },
    { name: "Permanent Dental Implants", href: "/services/dental-implants" },
    { name: "Clear Invisible Aligners", href: "/services/clear-aligners" },
    { name: "Tooth-Colored Fillings", href: "/services/composite-fillings" },
    { name: "Professional Teeth Whitening", href: "/services/teeth-whitening" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-gray-100 bg-white text-gray-700">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute bottom-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 translate-y-1/2 rounded-full opacity-15 sm:h-[800px]"
          style={{
            background:
              "radial-gradient(ellipse closest-side, #CE59DC 0%, #B43ABF 30%, rgba(180, 58, 191, 0.4) 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-12">
          {/* Column 1: Brand & Bio (Span 2 on lg) */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="relative h-12 w-12 shrink-0 flex items-center justify-center rounded-full border border-[#F3D5F9] bg-white p-0.5 shadow-2xs">
                <Image
                  src="/logo.png"
                  alt="Grand Dental Clinic"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-gray-950 leading-none group-hover:text-[#5C205E] transition-colors">
                  Grand Dental
                </span>
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#74267A] mt-1 font-sans">
                  Clinic &bull; Kathmandu
                </span>
              </div>
            </Link>

            <p className="type-body max-w-sm">
              Thoughtful, comprehensive dental care delivered with a gentle, personal approach. Helping you smile with confidence in Swoyambhu, Kathmandu.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-gray-100 text-[#5C205E] hover:bg-[#FCF5FE] transition-colors flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gray-100 text-[#5C205E] hover:bg-[#FCF5FE] transition-colors flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-100 text-[#5C205E] hover:bg-[#FCF5FE] transition-colors flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="type-sub-title">
              Quick Links
            </h3>
            <ul className="space-y-3 type-ui-control text-gray-600 font-normal">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#74267A] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Dental Services */}
          <div className="space-y-4">
            <h3 className="type-sub-title">
              Treatments
            </h3>
            <ul className="space-y-3 type-ui-control text-gray-600 font-normal">
              {serviceLinks.map((svc) => (
                <li key={svc.name}>
                  <span className="text-gray-600 inline-block">
                    {svc.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Clinic Hours & Contact */}
          <div className="space-y-4">
            <h3 className="type-sub-title">
              Get in Touch
            </h3>
            <div className="space-y-3.5 type-ui-control text-gray-600 font-normal">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#74267A] shrink-0 mt-1" />
                <span>Nagarjun-3, Pachadhara, Swoyambhu, Kathmandu</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#74267A] shrink-0" />
                <a href="tel:014950352" className="hover:text-[#74267A] transition-colors font-medium">
                  01-4950352 / 9841322789
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#74267A] shrink-0" />
                <a
                  href="mailto:grand.dentalclinic2079@gmail.com"
                  className="hover:text-[#74267A] transition-colors font-medium"
                >
                  grand.dentalclinic2079@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-[#74267A] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Sun &ndash; Fri: 8:00 AM &ndash; 6:00 PM</p>
                  <p className="type-meta text-gray-500">Saturday: By Prior Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row type-meta text-gray-500">
          <p>&copy; {new Date().getFullYear()} Grand Dental Clinic. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-[#74267A] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#74267A] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
