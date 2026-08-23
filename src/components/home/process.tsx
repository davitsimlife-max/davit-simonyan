import { capabilities, steps } from "@/lib/content";
import { Reveal } from "./reveal";

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="kicker">Process</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl tracking-tight sm:text-5xl">
            How the work gets made.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 60} className="bg-surface p-6 sm:p-8">
              <p className="kicker text-primary">{step.range}</p>
              <h3 className="mt-3 font-display text-2xl tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-20">
          <p className="kicker">What I actually do</p>
        </Reveal>
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2">
          {capabilities.map((cap, i) => (
            <Reveal
              key={cap.title}
              delay={i * 50}
              className="group bg-surface p-6 transition-colors duration-200 hover:bg-surface-2 sm:p-8"
            >
              <h3 className="font-display text-2xl tracking-tight">{cap.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{cap.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
