"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

const shots = [
  { id: "desert", label: "Desert Oil", src: "/forecourt-desert.jpg", note: "Real Desert Oil forecourt" },
  { id: "staroil", label: "Inspo: Star Oil", src: "/forecourt-staroil.jpg", note: "Reference — Star Oil style" },
] as const;

export default function Hero() {
  const [active, setActive] = useState<(typeof shots)[number]["id"]>("desert");
  const current = shots.find((s) => s.id === active)!;

  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-[#0a1e33] text-white">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image src={current.src} alt={current.note} fill className="object-cover" priority />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e33] via-[#0a1e33]/35 to-[#0a1e33]/30" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 pt-32 pb-10">
        {/* photo switcher */}
        <div className="inline-flex rounded-full border border-white/20 bg-black/40 p-1 text-xs font-semibold backdrop-blur">
          {shots.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`rounded-full px-4 py-2 transition-colors ${active === s.id ? "bg-white text-[#0a1e33]" : "text-white/70 hover:text-white"}`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-3xl text-4xl sm:text-6xl font-extrabold leading-[1.02] tracking-tight"
        >
          Fueling Ghana&apos;s journey.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed"
        >
          Quality fuels, honest litres, warm service — from Accra to every region we serve.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-7 flex flex-wrap gap-3"
        >
          <Link href="#stations" className="group inline-flex items-center gap-2 rounded-full bg-[#e1251b] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#b91c14] transition-colors">
            <MapPin className="h-4 w-4" /> Find a station
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors">
            Talk to us
          </Link>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/15 pt-5 text-sm text-white/70">
          <span><span className="font-bold text-white">10+ yrs</span> downstream experience</span>
          <span><span className="font-bold text-white">6</span> fuels: Super • Diesel • LPG & more</span>
          <span><span className="font-bold text-white">24H</span> selected stations</span>
          <span className="text-white/50">{current.note} — tap above to compare</span>
        </div>
      </div>
    </section>
  );
}
