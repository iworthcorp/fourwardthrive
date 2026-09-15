"use client";
import { useReveal } from "./_components/useReveal";
import NavLink from "./_components/NavLink";

export default function Design7() {
  useReveal();

  return (
    <section className="relative overflow-hidden max-w-6xl mx-auto px-6 md:px-10 py-6 md:py-8 min-h-[calc(100dvh-11rem)] flex flex-col items-center justify-center text-center">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 mx-auto w-72 h-72 rounded-full bg-noir-primary/25 blur-3xl" style={{ animation: "noir-pulse 6s ease-in-out infinite" }} />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 w-56 h-56 rounded-full border border-dashed border-noir-primary/30" style={{ animation: "noir-orbit 24s linear infinite" }} />

      <div className="relative mb-5 md:mb-6 flex justify-center shrink-0" data-reveal>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 m-auto w-[min(46vh,420px)] h-[min(46vh,420px)] rounded-full bg-noir-primary/30 blur-2xl"
          style={{ animation: "noir-pulse 6s ease-in-out infinite" }}
        />
        <img
          src="/assets/images/fourward-thrive-logo.jpg"
          alt="Fourward Thrive Business Solutions logo"
          className="relative w-[min(38vh,340px)] h-[min(38vh,340px)] rounded-full object-cover shadow-2xl shadow-noir-primary/30 ring-1 ring-white/10 transition-transform duration-500 ease-out hover:scale-105 hover:rotate-3"
        />
      </div>

      <p className="relative text-xs font-medium text-noir-primary mb-2 tracking-wide uppercase" data-reveal style={{ transitionDelay: "40ms" }}>We Build Brands. We Create Presence. We Drive Growth.</p>
      <h1 className="relative font-sora text-xl sm:text-2xl md:text-3xl font-semibold leading-[1.15]" data-reveal style={{ transitionDelay: "80ms" }}>
        FOURWARD THRIVE BUSINESS SOLUTIONS & SERVICES
      </h1>
      <div className="relative mt-6 flex flex-wrap justify-center gap-4" data-reveal style={{ transitionDelay: "240ms" }}>
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
