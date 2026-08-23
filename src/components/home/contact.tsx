import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="kicker">Contact</p>
          <p className="mt-3 text-sm tracking-wide text-primary">
            {site.name} · founder of {site.studio}
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
          <Button type="button" variant="outline" size="lg" onClick={copy}>
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Copied" : "Copy email"}
          </Button>
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
          <a
            href="https://inbox-autopilot-rosy.vercel.app"
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
