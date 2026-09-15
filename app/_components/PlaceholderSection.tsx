"use client";
import { useReveal } from "./useReveal";
import NavLink from "./NavLink";

export default function PlaceholderSection({
  eyebrow,
  title,
  description,
  ctaHref = "/contact",
  ctaLabel = "Get in Touch",
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  useReveal();

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
      <p className="text-sm font-medium text-noir-primary mb-4 tracking-wide uppercase" data-reveal>{eyebrow}</p>
      <h1 className="font-sora text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.08]" data-reveal style={{ transitionDelay: "80ms" }}>
        {title}
      </h1>
      <p className="mt-6 max-w-xl mx-auto text-noir-deep/60 leading-relaxed" data-reveal style={{ transitionDelay: "160ms" }}>
        {description}
      </p>
      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-dashed border-noir-line px-4 py-2 text-xs text-noir-deep/50" data-reveal style={{ transitionDelay: "220ms" }}>
        Content coming soon
      </div>
      {ctaHref && (
        <div className="mt-10" data-reveal style={{ transitionDelay: "280ms" }}>
          <NavLink href={ctaHref} className="rounded-full bg-noir-primary text-noir-bg px-7 py-3.5 text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-noir-primary/25 transition-all">
            {ctaLabel}
          </NavLink>
        </div>
      )}
    </section>
  );
}
