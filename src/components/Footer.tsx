import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a1e33] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <span className="relative block h-12 w-48">
            <Image src="/logo.png" alt="Desert Oil" fill className="object-contain object-left mix-blend-screen" />
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Independent Ghanaian oil marketing company. Super, Diesel, LPG, Kerosene, Premix and MGO.
          </p>
          <p className="mt-4 text-xs text-white/40">Member of the Chamber of Oil Marketing Companies (COMAC)</p>
        </div>
        <div className="text-sm">
          <p className="font-bold tracking-wide text-white/80">FUELS</p>
          <ul className="mt-4 space-y-2.5 text-white/60">
            <li>Super and Diesel</li>
            <li>LPG and Kerosene</li>
            <li>Premix and MGO on request</li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-bold tracking-wide text-white/80">HEAD OFFICE</p>
          <ul className="mt-4 space-y-2.5 text-white/60">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /> No. 18 Lindsay Square, near DVLA Achimota, Accra</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /> 030 243 5917 and 024 491 5899</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Desert Oil Ghana Limited. All rights reserved.</span>
          <span>Quality fuel. Quality service.</span>
        </div>
      </div>
    </footer>
  );
}
