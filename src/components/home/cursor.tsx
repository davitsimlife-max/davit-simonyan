import { useEffect, useRef } from "react";

export function CursorLayer() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    if (!fine || reduced || !wide) return;

    document.body.classList.add("has-custom-cursor");
    const d = dot.current;
    const r = ring.current;
    if (!d || !r) return;

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let hover = false;
    let raf = 0;
    let running = true;
    let seen = false;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      seen = true;
      d.style.opacity = "1";
      const t = e.target as HTMLElement | null;
      hover = Boolean(t?.closest("a, button, [data-cursor='hover']"));
      d.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const loop = () => {
      if (!running) return;
      if (seen) {
        rx += (x - rx) * 0.16;
        ry += (y - ry) * 0.16;
        const s = hover ? 1.65 : 1;
        r.style.opacity = hover ? "0.9" : "0.4";
        r.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${s})`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden lg:block" aria-hidden>
      <div
        ref={dot}
        className="absolute top-0 left-0 size-1.5 rounded-full bg-primary opacity-0 will-change-transform"
      />
      <div
        ref={ring}
        className="absolute top-0 left-0 size-8 rounded-full border border-primary/70 opacity-0 will-change-transform"
      />
    </div>
  );
}
