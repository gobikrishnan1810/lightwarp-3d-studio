import { Link } from "@tanstack/react-router";

type Video = {
  id: string;
  title: string;
  duration?: string;
  desc?: string;
  premium?: boolean;
  thumb?: string; // optional background image or gradient
};

export function VideoGallery({ videos }: { videos: Video[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-2">Showreel</p>
          <h2 className="text-4xl md:text-5xl font-display">Animation & Motion</h2>
        </div>
        <Link to="/projects" className="hidden md:inline text-sm text-muted-foreground hover:text-foreground">All work →</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v, i) => (
          <article
            key={v.id}
            className="video-card group rounded-2xl overflow-hidden relative glass cursor-pointer"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="video-thumb" aria-hidden="true" style={{ backgroundImage: v.thumb ? `url(${v.thumb})` : undefined }}>
              <div className="video-overlay" />
              <div className="play-circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3v18l15-9L5 3z" fill="white" />
                </svg>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                {v.premium && <span className="premium-badge">Premium</span>}
              </div>
              {v.desc && <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>}
              <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                <span>{v.duration ?? "—"}</span>
                <Link to={`/projects#${v.id}`} className="text-primary hover:underline">View →</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default VideoGallery;
