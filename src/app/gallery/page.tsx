"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

const photos = [
  "photo_2026-10-04_20-45-45.jpg",
  "photo_2026-10-04_20-46-11.jpg",
  "photo_2026-10-04_20-46-25.jpg",
  "photo_2026-10-04_20-46-27.jpg",
  "photo_2026-10-04_20-46-29.jpg",
  "photo_2026-10-04_20-46-31.jpg",
  "photo_2026-10-04_20-46-32.jpg",
  "photo_2026-10-04_20-46-34.jpg",
  "photo_2026-10-04_20-46-36.jpg",
  "photo_2026-10-04_20-46-38.jpg",
  "photo_2026-10-04_20-46-40.jpg",
  "photo_2026-10-04_20-46-44.jpg",
  "photo_2026-10-04_20-46-46.jpg",
  "photo_2026-10-04_20-46-49.jpg",
  "photo_2026-10-04_20-46-50.jpg",
  "photo_2026-10-04_20-46-52.jpg",
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  return (
    <main className="bg-[#faf7f2] text-[#0a1e33]">
      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20">
        <p className="font-mono text-xs font-medium tracking-[0.24em] text-[#0a1e33]/60">
          DESERT GALLERY
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] sm:text-7xl">
          Our people, <span className="text-[#e1251b]">our game.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-[#0a1e33]/70 sm:text-lg">
          Desert Oil at COMAC Petfun 2026. Trophies lifted, boots polished, crew out in full colours. Click any photo to view it large.
        </p>
        <p className="mt-6 border-t border-[#0a1e33]/15 pt-6 font-mono text-xs tracking-[0.24em] text-[#0a1e33]/50">
          {String(photos.length).padStart(2, "0")} PHOTOS
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {photos.map((p, i) => (
            <button
              key={p}
              onClick={() => setOpen(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-[#0a1e33]/15 bg-white text-left"
            >
              <Image
                src={`/gallery/${p}`}
                alt={`Desert Oil gallery photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-2 left-2 bg-black/55 px-2 py-1 font-mono text-[10px] tracking-[0.18em] text-white backdrop-blur">
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[#0a1e33]/95 p-4 backdrop-blur sm:p-8">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between py-2">
            <p className="font-mono text-xs tracking-[0.2em] text-white/70">
              {String(open + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
            </p>
            <button onClick={() => setOpen(null)} aria-label="Close" className="p-2 text-white hover:text-white/70">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="relative mx-auto w-full max-w-6xl flex-1">
            <Image
              src={`/gallery/${photos[open]}`}
              alt={`Desert Oil gallery photo ${open + 1}`}
              fill
              className="object-contain"
            />
          </div>
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between py-4">
            <button
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="inline-flex items-center gap-2 border border-white/25 px-5 py-3 font-mono text-xs tracking-[0.14em] text-white hover:border-white"
            >
              <ArrowLeft className="h-4 w-4" /> PREV
            </button>
            <button
              onClick={() => step(1)}
              aria-label="Next photo"
              className="inline-flex items-center gap-2 border border-white/25 px-5 py-3 font-mono text-xs tracking-[0.14em] text-white hover:border-white"
            >
              NEXT <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
