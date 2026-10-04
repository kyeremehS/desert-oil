"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Fuel, MapPin, Building2 } from "lucide-react";

const stats = [
  { value: "10+", label: "Years downstream experience" },
  { value: "6+", label: "Product lines" },
  { value: "Nationwide", label: "Growing retail network" },
  { value: "24/7", label: "Selected stations" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1e33] text-white">
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-[#0090d4]/25 blur-[120px]" />
      <div className="absolute -bottom-52 -left-40 h-[520px] w-[520px] rounded-full bg-[#e1251b]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-12 sm:pt-24 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80"
        >
          <span className="h-2 w-2 rounded-full bg-[#e1251b] animate-pulse" />
          OIL MARKETING COMPANY • MEMBER OF COMAC • ACCRA, GHANA
        </motion.div>

        <div className="mt-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-end">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl font-extrabold leading-[1.02] tracking-tight"
            >
              Fueling Ghana&apos;s
              <br />
              journey, <span className="text-[#0090d4]">every</span>{" "}
              <span className="relative inline-block">
                kilometre.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute -bottom-2 left-0 h-1.5 w-full origin-left rounded-full bg-[#e1251b]"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/70"
            >
              Desert Oil Ghana Limited is a modern, forward-thinking OMC — quality
              Super, Diesel, Kerosene, LPG, Premix &amp; MGO for drivers and
              businesses, backed by a nationwide supply network.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link href="#stations" className="group inline-flex items-center gap-2 rounded-full bg-[#e1251b] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#b91c14] transition-colors">
                <MapPin className="h-4 w-4" /> Find a station
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="#products" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                <Fuel className="h-4 w-4 text-[#0090d4]" /> Explore fuels
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/60"
            >
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#0090d4]" /> Quality-assured fuels</span>
              <span className="inline-flex items-center gap-1.5"><Building2 className="h-4 w-4 text-[#0090d4]" /> Retail + bulk supply</span>
            </motion.div>
          </div>

          {/* Visual card — swaps with real forecourt photo later */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-6 sm:p-8 backdrop-blur"
          >
            <div className="flex items-center justify-between text-xs text-white/60">
              <span className="tracking-[0.2em]">DESERT OIL • LIVE NETWORK</span>
              <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Open now</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="rounded-2xl bg-white/[0.06] border border-white/10 p-4"
                >
                  <div className="text-2xl font-extrabold tracking-tight">{s.value}</div>
                  <div className="mt-1 text-xs leading-snug text-white/60">{s.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-[#0090d4]/15 border border-[#0090d4]/25 p-4 text-xs leading-relaxed text-white/75">
              Head Office: No. 18 Lindsay Square, Near DVLA Achimota, Accra.
              Your photo of the forecourt / tankers goes here — this card is sized for it.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
