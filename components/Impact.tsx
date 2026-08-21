import FadeIn from "./FadeIn";
import CountUp from "./CountUp";
import { impactSteps, impactPillars } from "@/lib/data";

export default function Impact() {
  return (
    <section className="border-b border-oss-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <span className="mono-tag text-xs text-oss-lime">03 — OUR IMPACT</span>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            From curiosity to contribution.
          </h2>
          <p className="mt-4 max-w-md text-sm text-oss-muted sm:text-base">
            Since launch, 500+ students have been supported through their
            first open-source milestones.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-oss-border bg-oss-panel p-8">
              <div className="font-display text-5xl font-semibold text-oss-lime">
                <CountUp value="500+" />
              </div>
              <div className="mt-2 text-sm text-oss-muted">
                Students supported through first OSS milestones
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {impactPillars.map((p) => (
                  <span
                    key={p}
                    className="mono-tag rounded-full border border-oss-border px-3 py-1 text-xs text-oss-text"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-oss-border bg-oss-border sm:grid-cols-2">
            {impactSteps.map((step, i) => (
              <FadeIn key={step.number} delay={0.15 + i * 0.08} className="bg-oss-panel p-6">
                <span className="mono-tag text-oss-lime">{step.number}</span>
                <h3 className="mt-2 text-sm font-semibold">{step.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-oss-muted">{step.detail}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
