"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

const stations = [
  { name: "Achimota — Head Office", area: "Accra • Greater Accra" },
  { name: "Aboabo", area: "Tafo • Ashanti" },
  { name: "Prang", area: "Bono East" },
];

export default function Stations() {
  return (
    <section id="stations" className="bg-[#f6f3ec] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] h-80 sm:h-[420px]"
        >
          <Image src="/team.jpg" alt="Desert Oil team" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white">Our crew on the forecourt — the face of Desert Oil.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-[0.22em] text-[#e1251b]">NETWORK</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">Never far from a Desert Oil.</h2>
          <ul className="mt-6 space-y-3">
            {stations.map((s) => (
              <li key={s.name} className="flex items-center justify-between rounded-2xl bg-white border border-slate-200 px-5 py-4">
                <span>
                  <span className="block font-semibold">{s.name}</span>
                  <span className="block text-xs text-slate-500 mt-0.5">{s.area}</span>
                </span>
                <MapPin className="h-5 w-5 text-[#0090d4]" />
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0a1e33] hover:text-[#0090d4]">
            See all stations <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
