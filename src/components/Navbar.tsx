"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MapPin, Phone } from "lucide-react";

const links = [
  { label: "Products", href: "#products" },
  { label: "Retail & B2B", href: "#solutions" },
  { label: "Stations", href: "#stations" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* price ticker */}
      <div className="bg-[#0a1e33] text-white text-xs overflow-hidden">
        <div className="flex whitespace-nowrap animate-ticker py-2 gap-0 w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-8 pr-8" aria-hidden={copy === 1}>
              <span><span className="text-white/60">SUPER</span> <span className="font-semibold text-white">GH₵ —</span></span>
              <span><span className="text-white/60">DIESEL</span> <span className="font-semibold text-white">GH₵ —</span></span>
              <span><span className="text-white/60">LPG</span> <span className="font-semibold text-white">GH₵ —</span></span>
              <span><span className="text-white/60">KEROSENE</span> <span className="font-semibold text-white">GH₵ —</span></span>
              <span className="text-white/60">Prices updated at stations daily</span>
              <span className="text-white/60">Hotlines: 030 243 5917 • 024 491 5899</span>
            </div>
          ))}
        </div>
      </div>

      <nav className="bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative h-10 w-28 overflow-hidden rounded bg-[#2b2f36] px-1">
              <Image src="/logo.png" alt="Desert Oil" fill className="object-contain" priority />
            </span>
            <span className="hidden sm:block leading-tight">
              <span className="block text-[15px] font-extrabold tracking-tight text-[#0a1e33]">DESERT OIL</span>
              <span className="block text-[11px] font-medium tracking-[0.18em] text-[#0090d4]">GHANA LIMITED</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-[#0090d4] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:0302435917" className="flex items-center gap-1.5 text-sm font-semibold text-[#0a1e33]">
              <Phone className="h-4 w-4 text-[#e1251b]" /> 030 243 5917
            </a>
            <Link href="#stations" className="inline-flex items-center gap-1.5 rounded-full bg-[#e1251b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#b91c14] transition-colors">
              <MapPin className="h-4 w-4" /> Find a Station
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 flex flex-col gap-3 text-sm font-medium">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1.5">
                {l.label}
              </Link>
            ))}
            <Link href="#stations" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#e1251b] px-4 py-2.5 font-semibold text-white">
              <MapPin className="h-4 w-4" /> Find a Station
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
