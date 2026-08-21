"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Avatar from "./Avatar";
import FadeIn from "./FadeIn";
import { achievers } from "@/lib/data";

export default function Achievements() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return achievers;
    return achievers.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <section id="achievements" className="border-b border-oss-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mono-tag text-xs text-oss-lime">04 — ACHIEVEMENTS</span>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Achievements of community members.
            </h2>
          </div>
          <input
            type="text"
            placeholder="Search by name or org…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border border-oss-border bg-oss-panel px-4 py-2 text-sm text-oss-text outline-none placeholder:text-oss-muted focus:border-oss-lime/50 sm:w-64"
          />
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((person, i) => (
            <FadeIn key={person.name} delay={Math.min(i * 0.03, 0.4)}>
              <motion.div
                whileHover={{ y: -3, borderColor: "rgba(55,255,0,0.4)" }}
                transition={{ duration: 0.2 }}
                className="flex h-full items-start gap-3 rounded-xl border border-oss-border bg-oss-panel p-4"
              >
                <Avatar name={person.name} size={44} />
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium">{person.name}</div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {person.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-oss-card px-2 py-0.5 text-[11px] text-oss-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-oss-muted">
            No members match &ldquo;{query}&rdquo;.
          </p>
        )}
      </div>
    </section>
  );
}
