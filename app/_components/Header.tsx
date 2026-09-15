"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import NavLink from "./NavLink";

const NAV = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Mission & Vision", href: "/about#mission-vision" },
      { label: "What We Do", href: "/about#what-we-do" },
      { label: "Who We Serve", href: "/about#who-we-serve" },
      { label: "Our Promises", href: "/about#our-promises" },
    ],
  },
  { label: "Clients", href: "/clients" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Business Page", href: "/business-page" },
  { label: "Our Team", href: "/our-team" },
  { label: "Packages", href: "/packages" },
  {
    label: "Testimonials",
    href: "/testimonials",
    children: [
      { label: "Gallery", href: "/testimonials#gallery" },
      { label: "Videos", href: "/testimonials#videos" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-noir-bg/90 backdrop-blur border-b border-noir-line">
      <div className="mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <NavLink href="/" className="font-sora text-xl font-semibold shrink-0">
          FOURWARD THRIVE<span className="text-noir-primary"></span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            if (item.children) {
              return (
                <div key={item.href} className="relative group">
                  <NavLink
                    href={item.href}
                    className={`text-sm text-noir-deep/70 hover:text-noir-primary transition-colors ${
                      isActive ? "text-noir-primary font-medium" : ""
                    }`}
                  >
                    {item.label}
                  </NavLink>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 hidden group-hover:block group-focus-within:block">
                    <div className="min-w-56 rounded-2xl border border-noir-line bg-noir-bg shadow-xl p-2">
                      {item.children.map((sub) => (
                        <NavLink
                          key={sub.href}
                          href={sub.href}
                          className="block rounded-xl px-3 py-2 text-sm text-noir-deep/70 hover:text-noir-primary hover:bg-noir-card transition-colors whitespace-nowrap"
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <NavLink
                key={item.href}
                href={item.href}
                className={`text-sm text-noir-deep/70 hover:text-noir-primary transition-colors ${
                  isActive ? "text-noir-primary font-medium" : ""
                }`}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <ThemeToggle className="text-noir-deep/70 hover:bg-noir-card hover:text-noir-primary" />
          <NavLink
            href="/contact"
            className="rounded-full bg-noir-primary text-noir-bg text-sm font-semibold px-5 py-2.5 hover:brightness-110 transition-all"
          >
            Book an appointment
          </NavLink>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle className="text-noir-deep/70 hover:bg-noir-card hover:text-noir-primary" />
          <button className="p-2" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className="block w-6 h-0.5 bg-noir-deep mb-1.5" />
            <span className="block w-6 h-0.5 bg-noir-deep mb-1.5" />
            <span className="block w-6 h-0.5 bg-noir-deep" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-1 border-t border-noir-line">
          {NAV.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            if (item.children) {
              return (
                <div key={item.href} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <NavLink
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`py-2 text-sm ${isActive ? "text-noir-primary font-medium" : ""}`}
                    >
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={mobileSubOpen}
                      onClick={() => setMobileSubOpen((v) => !v)}
                      className="p-2 text-noir-deep/60"
                    >
                      {mobileSubOpen ? "−" : "+"}
                    </button>
                  </div>
                  {mobileSubOpen && (
                    <div className="pl-4 pb-2 flex flex-col gap-1 border-l border-noir-line">
                      {item.children.map((sub) => (
                        <NavLink
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="py-1.5 text-sm text-noir-deep/70"
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm ${isActive ? "text-noir-primary font-medium" : ""}`}
              >
                {item.label}
              </NavLink>
            );
          })}
          <NavLink
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-noir-primary text-noir-bg text-sm font-semibold px-5 py-2.5 text-center"
          >
            Book an appointment
          </NavLink>
        </div>
      )}
    </header>
  );
}
