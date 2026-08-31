"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <Image src="/oss-connect-logo.png" alt="Logo" width={32} height={32} className="rounded-full" />
          <span className="text-white font-display text-xl font-bold tracking-tight">OSS | Let's connect</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">About</a>
          <a href="#achievements" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Achievements</a>
          <a href="#sessions" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Sessions</a>
          <a href="#community" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Community</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://linkedin.com/company/oss-connected" target="_blank" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a 
            href="https://chat.whatsapp.com/Bw3H2hVoUZy8AZZs96QdUy"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
          >
            Join us
          </a>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 py-6 px-6 flex flex-col gap-4 shadow-xl">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg text-neutral-300">About</a>
          <a href="#achievements" onClick={() => setMobileMenuOpen(false)} className="text-lg text-neutral-300">Achievements</a>
          <a href="#sessions" onClick={() => setMobileMenuOpen(false)} className="text-lg text-neutral-300">Sessions</a>
          <a href="#community" onClick={() => setMobileMenuOpen(false)} className="text-lg text-neutral-300">Community</a>
          <div className="h-px bg-white/10 my-2" />
          <a href="https://linkedin.com/company/oss-connected" onClick={() => setMobileMenuOpen(false)} className="text-lg text-neutral-300">LinkedIn</a>
          <a href="https://chat.whatsapp.com/Bw3H2hVoUZy8AZZs96QdUy" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="text-lg text-emerald-400 font-medium">Join us</a>
        </div>
      )}
    </nav>
  );
}
