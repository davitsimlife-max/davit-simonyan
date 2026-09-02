import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { AragViewport } from "./arag-viewport";
import { InboxDemo } from "./inbox-demo";
import { Reveal } from "./reveal";
import { TyomaDemo } from "./tyoma-demo";

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="kicker">Selected work</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl tracking-tight text-fg sm:text-5xl">
            Not a tutorial dump. Production URLs.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-28">
          {projects.map((project) => (
            <article key={project.id} id={project.id} className="scroll-mt-24">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                <Reveal className="min-w-0 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
                  <p className="kicker text-primary">{project.index}</p>
                  {"category" in project && project.category ? (
                    <p className="mt-2 text-xs tracking-wide text-muted">{project.category}</p>
                  ) : null}
                  <h3 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 font-display text-xl italic text-primary">{project.tagline}</p>
                  <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                    {project.summary}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-fg/90">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Button asChild>
                      <a href={project.href} target="_blank" rel="noreferrer">
                        Open live
                        <ArrowUpRight className="size-4" />
                      </a>
                    </Button>
                    <span className="text-xs tracking-wide text-muted">
                      {project.status} · {project.year}
                    </span>
                  </div>
                </Reveal>
                <Reveal className="min-w-0 lg:col-span-7" delay={80}>
                  {project.id === "inbox" ? (
                    <InboxDemo />
                  ) : project.id === "tyoma" ? (
                    <TyomaDemo />
                  ) : (
                    <AragViewport />
                  )}
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
