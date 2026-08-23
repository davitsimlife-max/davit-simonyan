import { about } from "@/lib/content";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-16">
        <Reveal>
          <p className="kicker">{about.kicker}</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl tracking-tight sm:text-5xl">
            {about.headline}
          </h2>
          {about.body.map((para) => (
            <p key={para} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {para}
            </p>
          ))}
        </Reveal>

        <dl className="about-facts">
          {about.facts.map((fact) => (
            <div key={fact.label} className="about-fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
