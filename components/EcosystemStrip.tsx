"use client";

import { ecosystems } from "@/lib/data/community";
import Image from "next/image";

export default function EcosystemStrip() {
  return (
    <section className="border-y border-oss-border bg-white py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-6">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-oss-green-deep">
          Part of a larger open source ecosystem
        </h3>
      </div>
      
      <div className="relative flex max-w-[100vw] overflow-hidden">
        <div className="marquee-container flex w-max">
          <div className="marquee-track flex w-max items-center gap-16 px-8">
            {[...ecosystems, ...ecosystems].map((node, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <div className="h-10 w-10 flex-shrink-0 bg-gray-100 rounded flex items-center justify-center p-1">
                  <img 
                    src={node.logo} 
                    alt={node.name} 
                    className="h-full w-full object-contain mix-blend-multiply" 
                  />
                </div>
                <span className="font-display font-medium text-oss-text whitespace-nowrap">
                  {node.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradients to fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </section>
  );
}
