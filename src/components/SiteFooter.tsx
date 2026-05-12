import { Link } from "@tanstack/react-router";
import { LighthouseLogo } from "./LighthouseLogo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <LighthouseLogo size={40} />
            <span className="font-display text-2xl">Lightwarp</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            A new-age creative 3D studio. We craft cinematic commercials,
            real-time experiences, and original IP that audiences remember.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Studio</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@lightwarp.studio</li>
            <li>Stockholm · Bengaluru</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lightwarp Studio — Real-Time 3D, Cinematic Storytelling.
      </div>
    </footer>
  );
}
