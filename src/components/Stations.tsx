"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Search, Phone } from "lucide-react";

const stations = [
  { name: "Achimota — Head Office", area: "Accra • Greater Accra", phone: "030 243 5917", tag: "HQ" },
  { name: "Aboabo Station", area: "Tafo • Ashanti", phone: "024 356 3426", tag: "Retail" },
  { name: "Manso Akwasiso", area: "Amansie • Ashanti", phone: "—", tag: "Retail" },
  { name: "Prang", area: "Bono East", phone: "—", tag: "Retail" },
  { name: "Apesokubi", area: "Oti Region", phone: "—", tag: "Retail" },
  { name: "Nsawam Adoagyire", area: "Eastern Region", phone: "—", tag: "Retail" },
];

export default function Stations() {
  const [q, setQ] = useState("");
  const filtered = stations.filter((s) =>
    (s.name + s.area).toLowerCase().includes(q.toLowerCase())
  );

  return (
    <section id="stations" className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.22em] text-[#e1251b]">STATION NETWORK</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">You&apos;re never far from Desert Oil.</h2>
            <p className="mt-4 text-slate-600">Growing coverage across Ghana — search a town or region.</p>
          </div>
          <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm w-full sm:w-80 focus-within:border-[#0090d4]">
            <Search className="h-4 w-4 text-slate-400" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search stations…" className="bg-transparent outline-none w-full placeholder:text-slate-400" />
          </label>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              className="rounded-3xl border border-slate-200 p-6 hover:border-[#0090d4]/50 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500"><MapPin className="h-4 w-4 text-[#e1251b]" />{s.area}</span>
                <span className="rounded-full bg-[#0a1e33] px-2.5 py-1 text-[11px] font-semibold text-white">{s.tag}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold">{s.name}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600"><Phone className="h-3.5 w-3.5" />{s.phone}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-semibold text-[#0090d4]">Get directions →</a>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-slate-500 col-span-full">No stations match “{q}” yet — try “Accra” or “Ashanti”. Full interactive map lands with real photos.</p>
          )}
        </div>
      </div>
    </section>
  );
}
