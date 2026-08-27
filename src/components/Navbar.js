"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/games", label: "Games" },
  { href: "/studio", label: "Studio" },
  { href: "/news", label: "News" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#05070b]/85 backdrop-blur-md border-b border-[rgba(0,212,255,0.2)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <Image
            src="/logo.png"
            alt="Vortex Trail Studio"
            width={160}
            height={40}
            className="h-7 sm:h-9 w-auto max-w-[150px] sm:max-w-none object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-[#e8eef5] hover:text-[#00d4ff] transition-colors"
            >
              {link.label}
            </Link>
          ))}          <span className="text-sm font-medium tracking-wide text-[#8a95a5]">
            Coming Soon
          </span>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#e8eef5] text-2xl leading-none p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[rgba(0,212,255,0.15)] bg-[#05070b]/98">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium tracking-wide text-[#e8eef5] hover:text-[#00d4ff] py-3 border-b border-[rgba(0,212,255,0.08)] last:border-b-0"
              >
                {link.label}
              </Link>
            ))}            <span className="text-base font-medium tracking-wide text-[#8a95a5] py-3">
              Coming Soon
            </span>
          </nav>
        </div>
      )}
    </header>
  );
}
