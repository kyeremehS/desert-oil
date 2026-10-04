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
    <section className="text-white">
      <div className="relative overflow-hidden bg-[#0a1e33]">
        <div className="absolute inset-0">
          <Image
            src="/station-desert.png"
            alt="Desert Oil forecourt"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1e33]/85 via-[#0a1e33]/55 to-[#0a1e33]/80" />

        <div className="relative mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs font-medium tracking-[0.24em] text-white/60"
          >
            #DESERTOILGHANA
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-5xl text-[13vw] font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-8xl"
          >
            Quality fuel for a<br />
            <span className="text-[#ff4a3d]">Ghana</span> that moves
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
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
              className="group inline-flex items-center gap-2 bg-[#e1251b] px-7 py-4 font-mono text-xs font-medium tracking-[0.14em] text-white hover:bg-[#b91c14]"
            >
              <MapPin className="h-4 w-4" /> FIND A STATION
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 border border-white/40 px-7 py-4 font-mono text-xs font-medium tracking-[0.14em] text-white hover:border-white hover:bg-white/10"
            >
              SEE OUR FUELS
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 py-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold tracking-tight sm:text-4xl">{s.value}</div>
                <div className="mt-1 max-w-[180px] text-xs leading-snug text-white/60">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.45 }}
        className="relative left-1/2 w-screen -translate-x-1/2"
      >
        <div className="relative h-[380px] sm:h-[480px] lg:h-[560px]">
          <Image
            src="/delivery-banner.png"
            alt="Desert Oil tanker, quality delivery"
            fill
            className="object-cover object-[62%_center] lg:object-center"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
