export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  img: string;
  focal: string;
  content: BlogSection[];
  metaDescription: string;
}

export interface BlogSection {
  type: "intro" | "h2" | "h3" | "p" | "ul" | "tip" | "cta";
  text?: string;
  items?: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "vinyl-plank-vs-laminate",
    title: "Vinyl Plank vs Laminate: Which is Right for Your Home?",
    excerpt:
      "Two of the most popular flooring choices in Kelowna — but which one is right for your space? We break down the key differences in durability, waterproofing, and cost.",
    category: "Buying Guide",
    readTime: "5 min read",
    date: "Mar 2026",
    img: "/assets/images/hero-kurang.webp",
    focal: "center 45%",
    metaDescription:
      "Vinyl plank vs laminate flooring — which is right for your Kelowna home? Compare waterproofing, durability, cost, and comfort in this expert guide from Kelowna Flooring Superstore.",
    content: [
      {
        type: "intro",
        text: "Walk into any flooring showroom in Kelowna and two products dominate the conversation: luxury vinyl plank (LVP) and laminate. Both mimic the look of real hardwood, both are affordable, and both are DIY-friendly. But they are very different products — and choosing the wrong one for your space is a mistake that's expensive to fix.",
      },
      {
        type: "h2",
        text: "The Core Difference: What They're Made Of",
      },
      {
        type: "p",
        text: "Laminate is made from a high-density fiberboard (HDF) core with a photographic wood-look layer and a protective wear layer on top. The HDF core is wood-based, which means it can absorb moisture and swell if it gets wet.",
      },
      {
        type: "p",
        text: "Luxury vinyl plank is made entirely from PVC plastic — top to bottom. There is no wood content whatsoever. The result is a floor that is 100% waterproof through its entire thickness.",
      },
      {
        type: "h2",
        text: "Waterproofing: The Biggest Factor",
      },
      {
        type: "p",
        text: "This is where LVP wins decisively. If you have kids, pets, or a kitchen where spills happen — vinyl plank is the safer bet. Water that sits on laminate for more than a few minutes can seep into the joints and cause the core to swell and buckle. That damage is permanent.",
      },
      {
        type: "p",
        text: "Modern laminate has improved significantly, and many products now have water-resistant coatings. But water-resistant is not waterproof. For bathrooms, laundry rooms, or basements — always choose LVP.",
      },
      {
        type: "tip",
        text: "Pro Tip: Even with LVP, we recommend sealing the perimeter joints in wet areas like bathrooms and laundry rooms for extra protection.",
      },
      {
        type: "h2",
        text: "Durability and Scratch Resistance",
      },
      {
        type: "p",
        text: "Both floors are durable, but in different ways. Laminate typically has a harder surface that resists scratches better — the AC (Abrasion Class) rating system tells you how tough the wear layer is. AC3 is great for residential, AC4 and AC5 handle commercial traffic.",
      },
      {
        type: "p",
        text: "LVP has a wear layer measured in mils (thousandths of an inch). For residential use, look for 12 mil or higher. For pets with nails, go 20 mil or above. A thicker wear layer means more resistance to scratches and dents.",
      },
      {
        type: "h2",
        text: "Feel Underfoot and Sound",
      },
      {
        type: "p",
        text: "Laminate feels firmer and sounds more like real wood when you walk on it. Many customers say it feels more premium. Vinyl plank can feel slightly softer, almost bouncy, especially thinner products. However, vinyl plank with an attached underlayment is much improved.",
      },
      {
        type: "h2",
        text: "Cost Comparison",
      },
      {
        type: "ul",
        items: [
          "Budget laminate: $1.50–$2.50/sq ft",
          "Mid-range laminate: $2.50–$4.00/sq ft",
          "Premium laminate: $4.00–$6.00/sq ft",
          "Budget LVP: $2.00–$3.50/sq ft",
          "Mid-range LVP: $3.50–$5.50/sq ft",
          "Premium LVP: $5.50–$9.00/sq ft",
        ],
      },
      {
        type: "p",
        text: "Installation costs are similar for both — typically $2–$4/sq ft for professional installation in the Kelowna area.",
      },
      {
        type: "h2",
        text: "Our Recommendation for Kelowna Homes",
      },
      {
        type: "p",
        text: "For most Kelowna homeowners, we lean toward LVP as the safer all-around choice. Our climate is dry in summer and our homes deal with tracked-in moisture in winter. The 100% waterproof core removes an entire category of risk.",
      },
      {
        type: "ul",
        items: [
          "Choose LVP for: kitchens, bathrooms, basements, laundry rooms, homes with pets or young children",
          "Choose laminate for: bedrooms, living rooms, dining rooms where moisture is not a concern",
          "Either works for: hallways, home offices, rental properties",
        ],
      },
      {
        type: "cta",
        text: "Not sure which is right for your specific space? Come visit our Kelowna showroom — we have dozens of samples from both categories and our team can help you find the perfect match.",
      },
    ],
  },
  {
    slug: "hardwood-care-okanagan",
    title: "How to Care for Your Hardwood Floors in the Okanagan",
    excerpt:
      "The Okanagan's dry climate creates unique challenges for hardwood flooring. Learn how to maintain proper humidity levels and keep your floors beautiful year-round.",
    category: "Maintenance",
    readTime: "4 min read",
    date: "Feb 2026",
    img: "/assets/images/hero-walnut.webp",
    focal: "center 55%",
    metaDescription:
      "Learn how to care for hardwood floors in Kelowna and the Okanagan's dry climate. Expert tips on humidity control, cleaning, and seasonal maintenance from Kelowna Flooring Superstore.",
    content: [
      {
        type: "intro",
        text: "Hardwood floors are one of the most beautiful and long-lasting investments you can make in a home. But in the Okanagan, they face a challenge that homeowners in Vancouver or the Lower Mainland rarely deal with: extreme humidity swings. Kelowna's semi-arid climate means your floors work hard year-round — and with the right care, they'll last for generations.",
      },
      {
        type: "h2",
        text: "Why the Okanagan Is Hard on Hardwood",
      },
      {
        type: "p",
        text: "Wood is hygroscopic — it absorbs and releases moisture from the air constantly. In the Okanagan, summer relative humidity can drop below 20%, while winter indoor air can be even drier when you're running forced-air heat. This creates a cycle of expansion and contraction that, over time, can cause gapping between boards, surface checking (tiny cracks), and even cupping.",
      },
      {
        type: "p",
        text: "The target range for indoor relative humidity around hardwood floors is 35–55%. Maintaining this range is the single most important thing you can do for your floors.",
      },
      {
        type: "tip",
        text: "Pro Tip: Pick up a digital hygrometer (under $20 at most hardware stores) and place it near your hardwood. Check it seasonally — you may be surprised how dry your home gets in winter.",
      },
      {
        type: "h2",
        text: "Winter Care: Fighting Dry Air",
      },
      {
        type: "ul",
        items: [
          "Run a whole-home humidifier or room humidifiers — target 35–45% RH",
          "Keep interior doors open to balance humidity across rooms",
          "Avoid cranking the thermostat higher than needed — every degree drier the air gets",
          "Place area rugs in high-traffic areas to protect the surface and reduce static",
          "Do not over-sand or re-coat during winter — the wood may expand in spring",
        ],
      },
      {
        type: "h2",
        text: "Summer Care: Heat and UV",
      },
      {
        type: "ul",
        items: [
          "Use window coverings during peak sun hours — UV rays cause fading and can bleach the finish",
          "Consider UV-filtering window film for south-facing rooms",
          "Run AC or a dehumidifier if humidity rises above 55% (rare in Kelowna, but possible in monsoon periods)",
          "Rearrange furniture and rugs periodically to even out sun exposure",
        ],
      },
      {
        type: "h2",
        text: "Daily and Weekly Cleaning",
      },
      {
        type: "p",
        text: "Dirt and grit are the number one enemy of hardwood finishes — they act like sandpaper underfoot. Here's the right cleaning routine:",
      },
      {
        type: "ul",
        items: [
          "Daily: Sweep or dust-mop with a microfiber mop — traps grit without scratching",
          "Weekly: Vacuum with a hard-floor attachment (no beater bar)",
          "Monthly: Damp mop with a hardwood-specific cleaner (Bona, Pallmann, etc.) — never a wet mop",
          "Never: Steam mops, vinegar, Murphy's Oil Soap, or any product not designed for polyurethane-finished hardwood",
        ],
      },
      {
        type: "h2",
        text: "Dealing with Scratches and Dents",
      },
      {
        type: "p",
        text: "Minor surface scratches can often be addressed with a touch-up marker or wax fill stick matched to your floor's color. Deeper scratches or dents typically require professional screening and recoating — a process where the top layer of finish is lightly abraded and a new finish coat is applied. This is far cheaper than full sanding and refinishing.",
      },
      {
        type: "p",
        text: "Most solid hardwood floors can be fully sanded and refinished 4–6 times over their lifetime. Engineered hardwood can usually be refinished once, depending on the veneer thickness.",
      },
      {
        type: "h2",
        text: "Preventive Measures That Matter",
      },
      {
        type: "ul",
        items: [
          "Felt pads on all furniture legs — replace them when they wear through",
          "Entry mats at every door to capture grit before it reaches the floor",
          "No high heels on hardwood — concentrated point pressure causes dents",
          "Keep pet nails trimmed",
          "Use plywood or Masonite panels when moving heavy appliances across the floor",
        ],
      },
      {
        type: "cta",
        text: "Have questions about caring for your specific hardwood species or finish? Our team at the Kelowna showroom can help — we know these floors and this climate.",
      },
    ],
  },
  {
    slug: "best-basement-flooring-kelowna",
    title: "The Best Flooring for Kelowna Basements",
    excerpt:
      "Basements require special consideration — moisture, temperature fluctuations, and comfort all factor in. Here's what our experts recommend for Kelowna homes.",
    category: "Room Guide",
    readTime: "6 min read",
    date: "Jan 2026",
    img: "/assets/images/showroom-08.webp",
    focal: "center 50%",
    metaDescription:
      "What's the best flooring for a Kelowna basement? Expert recommendations covering moisture, comfort, and budget — from luxury vinyl plank to carpet and engineered hardwood.",
    content: [
      {
        type: "intro",
        text: "Basement flooring is one of the trickiest decisions in any home renovation. Unlike above-grade rooms, basements present unique challenges: ground moisture wicking up through concrete, temperature swings, and the occasional (or not-so-occasional) water intrusion. Get it wrong and you're tearing it all out within a few years. Here's what actually works.",
      },
      {
        type: "h2",
        text: "The Basement Challenge: Moisture",
      },
      {
        type: "p",
        text: "Even finished, dry-looking concrete slabs emit moisture vapor. This is a natural process called moisture vapor transmission (MVT), and it happens in virtually every concrete floor in the Okanagan. Before choosing flooring, do a basic moisture test: tape a piece of plastic sheeting to your concrete slab, seal all four edges, and leave it for 48–72 hours. If you see condensation on the underside, you have meaningful moisture to deal with.",
      },
      {
        type: "tip",
        text: "Pro Tip: For a more precise measurement, ask us about calcium chloride moisture tests — these give you a number (lbs/1000 sq ft/24hrs) that tells you exactly what products are safe to install.",
      },
      {
        type: "h2",
        text: "#1 Pick: Luxury Vinyl Plank (LVP)",
      },
      {
        type: "p",
        text: "LVP is the best all-around basement flooring for Kelowna homes. It's 100% waterproof, installs as a floating floor (no glue to concrete required), handles temperature swings well, and looks fantastic. If water does get in — from a sump pump failure, heavy rain, or a plumbing issue — LVP can often be dried out and reinstalled.",
      },
      {
        type: "ul",
        items: [
          "100% waterproof core — handles moisture vapor and flooding",
          "Floating installation — no bonding to slab required",
          "Softer and warmer underfoot than tile",
          "Wide style selection — wood-look, stone-look, and more",
          "Can be installed over minor floor imperfections",
        ],
      },
      {
        type: "p",
        text: "For basements, choose LVP with a minimum 6 mil wear layer for residential use, or 12 mil if the basement will see heavy use. Look for products rated for below-grade installation — not all LVP is approved for basement use, so always check the manufacturer's specifications.",
      },
      {
        type: "h2",
        text: "#2 Pick: Carpet with Moisture Barrier Underpad",
      },
      {
        type: "p",
        text: "Carpet is the warmest and most comfortable basement flooring option — and it's often the most budget-friendly. The key is using a closed-cell foam underpad (rather than traditional open-cell foam) that acts as a moisture barrier. Closed-cell pads don't absorb water and won't grow mold.",
      },
      {
        type: "p",
        text: "For families using the basement as a rec room, playroom, or home theatre, carpet is hard to beat for comfort. Just ensure your basement has no active moisture issues before installing — carpet is forgiving of vapor transmission with the right pad, but not of flooding.",
      },
      {
        type: "h2",
        text: "#3 Pick: Engineered Hardwood",
      },
      {
        type: "p",
        text: "Engineered hardwood can work in a Kelowna basement, but with caveats. Because it has a real wood veneer on top, it's more dimensionally stable than solid hardwood — but it's not waterproof. It should only be installed in dry, conditioned basements with low moisture vapor readings.",
      },
      {
        type: "p",
        text: "If your basement is consistently dry and you want the warmth and prestige of real wood, engineered hardwood is a viable option. Use a glue-down or floating installation method — never nail-down on a concrete slab.",
      },
      {
        type: "h2",
        text: "What to Avoid in Basements",
      },
      {
        type: "ul",
        items: [
          "Solid hardwood — will cup, gap, and buckle from moisture vapor",
          "Standard laminate — HDF core swells when wet; irreparable damage",
          "Ceramic/porcelain tile — technically fine for moisture, but cold, hard, and unforgiving; also prone to cracking if the slab shifts",
          "Hardwood-look laminates without a moisture barrier underpad",
        ],
      },
      {
        type: "h2",
        text: "Subfloor Considerations",
      },
      {
        type: "p",
        text: "A raised subfloor system (like DRIcore or Barricade) creates an air gap between the concrete and your flooring. This is especially valuable if you have any moisture concerns. These systems add about 1.5\" to your floor height but dramatically reduce the risk of moisture-related flooring failure.",
      },
      {
        type: "cta",
        text: "Not sure what your basement moisture levels are? Come into our showroom at Unit 16, 830 McCurdy Place — we can walk you through the testing process and recommend the right products for your specific situation.",
      },
    ],
  },
  {
    slug: "carpet-buying-guide",
    title: "Carpet Buying Guide: Pile Height, Fibre & More",
    excerpt:
      "Not all carpet is created equal. From pile height to fibre type to density ratings — here's everything you need to know before choosing carpet for your home.",
    category: "Buying Guide",
    readTime: "7 min read",
    date: "Dec 2025",
    img: "/assets/images/showroom-10.webp",
    focal: "center 40%",
    metaDescription:
      "Complete carpet buying guide — pile height, fibre types, density ratings, and what to look for. Expert advice from Kelowna Flooring Superstore to help you choose the right carpet.",
    content: [
      {
        type: "intro",
        text: "Carpet is one of those products that looks simple from the outside but has a surprising amount of technical depth once you start shopping. Walk into our showroom and you'll find options ranging from $1.50 to $15+ per square foot — and the difference isn't just thickness. This guide breaks down what actually matters so you can make a smart purchase.",
      },
      {
        type: "h2",
        text: "Fibre Type: The Most Important Decision",
      },
      {
        type: "h3",
        text: "Nylon",
      },
      {
        type: "p",
        text: "Nylon is the gold standard for carpet fibre. It's the most durable, bounces back best after foot traffic (called resilience), and holds dye well for vibrant, lasting color. It costs more than polyester but will outlast it significantly in high-traffic areas. If you have kids, dogs, or a busy household — nylon is almost always worth the extra cost.",
      },
      {
        type: "h3",
        text: "Polyester (PET)",
      },
      {
        type: "p",
        text: "Polyester carpets are extremely soft — often softer than nylon — and are inherently stain-resistant because the fibre is non-porous. They're a great choice for bedrooms or low-traffic areas where softness matters more than durability. The trade-off: polyester mats down under heavy foot traffic faster than nylon and can look worn sooner.",
      },
      {
        type: "h3",
        text: "Triexta (SmartStrand, Sorona)",
      },
      {
        type: "p",
        text: "Triexta is a newer fibre that sits between nylon and polyester — durability close to nylon, softness close to polyester, with outstanding built-in stain resistance. Mohawk's SmartStrand is the most well-known brand. It's a premium option that's become very popular for family homes.",
      },
      {
        type: "h3",
        text: "Wool",
      },
      {
        type: "p",
        text: "Wool is the natural, luxury option. It's soft, durable, flame-resistant, and naturally regulates humidity. It's also significantly more expensive — expect to pay $8–$20/sq ft for quality wool carpet. It requires professional cleaning and is sensitive to certain cleaning chemicals.",
      },
      {
        type: "h2",
        text: "Pile Style: How It Looks and Wears",
      },
      {
        type: "ul",
        items: [
          "Saxony/plush: Dense, smooth, formal look — shows footprints and vacuum marks easily",
          "Frieze (twisted): Tightly twisted fibres with a casual look — very good at hiding footprints",
          "Textured cut pile: Multi-level cut pile that hides traffic patterns well — the most popular residential style",
          "Berber (loop pile): Loops not cut — very durable, great for basements and rec rooms; avoid with pets as claws can snag",
          "Cut-and-loop: Combines cut and looped fibres for patterns — good traffic hiding, stylish",
        ],
      },
      {
        type: "h2",
        text: "Face Weight and Density: What the Numbers Mean",
      },
      {
        type: "p",
        text: "Face weight is the weight of the carpet fibre per square yard (in ounces). More is generally better, but it's only meaningful when combined with density. A carpet with 40 oz face weight and high density will outlast a 60 oz carpet with low density.",
      },
      {
        type: "p",
        text: "Density is calculated by multiplying face weight by 36, then dividing by pile height. A density rating above 2,000 is good for residential; above 3,000 is excellent. Ask to see this number when shopping — good manufacturers publish it.",
      },
      {
        type: "tip",
        text: "Pro Tip: The 'thumb test' — press your thumb hard into the carpet. If you can easily feel the backing, the carpet is too sparse for heavy-traffic areas.",
      },
      {
        type: "h2",
        text: "Underpad: Don't Skip This",
      },
      {
        type: "p",
        text: "The underpad (underlay) dramatically affects how your carpet feels and how long it lasts. A quality underpad adds cushioning, insulation, and absorbs impact so the carpet fibre doesn't wear as quickly. For residential carpet, 8 lb rebond foam at 7/16\" thickness is a solid standard choice. Don't let a contractor install cheap thin pad to save money — it's false economy.",
      },
      {
        type: "h2",
        text: "Matching Carpet to Room",
      },
      {
        type: "ul",
        items: [
          "Master bedroom: Plush or frieze in polyester or nylon — softness is priority",
          "Kids' rooms: Nylon or triexta textured cut pile — durability and stain resistance",
          "Living room: Textured cut pile or frieze in nylon — traffic hiding, durability",
          "Basement: Berber or frieze in nylon with moisture-barrier pad",
          "Stairs: Dense nylon cut pile — high wear area, needs durability",
        ],
      },
      {
        type: "cta",
        text: "Our showroom has over 200 carpet samples across every category. Bring in a photo of your room and our team will help narrow it down to the right pile, fibre, and colour for your home.",
      },
    ],
  },
  {
    slug: "natural-stone-tile-guide",
    title: "Natural Stone Tile: Marble, Travertine, or Granite?",
    excerpt:
      "Natural stone adds unmatched elegance to any space, but each type has unique characteristics. We explain the differences and help you choose the right stone.",
    category: "Tile & Stone",
    readTime: "5 min read",
    date: "Nov 2025",
    img: "/assets/images/showroom-07.webp",
    focal: "center 50%",
    metaDescription:
      "Marble vs travertine vs granite tile — which natural stone is right for your home? Expert guide from Kelowna Flooring Superstore covering durability, maintenance, and best applications.",
    content: [
      {
        type: "intro",
        text: "Natural stone tile brings something manufactured products simply can't replicate: genuine geological character. Every slab is unique, shaped over millions of years, and no two installations look exactly alike. But natural stone also demands more from its owners — it requires sealing, specific cleaning products, and an honest assessment of where it can and can't go. Here's how to navigate the options.",
      },
      {
        type: "h2",
        text: "Marble: The Classic Luxury Choice",
      },
      {
        type: "p",
        text: "Marble is calcite-based limestone that's been recrystallized under heat and pressure. The result is a dense, elegant stone with distinctive veining that ranges from subtle to dramatic. Carrara, Calacatta, and Statuario are the most sought-after varieties.",
      },
      {
        type: "ul",
        items: [
          "Hardness: Mohs 3–4 (relatively soft for stone — scratches and etches more easily than granite)",
          "Best for: Master bathrooms, powder rooms, fireplace surrounds, feature walls",
          "Not ideal for: Kitchen floors (acid etching from citrus, coffee, wine), high-traffic hallways",
          "Maintenance: Seal every 6–12 months; clean with pH-neutral stone cleaner only",
          "Cost: Mid to high — $8–$25+/sq ft depending on origin and variety",
        ],
      },
      {
        type: "tip",
        text: "Important: Marble is calcium carbonate — acids etch the surface permanently. Drop a lemon on it and you'll see a dull spot. Use pH-neutral cleaners only and seal religiously.",
      },
      {
        type: "h2",
        text: "Travertine: Warm, Natural, Timeless",
      },
      {
        type: "p",
        text: "Travertine is a form of limestone deposited by mineral springs. Its distinctive look — warm, earthy tones with natural pitting and texture — has been used in architecture since ancient Rome. It has a warmth that polished marble and granite lack.",
      },
      {
        type: "ul",
        items: [
          "Hardness: Mohs 3–4 (similar softness to marble)",
          "Best for: Bathrooms, spa-style master suites, Mediterranean-style kitchens, patios",
          "Natural pitting: Unfilled travertine has natural voids that add character; filled travertine has a smoother surface",
          "Maintenance: Seal every 6–12 months; avoid acidic cleaners",
          "Cost: $5–$18/sq ft — often more affordable than marble",
        ],
      },
      {
        type: "h2",
        text: "Granite: The Durable Workhorse",
      },
      {
        type: "p",
        text: "Granite is an igneous rock, formed from cooled magma. It's harder and more resistant than marble or travertine — which is why it's so popular for kitchen countertops. As flooring, it's an exceptional choice for high-traffic areas.",
      },
      {
        type: "ul",
        items: [
          "Hardness: Mohs 6–7 (very hard — resists scratching and etching)",
          "Best for: Kitchen floors, entryways, commercial spaces, high-traffic areas",
          "Finish options: Polished (formal, slippery when wet), honed (matte, better grip), flamed/brushed (textured, most slip-resistant)",
          "Maintenance: Seal once a year; tolerates most cleaning products; very forgiving",
          "Cost: $6–$20/sq ft",
        ],
      },
      {
        type: "h2",
        text: "Slate: The Rustic Contender",
      },
      {
        type: "p",
        text: "Slate is a metamorphic rock with a naturally cleft, textured surface. It's slip-resistant, extremely durable, and has a striking natural aesthetic that suits modern, rustic, and industrial-style homes. Its natural texture means it doesn't require sealing as frequently as other stone types.",
      },
      {
        type: "h2",
        text: "Comparing the Options",
      },
      {
        type: "ul",
        items: [
          "Most elegant: Marble (Calacatta, Statuario)",
          "Most durable: Granite",
          "Most forgiving to maintain: Granite",
          "Most warm and natural: Travertine",
          "Best for wet areas: Slate (most slip-resistant), or honed granite",
          "Most budget-friendly: Travertine, slate",
        ],
      },
      {
        type: "h2",
        text: "Installation Considerations",
      },
      {
        type: "p",
        text: "Natural stone is heavy — ensure your subfloor can handle the load. It requires a flat, solid substrate and professional installation to prevent cracking. Grout selection matters too: epoxy grout is much easier to maintain in wet areas and around stone. Always use a grout that complements your stone's natural coloration.",
      },
      {
        type: "cta",
        text: "We carry a curated selection of natural stone tile at our Kelowna showroom. Come in and feel the difference between finishes and varieties — photos don't do natural stone justice.",
      },
    ],
  },
  {
    slug: "flooring-trends-2026",
    title: "Top Flooring Trends for Kelowna Homes in 2026",
    excerpt:
      "From wide-plank hardwood to patterned tile and ultra-realistic LVP — discover the flooring trends our designers are seeing in Kelowna homes this year.",
    category: "Trends",
    readTime: "4 min read",
    date: "Oct 2025",
    img: "/assets/images/hero-oak.webp",
    focal: "center 40%",
    metaDescription:
      "Top flooring trends for 2026 — wide plank hardwood, warm wood tones, large format tile, realistic LVP, and more. See what Kelowna homeowners are choosing at Kelowna Flooring Superstore.",
    content: [
      {
        type: "intro",
        text: "Each year we see distinct shifts in what homeowners are choosing when they come into our Kelowna showroom. 2026 is shaping up to be a year defined by warmth, authenticity, and scale — bigger planks, warmer tones, and flooring that feels genuinely luxurious rather than trying to hide what it is. Here's what's resonating with our customers.",
      },
      {
        type: "h2",
        text: "1. Wide Plank Everything",
      },
      {
        type: "p",
        text: "The plank-width trend has been building for years, but 2026 is seeing it reach new heights. Five-inch planks used to be considered wide; now customers are asking for 7\", 9\", even 12\" widths. This applies to hardwood, engineered hardwood, and LVP equally.",
      },
      {
        type: "p",
        text: "Wide planks make spaces feel larger and more open. They showcase the wood grain beautifully and reduce the number of seams visible in a room. If you're renovating an open-plan main floor, a 7–9\" wide plank in a light to mid-tone wood is one of the most universally stunning choices you can make.",
      },
      {
        type: "h2",
        text: "2. Warm Wood Tones Are Back",
      },
      {
        type: "p",
        text: "The cool grey wood-look trend dominated for nearly a decade, and while it still has its place, 2026 customers are returning to warmth. Walnut, cognac oak, honey, amber, and warm brown tones are what we're selling most. These tones work beautifully with the natural light in Okanagan homes and complement the popular warm-white and greige interior palettes.",
      },
      {
        type: "tip",
        text: "Design Tip: Warm-toned floors pair beautifully with white oak cabinetry, warm white walls, and matte black hardware — one of the most popular Kelowna kitchen combos right now.",
      },
      {
        type: "h2",
        text: "3. Large Format Tile",
      },
      {
        type: "p",
        text: "In tile, bigger is better in 2026. 24×24\" tiles have replaced 12×12\" as the standard, and we're seeing increasing interest in 32×32\" and even 48×48\" large-format porcelain slabs for kitchen floors and feature walls. Large format tiles have fewer grout lines, making spaces feel cleaner and more expansive.",
      },
      {
        type: "p",
        text: "Porcelain tile in concrete, stone, and terrazzo looks is particularly popular — the realistic digital printing technology available today is extraordinary.",
      },
      {
        type: "h2",
        text: "4. Ultra-Realistic Luxury Vinyl Plank",
      },
      {
        type: "p",
        text: "LVP technology has advanced to the point where some products genuinely fool the eye. Embossed-in-register (EIR) technology synchronizes the texture with the printed grain pattern, so the texture of the plank matches what you see. Paired with realistic color variation and longer plank formats, modern LVP is almost indistinguishable from engineered hardwood at a fraction of the price.",
      },
      {
        type: "h2",
        text: "5. Matte and Textured Finishes",
      },
      {
        type: "p",
        text: "High-gloss floors have nearly disappeared from residential design. In 2026, matte, brushed, and wire-brushed finishes dominate hardwood. These finishes hide scratches better, don't show dust and footprints as readily, and feel more authentically natural. Satin finishes (25–35 sheen) are the sweet spot for most homeowners.",
      },
      {
        type: "h2",
        text: "6. Mixing Materials",
      },
      {
        type: "p",
        text: "Open-plan homes are increasingly using material transitions as a design element rather than trying to hide them. Wood-look LVP in the main living area flowing into large-format tile in the kitchen, defined by a clean metal transition strip — this kind of intentional material mixing is sophisticated and practical.",
      },
      {
        type: "h2",
        text: "7. Sustainable and Natural Materials",
      },
      {
        type: "p",
        text: "Environmental consciousness is influencing flooring choices in Kelowna. FSC-certified hardwood, cork, bamboo, and linoleum (which is made from linseed oil, not synthetic materials) are all seeing renewed interest. Customers increasingly want to know where their materials come from and what they're made of.",
      },
      {
        type: "cta",
        text: "Want to see 2026's top trends in person? Our showroom is updated regularly with new arrivals. Come in and we'll show you what's resonating with Kelowna homeowners this season.",
      },
    ],
  },
];

export const categoryColors: Record<string, string> = {
  "Buying Guide": "bg-primary",
  "Maintenance": "bg-[#243566]",
  "Room Guide": "bg-charcoal",
  "Tile & Stone": "bg-[#2d4a7a]",
  "Trends": "bg-accent",
};
