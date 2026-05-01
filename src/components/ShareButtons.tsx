"use client";

import { useState } from "react";
import { Mail, Link2, Check } from "lucide-react";

function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

interface Props {
  title: string;
  path: string; // path relative to domain, e.g. "/guides/foo"
}

export default function ShareButtons({ title, path }: Props) {
  const [copied, setCopied] = useState(false);
  const url = `https://www.kelownaflooringsuperstore.com${path}`;
  const enc = encodeURIComponent;

  const share = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
    x: `https://x.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
    email: `mailto:?subject=${enc(title)}&body=${enc("Thought you'd find this useful: " + url)}`,
  };

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* ignore */ }
  }

  const btn =
    "w-9 h-9 rounded-lg bg-gray-100 hover:bg-primary hover:text-white text-charcoal flex items-center justify-center transition-colors";

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mr-2">Share</span>
      <a href={share.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className={btn}>
        <FacebookIcon />
      </a>
      <a href={share.x} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className={btn}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a href={share.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className={btn}>
        <LinkedInIcon />
      </a>
      <a href={share.email} aria-label="Share via email" className={btn}>
        <Mail size={15} />
      </a>
      <button onClick={copyLink} aria-label="Copy link" className={btn}>
        {copied ? <Check size={15} className="text-green-600" /> : <Link2 size={15} />}
      </button>
    </div>
  );
}
