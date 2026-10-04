"use client";

import { motion } from "motion/react";
import { CarFront, Factory, ArrowRight, BadgeCheck } from "lucide-react";

export default function Solutions() {
  return (
    <section id="solutions" className="bg-[#f6f3ec] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#0a1e33] text-white p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#0090d4]/25 blur-[80px]" />
            <CarFront className="h-8 w-8 text-[#0090d4]" />
            <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold tracking-tight">For drivers</h3>
            <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed">
              Quick forecourt service, accurate pumps, clean facilities and
              friendly attendants — the station you choose on every route.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-white/80">
              {["Quality Super & Diesel at the pump", "LPG refills & lubricants", "Quick, courteous service"].map((t) => (
                <li key={t} className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-400" />{t}</li>
              ))}
            </ul>
            <a href="#stations" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0a1e33] hover:bg-slate-100">
              Find your station <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#e1251b]/10 blur-[80px]" />
            <Factory className="h-8 w-8 text-[#e1251b]" />
            <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0a1e33]">For business</h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Bulk fuels, reliable scheduling and nationwide logistics for
              transport, mining, construction, agriculture and marine.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
              {["Diesel, Premix & MGO in volume", "Dependable delivery planning", "Dedicated account support"].map((t) => (
                <li key={t} className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-[#0090d4]" />{t}</li>
              ))}
            </ul>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a1e33] px-5 py-3 text-sm font-semibold text-white hover:bg-[#132e4f]">
              Talk to sales <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
