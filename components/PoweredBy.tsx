"use client";

import { ecosystemOrgs } from "@/lib/data";

export default function PoweredBy() {
  return (
    <section className="w-full bg-black py-24 border-y border-white/5" id="ecosystem">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 mb-8 tracking-widest uppercase">
          01 — ECOSYSTEM
        </div>
        <p className="text-neutral-500 font-mono text-sm tracking-widest uppercase mb-12">
          Exposure across a wide range of organisations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
          {ecosystemOrgs.map((org, i) => (
            <a
              key={i}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-display font-bold text-neutral-400 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {org.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
