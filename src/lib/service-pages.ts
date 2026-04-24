/* Adjacent service landing pages — services we offer alongside flooring sales.
 * Each one ranks for a specific high-intent local query.
 */

export interface ServicePage {
  slug: string;
  service: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string;
  whatIncluded: string[];
  pricing: string;
  timeline: string;
  whenYouNeed: string[];
  faqs: { q: string; a: string }[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "flooring-removal-kelowna",
    service: "Flooring Removal Kelowna",
    metaTitle: "Flooring Removal Kelowna — Cost + Process",
    metaDescription:
      "Old flooring removal in Kelowna — carpet, tile, hardwood, laminate. Fast disposal, subfloor cleanup, $1–$2.50/sqft. Free estimates. (250) 860-7847.",
    heroImage: "/assets/images/projects/commercial-refresh/basement-before.webp",
    intro:
      "Old flooring removal is the unsung half of every flooring renovation. We pull up your existing carpet, tile, hardwood, or laminate, dispose of it properly, and prep the subfloor — all included as a transparent line item on your quote.",
    whatIncluded: [
      "Removal labour for any flooring type",
      "Hauling and dump-fee disposal",
      "Underpad removal and disposal",
      "Light substrate cleanup (sweeping, debris)",
      "Photo documentation of subfloor condition",
      "Tackless strip and staple removal",
    ],
    pricing:
      "Floating laminate / LVP: $1.00–$1.50/sqft · Carpet + underpad: $1.00–$1.75/sqft · Glued vinyl sheet: $1.75–$2.50/sqft · Nailed solid hardwood: $2.00–$2.50/sqft · Tile: $2.00–$3.00/sqft.",
    timeline:
      "Floating floors pull up in minutes. A typical 1,500 sqft Kelowna home takes a half-day for carpet, full day for nailed hardwood or tile.",
    whenYouNeed: [
      "Replacing flooring as part of a renovation",
      "Selling your home and want to upgrade buyer-facing rooms",
      "Water or pet damage made existing flooring unsalvageable",
      "Old vinyl tile from before 1985 (ask about asbestos testing)",
    ],
    faqs: [
      { q: "Can I remove old flooring myself to save money?", a: "Yes — most homeowners can remove carpet and floating laminate themselves with basic tools. Tile and nailed hardwood are not DIY-friendly. If you remove the old floor, ask for the install-only quote." },
      { q: "Is asbestos a concern in old Kelowna flooring?", a: "Vinyl flooring installed before 1985 may contain asbestos. We can recommend local asbestos-testing labs and abatement contractors if needed." },
      { q: "Do you handle removal even if I'm not buying flooring from you?", a: "We focus on full-service flooring projects (removal + new install). Removal-only requests are case-by-case — call us to discuss." },
    ],
  },
  {
    slug: "subfloor-repair-kelowna",
    service: "Subfloor Repair Kelowna",
    metaTitle: "Subfloor Repair Kelowna — Leveling, Moisture Mitigation",
    metaDescription:
      "Kelowna subfloor repair — leveling, moisture mitigation, soft-spot replacement, vapour barriers. Done as part of your flooring install. (250) 860-7847.",
    heroImage: "/assets/images/showroom-05.webp",
    intro:
      "A new floor is only as good as the surface beneath it. Our crews assess every subfloor during your free estimate and handle whatever prep is needed: self-leveling compound, soft-spot replacement, moisture barriers, or full plywood overlay.",
    whatIncluded: [
      "Subfloor moisture testing (concrete + wood)",
      "Self-leveling compound for uneven concrete",
      "Soft-spot or rotted plywood replacement",
      "Vapour barrier installation",
      "Floor flatness verification with a 10-ft straightedge",
      "Acoustic underlayment for condos and second floors",
    ],
    pricing:
      "Light prep included in install · Self-leveling: $2–$5/sqft over baseline · Plywood overlay (1/4\" or 1/2\"): $3–$6/sqft · Vapour barrier on concrete: $0.50–$1.50/sqft.",
    timeline:
      "Light prep adds 0–2 hours. Self-leveling adds a half day plus 24-hour cure before flooring install. Plywood overlay adds a full day.",
    whenYouNeed: [
      "Concrete basement floor isn't flat",
      "Old hardwood has dips, cups, or squeaks",
      "Replacing carpet on a second floor — floor is no longer flat under the carpet",
      "Switching from carpet to a hard surface and want it to look right",
    ],
    faqs: [
      { q: "Why does subfloor flatness matter?", a: "Hard flooring (LVP, hardwood, laminate, tile) can fail when installed over uneven subfloors — gaps, cracking, lifting, broken click-locks. Manufacturer warranties require a flat, dry subfloor." },
      { q: "How flat does a subfloor need to be?", a: "Most flooring manufacturers spec 3/16\" variation over a 10-foot span, or 1/8\" over 6 feet. We measure during the estimate." },
      { q: "Can subfloor repair be done as part of my flooring install?", a: "Yes — it's the most common way to do it. Subfloor prep happens day 1 of the install, then flooring goes in day 2." },
    ],
  },
  {
    slug: "baseboards-and-trim-kelowna",
    service: "Baseboards and Trim Kelowna",
    metaTitle: "Baseboards and Trim Installation Kelowna",
    metaDescription:
      "Kelowna baseboards, quarter-round, and trim installation — done as part of your flooring project. MDF, primed, paint-ready or pre-finished. (250) 860-7847.",
    heroImage: "/assets/images/showroom-09.webp",
    intro:
      "Baseboards and trim are the finishing touch that makes a flooring install look intentional. We supply and install MDF or pre-finished baseboards, quarter-round, T-moldings, reducers, and stair nosings — coordinated with the flooring colour and house style.",
    whatIncluded: [
      "MDF baseboard supply + install (3 1/4\" – 7 1/4\" common)",
      "Quarter-round shoe molding",
      "T-molding for room transitions",
      "Reducers between flooring of different heights",
      "Stair nosings + treads",
      "Caulking + painting prep (paint by others)",
    ],
    pricing:
      "Baseboards: $4–$8 per linear foot installed · Quarter-round: $2–$4/lin ft · T-molding / reducers: $12–$20 each · Stair nosings: $40–$80 each.",
    timeline:
      "Baseboards typically installed final day of the flooring project. A 1,500 sqft Kelowna home takes 4–6 hours for baseboard install.",
    whenYouNeed: [
      "Replacing flooring and existing baseboards are damaged or outdated",
      "Switching to a thicker floor product (creates a baseboard gap)",
      "Renovating and want all new trim throughout",
      "Adding stair nosings to match a new hardwood floor",
    ],
    faqs: [
      { q: "Do I need to replace baseboards when changing flooring?", a: "Not always. We can often pull existing baseboards carefully and reinstall them. Old painted baseboards can break during removal — replacing with new MDF and painting after is sometimes cleaner." },
      { q: "Can I paint baseboards before they're installed?", a: "Yes. Pre-priming or pre-painting baseboards saves cutting in around carpet or floor edges. We coordinate with your painter on this." },
      { q: "What size baseboard is in style in Kelowna?", a: "5 1/4\" to 7 1/4\" baseboards are the modern Kelowna standard — taller, cleaner profiles. 3 1/4\" is the budget choice for rentals." },
    ],
  },
  {
    slug: "in-floor-heating-kelowna",
    service: "In-Floor Heating Kelowna",
    metaTitle: "In-Floor Heating Kelowna — Installation Under Tile",
    metaDescription:
      "Kelowna in-floor heating installation under new tile or LVP. Electric mats, hydronic systems, thermostat setup. Free estimates. (250) 860-7847.",
    heroImage: "/assets/images/flooring/tile/tile-01.webp",
    intro:
      "Kelowna winters make in-floor heating a luxury that pays for itself in comfort. We install electric heating mats under new tile, LVP, and engineered hardwood — coordinated with your flooring project so the wires, mat, thermostat, and final floor are all done by the same team.",
    whatIncluded: [
      "Electric heating mat sizing and supply",
      "Thermostat installation (programmable + Wi-Fi options)",
      "Mat layout to maximize heated area",
      "Self-leveling compound over the mat",
      "Wire-protection check before tile/LVP goes down",
      "Coordination with your electrician for the dedicated circuit",
    ],
    pricing:
      "Electric mat + install: $8–$14/sqft on top of flooring price · Hydronic systems: priced separately by HVAC contractor · Thermostat: $150–$400 depending on smart features.",
    timeline:
      "Mat install adds 1 day before flooring goes in. Self-leveling cure adds 24 hours. Mat power-on must wait 14 days after grouting per manufacturer specs.",
    whenYouNeed: [
      "Upgrading a Kelowna bathroom to tile + heat",
      "New basement renovation with tile or LVP",
      "Master ensuite upgrade",
      "Mudroom for cold winter mornings",
      "Open-concept main floor with tile entryway",
    ],
    faqs: [
      { q: "Is in-floor heating worth it in Kelowna?", a: "For bathrooms, kitchens, and entryways — yes, especially with our cold winters. Electric mats run a few cents an hour and the comfort upgrade is dramatic. Hydronic systems are worth it on whole-home renovations." },
      { q: "Can in-floor heating go under luxury vinyl plank?", a: "Yes — most modern LVP is rated for radiant heat up to 85°F (29°C) surface temp. Check the specific product spec; we'll confirm during your estimate." },
      { q: "Do I need a separate electrician?", a: "Electric heating mats need a dedicated 240V circuit run by a licensed electrician. We coordinate scheduling so your electrician is on-site the right day." },
      { q: "How long until I can use the heated floor?", a: "Manufacturer recommends waiting 14 days after grouting before powering on the mat. This lets the thinset and grout cure properly." },
    ],
  },
];

export const getServicePageBySlug = (slug: string) => servicePages.find((p) => p.slug === slug);
