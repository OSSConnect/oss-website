"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import WavyUnderline from "./WavyUnderline";

const achievers = [
  { initials: "SG", name: "Sumit Goyal", roles: ["Member @ Kubernetes", "GSoC @ JSON Schema", "LFX @ Kmesh", "LFX Mentor"], github: "https://github.com/itvi-1234" },
  { initials: "SS", name: "Shubhang Sinha", roles: ["GSoC @ DeepChem", "LFX @ Talent Angels"] },
  { initials: "KG", name: "Krishna Gupta", roles: ["GSoC @ Kubeflow", "Member @ Kubeflow"], github: "https://github.com/Krishna-kg732" },
  { initials: "YI", name: "Yash Israni", roles: ["Maintainer @ Kmesh", "Member @ Volcano-sh", "LFX Mentor", "OSPP'25 Kmesh"], github: "https://github.com/yashisrani" },
  { initials: "LV", name: "Lakshit Verma", roles: ["GSoC '26", "LiFT '26", "C4GT '25"], github: "https://github.com/vee1e" },
  { initials: "KB", name: "Krrish Biswas", roles: ["GSoC '26 @ Fossology", "LFX '26 @ Minder", "Minder Maintainer", "2× Research Papers"], github: "https://github.com/krrish175-byte" },
  { initials: "O", name: "Om", roles: ["GSoC '26 @ OpenAstronomy"] },
  { initials: "RS", name: "Rahul Shendre", roles: ["LFX '26 @ PipeCD", "C4GT '25 @ PlanetRead"], github: "https://github.com/rahulshendre" },
  { initials: "S", name: "Suhani", roles: ["CNCF KubeCon + CloudNativeCon", "North America '26 Speaker"] },
  { initials: "A", name: "Agnivesh", roles: ["GSoC Mentor @ JSON Schema"], github: "https://github.com/AgniveshChaubey" },
  { initials: "AY", name: "Atharv Yadav", roles: ["Maintainer @ Kiwix", "GSoC @ Kiwix"], github: "https://github.com/atharvyadav22" },
  { initials: "P", name: "Paras", roles: ["GSoC '26 @ Catrobat"], github: "https://github.com/Paras-ydv" },
  { initials: "MN", name: "Mithul Nama", roles: ["President, TES", "GitMCP & LFDT Contributor", "Fully Funded OSS Attendee"], github: "https://github.com/mithulcrafts" },
  { initials: "SB", name: "Sapnil Biswas", roles: ["GSoC '26", "Drupal Association Mentee"] },
  { initials: "AM", name: "Atharva Mhaske", roles: ["GSoC @ OpenScienceLabs"] },
  { initials: "AD", name: "Avinash Kumar Deepak", roles: ["GSoC '26 @ Alaska", "Member @ Volcano"] },
  { initials: "SM", name: "Shutosh Mishra", roles: ["GSoC '26 @ MOFA"] },
  { initials: "JP", name: "Jaydeep Pokhariya", roles: ["LFX '26 @ SBOMit", "Minder Member", "DarnIt Maintainer (OSSF)"], github: "https://github.com/Jaydeep869" },
  { initials: "NA", name: "Nitin Awari", roles: ["GSoC '26 @ OWASP"] },
  { initials: "KA", name: "Kartik Angiras", roles: ["GSoC '26 @ JBoss / Red Hat"] },
  { initials: "V", name: "Vaibhav", roles: ["Creator & Maintainer @ MDHero"] },
  { initials: "KM", name: "Krishiv Mahajan", roles: ["LFX '26 @ Karmada"] },
  { initials: "SP", name: "Satwik Sai Prakash", roles: ["GSoC '26 @ NumFOCUS"] },
  { initials: "AK", name: "Ayush Kumar", roles: ["LFX '26 @ KRKN-Chaos"] },
];

export default function Achievements() {
  const [showAll, setShowAll] = useState(false);
  const visibleAchievers = showAll ? achievers : achievers.slice(0, 8);

  return (
    <section className="w-full bg-black py-32 px-6 border-t border-white/5" id="achievements">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 mb-8 tracking-widest uppercase">
            05 — ACHIEVEMENTS
          </div>
          <h2 className="text-4xl md:text-6xl font-display tracking-tight text-white mb-6 relative inline-block">
            Achievements of community members.
            <WavyUnderline />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleAchievers.map((achiever, i) => {
            const innerContent = (
              <>
                {achiever.github && (
                  <div key="link" className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                )}
                
                <div key="avatar" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-display text-xl mb-6 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 group-hover:text-emerald-400 transition-all duration-300 overflow-hidden relative">
                  {achiever.github ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={`${achiever.github}.png`} alt={achiever.name} className="w-full h-full object-cover" />
                  ) : (
                    achiever.initials
                  )}
                </div>
                <h3 key="name" className="text-xl font-display text-white mb-4 pr-6">{achiever.name}</h3>
                <div key="roles" className="space-y-2 mt-auto">
                  {achiever.roles.map((role, idx) => (
                    <div key={idx} className="text-sm text-neutral-400 flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">✦</span>
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </>
            );

            const commonProps = {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-50px" },
              transition: { duration: 0.5, delay: (i % 8) * 0.1 },
              className: `bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors group h-full flex flex-col relative ${
                achiever.github ? "cursor-pointer hover:bg-emerald-500/5" : ""
              }`
            };
            
            return achiever.github ? (
              <motion.a 
                key={`${achiever.name}-${i}`}
                href={achiever.github} 
                target="_blank" 
                rel="noopener noreferrer"
                {...commonProps}
              >
                {innerContent}
              </motion.a>
            ) : (
              <motion.div key={`${achiever.name}-${i}`} {...commonProps}>
                {innerContent}
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 px-8 py-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 font-medium"
          >
            {showAll ? "Show less" : `View all ${achievers.length} achievers`}
            {showAll ? (
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            ) : (
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
