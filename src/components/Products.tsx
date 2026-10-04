"use client";

import { motion } from "motion/react";

const products = [
  { no: "01", name: "Super", desc: "For cars that need a clean run. Fill up and go." },
  { no: "02", name: "Diesel", desc: "For trucks, buses and machines that work hard every day." },
  { no: "03", name: "LPG and more", desc: "Gas for the kitchen. Kerosene, premix and MGO on request." },
];

export default function Products() {
  return (
    <section id="products" className="border-t border-[#0a1e33]/15 bg-[#faf7f2]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 md:grid-cols-2 md:items-end"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.24em] text-[#0a1e33]/50">01. THE FUELS</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">
              Fuel for every journey.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#0a1e33]/65 md:justify-self-end">
            Petrol, diesel and gas at the pump. Bulk supply for transporters, builders, farmers and boat owners. Ask at any station.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-[#0a1e33]/15 bg-[#0a1e33]/15 sm:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#faf7f2] p-8 transition-colors hover:bg-white"
            >
              <p className="font-mono text-xs tracking-[0.2em] text-[#e1251b]">{p.no}</p>
              <h3 className="mt-4 text-2xl font-extrabold tracking-tight">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0a1e33]/65">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
