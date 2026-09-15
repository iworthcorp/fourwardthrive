"use client";
import { useReveal } from "../_components/useReveal";

const VISION = [
  { title: "To become a trusted force behind the growth of businesses across industries—transforming brands into powerful digital VISIONs, ideas into influence, and ambition into sustainable success." },
  { title: "We envision a future where businesses of every size and industry have the opportunity to thrive, scale, and create meaningful impact beyond traditional boundaries. Through innovative digital marketing, strategic media solutions, and creative excellence, we aim to empower brands to stand out, connect with the right audience, and build a strong presence in an ever-evolving digital world." },
];

const MISSION = [
  { title: "Our mission is to empower businesses across diverse industries by becoming their strategic partner in growth." },
  { title: "We help brands build a powerful and authentic presence across digital and social media platforms through creative storytelling, strategic digital marketing, impactful media solutions, and data-driven strategies. We go beyond simply creating content—we develop systems, campaigns, and opportunities designed to strengthen visibility, build meaningful audience connections, generate leads, and help businesses scale online." },
  { title: "By combining creative minds, strategic systems, and impactful execution, we transform business goals into measurable growth." },
  { title: "We are committed to helping every business we work with discover its potential, amplify its voice, strengthen its brand, and move confidently toward greater opportunities—because we believe that with the right strategy, creativity, and support, every vision has the power to grow, influence, and thrive." },
];

const WHATWEDO = [
  { name: "Brand Development & Positioning", role: "Building a clear, recognizable, and compelling brand identity" },
  { name: "Social Media Management", role: "Creating and managing an active, professional, and engaging online presence." },
  { name: "Content Strategy & Creative Media", role: " Developing content that captures attention, communicates value, and builds connection." },
  { name: "Digital Marketing", role: "Creating strategic campaigns designed to increase visibility, engagement, leads, and conversions." },
  { name: "Media Marketing & Advertising", role: "Maximizing digital platforms and paid media to put your business in front of the right audience." },
  { name: "Lead Generation & Customer Acquisition", role: "Developing strategies that turn attention into inquiries and inquiries into potential customers." },
  { name: "Website & Landing Page Solutions", role: "Creating digital touchpoints that guide audiences from discovery to action." },
  { name: "Business & Marketing Strategy", role: "Identifying opportunities, solving marketing challenges, and creating systems that support sustainable growth." },
  { name: "Creative & Multimedia Solutions", role: "Producing visual and multimedia assets that elevate the way your business communicates online." },
];

const WHODOWESERVE = [
  { title: "Start-ups & New Businesses", desc: "Helping new ventures establish a professional brand, build credibility, and enter the market with confidence." },
  { title: "Small & Growing Businesses", desc: "Helping businesses strengthen their visibility, attract more customers, and create systems for sustainable growth." },
  { title: "Established Brands", desc: "Helping existing businesses refresh their presence, expand their reach, and unlock new digital opportunities." },
  { title: "Service-Based Businesses & Professionals", desc: "Turning expertise and services into compelling digital brands that attract the right audience." },
  { title: "Product-Based Businesses & E-Commerce Brands", desc: "Building online visibility and marketing strategies designed to turn products into recognizable and competitive brands." },
  { title: "Organizations & Entrepreneurs", desc: "Providing strategic creative and digital solutions that support their goals, campaigns, and long-term growth." },
];

