"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MapPin } from "lucide-react";

const links = [
  { label: "Fuels", href: "#products" },
  { label: "Stations", href: "#stations" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/15 bg-[#0a1e33]/80 py-2.5 pl-4 pr-2.5 backdrop-blur-md">
          <Link href="/" className="flex items-center" aria-label="Desert Oil home">
            <span className="relative block h-11 w-44">
              <Image
                src="/logo.png"
                alt="Desert Oil"
                fill
                className="object-contain object-left mix-blend-screen"
                priority
              />
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-white/80">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="#stations" className="inline-flex items-center gap-1.5 rounded-full bg-[#e1251b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#b91c14] transition-colors">
              <MapPin className="h-4 w-4" /> Find a Station
            </Link>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/15 bg-[#0a1e33]/95 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-white/90 backdrop-blur">
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
