import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Tag, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Sales & Promotions",
  description:
    "Current flooring sales and promotions at Kelowna Flooring Superstore. In-stock deals on carpet, vinyl plank, laminate and more. Call (250) 860-7847.",
};

const sales = [
  {
    tag: "On Sale",
    title: "In-Stock Carpet",
    description:
      "Select Beaulieu and Mohawk carpet styles on sale now. Soft, stain-resistant options for every bedroom and living space. While quantities last.",
    imgSrc: "https://www.kelownaflooringsuperstore.com/media/website_designs/3/olivia-room.webp",
    href: "/flooring/carpet",
    highlight: true,
  },
  {
    tag: "In Stock",
    title: "Vinyl Plank",
    description:
      "Our full range of in-stock waterproof luxury vinyl plank is ready to go — perfect for kitchens, bathrooms, and basements.",
    imgSrc: "https://www.kelownaflooringsuperstore.com/media/website_designs/3/vinyl-stock-112016.webp",
    href: "/flooring/vinyl-plank",
    highlight: false,
  },
  {
    tag: "In Stock",
    title: "Laminate Flooring",
    description:
      "Hardwood looks without the hardwood price. In-stock laminate in a wide range of styles — ready for immediate installation.",
    imgSrc: "https://www.kelownaflooringsuperstore.com/media/website_designs/3/laminatenov2016.webp",
    href: "/flooring/laminate",
    highlight: false,
  },
];

export default function SalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-dark overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(235,76,76,0.2) 0%, rgba(49,50,144,0.4) 50%, transparent 80%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              <Tag size={12} /> Current Deals
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight">
              Sales &amp;<br />
              <span className="text-accent">Promotions</span>
            </h1>
            <p className="text-white/60 text-lg mt-5 max-w-xl mx-auto leading-relaxed">
              Check out our current in-stock specials and sales. Inventory moves
              fast — visit us or call to confirm availability.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Sales grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sales.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.1}>
                <Link
                  href={s.href}
                  className={`group block rounded-2xl overflow-hidden card-hover ${
                    s.highlight
                      ? "bg-accent/5 border-2 border-accent"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div className="relative h-52 bg-gray-100 overflow-hidden">
                    <Image
                      src={s.imgSrc}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <span
                      className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${
                        s.tag === "On Sale"
                          ? "bg-accent text-white"
                          : "bg-primary text-white"
                      }`}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="text-charcoal font-black text-xl">{s.title}</h2>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                      {s.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-primary text-sm font-bold mt-4 group-hover:gap-3 transition-all">
                      Shop Now <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal">
        <AnimateOnScroll className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Don&apos;t See What You&apos;re Looking For?
          </h2>
          <p className="text-white/55 mt-4 leading-relaxed">
            Our in-stock selection changes frequently. Call us or visit the showroom
            to see our full current inventory — or ask about special ordering.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-7">
            <a
              href="tel:2508607847"
              className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all"
            >
              <Phone size={16} /> (250) 860-7847
            </a>
            <Link href="/flooring" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all">
              All Flooring Types
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
