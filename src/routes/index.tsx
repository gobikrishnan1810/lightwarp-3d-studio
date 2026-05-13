import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { LighthouseLogo } from "@/components/LighthouseLogo";
import { VideoGallery } from "@/components/VideoGallery";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lightwarp — A New Age Creative 3D Studio" },
      { name: "description", content: "Cinematic 3D commercials, real-time experiences and original IP for brands that want to be remembered." },
    ],
  }),
});

const services = [
  { title: "3D Commercials & Cinematics", desc: "Creative, impactful 3D animation built to engage, convert, and perform.", hash: "ads" },
  { title: "3D Asset Services", desc: "Production-ready 3D assets for games, film, and real-time worlds.", hash: "assets" },
  { title: "Original IP & Content", desc: "Iconic characters and immersive stories that audiences remember.", hash: "ip" },
  { title: "Creative & Technical Consulting", desc: "From concept to scale — real-time production done right.", hash: "consulting" },
];

const clients = ["Strayer", "TAM", "Vertex", "Northwind", "Aurora", "Helix"];

const videos = [
  { id: "helix-reel", title: "Helix Capabilities Reel", duration: "1:24", desc: "High-fidelity cinematic reel showcasing Helix visuals.", premium: true },
  { id: "northwind-hero", title: "Northwind — Hero Spot", duration: "0:45", desc: "Product & lifestyle spot with stylized lighting.", premium: true },
  { id: "aurora-pilot", title: "Aurora — Pilot Sequence", duration: "2:12", desc: "Original IP pilot sequence, animation-first.", premium: false },
  { id: "vertex-demo", title: "Vertex Engine Showcase", duration: "0:58", desc: "Real-time engine demo and interactive render tests.", premium: false },
  { id: "strayer-title", title: "Strayer — Title Design", duration: "0:32", desc: "Title design and motion typography for Strayer.", premium: false },
  { id: "tam-launch", title: "TAM Launch Film", duration: "1:08", desc: "Launch film with product-driven storytelling.", premium: true },
];

function Index() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <video
            className="hero-bg-video"
            src="/videos/hero-anim.mp4"
            poster="/images/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="lighthouse-beam" />
          <div className="hero-bg-overlay" aria-hidden="true" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-32 text-center">
          <div className="flex justify-center mb-8 animate-float-up">
            <LighthouseLogo size={88} />
          </div>
          <h1 className="font-display font-extrabold text-[14vw] md:text-[10rem] leading-[0.85] tracking-tighter animate-float-up">
            LIGHT<span className="text-gradient">WARP</span>
          </h1>
          <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-float-up" style={{ animationDelay: "120ms" }}>
            A new-age creative 3D studio.<br />
            Powered by real-time 3D technology.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-float-up" style={{ animationDelay: "240ms" }}>
            <Link to="/projects" className="rounded-full px-7 py-3 text-sm font-medium bg-gradient-brand text-primary-foreground shadow-glow hover:scale-105 transition-transform">
              Our Recent Work
            </Link>
            <Link to="/contact" className="rounded-full px-7 py-3 text-sm font-medium border border-border hover:bg-card transition-colors">
              Start a Project →
            </Link>
          </div>
        </div>
      </section>
      {/* HERO BANNER - large showreel banner with subtle lighthouse beam */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="relative overflow-hidden rounded-2xl glass hero-banner">
          <div className="absolute inset-0 banner-beam pointer-events-none" aria-hidden="true" />
          <div className="grid md:grid-cols-2 gap-6 items-center p-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-primary mb-2">Featured</p>
              <h2 className="text-4xl md:text-5xl font-display">Helix — Capabilities Reel</h2>
              <p className="text-muted-foreground max-w-xl">A cinematic highlight reel demonstrating our lighting, shading and real-time cinematography. Designed to show the premium visual language we bring to every project.</p>
              <div className="mt-6 flex gap-4">
                <Link to="/projects" className="rounded-full px-6 py-3 bg-gradient-brand text-primary-foreground shadow-glow">See the Project</Link>
                <a href="#helix-reel" className="rounded-full px-6 py-3 border border-border hover:bg-card">Watch →</a>
              </div>
            </div>
            <div className="banner-media">
              <video src="/videos/helix-reel.mp4" poster="/images/helix-poster.jpg" muted loop playsInline autoPlay className="w-full rounded-xl object-cover shadow-glow">
                {/* If you don't have the video yet, replace src or fall back to an image */}
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWREEL */}
      <VideoGallery videos={videos} />


      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">What we do</p>
            <h2 className="text-5xl md:text-6xl font-display">Our Services</h2>
          </div>
          <Link to="/services" className="hidden md:inline text-sm text-muted-foreground hover:text-foreground">All services →</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to="/services"
              className="group glass rounded-3xl p-8 hover:border-primary/40 transition-all hover:shadow-glow"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-display max-w-xs">{s.title}</h3>
                <span className="text-3xl text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              <p className="mt-4 text-muted-foreground">{s.desc}</p>
              <span className="mt-6 inline-block text-sm font-medium text-gradient">Learn more</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2rem] p-12 md:p-20 text-center glass">
          <div className="absolute inset-0 -z-10 bg-gradient-brand opacity-20" />
          <h2 className="text-4xl md:text-6xl font-display max-w-3xl mx-auto">
            Know what you're looking for?
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Tell us about your brand, your launch, your world. We'll light the path.
          </p>
          <Link to="/contact" className="mt-10 inline-flex rounded-full px-8 py-3 bg-gradient-brand text-primary-foreground shadow-glow hover:scale-105 transition-transform">
            Connect With Us
          </Link>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-center text-sm uppercase tracking-[0.3em] text-muted-foreground mb-10">
          Partners & Clients
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-70">
          {clients.map((c) => (
            <div key={c} className="text-center font-display text-2xl tracking-wider">
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* AWARDS */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-2xl glass p-10 awards-section">
          <div className="absolute inset-0 -z-10 banner-beam small" aria-hidden="true" />
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary mb-2">Recognition</p>
              <h2 className="text-4xl font-display">Awards & Honors</h2>
            </div>
            <div className="text-sm text-muted-foreground">Selected festival and industry recognition</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="award-card p-6 rounded-xl bg-[linear-gradient(135deg,var(--primary)_0%,var(--secondary)_100%)] text-primary-foreground shadow-glow">
              <div className="text-3xl font-display">Best Cinematography</div>
              <div className="mt-2 text-sm">Intl. Motion Awards — 2025</div>
            </div>
            <div className="award-card p-6 rounded-xl glass">
              <div className="text-2xl font-display">Best Real-Time Experience</div>
              <div className="mt-2 text-sm text-muted-foreground">Creative Tech Fest — 2024</div>
            </div>
            <div className="award-card p-6 rounded-xl glass">
              <div className="text-2xl font-display">Outstanding Short</div>
              <div className="mt-2 text-sm text-muted-foreground">Indie Reel — 2024</div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
