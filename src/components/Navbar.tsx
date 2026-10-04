"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MapPin } from "lucide-react";

const links = [
  { label: "Stations", href: "/#stations" },
  { label: "Supply", href: "/supply" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="flex h-1.5">
        <div className="w-2/3 bg-[#0090d4]" />
        <div className="w-1/3 bg-[#e1251b]" />
      </div>

      <nav className="border-b border-[#0a1e33]/15 bg-[#faf7f2]/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center" aria-label="Desert Oil home">
            <span className="relative block h-10 w-36 overflow-hidden rounded-md bg-white px-2 sm:h-11 sm:w-44">
              <Image
                src="/logo-lockup.jpg"
                alt="Desert Oil"
                fill
                className="object-contain"
                priority
              />
            </span>
          </Link>

          <div className="hidden items-center gap-6 lg:gap-7 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-xs font-medium tracking-[0.18em] text-[#0a1e33]/70 hover:text-[#0a1e33]"
              >
                {l.label.toUpperCase()}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/#stations"
              className="inline-flex items-center gap-2 bg-[#e1251b] px-5 py-3 font-mono text-xs font-medium tracking-[0.14em] text-white hover:bg-[#b91c14]"
            >
              <MapPin className="h-3.5 w-3.5" /> FIND A STATION
            </Link>
          </div>

          <button className="p-2 text-[#0a1e33] md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="flex flex-col gap-1 border-t border-[#0a1e33]/10 bg-[#faf7f2] px-4 py-4 md:hidden">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 font-mono text-xs tracking-[0.18em] text-[#0a1e33]/80"
              >
                {l.label.toUpperCase()}
              </Link>
            ))}
            <Link
              href="/#stations"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#e1251b] px-4 py-3 font-mono text-xs tracking-[0.14em] text-white"
            >
              <MapPin className="h-4 w-4" /> FIND A STATION
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
