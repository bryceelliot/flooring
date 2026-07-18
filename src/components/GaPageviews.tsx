"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/* Sends a GA4 page_view on every client-side route change. The site is a
 * static export / App Router SPA, so without this GA only ever records the
 * first page a visitor lands on. The initial gtag config sets
 * send_page_view:false, so this is the single source of page_view events. */
export default function GaPageviews({ gaId }: { gaId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    const w = window as unknown as {
      gtag?: (...a: unknown[]) => void;
      dataLayer?: unknown[];
    };
    const payload = {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
      send_to: gaId,
    };
    if (typeof w.gtag === "function") {
      w.gtag("event", "page_view", payload);
    } else {
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push(["event", "page_view", payload]);
    }
  }, [pathname, gaId]);

  return null;
}
