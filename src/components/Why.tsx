"use client";

import { motion } from "motion/react";
import { ShieldCheck, Gauge, HeartHandshake } from "lucide-react";

const items = [
  { icon: Gauge, title: "Accurate pumps", desc: "What you pay for is what you get." },
  { icon: ShieldCheck, title: "Clean and safe", desc: "A forecourt you can trust day and night." },
  { icon: HeartHandshake, title: "People who care", desc: "Quick hands and honest help at every visit." },
];

export default function Why() {
  return (
    <section id="why" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <p className="text-xs font-bold tracking-[0.22em] text-[#0090d4]">WHY DESERT OIL</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">Why drivers choose us.</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl bg-[#0a1e33] text-white p-7"
            >
              <it.icon className="h-6 w-6 text-[#0090d4]" />
              <h3 className="mt-4 font-bold">{it.title}</h3>
              <p className="mt-1.5 text-sm text-white/60">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
