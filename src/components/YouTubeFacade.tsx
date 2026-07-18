"use client";

import { useState } from "react";
import Image from "next/image";

/* Click-to-load YouTube facade. Shows a local poster + play button and only
 * injects the (nocookie) iframe on click — so the page makes zero third-party
 * requests (no YouTube cookies or JS) until the visitor chooses to play. This
 * fixes the third-party-cookie best-practices flag and keeps YouTube's ~1MB of
 * player JS off the initial load. */
export default function YouTubeFacade({
  id,
  poster,
  title,
}: {
  id: string;
  poster: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black block"
    >
      <Image
        src={poster}
        alt={title}
        fill
        loading="lazy"
        className="object-cover opacity-80 group-hover:opacity-70 transition-opacity"
        sizes="(max-width: 1024px) 100vw, 60vw"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center w-20 h-20 rounded-full bg-accent shadow-2xl shadow-black/40 transition-transform group-hover:scale-110">
          <svg viewBox="0 0 24 24" width="30" height="30" fill="white" aria-hidden="true" className="ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
