import { createServerFn } from "@tanstack/react-start";
import { queryOptions } from "@tanstack/react-query";

import type { GoogleReviewsPayload } from "./google-reviews.server";

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReviewsPayload | null> => {
    try {
      const { fetchGoogleReviews } = await import("./google-reviews.server");
      return await fetchGoogleReviews();
    } catch (error) {
      console.error("Failed to load Google reviews", error);
      return null;
    }
  },
);

export const googleReviewsQueryOptions = queryOptions({
  queryKey: ["google-reviews"],
  queryFn: () => getGoogleReviews(),
  staleTime: 1000 * 60 * 60,
});
