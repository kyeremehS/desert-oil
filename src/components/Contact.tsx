"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] bg-gradient-to-br from-[#0090d4] to-[#0a1e33] text-white p-8 sm:p-14 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-[80px]" />
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] text-white/70">VISIBILITY STARTS HERE</p>
              <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">Let&apos;s put Desert Oil on every route.</h2>
              <p className="mt-4 text-white/75 leading-relaxed">Bulk enquiries, dealerships, station feedback or careers — talk to us. This contact block is wired for the backend later; for now it&apos;s pure UI.</p>
              <div className="mt-6 space-y-3 text-sm">
                <p className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> No. 18 Lindsay Square, Near DVLA Achimota, Accra, Ghana</p>
                <p className="flex items-center gap-2.5"><Phone className="h-4 w-4 shrink-0" /> 030 243 5917 • 024 491 5899</p>
                <p className="flex items-center gap-2.5"><Mail className="h-4 w-4 shrink-0" /> info@desertoil.com.gh (placeholder)</p>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl bg-white text-[#0a1e33] p-6 sm:p-8 space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input required placeholder="Full name" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#0090d4]" />
                <input required placeholder="Phone" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#0090d4]" />
              </div>
              <input placeholder="Company (optional)" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#0090d4]" />
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#0090d4] text-slate-600">
                <option>Bulk / B2B supply</option>
                <option>Dealership / station</option>
                <option>Feedback</option>
                <option>Careers</option>
              </select>
              <textarea required placeholder="How can we help?" rows={4} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#0090d4] resize-none" />
              <button className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#e1251b] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#b91c14]">
                Send enquiry <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="text-[11px] text-slate-500 text-center">Demo form — backend connects after UI sign-off.</p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
