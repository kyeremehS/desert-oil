"use client";

import { motion } from "motion/react";
import { Truck, Ship, PhoneCall } from "lucide-react";

const rows = [
  { icon: Truck, title: "Bulk diesel", desc: "For transporters, builders and farmers." },
  { icon: Ship, title: "MGO and premix", desc: "For marine work and fishing communities." },
  { icon: PhoneCall, title: "One call to schedule", desc: "We plan each drop around your work." },
];

const docket = ["BULK DIESEL", "MGO", "PREMIX"];

export default function Delivery() {
  return (
    <section className="bg-[#0a1e33] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.24em] text-[#0090d4]">01. BULK SUPPLY</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-5xl">
            Delivered right. <span className="text-[#e1251b]">Every time.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
            We move fuel safely from depot to your tank. Tell us what you burn and we handle the rest.
          </p>
          <ul className="mt-8 space-y-5">
            {rows.map((r) => (
              <li key={r.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/5">
                  <r.icon className="h-5 w-5 text-[#0090d4]" />
                </span>
                <span>
                  <span className="block font-bold">{r.title}</span>
                  <span className="mt-0.5 block text-sm text-white/60">{r.desc}</span>
                </span>
              </li>
            ))}
          </ul>
          <a
            href="tel:0302435917"
            className="mt-8 inline-flex items-center gap-2 bg-white px-7 py-4 font-mono text-xs font-medium tracking-[0.14em] text-[#0a1e33] hover:bg-slate-200"
          >
            <PhoneCall className="h-4 w-4" /> TALK TO SALES
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-xl bg-white text-[#0a1e33]"
        >
          <div className="flex items-center justify-between bg-[#e1251b] px-6 py-4">
            <p className="font-mono text-xs font-bold tracking-[0.2em] text-white">DESERT OIL</p>
            <p className="font-mono text-[11px] tracking-[0.2em] text-white/80">SUPPLY DOCKET</p>
          </div>
          <ul>
            {docket.map((d, i) => (
              <li
                key={d}
                className="flex items-baseline justify-between gap-4 border-t border-[#0a1e33]/10 px-6 py-5 first:border-t-0"
              >
                <span className="text-lg font-extrabold tracking-tight">{d}</span>
                <span className="font-mono text-[11px] tracking-[0.18em] text-[#0a1e33]/50">0{i + 1} / ON REQUEST</span>
              </li>
            ))}
          </ul>
          <p className="border-t border-[#0a1e33]/10 bg-[#faf7f2] px-6 py-4 font-mono text-[11px] tracking-[0.14em] text-[#0a1e33]/60">
            TO SCHEDULE A DROP, CALL 030 243 5917
          </p>
        </motion.div>
      </div>
    </section>
  );
}
