"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030303] pt-24 pb-8 px-6 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image src="/oss-connect-logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
            <span className="text-white font-display text-2xl font-bold tracking-tight">OSS | Let's Connect</span>
          </div>
          <p className="text-neutral-500 max-w-sm text-lg">
            Building India's next generation of open-source contributors.
          </p>
          <div className="flex gap-4 pt-4 text-emerald-400/80 text-sm">
            <a href="mailto:harshpopatk5@gmail.com" className="hover:text-emerald-400 transition-colors">harshpopatk5@gmail.com</a>
            <span>•</span>
            <span>+91-9460357477</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3 text-neutral-400">
            <span className="text-white font-medium mb-1">Community</span>
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
            <a href="#sessions" className="hover:text-white transition-colors">Sessions</a>
          </div>
          <div className="flex flex-col gap-3 text-neutral-400">
            <span className="text-white font-medium mb-1">Socials</span>
            <a href="https://linkedin.com/company/oss-connected" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/oss_lets_connect" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://x.com/ossbuildconnect?s=20" className="hover:text-white transition-colors">X (Twitter)</a>
            <a href="https://chat.whatsapp.com/Bw3H2hVoUZy8AZZs96QdUy" className="hover:text-white transition-colors" target="_blank">WhatsApp</a>
          </div>
        </div>
      </div>
      
      <div className="w-full text-center">
        <h1 className="text-[14vw] font-display tracking-tighter text-white/5 leading-none select-none">
          oss connect
        </h1>
      </div>
      
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center pt-8 border-t border-white/5 mt-8 text-xs text-neutral-600">
        <span>© 2026 OSS. All rights reserved.</span>
        <span>Kota, Rajasthan</span>
      </div>
    </footer>
  );
}
