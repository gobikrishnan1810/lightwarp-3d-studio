import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects — Lightwarp" },
      { name: "description", content: "Selected work in cinematic 3D, real-time virtual production, and original IP development." },
    ],
  }),
});

const projects = [
  { title: "Helix : Capabilities Reel", client: "Internal", year: "2026", tag: "Cinematic", color: "from-primary to-secondary" },
  { title: "Northwind Apparel — Hero Spot", client: "Northwind", year: "2025", tag: "Commercial", color: "from-secondary to-primary" },
  { title: "Aurora — Pilot Sequence", client: "Original IP", year: "2025", tag: "Animation", color: "from-primary via-secondary to-primary" },
  { title: "Vertex Engine Showcase", client: "Vertex", year: "2025", tag: "Real-Time", color: "from-secondary via-primary to-secondary" },
  { title: "Strayer Pictures — Title Design", client: "Strayer", year: "2024", tag: "Title Design", color: "from-primary to-secondary" },
  { title: "TAM Launch Film", client: "TAM", year: "2024", tag: "Commercial", color: "from-secondary to-primary" },
];

function Projects() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Projects</p>
        <h1 className="text-6xl md:text-8xl font-display tracking-tighter">
          Selected <span className="text-gradient">work</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          A glimpse of what we've shipped — cinematic spots, real-time launches and
          original characters built for global audiences.
        </p>
      </section>

      <section id="latest" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl glass aspect-[4/3] cursor-pointer"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(1_0_0_/_0.15),transparent_50%)] mix-blend-overlay" />
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-foreground/70">
                  <span>{p.tag}</span>
                  <span>{p.year}</span>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-display leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{p.client}</p>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-background/80 grid place-items-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-3 transition-all">
                →
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 text-center">
        <h2 className="text-4xl md:text-5xl font-display">Have something in mind?</h2>
        <Link to="/contact" className="mt-8 inline-flex rounded-full px-8 py-3 bg-gradient-brand text-primary-foreground shadow-glow hover:scale-105 transition-transform">
          Let's build it →
        </Link>
      </section>
    </SiteShell>
  );
}
