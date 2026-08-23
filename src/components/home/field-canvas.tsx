import { useEffect, useRef } from "react";

type Node = {
  fx: number;
  fy: number;
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  phase: number;
  el: SVGCircleElement | null;
};

type Edge = {
  a: number;
  b: number;
  el: SVGLineElement | null;
};

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rng = mulberry32(21);
export const FIELD_NODES = Array.from({ length: 44 }, () => ({
  x: rng() * 100,
  y: rng() * 100,
}));

const LINK_PCT = 0.17;
export const FIELD_EDGES: [number, number][] = [];
for (let i = 0; i < FIELD_NODES.length; i++) {
  for (let j = i + 1; j < FIELD_NODES.length; j++) {
    const dx = (FIELD_NODES[i].x - FIELD_NODES[j].x) / 100;
    const dy = (FIELD_NODES[i].y - FIELD_NODES[j].y) / 100;
    if (dx * dx + dy * dy < LINK_PCT * LINK_PCT) FIELD_EDGES.push([i, j]);
  }
}

const SSR_W = 1440;
const SSR_H = 900;

export function FieldCanvas() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const root = svg;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0, has: false };
    const circles = Array.from(svg.querySelectorAll("circle"));
    const lines = Array.from(svg.querySelectorAll("line"));

    const nodes: Node[] = FIELD_NODES.map((n, i) => ({
      fx: n.x,
      fy: n.y,
      x: (n.x / 100) * SSR_W,
      y: (n.y / 100) * SSR_H,
      ox: (n.x / 100) * SSR_W,
      oy: (n.y / 100) * SSR_H,
      vx: 0,
      vy: 0,
      phase: i * 0.47,
      el: circles[i] ?? null,
    }));

    const edges: Edge[] = FIELD_EDGES.map((pair, i) => ({
      a: pair[0],
      b: pair[1],
      el: lines[i] ?? null,
    }));

    let w = SSR_W;
    let h = SSR_H;
    let lastW = 0;
    let lastH = 0;
    let raf = 0;
    let running = true;
    let visible = true;
    let resizeTimer = 0;

    function layout() {
      const parent = root.parentElement;
      if (!parent) return;
      const nw = parent.clientWidth;
      const nh = parent.clientHeight;
      if (nw < 8 || nh < 8) return;
      if (Math.abs(nw - lastW) < 16 && Math.abs(nh - lastH) < 16) return;
      lastW = nw;
      lastH = nh;
      w = nw;
      h = nh;
      root.setAttribute("viewBox", `0 0 ${w} ${h}`);
      const radius = Math.max(2.3, Math.min(3.4, w / 420));
      for (const n of nodes) {
        n.ox = (n.fx / 100) * w;
        n.oy = (n.fy / 100) * h;
        n.x = n.ox;
        n.y = n.oy;
        n.vx = 0;
        n.vy = 0;
        n.el?.setAttribute("r", radius.toFixed(2));
        n.el?.setAttribute("cx", n.x.toFixed(2));
        n.el?.setAttribute("cy", n.y.toFixed(2));
      }
      for (const e of edges) {
        const a = nodes[e.a];
        const b = nodes[e.b];
        e.el?.setAttribute("x1", a.x.toFixed(2));
        e.el?.setAttribute("y1", a.y.toFixed(2));
        e.el?.setAttribute("x2", b.x.toFixed(2));
        e.el?.setAttribute("y2", b.y.toFixed(2));
      }
    }

    function frame(now: number) {
      if (!running || !visible) return;
      mouse.x += (mouse.tx - mouse.x) * 0.12;
      mouse.y += (mouse.ty - mouse.y) * 0.12;
      const link = Math.hypot(w, h) * 0.12;

      for (const n of nodes) {
        n.vx += Math.sin(now * 0.0007 + n.phase) * 0.035;
        n.vy += Math.cos(now * 0.00055 + n.phase) * 0.028;
        if (mouse.has) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const d2 = dx * dx + dy * dy + 1400;
          const f = 22000 / d2;
          n.vx += dx * f * 0.0005;
          n.vy += dy * f * 0.0005;
        }
        n.vx += (n.ox - n.x) * 0.018;
        n.vy += (n.oy - n.y) * 0.018;
        n.vx *= 0.9;
        n.vy *= 0.9;
        n.x += n.vx;
        n.y += n.vy;
        n.el?.setAttribute("cx", n.x.toFixed(1));
        n.el?.setAttribute("cy", n.y.toFixed(1));
      }

      for (const e of edges) {
        const a = nodes[e.a];
        const b = nodes[e.b];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        e.el?.setAttribute("x1", a.x.toFixed(1));
        e.el?.setAttribute("y1", a.y.toFixed(1));
        e.el?.setAttribute("x2", b.x.toFixed(1));
        e.el?.setAttribute("y2", b.y.toFixed(1));
        const alpha = Math.max(0, (1 - d / link) * 0.72);
        e.el?.setAttribute("stroke", `rgba(61,255,208,${alpha.toFixed(2)})`);
      }

      if (!reduced) raf = requestAnimationFrame(frame);
    }

    layout();

    const parent = root.parentElement;
    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      if (r.width === 0) return;
      mouse.tx = ((e.clientX - r.left) / r.width) * w;
      mouse.ty = ((e.clientY - r.top) / r.height) * h;
      mouse.has = true;
    };
    const onLeave = () => {
      mouse.has = false;
    };
    parent?.addEventListener("pointermove", onMove, { passive: true });
    parent?.addEventListener("pointerleave", onLeave);

    const ro = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(layout, 140);
    });
    if (parent) ro.observe(parent);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduced && running) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(frame);
      } else {
        cancelAnimationFrame(raf);
      }
    });
    io.observe(root);

    const onVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduced && visible && running) {
        raf = requestAnimationFrame(frame);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    if (!reduced) raf = requestAnimationFrame(frame);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      ro.disconnect();
      io.disconnect();
      parent?.removeEventListener("pointermove", onMove);
      parent?.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <svg
      ref={ref}
      className="pointer-events-none absolute inset-0 size-full"
      viewBox={`0 0 ${SSR_W} ${SSR_H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {FIELD_EDGES.map(([a, b], i) => (
        <line
          key={`e-${i}`}
          x1={(FIELD_NODES[a].x / 100) * SSR_W}
          y1={(FIELD_NODES[a].y / 100) * SSR_H}
          x2={(FIELD_NODES[b].x / 100) * SSR_W}
          y2={(FIELD_NODES[b].y / 100) * SSR_H}
          stroke="rgba(61,255,208,0.5)"
          strokeWidth="1.4"
        />
      ))}
      {FIELD_NODES.map((n, i) => (
        <circle
          key={`n-${i}`}
          cx={(n.x / 100) * SSR_W}
          cy={(n.y / 100) * SSR_H}
          r="2.8"
          fill="#3dffd0"
        />
      ))}
    </svg>
  );
}
