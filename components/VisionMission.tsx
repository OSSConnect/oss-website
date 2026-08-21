import FadeIn from "./FadeIn";
import { values } from "@/lib/data";

export default function VisionMission() {
  return (
    <section className="border-b border-oss-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <span className="mono-tag text-xs text-oss-lime">06 — PURPOSE &amp; DIRECTION</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Vision &amp; mission.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FadeIn delay={0.05}>
            <div className="h-full rounded-2xl border border-oss-border bg-oss-panel p-8">
              <span className="mono-tag text-xs text-oss-lime">01 — OUR VISION</span>
              <p className="mt-4 text-lg font-medium leading-snug sm:text-xl">
                Make India one of the world&rsquo;s most{" "}
                <span className="text-oss-lime">trusted, collaborative</span> and{" "}
                <span className="text-oss-lime">impact-driven</span> open-source
                contributor ecosystems.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full rounded-2xl border border-oss-border bg-oss-panel p-8">
              <span className="mono-tag text-xs text-oss-lime">02 — OUR MISSION</span>
              <p className="mt-4 text-sm leading-relaxed text-oss-muted sm:text-base">
                Create accessible pathways for developers to learn open
                source, make meaningful contributions, collaborate with
                global communities, and grow into mentors and maintainers.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-oss-border bg-oss-border sm:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="bg-oss-panel px-5 py-6 text-center">
              <div className="font-display text-sm font-semibold text-oss-lime">{v.title}</div>
              <div className="mt-1 text-xs text-oss-muted">{v.detail}</div>
            </div>
          ))}
        </FadeIn>

        <FadeIn delay={0.2} className="mt-4 text-center text-xs text-oss-muted">
          <span className="mono-tag">ACCESS → CONTRIBUTION → MENTORSHIP → LEADERSHIP</span>
        </FadeIn>
      </div>
    </section>
  );
}
