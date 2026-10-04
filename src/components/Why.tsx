"use client";

import { motion } from "motion/react";

const items = [
  { no: "01", title: "Accurate pumps", desc: "What you pay for is what enters your tank. Every litre counted, every cedi clear." },
  { no: "02", title: "Clean and safe", desc: "Swept forecourts, working extinguishers, staff who follow the rules. Day and night." },
  { no: "03", title: "People who care", desc: "Quick hands, honest help, a greeting when you arrive. That is the Desert Oil habit." },
];

export default function Why() {
  return (
    <section id="why" className="border-t border-[#0a1e33]/15 bg-[#faf7f2]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 md:grid-cols-2 md:items-end"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.24em] text-[#0a1e33]/50">03. 02. WHY DESERT OIL</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">Why drivers choose us.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#0a1e33]/65 md:justify-self-end">
            Anyone can sell fuel. Few sell trust. Here is what brings drivers back to our pumps.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-[#0a1e33]/15 bg-[#0a1e33]/15 sm:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#0a1e33] p-8 text-white"
            >
              <p className="font-mono text-xs tracking-[0.2em] text-[#0090d4]">{it.no}</p>
              <h3 className="mt-4 text-xl font-extrabold tracking-tight">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
