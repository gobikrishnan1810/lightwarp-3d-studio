import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Lightwarp" },
      { name: "description", content: "Tell us about your project. We respond within one business day." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteShell>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Contact</p>
        <h1 className="text-6xl md:text-8xl font-display tracking-tighter">
          Let's <span className="text-gradient">light it up</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Tell us about your brand, timeline and ambition. We reply within one business day.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="glass rounded-3xl p-8 md:p-12">
          {sent ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✶</div>
              <h2 className="text-3xl font-display">Beam received.</h2>
              <p className="mt-3 text-muted-foreground">We'll be in touch within one business day.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="grid md:grid-cols-2 gap-6"
            >
              <Field label="Your name"><input required className="form-input" placeholder="Jane Director" /></Field>
              <Field label="Company"><input className="form-input" placeholder="Studio / brand" /></Field>
              <Field label="Email"><input required type="email" className="form-input" placeholder="you@studio.com" /></Field>
              <Field label="Budget range"><select className="form-input">
                <option>$25k – $75k</option>
                <option>$75k – $250k</option>
                <option>$250k+</option>
                <option>Not sure yet</option>
              </select></Field>
              <Field label="Tell us about the project" className="md:col-span-2">
                <textarea required rows={6} className="form-input resize-none" placeholder="A 30s hero spot launching in Q3..." />
              </Field>
              <div className="md:col-span-2 flex justify-end">
                <button type="submit" className="rounded-full px-8 py-3 bg-gradient-brand text-primary-foreground shadow-glow hover:scale-105 transition-transform">
                  Send beam →
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <style>{`
        .form-input {
          width: 100%;
          background: oklch(0.13 0.02 350 / 0.6);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 14px 16px;
          color: var(--color-foreground);
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .form-input:focus { border-color: var(--color-primary); box-shadow: 0 0 0 4px oklch(0.65 0.24 18 / 0.15); }
      `}</style>
    </SiteShell>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-sm text-muted-foreground uppercase tracking-wider">{label}</span>
      {children}
    </label>
  );
}
