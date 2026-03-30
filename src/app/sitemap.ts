export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { flooringTypes } from "@/lib/flooring-data";

const baseUrl = "https://www.kelownaflooringsuperstore.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const flooringPages = flooringTypes.map((f) => ({
    url: `${baseUrl}/flooring/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/flooring`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...flooringPages,
    { url: `${baseUrl}/estimates`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/sales`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
  ];
}
