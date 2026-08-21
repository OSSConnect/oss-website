import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="border-b border-oss-border/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:gap-16">
        <FadeIn>
          <span className="mono-tag text-xs text-oss-lime">01 — WHO WE ARE</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A contributor-driven open-source community.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-col justify-center gap-5 text-oss-muted">
          <p>
            OSS | Let&rsquo;s Connect exists to turn curiosity into
            meaningful contribution. With 800+ members across borders, we
            connect beginners, active contributors, mentors and
            maintainers.
          </p>
          <p>
            Through weekly OSS sessions, we help people learn openly, work
            on real projects, and grow together — from first commit to
            confident contributor.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
