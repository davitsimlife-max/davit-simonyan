import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, FileDown, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";

const NEXT_FALLBACK = `${site.url}/?sent=1#contact`;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [nextUrl, setNextUrl] = useState(NEXT_FALLBACK);

  useEffect(() => {
    const origin = window.location.origin;
    setNextUrl(`${origin}/?sent=1#contact`);
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      setStatus("sent");
      params.delete("sent");
      const clean = `${window.location.pathname}${params.toString() ? `?${params}` : ""}#contact`;
      window.history.replaceState({}, "", clean);
    }
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    const honey = String(new FormData(e.currentTarget).get("_honey") || "").trim();
    if (honey) {
      e.preventDefault();
      setStatus("sent");
      return;
    }
    setStatus("sending");
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_minmax(0,28rem)] lg:gap-16 lg:items-end">
        <Reveal>
          <p className="kicker">Contact</p>
          <p className="mt-3 text-sm tracking-wide text-primary">
            {site.name} · founder of {site.studio} · {site.location}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-6xl">
            Founding engineer, AI product, automation — on a team that ships,
            not slide decks.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Write here and it lands in my inbox. Or open LinkedIn if that is
            how you hire.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="size-4" />
                LinkedIn
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
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
          </div>
        </Reveal>

        <div className="contact-wrap">
          {status === "sent" ? (
            <div className="contact-card">
              <p className="font-display text-3xl tracking-tight">Sent.</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                I’ll write back. If it is urgent, LinkedIn is faster.
              </p>
              <button
                type="button"
                className="mt-6 text-sm text-primary hover:underline"
                onClick={() => setStatus("idle")}
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              className="contact-card"
              action={`https://formsubmit.co/${site.email}`}
              method="POST"
              onSubmit={onSubmit}
            >
              <p className="kicker">Write</p>
              <input type="hidden" name="_subject" value="Message via buildbydavit.space" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={nextUrl} />
              <label className="sr-only" aria-hidden>
                Website
                <input name="_honey" type="text" tabIndex={-1} autoComplete="off" />
              </label>
              <label className="contact-label">
                Name
                <input
                  className="contact-field"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                />
              </label>
              <label className="contact-label">
                Email
                <input
                  className="contact-field"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                />
              </label>
              <label className="contact-label">
                Company
                <input
                  className="contact-field"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Optional"
                />
              </label>
              <label className="contact-label">
                Message
                <textarea
                  className="contact-field contact-area"
                  name="message"
                  required
                  rows={5}
                  placeholder="The role, the problem, a time to talk."
                />
              </label>
              <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
                {status === "sending" ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
                {status === "sending" ? "Sending" : "Send message"}
              </Button>
            </form>
          )}
        </div>
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
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">
            LinkedIn
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
