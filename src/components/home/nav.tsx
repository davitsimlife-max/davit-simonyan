import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Nav({ onCommand }: { onCommand: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-200 ease-out",
        scrolled || open ? "bg-bg/90 shadow-hairline" : "bg-transparent",
      )}
    >
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-fg"
      >
        Skip to work
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3" data-cursor="hover">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-primary text-sm font-medium text-primary-fg shadow-glow">
            D
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-sm font-medium tracking-wide">{site.name}</span>
            <span className="truncate text-xs tracking-wide text-muted">{site.studio}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors duration-150 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onCommand}
            className="h-9 rounded-sm px-3 text-xs tracking-wide text-muted shadow-hairline transition-[color,box-shadow] duration-150 hover:text-primary hover:shadow-hairline-hover"
          >
            <span className="mr-2">Search</span>
            <kbd className="text-faint">⌘K</kbd>
          </button>
          <span className="flex items-center gap-2 text-xs tracking-wide text-muted">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-primary pulse-neon" />
              <span className="relative size-1.5 rounded-full bg-primary" />
            </span>
            Available
          </span>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open ? (
        <div className="border-t border-border bg-bg md:hidden">
          <nav className="flex flex-col px-5 py-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center font-display text-3xl italic text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 flex min-h-12 items-center text-sm text-muted"
            >
              Available for roles
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
