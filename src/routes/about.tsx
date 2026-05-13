import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { LighthouseLogo } from "@/components/LighthouseLogo";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Lightwarp" },
      { name: "description", content: "Lightwarp is a creative 3D studio of artists, technologists, and storytellers building real-time worlds for global brands." },
    ],
  }),
});

const stats = [
  { k: "120+", v: "Films delivered" },
  { k: "30+", v: "Brands served" },
  { k: "4", v: "Continents" },
  { k: "1", v: "Lighthouse" },
];

const values = [
  { t: "Real-time first", d: "We build in engines so iteration is instant and clients see decisions live." },
  { t: "Cinema craft", d: "Lighting, lensing and edit — the discipline of film, the speed of real-time." },
  { t: "Story over spectacle", d: "Visuals that serve a brand truth, not effects for their own sake." },
];

const team = [
  { name: "Ava Coleman", role: "Creative Director", bio: "Directs creative and cinematic language across projects." },
  { name: "Miguel Santos", role: "Lead Technical Artist", bio: "Builds shaders, pipelines and real-time tooling." },
  { name: "Priya Nair", role: "Head of Animation", bio: "Leads character and motion teams for story-first animation." },
  { name: "Jon Park", role: "Producer", bio: "Coordinates schedules, deliverables and client collaboration." },
];

const associates = [
  { id: "vertex", name: "Vertex" },
  { id: "aurora", name: "Aurora" },
  { id: "northwind", name: "Northwind" },
  { id: "strayer", name: "Strayer" },
];

function About() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">About</p>
        <h1 className="text-6xl md:text-8xl font-display tracking-tighter max-w-4xl">
          We light the way for <span className="text-gradient">brands in motion</span>.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="glass rounded-3xl p-12 aspect-square flex items-center justify-center relative overflow-hidden">
          <div className="lighthouse-beam" />
          <LighthouseLogo size={220} />
        </div>
        <div>
          <h2 className="text-4xl font-display">A studio built for the real-time era.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Lightwarp is a collective of directors, 3D artists and engine engineers
            who believe the next decade of brand storytelling will be made in real-time.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            We partner with B2B brands, agencies and studios to ship work that
            looks like cinema and moves like software — fast, iterative, and bold.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.v} className="glass rounded-2xl p-8 text-center">
              <div className="text-5xl font-display text-gradient">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-4xl md:text-5xl font-display mb-12">How we work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={v.t} className="glass rounded-2xl p-8">
              <div className="text-primary font-display text-2xl">0{i + 1}</div>
              <h3 className="mt-4 text-2xl font-display">{v.t}</h3>
              <p className="mt-3 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display">Our story</h2>
            <p className="mt-6 text-lg text-muted-foreground">Founded by filmmakers and engineers, Lightwarp grew from a simple idea: combine cinematic craft with real-time iteration. We spent years building tools and workflows, learning how to keep the soul of cinema while embracing the speed of interactive engines.</p>
            <p className="mt-4 text-lg text-muted-foreground">Today we partner with brands and studios to produce work that launches products, tells stories, and creates memorable moments at scale.</p>
          </div>
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-display">Milestones</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>2018 — Studio founded, first short released</li>
              <li>2020 — First real-time commercial pipeline deployed</li>
              <li>2023 — Expanded to global clients and original IP</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEET OUR TEAM */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-2">People</p>
            <h2 className="text-4xl md:text-5xl font-display">Meet our team</h2>
          </div>
          <div className="hidden md:block text-sm text-muted-foreground">A small, multidisciplinary collective</div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="team-card glass rounded-2xl p-6 text-center">
              <div className="avatar mx-auto mb-4">{m.name.split(" ").map((n) => n[0]).slice(0,2).join("")}</div>
              <div className="text-lg font-semibold">{m.name}</div>
              <div className="text-sm text-muted-foreground">{m.role}</div>
              <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR ASSOCIATES */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-2">Partners</p>
            <h2 className="text-4xl md:text-5xl font-display">Our associates</h2>
          </div>
          <div className="hidden md:block text-sm text-muted-foreground">Collaborators and technology partners</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
          {associates.map((a) => (
            <div key={a.id} className="associate-logo glass rounded-xl p-6 flex items-center justify-center">
              <div className="text-lg font-display">{a.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 text-center">
        <Link to="/contact" className="inline-flex rounded-full px-8 py-3 bg-gradient-brand text-primary-foreground shadow-glow hover:scale-105 transition-transform">
          Work with us →
        </Link>
      </section>
    </SiteShell>
  );
}
