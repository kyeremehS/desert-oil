"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-[#0a1e33] text-white">
      <div className="absolute inset-0">
        <Image
          src="/forecourt-desert.jpg"
          alt="Desert Oil forecourt"
          fill
          className="object-cover brightness-[0.92] contrast-[1.05]"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e33] via-[#0a1e33]/30 to-[#0a1e33]/25" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 pt-32 pb-10">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-white/80 backdrop-blur">
          DESERT OIL GHANA LIMITED
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-3xl text-4xl sm:text-6xl font-extrabold leading-[1.02] tracking-tight"
        >
          Quality fuel.
          <br />
          Quality service.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed"
        >
          Fill up at Desert Oil and feel the difference. Clean forecourts, accurate pumps and a team that treats you right.
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
          <span><span className="font-bold text-white">10+ years</span> in downstream</span>
          <span><span className="font-bold text-white">6 fuels</span> for cars, trucks and kitchens</span>
          <span><span className="font-bold text-white">Open late</span> at selected stations</span>
        </div>
      </div>
    </section>
  );
}
