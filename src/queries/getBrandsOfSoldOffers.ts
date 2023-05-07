import { fetcher } from "@/lib/fetcher";
import { GetBrandsOfSoldOffersDocument } from "@/generated/graphql";

export const getBrandsOfSoldOffers = async () => {
  const result = await fetcher({
    query: GetBrandsOfSoldOffersDocument,
    variables: {},
  });

  return result.brands;
};
