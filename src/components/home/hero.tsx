import { ArrowDownRight } from "lucide-react";
import { site, stats } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { FieldCanvas } from "./field-canvas";
import { ScrambleLine } from "./scramble";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col justify-end overflow-hidden pt-24 pb-10 sm:pb-14"
    >
      <FieldCanvas />
      <div className="hero-vignette" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="hero-rise mb-10 flex flex-wrap items-center justify-between gap-4">
          <p className="kicker">{site.name}</p>
          <p className="flex items-center gap-2 text-xs tracking-wide text-muted">
            <span className="size-1.5 rounded-full bg-primary pulse-neon" />
            Founder of {site.studio}
          </p>
        </div>

        <h1 className="hero-title max-w-5xl min-w-0 text-fg">
          <ScrambleLine text="I learned AI" />
          <span className="hero-subline italic text-primary hero-italic">
            the only way that counts.
          </span>
        </h1>

        <div className="hero-rise-late mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Two systems in production, built at my own agency. Inbox Autopilot
            turns email into actions. Tyoma reads a website, then talks. I am
            looking for a role where that continues.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#work">
                See the work
                <ArrowDownRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>

        <dl className="hero-rise-late mt-16 grid grid-cols-3 gap-3 border-t border-border pt-6 sm:mt-20 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="kicker text-faint">{s.label}</dt>
              <dd className="mt-2 font-display text-3xl leading-none tracking-tight text-fg sm:text-5xl">
                <span className="tabular-nums">{s.value}</span>
                <span className="ml-1.5 font-sans text-xs tracking-wide text-muted sm:text-sm">
                  {s.unit}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
