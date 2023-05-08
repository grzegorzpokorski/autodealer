import { GetOffersSlugsDocument } from "@/generated/graphql";
import { fetcher } from "@/lib/fetcher";

export const getOffersSlugs = async () => {
  const result = await fetcher({
    query: GetOffersSlugsDocument,
    variables: {},
  });

  return result.offers.map((offer) => offer.slug);
};
