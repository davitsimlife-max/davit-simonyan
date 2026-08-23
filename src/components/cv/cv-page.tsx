import { ArrowLeft, Download } from "lucide-react";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { CvSheet } from "./cv-sheet";

export function CvPage() {
  return (
    <div className="cv-root">
      <div className="cv-chrome">
        <a href="/" className="cv-back">
          <ArrowLeft className="size-4" />
          {site.name}
        </a>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <a href="/Davit-Simonyan-CV.pdf" download>
              <Download className="size-3.5" />
              Download PDF
            </a>
          </Button>
        </div>
      </div>
      <div className="cv-stage">
        <CvSheet />
      </div>
    </div>
  );
}
