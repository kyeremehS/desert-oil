import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Delivery from "@/components/Delivery";

export default function Supply() {
  return (
    <main className="bg-[#faf7f2] text-[#0a1e33]">
      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20">
        <p className="font-mono text-xs font-medium tracking-[0.24em] text-[#0a1e33]/60">
          BULK SUPPLY
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] sm:text-7xl">
          Fuel that <span className="text-[#e1251b]">comes to you.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-[#0a1e33]/70 sm:text-lg">
          We move fuel safely from depot to your tank. Bulk diesel, MGO and premix for transporters, builders, farmers and fishing communities. One call schedules the drop.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="tel:0302435917"
            className="inline-flex items-center gap-2 bg-[#0a1e33] px-7 py-4 font-mono text-xs font-medium tracking-[0.14em] text-white hover:bg-[#132e4f]"
          >
            <Phone className="h-4 w-4" /> TALK TO SALES
          </a>
          <Link
            href="/#products"
            className="group inline-flex items-center gap-2 border border-[#0a1e33]/25 px-7 py-4 font-mono text-xs font-medium tracking-[0.14em] text-[#0a1e33] hover:border-[#0a1e33]"
          >
            SEE OUR FUELS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2">
        <div className="relative h-[380px] sm:h-[480px] lg:h-[560px]">
          <Image
            src="/delivery-banner.png"
            alt="Desert Oil tanker, quality delivery"
            fill
            className="object-cover object-[62%_center] lg:object-center"
            priority
          />
        </div>
      </div>

      <Delivery />

      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="flex flex-col gap-4 border-t border-[#0a1e33]/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-bold tracking-tight">Need fuel at the pump instead?</p>
          <Link
            href="/#stations"
            className="group inline-flex items-center gap-2 bg-[#0a1e33] px-7 py-4 font-mono text-xs font-medium tracking-[0.14em] text-white hover:bg-[#132e4f]"
          >
            FIND A STATION
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
