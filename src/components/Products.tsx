"use client";

import { motion } from "motion/react";
import { Fuel, Flame, Truck, Ship, Zap, Container } from "lucide-react";

const products = [
  { icon: Zap, name: "Super", desc: "Clean, responsive petrol for everyday driving.", tag: "Retail" },
  { icon: Truck, name: "Diesel", desc: "Power for cars, trucks, buses and industry.", tag: "Retail + Bulk" },
  { icon: Flame, name: "Kerosene", desc: "Reliable household and commercial energy.", tag: "Retail" },
  { icon: Container, name: "LPG", desc: "Safe cooking gas, refilled to standard.", tag: "Retail + Bulk" },
  { icon: Fuel, name: "Premix", desc: "Supporting fishing communities and marine use.", tag: "Special" },
  { icon: Ship, name: "MGO", desc: "Marine Gas Oil for vessels and industry.", tag: "B2B" },
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold tracking-[0.22em] text-[#e1251b]">OUR FUELS</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0a1e33]">
            One stop for every engine.
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            A focused range that meets your exact energy need — sourced flexibly
            to keep you moving in a fast-moving market.
          </p>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-slate-200 bg-white p-6 hover:border-[#0090d4]/50 hover:shadow-xl hover:shadow-[#0090d4]/10 transition-all"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0a1e33] text-white group-hover:bg-[#0090d4] transition-colors">
                  <p.icon className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600">{p.tag}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{p.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#0090d4]">Learn more →</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
