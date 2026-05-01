import { fetchGoogleReviews } from "@/lib/google-reviews";

export default async function LocalBusinessSchema() {
  const live = await fetchGoogleReviews();

  const schema = {
    "@context": "https://schema.org",
    "@type": "FlooringStore",
    name: "Kelowna Flooring Superstore",
    image: "https://www.kelownaflooringsuperstore.com/logo.webp",
    logo: "https://www.kelownaflooringsuperstore.com/logo.webp",
    url: "https://www.kelownaflooringsuperstore.com",
    telephone: "+12508607847",
    email: "kfssteam@gmail.com",
    description:
      "Kelowna's premier flooring store. In-stock laminate, hardwood, carpet, vinyl plank, tile & more. Expert installation across the Central Okanagan.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 16, 830 McCurdy Place",
      addressLocality: "Kelowna",
      addressRegion: "BC",
      postalCode: "V1X 8C8",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.8885,
      longitude: -119.4395,
    },
    hasMap: "https://www.google.com/maps/search/?api=1&query=Kelowna+Flooring+Superstore+Unit+16+830+McCurdy+Place+Kelowna+BC",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday"],
        opens: "09:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Debit",
    areaServed: [
      { "@type": "City", name: "Kelowna" },
      { "@type": "City", name: "West Kelowna" },
      { "@type": "City", name: "Lake Country" },
      { "@type": "City", name: "Peachland" },
      { "@type": "City", name: "Summerland" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (live.rating ?? 4.9).toString(),
      reviewCount: (live.totalReviews ?? 150).toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: (live.reviews.length > 0
      ? live.reviews.slice(0, 5).map((r) => ({
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: r.rating.toString(), bestRating: "5" },
          author: { "@type": "Person", name: r.authorName },
          datePublished: r.publishTime,
          reviewBody: r.text.slice(0, 500),
        }))
      : [
          {
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            author: { "@type": "Person", name: "Rob Hutchings" },
            reviewBody:
              "We recently purchased carpet for three rooms in our house through Kelowna Flooring Superstore. From the minute we entered their showroom, the whole experience was seamless and pleasant.",
          },
          {
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            author: { "@type": "Person", name: "Jenni I." },
            reviewBody:
              "We had a fantastic experience with Kelowna Flooring Superstore. Shaun and Selina were incredibly helpful when we were choosing our flooring.",
          },
        ]),
    sameAs: [
      "https://www.facebook.com/kelownaflooringsuperstore",
      "https://www.instagram.com/kelownaflooringsuperstore/",
      "https://www.youtube.com/@KelownaFlooringSuperstore-w3d",
    ],
    knowsAbout: [
      "Flooring installation",
      "Laminate flooring",
      "Hardwood flooring",
      "Engineered hardwood",
      "Luxury vinyl plank",
      "Carpet",
      "Carpet tile",
      "Ceramic tile",
      "Porcelain tile",
      "Linoleum sheet flooring",
      "Area rugs",
      "Commercial flooring",
      "Subfloor preparation",
      "Old floor removal",
      "Stair flooring",
      "In-floor heating compatible flooring",
      "Flooring financing available",
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpet Installation Kelowna" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hardwood Installation Kelowna" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Vinyl Plank Installation Kelowna" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laminate Installation Kelowna" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tile Installation Kelowna" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring Installation West Kelowna" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring Installation Lake Country" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring Installation Peachland" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring Installation Summerland" } },
    ],
    brand: [
      "Mohawk","Shaw Floors","Beaulieu Canada","Grandeur","Opus Floors","Vidar Flooring",
      "TORLYS","FloorTek","Fuzion Flooring","Twelve Oaks","Home's Pros","Kennedy Floorings",
      "DreamWeaver","Godfrey Hirst","Daltile","Ames Tile","Aladdin Commercial","Cosmos Carpet","Affiliated Weavers",
    ],
    slogan: "In-stock flooring for life — installed right the first time.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