export default function About() {
  useReveal();

  return (
    <>
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-14 pb-16 md:pt-20 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-square rounded-4xl bg-noir-card border border-noir-line overflow-hidden" data-reveal>
          <img src="/assets/images/image.png" alt="Fourward Thrive team working" className="w-full h-full object-cover" />
        </div>
        <div data-reveal style={{ transitionDelay: "120ms" }}>
          <h1 className="font-sora text-3xl font-semibold mb-4">About Four<span className="text-noir-primary">ward</span> Thrive</h1>
          <p className="text-noir-deep/65 leading-relaxed mb-8">
            <span className="text-noir-primary font-semibold">Fourward Thrive Business Solutions & Services</span> is a strategic business growth partner dedicated to helping businesses transform their ideas, products, and services into brands that are <span className="text-noir-primary font-semibold">visible, credible, competitive, and built to grow.</span>
          </p>
          <p className="text-noir-deep/65 leading-relaxed mb-8">
            In today's business landscape, having a great product or service is no longer enough. Your business needs to be seen, remembered, trusted, and chosen. That is where we come in.
          </p>
          <p className="text-noir-deep/65 leading-relaxed mb-8">
            We work with businesses across different industries to build and strengthen their <span className="text-noir-primary font-semibold">social media presence, digital identity, marketing systems, and online customer journey.</span> From brand positioning and creative content to digital campaigns, media marketing, lead generation, and online growth strategies, we bring together creativity, strategy, and execution to turn your business goals into opportunities.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="scroll-mt-24 py-16 md:py-24 border-y border-noir-line">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-sora text-3xl font-semibold mb-10 text-center" data-reveal>Vision<span className="text-noir-primary">&</span> Mission</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[["VISION", VISION], ["MISSION", MISSION]].map(([label, items]) => (
              <div key={label as string}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-noir-primary mb-6">{label as string}</h3>
                <div className="relative pl-6">
                  <div className="absolute left-[3px] top-1 bottom-1 w-px bg-noir-line" />
                  <div className="absolute left-[3px] top-1 w-px bg-noir-primary" data-timeline-line />
                  <div className="space-y-8">
                    {(items as { title: string }[]).map((it, i) => (
                      <div key={it.title} className="relative" data-reveal style={{ transitionDelay: `${i * 100}ms` }}>
                        <div className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-noir-primary" />
                        <p className="font-semibold">{it.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="scroll-mt-24 py-16 md:py-24 border-y border-noir-line">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between gap-4 mb-12">
            <div data-reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-noir-primary/30 bg-noir-bg px-3 py-1 text-xs font-medium text-noir-primary mb-4">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7-5.4-4.7 7.1-.6z" /></svg>
                <h2 className="font-sora text-3xl md:text-4xl font-semibold text-noir-deep">
                  What We <span className="text-noir-primary">Do</span>
                </h2>
              </span>
              <p className="mt-3 text-lg text-noir-deep/60">
                We provide end-to-end solutions designed to help businesses establish their presence,
                connect with their market, and scale in the digital space.
              </p>
              <p className="mt-3 text-lg text-noir-deep/60 text-noir-primary">
                Our solutions include
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHATWEDO.map((t, i) => (
              <div
                key={t.name}
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 120}ms` }}
                className="bg-noir-bg rounded-3xl overflow-hidden border border-noir-line"
              >
                <div className="p-6 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-sora font-semibold text-md text-noir-primary">{t.name}</p>
                    <p className="text-sm text-noir-deep">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="who-we-serve" className="scroll-mt-24 py-16 md:py-24 border-y border-noir-line">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between gap-4 mb-12">
            <div data-reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-noir-primary/30 bg-noir-bg px-3 py-1 text-xs font-medium text-noir-primary mb-4">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7-5.4-4.7 7.1-.6z" /></svg>
                <h2 className="font-sora text-3xl md:text-4xl font-semibold text-noir-deep">
                  Who Do We <span className="text-noir-primary">Serve</span>
                </h2>
              </span>
              <p className="mt-3 text-lg text-noir-deep/60">
                We serve <span className="text-noir-primary font-semibold">businesses with ambition.</span>
              </p>
              <p className="mt-3 text-lg text-noir-deep/60">
                Whether you are a <span className="text-noir-primary font-semibold">start-up building your first identity, an established business ready to expand, a growing brand looking to scale, or an organization seeking to strengthen its digital presence</span>, we create solutions around where you are—and where you want to go.
              </p>
              <p className="mt-3 text-lg text-noir-deep/60">
                We work with businesses across <span className="text-noir-primary font-semibold">different industries, industries and business</span> models, because our approach is not limited to one niche. Every business has a unique story, market, challenge, and opportunity. Our role is to understand those differences and build a strategy that fits.
              </p>
              <p className="mt-3 text-lg text-noir-deep/60">
                We serve:
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHODOWESERVE.map((t, i) => (
              <div
                key={t.title}
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 120}ms` }}
                className="bg-noir-bg rounded-3xl overflow-hidden border border-noir-line"
              >
                <div className="p-6 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-sora font-semibold text-md text-noir-primary">{t.title}</p>
                    <p className="text-sm text-noir-deep">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promises */}
      <section id="our-promises" className="scroll-mt-24 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-sora text-3xl font-semibold mb-10 text-center" data-reveal>More Than A Service Provider</h2>
          <div className="flex items-end justify-between gap-4 mb-12">
            <div data-reveal className="font-sora">
              <p className="mt-3 mb-10 text-lg text-noir-deep">
                We don't believe in simply <span className="text-noir-primary font-semibold">posting content, running advertisements, or managing pages.</span>
              </p>
              <p className="mt-3 mb-10 text-lg text-noir-deep">
                We believe in building <span className="text-noir-primary font-semibold">business assets that create value.</span>
              </p>
              <p className="mt-3 text-lg text-noir-deep">
                Every strategy, creative piece, campaign, and digital solution we develop is designed to serve a bigger purpose: <span className="text-noir-primary font-semibold">to make your business more visible, more relevant, more competitive, and more capable of generating growth.</span>
              </p>
              <p className="mt-3 text-lg text-noir-deep">
                We become an extension of your team—bringing together <span className="text-noir-primary font-semibold">creative thinking, strategic planning, technology, media, and execution</span> to help move your business forward.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-sora text-3xl font-semibold mb-10 text-center" data-reveal>Our Promises</h2>
          <div className="flex items-end justify-between gap-4 mb-12">
            <div data-reveal className="font-sora">
              <p className="mt-3 mb-10 text-lg text-noir-deep">
                <span className="text-noir-primary font-semibold">Your business has a story worth telling, a market worth reaching, and a potential worth pursuing</span>
              </p>
              <p className="mt-3 mb-10 text-lg text-noir-deep">
                We are here to help you turn that potential into presence, that presence into connection, and that connection into <span className="text-noir-primary font-semibold">growth.</span>
              </p>
              <p className="mt-3 text-lg text-noir-deep">
                <span className="text-noir-primary font-semibold">We don't just help businesses go online.</span>
              </p>
              <p className="mt-3 text-lg text-noir-deep">
                <span className="text-noir-primary font-semibold">We help businesses move forward.</span>
              </p>
              <p className="mt-3 mb-10 text-lg text-noir-deep">
                <span className="text-noir-primary font-semibold">We help businesses thrive.</span>
              </p>
              <p className="mt-3 text-lg text-noir-deep">
                <span className="text-noir-primary font-semibold">Fourward Thrive Business Solutions & Services</span>
              </p>
              <p className="mt-3 text-lg text-noir-deep">
                Where Strategy Meets Creativity. Where Presence Becomes Growth
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
