"use client";
import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 160;
const LINK_DISTANCE = 100;
const MOUSE_RADIUS = 140;
const CELL_SIZE = 90;

type Particle = { x: number; y: number; vx: number; vy: number; radius: number; pulsePhase: number };
type Pulse = { fromIdx: number; toIdx: number; progress: number; speed: number };

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    const pulses: Pulse[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 1.5 * Math.random() + 1,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const pulseInterval = setInterval(() => {
      const from = Math.floor(Math.random() * PARTICLE_COUNT);
      let to = Math.floor(Math.random() * PARTICLE_COUNT);
      while (to === from) to = Math.floor(Math.random() * PARTICLE_COUNT);
      pulses.push({ fromIdx: from, toIdx: to, progress: 0, speed: 0.007 + 0.007 * Math.random() });
    }, 200);

    let frame = 0;
    let raf: number;

    const draw = () => {
      const { x: mx, y: my } = mouseRef.current;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      frame++;

      const cols = Math.ceil(w / CELL_SIZE) + 1;
      const rows = Math.ceil(h / CELL_SIZE) + 1;
      const grid: number[][] = Array.from({ length: cols * rows }, () => []);
      particles.forEach((p, i) => {
        const cx = Math.floor(p.x / CELL_SIZE);
        const cy = Math.floor(p.y / CELL_SIZE);
        const idx = cy * cols + cx;
        if (idx >= 0 && idx < grid.length) grid[idx].push(i);
      });

      for (const p of particles) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * 0.65;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
        p.vx *= 0.97;
        p.vy *= 0.97;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > w) { p.x = w; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > h) { p.y = h; p.vy *= -1; }
      }

      const seen = new Set<number>();
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 0.7;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const cx = Math.floor(p.x / CELL_SIZE);
        const cy = Math.floor(p.y / CELL_SIZE);
        for (let gy = cy - 1; gy <= cy + 1; gy++) {
          for (let gx = cx - 1; gx <= cx + 1; gx++) {
            if (gx < 0 || gy < 0 || gx >= cols || gy >= rows) continue;
            for (const j of grid[gy * cols + gx]) {
              if (j <= i) continue;
              const key = i * PARTICLE_COUNT + j;
              if (seen.has(key)) continue;
              seen.add(key);
              const q = particles[j];
              const ddx = p.x - q.x;
              const ddy = p.y - q.y;
              const dist = Math.sqrt(ddx * ddx + ddy * ddy);
              if (dist < LINK_DISTANCE) {
                const base = 1 - dist / LINK_DISTANCE;
                const midX = (p.x + q.x) / 2;
                const midY = (p.y + q.y) / 2;
                const mdist = Math.sqrt((midX - mx) ** 2 + (midY - my) ** 2);
                const boost = mdist < MOUSE_RADIUS ? (1 - mdist / MOUSE_RADIUS) * 0.4 : 0;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(q.x, q.y);
                ctx.globalAlpha = 0.3 * base + boost;
                ctx.stroke();
              }
            }
          }
        }
      }
      ctx.globalAlpha = 1;

      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        const from = particles[pulse.fromIdx];
        const to = particles[pulse.toIdx];
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        if (Math.sqrt(dx * dx + dy * dy) > LINK_DISTANCE * 1.4) {
          pulses.splice(i, 1);
          continue;
        }
        const px = from.x + dx * pulse.progress;
        const py = from.y + dy * pulse.progress;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 5);
        grad.addColorStop(0, "rgba(255,255,255,0.95)");
        grad.addColorStop(0.4, "rgba(56,189,248,0.7)");
        grad.addColorStop(1, "rgba(56,189,248,0)");
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.fill();
      }

      for (const p of particles) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const near = dist < MOUSE_RADIUS ? 1 - dist / MOUSE_RADIUS : 0;
        const pulse = 0.55 + 0.25 * (0.4 * Math.sin(0.02 * frame + p.pulsePhase) + 0.6) + 0.3 * near;
        if (near > 0.2) {
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 12 * near);
          glow.addColorStop(0, `rgba(129,140,248,${0.4 * near})`);
          glow.addColorStop(1, "rgba(129,140,248,0)");
          ctx.beginPath();
          ctx.arc(p.x, p.y, 12 * near, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius + 1.5 * near, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56,189,248,${pulse})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(pulseInterval);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.55 }}
      aria-hidden="true"
    />
  );
}
