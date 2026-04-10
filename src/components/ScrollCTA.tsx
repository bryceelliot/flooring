"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ScrollCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40 hidden sm:block">
      <Link
        href="/estimates"
        className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-5 py-3.5 rounded-xl shadow-2xl shadow-accent/40 text-sm transition-all hover:-translate-y-0.5 hover:shadow-accent/50"
      >
        Free Estimate <ArrowRight size={15} />
      </Link>
    </div>
  );
}
