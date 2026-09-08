export const GOOGLE_PLACE_ID = "ChIJ2cepJDu32JQRz4HochLGGYE";

export type GoogleReview = {
  id: string;
  author: string;
  photo: string | null;
  rating: number;
  text: string;
  when: string;
  url: string;
};

export type GoogleReviewsPayload = {
  rating: number;
  total: number;
  mapsUrl: string;
  reviews: GoogleReview[];
};

type PlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: Array<{
    name?: string;
    rating?: number;
    relativePublishTimeDescription?: string;
    publishTime?: string;
    googleMapsUri?: string;
    text?: { text?: string };
    originalText?: { text?: string };
    authorAttribution?: { displayName?: string; photoUri?: string };
  }>;
};

const dateFmt = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

function formatWhen(publishTime?: string, fallback?: string): string {
  if (publishTime) {
    const date = new Date(publishTime);
    if (!Number.isNaN(date.getTime())) {
      return dateFmt.format(date).replace(".", "");
    }
  }
  return fallback ?? "";
}

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";

const FIELD_MASK = [
  "rating",
  "userRatingCount",
  "googleMapsUri",
  "reviews",
].join(",");

export async function fetchGoogleReviews(): Promise<GoogleReviewsPayload> {
  const lovableApiKey = process.env.LOVABLE_API_KEY;
  const mapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!lovableApiKey || !mapsApiKey) {
    throw new Error("Google Maps connector credentials are not configured");
  }

  const response = await fetch(
    `${GATEWAY_URL}/places/v1/places/${GOOGLE_PLACE_ID}?languageCode=pt-BR`,
    {
      headers: {
        Authorization: `Bearer ${lovableApiKey}`,
        "X-Connection-Api-Key": mapsApiKey,
        "X-Goog-FieldMask": FIELD_MASK,
      },
    },
  );

  if (response.status === 403) {
    const details: Array<{ reason?: string }> =
      ((await response.json()) as { error?: { details?: Array<{ reason?: string }> } })
        ?.error?.details ?? [];
    const reason = details.find((d) => d.reason)?.reason;
    if (reason === "API_KEY_HTTP_REFERRER_BLOCKED") {
      throw new Error(
        'Google Maps server key is referrer-restricted. In Google Cloud Console, set the server key\'s application restrictions to "None" or "IP addresses".',
      );
    }
    if (reason === "API_KEY_SERVICE_BLOCKED") {
      throw new Error(
        "Google Maps server key does not allow the Places API. Add it to the server key's allowed-APIs list in Google Cloud Console.",
      );
    }
    throw new Error("Google Maps request was denied (403).");
  }

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Google Places request failed [${response.status}]: ${errorBody}`);
    throw new Error(`Google Places request failed [${response.status}]`);
  }

  const data = (await response.json()) as PlacesResponse;

  const reviews: GoogleReview[] = (data.reviews ?? [])
    .map((review, index) => {
      const text = review.text?.text ?? review.originalText?.text ?? "";
      return {
        id: review.name ?? `review-${index}`,
        author: review.authorAttribution?.displayName ?? "Cliente Google",
        photo: review.authorAttribution?.photoUri ?? null,
        rating: review.rating ?? 5,
        text,
        when: formatWhen(review.publishTime, review.relativePublishTimeDescription),
        url: review.googleMapsUri ?? data.googleMapsUri ?? "",
      };
    })
    .filter((review) => review.text.length > 0);

  return {
    rating: data.rating ?? 5,
    total: data.userRatingCount ?? 0,
    mapsUrl:
      data.googleMapsUri ??
      `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`,
    reviews,
  };
}
