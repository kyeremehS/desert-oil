"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Leadership() {
  return (
    <section id="people" className="border-t border-[#0a1e33]/15 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 md:grid-cols-2 md:items-end"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.24em] text-[#0a1e33]/50">01. THE PEOPLE</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">Led by people who know fuel.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#0a1e33]/65 md:justify-self-end">
            Our managers carry more than ten years in Ghana downstream. They run the stations, the supply and the service.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-10 overflow-hidden rounded-xl border border-[#0a1e33]/15"
        >
          <div className="relative h-[300px] sm:h-[440px]">
            <Image
              src="/executives.jpg"
              alt="Desert Oil senior executives at the head office"
              fill
              className="object-cover object-top"
            />
          </div>
          <p className="border-t border-[#0a1e33]/15 bg-[#faf7f2] px-5 py-4 font-mono text-[11px] tracking-[0.18em] text-[#0a1e33]/60">
            SENIOR EXECUTIVES AT THE HEAD OFFICE, ACHIMOTA.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
