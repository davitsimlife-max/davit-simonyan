import { ArrowUpRight } from "lucide-react";

export function AragViewport() {
  return (
    <div className="overflow-hidden rounded-xl bg-surface shadow-hairline">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <p className="kicker">Live viewport</p>
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
      <div className="relative h-[22rem] bg-[#ede9e1] sm:h-[28rem]">
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
