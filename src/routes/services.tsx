import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Lightwarp" },
      { name: "description", content: "3D commercials, asset production, original IP, and creative & technical consulting for brands and studios." },
    ],
  }),
});

const services = [
  {
    id: "ads",
    title: "3D Commercials & Cinematics",
    tagline: "Cinematic stories that convert.",
    body: "From product hero films to character-led brand spots, we build in real-time engines for speed, iteration and visual fidelity that traditional pipelines can't match.",
    bullets: ["Concept & art direction", "Full CG production", "Real-time iteration", "Broadcast-ready delivery"],
  },
  {
    id: "assets",
    title: "3D Asset Services",
    tagline: "Production-ready, engine-ready.",
    body: "Hard-surface, organic, environments and characters — optimized for games, film, AR/VR and real-time virtual production.",
    bullets: ["Hero & background assets", "PBR materials", "Rigging & animation", "LODs & optimization"],
  },
  {
    id: "ip",
    title: "Original IP & Content",
    tagline: "Worlds people want to live in.",
    body: "We develop original characters, universes and serialized content from concept through pilot — designed for cross-platform storytelling.",
    bullets: ["Character design", "World-building", "Pilot production", "Franchise strategy"],
  },
  {
    id: "consulting",
    title: "Creative & Technical Consulting",
    tagline: "Real-time, done right.",
    body: "Pipeline architecture, engine selection, team training, and creative leadership for studios and brands moving into real-time production.",
    bullets: ["Pipeline audits", "Unreal / Unity setup", "Team training", "Production strategy"],
  },
];

function Services() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Services</p>
        <h1 className="text-6xl md:text-8xl font-display tracking-tighter">
          Built in <span className="text-gradient">real-time</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Four practices, one studio. Whether you need a 30-second hero spot or a full
          franchise pipeline, we light the way from idea to delivery.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 space-y-6">
        {services.map((s, i) => (
          <article
            key={s.id}
            id={s.id}
            className="glass rounded-3xl p-8 md:p-12 grid md:grid-cols-12 gap-8 hover:shadow-glow transition-shadow"
          >
            <div className="md:col-span-1 font-display text-3xl text-primary">0{i + 1}</div>
            <div className="md:col-span-5">
              <h2 className="text-3xl md:text-4xl font-display">{s.title}</h2>
              <p className="mt-3 text-gradient text-lg">{s.tagline}</p>
            </div>
            <div className="md:col-span-6">
              <p className="text-muted-foreground text-lg">{s.body}</p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-brand" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
      {/* HOW WE DELIVER */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Process</p>
            <h2 className="text-5xl md:text-6xl font-display">How we deliver</h2>
          </div>
          <div className="hidden md:block text-sm text-muted-foreground">Transparent steps, predictable delivery</div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <article className="glass rounded-3xl p-8 text-center">
            <div className="text-3xl font-display text-primary">Discover</div>
            <p className="mt-4 text-sm text-muted-foreground">We align on vision, scope and technical constraints to make a clear plan.</p>
          </article>

          <article className="glass rounded-3xl p-8 text-center">
            <div className="text-3xl font-display text-primary">Prototype</div>
            <p className="mt-4 text-sm text-muted-foreground">Rapid concepting and look-dev in real-time to validate creative direction.</p>
          </article>

          <article className="glass rounded-3xl p-8 text-center">
            <div className="text-3xl font-display text-primary">Produce</div>
            <p className="mt-4 text-sm text-muted-foreground">Full production, iteration cycles and quality control for final assets.</p>
          </article>

          <article className="glass rounded-3xl p-8 text-center">
            <div className="text-3xl font-display text-primary">Deliver</div>
            <p className="mt-4 text-sm text-muted-foreground">Delivery in the formats you need with documentation and handoff support.</p>
          </article>
        </div>
      </section>

      {/* READY TO GET STARTED CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] p-12 md:p-20 text-center glass">
          <div className="absolute inset-0 -z-10 bg-gradient-brand opacity-12" />
          <h2 className="text-4xl md:text-6xl font-display max-w-3xl mx-auto">Ready to get started?</h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">Tell us about your timeline, scope and deliverables — we’ll propose a plan and estimate.</p>
          <Link to="/contact" className="mt-10 inline-flex rounded-full px-8 py-3 bg-gradient-brand text-primary-foreground shadow-glow hover:scale-105 transition-transform">
            Start the conversation →
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
