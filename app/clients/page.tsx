"use client";
import Marquee from "../_components/Marquee";
import LightboxGallery from "@/components/LightboxGallery";
import { BUSINESS_LOGOS } from "@/lib/businessLogos";
import { useReveal } from "../_components/useReveal";

const SERVICES_CLIENTS = [
  "Home of Detail",
  "iWorth International",
  "Premiere88 Auto Global Services",
  "Millennial Franchising Company",
  "Millennial Auto Detailing Shops",
  "Doc Lunas Wellness & Aesthetic Center",
  "Bp Sanchez Dental Clinic",
  "Mas Home Service",
  "Cold Marking I.T Solutions",
  "Forex Fortara Community",
  "Smart Professionals Products",
];

const PRODUCTS = [
  "PowerBead",
  "Cazsha Glow",
  "Graphene Boost Unified Pharmacy",
  "Vit D Lotion",
  "Zen Essential Oils",
  "Activ8 by Doc Lunas",
];

const BUSINESS_PAGES = [
  "Global Media Buyer",
  "Entrepreneur Philippines",
  "Next Level Digital Works",
  "Skyrocket E-commerce & Dropshipping",
  "Dropshipping Pro",
  "Cebu Media Buyer",
  "Baguio Digital Pro",
  "Social Media Marketing Trends",
  "Nexora Ecommerce",
  "Cebu Media Buyer Pro",
  "Cebu Ecom Hub Cebu Digital Marketing Pro",
  "SmartWay Travel and Tour",
  "SmartWay Visa Services",
  "Mel's Aesthetic & Wellness Shop",
];

const BUSINESS_LOGO_IMAGES = BUSINESS_LOGOS.map((src, i) => ({
  src,
  alt: `Business page logo ${i + 1}`,
}));

const PILL_CLASS =
  "shrink-0 whitespace-nowrap rounded-full border border-noir-line bg-noir-card px-5 py-2.5 text-sm font-medium text-noir-deep/80 hover:border-noir-primary/50 hover:text-noir-primary transition-colors";

function ClientGroup({
  id,
  eyebrow,
  title,
  description,
  items,
  bordered,
  logos,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  bordered?: boolean;
  logos?: { src: string; alt: string }[];
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${bordered ? "border-t border-noir-line" : ""}`}>
      <div className="relative overflow-hidden max-w-6xl mx-auto px-6 md:px-10 text-center">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-4 mx-auto w-72 h-72 rounded-full bg-noir-primary/20 blur-3xl" style={{ animation: "noir-pulse 6s ease-in-out infinite" }} />
        <p className="relative text-sm font-medium text-noir-primary mb-4 tracking-wide uppercase" data-reveal>{eyebrow}</p>
        <h2 className="relative font-sora text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.08]" data-reveal style={{ transitionDelay: "80ms" }}>
          {title}
        </h2>
        <p className="relative mt-6 max-w-xl mx-auto text-noir-deep/60 leading-relaxed" data-reveal style={{ transitionDelay: "160ms" }}>
          {description}
        </p>
      </div>

      {logos && logos.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 md:px-10 mt-10 md:mt-14" data-reveal>
          <LightboxGallery
            images={logos}
            defaultCount={8}
            gridClassName="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-6"
            itemClassName="relative aspect-square rounded-2xl overflow-hidden group bg-white border border-noir-line p-4 block w-full shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-noir-primary/20 hover:border-noir-primary/50"
            imgClassName="w-full h-full object-contain grayscale opacity-80 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
            toggleClassName="mt-8 mx-auto flex items-center gap-1.5 rounded-full border border-noir-line bg-noir-bg px-5 py-2.5 text-sm font-medium text-noir-primary hover:bg-noir-card hover:border-noir-primary/50 transition-colors"
          />
        </div>
      )}

      <div className="mt-14 md:mt-20" data-reveal style={{ transitionDelay: logos && logos.length > 0 ? "120ms" : undefined }}>
        <p className="text-center text-xs text-noir-deep/40 mb-6 flex items-center justify-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8L22 12L18 16" /><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg>
          Drag to explore
        </p>
        <div className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-noir-bg to-transparent z-10" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-noir-bg to-transparent z-10" />
          <Marquee items={items} itemClassName={PILL_CLASS} className="px-6 md:px-10" />
        </div>
      </div>
    </section>
  );
}

export default function Clients() {
  useReveal();

  return (
    <>
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-4 md:pt-28 text-center">
        <p className="text-sm font-medium text-noir-primary mb-4 tracking-wide uppercase" data-reveal>Our Clients</p>
        <h1 className="font-sora text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.08]" data-reveal style={{ transitionDelay: "80ms" }}>
          Businesses We&apos;ve Helped Grow
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-noir-deep/60 leading-relaxed" data-reveal style={{ transitionDelay: "160ms" }}>
          From clinics and franchises to product brands and business pages — here&apos;s a look at who we&apos;ve worked with.
        </p>
      </section>

      <ClientGroup
        id="services"
        eyebrow="Services"
        title="Businesses We've Helped Grow"
        description="From clinics and franchises to IT solutions and communities — here are some of the businesses we've provided digital marketing and business solutions for."
        items={SERVICES_CLIENTS}
        bordered
      />

      <ClientGroup
        id="products"
        eyebrow="Products"
        title="Products We've Helped Build"
        description="From wellness essentials to lifestyle products, we've helped bring these brands to market with marketing strategy and digital presence."
        items={PRODUCTS}
        bordered
      />

      <ClientGroup
        id="business-page"
        eyebrow="Business Page"
        title="Business Pages We Manage"
        description="We build and manage digital presence for pages and communities across e-commerce, media buying, travel, and wellness."
        items={BUSINESS_PAGES}
        logos={BUSINESS_LOGO_IMAGES}
        bordered
      />
    </>
  );
}
