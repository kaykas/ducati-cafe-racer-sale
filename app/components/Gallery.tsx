"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export interface GalleryPhoto {
  src: string;
  title: string;
  caption: string;
  specNote: string;
  aspect: string;
}

export const BIKE_PHOTOS: GalleryPhoto[] = [
  {
    src: "/images/ducati-hero.jpeg",
    title: "Right-SideThree-Quarter Profile",
    caption:
      "Black Coffee tank with red pinstripe accent, #54 Bruno Spaggiari number plate, titanium-wrapped 2-into-1 headers, and dual black Termignoni slip-on silencers.",
    specNote: "803cc Desmodue L-Twin · Termignoni Dual Slip-On",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/ducati-full.jpeg",
    title: "Full Right Profile & Stance",
    caption:
      "Low clip-on handlebar geometry, 17-inch 10-spoke cast gold wheels wrapped in Pirelli Diablo Rosso II rubber, and custom diamond-stitched tan leather café saddle.",
    specNote: "17-in Gold 10-Spoke Cast Alloy · 414 lbs Wet Weight",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/ducati-garage.jpeg",
    title: "Indoor Garage Storage & Left Profile",
    caption:
      "Always stored indoors out of UV and weather exposure. Shown with the included strap-mounted tank bag, steel trellis frame, and Kayaba rear monoshock.",
    specNote: "Always Garaged · Tank Bag Included",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/ducati-tail.jpeg",
    title: "Custom Tail Tidy, LED Brake Light & Rear Tread",
    caption:
      "Clean rear fender eliminator kit with flush crescent red LED taillight and tucked California plate (24S7127). Rear 180/55 ZR17 Pirelli Diablo Rosso II shows deep sub-1,000-mile tread.",
    specNote: "Fender Eliminator · 180/55 ZR17 Rear Tire",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/ducati-front.jpeg",
    title: "Front Fork, Brembo M4.32 Caliper & Clip-Ons",
    caption:
      "41mm inverted Kayaba fork, radial-mounted 4-piston Brembo M4.32 monoblock caliper gripping a 330mm rotor with Bosch ABS, headlight fairing, and CNC bar-end mirrors.",
    specNote: "Brembo M4.32 Radial Monoblock · 330mm Front Disc",
    aspect: "aspect-[3/4]",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft" && selectedImage > 0) setSelectedImage(selectedImage - 1);
      if (e.key === "ArrowRight" && selectedImage < BIKE_PHOTOS.length - 1) setSelectedImage(selectedImage + 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BIKE_PHOTOS.map((photo, index) => (
          <figure
            key={photo.src}
            onClick={() => setSelectedImage(index)}
            className={`group cursor-pointer border border-[#E2DDD5] bg-white flex flex-col justify-between transition-colors hover:border-[#141311] ${
              index === 2 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div>
              <div className="relative w-full aspect-[4/5] bg-[#141311] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain bg-[#141311] group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#FAF8F5]/95 px-2.5 py-1 text-[11px] font-mono-num uppercase tracking-wider text-[#141311] border border-[#E2DDD5]">
                  Plate 0{index + 1} / 0{BIKE_PHOTOS.length}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#141311]/85 text-[#FAF8F5] px-2.5 py-1 text-[11px] font-mono-num uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Enlarge +
                </div>
              </div>
              <figcaption className="p-5">
                <div className="text-[11px] font-mono-num uppercase tracking-wider text-[#9A7B3E] mb-1.5">
                  {photo.specNote}
                </div>
                <h3 className="font-serif-editorial text-xl font-semibold text-[#141311] mb-2">
                  {photo.title}
                </h3>
                <p className="text-sm text-[#57534E] leading-relaxed">
                  {photo.caption}
                </p>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#141311]/95 flex flex-col items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[75vh] bg-black border border-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={BIKE_PHOTOS[selectedImage].src}
              alt={BIKE_PHOTOS[selectedImage].title}
              fill
              className="object-contain"
            />
            <button
              type="button"
              aria-label="Close lightbox"
              className="absolute top-4 right-4 bg-[#FAF8F5] text-[#141311] px-3 py-1.5 text-xs font-mono-num uppercase tracking-widest hover:bg-[#B81D13] hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              Close [Esc]
            </button>
            {selectedImage > 0 && (
              <button
                type="button"
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#FAF8F5]/90 text-[#141311] px-3.5 py-2 text-lg font-mono-num hover:bg-white"
                onClick={() => setSelectedImage(selectedImage - 1)}
              >
                ‹
              </button>
            )}
            {selectedImage < BIKE_PHOTOS.length - 1 && (
              <button
                type="button"
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#FAF8F5]/90 text-[#141311] px-3.5 py-2 text-lg font-mono-num hover:bg-white"
                onClick={() => setSelectedImage(selectedImage + 1)}
              >
                ›
              </button>
            )}
          </div>
          <div
            className="max-w-3xl text-center mt-4 text-[#FAF8F5]"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs font-mono-num uppercase tracking-widest text-[#9A7B3E] mb-1">
              Plate 0{selectedImage + 1} of 0{BIKE_PHOTOS.length} · {BIKE_PHOTOS[selectedImage].specNote}
            </p>
            <p className="font-serif-editorial text-xl font-medium">
              {BIKE_PHOTOS[selectedImage].title}
            </p>
            <p className="text-sm text-neutral-300 mt-1">
              {BIKE_PHOTOS[selectedImage].caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
