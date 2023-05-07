import {
  GetSoldOffersByBrandSlugDocument,
  OfferOrderByInput,
} from "@/generated/graphql";
import { fetcher } from "@/lib/fetcher";

type Args = {
  brandSlug: string;
  sold: boolean;
  first: number;
  skip: number;
  order?: OfferOrderByInput;
};

export const getOffersByBrandSlug = async ({
  brandSlug,
  sold,
  first,
  skip,
  order = OfferOrderByInput.PriceDesc,
}: Args) => {
  const result = await fetcher({
    query: GetSoldOffersByBrandSlugDocument,
    variables: { slug: brandSlug, sold, first, skip, order },
  });

  return {
    offers: result.offers,
    offersCount: result.offersConnection.aggregate.count,
  };
};
