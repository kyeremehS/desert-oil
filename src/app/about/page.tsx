import Leadership from "@/components/Leadership";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const facts = [
  { value: "Accra", label: "Head office at Achimota" },
  { value: "COMAC", label: "Chamber member" },
  { value: "06", label: "Fuels, retail and bulk" },
];

export default function About() {
  return (
    <main className="bg-[#faf7f2] text-[#0a1e33]">
      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20">
        <p className="font-mono text-xs font-medium tracking-[0.24em] text-[#0a1e33]/60">
          ABOUT DESERT OIL
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] sm:text-7xl">
          The company customers <span className="text-[#e1251b]">choose.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-[#0a1e33]/70 sm:text-lg">
          Desert Oil Ghana Limited is an independent Ghanaian oil marketing company. Our head office sits at No. 18 Lindsay Square, near DVLA Achimota, Accra. We sell Super, Diesel, LPG, Kerosene, Premix and MGO to drivers and businesses across the country.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#0a1e33]/15 pt-6">
          {facts.map((f) => (
            <div key={f.label}>
              <div className="text-3xl font-extrabold tracking-tight sm:text-4xl">{f.value}</div>
              <div className="mt-1 max-w-[180px] text-xs leading-snug text-[#0a1e33]/60">{f.label}</div>
            </div>
          ))}
        </div>
        <div className="h-14 sm:h-20" />
      </div>

      <Leadership />

      <div className="border-t border-white/10 bg-[#0a1e33] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-[-0.02em] sm:text-5xl">
            Come and fill up <span className="text-[#e1251b]">today.</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:0302435917"
              className="inline-flex items-center gap-2 bg-white px-7 py-4 font-mono text-xs font-medium tracking-[0.14em] text-[#0a1e33] hover:bg-slate-200"
            >
              <Phone className="h-4 w-4" /> CALL 030 243 5917
            </a>
            <Link
              href="/#products"
              className="group inline-flex items-center gap-2 border border-white/25 px-7 py-4 font-mono text-xs font-medium tracking-[0.14em] text-white hover:border-white"
            >
              BACK TO FUELS
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
