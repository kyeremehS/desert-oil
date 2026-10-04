"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stations = [
  { name: "Achimota Head Office", area: "Accra, Greater Accra" },
  { name: "Aboabo", area: "Tafo, Ashanti" },
  { name: "Prang", area: "Bono East" },
];

export default function Stations() {
  return (
    <section id="stations" className="border-t border-[#0a1e33]/15 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 md:grid-cols-2 md:items-end"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.24em] text-[#0a1e33]/50">02. THE NETWORK</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">Close to you.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#0a1e33]/65 md:justify-self-end">
            Accra, Ashanti, Bono East and beyond. Wherever you see the blue and red canopy, pull in.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-xl border border-[#0a1e33]/15"
          >
            <div className="relative h-72 sm:h-96">
              <Image src="/team.jpg" alt="Desert Oil team on the forecourt" fill className="object-cover" />
            </div>
            <p className="border-t border-[#0a1e33]/15 bg-[#faf7f2] px-5 py-4 font-mono text-[11px] tracking-[0.18em] text-[#0a1e33]/60">
              OUR CREW ON THE FORECOURT. THIS IS WHO SERVES YOU.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            {stations.map((s, i) => (
              <li
                key={s.name}
                className="flex items-baseline justify-between gap-4 border-t border-[#0a1e33]/15 py-5 last:border-b"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[#e1251b]">0{i + 1}</span>
                  <span className="text-xl font-bold tracking-tight">{s.name}</span>
                </div>
                <span className="text-right font-mono text-[11px] tracking-[0.12em] text-[#0a1e33]/55">{s.area.toUpperCase()}</span>
              </li>
            ))}
            <a href="#contact" className="group mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-[#0a1e33]">
              SEE ALL STATIONS
              <ArrowRight className="h-4 w-4 text-[#e1251b] transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
