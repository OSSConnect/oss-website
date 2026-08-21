import FadeIn from "./FadeIn";
import CountUp from "./CountUp";
import { roadmapStats, roadmapSteps } from "@/lib/data";

export default function Roadmap() {
  return (
    <section className="border-b border-oss-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <span className="mono-tag text-xs text-oss-lime">08 — OUR NEXT CHAPTER</span>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Roadmap 2026 – 27.
          </h2>
          <p className="mt-3 max-w-md text-sm text-oss-muted">
            From a fast-growing community to a national open-source
            contributor ecosystem.
          </p>
          <span className="mono-tag mt-4 inline-block rounded-full border border-oss-amber/40 bg-oss-amber/10 px-3 py-1 text-xs text-oss-amber">
            TARGETS — NOT CURRENT ACHIEVEMENTS
          </span>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-oss-border bg-oss-border sm:grid-cols-4">
          {roadmapStats.map((s) => (
            <div key={s.label} className="bg-oss-panel px-4 py-6 text-center">
              <div className="font-display text-3xl font-semibold text-oss-lime">
                <CountUp value={s.value} />
              </div>
              <div className="mt-1 text-xs text-oss-muted">{s.label}</div>
            </div>
          ))}
        </FadeIn>

        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-oss-border bg-oss-border sm:grid-cols-2 lg:grid-cols-4">
          {roadmapSteps.map((step, i) => (
            <FadeIn key={step.number} delay={0.15 + i * 0.06} className="bg-oss-panel p-6">
              <span className="mono-tag text-oss-lime">{step.number}</span>
              <h3 className="mt-2 text-sm font-semibold">{step.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-oss-muted">{step.detail}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-4 text-center text-xs text-oss-muted">
          <span className="mono-tag">COMMUNITY → CONTRIBUTORS → MENTORS → MAINTAINERS</span>
        </FadeIn>
      </div>
    </section>
  );
}
