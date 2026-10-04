"use client";

import { motion } from "motion/react";
import { ShieldCheck, Globe2, HeartHandshake, Gauge } from "lucide-react";

const items = [
  { icon: Gauge, title: "Accurate pumps, honest litres", desc: "Calibrated dispensing and transparent pricing you can trust." },
  { icon: ShieldCheck, title: "Safety & quality first", desc: "HSSE discipline on every forecourt, depot and delivery." },
  { icon: Globe2, title: "Nationwide supply muscle", desc: "Worldwide sourcing network + Ghana logistics know-how." },
  { icon: HeartHandshake, title: "Customer-obsessed service", desc: "10+ years downstream experience focused on your needs." },
];

export default function Why() {
  return (
    <section id="why" className="bg-[#0a1e33] text-white py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.22em] text-[#0090d4]">WHY DESERT OIL</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">The company customers choose.</h2>
          <p className="mt-4 text-white/65 leading-relaxed">Our ambition is simple: be the preferred fuel partner in Ghana&apos;s downstream — modern, reliable, and always on your side.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur"
            >
              <it.icon className="h-6 w-6 text-[#0090d4]" />
              <h3 className="mt-4 font-bold leading-snug">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
