/**
 * Google Places API (New) reviews fetcher.
 *
 * Requires two env vars:
 *   GOOGLE_PLACES_API_KEY  — API key with "Places API (New)" enabled
 *   GOOGLE_PLACE_ID        — your Kelowna Flooring Superstore Place ID
 *
 * The Places API returns up to 5 reviews per call (Google's cap). We ask for
 * "most_relevant" ordering so highest-signal reviews land on the homepage.
 *
 * This runs server-side only (secret key). Build output is revalidated every
 * 6 hours so fresh reviews show up without needing a redeploy.
 */

export interface GoogleReview {
  authorName: string;
  authorInitials: string;
  rating: number;
  text: string;
  relativeTime: string; // e.g. "2 weeks ago"
  publishTime?: string; // ISO date string from API
  profilePhotoUrl?: string;
  color: string; // deterministic avatar bg color
}

export interface GoogleReviewsResult {
  rating: number | null;
  totalReviews: number | null;
  googleMapsUri: string | null;
  reviews: GoogleReview[];
}

const PALETTE = ["#1B2A52", "#E8423C", "#243566", "#2a7a5a", "#7a3a2a", "#5a2a7a"];

function pickColor(seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return PALETTE[h % PALETTE.length];
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "GR";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export async function fetchGoogleReviews(): Promise<GoogleReviewsResult> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) {
    return { rating: null, totalReviews: null, googleMapsUri: null, reviews: [] };
  }

  const url = `https://places.googleapis.com/v1/places/${placeId}`;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask":
          "rating,userRatingCount,googleMapsUri,reviews.rating,reviews.originalText,reviews.text,reviews.relativePublishTimeDescription,reviews.publishTime,reviews.authorAttribution",
      },
      next: { revalidate: 21600 }, // 6h
    });
    if (!res.ok) {
      return { rating: null, totalReviews: null, googleMapsUri: null, reviews: [] };
    }
    type RawReview = {
      authorAttribution?: { displayName?: string; photoUri?: string };
      rating?: number;
      originalText?: { text?: string };
      text?: { text?: string };
      relativePublishTimeDescription?: string;
      publishTime?: string;
    };
    type RawPayload = {
      rating?: number;
      userRatingCount?: number;
      googleMapsUri?: string;
      reviews?: RawReview[];
    };
    const data = (await res.json()) as RawPayload;
    const reviews: GoogleReview[] = (data.reviews ?? []).map((r) => {
      const name = r.authorAttribution?.displayName ?? "Google Reviewer";
      return {
        authorName: name,
        authorInitials: initials(name),
        rating: r.rating ?? 5,
        text: r.originalText?.text ?? r.text?.text ?? "",
        relativeTime: r.relativePublishTimeDescription ?? "",
        publishTime: r.publishTime,
        profilePhotoUrl: r.authorAttribution?.photoUri,
        color: pickColor(name),
      };
    });
    /* Sort newest first when we have a publishTime. */
    reviews.sort((a, b) => {
      const at = a.publishTime ? Date.parse(a.publishTime) : 0;
      const bt = b.publishTime ? Date.parse(b.publishTime) : 0;
      return bt - at;
    });
    return {
      rating: data.rating ?? null,
      totalReviews: data.userRatingCount ?? null,
      googleMapsUri: data.googleMapsUri ?? null,
      reviews,
    };
  } catch {
    return { rating: null, totalReviews: null, googleMapsUri: null, reviews: [] };
  }
}
