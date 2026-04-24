/* Comparison content pages — citation-friendly content for AI search.
 * Pattern: side-by-side comparison + "what wins for what use case" + Kelowna-specific details.
 */

export interface ComparePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  optionA: string;
  optionB: string;
  tldr: string;
  comparison: { criterion: string; a: string; b: string }[];
  winnerByUse: { useCase: string; winner: string; reason: string }[];
  bottomLine: string;
  faqs: { q: string; a: string }[];
}

export const comparePages: ComparePage[] = [
  {
    slug: "vinyl-plank-vs-laminate-kelowna",
    title: "Vinyl Plank vs Laminate in Kelowna",
    metaTitle: "Vinyl Plank vs Laminate Kelowna — Which Is Better?",
    metaDescription:
      "Vinyl plank vs laminate flooring for Kelowna homes — pricing, durability, water resistance, install. Honest comparison from a 30-year local shop.",
    heroImage: "/assets/images/showroom-06.webp",
    optionA: "Luxury Vinyl Plank (LVP)",
    optionB: "Laminate",
    tldr:
      "Luxury vinyl plank wins for kitchens, bathrooms, basements, and pet households (waterproof, scratch-resistant). Laminate wins for bedrooms, living rooms, and budget-conscious whole-home projects (warmer, more realistic textures, cheaper). Both are excellent Kelowna choices.",
    comparison: [
      { criterion: "Installed Cost (Kelowna 2026)", a: "$5–9/sqft", b: "$4–7/sqft" },
      { criterion: "Waterproof", a: "100% waterproof", b: "Water-resistant; fails at seams" },
      { criterion: "Scratch resistance", a: "Excellent — pet & kid friendly", b: "Very good (AC4/AC5 ratings)" },
      { criterion: "Underfoot feel", a: "Slightly softer + warmer than laminate", b: "Hardest, more wood-like sound" },
      { criterion: "Visual realism", a: "Excellent embossed-in-register textures", b: "Excellent at AC4/AC5; sometimes better depth" },
      { criterion: "Lifespan", a: "20–25 years residential", b: "15–25 years residential" },
      { criterion: "Best Kelowna rooms", a: "Kitchens, baths, basements, mudrooms, lake homes", b: "Bedrooms, living rooms, hallways, offices" },
      { criterion: "Refinishing", a: "Not refinishable — replace planks", b: "Not refinishable — replace planks" },
      { criterion: "Resale impact", a: "Modern buyers love LVP — strong appeal", b: "Neutral; premium AC5 reads well" },
    ],
    winnerByUse: [
      { useCase: "Kelowna basement", winner: "LVP", reason: "100% waterproof handles concrete moisture and temperature swings." },
      { useCase: "Kitchen with kids and dogs", winner: "LVP", reason: "Scratch + water resistance in a single product." },
      { useCase: "Master bedroom on a budget", winner: "Laminate", reason: "Warmer, cheaper, and water resistance isn't critical." },
      { useCase: "Whole-home rental property", winner: "Laminate", reason: "Lower upfront cost; AC5 holds up to tenants." },
      { useCase: "Lake Country waterfront", winner: "LVP", reason: "Higher ambient humidity; LVP is dimensionally stable." },
      { useCase: "Condo with noise restrictions", winner: "LVP", reason: "Better attached underlayments; passes most condo IIC requirements." },
    ],
    bottomLine:
      "If you can only pick one for a whole Kelowna home in 2026, LVP wins for the average homeowner — it does everything laminate does plus full waterproofing. But laminate is still the best $4/sqft floor on the market and shines in dry-room installs.",
    faqs: [
      { q: "Is LVP better than laminate for Kelowna basements?", a: "Yes — LVP is the better choice for any Kelowna basement because it's 100% waterproof and handles temperature swings on concrete subfloors. Laminate's particleboard core can swell if exposed to moisture from a slab leak or seasonal humidity." },
      { q: "Does laminate look as good as vinyl plank?", a: "Modern AC4 and AC5 laminate often looks more realistic than mid-tier LVP because of deeper embossing and varied plank lengths. Premium SPC luxury vinyl planks have caught up but cost more. Visit our Kelowna showroom to compare in person." },
      { q: "Can I install LVP over old laminate?", a: "Yes — in most cases, as long as the laminate is in good condition and the floor is flat. Our installers assess the subfloor during your free estimate." },
      { q: "Which lasts longer in a Kelowna home — LVP or laminate?", a: "Both last 15–25+ years. LVP edges out in kitchens and bathrooms because moisture won't damage it. Laminate edges out in bedrooms and offices because it's marginally more dimensionally stable in dry winter conditions when humidity drops below 30%." },
    ],
  },
  {
    slug: "engineered-vs-solid-hardwood-kelowna",
    title: "Engineered vs Solid Hardwood in Kelowna",
    metaTitle: "Engineered vs Solid Hardwood — Kelowna Guide",
    metaDescription:
      "Engineered vs solid hardwood for Kelowna homes — climate stability, refinishing, install method, cost. Which fits your home best.",
    heroImage: "/assets/images/showroom-01.webp",
    optionA: "Engineered Hardwood",
    optionB: "Solid Hardwood",
    tldr:
      "Engineered hardwood wins for the Okanagan: more dimensionally stable across our hot dry summers and freezing winters, can be installed below grade, and costs less per square foot. Solid hardwood wins on longevity (4–6 refinishes vs 1–2) and resale appeal in luxury homes.",
    comparison: [
      { criterion: "Installed Cost (Kelowna 2026)", a: "$8–14/sqft", b: "$10–18/sqft" },
      { criterion: "Climate stability (Okanagan)", a: "Excellent — cross-layer construction", b: "Sensitive — needs 30–50% RH year-round" },
      { criterion: "Below-grade install (basements)", a: "Yes, with vapour barrier", b: "No — not recommended" },
      { criterion: "Refinishing cycles", a: "1–2 (depends on wear-layer thickness)", b: "4–6 over its lifetime" },
      { criterion: "Width options", a: "Wide planks (7–9\"+) common", b: "Wide planks possible but pricier" },
      { criterion: "Install method", a: "Float, glue, or nail", b: "Nail-down only" },
      { criterion: "Acclimation needed", a: "24–48 hrs", b: "48–72 hrs minimum" },
      { criterion: "Lifespan with care", a: "30+ years", b: "50–100 years" },
      { criterion: "Resale impact", a: "Strong; modern buyers accept it", b: "Premium feel in higher-end homes" },
    ],
    winnerByUse: [
      { useCase: "Kelowna basement", winner: "Engineered", reason: "Solid is not recommended below grade in any climate." },
      { useCase: "Main floor of typical Kelowna home", winner: "Engineered", reason: "Climate stability + cost + wide-plank options." },
      { useCase: "Heritage Kelowna home restoration", winner: "Solid", reason: "Period-appropriate and refinishable for a century." },
      { useCase: "Luxury Lower Mission new build", winner: "Solid", reason: "Premium expectation; humidity control already in place." },
      { useCase: "Family home with humidity swings", winner: "Engineered", reason: "Won't cup or gap with seasonal Okanagan humidity changes." },
    ],
    bottomLine:
      "For 90% of Kelowna homeowners in 2026, engineered hardwood is the right call — better Okanagan climate fit, comparable look, lower cost. Solid hardwood remains the choice for high-end rebuilds where the buyer is willing to manage humidity and wants 50+ years of refinishability.",
    faqs: [
      { q: "Is engineered hardwood real wood?", a: "Yes — engineered hardwood has a real hardwood top layer (typically 3–6mm thick) over a cross-layered plywood or HDF core. The visible surface is identical to solid hardwood." },
      { q: "Can engineered hardwood be refinished?", a: "Yes, depending on the wear-layer thickness. A 3mm wear layer typically allows one refinish; 5–6mm allows two or three." },
      { q: "Why is solid hardwood not recommended for Kelowna basements?", a: "Solid hardwood is sensitive to moisture from below. Basement concrete subfloors release moisture year-round and the temperature swings cause solid wood to cup, crown, or gap. Engineered hardwood's cross-layer construction is much more stable." },
      { q: "Which has better resale value in Kelowna?", a: "Both add resale value. Solid hardwood holds slightly higher premium feel in luxury Lower Mission and Upper Mission homes. Engineered is the Kelowna market default — buyers don't penalize it." },
    ],
  },
  {
    slug: "carpet-vs-hardwood-bedrooms-kelowna",
    title: "Carpet vs Hardwood in Bedrooms (Kelowna)",
    metaTitle: "Carpet vs Hardwood in Bedrooms — Kelowna Guide",
    metaDescription:
      "Should Kelowna bedrooms get carpet or hardwood? Honest comparison: warmth, allergies, kids, resale, cost. Both have a place.",
    heroImage: "/assets/images/showroom-04.webp",
    optionA: "Carpet",
    optionB: "Hardwood (or LVP)",
    tldr:
      "Carpet wins for bedroom comfort — warmer underfoot in Kelowna winters, quieter, softer for getting out of bed. Hardwood/LVP wins for allergy sufferers, easier cleaning, and modern resale appeal. The current Kelowna trend (2026): hardwood/LVP throughout with a large area rug under the bed.",
    comparison: [
      { criterion: "Installed Cost (Kelowna 2026)", a: "$4–8/sqft", b: "$8–14/sqft (engineered)" },
      { criterion: "Warmth (Kelowna winters)", a: "Warmest — bare feet love it", b: "Colder; needs area rug" },
      { criterion: "Sound dampening", a: "Excellent — quietest option", b: "Echoes more without rugs" },
      { criterion: "Allergies / dust mites", a: "Holds dust + dander", b: "Easier to keep allergen-free" },
      { criterion: "Pets (claws, accidents)", a: "Stains + pulls", b: "Wins clearly" },
      { criterion: "Cleaning", a: "Vacuum + occasional pro clean", b: "Sweep + damp mop" },
      { criterion: "Lifespan", a: "10–15 years before refresh", b: "30+ years" },
      { criterion: "Resale (Kelowna 2026)", a: "Neutral", b: "Modern buyers prefer hardwood/LVP" },
    ],
    winnerByUse: [
      { useCase: "Master bedroom — comfort over everything", winner: "Carpet", reason: "Warm, soft, quiet morning routine." },
      { useCase: "Kid's bedroom", winner: "Carpet", reason: "Soft for play, less echo, forgiving of spills if treated." },
      { useCase: "Allergy or asthma in family", winner: "Hardwood/LVP", reason: "Far easier to keep allergen-free." },
      { useCase: "Pet bedroom", winner: "Hardwood/LVP", reason: "Carpet stains and pulls from claws." },
      { useCase: "Selling home in next 2 years", winner: "Hardwood/LVP", reason: "Modern Kelowna buyers prefer hard surfaces with rugs." },
    ],
    bottomLine:
      "If you live in your home and want bedroom comfort, carpet still wins for most Kelowna families. If you have allergies, pets, or plan to sell soon, hardwood or LVP with a quality area rug is the smarter long-term call.",
    faqs: [
      { q: "Is carpet outdated in 2026?", a: "No — quality carpet in bedrooms remains popular in Kelowna. The 'outdated' look is wall-to-wall carpet on main floors. Bedroom carpet with a hard-surface main floor is current and very common." },
      { q: "Will hardwood floors hurt resale in Kelowna bedrooms?", a: "Not at all — modern Kelowna buyers actually prefer hardwood or LVP throughout, often with a large area rug under the bed. It looks intentional, not cold." },
      { q: "What's the best carpet for a Kelowna master bedroom?", a: "A soft twist-pile nylon in a neutral colour with a quality 8–10lb underpad. It feels luxurious underfoot, lasts 12–15 years with care, and won't show traffic patterns." },
    ],
  },
  {
    slug: "best-flooring-for-kelowna-rentals",
    title: "Best Flooring for Kelowna Rentals",
    metaTitle: "Best Flooring for Kelowna Rentals — 2026 Guide",
    metaDescription:
      "Best flooring for Kelowna rental properties — durability, cost, tenant turnover. What landlords + property managers should install.",
    heroImage: "/assets/images/showroom-08.webp",
    optionA: "Luxury Vinyl Plank (LVP)",
    optionB: "AC4/AC5 Laminate",
    tldr:
      "For Kelowna rentals, the choice is between rigid-core LVP (more forgiving, waterproof, tenant-proof) and AC5 laminate (cheaper upfront). LVP wins for kitchens, baths, and any property where tenants might forget about a leak. Laminate wins for bedrooms and dry-room rentals where every dollar counts.",
    comparison: [
      { criterion: "Installed cost", a: "$5–7/sqft (entry SPC)", b: "$4–6/sqft (AC5)" },
      { criterion: "Waterproof", a: "Yes — survives leaks", b: "No — swelling at seams" },
      { criterion: "Tenant scratch resistance", a: "Excellent", b: "Excellent (AC5)" },
      { criterion: "Repair / replace cost", a: "Plank-by-plank if you saved spares", b: "Plank-by-plank if you saved spares" },
      { criterion: "Turnover refresh time", a: "Wipe + photo-ready in 1 hour", b: "Wipe + photo-ready in 1 hour" },
      { criterion: "Allergens (rentals matter)", a: "Easy — non-porous", b: "Easy" },
      { criterion: "Lifespan in a rental", a: "10–15 years", b: "8–12 years" },
    ],
    winnerByUse: [
      { useCase: "Rental kitchen / bathroom", winner: "LVP", reason: "Waterproof when (not if) a tenant forgets a leak." },
      { useCase: "Rental bedroom", winner: "Laminate AC5", reason: "Cheaper, no waterproofing needed in a dry room." },
      { useCase: "Whole-house rental refresh", winner: "LVP", reason: "Single product through the whole home — easier to source spares." },
      { useCase: "Below-grade basement suite", winner: "LVP", reason: "Concrete + rental tenants = mandatory waterproof." },
      { useCase: "Premium long-term rental", winner: "LVP", reason: "Higher-end finish attracts better tenants." },
    ],
    bottomLine:
      "For a typical Kelowna rental, LVP is worth the extra $1–2/sqft. The first time a tenant overflows a tub or forgets a slow dishwasher leak, you'll save more than the install premium in repair costs.",
    faqs: [
      { q: "What's the cheapest flooring for a Kelowna rental?", a: "Entry-tier AC3 laminate is the cheapest at about $4/sqft installed, but it doesn't last in high-turnover units. AC5 laminate or entry SPC luxury vinyl is a better value over 10 years." },
      { q: "Should I put carpet in a rental bedroom?", a: "Most Kelowna landlords are moving away from carpet in rentals because of stains, pet damage, and turnover cleaning costs. Hard surfaces in all rooms make turnovers faster and cheaper." },
      { q: "What flooring lasts longest in a Kelowna rental?", a: "Rigid-core SPC luxury vinyl plank typically lasts 10–15 years in a rental with average tenant use, the longest of any moderately priced option." },
    ],
  },
  {
    slug: "pet-friendly-flooring-kelowna",
    title: "Pet-Friendly Flooring in Kelowna",
    metaTitle: "Pet-Friendly Flooring Kelowna — Best for Dogs & Cats",
    metaDescription:
      "Best flooring for Kelowna homes with pets — scratch resistance, accidents, claws, dander. LVP, tile, and laminate compared.",
    heroImage: "/assets/images/flooring/vinyl-plank/vinyl-plank-hero.webp",
    optionA: "Luxury Vinyl Plank",
    optionB: "Tile / Laminate",
    tldr:
      "Luxury vinyl plank is the #1 pet-friendly flooring for Kelowna homes — waterproof, scratch-resistant, comfortable underfoot for the dog (and you). Porcelain tile is the only thing that beats it for indestructibility but is colder and harder. Avoid solid hardwood and standard carpet if you have dogs or cats.",
    comparison: [
      { criterion: "Scratch resistance (claws)", a: "Excellent", b: "Tile excellent · Laminate AC5 excellent" },
      { criterion: "Waterproof (accidents)", a: "Yes — 100%", b: "Tile yes · Laminate no" },
      { criterion: "Comfort for pets", a: "Soft, warm underfoot", b: "Tile cold/hard · Laminate ok" },
      { criterion: "Cleaning", a: "Easy — wet mop OK", b: "Easy" },
      { criterion: "Slip resistance for dogs", a: "Good (textured)", b: "Tile slippery when wet · Laminate ok" },
      { criterion: "Cost installed", a: "$5–9/sqft", b: "Tile $9–16 · Laminate $4–7" },
    ],
    winnerByUse: [
      { useCase: "Big dog who runs at the door", winner: "LVP", reason: "Scratch-proof and grip-friendly." },
      { useCase: "Senior dog with hip issues", winner: "LVP", reason: "Slightly cushioned + textured grip." },
      { useCase: "Cats that scratch carpet edges", winner: "LVP or tile", reason: "No fibres to claw." },
      { useCase: "Multiple pets, frequent cleanup", winner: "LVP", reason: "Waterproof + scratch-resistant + warm." },
      { useCase: "Mudroom for muddy paws", winner: "Tile", reason: "Indestructible, mop daily." },
    ],
    bottomLine:
      "If you have one or more pets in a Kelowna home, install rigid-core SPC luxury vinyl plank. It's the only flooring under $10/sqft that handles scratches, accidents, mud, and dog-comfort all at once.",
    faqs: [
      { q: "What's the most scratch-resistant flooring for dogs?", a: "Porcelain tile is technically the most scratch-resistant. For comfort + cost balance, rigid-core SPC luxury vinyl plank is the best practical choice for Kelowna pet households." },
      { q: "Is hardwood OK with dogs?", a: "Solid hardwood will scratch from medium and large dogs. Engineered hardwood with a hard aluminum-oxide finish does better but still shows wear over time. LVP is the safer pet-friendly choice if you want a wood look." },
      { q: "Can dogs slip on luxury vinyl plank?", a: "Quality LVP has a textured wear layer that grips well — much better than tile or polished hardwood. For senior dogs with hip issues, LVP is the gentlest hard surface available." },
      { q: "What flooring is bad for cats?", a: "Carpet — claws catch loops and pulls a thread. Once one loop is pulled, the cat usually keeps doing it. Hard surfaces (LVP, tile, laminate) eliminate this entirely." },
    ],
  },
];

export const getComparePageBySlug = (slug: string) => comparePages.find((p) => p.slug === slug);
