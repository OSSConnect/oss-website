"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { signInWithGithub, signOut } from "@/app/actions/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User as UserIcon } from "lucide-react";

const LINKS = [
  { href: "#explore", label: "Explore" },
  { href: "#community", label: "Community" },
  { href: "#programs", label: "Programs" },
  { href: "#impact", label: "Impact" },
  { href: "/resources", label: "Resources" },
];

export default function Navbar({ user }: { user?: any }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-oss-border shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <div className="w-8 h-8 rounded-full bg-oss-green-deep flex items-center justify-center text-white">
            <span className="text-sm">{"<."}</span>
          </div>
          <span className="text-oss-text">OSS | Let&rsquo;s Connect</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-oss-muted transition-colors hover:text-oss-green-deep"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          {user ? (
            <div className="flex items-center gap-4">
              <Avatar className="h-9 w-9 border border-oss-border">
                <AvatarImage src={user.user_metadata?.avatar_url} />
                <AvatarFallback><UserIcon size={16} /></AvatarFallback>
              </Avatar>
              <form action={signOut}>
                <button type="submit" className="text-sm font-medium text-oss-muted hover:text-oss-text transition-colors">
                  Logout
                </button>
              </form>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <Link
                href="#join"
                className="group flex items-center gap-2 rounded-full bg-oss-green-deep px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-opacity-90 hover:shadow-md"
              >
                Join Community 
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </div>

        <button
          className="md:hidden text-oss-text"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-oss-border px-6 pb-6 pt-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-5">
            {LINKS.map((link) => (
               <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-oss-text"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#join"
              onClick={() => setOpen(false)}
              className="mt-4 flex w-fit items-center gap-2 rounded-full bg-oss-green-deep px-6 py-3 text-sm font-medium text-white"
            >
              Join Community <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
