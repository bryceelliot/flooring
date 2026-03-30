"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const brands = [
  "Mohawk",
  "Beaulieu",
  "Armstrong",
  "Phenix",
  "Centura Tile",
  "Pontec",
  "4 Corners",
  "HYBC",
  "Shaw",
  "Kraus",
  "LifeProof",
  "Pergo",
];

// Duplicate for seamless loop
const doubled = [...brands, ...brands];

export default function BrandPartners() {
  const ref = useRef(null);

  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <p className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">
          Trusted Brands We Carry
        </p>
      </div>
      <div ref={ref} className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-10 items-center whitespace-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { duration: 22, repeat: Infinity, ease: "linear" },
          }}
        >
          {doubled.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex items-center justify-center px-8 py-3 rounded-xl border border-gray-100 bg-gray-50 min-w-[120px]"
            >
              <span className="text-gray-500 font-bold text-sm tracking-wide">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
