import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { VideoGallery } from "@/components/VideoGallery";

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

      <VideoGallery
        videos={[
          { id: "helix-reel", title: "Helix Capabilities Reel", duration: "1:24", desc: "High-fidelity cinematic reel.", premium: true },
          { id: "northwind-hero", title: "Northwind — Hero Spot", duration: "0:45", desc: "Product hero spot.", premium: true },
          { id: "vertex-demo", title: "Vertex Engine Showcase", duration: "0:58", desc: "Real-time engine demo.", premium: false },
        ]}
      />

      {/* FEATURED PROJECT */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Featured</p>
            <h2 className="text-5xl md:text-6xl font-display">Helix — Capabilities Reel</h2>
          </div>
          <div className="hidden md:block text-sm text-muted-foreground">A deep dive into our cinematography and lighting</div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="featured-media rounded-2xl overflow-hidden shadow-glow">
            <video src="/videos/helix-reel.mp4" poster="/images/helix-poster.jpg" muted loop playsInline autoPlay className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-muted-foreground">Selected Project</p>
            <h3 className="text-3xl md:text-4xl font-display mt-2">Helix : Capabilities Reel</h3>
            <p className="mt-6 text-lg text-muted-foreground">An internal reel that highlights advanced lighting rigs, volumetric effects and our real-time compositing workflow. Built to showcase frame-accurate renders and stylized color pipelines.</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-brand" />Cinematography</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-brand" />Lighting & Lookdev</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-brand" />Real-time Pipeline</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gradient-brand" />Color Grading</li>
            </ul>
            <div className="mt-8">
              <Link to="/projects#helix-reel" className="inline-flex rounded-full px-6 py-3 bg-gradient-brand text-primary-foreground shadow-glow">View Full Reel</Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Capabilities</p>
            <h2 className="text-5xl md:text-6xl font-display">What we do best</h2>
          </div>
          <div className="hidden md:block text-sm text-muted-foreground">Expertise across the full production lifecycle</div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Lighting & Lookdev", desc: "Cinematic lighting, HDRI sets, and physically-plausible materials." },
            { title: "Character Animation", desc: "Full-body performance and stylized animation workflows." },
            { title: "Real-time Engines", desc: "Unreal and custom engines for interactive experiences." },
            { title: "Pipeline & Tools", desc: "Automation, build tooling, and scalable asset pipelines." },
            { title: "VFX & Compositing", desc: "Volumetrics, particles, and final-frame compositing." },
            { title: "Delivery & Optimization", desc: "Platform-ready deliverables, LODs and format conversions." },
          ].map((c) => (
            <article key={c.title} className="capability-card glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
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
