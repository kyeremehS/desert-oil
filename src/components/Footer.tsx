import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071423] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <span className="relative block h-12 w-48 overflow-hidden rounded-md bg-white px-2">
            <Image src="/logo-lockup.jpg" alt="Desert Oil" fill className="object-contain" />
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Independent Ghanaian oil marketing company. Super, Diesel, LPG, Kerosene, Premix and MGO.
          </p>
          <p className="mt-4 font-mono text-[11px] tracking-[0.18em] text-white/35">MEMBER, CHAMBER OF OIL MARKETING COMPANIES</p>
        </div>
        <div className="text-sm">
          <p className="font-mono text-[11px] tracking-[0.2em] text-white/45">FUELS</p>
          <ul className="mt-4 space-y-2.5 text-white/60">
            <li>Super and Diesel</li>
            <li>LPG and Kerosene</li>
            <li>Premix and MGO on request</li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-mono text-[11px] tracking-[0.2em] text-white/45">HEAD OFFICE</p>
          <ul className="mt-4 space-y-2.5 text-white/60">
            <li>No. 18 Lindsay Square, near DVLA Achimota, Accra</li>
            <li>030 243 5917 and 024 491 5899</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-4 py-5 font-mono text-[11px] tracking-[0.14em] text-white/35 sm:flex-row sm:px-6">
          <span>© {new Date().getFullYear()} DESERT OIL GHANA LIMITED</span>
          <span>QUALITY FUEL. QUALITY SERVICE.</span>
        </div>
      </div>
    </footer>
  );
}
