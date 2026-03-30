import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Flooring Blog",
  description:
    "Flooring tips, inspiration, and guides from the experts at Kelowna Flooring Superstore. Covering hardwood, carpet, vinyl plank, tile and more.",
};

const posts = [
  {
    title: "Vinyl Plank vs Laminate: Which is Right for Your Home?",
    excerpt:
      "Two of the most popular flooring choices in Kelowna — but which one is right for your space? We break down the key differences in durability, waterproofing, and cost.",
    category: "Buying Guide",
    readTime: "5 min read",
    date: "Mar 2026",
    gradient: "from-teal-700 to-cyan-900",
    slug: "vinyl-plank-vs-laminate",
  },
  {
    title: "How to Care for Your Hardwood Floors in the Okanagan",
    excerpt:
      "The Okanagan's dry climate creates unique challenges for hardwood flooring. Learn how to maintain proper humidity levels and keep your floors looking beautiful year-round.",
    category: "Maintenance",
    readTime: "4 min read",
    date: "Feb 2026",
    gradient: "from-amber-800 to-yellow-900",
    slug: "hardwood-care-okanagan",
  },
  {
    title: "The Best Flooring for Kelowna Basements",
    excerpt:
      "Basements require special consideration — moisture, temperature fluctuations, and comfort all factor in. Here's what our experts recommend for Kelowna homes.",
    category: "Room Guide",
    readTime: "6 min read",
    date: "Jan 2026",
    gradient: "from-slate-700 to-gray-900",
    slug: "best-basement-flooring-kelowna",
  },
  {
    title: "Carpet Buying Guide: Pile Height, Fibre & More",
    excerpt:
      "Not all carpet is created equal. From pile height to fibre type to density ratings — here's everything you need to know before choosing carpet for your home.",
    category: "Buying Guide",
    readTime: "7 min read",
    date: "Dec 2025",
    gradient: "from-violet-800 to-purple-900",
    slug: "carpet-buying-guide",
  },
  {
    title: "Natural Stone Tile: Marble, Travertine, or Granite?",
    excerpt:
      "Natural stone adds unmatched elegance to any space, but each type has unique characteristics. We explain the differences and help you choose the right stone for your project.",
    category: "Tile & Stone",
    readTime: "5 min read",
    date: "Nov 2025",
    gradient: "from-stone-700 to-amber-900",
    slug: "natural-stone-tile-guide",
  },
  {
    title: "Top Flooring Trends for Kelowna Homes in 2026",
    excerpt:
      "From wide-plank hardwood to patterned tile and ultra-realistic LVP — discover the flooring trends our designers are seeing in Kelowna homes this year.",
    category: "Trends",
    readTime: "4 min read",
    date: "Oct 2025",
    gradient: "from-rose-800 to-pink-900",
    slug: "flooring-trends-2026",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-dark overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(35,82,124,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Expert Tips & Inspiration
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight">
              Flooring<br />
              <span className="text-accent">Knowledge Hub</span>
            </h1>
            <p className="text-white/60 text-lg mt-5 max-w-xl leading-relaxed">
              Buying guides, care tips, trends, and inspiration from our flooring
              experts — helping Kelowna homeowners make confident decisions.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 0.07}>
                <article className="group bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 flex flex-col h-full">
                  {/* Category banner */}
                  <div
                    className={`h-40 bg-gradient-to-br ${post.gradient} flex items-end p-5`}
                  >
                    <span className="bg-white/15 border border-white/25 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-charcoal font-black text-lg leading-tight mb-3 flex-1">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 text-primary text-sm font-bold group-hover:gap-3 transition-all mt-auto">
                      Read Article <ArrowRight size={14} />
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <AnimateOnScroll className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black text-white">
            Ready to Find Your Perfect Floor?
          </h2>
          <p className="text-white/65 mt-3">
            Visit our Kelowna showroom or get a free in-home estimate.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-7">
            <Link href="/estimates" className="bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all">
              Free Estimate
            </Link>
            <Link href="/flooring" className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all">
              Shop Flooring
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
