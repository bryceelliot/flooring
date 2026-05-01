export const dynamic = "force-static";

import type { MetadataRoute } from "next";

/* Explicitly allow every major AI/search crawler we care about.
 * These show up as distinct rule blocks so a future firewall/CDN rule can
 * reference them by name. */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Bytespider",
  "Amazonbot",
  "meta-externalagent",
  "FacebookBot",
  "DuckAssistBot",
  "CCBot",
  "cohere-ai",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  const aiRules = AI_CRAWLERS.map((ua) => ({
    userAgent: ua,
    allow: "/",
  }));

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiRules,
    ],
    sitemap: "https://www.kelownaflooringsuperstore.com/sitemap.xml",
    host: "https://www.kelownaflooringsuperstore.com",
  };
}
