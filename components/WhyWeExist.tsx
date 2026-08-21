import FadeIn from "./FadeIn";
import { gapSteps } from "@/lib/data";

export default function WhyWeExist() {
  return (
    <section className="border-b border-oss-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <span className="mono-tag text-xs text-oss-lime">02 — WHY WE EXIST</span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            The gap isn&rsquo;t learning to code.
            <br />
            It&rsquo;s <span className="text-oss-lime">learning to contribute.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-oss-muted sm:text-base">
            India has no shortage of developer talent. What many learners
            lack is a clear pathway into real open-source communities — how
            to find the right project, work with maintainers, ship
            meaningful changes, and keep growing.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-oss-border bg-oss-border sm:grid-cols-2">
          {gapSteps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.08} className="bg-oss-panel p-7">
              <span className="mono-tag text-oss-lime">{step.number}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm text-oss-muted">{step.question}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-6 rounded-2xl bg-oss-lime/10 p-7 text-center sm:p-8">
          <p className="text-sm text-oss-muted sm:text-base">
            We build the bridge from{" "}
            <span className="font-medium text-oss-text">curious developer</span> →{" "}
            <span className="font-medium text-oss-text">confident contributor</span> →{" "}
            <span className="font-medium text-oss-lime">community leader</span>.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
