"use client";

import { useState } from "react";
import { Phone, MessageSquare, X } from "lucide-react";

/* Floating call/text widget visible on mobile only. Positioned bottom-left so
 * it never overlaps the Roomvo assistant (bottom-right). */
export default function MobileCallButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden fixed bottom-5 left-5 z-40">
      {open && (
        <div className="flex flex-col gap-2 mb-3">
          <a
            href="tel:2508607847"
            className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-4 py-3 rounded-full text-sm shadow-2xl shadow-black/40 whitespace-nowrap"
          >
            <Phone size={15} /> Call (250) 860-7847
          </a>
          <a
            href="sms:2508607847"
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-4 py-3 rounded-full text-sm shadow-2xl shadow-black/40 whitespace-nowrap"
          >
            <MessageSquare size={15} /> Text Us
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close quick contact" : "Open quick contact"}
        className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-2xl shadow-accent/50 hover:scale-105 transition-all"
      >
        {open ? <X size={22} /> : <Phone size={22} />}
      </button>
    </div>
  );
}
