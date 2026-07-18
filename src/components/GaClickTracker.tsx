"use client";

import { useEffect } from "react";

/* One site-wide click listener that fires GA4 conversion events for the actions
 * that matter, without having to wire onClick into dozens of links:
 *   - tel:  links            -> phone_click
 *   - sms:  links            -> text_click
 *   - iFinance apply links   -> financing_apply_click   (outbound loan partner)
 *   - /estimates links       -> estimate_cta_click
 * Uses capture so the event is queued before the browser follows the link. */
export default function GaClickTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const w = window as unknown as { gtag?: (...a: unknown[]) => void };
      if (typeof w.gtag !== "function") return;

      const location = window.location.pathname;
      const label = (a.textContent || "").trim().slice(0, 60);

      if (href.startsWith("tel:")) {
        w.gtag("event", "phone_click", { location, value: 1 });
      } else if (href.startsWith("sms:")) {
        w.gtag("event", "text_click", { location });
      } else if (href.includes("ifinancecanada.com")) {
        w.gtag("event", "financing_apply_click", { location, label, value: 1 });
      } else if (href.includes("/estimates")) {
        w.gtag("event", "estimate_cta_click", { location, label });
      }
    };

    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}
