import { useEffect, useState } from "react";
import { CommandPalette } from "./command-palette";
import { Contact, Footer } from "./contact";
import { CursorLayer } from "./cursor";
import { Hero } from "./hero";
import { Nav } from "./nav";
import { Process } from "./process";
import { ScrollProgress } from "./scroll-progress";
import { Work } from "./work";

export function HomePage() {
  const [cmd, setCmd] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey;
      const target = e.target as HTMLElement | null;
      const typing =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;
      if ((meta && e.key.toLowerCase() === "k") || (e.key === "/" && !typing && !meta)) {
        e.preventDefault();
        setCmd((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-bg text-fg">
      <ScrollProgress />
      <CursorLayer />
      <Nav onCommand={() => setCmd(true)} />
      <main>
        <Hero />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={cmd} onOpenChange={setCmd} />
    </div>
  );
}
