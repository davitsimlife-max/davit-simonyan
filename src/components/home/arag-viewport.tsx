import { ArrowUpRight } from "lucide-react";

export function AragViewport() {
  return (
    <div className="overflow-hidden rounded-xl bg-surface shadow-hairline">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <p className="kicker">Studio site</p>
        <a
          href="https://aragagency.nl"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs tracking-wide text-muted transition-colors hover:text-primary"
        >
          aragagency.nl
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>
      <a
        href="https://aragagency.nl"
        target="_blank"
        rel="noreferrer"
        className="group relative block p-3 sm:p-4"
      >
        <span className="block overflow-hidden rounded-lg shadow-hairline">
          <img
            src="/arag-still.jpg"
            alt="Arag Agency — the studio site"
            className="aspect-[16/10] w-full object-cover object-top transition duration-300 group-hover:opacity-90"
          />
        </span>
        <span className="pointer-events-none absolute inset-0 flex items-end justify-end p-6 sm:p-8">
          <span className="inline-flex items-center gap-1 rounded-sm bg-bg/90 px-3 py-1.5 text-xs tracking-wide text-primary shadow-hairline">
            Open live
            <ArrowUpRight className="size-3.5" />
          </span>
        </span>
      </a>
    </div>
  );
}
