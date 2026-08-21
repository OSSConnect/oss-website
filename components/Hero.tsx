"use client";

import { motion } from "framer-motion";
import { ArrowRight, GitPullRequest } from "lucide-react";
import { heroStats } from "@/lib/data";
import CountUp from "./CountUp";
import AnimatedWords from "./AnimatedWords";
import TiltText from "./TiltText";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-oss-border/60">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-oss-lime/10 blur-[120px]"
        aria-hidden
      />

      <TiltText className="relative mx-auto max-w-6xl px-6 pt-36 pb-16 text-center sm:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mono-tag inline-flex items-center gap-2 rounded-full border border-oss-border bg-oss-panel px-3 py-1 text-xs text-oss-lime"
        >
          <GitPullRequest size={13} />
          OSS — LET&rsquo;S CONNECT
        </motion.div>

        <h1 className="text-glow mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          <AnimatedWords text="Building India’s next generation" delay={0.1} />
          <br />
          <AnimatedWords
            text="of open-source contributors."
            delay={0.28}
            className="text-oss-lime"
          />
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-balance text-base text-oss-muted sm:text-lg">
          <AnimatedWords
            text="A contributor-driven open-source community turning curiosity into meaningful contribution — from first commit to confident contributor."
            delay={0.42}
          />
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#community"
            className="group flex items-center gap-2 rounded-full bg-oss-lime px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
          >
            Our community
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#achievements"
            className="rounded-full border border-oss-border px-6 py-3 text-sm font-medium text-oss-text transition-colors hover:border-oss-lime/50 hover:text-oss-lime"
          >
            See our achievers
          </a>
        </div>

        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-oss-border bg-oss-border sm:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label} className="bg-oss-bg px-4 py-6 text-left sm:text-center">
              <div className="font-display text-3xl font-semibold text-oss-lime">
                <CountUp value={s.value} />
              </div>
              <div className="mt-1 text-sm font-medium">{s.label}</div>
              <div className="mt-0.5 text-xs text-oss-muted">{s.detail}</div>
            </div>
          ))}
        </div>
      </TiltText>
    </section>
  );
}
