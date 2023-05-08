import type { OfferOrderByInput } from "@/generated/graphql";
import { fetcher } from "@/lib/fetcher";
import { GetOffersDocument } from "@/generated/graphql";

type Args = {
  sold: boolean;
  first: number;
  skip: number;
  order?: OfferOrderByInput;
};
export const getOffers = async ({ first, skip, sold, order }: Args) => {
  const result = await fetcher({
    query: GetOffersDocument,
    variables: { first, order, skip, sold },
  });

  return {
    offers: result.offers,
    offersCount: result.offersConnection.aggregate.count,
  };
};
