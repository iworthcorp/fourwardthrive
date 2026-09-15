"use client";
import { useRef, useState, type RefObject } from "react";
import LightboxGallery from "@/components/LightboxGallery";
import { GALLERY_IMAGES } from "@/lib/galleryImages";
import { FEATURED_VIDEO_ID } from "@/lib/videoConfig";
import { useReveal } from "../_components/useReveal";

const PROJECTS = [
  { title: "Orbit Dashboard", cat: "Product Design" },
  { title: "Fintech App Redesign", cat: "App Design" },
  { title: "Studio Brand System", cat: "Visual Design" },
  { title: "Editorial Site", cat: "Responsive Design" },
  { title: "Northlight Rebrand", cat: "Brand Identity" },
  { title: "Basecamp Labs Site", cat: "Web Design" },
].map((p, i) => ({ ...p, src: GALLERY_IMAGES[i] }));

const TESTIMONIALS = [
  { name: "Marta Ilinski", role: "CEO, Northlight", quote: "Fourward Thrive turned a vague brief into a brand our customers actually recognize.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80" },
  { name: "Devon Wray", role: "Founder, Basecamp Labs", quote: "Rare combination of strategy and execution — they don't just plan, they ship.", image: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=800&q=80" },
  { name: "Priya Nandan", role: "Product Lead, Fieldstone", quote: "They paired sharp creative instincts with the systems to actually scale it.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80" },
  { name: "Owen Kessler", role: "Founder, Loop & Co.", quote: "Every campaign cycle got shorter because the strategy was already right.", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80" },
  { name: "Ines Calder", role: "Head of Product, Northbound", quote: "Our lead volume jumped 30% within the first quarter of working together.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80" },
  { name: "Sam Whitfield", role: "CTO, Halcyon", quote: "Handed off cleanly to our team — systems, docs, everything in place.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80" },
];

function scrollTrack(ref: RefObject<HTMLDivElement>, dir: 1 | -1) {
  const el = ref.current;
  if (!el) return;
  const card = el.firstElementChild as HTMLElement | null;
  const gap = 24;
  const amount = card ? card.getBoundingClientRect().width + gap : el.clientWidth;
  el.scrollBy({ left: amount * dir, behavior: "smooth" });
}

export default function Testimonials() {
  useReveal();
  const [playingTestimonial, setPlayingTestimonial] = useState<number | null>(null);
  const testimonialTrackRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-12 md:pt-28 text-center">
        <p className="text-sm font-medium text-noir-primary mb-4 tracking-wide uppercase" data-reveal>Testimonials</p>
        <h1 className="font-sora text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.08]" data-reveal style={{ transitionDelay: "80ms" }}>
          What Our Clients Say
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-noir-deep/60 leading-relaxed" data-reveal style={{ transitionDelay: "160ms" }}>
          Hear directly from the businesses we've helped build presence, and browse a look at the work itself.
        </p>
      </section>

      {/* Videos */}
      <section id="videos" className="scroll-mt-24 py-16 md:py-24 border-y border-noir-line">
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
                Hear directly from the businesses we've partnered with.
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

      {/* Gallery / Portfolio */}
      <section id="gallery" className="scroll-mt-24 py-16 md:py-24">
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
    </>
  );
}
