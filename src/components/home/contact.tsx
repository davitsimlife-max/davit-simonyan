import { FileDown, Mail } from "lucide-react";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="kicker">Contact</p>
          <p className="mt-3 text-sm tracking-wide text-primary">
            {site.name} · founder of {site.studio} · {site.location}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-6xl">
            I am looking for a team that ships AI products — not slide decks.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Agentic workflows, extraction, grounded assistants, the unglamorous
            parts that have to work on Monday. If that is the job, write.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center" delay={80}>
          <Button asChild size="lg">
            <a href={`mailto:${site.email}?subject=Hello%20Davit`}>
              <Mail className="size-4" />
              {site.email}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/Davit-Simonyan-CV.pdf" download>
              <FileDown className="size-4" />
              Download CV
            </a>
          </Button>
          <a href="/cv" className="text-sm text-muted hover:text-primary">
            View online
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.studio}
        </p>
        <p className="flex flex-wrap gap-4">
          <a href="/cv" className="hover:text-primary">
            CV
          </a>
          <a
            href="https://autopilot.tyoma.site"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            Inbox Autopilot
          </a>
          <a href="https://tyoma.site" target="_blank" rel="noreferrer" className="hover:text-primary">
            Tyoma
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-primary">
            Email
          </a>
        </p>
      </div>
    </footer>
  );
}
