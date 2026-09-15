"use client";
import { useReveal } from "../_components/useReveal";

const TEAM = [
  {
    name: "Mitch",
    title: "Chief Executive Officer | Digital Marketing Specialist & Entrepreneur",
    bio: [
      "A former OFW turned entrepreneur and business owner, Mitch brings real-world business experience and digital marketing expertise to the team. Her journey from working overseas to building businesses gives her a unique perspective on entrepreneurship, income generation, branding, and digital transformation.",
      "As CEO, she focuses on turning business goals into practical marketing strategies that help brands become more visible, credible, and competitive online.",
    ],
    expertise: ["Digital Marketing", "Social Media Strategy", "Branding", "Content Marketing", "Business Development"],
  },
  {
    name: "Raymond Cerida",
    title: "Entrepreneur | Coach | Business Consultant",
    bio: [
      "With an entrepreneurial mindset and passion for developing people and businesses, Raymond Cerida brings coaching and business consulting expertise to Fourward Thrive.",
      "His role is focused on helping business owners identify opportunities, strengthen their business direction, and develop strategies that support sustainable growth.",
    ],
    expertise: ["Entrepreneurship", "Business Coaching", "Business Consulting", "Growth Strategy"],
  },
];

export default function OurTeam() {
  useReveal();

  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-4 mx-auto w-72 h-72 rounded-full bg-noir-primary/20 blur-3xl" style={{ animation: "noir-pulse 6s ease-in-out infinite" }} />
        <p className="relative text-sm font-medium text-noir-primary mb-4 tracking-wide uppercase" data-reveal>Our Team</p>
        <h1 className="relative font-sora text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.08]" data-reveal style={{ transitionDelay: "80ms" }}>
          Fourward Thrive Business Solutions &amp; Services
        </h1>
        <p className="relative mt-6 max-w-2xl mx-auto text-noir-deep/60 leading-relaxed" data-reveal style={{ transitionDelay: "160ms" }}>
          Behind every successful strategy is a team of people who understand business, marketing, technology, and growth.
        </p>
        <p className="relative mt-4 max-w-2xl mx-auto text-noir-deep/60 leading-relaxed" data-reveal style={{ transitionDelay: "220ms" }}>
          At Fourward Thrive, we bring together different experiences and areas of expertise to create one powerful advantage for our clients: a team that can see the bigger picture and execute the details.
        </p>
      </section>

      {/* Team members */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-20 md:pb-28 grid md:grid-cols-2 gap-8">
        {TEAM.map((member, i) => (
          <div
            key={member.name}
            data-reveal
            style={{ transitionDelay: `${i * 120}ms` }}
            className="bg-noir-card border border-noir-line rounded-3xl p-6 md:p-8 flex flex-col items-center text-center"
          >
            <div className="h-28 w-28 rounded-full overflow-hidden border-2 border-noir-primary/40 shrink-0">
              <img src="/assets/images/logo.png" alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="mt-5 font-sora text-xl font-semibold uppercase tracking-wide">{member.name}</h2>
            <p className="mt-1 text-xs font-medium text-noir-primary uppercase tracking-wide">{member.title}</p>

            <div className="mt-5 space-y-3 text-left">
              {member.bio.map((p, j) => (
                <p key={j} className="text-sm text-noir-deep/65 leading-relaxed">{p}</p>
              ))}
            </div>

            <div className="mt-6 w-full">
              <p className="text-xs font-semibold uppercase tracking-wide text-noir-deep/50 mb-3 text-left">Core Expertise</p>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-noir-primary/30 bg-noir-bg px-3 py-1.5 text-xs font-medium text-noir-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
