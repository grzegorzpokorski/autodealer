import type { GetBrandsOfSoldOffersQuery } from "@/generated/graphql";
import { GetBrandsOfSoldOffersDocument } from "@/generated/graphql";
import { client } from "@/lib/apollo";

export const getBrandsOfSoldOffers = async () => {
  return await client.query<GetBrandsOfSoldOffersQuery>({
    query: GetBrandsOfSoldOffersDocument,
  });
};
