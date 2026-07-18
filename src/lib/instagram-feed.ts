/**
 * Instagram feed data source.
 *
 * LIVE MODE: `scripts/fetch-instagram.mjs` runs at build time (npm prebuild).
 * If an INSTAGRAM_ACCESS_TOKEN is set, it pulls the latest posts from the
 * Instagram Graph API, downloads each image into /public/assets/instagram/
 * (Instagram's own image URLs are signed and expire within days, so we must
 * self-host the copies), and writes them into `instagram-cache.json`.
 *
 * FALLBACK MODE: when the cache is empty (no token configured, or the fetch
 * failed), we show the curated grid below — our own showroom + install photos.
 * Either way the section always renders and looks intentional.
 */
import cache from "./instagram-cache.json";

export interface IgPost {
  src: string; // local image path (or remote URL for curated)
  alt: string;
  permalink: string; // where the tile links
}

export const INSTAGRAM_HANDLE = "kelownaflooringss";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

/* Curated fallback — our own photos. Update anytime; tiles link to the profile. */
const CURATED: IgPost[] = [
  { src: "/assets/images/projects/the-peaks/peaks-01.webp", alt: "Wide-plank oak vinyl in an open Kelowna kitchen and living room", permalink: INSTAGRAM_URL },
  { src: "/assets/images/showroom-08.webp", alt: "Laminate sample display wall in our Kelowna showroom", permalink: INSTAGRAM_URL },
  { src: "/assets/images/projects/the-peaks/peaks-03.webp", alt: "Light oak flooring in a bright dining room", permalink: INSTAGRAM_URL },
  { src: "/assets/images/projects/the-peaks/peaks-06.webp", alt: "Soft neutral carpet in a Kelowna bedroom", permalink: INSTAGRAM_URL },
  { src: "/assets/images/projects/the-peaks/peaks-02.webp", alt: "Warm oak floors flowing through a staged living room", permalink: INSTAGRAM_URL },
  { src: "/assets/images/showroom-13.webp", alt: "Mohawk and Phenix carpet sample boards in our showroom", permalink: INSTAGRAM_URL },
  { src: "/assets/images/projects/the-peaks/peaks-05.webp", alt: "Engineered oak in a modern dining space", permalink: INSTAGRAM_URL },
  { src: "/assets/images/projects/the-peaks/peaks-07.webp", alt: "Plush carpet in a cozy guest bedroom", permalink: INSTAGRAM_URL },
];

export function getInstagramPosts(): { posts: IgPost[]; live: boolean } {
  const cached = cache as IgPost[];
  if (Array.isArray(cached) && cached.length > 0) {
    return { posts: cached, live: true };
  }
  return { posts: CURATED, live: false };
}
