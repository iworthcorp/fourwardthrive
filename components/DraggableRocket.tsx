"use client";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";

const SIZE = 48;
const MARGIN = 8;

export default function DraggableRocket({ className = "bg-ink-primary hover:brightness-90 text-white" }: { className?: string }) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const dragRef = useRef<{ startX: number; startY: number; originX: number; originY: number; moved: boolean } | null>(null);
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

  const clamp = (x: number, y: number) => ({
    x: Math.min(Math.max(MARGIN, x), window.innerWidth - SIZE - MARGIN),
    y: Math.min(Math.max(MARGIN, y), window.innerHeight - SIZE - MARGIN),
  });

  const onPointerDown = (e: PointerEvent<HTMLButtonElement>) => {
    const rect = btnRef.current!.getBoundingClientRect();
    dragRef.current = { startX: e.clientX, startY: e.clientY, originX: rect.left, originY: rect.top, moved: false };
    btnRef.current!.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) drag.moved = true;
    setPos(clamp(drag.originX + dx, drag.originY + dy));
  };

  const onPointerUp = () => {
    const drag = dragRef.current;
    dragRef.current = null;
    if (drag && !drag.moved) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const style: CSSProperties = pos ? { left: pos.x, top: pos.y, right: "auto", bottom: "auto" } : {};

  return (
    <button
      ref={btnRef}
      type="button"
      aria-label="Back to top — drag to move"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={style}
      className={`fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full shadow-lg shadow-black/20 ring-1 ring-black/5 flex items-center justify-center select-none touch-none cursor-grab active:cursor-grabbing transition-[opacity,transform,box-shadow] duration-300 ease-out hover:scale-110 hover:shadow-xl hover:[animation-play-state:paused] active:scale-95 ${className} ${
        visible ? "opacity-100 scale-100 pointer-events-auto animate-float" : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      <span className="text-xl leading-none" aria-hidden="true">🚀</span>
    </button>
  );
}
