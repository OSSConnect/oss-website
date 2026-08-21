import { ArrowUpRight, Quote } from "lucide-react";
import FadeIn from "./FadeIn";
import Avatar from "./Avatar";
import { testimonials, testimonialsSheetUrl } from "@/lib/data";

function TestimonialCard({ name, quote }: { name: string; quote: string }) {
  return (
    <div className="flex w-[22rem] shrink-0 flex-col gap-4 rounded-2xl border border-oss-border bg-oss-panel p-6">
      <Quote className="text-oss-lime" size={20} strokeWidth={1.5} />
      <p className="text-sm leading-relaxed text-oss-muted">{quote}</p>
      <div className="mt-auto flex items-center gap-3 pt-2">
        <Avatar name={name} size={36} />
        <span className="text-sm font-medium text-oss-text">{name}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const track = [...testimonials, ...testimonials];

  return (
    <section className="border-b border-oss-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mono-tag text-xs text-oss-lime">05 — IN THEIR WORDS</span>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              What the community says.
            </h2>
          </div>
          <a
            href={testimonialsSheetUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm text-oss-muted transition-colors hover:text-oss-lime"
          >
            Want more?
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </FadeIn>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn
          delay={0.1}
          className="marquee-container overflow-hidden rounded-2xl [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
        >
          <div className="marquee-track flex w-max gap-4">
            {track.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} name={t.name} quote={t.quote} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
