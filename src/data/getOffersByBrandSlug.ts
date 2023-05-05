import type {
  GetSoldOffersByBrandSlugQuery,
  GetSoldOffersByBrandSlugQueryVariables,
} from "@/generated/graphql";
import { GetSoldOffersByBrandSlugDocument } from "@/generated/graphql";
import { client } from "@/lib/apollo";

type Args = {
  brandSlug: string;
  sold: boolean;
};

export const getOffersByBrandSlug = async ({ brandSlug, sold }: Args) => {
  return await client.query<
    GetSoldOffersByBrandSlugQuery,
    GetSoldOffersByBrandSlugQueryVariables
  >({
    query: GetSoldOffersByBrandSlugDocument,
    variables: { slug: brandSlug, sold },
  });
};
