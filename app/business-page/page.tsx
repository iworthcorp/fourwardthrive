"use client";
import Marquee from "../_components/Marquee";
import { useReveal } from "../_components/useReveal";

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

const PILL_CLASS =
  "shrink-0 whitespace-nowrap rounded-full border border-noir-line bg-noir-card px-5 py-2.5 text-sm font-medium text-noir-deep/80 hover:border-noir-primary/50 hover:text-noir-primary transition-colors";

export default function BusinessPage() {
  useReveal();

  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-12 md:pt-28 text-center">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-4 mx-auto w-72 h-72 rounded-full bg-noir-primary/20 blur-3xl" style={{ animation: "noir-pulse 6s ease-in-out infinite" }} />
        <p className="relative text-sm font-medium text-noir-primary mb-4 tracking-wide uppercase" data-reveal>Business Page</p>
        <h1 className="relative font-sora text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.08]" data-reveal style={{ transitionDelay: "80ms" }}>
          Business Pages We Manage
        </h1>
        <p className="relative mt-6 max-w-xl mx-auto text-noir-deep/60 leading-relaxed" data-reveal style={{ transitionDelay: "160ms" }}>
          We build and manage digital presence for pages and communities across e-commerce, media buying, travel, and wellness.
        </p>
      </section>

      {/* Marquee */}
      <section className="py-10 md:py-16 border-y border-noir-line" data-reveal>
        <p className="text-center text-xs text-noir-deep/40 mb-6 flex items-center justify-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8L22 12L18 16" /><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg>
          Drag to explore
        </p>
        <div className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-noir-bg to-transparent z-10" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-noir-bg to-transparent z-10" />
          <Marquee items={BUSINESS_PAGES} itemClassName={PILL_CLASS} className="px-6 md:px-10" />
        </div>
      </section>
    </>
  );
}
