"use client";

import { motion } from "motion/react";
import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] bg-gradient-to-br from-[#0090d4] to-[#0a1e33] text-white p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Let&apos;s put Desert Oil on your route.</h2>
            <p className="mt-2 text-sm sm:text-base text-white/75">No. 18 Lindsay Square, Near DVLA Achimota, Accra • 030 243 5917 • 024 491 5899</p>
          </div>
          <a href="tel:0302435917" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0a1e33] hover:bg-slate-100 shrink-0">
            <Phone className="h-4 w-4" /> Call us today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
