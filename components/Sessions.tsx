import { MessageSquareQuote } from "lucide-react";
import FadeIn from "./FadeIn";
import { sessionTopics, sessionFeedback } from "@/lib/data";

export default function Sessions() {
  return (
    <section id="sessions" className="border-b border-oss-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mono-tag text-xs text-oss-lime">07 — LEARNING IN PUBLIC</span>
            <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Sessions &amp; knowledge sharing.
            </h2>
            <p className="mt-3 max-w-md text-sm text-oss-muted">
              Practical sessions turn open-source questions into
              contribution-ready knowledge.
            </p>
          </div>
          <div className="shrink-0 text-left sm:text-right">
            <div className="font-display text-4xl font-semibold text-oss-lime">10</div>
            <div className="text-xs text-oss-muted">
              Distinct community meet links shared during the first months
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {sessionTopics.map((topic, i) => (
            <FadeIn key={topic.number} delay={i * 0.06} className="break-inside-avoid">
              <div className="rounded-2xl border border-oss-border bg-oss-card/40 hover:bg-oss-card p-6 shadow-sm transition-all duration-300">
                <span className="mono-tag text-oss-lime">{topic.number}</span>
                <h3 className="mt-2 text-lg font-display font-semibold tracking-tight">{topic.title}</h3>
                <p className="mt-2 text-sm text-oss-muted/80">{topic.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {sessionFeedback.map((quote, i) => (
            <FadeIn key={quote} delay={0.1 + i * 0.08} className="break-inside-avoid">
              <div className="flex flex-col gap-3 rounded-2xl border border-oss-border bg-oss-panel/80 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <MessageSquareQuote className="shrink-0 text-oss-lime" size={20} />
                <p className="text-sm italic leading-relaxed text-oss-muted/90">&ldquo;{quote}&rdquo;</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
