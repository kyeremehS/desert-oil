"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 bg-[#0a1e33] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.24em] text-white/50">04. VISIT US</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-6xl">
            Come and fill up <span className="text-[#e1251b]">today.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
            Head Office: No. 18 Lindsay Square, near DVLA Achimota, Accra. Call 030 243 5917 or 024 491 5899.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:0302435917"
              className="group inline-flex items-center gap-2 bg-white px-7 py-4 font-mono text-xs font-medium tracking-[0.14em] text-[#0a1e33] hover:bg-slate-200"
            >
              CALL 030 243 5917
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#stations"
              className="inline-flex items-center gap-2 border border-white/25 px-7 py-4 font-mono text-xs font-medium tracking-[0.14em] text-white hover:border-white"
            >
              FIND A STATION
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
