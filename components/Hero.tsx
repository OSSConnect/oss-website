"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ecosystems, stats, members } from "@/lib/data/community";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-oss-bg flex items-center" id="explore">
      <div className="absolute inset-0 bg-grid opacity-50 z-0"></div>
      
      <div className="mx-auto max-w-7xl px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center rounded-full border border-oss-border bg-white px-3 py-1 text-sm font-medium text-oss-muted w-fit shadow-sm">
            Contributor-Driven Community
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-oss-text leading-[1.1]">
            Building India&rsquo;s Next Generation of <span className="text-oss-green-deep">Open Source</span> Contributors
          </h1>
          
          <p className="text-lg text-oss-muted max-w-lg leading-relaxed">
            We help developers discover open source, make their first meaningful contribution, collaborate with real projects and communities, and grow into long-term contributors.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link
              href="#join"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-oss-green-deep px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-opacity-90 hover:shadow-lg"
            >
              Join Community
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#programs"
              className="flex w-full sm:w-auto items-center justify-center rounded-full border border-oss-border bg-white px-8 py-3.5 text-sm font-semibold text-oss-text transition-all hover:bg-gray-50 hover:border-gray-300"
            >
              Explore Programs
            </Link>
          </div>
          
          <div className="mt-8 flex items-center gap-8 border-t border-oss-border pt-8">
            <div className="flex -space-x-3">
              {members.slice(0, 4).map((member, i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden bg-gray-200 shadow-sm relative z-[4-i]">
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-sm font-semibold text-oss-text">
                <span>{stats.members} members</span>
                <span className="text-oss-muted">•</span>
                <span>{stats.reach} reach</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Orbital Ecosystem */}
        <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center hidden md:flex">
           {/* Central Logo */}
           <motion.div 
             className="absolute z-20 w-32 h-32 rounded-full bg-white shadow-xl flex flex-col items-center justify-center border-4 border-oss-bg"
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
           >
             <div className="w-16 h-16 rounded-full bg-oss-green-deep flex items-center justify-center text-white mb-2">
                <span className="font-display font-bold text-xl">{"<."}</span>
             </div>
             <span className="text-[10px] font-bold text-oss-text tracking-wider uppercase">OSS | Connect</span>
           </motion.div>

           {/* Orbits & Nodes */}
           {/* Orbit 1 */}
           <div className="absolute w-[250px] h-[250px] rounded-full border border-oss-border/60 animate-[spin_30s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
              <EcosystemNode node={ecosystems[0]} delay={0} rotation={0} radius={125} />
              <EcosystemNode node={ecosystems[1]} delay={0} rotation={180} radius={125} />
           </div>
           
           {/* Orbit 2 */}
           <div className="absolute w-[400px] h-[400px] rounded-full border border-oss-border/50 animate-[spin_45s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d' }}>
              <EcosystemNode node={ecosystems[2]} delay={0} rotation={45} radius={200} />
              <EcosystemNode node={ecosystems[3]} delay={0} rotation={225} radius={200} />
           </div>

           {/* Orbit 3 */}
           <div className="absolute w-[550px] h-[550px] rounded-full border border-oss-border/40 animate-[spin_60s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
              <EcosystemNode node={ecosystems[4]} delay={0} rotation={90} radius={275} />
              <EcosystemNode node={ecosystems[5]} delay={0} rotation={270} radius={275} />
           </div>
        </div>
      </div>
    </section>
  );
}

function EcosystemNode({ node, rotation, delay, radius }: { node: any, rotation: number, delay: number, radius: number }) {
  return (
    <div 
      className="absolute top-1/2 left-1/2" 
      style={{ 
        transform: `rotate(${rotation}deg) translateX(${radius}px)`,
        transformOrigin: '0 0'
      }}
    >
      <motion.div 
        className="group relative -ml-8 -mt-8 flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl bg-white shadow-md border border-oss-border hover:shadow-xl hover:scale-110 hover:z-30 transition-all duration-300"
        style={{ animation: 'spin 30s linear infinite reverse' }} // counteract parent spin to stay upright
      >
        <img src={node.logo} alt={node.name} className="h-8 w-8 rounded object-contain" />
        
        {/* Tooltip */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap bg-oss-text text-white text-xs py-1.5 px-3 rounded-md shadow-lg pointer-events-none">
          {node.name}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-oss-text"></div>
        </div>
      </motion.div>
    </div>
  );
}
