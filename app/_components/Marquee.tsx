"use client";
import { useEffect, useRef } from "react";

interface MarqueeProps {
  items: string[];
  speed?: number;
  itemClassName?: string;
  className?: string;
}

export default function Marquee({ items, speed = 0.6, itemClassName = "", className = "" }: MarqueeProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const touchingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const singleWidthRef = useRef(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const measure = () => {
      singleWidthRef.current = el.scrollWidth / 3;
      el.scrollLeft = singleWidthRef.current;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);

    let raf: number;
    const tick = () => {
      if (!draggingRef.current && !touchingRef.current) {
        el.scrollLeft += speed;
      }
      const sw = singleWidthRef.current;
      if (sw > 0) {
        if (el.scrollLeft >= sw * 2) el.scrollLeft -= sw;
        else if (el.scrollLeft <= 0) el.scrollLeft += sw;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current) return;
      el.scrollLeft = startScrollRef.current - (e.clientX - startXRef.current);
    };
    const onMouseUp = () => {
      draggingRef.current = false;
      el.style.cursor = "grab";
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
    const onMouseDown = (e: MouseEvent) => {
      draggingRef.current = true;
      startXRef.current = e.clientX;
      startScrollRef.current = el.scrollLeft;
      el.style.cursor = "grabbing";
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    };
    const onTouchStart = () => {
      touchingRef.current = true;
    };
    const onTouchEnd = () => {
      touchingRef.current = false;
    };
    const onDragStart = (e: DragEvent) => e.preventDefault();

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("dragstart", onDragStart);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("dragstart", onDragStart);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [speed, items]);

  return (
    <div
      ref={scrollerRef}
      className={`flex gap-4 overflow-x-auto cursor-grab select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {[0, 1, 2].flatMap((rep) =>
        items.map((item, i) => (
          <span key={`${rep}-${i}`} className={itemClassName}>
            {item}
          </span>
        ))
      )}
    </div>
  );
}
