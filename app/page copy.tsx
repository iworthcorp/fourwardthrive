"use client";
import { useEffect, useRef, useState, type RefObject } from "react";
import BackToTop from "@/components/BackToTop";
import ThemeToggle from "@/components/ThemeToggle";
import NetworkBackground from "@/components/NetworkBackground";
import LightboxGallery from "@/components/LightboxGallery";
import { GALLERY_IMAGES } from "@/lib/galleryImages";
import { FEATURED_VIDEO_ID } from "@/lib/videoConfig";

const NAV = ["About", "Testimonials", "Conference", "Gallery", "Contact"];
const SKILLS = [
  { name: "Frontend Development", value: 92 },
  { name: "UI / Product Design", value: 85 },
  { name: "React & TypeScript", value: 90 },
  { name: "Motion &amp; Interaction", value: 78 },
];
const VISION = [
  { title: "To become a trusted force behind the growth of businesses across industries—transforming brands into powerful digital VISIONs, ideas into influence, and ambition into sustainable success." },
  { title: "We envision a future where businesses of every size and industry have the opportunity to thrive, scale, and create meaningful impact beyond traditional boundaries. Through innovative digital marketing, strategic media solutions, and creative excellence, we aim to empower brands to stand out, connect with the right audience, and build a strong presence in an ever-evolving digital world." }
  // { period: "2020 — 2023", title: "Frontend Engineer", org: "Basecamp Labs" },
  // { period: "2018 — 2020", title: "UI Designer", org: "Freelance" },
];

const MISSION = [
  { title: "Our mission is to empower businesses across diverse industries by becoming their strategic partner in growth." },
  { title: "We help brands build a powerful and authentic presence across digital and social media platforms through creative storytelling, strategic digital marketing, impactful media solutions, and data-driven strategies. We go beyond simply creating content—we develop systems, campaigns, and opportunities designed to strengthen visibility, build meaningful audience connections, generate leads, and help businesses scale online." },
  { title: "By combining creative minds, strategic systems, and impactful execution, we transform business goals into measurable growth." },
  { title: "We are committed to helping every business we work with discover its potential, amplify its voice, strengthen its brand, and move confidently toward greater opportunities—because we believe that with the right strategy, creativity, and support, every vision has the power to grow, influence, and thrive." }
];

const EDUCATION = [
  { period: "2016 — 2018", title: "M.A. Interaction Design", org: "Rhode Island School of Design" },
  { period: "2012 — 2016", title: "B.S. Computer Science", org: "University of Michigan" },
];
const PROJECTS = [
  { title: "Orbit Dashboard", cat: "Product Design" },
  { title: "Fintech App Redesign", cat: "App Design" },
  { title: "Studio Brand System", cat: "Visual Design" },
  { title: "Editorial Site", cat: "Responsive Design" },
  { title: "Northlight Rebrand", cat: "Brand Identity" },
  { title: "Basecamp Labs Site", cat: "Web Design" },
].map((p, i) => ({ ...p, src: GALLERY_IMAGES[i] }));

