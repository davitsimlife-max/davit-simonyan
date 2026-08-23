import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Copy, FolderOpen, Mail, Search } from "lucide-react";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

type Action = {
  id: string;
  label: string;
  hint: string;
  icon: typeof Search;
  run: () => void;
};

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [query, setQuery] = useState("");

  const actions: Action[] = useMemo(
    () => [
      {
        id: "work",
        label: "Jump to work",
        hint: "Section",
        icon: FolderOpen,
        run: () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "inbox",
        label: "Inbox Autopilot — live",
        hint: "Open",
        icon: ArrowUpRight,
        run: () => window.open("https://inbox-autopilot-rosy.vercel.app", "_blank", "noopener"),
      },
      {
        id: "tyoma",
        label: "Tyoma — live",
        hint: "Open",
        icon: ArrowUpRight,
        run: () => window.open("https://tyoma.site", "_blank", "noopener"),
      },
      {
        id: "mail",
        label: `Write ${site.email}`,
        hint: "Mail",
        icon: Mail,
        run: () => {
          window.location.href = `mailto:${site.email}`;
        },
      },
      {
        id: "copy",
        label: "Copy email",
        hint: "Clipboard",
        icon: Copy,
        run: () => {
          void navigator.clipboard.writeText(site.email);
        },
      },
    ],
    [],
  );

  const filtered = actions.filter((a) =>
    `${a.label} ${a.hint}`.toLowerCase().includes(query.toLowerCase().trim()),
  );
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  if (!open) return null;

  function go(action: Action) {
    onOpenChange(false);
    action.run();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-bg/70 px-4 pt-24"
      onClick={() => onOpenChange(false)}
    >
      <div
        role="dialog"
        aria-label="Command palette"
        className="w-full max-w-lg overflow-hidden rounded-xl bg-surface shadow-hairline"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-border px-3">
          <Search className="size-4 text-faint" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((i) => Math.max(i - 1, 0));
              } else if (e.key === "Enter" && filtered[active]) {
                e.preventDefault();
                go(filtered[active]);
              }
            }}
            placeholder="Jump, open, copy…"
            className="h-12 w-full bg-transparent text-sm text-fg outline-none placeholder:text-faint"
          />
        </div>
        <ul className="max-h-72 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <li className="px-3 py-6 text-sm text-muted">Nothing matches.</li>
          ) : (
            filtered.map((action, i) => {
              const Icon = action.icon;
              return (
                <li key={action.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(action)}
                    className={cn(
                      "flex w-full min-h-11 items-center gap-3 rounded-md px-3 text-left text-sm transition-colors duration-150",
                      i === active ? "bg-surface-2 text-fg" : "text-muted",
                    )}
                  >
                    <Icon className="size-4 shrink-0" />
                    <span className="flex-1">{action.label}</span>
                    <span className="text-xs text-faint">{action.hint}</span>
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}
