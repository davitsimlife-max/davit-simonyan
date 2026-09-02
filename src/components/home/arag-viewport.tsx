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
      <div className="arag-well bg-bg p-3 sm:p-4">
        <div className="arag-stage relative h-[20rem] overflow-hidden rounded-lg shadow-hairline sm:h-[26rem]">
          <img
            src="/arag-still.jpg"
            alt=""
            aria-hidden
            className="arag-screen pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
          />
          <iframe
            title="Arag Agency"
            src="https://aragagency.nl/"
            className="arag-screen absolute inset-0 h-full w-full border-0 bg-surface"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="arag-grade" aria-hidden />
        </div>
      </div>
    </div>
  );
}
