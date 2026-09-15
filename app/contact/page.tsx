"use client";
import { useReveal } from "../_components/useReveal";

const PHONES = [
  { label: "Smart", number: "0929 768 5027" },
  { label: "Globe", number: "0927 881 6056" },
];

const COMING_SOON = [
  {
    label: "Facebook Page",
    status: "In the making",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" /></svg>
    ),
  },
  {
    label: "Website",
    status: "In the making",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></svg>
    ),
  },
];

export default function Contact() {
  useReveal();

  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-12 md:pt-28 text-center">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-4 mx-auto w-72 h-72 rounded-full bg-noir-primary/20 blur-3xl" style={{ animation: "noir-pulse 6s ease-in-out infinite" }} />
        <p className="relative text-sm font-medium text-noir-primary mb-4 tracking-wide uppercase" data-reveal>Contact</p>
        <h1 className="relative font-sora text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.08]" data-reveal style={{ transitionDelay: "80ms" }}>
          Let&apos;s Talk
        </h1>
        <p className="relative mt-6 max-w-xl mx-auto text-noir-deep/60 leading-relaxed" data-reveal style={{ transitionDelay: "160ms" }}>
          Have a business you want to grow? Send us a message or reach out directly — we&apos;d love to hear from you.
        </p>
      </section>

      {/* Contact details + form */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-20 md:pb-28 grid md:grid-cols-2 gap-8 items-start">
        {/* Direct contact card */}
        <div className="bg-noir-card border border-noir-line rounded-3xl p-6 md:p-8" data-reveal>
          <h2 className="font-sora text-xl font-semibold mb-1">Get in Touch</h2>
          <p className="text-noir-deep/60 text-sm mb-6">Reach us directly through any of the channels below.</p>

          <div className="space-y-3">
            {/* Email */}
            <a
              href="mailto:Fourwardthrive@gmail.com"
              className="group flex items-center gap-4 rounded-2xl bg-noir-bg border border-noir-line px-5 py-4 hover:border-noir-primary/50 transition-colors"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-noir-primary/15 text-noir-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-noir-deep/50">Email</span>
                <span className="block text-sm font-medium text-noir-deep group-hover:text-noir-primary transition-colors truncate">
                  Fourwardthrive@gmail.com
                </span>
              </span>
            </a>

            {/* Phones */}
            {PHONES.map((p) => (
              <a
                key={p.label}
                href={`tel:${p.number.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 rounded-2xl bg-noir-bg border border-noir-line px-5 py-4 hover:border-noir-primary/50 transition-colors"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-noir-primary/15 text-noir-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-noir-deep/50">{p.label}</span>
                  <span className="block text-sm font-medium text-noir-deep group-hover:text-noir-primary transition-colors">
                    {p.number}
                  </span>
                </span>
              </a>
            ))}

            {/* Coming soon */}
            {COMING_SOON.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 rounded-2xl bg-noir-bg border border-dashed border-noir-line px-5 py-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-noir-deep/10 text-noir-deep/50">
                  {c.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-noir-deep/50">{c.label}</span>
                  <span className="block text-sm font-medium text-noir-deep/70">{c.status}</span>
                </span>
                <span className="shrink-0 rounded-full border border-noir-line px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-noir-deep/50">
                  Soon
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Message form */}
        <div className="bg-noir-card border border-noir-line rounded-3xl p-6 md:p-8" data-reveal style={{ transitionDelay: "120ms" }}>
          <h2 className="font-sora text-xl font-semibold mb-1">Send a Message</h2>
          <p className="text-noir-deep/60 text-sm mb-6">Tell us about your business and we&apos;ll get back to you.</p>
          <form className="space-y-3">
            <input placeholder="Full name" className="w-full rounded-xl bg-noir-bg border border-noir-line px-4 py-3 text-sm placeholder:text-noir-deep/40 outline-none focus:border-noir-primary/60 transition-colors" />
            <input placeholder="Email" className="w-full rounded-xl bg-noir-bg border border-noir-line px-4 py-3 text-sm placeholder:text-noir-deep/40 outline-none focus:border-noir-primary/60 transition-colors" />
            <input placeholder="Phone number" className="w-full rounded-xl bg-noir-bg border border-noir-line px-4 py-3 text-sm placeholder:text-noir-deep/40 outline-none focus:border-noir-primary/60 transition-colors" />
            <textarea placeholder="Tell us about your business" rows={5} className="w-full rounded-xl bg-noir-bg border border-noir-line px-4 py-3 text-sm placeholder:text-noir-deep/40 outline-none focus:border-noir-primary/60 transition-colors" />
            <button type="button" className="w-full rounded-xl bg-noir-primary text-noir-bg text-sm font-semibold py-3.5 hover:brightness-110 hover:-translate-y-0.5 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
