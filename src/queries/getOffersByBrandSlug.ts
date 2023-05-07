import type {
  GetSoldOffersByBrandSlugQuery,
  GetSoldOffersByBrandSlugQueryVariables,
} from "@/generated/graphql";
import {
  GetSoldOffersByBrandSlugDocument,
  OfferOrderByInput,
} from "@/generated/graphql";
import { client } from "@/lib/apollo";

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
}: Args) =>
  await client.query<
    GetSoldOffersByBrandSlugQuery,
    GetSoldOffersByBrandSlugQueryVariables
  >({
    query: GetSoldOffersByBrandSlugDocument,
    variables: { slug: brandSlug, sold, first, skip, order },
  });
