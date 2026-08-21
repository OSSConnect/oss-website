import FadeIn from "./FadeIn";
import { ecosystemOrgs } from "@/lib/data";

export default function Ecosystem() {
  return (
    <section className="border-b border-oss-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <span className="mono-tag text-xs text-oss-lime">08 — ECOSYSTEM</span>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Exposure across a wide range of organisations.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 flex flex-wrap gap-3">
          {ecosystemOrgs.map((org) => (
            <span
              key={org}
              className="rounded-full border border-oss-border bg-oss-panel px-4 py-2 text-sm text-oss-text transition-colors hover:border-oss-lime/40"
            >
              {org}
            </span>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
