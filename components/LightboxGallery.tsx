"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  cat?: string;
}

interface LightboxGalleryProps {
  images: GalleryImage[];
  defaultCount?: number;
  gridClassName?: string;
  itemClassName?: string;
  featuredItemClassName?: string;
  imgClassName?: string;
  featuredFirst?: boolean;
  captionClassName?: string;
  titleClassName?: string;
  catClassName?: string;
  toggleClassName?: string;
}

export default function LightboxGallery({
  images,
  defaultCount = 6,
  gridClassName = "grid grid-cols-2 md:grid-cols-4 gap-4",
  itemClassName = "rounded-2xl overflow-hidden group aspect-square",
  featuredItemClassName,
  imgClassName = "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110",
  featuredFirst = false,
  captionClassName = "mt-3 text-sm",
  titleClassName = "font-medium leading-snug",
  catClassName = "text-xs opacity-70",
  toggleClassName = "mt-8 mx-auto flex items-center gap-1.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
}: LightboxGalleryProps) {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const hasMore = images.length > defaultCount;
  const visible = expanded ? images : images.slice(0, defaultCount);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, images.length]);

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className={gridClassName}>
        {visible.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Maximize ${img.alt}`}
            className={`relative text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              i === 0 && featuredFirst && featuredItemClassName ? featuredItemClassName : itemClassName
            }`}
          >
            <img src={img.src} alt={img.alt} className={imgClassName} loading="lazy" />
            {(img.title || img.cat) && (
              <div className={captionClassName}>
                {img.title && <p className={titleClassName}>{img.title}</p>}
                {img.cat && <p className={catClassName}>{img.cat}</p>}
              </div>
            )}
          </button>
        ))}
      </div>

      {hasMore && (
        <button type="button" onClick={() => setExpanded((v) => !v)} className={toggleClassName}>
          {expanded ? "See less" : `See more (${images.length - defaultCount})`}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      )}

      {active && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center overscroll-contain bg-black/90 backdrop-blur-sm p-4 sm:p-8 md:p-12 animate-[lightbox-fade-in_0.2s_ease-out]"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Minimize"
            className="fixed top-4 right-4 md:top-6 md:right-6 z-[101] flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
                }}
                aria-label="Previous image"
                className="fixed left-2 md:left-6 top-1/2 -translate-y-1/2 z-[101] flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
                }}
                aria-label="Next image"
                className="fixed right-2 md:right-6 top-1/2 -translate-y-1/2 z-[101] flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          <div
            className="relative flex flex-col items-center max-w-full max-h-full animate-[lightbox-zoom-in_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              onClick={() => setActiveIndex(null)}
              aria-label="Minimize"
              className="block w-auto h-auto max-w-[88vw] max-h-[78vh] sm:max-w-[85vw] sm:max-h-[80vh] object-contain rounded-lg shadow-2xl cursor-zoom-out"
            />

            {(active.title || active.cat) && (
              <div className="mt-4 max-w-[88vw] text-center text-white pointer-events-none">
                {active.title && <p className="font-medium">{active.title}</p>}
                {active.cat && <p className="text-xs text-white/60">{active.cat}</p>}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
