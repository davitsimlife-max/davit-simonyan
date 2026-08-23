import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const UPPER = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghjkmnopqrstuvwxyz";

function glyph(ch: string) {
  const upper = ch !== ch.toLowerCase();
  const set = upper ? UPPER : LOWER;
  return set[(Math.random() * set.length) | 0];
}

export function ScrambleLine({
  text,
  delay = 0,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const [tick, setTick] = useState<number | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    let timer = 0;
    let running = true;
    let last = -1;
    const duration = 720 + text.replace(/\s/g, "").length * 42;

    const kick = () => {
      if (!running) return;
      const start = performance.now();
      const loop = (now: number) => {
        if (!running) return;
        const elapsed = now - start;
        const frame = (elapsed / 30) | 0;
        if (frame !== last) {
          last = frame;
          setTick(frame);
        }
        if (elapsed < duration) {
          raf = requestAnimationFrame(loop);
        } else {
          setTick(null);
        }
      };
      raf = requestAnimationFrame(loop);
    };

    void (async () => {
      try {
        await Promise.race([
          document.fonts.ready,
          new Promise<void>((resolve) => window.setTimeout(resolve, 350)),
        ]);
      } catch {
        /* ignore */
      }
      if (!running) return;
      timer = window.setTimeout(kick, delay);
    })();

    return () => {
      running = false;
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [text, delay]);

  // Settled (and SSR): real type, no per-letter boxes that clip the glow.
  if (tick === null) {
    return <span className={cn("block max-w-full", className)}>{text}</span>;
  }

  return (
    <span className={cn("block max-w-full whitespace-nowrap", className)} aria-hidden>
      {text.split("").map((ch, i) => {
        if (ch === " ") return <span key={i}>{" "}</span>;
        const lockAt = 6 + i * 1.2;
        const locked = tick > lockAt;
        return <span key={i}>{locked ? ch : glyph(ch)}</span>;
      })}
    </span>
  );
}
