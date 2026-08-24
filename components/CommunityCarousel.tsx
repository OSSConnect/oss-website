"use client";

import { members } from "@/lib/data/community";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function CommunityCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-oss-green-deep text-white py-24 overflow-hidden" id="community">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-oss-mint mb-3">
              People building in the open
            </h3>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              From first PRs to global impact
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/members" className="group flex items-center gap-2 text-sm font-semibold text-white hover:text-oss-mint transition-colors">
              View all stories 
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="hidden md:flex items-center gap-2">
              <button 
                onClick={() => scroll('left')}
                className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-oss-green-deep transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-oss-green-deep transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Carousel */}
      <div className="pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))] pb-8">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pr-6 md:pr-0"
        >
          {members.map((member, i) => (
            <div 
              key={i} 
              className="snap-start shrink-0 w-[300px] sm:w-[350px] rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="h-16 w-16 rounded-full overflow-hidden shrink-0 border border-white/20 bg-gray-800">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white leading-tight">{member.name}</h4>
                  <p className="text-sm text-white/60 mt-1">{member.role} @ {member.project}</p>
                </div>
              </div>
              
              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="inline-flex items-center rounded-full border border-oss-mint/30 bg-oss-mint/10 px-3 py-1 text-xs font-semibold text-oss-mint uppercase tracking-wider">
                  {member.badge}
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate for infinite feel visual */}
          {members.map((member, i) => (
            <div 
              key={`dup-${i}`} 
              className="snap-start shrink-0 w-[300px] sm:w-[350px] rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="h-16 w-16 rounded-full overflow-hidden shrink-0 border border-white/20 bg-gray-800">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white leading-tight">{member.name}</h4>
                  <p className="text-sm text-white/60 mt-1">{member.role} @ {member.project}</p>
                </div>
              </div>
              
              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="inline-flex items-center rounded-full border border-oss-mint/30 bg-oss-mint/10 px-3 py-1 text-xs font-semibold text-oss-mint uppercase tracking-wider">
                  {member.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
