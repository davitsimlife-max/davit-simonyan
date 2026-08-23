import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Target = {
  host: string;
  label: string;
  log: string[];
  replies: Record<string, string>;
  prompts: string[];
};

const targets: Target[] = [
  {
    host: "this page",
    label: "this page",
    log: ["Fetch /", "Read hero + case studies", "Index 2 live products", "Ready"],
    prompts: ["Who built this?", "What can you ship?"],
    replies: {
      "Who built this?":
        "Davit Simonyan, founder of Arag Agency. Two live products — Inbox Autopilot and Tyoma. Looking for a team that ships.",
      "What can you ship?":
        "Agentic mail workflows, extraction, site-grounded assistants, multilingual product. Not a notebook. A URL.",
    },
  },
  {
    host: "stripe.com",
    label: "stripe.com",
    log: ["Fetch stripe.com", "Parse product surfaces", "Ground payments context", "Ready"],
    prompts: ["What does Stripe do?", "Who is it for?"],
    replies: {
      "What does Stripe do?":
        "Stripe is financial infrastructure for the internet — payments, billing, and money movement for products that need to charge a customer.",
      "Who is it for?":
        "Builders: startups, platforms, and enterprises that want to accept payments without becoming a bank.",
    },
  },
  {
    host: "notion.so",
    label: "notion.so",
    log: ["Fetch notion.so", "Extract workspace narrative", "Index docs + wiki claims", "Ready"],
    prompts: ["What is Notion?", "Give me a one-liner"],
    replies: {
      "What is Notion?":
        "Notion is a connected workspace — docs, wikis, and projects in one place, used as a company brain more than a single note app.",
      "Give me a one-liner":
        "Your team’s wiki, docs, and tasks, finally in the same room.",
    },
  },
];

type Msg = { role: "user" | "assistant"; text: string };

export function TyomaDemo() {
  const [host, setHost] = useState("this page");
  const [phase, setPhase] = useState<"idle" | "scan" | "ready">("scan");
  const [logIndex, setLogIndex] = useState(0);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState("");
  const scroller = useRef<HTMLDivElement>(null);

  const target = useMemo(
    () => targets.find((t) => t.host === host) ?? targets[0],
    [host],
  );

  useEffect(() => {
    if (phase !== "scan") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setLogIndex(target.log.length);
      setPhase("ready");
      return;
    }
    setLogIndex(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setLogIndex(i);
      if (i >= target.log.length) {
        window.clearInterval(id);
        setPhase("ready");
      }
    }, 380);
    return () => window.clearInterval(id);
  }, [phase, target]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function scan(next = host) {
    setHost(next);
    setMessages([]);
    setTyping(false);
    setPhase("scan");
    setLogIndex(0);
  }

  function ask(q: string) {
    const question = q.trim();
    if (!question || phase !== "ready" || typing) return;
    const answer =
      target.replies[question] ??
      "I only have a local slice of this demo. Open the live product to scan any URL.";
    setDraft("");
    setMessages((m) => [...m, { role: "user", text: question }]);
    setTyping(true);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(
      () => {
        setTyping(false);
        setMessages((m) => [...m, { role: "assistant", text: answer }]);
      },
      reduced ? 0 : 700,
    );
  }

  return (
    <div className="overflow-hidden rounded-xl bg-surface shadow-hairline">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <p className="kicker">Live demo</p>
        <p className="text-xs text-faint">Scan, then ask</p>
      </div>

      <div className="space-y-4 p-4">
        <div className="flex flex-col gap-2 sm:flex-row">
          <label className="relative min-h-11 flex-1">
            <Globe className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-faint" />
            <input
              value={host}
              onChange={(e) => setHost(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") scan(host);
              }}
              className="h-11 w-full rounded-md bg-bg pr-3 pl-10 text-sm text-fg shadow-hairline placeholder:text-faint"
              placeholder="Paste a URL"
              aria-label="Website URL"
              autoComplete="off"
              spellCheck={false}
              suppressHydrationWarning
            />
          </label>
          <Button type="button" onClick={() => scan(host)} className="h-11">
            Scan
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {targets.map((t) => (
            <button
              key={t.host}
              type="button"
              onClick={() => scan(t.host)}
              className={cn(
                "h-9 rounded-full px-3 text-xs tracking-wide shadow-hairline transition-[background-color,color] duration-150",
                host === t.host && phase !== "idle" ? "bg-primary text-primary-fg" : "text-muted hover:text-fg",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {phase === "idle" ? (
          <p className="py-8 text-sm text-muted">
            Pick a site. The assistant reads it first — then you talk.
          </p>
        ) : null}

        {phase === "scan" ? (
          <ol className="min-h-40 space-y-2 py-4 font-sans text-sm">
            {target.log.map((line, i) => (
              <li
                key={line}
                className={cn(
                  "flex items-center gap-2 transition-opacity duration-200",
                  i < logIndex ? "text-fg" : "text-faint",
                )}
              >
                <span className="tabular-nums text-faint">0{i + 1}</span>
                {line}
              </li>
            ))}
          </ol>
        ) : null}

        {phase === "ready" ? (
          <div className="rounded-lg bg-bg shadow-hairline">
            <div ref={scroller} className="flex max-h-64 flex-col gap-3 overflow-y-auto p-4">
              <p className="text-xs text-faint">Grounded on {target.label}</p>
              {messages.map((m, i) => (
                <p
                  key={`${m.role}-${i}`}
                  className={cn(
                    "max-w-[90%] rounded-md px-3 py-2 text-sm leading-relaxed",
                    m.role === "user"
                      ? "self-end bg-surface-2 text-fg"
                      : "self-start text-fg/90",
                  )}
                >
                  {m.text}
                </p>
              ))}
              {typing ? <p className="text-sm text-muted">Thinking…</p> : null}
            </div>
            <div className="flex flex-wrap gap-2 border-t border-border px-3 py-2">
              {target.prompts.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => ask(p)}
                  className="h-8 rounded-full px-3 text-xs text-muted shadow-hairline transition-colors duration-150 hover:text-fg"
                >
                  {p}
                </button>
              ))}
            </div>
            <form
              className="flex gap-2 border-t border-border p-3"
              onSubmit={(e) => {
                e.preventDefault();
                ask(draft);
              }}
            >
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                className="h-11 min-w-0 flex-1 rounded-md bg-surface px-3 text-sm text-fg shadow-hairline placeholder:text-faint"
                placeholder="Ask the site"
                aria-label="Ask the site"
                autoComplete="off"
                spellCheck={false}
                suppressHydrationWarning
              />
              <Button type="submit" size="icon" aria-label="Send">
                <ArrowUp className="size-4" />
              </Button>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
}
