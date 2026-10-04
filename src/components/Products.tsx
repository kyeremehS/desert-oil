"use client";

import { motion } from "motion/react";
import { Zap, Truck, Flame } from "lucide-react";

const products = [
  { icon: Zap, name: "Super", desc: "Clean petrol for everyday driving." },
  { icon: Truck, name: "Diesel", desc: "Power for cars, trucks and industry." },
  { icon: Flame, name: "LPG & More", desc: "Gas, Kerosene, Premix & MGO." },
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#e1251b]">FUELS</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">Everything your engine needs.</h2>
          </div>
          <p className="max-w-sm text-sm text-slate-600 leading-relaxed">Three essentials at every forecourt — full range on request for bulk buyers.</p>
        </motion.div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-slate-150 border-slate-200 bg-slate-50/60 p-7 hover:bg-white hover:shadow-xl hover:shadow-slate-200 transition-all"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0a1e33] text-white">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
