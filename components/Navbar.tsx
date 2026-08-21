"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import LinkedinIcon from "./icons/LinkedinIcon";
import { contact } from "@/lib/data";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#achievements", label: "Achievements" },
  { href: "#sessions", label: "Sessions" },
  { href: "#community", label: "Community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-oss-border/70 bg-oss-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight">
          <span className="text-oss-lime">{"<."}</span>
          <span>oss</span>
          <span className="text-oss-border">|</span>
          <span className="text-oss-muted">Let&rsquo;s connect</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-oss-muted transition-colors hover:text-oss-text"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-oss-muted transition-colors hover:text-oss-text"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href="#community"
            className="rounded-full bg-oss-lime px-4 py-1.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            Join us
          </a>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-oss-border/70 px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-oss-muted hover:text-oss-text"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#community"
              onClick={() => setOpen(false)}
              className="w-fit rounded-full bg-oss-lime px-4 py-1.5 text-sm font-medium text-black"
            >
              Join us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
