/* Named project portfolio. Each entry becomes a `/projects/{slug}` page AND
 * a section on /projects + a slide on the home page FeaturedProjects carousel.
 */

export interface ProjectPhoto { src: string; alt: string }

export interface ProjectTestimonial {
  quote: string;
  author: string;
  location?: string;
  date?: string;
  source?: string;
}

export interface Project {
  slug: string;
  name: string;
  neighborhood: string;        // e.g. "Lower Mission, Kelowna"
  city: string;
  flooringTypes: string[];
  squareFootage: string;
  duration: string;
  homeType: string;
  summary: string;
  description: string;
  photos: ProjectPhoto[];
  metaDescription: string;
  heroImage: string;
  completed: string;
  testimonial?: ProjectTestimonial;
}

function seq(project: string, base: string, start: number, end: number, altBase: string): ProjectPhoto[] {
  const out: ProjectPhoto[] = [];
  for (let i = start; i <= end; i++) {
    const num = String(i).padStart(2, "0");
    out.push({
      src: `/assets/images/projects/${project}/${base}-${num}.webp`,
      alt: `${altBase} — photo ${i}`,
    });
  }
  return out;
}

export const projects: Project[] = [
  {
    slug: "glenpark-village-meadows",
    name: "Glenpark Village Meadows",
    neighborhood: "313–315 Whitman Road, Kelowna",
    city: "Kelowna",
    flooringTypes: ["Luxury Vinyl Plank", "Commercial Carpet Tile"],
    squareFootage: "Multi-unit common areas",
    duration: "Multi-phase commercial install",
    homeType: "Glenpark Village Meadows — Whitman Road strata community",
    summary:
      "Commercial refresh at Glenpark Village Meadows on Whitman Road. New luxury vinyl plank and patterned carpet tile through hallways and common areas, installed by the KFSS commercial crew.",
    description:
      "Glenpark Village Meadows is a multi-unit residential community on Whitman Road in Kelowna. Our commercial crew installed luxury vinyl plank and patterned carpet tile through the common hallways and landings — tenant-friendly install windows, minimal downtime, same-crew from measurement through completion. Completed April 2026.",
    photos: seq("glenpark-village-meadows", "glenpark", 1, 14, "Glenpark Village Meadows Kelowna install"),
    heroImage: "/assets/images/projects/glenpark-village-meadows/glenpark-02.webp",
    metaDescription:
      "Glenpark Village Meadows flooring install in Kelowna — luxury vinyl plank and carpet tile through common areas on Whitman Road. Commercial install by Kelowna Flooring Superstore.",
    completed: "2026-04-23",
    testimonial: {
      quote:
        "We had an excellent experience with Kelowna Flooring Superstore. Their team installed carpet tiles throughout our complex: the hallways and common areas, as well as replacing the carpet on the stairs which included new nosing. The carpet in the gym was replaced with glue-down vinyl plank flooring. The quality of their work was outstanding, and everything was completed professionally and efficiently. When we purchased extra boxes of carpet tile to have on hand, the owner delivered them personally. I highly recommend Kelowna Flooring Superstore for anyone looking for reliable, high-quality flooring services.",
      author: "Bonnie B.",
      location: "Kelowna, BC",
      date: "April 30, 2026",
      source: "Yelp",
    },
  },
  {
    slug: "springfield-manor",
    name: "Springfield Manor",
    neighborhood: "2110 Hoy Street, Kelowna",
    city: "Kelowna",
    flooringTypes: ["Luxury Vinyl Plank", "Commercial Carpet"],
    squareFootage: "Full-building refresh",
    duration: "Multi-phase commercial install",
    homeType: "Springfield Manor — Hoy Street residential building",
    summary:
      "Full building flooring refresh at Springfield Manor on Hoy Street. New luxury vinyl plank and commercial carpet replacing worn broadloom in hallways and units.",
    description:
      "Springfield Manor is a residential building at 2110 Hoy Street in Kelowna. We refreshed the full building: hallways swapped from worn broadloom to durable commercial carpet and wide-plank LVP, tenant units finished with wood-look luxury vinyl. Completed April 2026.",
    photos: seq("springfield-manor", "springfield", 1, 12, "Springfield Manor Kelowna install"),
    heroImage: "/assets/images/projects/springfield-manor/springfield-02.webp",
    metaDescription:
      "Springfield Manor flooring refresh — full building install on Hoy Street, Kelowna. Luxury vinyl plank and commercial carpet by Kelowna Flooring Superstore.",
    completed: "2026-04-23",
  },
  {
    slug: "the-peaks",
    name: "The Peaks",
    neighborhood: "Kelowna, BC",
    city: "Kelowna",
    flooringTypes: ["Luxury Vinyl Plank", "Plush Carpet", "Porcelain Tile"],
    squareFootage: "Full-home install",
    duration: "5 days on site",
    homeType: "Custom family home, designer-finished",
    summary:
      "Full-home flooring install featuring wide-plank luxury vinyl plank through the main living areas and premium soft carpet in the bedrooms.",
    description:
      "The Peaks project is one of our showcase Kelowna installs. Wide-plank luxury vinyl plank across the main floor, plush nylon carpet in the bedrooms, porcelain tile in the wet areas. Designer-finished throughout with custom transitions, stair nosings, and matched trim.",
    photos: seq("the-peaks", "peaks", 1, 11, "The Peaks Kelowna"),
    heroImage: "/assets/images/projects/the-peaks/peaks-01.webp",
    metaDescription:
      "The Peaks — full-home Kelowna flooring install with luxury vinyl plank and plush carpet. Designer-finished by Kelowna Flooring Superstore.",
    completed: "2025-09-01",
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
