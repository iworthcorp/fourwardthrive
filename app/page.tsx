"use client";
import { useReveal } from "./_components/useReveal";
import NavLink from "./_components/NavLink";

export default function Design7() {
  useReveal();

  return (
    <section className="relative overflow-hidden max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 mx-auto w-72 h-72 rounded-full bg-noir-primary/25 blur-3xl" style={{ animation: "noir-pulse 6s ease-in-out infinite" }} />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 w-56 h-56 rounded-full border border-dashed border-noir-primary/30" style={{ animation: "noir-orbit 24s linear infinite" }} />
      <p className="relative text-sm font-medium text-noir-primary mb-4 tracking-wide uppercase" data-reveal>We Build Brands. We Create Presence. We Drive Growth.</p>
      <h1 className="relative font-sora text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08]" data-reveal style={{ transitionDelay: "80ms" }}>
        FOURWARD THRIVE BUSINESS SOLUTIONS & SERVICES
      </h1>
      <div className="relative mt-8 flex flex-wrap justify-center gap-4" data-reveal style={{ transitionDelay: "240ms" }}>
        <NavLink href="/about" className="rounded-full bg-noir-primary text-noir-bg px-7 py-3.5 text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-noir-primary/25 transition-all">
          Learn More
        </NavLink>
        <NavLink href="/contact" className="rounded-full border border-noir-line px-7 py-3.5 text-sm font-medium hover:bg-noir-card hover:-translate-y-0.5 transition-all">
          Book Appointment
        </NavLink>
      </div>
    </section>
  );
}
