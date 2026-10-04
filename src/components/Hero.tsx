"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

const stats = [
  { value: "10+", label: "Years in downstream" },
  { value: "06", label: "Fuels for cars, trucks and kitchens" },
  { value: "24H", label: "Open late at selected stations" },
];

export default function Hero() {
  return (
    <section className="bg-[#faf7f2] text-[#0a1e33]">
      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs font-medium tracking-[0.24em] text-[#0a1e33]/60"
            >
              #DESERTOILGHANA
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] sm:text-6xl xl:text-7xl"
            >
              Quality fuel for a<br />
              <span className="text-[#e1251b]">Ghana</span> that moves
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-md text-base leading-relaxed text-[#0a1e33]/70"
            >
              Desert Oil is the Ghanaian filling station that treats you right. Clean forecourts, accurate pumps and people who greet you by name.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/#stations"
                className="group inline-flex items-center gap-2 bg-[#0a1e33] px-7 py-4 font-mono text-xs font-medium tracking-[0.14em] text-white hover:bg-[#132e4f]"
              >
                <MapPin className="h-4 w-4" /> FIND A STATION
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 border border-[#0a1e33]/25 px-7 py-4 font-mono text-xs font-medium tracking-[0.14em] text-[#0a1e33] hover:border-[#0a1e33]"
              >
                SEE OUR FUELS
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-xl border border-[#0a1e33]/15"
          >
            <div className="relative h-[300px] sm:h-[420px] lg:h-[480px]">
              <Image
                src="/delivery-banner.png"
                alt="Desert Oil tanker, quality delivery"
                fill
                className="object-cover object-[70%_center]"
                priority
              />
            </div>
            <p className="border-t border-[#0a1e33]/15 bg-white px-5 py-4 font-mono text-[11px] tracking-[0.18em] text-[#0a1e33]/60">
              OUR TANKERS. QUALITY DELIVERY, DEPOT TO PUMP.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-3 gap-6 border-t border-[#0a1e33]/15 pt-6"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold tracking-tight sm:text-4xl">{s.value}</div>
              <div className="mt-1 max-w-[180px] text-xs leading-snug text-[#0a1e33]/60">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-10 overflow-hidden rounded-xl border border-[#0a1e33]/15"
        >
          <div className="relative h-[320px] sm:h-[480px]">
            <Image
              src="/forecourt-desert.jpg"
              alt="Desert Oil forecourt"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 border-t border-[#0a1e33]/15 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[11px] tracking-[0.18em] text-[#0a1e33]/60">
              DESERT OIL FORECOURT. CLEAN PUMPS, CLEAR PRICES.
            </p>
            <p className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-[#0a1e33]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> OPEN NOW
            </p>
          </div>
        </motion.div>

        <div className="h-14 sm:h-20" />
      </div>
    </section>
  );
}
