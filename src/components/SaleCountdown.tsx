"use client";

import { useEffect, useState } from "react";

// Sale ends last day of current month at midnight
function getSaleEnd(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(end: Date): TimeLeft {
  const diff = Math.max(0, end.getTime() - Date.now());
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Pad({ n }: { n: number }) {
  return <>{String(n).padStart(2, "0")}</>;
}

export default function SaleCountdown() {
  const [end]      = useState(getSaleEnd);
  const [left, setLeft] = useState<TimeLeft>(() => getTimeLeft(getSaleEnd()));

  useEffect(() => {
    const id = setInterval(() => setLeft(getTimeLeft(end)), 1000);
    return () => clearInterval(id);
  }, [end]);

  const units = [
    { label: "Days",    value: left.days },
    { label: "Hours",   value: left.hours },
    { label: "Minutes", value: left.minutes },
    { label: "Seconds", value: left.seconds },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-center gap-2 sm:gap-3">
          <div className="flex flex-col items-center">
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 min-w-[3rem] sm:min-w-[3.5rem] text-center">
              <span className="text-white font-black text-xl sm:text-2xl tabular-nums leading-none">
                <Pad n={value} />
              </span>
            </div>
            <span className="text-white/50 text-[10px] font-semibold uppercase tracking-wider mt-1">
              {label}
            </span>
          </div>
          {i < 3 && (
            <span className="text-white/40 font-bold text-xl pb-4 select-none">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
