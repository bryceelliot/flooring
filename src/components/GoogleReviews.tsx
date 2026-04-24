import { fetchGoogleReviews, type GoogleReview } from "@/lib/google-reviews";
import GoogleReviewsClient from "@/components/GoogleReviewsClient";

/* Local fallback reviews — used when the Places API key isn't configured
 * or the Google endpoint errors. Keeps the section live. */
const FALLBACK: GoogleReview[] = [
  {
    authorName: "Rob Hutchings",
    authorInitials: "RH",
    rating: 5,
    relativeTime: "January 2025",
    text:
      "We recently purchased carpet for three rooms in our house through Kelowna Flooring Superstore. From the minute we entered their showroom, the whole experience was seamless and pleasant. Both Selina and Shaun were extremely helpful and knowledgeable. Cory was punctual, cordial, and excellent at his job.",
    color: "#1B2A52",
  },
  {
    authorName: "Jenni I.",
    authorInitials: "JI",
    rating: 5,
    relativeTime: "February 2025",
    text:
      "We had a fantastic experience with Kelowna Flooring Superstore. Shaun and Selina were incredibly helpful. The installation was done by Jessie and Clarke, and they truly went above and beyond. Workmanship was excellent and the finished result looks amazing.",
    color: "#E8423C",
  },
  {
    authorName: "Thomas",
    authorInitials: "TH",
    rating: 5,
    relativeTime: "March 2025",
    text:
      "From start to finish, the entire carpet installation experience was seamless. The team was incredibly responsive at every step. A special shout-out to Cory, the installer — professional, efficient, and clearly skilled. Highly recommend.",
    color: "#243566",
  },
  {
    authorName: "Michelle K.",
    authorInitials: "MK",
    rating: 5,
    relativeTime: "December 2024",
    text:
      "Absolutely love our new hardwood floors! The team helped us pick the perfect colour and style for our open-concept living area. The installation was flawless and completed in one day. Our home looks completely transformed.",
    color: "#2a7a5a",
  },
  {
    authorName: "David & Carol P.",
    authorInitials: "DC",
    rating: 5,
    relativeTime: "November 2024",
    text:
      "We replaced all the flooring in our home — hardwood in the main areas and carpet in the bedrooms. The whole process was stress-free. Selina helped us coordinate everything and the crew was respectful of our home. The price was very competitive and the quality is outstanding.",
    color: "#7a3a2a",
  },
  {
    authorName: "Linda S.",
    authorInitials: "LS",
    rating: 5,
    relativeTime: "October 2024",
    text:
      "As a senior on a budget I was nervous about the whole process. The staff were patient, never rushed me, and explained everything clearly. The vinyl plank they recommended is beautiful and so easy to clean. The installer was wonderful — very careful and tidy.",
    color: "#5a2a7a",
  },
];

export default async function GoogleReviews() {
  const data = await fetchGoogleReviews();
  const reviews = data.reviews.length > 0 ? data.reviews : FALLBACK;
  const rating = data.rating ?? 4.9;
  const total = data.totalReviews;
  const allReviewsUrl =
    data.googleMapsUri ||
    "https://www.google.com/search?q=Kelowna+Flooring+Superstore+reviews#mpd=~6968423193531731233/customers/reviews";

  return (
    <GoogleReviewsClient
      reviews={reviews}
      rating={rating}
      total={total ?? null}
      allReviewsUrl={allReviewsUrl}
    />
  );
}
