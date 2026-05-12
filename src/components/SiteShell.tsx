import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { BeamTransition } from "./BeamTransition";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <BeamTransition />
      <SiteNav />
      <main className="flex-1 pt-24">{children}</main>
      <SiteFooter />
    </div>
  );
}
