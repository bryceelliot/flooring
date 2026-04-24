/* Question-led landing pages — the URL IS the search query.
 * Designed for AI Overview / voice search citations.
 */

export interface AnswerPage {
  slug: string;
  question: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  /* The answer in 1–2 sentences — what an AI cites verbatim. */
  shortAnswer: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const answerPages: AnswerPage[] = [
  {
    slug: "how-to-choose-flooring-kelowna",
    question: "How do I choose flooring for my Kelowna home?",
    metaTitle: "How to Choose Flooring for a Kelowna Home (2026)",
    metaDescription:
      "Step-by-step Kelowna flooring guide — how to pick the right type for each room, climate factors, budget, and install tips from a 30-year local shop.",
    heroImage: "/assets/images/showroom-01.webp",
    shortAnswer:
      "Start by matching flooring type to room (LVP for kitchens/baths/basements, carpet for bedrooms, hardwood for main floors), set a realistic budget per room, and consider Kelowna's dry winters when picking solid hardwood. The Okanagan's climate makes engineered hardwood and luxury vinyl plank the safest mainstream choices for most Kelowna homes.",
    sections: [
      {
        heading: "1. Match flooring type to the room",
        body:
          "- **Kitchen, bathroom, mudroom, basement**: Luxury vinyl plank (waterproof) or porcelain tile.\n- **Living room, hall, dining room**: Engineered hardwood, LVP, or premium laminate.\n- **Bedrooms**: Carpet for warmth, or hardwood/LVP with a large area rug.\n- **Stairs**: Carpet for comfort, hardwood for longevity.\n- **Home office or studio**: Cork or carpet for sound dampening.",
      },
      {
        heading: "2. Set a per-room budget (Kelowna 2026)",
        body:
          "- Bedroom 150 sqft carpet: $600–$1,200 installed.\n- Living room 300 sqft LVP: $1,500–$2,850.\n- Bathroom 30 sqft tile: $540–$1,200.\n- Whole 1,500 sqft main floor LVP: $7,500–$13,500.\nUse our Kelowna flooring price guide for full breakdowns.",
      },
      {
        heading: "3. Factor in Okanagan climate",
        body:
          "Kelowna's hot dry summers and cold winters cycle indoor humidity dramatically. Solid hardwood requires year-round humidity control (30–50% RH). Engineered hardwood, luxury vinyl plank, and porcelain tile handle the climate without active management.",
      },
      {
        heading: "4. See real samples in person",
        body:
          "Online photos lie. Floors look different under your home's lighting. Visit our Kelowna showroom on McCurdy Place — we'll let you take samples home overnight to see them in your space at sunrise, midday, and evening.",
      },
      {
        heading: "5. Get a real line-item quote",
        body:
          "A reputable Kelowna flooring quote includes: material, underpad, install, subfloor prep, removal, transitions, stair nosings. Quotes that bundle everything into one number make it impossible to compare offers fairly. Ask for line items.",
      },
    ],
    faqs: [
      { q: "What's the most popular flooring in Kelowna right now?", a: "Luxury vinyl plank is the #1 selling category in Kelowna in 2026. Wide-plank LVP delivers a hardwood look at half the cost with full waterproofing." },
      { q: "How long does it take to choose a floor?", a: "Most Kelowna homeowners spend 1–2 weeks from first showroom visit to ordering. We encourage taking samples home before deciding." },
      { q: "Should I match flooring throughout my whole Kelowna home?", a: "Single-flooring main floors look modern and make rooms feel larger. Mixing types (e.g. LVP main floor, carpet bedrooms) is also fine — just plan transitions carefully." },
    ],
  },
  {
    slug: "flooring-removal-cost-kelowna",
    question: "How much does flooring removal cost in Kelowna?",
    metaTitle: "Flooring Removal Cost in Kelowna (2026)",
    metaDescription:
      "What it costs to remove old flooring in Kelowna — carpet, tile, hardwood, laminate. Per-sqft pricing, what makes it more expensive, and what's typically included.",
    heroImage: "/assets/images/projects/commercial-refresh/basement-before.webp",
    shortAnswer:
      "Flooring removal in Kelowna costs $1–$2.50 per square foot depending on what's being removed and how it's attached. Floating laminate is cheapest to remove ($1/sqft); glued vinyl, nailed hardwood, and tile are most expensive ($2–$2.50/sqft).",
    sections: [
      {
        heading: "Removal cost by floor type",
        body:
          "- **Floating laminate / LVP**: $1.00–$1.50/sqft. Pulls up in minutes; no adhesive.\n- **Carpet + underpad**: $1.00–$1.75/sqft. Includes hauling and underpad disposal.\n- **Glued vinyl sheet**: $1.75–$2.50/sqft. Adhesive scraping is labour-intensive.\n- **Nailed solid hardwood**: $2.00–$2.50/sqft. Each board pried up individually.\n- **Tile (ceramic/porcelain)**: $2.00–$3.00/sqft. Most expensive — chiseling thinset off the substrate is slow.\n- **Glued-down engineered hardwood**: $2.00–$3.00/sqft. Hard to separate from substrate.",
      },
      {
        heading: "What's typically included",
        body:
          "- Removal labour\n- Disposal fees + dump runs\n- Light substrate cleanup (sweeping, vacuuming nails)\n\n**Not** typically included unless quoted separately:\n- Asbestos testing on pre-1985 vinyl/tile\n- Major subfloor repair\n- Stair carpet removal (priced per step)",
      },
      {
        heading: "Why removal isn't always worth skipping",
        body:
          "If you're tempted to install new floor over old, ask about height issues at door swings, transitions to other rooms, and whether the existing floor is flat. Floating LVP can sometimes go over old laminate or vinyl, but tile-over-tile rarely works and laminate-over-carpet never works.",
      },
    ],
    faqs: [
      { q: "Can I save money by removing the old floor myself?", a: "Yes — most homeowners can remove carpet and floating laminate themselves with basic tools. Tile and nailed hardwood are not DIY-friendly. If you remove the old floor, ask for the install-only quote." },
      { q: "Is asbestos a concern in old Kelowna flooring?", a: "Vinyl flooring installed before 1985 may contain asbestos. If your home is from that era, get the floor tested before removing it. We can recommend local asbestos-testing labs." },
      { q: "Does Kelowna Flooring Superstore handle removal?", a: "Yes — removal of old flooring is included in most full-service installs. We add a per-sqft line item to your quote so you can see exactly what it costs." },
    ],
  },
  {
    slug: "are-laminate-floors-good-for-pets",
    question: "Are laminate floors good for pets?",
    metaTitle: "Are Laminate Floors Good for Pets? (Kelowna Guide)",
    metaDescription:
      "Is laminate flooring pet-friendly? Honest answer with claw resistance, accident handling, slip risk, and what works better for dogs and cats in Kelowna homes.",
    heroImage: "/assets/images/showroom-08.webp",
    shortAnswer:
      "Modern AC4 and AC5 laminate is scratch-resistant enough for most cats and small-to-medium dogs, but its weak spot is moisture — accidents that aren't cleaned up quickly can swell the seams. Luxury vinyl plank is the better all-around pet floor because it's both scratch-resistant AND 100% waterproof.",
    sections: [
      {
        heading: "Where laminate works well with pets",
        body:
          "- Cats with neutral claw habits — laminate's hard wear layer resists scratches.\n- Small dogs who don't run inside.\n- Households with adults at home who clean accidents within minutes.\n- AC4 or AC5 rated laminate (commercial-grade wear layer).",
      },
      {
        heading: "Where laminate fails with pets",
        body:
          "- Untreated accidents (urine, vomit, spilled water bowl) sitting on a seam for hours can swell the particleboard core.\n- Large dogs running inside generate enough force to chip edges over years.\n- Senior dogs with hip issues — laminate is hard and offers no slip resistance.",
      },
      {
        heading: "Better pet alternatives in Kelowna",
        body:
          "1. **Luxury vinyl plank** — same scratch resistance as AC5 laminate, plus 100% waterproof. The current default for Kelowna pet households.\n2. **Porcelain tile** — indestructible. Cold and hard but ideal for mudrooms.\n3. **Engineered hardwood with hard finish** — beautiful but will show some scratches over years.",
      },
    ],
    faqs: [
      { q: "Will my dog scratch laminate floors?", a: "AC4 and AC5 laminate resists scratches well from typical dog activity. Heavy claws on a running large dog will eventually mark the surface, but daily wear is minimal." },
      { q: "Are laminate floors slippery for dogs?", a: "Glossy laminate finishes can be slippery for dogs. Choose matte or low-sheen finishes for better grip. Luxury vinyl plank with textured wear layers offers better grip than any laminate." },
      { q: "What's the best floor for a Kelowna home with cats and dogs?", a: "Rigid-core SPC luxury vinyl plank is the best all-around choice — scratch-resistant for claws, waterproof for accidents, comfortable for old joints, and warm enough for Kelowna winters." },
    ],
  },
  {
    slug: "what-is-luxury-vinyl-plank",
    question: "What is luxury vinyl plank?",
    metaTitle: "What Is Luxury Vinyl Plank? (LVP Explained)",
    metaDescription:
      "Luxury vinyl plank explained — what it's made of, why it's the fastest-growing flooring in Kelowna, and how SPC, WPC, and traditional LVP differ.",
    heroImage: "/assets/images/flooring/vinyl-plank/vinyl-plank-hero.webp",
    shortAnswer:
      "Luxury vinyl plank (LVP) is a multi-layer waterproof flooring with a printed wood-look top layer, protective wear layer, and rigid core. Modern LVP is dimensionally stable, scratch-resistant, 100% waterproof, and installed via click-lock floating planks — making it the fastest-growing flooring category in Kelowna in 2026.",
    sections: [
      {
        heading: "How LVP is built (layers, top to bottom)",
        body:
          "1. **Wear layer** — clear urethane coating; thickness measured in mils (12, 20, 22 mil common). Determines scratch resistance.\n2. **Print layer** — high-resolution photo of wood, stone, or pattern.\n3. **Core** — SPC (stone polymer composite, rigid) or WPC (wood plastic composite, slightly softer).\n4. **Underlayment** — attached IXPE or cork foam for sound dampening.",
      },
      {
        heading: "SPC vs WPC vs traditional flexible LVP",
        body:
          "- **SPC (stone polymer composite)**: rigid, dimensionally stable, best for full-home and high-traffic. Most modern installs.\n- **WPC (wood plastic composite)**: slightly softer underfoot, higher cost, good for residential.\n- **Flexible LVP (glue-down)**: thin commercial-grade product; rare in residential.",
      },
      {
        heading: "Why LVP fits Kelowna homes",
        body:
          "- Dimensionally stable across the Okanagan's hot dry summers and freezing winters.\n- 100% waterproof — perfect for kitchens, baths, basements, lake homes.\n- Click-lock floating install over almost any subfloor.\n- Wood and stone visuals at a fraction of hardwood/tile cost.\n- Same-day walk-on after install.",
      },
    ],
    faqs: [
      { q: "Is luxury vinyl plank the same as vinyl flooring?", a: "Luxury vinyl plank is a category of vinyl flooring — specifically the rigid-core, click-lock, plank-format product. 'Vinyl flooring' is a broader term that includes sheet vinyl, vinyl tile, and traditional flexible LVP." },
      { q: "How long does LVP last?", a: "Quality SPC luxury vinyl plank lasts 20–25 years in residential use. Commercial wear-layer (22-mil+) products can last 25+ years in light commercial settings." },
      { q: "Is LVP toxic?", a: "Modern reputable brands (Mohawk, TORLYS, Opus, Twelve Oaks) use FloorScore-certified low-VOC products. Avoid no-name imports without certification." },
      { q: "Can LVP be refinished?", a: "No — once the wear layer is damaged, individual planks are replaced rather than refinished." },
    ],
  },
  {
    slug: "cheapest-flooring-kelowna",
    question: "What's the cheapest flooring in Kelowna?",
    metaTitle: "Cheapest Flooring in Kelowna (2026 Guide)",
    metaDescription:
      "Cheapest flooring options in Kelowna — installed pricing for budget-friendly laminate, vinyl, carpet. What you give up at each price tier.",
    heroImage: "/assets/images/showroom-08.webp",
    shortAnswer:
      "The cheapest installed flooring in Kelowna is AC3 residential laminate at about $4/sqft installed, followed by entry-tier carpet ($4–5/sqft installed including underpad) and entry SPC luxury vinyl plank (~$5/sqft). Below those numbers, you're either compromising on durability or doing a partial DIY install.",
    sections: [
      {
        heading: "Cheapest options ranked",
        body:
          "1. **AC3 laminate** — $4–5/sqft installed. Best for low-traffic bedrooms or budget rentals.\n2. **Entry-tier carpet (polyester)** — $4–5/sqft installed including basic underpad.\n3. **Entry SPC luxury vinyl plank** — $5–6/sqft installed. Adds waterproofing for the smallest premium.\n4. **Entry ceramic tile in a small bathroom** — $7–9/sqft installed (high install labour offsets low material).",
      },
      {
        heading: "What you give up at the cheapest price",
        body:
          "- **AC3 laminate**: shorter lifespan (8–12 years), less realistic textures, gaps at seams in dry winters.\n- **Polyester carpet**: matting underfoot in 3–5 years, less stain resistance than nylon.\n- **Entry SPC**: thinner wear layer (12 mil), less detailed embossing.",
      },
      {
        heading: "How to actually save money on a Kelowna flooring project",
        body:
          "- **DIY removal of old floor**: saves $1–2.50/sqft.\n- **Pick a single in-stock product** instead of special-order: avoids freight + waiting time.\n- **Consolidate rooms onto one floor type**: reduces transitions and trim cost.\n- **Schedule outside spring rush**: October–February pricing is often more flexible.",
      },
    ],
    faqs: [
      { q: "What's cheaper — laminate or carpet in Kelowna?", a: "Entry-tier laminate and entry-tier carpet land at roughly the same installed price ($4–5/sqft). Carpet has slightly lower material cost but underpad and installation bring it to a similar total." },
      { q: "Can I install flooring myself to save money?", a: "Floating laminate and LVP are DIY-friendly for handy homeowners. Carpet, tile, and nailed hardwood are not — they require specialized tools and the install affects warranty coverage." },
      { q: "Are big-box flooring prices cheaper than Kelowna stores?", a: "Big-box advertised prices look cheaper but rarely include installation, underpad, removal, transitions, or quality warranty. A locally quoted line-item project usually lands within 5–10% of big-box once everything is included." },
    ],
  },
];

export const getAnswerPageBySlug = (slug: string) => answerPages.find((p) => p.slug === slug);
