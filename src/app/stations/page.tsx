"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { stations } from "@/data/stations";

const StationMap = dynamic(() => import("@/components/StationMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[340px] w-full items-center justify-center rounded-xl border border-[#0a1e33]/15 bg-white font-mono text-xs tracking-[0.2em] text-[#0a1e33]/50 sm:h-[500px]">
      LOADING MAP
    </div>
  ),
});

export default function StationsPage() {
  return (
    <main className="bg-[#faf7f2] text-[#0a1e33]">
      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20">
        <p className="font-mono text-xs font-medium tracking-[0.24em] text-[#0a1e33]/60">
          THE NETWORK
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] sm:text-7xl">
          Find a Desert Oil <span className="text-[#e1251b]">near you.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-[#0a1e33]/70 sm:text-lg">
          Every pin is a blue and red canopy. Tap a marker for directions. More stations opening soon.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border border-[#0a1e33]/15">
          <StationMap />
        </div>

        <ul className="mt-10">
          {stations.map((s, i) => (
            <li
              key={s.name}
              className="flex items-baseline justify-between gap-4 border-t border-[#0a1e33]/15 py-5 last:border-b"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-[#e1251b]">0{i + 1}</span>
                <span className="text-xl font-bold tracking-tight">{s.name}</span>
              </div>
              <span className="text-right font-mono text-[11px] tracking-[0.12em] text-[#0a1e33]/55">
                {s.area.toUpperCase()}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href="/#stations"
          className="group mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-[#0a1e33]"
        >
          <ArrowLeft className="h-4 w-4 text-[#e1251b] transition-transform group-hover:-translate-x-0.5" />
          BACK HOME
        </Link>
        <div className="h-14 sm:h-20" />
      </div>
    </main>
  );
}
