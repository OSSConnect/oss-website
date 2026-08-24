"use client";

import { programs } from "@/lib/data/community";
import { ArrowRight, GraduationCap, Terminal, Rocket, Mic, Users, Calendar } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Terminal,
  Rocket,
  Mic,
  Users,
  Calendar,
};

export default function ProgramsGrid() {
  return (
    <section className="bg-oss-card py-24" id="programs">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-oss-green-deep mb-3">
              How can we collaborate?
            </h3>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-oss-text">
              Programs & Initiatives
            </h2>
          </div>
          <Link href="/programs" className="group flex items-center gap-2 text-sm font-semibold text-oss-green-deep hover:text-oss-green transition-colors">
            View all programs 
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => {
            const IconComponent = iconMap[program.icon] || Rocket;
            
            return (
              <div 
                key={i}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-8 border border-oss-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-oss-mint/30 flex items-center justify-center text-oss-green-deep mb-6 group-hover:bg-oss-green-deep group-hover:text-white transition-colors duration-300">
                    <IconComponent size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-oss-text mb-3">{program.title}</h4>
                  <p className="text-oss-muted leading-relaxed">{program.description}</p>
                </div>
                
                <div className="mt-8 flex items-center">
                  <div className="h-10 w-10 rounded-full border border-oss-border flex items-center justify-center text-oss-muted group-hover:border-oss-green-deep group-hover:bg-oss-green-deep group-hover:text-white transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
