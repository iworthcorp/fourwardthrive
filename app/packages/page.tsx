"use client";
import LightboxGallery from "@/components/LightboxGallery";
import { useReveal } from "../_components/useReveal";
import NavLink from "../_components/NavLink";

const PACKAGES = [
  {
    src: "/assets/images/package/image1.webp",
    alt: "Package 1 - Brand Awareness Package",
    title: "Package 1 — Brand Awareness Package",
    cat: "Building your digital foundation",
  },
  {
    src: "/assets/images/package/image2.webp",
    alt: "Package 2 - Brand Engagement Package",
    title: "Package 2 — Brand Engagement Package",
    cat: "Turning attention into engagement",
  },
  {
    src: "/assets/images/package/image3.webp",
    alt: "Package 3 - Influencer & Content Growth Package",
    title: "Package 3 — Influencer & Content Growth Package",
    cat: "Creating content. Building trust. Driving growth.",
  },
  {
    src: "/assets/images/package/image4.webp",
    alt: "Package 4 - Multi-Media Exposure Package",
    title: "Package 4 — Multi-Media Exposure Package",
    cat: "From digital presence to mass media visibility",
  },
];

export default function Packages() {
  useReveal();

  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-12 md:pt-28 text-center">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-4 mx-auto w-72 h-72 rounded-full bg-noir-primary/20 blur-3xl" style={{ animation: "noir-pulse 6s ease-in-out infinite" }} />
        <p className="relative text-sm font-medium text-noir-primary mb-4 tracking-wide uppercase" data-reveal>Packages</p>
        <h1 className="relative font-sora text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.08]" data-reveal style={{ transitionDelay: "80ms" }}>
          Find the Right Package for Your Growth
        </h1>
        <p className="relative mt-6 max-w-2xl mx-auto text-noir-deep/60 leading-relaxed" data-reveal style={{ transitionDelay: "160ms" }}>
          From building your first digital foundation to full multi-media exposure — pick the package that matches where your business is today. Tap any card to view the full details.
        </p>
      </section>

      {/* Package gallery */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 pb-8" data-reveal style={{ transitionDelay: "220ms" }}>
        <LightboxGallery
          images={PACKAGES}
          defaultCount={4}
          gridClassName="grid sm:grid-cols-2 gap-6"
          itemClassName="relative rounded-3xl overflow-hidden group bg-noir-card border border-noir-line block w-full aspect-[2/3] p-2"
          imgClassName="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
          captionClassName="absolute inset-x-2 bottom-2 rounded-2xl bg-noir-bg/0 group-hover:bg-noir-bg/80 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300 flex flex-col items-start justify-end p-5 opacity-0 group-hover:opacity-100 text-left pointer-events-none"
          titleClassName="font-sora font-semibold text-white"
          catClassName="text-xs text-noir-primary mt-1"
        />
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 md:px-10 pb-20 md:pb-28 text-center" data-reveal>
        <p className="text-noir-deep/60 leading-relaxed mb-6">
          Not sure which package fits your business? Send us a message and we&apos;ll help you find the right fit.
        </p>
        <NavLink
          href="/contact"
          className="inline-flex rounded-full bg-noir-primary text-noir-bg px-7 py-3.5 text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-noir-primary/25 transition-all"
        >
          Talk to Us
        </NavLink>
      </section>
    </>
  );
}
