import { MessageSquareQuote } from "lucide-react";
import FadeIn from "./FadeIn";
import { sessionTopics, sessionFeedback } from "@/lib/data";

export default function Sessions() {
  return (
    <section id="sessions" className="border-b border-oss-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mono-tag text-xs text-oss-lime">06 — LEARNING IN PUBLIC</span>
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

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-oss-border bg-oss-border sm:grid-cols-2">
          {sessionTopics.map((topic, i) => (
            <FadeIn key={topic.number} delay={i * 0.06} className="bg-oss-panel p-6">
              <span className="mono-tag text-oss-lime">{topic.number}</span>
              <h3 className="mt-2 text-sm font-semibold">{topic.title}</h3>
              <p className="mt-1 text-xs text-oss-muted">{topic.detail}</p>
            </FadeIn>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {sessionFeedback.map((quote, i) => (
            <FadeIn key={quote} delay={0.1 + i * 0.08}>
              <div className="flex items-start gap-3 rounded-2xl border border-oss-border bg-oss-panel p-6">
                <MessageSquareQuote className="mt-0.5 shrink-0 text-oss-lime" size={18} />
                <p className="text-sm italic text-oss-muted">&ldquo;{quote}&rdquo;</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
