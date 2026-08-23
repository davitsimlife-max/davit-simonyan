import { createFileRoute } from "@tanstack/react-router";
import { CvPage } from "@/components/cv/cv-page";
import { site } from "@/lib/content";

export const Route = createFileRoute("/cv")({
  component: CvPage,
  head: () => ({
    meta: [
      { title: `${site.name} — CV` },
      {
        name: "description",
        content: `${site.name}, founder of ${site.studio}. CV. Work live at ${site.url.replace("https://", "")}.`,
      },
    ],
  }),
});
