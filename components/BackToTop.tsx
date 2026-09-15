"use client";
import { useEffect, useRef, useState } from "react";

export default function BackToTop({ className = "bg-appt hover:bg-appt-hover text-white" }: { className?: string }) {
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const check = () => {
      const threshold = Math.max(320, window.innerHeight * 0.6);
      setVisible(window.scrollY > threshold);
      ticking.current = false;
    };

    const requestCheck = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(check);
      }
    };

    check();
    window.addEventListener("scroll", requestCheck, { passive: true });
    window.addEventListener("resize", requestCheck);

    const ro = new ResizeObserver(requestCheck);
    ro.observe(document.body);

    return () => {
      window.removeEventListener("scroll", requestCheck);
      window.removeEventListener("resize", requestCheck);
      ro.disconnect();
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full shadow-lg shadow-black/20 ring-1 ring-black/5 flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:[animation-play-state:paused] active:scale-95 ${className} ${
        visible ? "opacity-100 scale-100 translate-y-0 pointer-events-auto animate-float" : "opacity-0 scale-75 translate-y-3 pointer-events-none"
      }`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
