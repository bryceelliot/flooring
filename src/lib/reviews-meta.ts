/**
 * Single source of truth for our Google review count + rating.
 *
 * These are the STATIC fallback numbers shown when the live Google Places API
 * isn't configured (or for spots like the hero and landing-page copy that
 * aren't wired to the live fetch). When the API IS configured, the reviews
 * section and JSON-LD schema use the live `userRatingCount` / `rating`
 * instead — see src/lib/google-reviews.ts.
 *
 * To bump the displayed count between deploys, edit these two numbers.
 */
export const REVIEW_COUNT = 149;
export const REVIEW_RATING = 4.9;
