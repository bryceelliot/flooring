import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { posts as allPosts } from "@/lib/blog-data";

/* Two current, seasonally-relevant posts featured on the homepage.
   Edit these slugs to swap which posts appear. */
const FEATURED_SLUGS = ["hardwood-care-okanagan", "flooring-trends-2026"];

export default function HomeBlogStrip() {
  const featured = FEATURED_SLUGS
    .map((slug) => allPosts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (featured.length === 0) return null;

  return (
    <section className="py-20 sm:py-24 bg-light border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal leading-tight">
              From the KFSS Blog
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3 max-w-xl">
              Okanagan flooring tips, seasonal care, and what&apos;s trending in Kelowna homes.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors shrink-0"
          >
            View all articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: post.focal }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute top-4 left-4 bg-white/95 text-primary text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-full shadow-sm">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-charcoal leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-accent font-bold text-sm mt-4">
                  Read the guide <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
