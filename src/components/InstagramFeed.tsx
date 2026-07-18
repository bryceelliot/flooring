import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getInstagramPosts, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/instagram-feed";

/* ─── Instagram section ─────────────────────────────────────────────────────
 *
 * Self-built, zero third-party widgets — no Behold/SnapWidget/LightWidget
 * script, no watermark, no external branding.
 *
 * LIVE: if an INSTAGRAM_ACCESS_TOKEN is configured, the build pulls the latest
 * posts (see scripts/fetch-instagram.mjs) and each tile links to the real post.
 * FALLBACK: otherwise it shows a curated grid of our own showroom + install
 * photos, tiles linking to the profile. See src/lib/instagram-feed.ts.
 * ─────────────────────────────────────────────────────────────────────── */

function InstagramGlyph({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" width={size} height={size} className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function InstagramFeed() {
  const { posts } = getInstagramPosts();

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Profile header */}
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-7 mb-10 sm:mb-12">
          {/* Avatar with Instagram gradient ring */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full p-[3px] bg-gradient-to-tr from-[#FEDA75] via-[#D62976] to-[#4F5BD5] shadow-lg transition-transform hover:scale-105"
            aria-label={`Open @${INSTAGRAM_HANDLE} on Instagram`}
          >
            <span className="block rounded-full p-[3px] bg-white">
              <Image
                src="/icon-512.png"
                alt="Kelowna Flooring Superstore"
                width={88}
                height={88}
                className="w-20 h-20 sm:w-[88px] sm:h-[88px] rounded-full object-cover"
              />
            </span>
          </a>

          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl font-black text-charcoal hover:text-accent transition-colors"
              >
                @{INSTAGRAM_HANDLE}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 self-center sm:self-auto bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white text-sm font-bold px-5 py-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-pink-400/30 transition-all"
              >
                <InstagramGlyph size={15} />
                Follow
              </a>
            </div>
            <p className="text-charcoal font-semibold mt-2">Kelowna Flooring Superstore</p>
            <p className="text-gray-600 text-sm sm:text-base mt-1 max-w-md mx-auto sm:mx-0 leading-relaxed">
              Flooring tips, before &amp; afters, and real installs from around the Okanagan. Come see it all in our Kelowna showroom.
            </p>
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {posts.map((p, i) => (
            <a
              key={p.src}
              href={p.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl bg-light"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={i < 4}
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300" />
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <InstagramGlyph size={30} />
              </span>
            </a>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-charcoal hover:bg-primary text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5"
          >
            <InstagramGlyph size={18} />
            See more on Instagram
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
