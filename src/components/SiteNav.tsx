import { Link } from "@tanstack/react-router";
import { LighthouseLogo } from "./LighthouseLogo";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
];

export function SiteNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between glass rounded-b-2xl">
        <Link to="/" className="flex items-center gap-3 group">
          <LighthouseLogo size={36} />
          <span className="font-display text-xl tracking-tight">
            Light<span className="text-gradient">warp</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium bg-gradient-brand text-primary-foreground shadow-glow hover:scale-105 transition-transform"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