const TESTIMONIALS = [
  { name: "Marta Ilinski", role: "CEO, Northlight", quote: "Darwin turned a vague brief into a product our users actually love using daily.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80" },
  { name: "Devon Wray", role: "Founder, Basecamp Labs", quote: "Rare combination of design taste and the engineering chops to ship it himself.", image: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=800&q=80" },
  { name: "Priya Nandan", role: "Product Lead, Fieldstone", quote: "He pairs sharp visual taste with just enough engineering to actually ship it.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80" },
  { name: "Owen Kessler", role: "Founder, Loop & Co.", quote: "Every review cycle got shorter because the first draft was already right.", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80" },
  { name: "Ines Calder", role: "Head of Product, Northbound", quote: "Our onboarding completion rate jumped 30% after the redesign.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80" },
  { name: "Sam Whitfield", role: "CTO, Halcyon", quote: "Handed off cleanly to our team — components, docs, everything.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80" },
];

const CONFERENCE_TALKS = [
  { title: "Shipping Design Systems at Scale", event: "React Summit", date: "October 22", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80" },
  { title: "From Sketch to Production", event: "Config", date: "May 14", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80" },
  { title: "The Cost of Complexity", event: "JSConf", date: "March 3", image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80" },
  { title: "Design Engineering as a Discipline", event: "Smashing Conf", date: "September 9", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80" },
];

function scrollTrack(ref: RefObject<HTMLDivElement>, dir: 1 | -1) {
  const el = ref.current;
  if (!el) return;
  const card = el.firstElementChild as HTMLElement | null;
  const gap = 24;
  const amount = card ? card.getBoundingClientRect().width + gap : el.clientWidth;
  el.scrollBy({ left: amount * dir, behavior: "smooth" });
}

export default function Design7() {
  const [open, setOpen] = useState(false);
  const [playingTestimonial, setPlayingTestimonial] = useState<number | null>(null);
  const [playingConference, setPlayingConference] = useState<number | null>(null);
  const testimonialTrackRef = useRef<HTMLDivElement>(null);
  const conferenceTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal], [data-skill-fill], [data-timeline-line]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="bg-noir-bg font-worksans text-noir-deep">
      <NetworkBackground />
      <div className="relative z-10">
      <header className="sticky top-0 z-50 bg-noir-bg/90 backdrop-blur border-b border-noir-line">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <a href="#" className="font-sora text-xl font-semibold">FOURWARD TRHIVE<span className="text-noir-primary"></span></a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-noir-deep/70 hover:text-noir-primary transition-colors">
                {item}
              </a>
            ))}
            <a href="#appointment" className="rounded-full bg-noir-primary text-noir-bg text-sm font-semibold px-5 py-2.5 hover:brightness-110 transition-all">
              Book an appoinment
            </a>
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle className="text-noir-deep/70 hover:bg-noir-card hover:text-noir-primary" />
            <button className="md:hidden p-2" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
              <span className="block w-6 h-0.5 bg-noir-deep mb-1.5" />
              <span className="block w-6 h-0.5 bg-noir-deep mb-1.5" />
              <span className="block w-6 h-0.5 bg-noir-deep" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-noir-line px-6 py-4 flex flex-col gap-4 bg-noir-bg">
            {NAV.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="text-sm">{item}</a>
            ))}
            <a href="#appointment" onClick={() => setOpen(false)} className="rounded-full bg-noir-primary text-noir-bg text-sm font-semibold px-5 py-2.5 text-center">
              Book an appoinment
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 mx-auto w-72 h-72 rounded-full bg-noir-primary/25 blur-3xl" style={{ animation: "noir-pulse 6s ease-in-out infinite" }} />
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 w-56 h-56 rounded-full border border-dashed border-noir-primary/30" style={{ animation: "noir-orbit 24s linear infinite" }} />
        <p className="relative text-sm font-medium text-noir-primary mb-4 tracking-wide uppercase" data-reveal>We Build Brands. We Create Presence. We Drive Growth.</p>
        <h1 className="relative font-sora text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08]" data-reveal style={{ transitionDelay: "80ms" }}>
          FOURWARD TRHIVE BUSINESS SOLUTIONS & SERVICES
        </h1>
        <p className="relative mt-6 text-noir-deep/60 max-w-lg mx-auto leading-relaxed" data-reveal style={{ transitionDelay: "160ms" }}>
          I design and build fast, considered products — bridging clean interface design with
          production-grade React code.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-4" data-reveal style={{ transitionDelay: "240ms" }}>
          <a href="#gallery" className="rounded-full bg-noir-primary text-noir-bg px-7 py-3.5 text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-noir-primary/25 transition-all">
            View Work
          </a>
          <a href="#appointment" className="rounded-full border border-noir-line px-7 py-3.5 text-sm font-medium hover:bg-noir-card hover:-translate-y-0.5 transition-all">
            Book Appointment
          </a>
        </div>
      </section>

      {/* About / stats */}
      <section id="about" className="max-w-6xl mx-auto px-6 md:px-10 pb-16 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-square rounded-4xl bg-noir-card border border-noir-line overflow-hidden" data-reveal>
          <img src="/assets/images/image.png" alt="Darwin Lumampao working at a desk" className="w-full h-full object-cover" />
        </div>
        <div data-reveal style={{ transitionDelay: "120ms" }}>
          <h2 className="font-sora text-3xl font-semibold mb-4">A little about me</h2>
          <p className="text-noir-deep/65 leading-relaxed mb-8">
            Eight years building interfaces for startups and studios — from first sketch to shipped
            product. I care about the details most people never notice, and the metrics that matter
            when they do.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[["8+", "Years VISION"], ["120", "Projects shipped"], ["40", "Happy clients"]].map(([num, label]) => (
              <div key={label}>
                <p className="font-sora text-3xl font-semibold text-noir-primary">{num}</p>
                <p className="text-xs text-noir-deep/55 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume timeline */}
      <section className="py-16 md:py-24 border-y border-noir-line">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-sora text-3xl font-semibold mb-10 text-center" data-reveal>Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[["VISION", VISION], ["MISSION", MISSION]].map(([label, items]) => (
              <div key={label as string}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-noir-primary mb-6">{label as string}</h3>
                <div className="relative pl-6">
                  <div className="absolute left-[3px] top-1 bottom-1 w-px bg-noir-line" />
                  <div className="absolute left-[3px] top-1 w-px bg-noir-primary" data-timeline-line />
                  <div className="space-y-8">
                    {(items as { period: string; title: string; org: string }[]).map((it, i) => (
                      <div key={it.title} className="relative" data-reveal style={{ transitionDelay: `${i * 100}ms` }}>
                        <div className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-noir-primary" />
                        <p className="text-xs text-noir-deep/50 mb-1">{it.period}</p>
                        <p className="font-semibold">{it.title}</p>
                        <p className="text-sm text-noir-deep/60">{it.org}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <h2 className="font-sora text-3xl font-semibold mb-10 text-center" data-reveal>Skills</h2>
        <div className="space-y-6">
          {SKILLS.map((s, i) => (
            <div key={s.name} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">{s.name}</span>
                <span className="text-noir-deep/50">{s.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-noir-card overflow-hidden">
                <div className="h-full rounded-full bg-noir-primary" data-skill-fill style={{ ["--skill" as any]: `${s.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 border-y border-noir-line">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between gap-4 mb-12">
            <div className="max-w-xl" data-reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-noir-primary/30 bg-noir-bg px-3 py-1 text-xs font-medium text-noir-primary mb-4">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7-5.4-4.7 7.1-.6z" /></svg>
                Real Stories
              </span>
              <h2 className="font-sora text-3xl md:text-4xl font-semibold text-noir-deep">
                What People <span className="text-noir-primary">Say</span>
              </h2>
              <p className="mt-3 text-sm text-noir-deep/60">
                Hear directly from founders and teams I&apos;ve shipped with.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => scrollTrack(testimonialTrackRef, -1)}
                aria-label="Previous testimonials"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-noir-line text-noir-deep/70 hover:border-noir-primary/50 hover:text-noir-primary transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button
                type="button"
                onClick={() => scrollTrack(testimonialTrackRef, 1)}
                aria-label="Next testimonials"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-noir-line text-noir-deep/70 hover:border-noir-primary/50 hover:text-noir-primary transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>
          <div
            ref={testimonialTrackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((t, i) => {
              const isPlaying = playingTestimonial === i;
              return (
                <div
                  key={t.name}
                  data-reveal
                  style={{ transitionDelay: `${(i % 3) * 120}ms` }}
                  className="group snap-start shrink-0 w-[85%] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] bg-noir-bg rounded-3xl overflow-hidden border border-noir-line"
                >
                  <div className="relative aspect-video overflow-hidden bg-black">
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}?autoplay=1&rel=0`}
                        title={`${t.name}'s testimonial`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPlayingTestimonial(i)}
                        aria-label={`Play ${t.name}'s testimonial`}
                        className="absolute inset-0 w-full h-full text-left cursor-pointer focus:outline-none"
                      >
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <svg width="16" height="16" viewBox="0 0 24 24" className="ml-0.5 fill-noir-bg"><path d="M8 5v14l11-7z" /></svg>
                          </span>
                        </div>
                        <p className="absolute bottom-3 left-4 right-4 text-white text-sm font-medium leading-snug drop-shadow-md">&ldquo;{t.quote}&rdquo;</p>
                      </button>
                    )}
                  </div>
                  <div className="p-6 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-sora font-semibold text-sm text-noir-deep">{t.name}</p>
                      <p className="text-xs text-noir-primary">{t.role}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPlayingTestimonial(isPlaying ? null : i)}
                      className="inline-flex items-center gap-1 rounded-full bg-noir-primary text-noir-bg text-xs font-semibold px-3 py-1.5 shrink-0"
                    >
                      {isPlaying ? (
                        <svg width="10" height="10" viewBox="0 0 24 24" className="fill-noir-bg"><path d="M6 5h4v14H6zm8 0h4v14h-4z" /></svg>
                      ) : (
                        <svg width="10" height="10" viewBox="0 0 24 24" className="fill-noir-bg"><path d="M8 5v14l11-7z" /></svg>
                      )}
                      {isPlaying ? "Pause" : "Play"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conference */}
      <section id="conference" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-end justify-between gap-4 mb-12">
          <div className="max-w-xl" data-reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-noir-primary/30 bg-noir-card px-3 py-1 text-xs font-medium text-noir-primary mb-4">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7-5.4-4.7 7.1-.6z" /></svg>
              Conference Highlights
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-semibold text-noir-deep">
              Speaking &amp; <span className="text-noir-primary">Conferences</span>
            </h2>
            <p className="mt-3 text-sm text-noir-deep/60">
              On design systems and product engineering that ships at scale.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scrollTrack(conferenceTrackRef, -1)}
              aria-label="Previous talks"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-noir-line text-noir-deep/70 hover:border-noir-primary/50 hover:text-noir-primary transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              type="button"
              onClick={() => scrollTrack(conferenceTrackRef, 1)}
              aria-label="Next talks"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-noir-line text-noir-deep/70 hover:border-noir-primary/50 hover:text-noir-primary transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
        <div
          ref={conferenceTrackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CONFERENCE_TALKS.map((c, i) => {
            const isPlaying = playingConference === i;
            return (
              <div
                key={c.title}
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 120}ms` }}
                className="group snap-start shrink-0 w-[85%] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] rounded-3xl overflow-hidden border border-noir-line"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}?autoplay=1&rel=0`}
                      title={c.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlayingConference(i)}
                      aria-label={`Play ${c.title}`}
                      className="absolute inset-0 w-full h-full text-left cursor-pointer focus:outline-none"
                    >
                      <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <svg width="16" height="16" viewBox="0 0 24 24" className="ml-0.5 fill-noir-bg"><path d="M8 5v14l11-7z" /></svg>
                        </span>
                      </div>
                      <p className="absolute bottom-3 left-4 right-4 text-white text-sm font-medium leading-snug drop-shadow-md">{c.event} · {c.date}</p>
                    </button>
                  )}
                </div>
                <div className="p-5 flex items-center justify-between gap-3 bg-noir-card">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-noir-deep truncate">{c.title}</p>
                    <p className="text-xs text-noir-primary">{c.event} · {c.date}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPlayingConference(isPlaying ? null : i)}
                    className="inline-flex items-center gap-1 rounded-full bg-noir-primary text-noir-bg text-xs font-semibold px-3 py-1.5 shrink-0"
                  >
                    {isPlaying ? (
                      <svg width="10" height="10" viewBox="0 0 24 24" className="fill-noir-bg"><path d="M6 5h4v14H6zm8 0h4v14h-4z" /></svg>
                    ) : (
                      <svg width="10" height="10" viewBox="0 0 24 24" className="fill-noir-bg"><path d="M8 5v14l11-7z" /></svg>
                    )}
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gallery / Portfolio */}
      <section id="gallery" className="py-16 md:py-24 border-y border-noir-line">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-sora text-3xl font-semibold mb-10 text-center" data-reveal>Selected Work</h2>
          <LightboxGallery
            images={PROJECTS.map((p) => ({ src: p.src, alt: p.title, title: p.title, cat: p.cat }))}
            defaultCount={3}
            gridClassName="grid sm:grid-cols-2 gap-6"
            itemClassName="relative rounded-3xl overflow-hidden group aspect-[4/3] block w-full"
            captionClassName="absolute inset-0 bg-noir-bg/0 group-hover:bg-noir-bg/70 transition-all duration-300 flex flex-col-reverse items-start p-6 opacity-0 group-hover:opacity-100 text-left"
            titleClassName="font-sora font-semibold"
            catClassName="text-xs text-noir-primary mb-1"
            toggleClassName="mt-8 mx-auto flex items-center gap-1.5 rounded-full border border-noir-line bg-noir-bg px-5 py-2.5 text-sm font-medium text-noir-primary hover:bg-noir-card transition-colors"
          />
        </div>
      </section>

      {/* Contact + Appointment */}
      <section id="contact" className="py-16 md:py-24 border-t border-noir-line">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10">
          <div data-reveal>
            <h2 className="font-sora text-3xl font-semibold mb-4">Let&apos;s work together</h2>
            <p className="text-noir-deep/60 mb-8 max-w-md">Have a project in mind? Send a note and I&apos;ll reply within a day.</p>
            <form className="space-y-3">
              <input placeholder="Full name" className="w-full rounded-xl bg-noir-bg border border-noir-line px-4 py-3 text-sm placeholder:text-noir-deep/40 outline-none focus:border-noir-primary/60 transition-colors" />
              <input placeholder="Email" className="w-full rounded-xl bg-noir-bg border border-noir-line px-4 py-3 text-sm placeholder:text-noir-deep/40 outline-none focus:border-noir-primary/60 transition-colors" />
              <textarea placeholder="Tell me about your project" rows={4} className="w-full rounded-xl bg-noir-bg border border-noir-line px-4 py-3 text-sm placeholder:text-noir-deep/40 outline-none focus:border-noir-primary/60 transition-colors" />
              <button type="button" className="w-full rounded-xl bg-noir-primary text-noir-bg text-sm font-semibold py-3.5 hover:brightness-110 hover:-translate-y-0.5 transition-all">
                Send Message
              </button>
            </form>
          </div>
          <div id="appointment" className="bg-noir-bg border border-noir-line rounded-3xl p-6 md:p-8" data-reveal style={{ transitionDelay: "120ms" }}>
            <h3 className="font-sora text-xl font-semibold mb-1">Book a call</h3>
            <p className="text-noir-deep/60 text-sm mb-5">Grab a slot to talk through your project — no obligation.</p>
            <form className="space-y-3">
              <input placeholder="Full name" className="w-full rounded-xl bg-noir-card border border-noir-line px-4 py-3 text-sm placeholder:text-noir-deep/40 outline-none focus:border-noir-primary/60 transition-colors" />
              <input placeholder="Email" className="w-full rounded-xl bg-noir-card border border-noir-line px-4 py-3 text-sm placeholder:text-noir-deep/40 outline-none focus:border-noir-primary/60 transition-colors" />
              <button type="button" className="w-full rounded-xl bg-appt hover:bg-appt-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-appt/30 transition-all text-white text-sm font-semibold py-3.5">
                Confirm appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 md:px-10 py-8 text-xs text-noir-deep/40 text-center">
        © 2026 Darwin Lumampao. All rights reserved.
      </footer>

      <BackToTop className="bg-noir-primary hover:brightness-90 text-noir-bg" />
      </div>
    </main>
  );
}
