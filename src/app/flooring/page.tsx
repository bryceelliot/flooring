import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { flooringTypes } from "@/lib/flooring-data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Flooring Types",
  description:
    "Browse all flooring types at Kelowna Flooring Superstore — laminate, hardwood, carpet, vinyl plank, tile, linoleum, commercial, and area rugs. In-stock & expert installation.",
};

export default function FlooringPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-dark overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(49,50,144,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Our Collection
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
              All Flooring Types
            </h1>
            <p className="text-white/60 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
              From cozy carpet to stunning hardwood — our Kelowna
              showroom has everything you need, in-stock and ready to install.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {flooringTypes.map((f, i) => (
              <AnimateOnScroll key={f.slug} delay={i * 0.07}>
                <Link
                  href={`/flooring/${f.slug}`}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${f.gradient} p-7 min-h-[220px] flex flex-col justify-between card-hover`}
                >
                  <div>
                    <h2 className="text-white font-black text-2xl leading-tight">
                      {f.name}
                    </h2>
                    <p className="text-white/55 text-sm mt-2 leading-relaxed line-clamp-2">
                      {f.tagline}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/60 text-sm font-semibold mt-6 group-hover:text-white group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={15} />
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors rounded-2xl" />
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why in-stock matters */}
      <section className="py-16 bg-primary">
        <AnimateOnScroll className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            In Stock Means Ready <span className="text-accent">Today</span>
          </h2>
          <p className="text-white/65 mt-4 leading-relaxed">
            Unlike many flooring stores that require weeks of lead time, our showroom
            carries a massive in-stock selection. See it, love it, take it home —
            or we&apos;ll install it as soon as your schedule allows.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-7">
            <Link href="/estimates" className="bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all">
              Get Free Estimate
            </Link>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all">
              Contact Us
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
