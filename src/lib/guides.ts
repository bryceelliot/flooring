export interface GuideSection {
  heading: string;
  body: string; // markdown-like: paragraphs separated by blank lines, - for bullets
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  tldr: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  datePublished: string;
  dateModified: string;
}

export const guides: Guide[] = [
  {
    slug: "installation-timeline",
    title: "How Long Does Flooring Installation Take in Kelowna?",
    metaTitle: "Flooring Installation Timeline — Kelowna Guide",
    metaDescription:
      "How long each flooring type takes to install in a Kelowna home — single rooms, whole floors, stairs. Realistic timelines + what slows a job down.",
    heroImage: "/assets/images/showroom-11.webp",
    tldr:
      "Most single rooms finish in one day. A typical Kelowna 1,200 sqft main floor takes 2–3 days for laminate or LVP, 3–5 days for hardwood, and 3–5 days for tile once you factor in grout cure time. Stairs add a full day.",
    sections: [
      {
        heading: "Per-type install timelines (real jobs, Kelowna crews)",
        body:
          "- **Laminate**: 250–400 sqft per crew per day. Click-lock floats over existing subfloor; no adhesive drying required.\n- **Luxury Vinyl Plank**: 300–500 sqft per crew per day. Slightly faster than laminate because planks are heavier and clip easily.\n- **Engineered Hardwood**: 200–300 sqft per crew per day for floating installs, 150–250 sqft for glue-down or nail-down.\n- **Solid Hardwood**: 150–250 sqft per crew per day — slower because of nail-down installation and acclimation requirements.\n- **Carpet**: 400–700 sqft per crew per day. Underpad + carpet laid together; stairs add a full day for a 15-step run.\n- **Porcelain/Ceramic Tile**: 80–150 sqft per crew per day laying. Grout cures 24–48 hrs; sealing adds another day for natural stone.",
      },
      {
        heading: "Whole-home Kelowna install estimates",
        body:
          "- **1,200 sqft main floor, laminate**: 2 days on-site.\n- **1,500 sqft main floor, luxury vinyl plank**: 2–3 days.\n- **2,000 sqft two-floor home, engineered hardwood + stairs**: 4–5 days.\n- **1,800 sqft main floor + 15-step staircase carpet**: 3 days.\n- **Kitchen + entry + two bathrooms tile (400 sqft mixed)**: 4–5 days including grout cure and sealing.\nAll ranges assume a typical Kelowna home with a prepped subfloor. Add a day if subfloor leveling or moisture mitigation is required.",
      },
      {
        heading: "What slows a job down",
        body:
          "- **Subfloor prep**: uneven concrete or plywood can add 1/2 to 1 full day. We assess this during the estimate so it's never a surprise.\n- **Old floor removal**: demoing tile or nailed-down hardwood takes 1/2 to 1 full day. Floating floors pull out in minutes.\n- **Acclimation**: solid hardwood needs to acclimate 48–72 hrs in the home before installation — factor this into your timeline.\n- **Furniture moving**: we include in-room moves; heavy appliances with water/gas lines can add scheduling time.\n- **Stairs**: a 13–16 step staircase adds a full day regardless of flooring type.\n- **Rush bookings**: we try to accommodate same-week starts, but full-home jobs usually book 1–3 weeks out.",
      },
      {
        heading: "How we sequence your job",
        body:
          "1. **Day of estimate**: in-home measurement, subfloor check, line-item quote.\n2. **3–5 business days later**: in-stock material arrives at our Kelowna warehouse.\n3. **Install day 1**: crew shows up on time, protects your floors + walls, begins removal (if needed) and subfloor prep.\n4. **Install days 2+**: laying the floor, transitions, finishing details.\n5. **Final day**: cleanup, walkthrough, warranty paperwork handoff.",
      },
    ],
    faqs: [
      { q: "Can flooring be installed in one day?", a: "Yes — single rooms like a bedroom or small living room are routinely completed in one day with laminate, luxury vinyl plank, or carpet." },
      { q: "Do I have to move out during flooring installation?", a: "No. We work room-by-room in most cases, so you can stay in the home. Larger jobs sometimes benefit from being away for a few hours on final grout day." },
      { q: "How long before I can walk on new flooring?", a: "Floating laminate and LVP: walk on immediately. Glue-down hardwood: wait 24 hours. Nail-down hardwood: walk on immediately. Tile: 24 hours after grout. Carpet: walk on immediately." },
      { q: "How soon can furniture go back on new flooring?", a: "Floating floors: immediately, with felt pads. Glue-down hardwood: 24 hours. Tile: 48 hours for heavy furniture. Nail-down hardwood: immediately." },
    ],
    datePublished: "2026-04-20",
    dateModified: "2026-04-20",
  },
  {
    slug: "best-flooring-by-room",
    title: "Best Flooring by Room (Kelowna Edition)",
    metaTitle: "Best Flooring By Room — Kelowna Guide",
    metaDescription:
      "Which flooring goes where in a Kelowna home — kitchen, bathroom, basement, bedroom, stairs. Based on real installs and Okanagan climate.",
    heroImage: "/assets/images/showroom-06.webp",
    tldr:
      "Kitchens and bathrooms: luxury vinyl plank or tile. Bedrooms: carpet or engineered hardwood. Basements: luxury vinyl plank. Stairs: carpet for warmth, hardwood for longevity. Living rooms: engineered hardwood, LVP, or laminate depending on budget.",
    sections: [
      {
        heading: "Kitchen flooring — Kelowna",
        body:
          "**Best pick: Luxury Vinyl Plank (LVP)**. Waterproof, scratch-resistant, comfortable underfoot. Modern LVP looks nearly indistinguishable from real hardwood.\n\n**Runner-up: Porcelain tile.** Truly permanent, heat-friendly with in-floor heating, higher install cost but unbeatable longevity.\n\n**Avoid: Solid hardwood.** Moisture swings from dishwashers and open-plan cooking damage natural wood over time.",
      },
      {
        heading: "Bathroom flooring — Kelowna",
        body:
          "**Best pick: Porcelain tile.** 100% waterproof, easy to clean, pairs with in-floor heat for Kelowna winters.\n\n**Runner-up: Luxury vinyl plank.** Cheaper, warmer underfoot, fully waterproof. Excellent for powder rooms and guest baths.\n\n**Avoid: Laminate, solid hardwood.** Even water-resistant laminate fails at the seams in a bathroom.",
      },
      {
        heading: "Basement flooring — Kelowna",
        body:
          "**Best pick: Luxury vinyl plank with a moisture barrier.** Many Kelowna basements have concrete subfloors that move with the seasons. LVP handles temperature swings and minor moisture that would ruin hardwood.\n\n**Runner-up: Carpet tile.** Warm, replaceable by the square — see our Springfield Manor project where we swapped worn broadloom for modern carpet tile.\n\n**Avoid: Solid hardwood.** Warps below grade in almost every case.",
      },
      {
        heading: "Bedroom flooring — Kelowna",
        body:
          "**Best pick: Carpet.** Warm, quiet, soft for bare feet. Plush nylon or polyester broadloom with a quality underpad feels premium.\n\n**Runner-up: Engineered hardwood.** Timeless look, can be refinished, pairs with area rugs.\n\n**Avoid: Tile.** Too cold underfoot for Kelowna winters in bedrooms.",
      },
      {
        heading: "Stairs — Kelowna",
        body:
          "**Best pick (comfort): Carpet.** Softens footfalls, warms bare feet, safer for kids and seniors.\n\n**Best pick (longevity): Hardwood or stair nosings with LVP treads.** Beautiful, easy to clean, pairs with any main floor.\n\nStairs always add a full day to any job — price accordingly.",
      },
      {
        heading: "Living room / main floor — Kelowna",
        body:
          "**Best pick (value): Luxury vinyl plank.** The single most popular Kelowna main-floor choice in 2026. Waterproof, scratch-resistant, looks like real wood.\n\n**Best pick (premium): Engineered hardwood.** Wide planks, real wood, refinishable.\n\n**Best pick (budget): Laminate.** AC4/AC5 modern laminate looks beautiful and is much cheaper than hardwood.",
      },
    ],
    faqs: [
      { q: "What's the best flooring for a Kelowna basement?", a: "Luxury vinyl plank is the best all-around choice for Kelowna basements. It's fully waterproof, handles temperature swings in below-grade concrete, and comes in wide-plank wood looks that lift the space." },
      { q: "Can I use hardwood in a Kelowna kitchen?", a: "Engineered hardwood works in a Kelowna kitchen if the homeowner is diligent about spills. Solid hardwood is not recommended — moisture cycles from dishwashers and cooking damage the boards over time. Luxury vinyl plank is the safer match for most kitchens." },
      { q: "What flooring is warmest for Kelowna winters?", a: "Carpet is warmest underfoot, followed by luxury vinyl plank and laminate with thicker underpads. Tile is coldest — pair it with in-floor heating for a Kelowna bathroom or kitchen." },
      { q: "What's the best low-maintenance flooring for a busy Kelowna family?", a: "Luxury vinyl plank — scratch-resistant, waterproof, easy to clean, warm enough for winters. It holds up to pets, kids, and high-traffic entryways better than any other option in this price range." },
    ],
    datePublished: "2026-04-20",
    dateModified: "2026-04-20",
  },
  {
    slug: "okanagan-climate",
    title: "Best Flooring for Okanagan Climate",
    metaTitle: "Best Flooring for Okanagan Climate — Kelowna Guide",
    metaDescription:
      "How Okanagan's hot dry summers and cold winters affect flooring choices — which types hold up best in Kelowna, West Kelowna, Lake Country homes.",
    heroImage: "/assets/images/showroom-03.webp",
    tldr:
      "The Okanagan's dry 35°C summers and freezing winters are brutal on flooring. Luxury vinyl plank, engineered hardwood (with humidity control), and porcelain tile handle the climate best. Solid hardwood and cheap laminate can gap, cup, or split without humidity management.",
    sections: [
      {
        heading: "Why Okanagan climate matters for flooring",
        body:
          "Kelowna's interior-mountain climate swings between sub-zero winters and 35°C+ summers with single-digit humidity. That's harder on flooring than most people realize — natural wood expands when humid, contracts when dry, and the Okanagan cycles through both within 12 months. Choosing the right floor for this climate matters as much as brand or budget.",
      },
      {
        heading: "Flooring types ranked for Okanagan climate",
        body:
          "- **Luxury vinyl plank**: Best all-around. Dimensionally stable across the full -15°C to +40°C range found in Okanagan homes. Waterproof. Wild choice for waterfront Lake Country homes.\n- **Porcelain tile**: Unaffected by humidity, handles in-floor heat, perfect for Kelowna kitchens and bathrooms.\n- **Engineered hardwood**: Better than solid hardwood in the Okanagan thanks to its cross-layer construction. Still benefits from whole-home humidification in winter.\n- **Laminate (AC4/AC5)**: Modern premium laminate is more dimensionally stable than older generations. Entry laminate (AC3) can gap in very dry winters.\n- **Solid hardwood**: Beautiful but needs the most care. Requires humidity control (30–50% RH year-round) to prevent cupping and gapping.",
      },
      {
        heading: "Humidity tips for Okanagan hardwood owners",
        body:
          "If you have solid or engineered hardwood in Kelowna:\n- Run a whole-home humidifier in winter to keep RH above 30%.\n- Use a dehumidifier in humid summer weeks (rare, but happens near the lakes).\n- Let hardwood acclimate 48–72 hours in your home before installation — this is non-negotiable in the Okanagan.\n- Watch for gaps in January/February (dry season) — small gaps usually close when humidity returns.",
      },
      {
        heading: "Waterfront + lakeshore homes (Kelowna, Lake Country, Peachland)",
        body:
          "Lakefront Kelowna and Lake Country homes see higher ambient moisture year-round. Luxury vinyl plank is the standout choice — 100% waterproof, no humidity sensitivity, looks like real wood. Tile also works well in these homes. Engineered hardwood is workable but requires more diligent humidity control. Avoid solid hardwood near the lake unless you're committed to active humidity management.",
      },
    ],
    faqs: [
      { q: "Will hardwood floors work in Kelowna?", a: "Yes — engineered hardwood is a great fit for Kelowna homes. Solid hardwood works too but requires year-round humidity control (30–50% RH) because of the Okanagan's seasonal swings." },
      { q: "Does luxury vinyl plank hold up in Kelowna's hot summers?", a: "Yes. Modern rigid-core (SPC) luxury vinyl plank is rated for temperatures from -15°C to +60°C — well above what Kelowna summers produce inside a home. It's the most climate-stable flooring choice available." },
      { q: "Can tile handle Kelowna winters?", a: "Porcelain and ceramic tile are unaffected by cold. Pair them with in-floor heating (electric or hydronic) for comfort during Kelowna winters." },
      { q: "Is laminate a good choice for the Okanagan?", a: "Modern AC4 or AC5 laminate is a solid budget choice for the Okanagan. Avoid entry-tier AC3 laminate — the dry winters can cause small gaps at seams over time." },
    ],
    datePublished: "2026-04-20",
    dateModified: "2026-04-20",
  },
];

export const getGuideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
