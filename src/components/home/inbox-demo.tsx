import { useEffect, useState } from "react";
import { ArrowRight, Check, FileText, Mail, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

type Kind = "invoice" | "inquiry" | "review";

type Email = {
  id: string;
  from: string;
  subject: string;
  preview: string;
  kind: Kind;
};

const emails: Email[] = [
  {
    id: "e1",
    from: "billing@northwind.io",
    subject: "Invoice INV-4821 — $2,400.00",
    preview: "Please find attached invoice for March retainers. Due 12 Apr.",
    kind: "invoice",
  },
  {
    id: "e2",
    from: "sarah@harbor.studio",
    subject: "Question about onboarding",
    preview: "We signed last week and I am not sure where to upload the first batch.",
    kind: "inquiry",
  },
  {
    id: "e3",
    from: "ops@vendor.co",
    subject: "Re: shipment delay??",
    preview: "The pallet never arrived and your team said it left on Tuesday.",
    kind: "review",
  },
];

const stages = ["Reading", "Classifying", "Acting"] as const;

function Result({ kind }: { kind: Kind }) {
  if (kind === "invoice") {
    return (
      <div className="space-y-3">
        <p className="flex items-center gap-2 text-xs tracking-wide text-muted uppercase">
          <FileText className="size-3.5" />
          Extracted fields
        </p>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div>
            <dt className="text-faint">Vendor</dt>
            <dd>Northwind IO</dd>
          </div>
          <div>
            <dt className="text-faint">Amount</dt>
            <dd className="tabular-nums">$2,400.00</dd>
          </div>
          <div>
            <dt className="text-faint">Invoice</dt>
            <dd>INV-4821</dd>
          </div>
          <div>
            <dt className="text-faint">Due</dt>
            <dd>12 Apr 2026</dd>
          </div>
        </dl>
      </div>
    );
  }
  if (kind === "inquiry") {
    return (
      <div className="space-y-3">
        <p className="flex items-center gap-2 text-xs tracking-wide text-muted uppercase">
          <Mail className="size-3.5" />
          Draft reply
        </p>
        <p className="text-sm leading-relaxed text-fg/90">
          Hi Sarah — welcome. You can upload the first batch from Settings →
          Sources. If the folder is empty, grant drive access once and retry. I
          can walk you through it on a 15-minute call this week.
        </p>
        <p className="text-xs text-faint">Ready to send · awaiting approval</p>
      </div>
    );
  }
  return (
    <div className="space-y-3">
      <p className="flex items-center gap-2 text-xs tracking-wide text-muted uppercase">
        <ShieldAlert className="size-3.5" />
        Escalated
      </p>
      <p className="text-sm leading-relaxed text-fg/90">
        Conflicting claims about a missing shipment. Tone is heated. No invoice
        or tracking number in-thread — a human should own the reply.
      </p>
      <p className="text-xs text-faint">Queued for ops · SLA 4h</p>
    </div>
  );
}

export function InboxDemo() {
  const [active, setActive] = useState<string>("e1");
  const [stage, setStage] = useState(0);
  const [done, setDone] = useState(false);

  const email = emails.find((e) => e.id === active) ?? emails[0];

  useEffect(() => {
    setStage(0);
    setDone(false);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStage(2);
      setDone(true);
      return;
    }
    const t1 = window.setTimeout(() => setStage(1), 420);
    const t2 = window.setTimeout(() => setStage(2), 900);
    const t3 = window.setTimeout(() => setDone(true), 1320);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [active]);

  return (
    <div className="overflow-hidden rounded-xl bg-surface shadow-hairline">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <p className="kicker">Live demo</p>
        <p className="text-xs text-faint">Click a message</p>
      </div>
      <div className="grid md:grid-cols-2">
        <ul className="divide-y divide-border">
          {emails.map((item) => {
            const on = item.id === active;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setActive(item.id)}
                  className={cn(
                    "grid w-full min-h-16 grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 px-4 py-4 text-left transition-colors duration-150",
                    on ? "bg-surface-2" : "hover:bg-surface-2/60",
                  )}
                >
                  <span
                    className={cn(
                      "mt-1.5 size-1.5 shrink-0 rounded-full",
                      on ? "bg-primary" : "bg-faint",
                    )}
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm text-fg">{item.from}</span>
                    <span className="mt-0.5 block truncate text-sm text-fg/90">{item.subject}</span>
                    <span className="mt-0.5 block truncate text-xs text-muted">{item.preview}</span>
                  </span>
                  <span className="rounded-full px-2 py-1 text-xs tracking-wide text-faint uppercase shadow-hairline">
                    {item.kind}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex min-h-56 flex-col border-t border-border p-4 md:border-t-0 md:border-l">
          <ol className="mb-5 flex flex-wrap items-center gap-2 text-xs tracking-wide uppercase">
            {stages.map((label, i) => {
              const on = i <= stage;
              return (
                <li key={label} className="flex items-center gap-2">
                  {i > 0 ? <ArrowRight className="size-3 text-faint" /> : null}
                  <span className={on ? "text-fg" : "text-faint"}>{label}</span>
                  {on && (i < stage || done) ? <Check className="size-3 text-fg" /> : null}
                </li>
              );
            })}
          </ol>
          <div
            className={cn(
              "flex-1 rounded-lg bg-bg p-4 shadow-hairline transition-opacity duration-200",
              done ? "opacity-100" : "opacity-40",
            )}
          >
            {done ? <Result kind={email.kind} /> : <p className="text-sm text-muted">Working…</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
