import { ArrowUpRight } from "lucide-react";

export function AragViewport() {
  return (
    <div className="arag-frame group overflow-hidden rounded-xl bg-surface shadow-hairline">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <p className="kicker">Live viewport</p>
        <a
          href="https://aragagency.nl"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs tracking-wide text-primary transition-colors hover:underline"
        >
          Open live
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>
      <div className="arag-stage relative h-[22rem] bg-surface-2 sm:h-[28rem]">
        <img
          src="/arag-still.jpg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
        />
        <iframe
          title="Arag Agency"
          src="https://aragagency.nl/"
          className="absolute inset-0 h-full w-full border-0 bg-[#ede9e1]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
